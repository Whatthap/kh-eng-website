let currentSlide = 0;
let totalSlides = 0;
let unlockedSlide = 0;
const slidesContainer = document.getElementById("slides-container");
const searchInput = document.getElementById("vocab-search");
const searchResults = document.getElementById("search-results");
const themeToggle = document.getElementById("theme-toggle");
const backToTopButton = document.getElementById("back-to-top");
const progressLabel = document.getElementById("lesson-progress-label");
const accountBtn = document.getElementById("account-btn");
const accountStatus = document.getElementById("account-status");
const accountModal = document.getElementById("account-modal");
const closeAccountModalBtn = document.getElementById("close-account-modal");
const accountForm = document.getElementById("account-form");
const accountNameInput = document.getElementById("account-name");
const accountEmailInput = document.getElementById("account-email");
const accountMessage = document.getElementById("account-message");
const accountDashboard = document.getElementById("account-dashboard");
const slideDayMap = [];
const unlockNotice = document.createElement("div");
unlockNotice.id = "unlock-notice";
unlockNotice.className =
  "fixed left-1/2 top-20 z-[70] hidden -translate-x-1/2 rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-white shadow-lg";
unlockNotice.textContent =
  "Complete the current lesson to unlock the next one.";
document.body.appendChild(unlockNotice);
const teacherAccountsKey = "teacher-accounts";
const currentTeacherKey = "current-teacher";
let teacherAccounts = [];
let currentTeacher = null;

function speak(text) {
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 0.85;
    window.speechSynthesis.speak(utterance);
  }
}

function createAudioBtn(text) {
  return `<button onclick="speak('${text.replace(/'/g, "\\'")}')" class="audio-btn inline-flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 hover:bg-indigo-200 text-indigo-600 ml-2" title="Listen"><i data-lucide="volume-2" style="width:16px;height:16px"></i></button>`;
}

function setTheme(isDark) {
  document.body.classList.toggle("dark", isDark);
  if (themeToggle) {
    const icon = themeToggle.querySelector("i");
    if (icon) {
      icon.setAttribute("data-lucide", isDark ? "sun" : "moon");
      lucide.createIcons();
    }
  }
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

function updateProgressLabel() {
  if (!progressLabel) return;
  const day = slideDayMap[currentSlide] || 1;
  progressLabel.textContent =
    day === 0 ? "Start lesson" : `Day ${day} in progress`;
}

function loadTeacherAccounts() {
  try {
    return JSON.parse(localStorage.getItem(teacherAccountsKey)) || [];
  } catch {
    return [];
  }
}

function saveTeacherAccounts() {
  localStorage.setItem(teacherAccountsKey, JSON.stringify(teacherAccounts));
}

function loadCurrentTeacher() {
  try {
    return JSON.parse(localStorage.getItem(currentTeacherKey)) || null;
  } catch {
    return null;
  }
}

function persistCurrentTeacher() {
  if (currentTeacher) {
    localStorage.setItem(currentTeacherKey, JSON.stringify(currentTeacher));
  } else {
    localStorage.removeItem(currentTeacherKey);
  }
}

function normalizeEmail(email) {
  return (email || "").trim().toLowerCase();
}

function saveTeacherProgress() {
  if (!currentTeacher || !teacherAccounts.length) return;

  const day = slideDayMap[currentSlide] || 0;
  const existingProgress = currentTeacher.progress || {};
  const completedDays = Array.isArray(existingProgress.completedDays)
    ? existingProgress.completedDays
    : [];
  const nextCompletedDays =
    day > 0 ? Array.from(new Set([...completedDays, day])) : completedDays;

  currentTeacher = {
    ...currentTeacher,
    progress: {
      ...existingProgress,
      lastSlide: currentSlide,
      completedDays: nextCompletedDays,
      lastUpdated: new Date().toISOString(),
    },
  };

  const index = teacherAccounts.findIndex(
    (teacher) => teacher.id === currentTeacher.id,
  );
  if (index >= 0) {
    teacherAccounts[index] = currentTeacher;
    saveTeacherAccounts();
    persistCurrentTeacher();
    updateAccountUI();
  }

  if (window.location.pathname.startsWith("/study")) {
    fetch("/api/sync-progress", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "same-origin",
      body: JSON.stringify(currentTeacher.progress),
    }).catch(() => {});
  }
}

