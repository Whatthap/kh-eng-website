from flask import Flask, render_template, request, redirect, url_for, session, jsonify, send_from_directory
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
from datetime import datetime
import os

app = Flask(__name__)
app.secret_key = os.environ.get("SECRET_KEY", "dev-secret-key")
app.config["SQLALCHEMY_DATABASE_URI"] = os.environ.get("DATABASE_URL", "sqlite:///teachers.db")
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config["OWNER_EMAIL"] = os.environ.get("OWNER_EMAIL", "whatthap@gmail.com").strip().lower()

db = SQLAlchemy(app)

class Teacher(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(200), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    progress = db.Column(db.Text, default="{}")
    role = db.Column(db.String(20), default="teacher")

    def set_password(self, password):
        self.password_hash = generate_password_hash(password, method="pbkdf2:sha256")

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)

with app.app_context():
    db.create_all()


def is_owner_email(email: str) -> bool:
    return bool(app.config["OWNER_EMAIL"]) and email == app.config["OWNER_EMAIL"]


@app.route("/")
def index():
    if "teacher_id" not in session:
        return render_template("login.html")

    teacher = Teacher.query.get(session["teacher_id"])
    if not teacher:
        session.pop("teacher_id", None)
        return render_template("login.html")

    if is_owner_email(teacher.email) or teacher.role == "admin":
        return redirect(url_for("dashboard"))
    return redirect(url_for("study"))


@app.route("/study")
def study():
    if "teacher_id" not in session:
        return redirect(url_for("login"))

    teacher = Teacher.query.get(session["teacher_id"])
    if not teacher:
        session.pop("teacher_id", None)
        return redirect(url_for("login"))

    if is_owner_email(teacher.email) or teacher.role == "admin":
        return redirect(url_for("dashboard"))

    return send_from_directory(app.root_path, "index.html")

@app.route("/register", methods=["GET", "POST"])
def register():
    if request.method == "POST":
        name = request.form.get("name", "").strip()
        email = request.form.get("email", "").strip().lower()
        password = request.form.get("password", "")

        if not name or not email or not password:
            return render_template("register.html", error="Please fill in all fields")

        if Teacher.query.filter_by(email=email).first():
            return render_template("register.html", error="Email already exists")

        role = "admin" if is_owner_email(email) or Teacher.query.count() == 0 else "teacher"
        teacher = Teacher(name=name, email=email, role=role)
        teacher.set_password(password)
        db.session.add(teacher)
        db.session.commit()
        session["teacher_id"] = teacher.id
        if is_owner_email(email) or role == "admin":
            return redirect(url_for("dashboard"))
        return redirect(url_for("study"))

    return render_template("register.html")

@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        email = request.form.get("email", "").strip().lower()
        password = request.form.get("password", "")
        teacher = Teacher.query.filter_by(email=email).first()

        if teacher and teacher.check_password(password):
            if is_owner_email(email) or not Teacher.query.filter_by(role="admin").first():
                teacher.role = "admin"
                db.session.commit()
            session["teacher_id"] = teacher.id
            if is_owner_email(email) or teacher.role == "admin":
                return redirect(url_for("dashboard"))
            return redirect(url_for("study"))

        return render_template("login.html", error="Invalid email or password")

    return render_template("login.html")

@app.route("/logout")
def logout():
    session.pop("teacher_id", None)
    return redirect(url_for("index"))

@app.route("/dashboard")
def dashboard():
    if "teacher_id" not in session:
        return redirect(url_for("login"))

    teacher = Teacher.query.get(session["teacher_id"])
    if not teacher:
        return redirect(url_for("logout"))

    if teacher.role != "admin" and not is_owner_email(teacher.email):
        return redirect(url_for("study"))

    teachers = Teacher.query.order_by(Teacher.created_at.desc()).all()
    return render_template("dashboard.html", teacher=teacher, teachers=teachers)

@app.route("/api/progress", methods=["POST"])
def save_progress():
    if "teacher_id" not in session:
        return jsonify({"success": False, "message": "Please log in first"}), 401

    teacher = Teacher.query.get(session["teacher_id"])
    if not teacher:
        return jsonify({"success": False, "message": "Teacher not found"}), 404

    data = request.get_json(silent=True) or {}
    teacher.progress = str(data)
    db.session.commit()
    return jsonify({"success": True, "message": "Progress saved"})

@app.route("/api/progress")
def get_progress():
    if "teacher_id" not in session:
        return jsonify({"success": False, "message": "Please log in first"}), 401

    teacher = Teacher.query.get(session["teacher_id"])
    if not teacher:
        return jsonify({"success": False, "message": "Teacher not found"}), 404

    return jsonify({"success": True, "progress": teacher.progress})


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=8000)