function renderAccountDashboard() {
  if (!accountDashboard) return;

  if (!currentTeacher) {
    accountDashboard.innerHTML = `
      <div class="rounded-2xl bg-indigo-50 p-3 text-sm text-indigo-700">
        No account is active yet. Save your email to create a teacher profile and keep your progress.
      </div>
    `;
    return;
  }

  const completedDays = currentTeacher.progress?.completedDays || [];
  const completedCount = completedDays.length;
  const currentDay = completedDays.length ? Math.max(...completedDays) : 1;
  const progressPercent = totalSlides
    ? Math.round(((currentSlide + 1) / totalSlides) * 100)
    : 0;

  accountDashboard.innerHTML = `
    <div class="space-y-3">
      <div class="rounded-2xl bg-indigo-50 p-3">
        <p class="text-sm font-semibold text-indigo-700">${currentTeacher.name}</p>
        <p class="text-xs text-indigo-600">${currentTeacher.email}</p>
        <div class="mt-2 h-2 overflow-hidden rounded-full bg-white/70">
          <div class="h-full rounded-full bg-indigo-600" style="width: ${progressPercent}%"></div>
        </div>
        <p class="mt-2 text-xs text-indigo-700">Current progress: ${progressPercent}% • ${completedCount} day(s) completed</p>
      </div>
      <div class="rounded-2xl border border-gray-200 p-3">
        <p class="text-sm font-semibold text-gray-800">Completed days</p>
        <div class="mt-2 flex flex-wrap gap-2">
          ${
            completedDays.length
              ? completedDays
                  .sort((a, b) => a - b)
                  .map(
                    (day) =>
                      `<span class="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-medium text-emerald-700">Day ${day}</span>`,
                  )
                  .join("")
              : '<span class="text-sm text-gray-500">No days completed yet.</span>'
          }
        </div>
      </div>
      <div class="rounded-2xl border border-gray-200 p-3">
        <p class="text-sm font-semibold text-gray-800">Saved teachers</p>
        <div class="mt-2 space-y-2">
          ${teacherAccounts.map((teacher) => `<div class="account-card"><strong>${teacher.name}</strong><div class="mt-1 text-xs text-gray-500">${teacher.email}</div><div class="mt-1 text-xs text-indigo-600">${(teacher.progress?.completedDays || []).length} day(s) • Last day ${teacher.progress?.completedDays?.length ? Math.max(...teacher.progress.completedDays) : 0}</div></div>`).join("")}
        </div>
      </div>
    </div>
  `;
}

function updateAccountUI() {
  if (accountStatus) {
    accountStatus.textContent = currentTeacher
      ? currentTeacher.name.split(" ")[0]
      : "Guest";
  }
  if (accountBtn) {
    accountBtn.textContent = currentTeacher ? "My Account" : "Teacher Account";
  }
  renderAccountDashboard();
}

function openAccountModal() {
  if (accountModal) {
    accountModal.classList.remove("hidden");
    accountModal.classList.add("flex");
    updateAccountUI();
  }
}

function closeAccountModal() {
  if (accountModal) {
    accountModal.classList.add("hidden");
    accountModal.classList.remove("flex");
  }
}

function handleAccountSubmit(event) {
  event.preventDefault();
  const name = (accountNameInput?.value || "").trim();
  const email = normalizeEmail(accountEmailInput?.value || "");

  if (!email) {
    if (accountMessage) {
      accountMessage.textContent = "Please enter a valid email address.";
    }
    return;
  }

  const existingTeacher = teacherAccounts.find(
    (teacher) => teacher.email === email,
  );

  if (existingTeacher) {
    existingTeacher.name = name || existingTeacher.name;
    currentTeacher = existingTeacher;
    if (accountMessage) {
      accountMessage.textContent = `Welcome back, ${currentTeacher.name}!`;
    }
  } else {
    currentTeacher = {
      id: window.crypto?.randomUUID?.() || `teacher-${Date.now()}`,
      name: name || email.split("@")[0],
      email,
      createdAt: new Date().toISOString(),
      progress: {
        lastSlide: 0,
        completedDays: [],
      },
    };
    teacherAccounts.push(currentTeacher);
    if (accountMessage) {
      accountMessage.textContent = `Account created for ${currentTeacher.name}.`;
    }
  }

  saveTeacherAccounts();
  persistCurrentTeacher();
  updateAccountUI();
  if (accountNameInput) accountNameInput.value = currentTeacher.name;
  if (accountEmailInput) accountEmailInput.value = currentTeacher.email;
}

function initializeAccountSystem() {
  teacherAccounts = loadTeacherAccounts();
  currentTeacher = loadCurrentTeacher();
  updateAccountUI();

  if (accountBtn) {
    accountBtn.addEventListener("click", openAccountModal);
  }
  if (closeAccountModalBtn) {
    closeAccountModalBtn.addEventListener("click", closeAccountModal);
  }
  if (accountModal) {
    accountModal.addEventListener("click", (event) => {
      if (event.target === accountModal) {
        closeAccountModal();
      }
    });
  }
  if (accountForm) {
    accountForm.addEventListener("submit", handleAccountSubmit);
  }
}

function buildSlides() {
  const slides = [];

  slides.push(
    `<div class="slide text-center py-12"><img src="https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1280" alt="Colorful classroom" class="w-full h-64 object-cover rounded-2xl mb-8 shadow-lg"><h1 class="heading-font text-3xl md:text-5xl font-black text-indigo-900 mb-4">English–Khmer Teacher<br>Language Exchange</h1><p class="text-lg text-gray-600 max-w-2xl mx-auto">A 20-Day Practical Course for Foreign Teachers in Cambodian International Schools</p><div class="mt-8 grid gap-3 md:grid-cols-3 text-left max-w-3xl mx-auto"><div class="rounded-2xl border border-indigo-100 bg-white/80 p-4 shadow-sm"><h3 class="font-bold text-indigo-700 mb-1">📘 Learn by day</h3><p class="text-sm text-gray-600">Each day focuses on one useful classroom topic so the lessons feel simple to follow.</p></div><div class="rounded-2xl border border-emerald-100 bg-white/80 p-4 shadow-sm"><h3 class="font-bold text-emerald-700 mb-1">🎧 Practice aloud</h3><p class="text-sm text-gray-600">Audio buttons help learners hear phrases and build pronunciation confidence.</p></div><div class="rounded-2xl border border-amber-100 bg-white/80 p-4 shadow-sm"><h3 class="font-bold text-amber-700 mb-1">🧠 Review quickly</h3><p class="text-sm text-gray-600">The quick jump menu lets users move easily between lessons and review sections.</p></div></div><p class="mt-6 text-sm text-gray-400">Click Next to begin Day 1 →</p></div>`,
  );
  slideDayMap.push(0);

  days.forEach((day, di) => {
    slides.push(
      `<div class="slide"><div class="flex items-center gap-3 mb-6"><span class="bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full">DAY ${di + 1}</span><h2 class="heading-font text-2xl md:text-3xl font-bold text-gray-900">${day.title}</h2></div><img src="${day.image}" alt="${day.imageAlt}" class="w-full h-48 object-cover rounded-xl mb-6 shadow"><h3 class="font-bold text-lg text-indigo-800 mb-3">🎯 Lesson Objectives</h3><ul class="space-y-2">${day.objectives.map((o) => `<li class="flex items-start gap-2"><span class="text-green-500 mt-1">✓</span><span>${o}</span></li>`).join("")}</ul><div class="mt-6 p-4 bg-amber-50 rounded-xl border border-amber-200"><h4 class="font-bold text-amber-800 mb-2">🔥 Warm-up Activity</h4><p class="text-amber-900">${day.warmup}</p></div></div>`,
    );
    slideDayMap.push(di + 1);

    for (let i = 0; i < day.vocab.length; i += 4) {
      const chunk = day.vocab.slice(i, i + 4);
      slides.push(
        `<div class="slide"><div class="flex items-center gap-3 mb-4"><span class="bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full">DAY ${di + 1}</span><h3 class="font-bold text-lg text-gray-800">📚 Vocabulary (${Math.floor(i / 4) + 1}/${Math.ceil(day.vocab.length / 4)})</h3></div><div class="grid gap-4">${chunk.map((v) => `<div class="vocab-card bg-white rounded-xl p-4 border border-gray-100 shadow-sm"><div class="flex items-center justify-between mb-2"><span class="font-bold text-lg text-gray-900">${v.en}</span>${createAudioBtn(v.en)}</div><div class="text-indigo-600 font-semibold text-base mb-2">🇰🇭 ${v.km}</div><div class="text-sm text-gray-500 bg-gray-50 rounded-lg p-2"><span class="font-medium text-gray-700">${v.ex}</span>${createAudioBtn(v.ex)}<br><span class="text-indigo-500">${v.exKm}</span></div></div>`).join("")}</div></div>`,
      );
      slideDayMap.push(di + 1);
    }

    slides.push(
      `<div class="slide"><div class="flex items-center gap-3 mb-4"><span class="bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full">DAY ${di + 1}</span><h3 class="font-bold text-lg text-gray-800">💬 Classroom Dialogue</h3></div><div class="space-y-3">${day.dialogue.map((d, idx) => `<div class="speech-bubble ${idx % 2 === 1 ? "right" : ""}"><div class="font-bold text-xs text-gray-500 mb-1">${d.speaker}</div><div class="font-medium text-gray-900">${d.text} ${createAudioBtn(d.text)}</div><div class="text-indigo-600 text-sm mt-1">${d.km}</div></div>`).join("")}</div></div>`,
    );
    slideDayMap.push(di + 1);

    slides.push(
      `<div class="slide"><div class="flex items-center gap-3 mb-4"><span class="bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full">DAY ${di + 1}</span><h3 class="font-bold text-lg text-gray-800">🎭 Activities</h3></div><div class="space-y-4"><div class="p-4 bg-purple-50 rounded-xl border border-purple-200"><h4 class="font-bold text-purple-800 mb-2">🎭 Role-play</h4><p class="text-purple-900 text-sm">${day.roleplay}</p></div><div class="p-4 bg-blue-50 rounded-xl border border-blue-200"><h4 class="font-bold text-blue-800 mb-2">👥 Pair Work</h4><p class="text-blue-900 text-sm whitespace-pre-line">${day.pairwork}</p></div><div class="p-4 bg-green-50 rounded-xl border border-green-200"><h4 class="font-bold text-green-800 mb-2">👨‍👩‍👧‍👦 Group Activity</h4><p class="text-green-900 text-sm">${day.groupActivity}</p></div><div class="p-4 bg-orange-50 rounded-xl border border-orange-200"><h4 class="font-bold text-orange-800 mb-2">🏫 Real-life Scenario</h4><p class="text-orange-900 text-sm">${day.scenario}</p></div></div></div>`,
    );
    slideDayMap.push(di + 1);

    slides.push(
      `<div class="slide"><div class="flex items-center gap-3 mb-4"><span class="bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full">DAY ${di + 1}</span><h3 class="font-bold text-lg text-gray-800">📝 Seatwork & Quiz</h3></div><p class="text-sm text-gray-500 mb-4">Click the blurred answers to reveal them!</p><div class="space-y-3">${day.seatwork.map((q, qi) => `<div class="p-3 bg-white rounded-lg border border-gray-100 shadow-sm"><p class="font-medium text-gray-800 text-sm mb-2">${qi + 1}. ${q.q}</p><span class="quiz-answer inline-block px-3 py-1 bg-green-100 text-green-800 rounded font-semibold text-sm cursor-pointer" onclick="this.classList.toggle('revealed')">${q.a}</span></div>`).join("")}</div></div>`,
    );
    slideDayMap.push(di + 1);

    slides.push(
      `<div class="slide"><div class="flex items-center gap-3 mb-4"><span class="bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full">DAY ${di + 1}</span><h3 class="font-bold text-lg text-gray-800">✅ Summary</h3></div><div class="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100"><ul class="space-y-3">${day.summary.map((s) => `<li class="flex items-start gap-3"><span class="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">✓</span><span class="text-gray-800">${s}</span></li>`).join("")}</ul></div>${di < days.length - 1 ? `<p class="mt-6 text-center text-gray-400 text-sm">Next: Day ${di + 2} →</p>` : ""}</div>`,
    );
    slideDayMap.push(di + 1);
  });

  slides.push(
    `<div class="slide text-center py-8"><div class="max-w-lg mx-auto bg-gradient-to-br from-yellow-50 via-white to-indigo-50 rounded-2xl border-4 border-yellow-400 p-8 shadow-xl"><div class="text-5xl mb-4">🎓</div><h2 class="heading-font text-2xl md:text-3xl font-black text-indigo-900 mb-3">Congratulations!</h2><p class="text-gray-700 mb-4">You have completed the</p><p class="heading-font text-xl font-bold text-indigo-700 mb-4">English–Khmer Teacher<br>Language Exchange Course</p><div class="border-t border-gray-200 pt-4 mt-4"><p class="text-gray-500 text-sm">20 Days • 200+ Vocabulary Words • Professional Communication</p></div><img src="https://images.pexels.com/photos/8177922/pexels-photo-8177922.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Certificate celebration" class="w-full h-40 object-cover rounded-xl mt-6"></div></div>`,
  );
  slideDayMap.push(days.length);

  slidesContainer.innerHTML = slides.join("");
  totalSlides = slides.length;

  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  setTheme(savedTheme ? savedTheme === "dark" : prefersDark);
  goToSlide(0);
  lucide.createIcons();
}

function goToSlide(idx) {
  const allSlides = slidesContainer.querySelectorAll(".slide");
  if (!allSlides.length) return;

  const targetIndex = Math.max(0, Math.min(idx, totalSlides - 1));
  const isMovingBack = targetIndex < currentSlide;
  const isNextStep = targetIndex === currentSlide + 1;
  const canAdvance = isMovingBack || targetIndex <= unlockedSlide || isNextStep;

  if (!canAdvance) {
    unlockNotice.classList.remove("hidden");
    setTimeout(() => unlockNotice.classList.add("hidden"), 1800);
    return;
  }

  allSlides.forEach((s) => s.classList.remove("active"));
  currentSlide = targetIndex;
  unlockedSlide = Math.max(unlockedSlide, currentSlide);
  allSlides[currentSlide].classList.add("active");
  saveTeacherProgress();
  updateUI();
  lucide.createIcons();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function nextSlide() {
  goToSlide(currentSlide + 1);
}

function prevSlide() {
  goToSlide(currentSlide - 1);
}

function updateUI() {
  document.getElementById("prev-btn").disabled = currentSlide === 0;
  document.getElementById("next-btn").disabled =
    currentSlide === totalSlides - 1;
  document.getElementById("slide-counter").textContent =
    `${currentSlide + 1} / ${totalSlides}`;
  document.getElementById("progress-bar").style.width =
    `${((currentSlide + 1) / totalSlides) * 100}%`;
  updateProgressLabel();
}

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") nextSlide();
  if (e.key === "ArrowLeft") prevSlide();
});

document.getElementById("prev-btn").addEventListener("click", prevSlide);
document.getElementById("next-btn").addEventListener("click", nextSlide);

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    setTheme(!document.body.classList.contains("dark"));
  });
}

if (backToTopButton) {
  window.addEventListener("scroll", () => {
    backToTopButton.classList.toggle("hidden", window.scrollY < 300);
  });
  backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function searchVocabulary(query) {
  if (!searchResults || !searchInput) return;

  const term = query.trim().toLowerCase();
  if (!term) {
    searchResults.innerHTML = "";
    return;
  }

  const matches = [];
  days.forEach((day, dayIndex) => {
    day.vocab.forEach((item) => {
      const haystack =
        `${item.en} ${item.km} ${item.ex} ${item.exKm}`.toLowerCase();
      if (haystack.includes(term)) {
        matches.push({
          day: dayIndex + 1,
          title: item.en,
          translation: item.km,
          example: item.ex,
          exampleKm: item.exKm,
        });
      }
    });
  });

  if (!matches.length) {
    searchResults.innerHTML =
      '<div class="rounded-xl border border-dashed border-gray-200 bg-gray-50 p-3 text-sm text-gray-500">No matching vocabulary found.</div>';
    return;
  }

  searchResults.innerHTML = matches
    .slice(0, 6)
    .map(
      (item) => `
        <div class="search-result-card rounded-xl border border-gray-200 bg-white p-3 shadow-sm">
          <div class="flex items-center justify-between gap-2">
            <p class="font-semibold text-gray-800">${item.title}</p>
            <span class="rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-medium text-indigo-700">Day ${item.day}</span>
          </div>
          <p class="mt-1 text-sm text-indigo-700">${item.translation}</p>
          <p class="mt-1 text-xs text-gray-500">${item.example}</p>
          <p class="text-xs text-gray-400">${item.exampleKm}</p>
        </div>
      `,
    )
    .join("");
}

if (searchInput) {
  searchInput.addEventListener("input", (e) =>
    searchVocabulary(e.target.value),
  );
}

initializeAccountSystem();
buildSlides();
