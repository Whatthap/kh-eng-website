const days = [
      {
        title: "Day 1: Greetings and Introductions",
        image: "https://images.pexels.com/photos/8197543/pexels-photo-8197543.jpeg?auto=compress&cs=tinysrgb&w=800",
        imageAlt: "Teachers greeting each other",
        objectives: ["Learn basic Khmer greetings", "Introduce yourself in Khmer", "Use polite expressions"],
        warmup: "Greet 3 colleagues using a different greeting each time. Try using body language too!",
        vocab: [
          { en: "Hello", km: "Susadei", ex: "Hello, how are you today?", exKm: "Susadei, neak sok sabay te?" },
          { en: "Formal Hello", km: "Chum Reap Suor", ex: "Formal hello, Principal.", exKm: "Chum Reap Suor, Lok Neyok Sala." },
          { en: "Good Morning", km: "Arun Suosdei", ex: "Good morning, students!", exKm: "Arun Suosdei, koun sas!" },
          { en: "Good Afternoon", km: "Tivea Suosdei", ex: "Good afternoon, teacher.", exKm: "Tivea Suosdei, Lok Kru." },
          { en: "Good Evening", km: "Saay Suosdei", ex: "Good evening, everyone.", exKm: "Saay Suosdei, teang os knea." },
          { en: "Goodbye", km: "Lea Haeuy", ex: "Goodbye, see you tomorrow.", exKm: "Lea Haeuy, chob knea thngai saek." },
          { en: "Thank you", km: "Aw Kun", ex: "Thank you very much.", exKm: "Aw Kun Chraen." },
          { en: "You're welcome", km: "Som Min Ei Te", ex: "You're welcome, no problem.", exKm: "Som Min Ei Te." },
          { en: "Excuse me", km: "Som To", ex: "Excuse me, where is the office?", exKm: "Som To, kariyalay nov na?" },
          { en: "Yes (male)", km: "Baat", ex: "Yes, I understand.", exKm: "Baat, knyom yol." },
          { en: "Yes (female)", km: "Jaa", ex: "Yes, I will do it.", exKm: "Jaa, knyom nung tveu." },
          { en: "No", km: "Ot Te", ex: "No, thank you.", exKm: "Ot Te, aw kun." },
          { en: "How are you?", km: "Neak Sok Sabay Te?", ex: "How are you today?", exKm: "Neak Sok Sabay Te thngai nih?" },
          { en: "I am fine.", km: "Knyom Sok Sabay.", ex: "I am fine, thank you.", exKm: "Knyom Sok Sabay, aw kun." },
          { en: "My name is...", km: "Knyom Chhmuah...", ex: "My name is Sarah.", exKm: "Knyom Chhmuah Sarah." },
          { en: "Nice to meet you.", km: "Rikreay Del Ban Skol Neak.", ex: "Nice to meet you, teacher.", exKm: "Rikreay Del Ban Skol Neak, Lok Kru." }
        ],
        dialogue: [
          { speaker: "Teacher A", text: "Good morning! My name is Sarah.", km: "Arun Suosdei! Knyom Chhmuah Sarah." },
          { speaker: "Teacher B", text: "Hello! Nice to meet you. My name is Dara.", km: "Susadei! Rikreay Del Ban Skol Neak. Knyom Chhmuah Dara." },
          { speaker: "Teacher A", text: "How are you?", km: "Neak Sok Sabay Te?" },
          { speaker: "Teacher B", text: "I am fine, thank you. And you?", km: "Knyom Sok Sabay, aw kun. Choh neak vign?" },
          { speaker: "Teacher A", text: "I'm fine too. Goodbye!", km: "Knyom sok sabay dae. Lea Haeuy!" }
        ],
        roleplay: "Practice introducing yourself to a new colleague. Use at least 3 greetings and ask how they are.",
        pairwork: "Partner A: You are a new teacher. Introduce yourself.\nPartner B: Welcome the new teacher and introduce yourself back.",
        groupActivity: "Form groups of 4. Each person greets the group differently (formal, informal, morning, afternoon). Rotate!",
        scenario: "You arrive at school on your first day. Greet the security guard, the office staff, and your co-teacher using appropriate greetings.",
        seatwork: [
          { type: "fill", q: "Good morning in Khmer is: ___________", a: "Arun Suosdei" },
          { type: "fill", q: "Thank you in Khmer is: ___________", a: "Aw Kun" },
          { type: "fill", q: "'My name is...' in Khmer is: ___________", a: "Knyom Chhmuah..." },
          { type: "match", q: "Match: Goodbye → ?", a: "Lea Haeuy" },
          { type: "match", q: "Match: How are you? → ?", a: "Neak Sok Sabay Te?" }
        ],
        summary: ["Learned 16 essential greetings and polite expressions", "Practiced formal and informal introductions", "Used greetings in real school scenarios"]
      },
      {
        title: "Day 2: School Staff and Roles",
        image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
        imageAlt: "Diverse school staff team",
        objectives: ["Identify school staff roles in Khmer", "Ask and answer about people's roles", "Use polite titles"],
        warmup: "Draw the organizational chart of your school. How many roles can you name?",
        vocab: [
          { en: "Principal", km: "Neyok Sala", ex: "The principal is in the office.", exKm: "Neyok Sala nov knong kariyalay." },
          { en: "Vice Principal", km: "Aknak Neyok Sala", ex: "The vice principal is in a meeting.", exKm: "Aknak Neyok Sala knong prachiom." },
          { en: "Teacher", km: "Kru", ex: "She is a teacher.", exKm: "Koat chea kru." },
          { en: "Co-teacher", km: "Kru Cheamuoy", ex: "My co-teacher speaks Khmer.", exKm: "Kru Cheamuoy knyom cheh niyeay Khmer." },
          { en: "Department Head", km: "Prathean Phnek", ex: "The department head called a meeting.", exKm: "Prathean Phnek hav prachiom." },
          { en: "Cleaner", km: "Aknak Samat", ex: "The cleaner is very helpful.", exKm: "Aknak Samat chuoy ban chraen." },
          { en: "Security Guard", km: "Santisok", ex: "The security guard opens the gate.", exKm: "Santisok baek tvea." },
          { en: "Librarian", km: "Aknak Reaksa Bannalai", ex: "Ask the librarian for help.", exKm: "Som aknak reaksa bannalai chuoy." },
          { en: "Accountant", km: "Aknak Keu Luy", ex: "The accountant handles payroll.", exKm: "Aknak keu luy tveu banhchi brak khae." },
          { en: "Who is that?", km: "Neak Nung Chea Neak Na?", ex: "Who is that person over there?", exKm: "Neak nung chea neak na nov tee nuh?" },
          { en: "She is the teacher.", km: "Koat Chea Kru.", ex: "She is the English teacher.", exKm: "Koat chea kru pheasaa Angkles." }
        ],
        dialogue: [
          { speaker: "Teacher A", text: "Who is that?", km: "Neak nung chea neak na?" },
          { speaker: "Teacher B", text: "She is the vice principal.", km: "Koat chea aknak neyok sala." },
          { speaker: "Teacher A", text: "And the man by the gate?", km: "Choh boros nov chit tvea?" },
          { speaker: "Teacher B", text: "He is the security guard.", km: "Koat chea santisok." },
          { speaker: "Teacher A", text: "Thank you!", km: "Aw kun!" }
        ],
        roleplay: "Point to different staff members (or pictures) and ask 'Who is that?' Your partner answers with their role.",
        pairwork: "Partner A: Describe a staff member's role without saying their title.\nPartner B: Guess the role in Khmer.",
        groupActivity: "Create a 'School Staff Directory' poster with Khmer titles for each role in your school.",
        scenario: "A new teacher arrives and asks you about different people they see around school. Explain who each person is.",
        seatwork: [
          { type: "fill", q: "Principal in Khmer is: ___________", a: "Neyok Sala" },
          { type: "fill", q: "Teacher in Khmer is: ___________", a: "Kru" },
          { type: "match", q: "Match: Security Guard → ?", a: "Santisok" },
          { type: "match", q: "Match: Cleaner → ?", a: "Aknak Samat" },
          { type: "fill", q: "'Who is that?' in Khmer is: ___________", a: "Neak Nung Chea Neak Na?" }
        ],
        summary: ["Learned roles of school staff in Khmer", "Practiced asking and answering about people", "Used polite forms when referring to staff"]
      },
      {
        title: "Day 3: School Supplies",
        image: "https://images.pexels.com/photos/159519/back-to-school-paper-colored-702x336-159519.jpeg?auto=compress&cs=tinysrgb&w=800",
        imageAlt: "Colorful school supplies",
        objectives: ["Name common school supplies in Khmer", "Ask to borrow items", "Ask where things are located"],
        warmup: "Look at your desk. How many school supplies can you count? Try naming them!",
        vocab: [
          { en: "Pen", km: "Bic", ex: "I need a pen.", exKm: "Knyom trov kar bic." },
          { en: "Pencil", km: "Khmao Dai", ex: "The pencil is on the table.", exKm: "Khmao dai nov ler tok." },
          { en: "Book", km: "Sievphov", ex: "Open your book.", exKm: "Baek sievphov robos neak." },
          { en: "Notebook", km: "Sievphov Sorsa", ex: "Write in your notebook.", exKm: "Sorsa knong sievphov sorsa." },
          { en: "Eraser", km: "Chrolob", ex: "Can I use the eraser?", exKm: "Som prer chrolob ban te?" },
          { en: "Chair", km: "Kao Ei", ex: "Please sit on the chair.", exKm: "Som angkuy ler kao ei." },
          { en: "Table", km: "Tok", ex: "Put your bag under the table.", exKm: "Dak krabao krom tok." },
          { en: "Marker", km: "Pen Marker", ex: "The marker is red.", exKm: "Pen marker chea por kraham." },
          { en: "Whiteboard", km: "Kdaa Sor", ex: "Look at the whiteboard.", exKm: "Meul kdaa sor." },
          { en: "Scissors", km: "Kontrai", ex: "Be careful with scissors.", exKm: "Pranyat kontrai." },
          { en: "Can I borrow a pen?", km: "Som Khyi Bic Ban Te?", ex: "Can I borrow a pen, please?", exKm: "Som khyi bic ban te?" },
          { en: "Where is the book?", km: "Sievphov Nov Na?", ex: "Where is the English book?", exKm: "Sievphov Angkles nov na?" }
        ],
        dialogue: [
          { speaker: "Teacher A", text: "Excuse me, can I borrow a pen?", km: "Som to, som khyi bic ban te?" },
          { speaker: "Teacher B", text: "Yes, here you go.", km: "Baat, nih aeng." },
          { speaker: "Teacher A", text: "Thank you! Where is the notebook?", km: "Aw kun! Sievphov sorsa nov na?" },
          { speaker: "Teacher B", text: "It's on the table.", km: "Nov ler tok." },
          { speaker: "Teacher A", text: "Thank you very much!", km: "Aw kun chraen!" }
        ],
        roleplay: "Practice asking to borrow different school supplies from your partner. Use polite language!",
        pairwork: "Partner A: Hide a school supply. Say where it is in Khmer.\nPartner B: Find it based on the description.",
        groupActivity: "Scavenger hunt! Find 5 school supplies and label them with their Khmer names.",
        scenario: "You need supplies for class but your bag was left in the staff room. Ask colleagues to borrow what you need.",
        seatwork: [
          { type: "fill", q: "Pen in Khmer is: ___________", a: "Bic" },
          { type: "fill", q: "Chair in Khmer is: ___________", a: "Kao Ei" },
          { type: "match", q: "Match: Whiteboard → ?", a: "Kdaa Sor" },
          { type: "match", q: "Match: Eraser → ?", a: "Chrolob" },
          { type: "fill", q: "'Where is the book?' in Khmer is: ___________", a: "Sievphov Nov Na?" }
        ],
        summary: ["Named 12 common school supplies in Khmer", "Learned to ask to borrow items politely", "Practiced asking where things are"]
      },
      {
        title: "Day 4: Classroom Commands",
        image: "https://images.pexels.com/photos/5428012/pexels-photo-5428012.jpeg?auto=compress&cs=tinysrgb&w=800",
        imageAlt: "Teacher teaching with whiteboard",
        objectives: ["Give basic classroom instructions in Khmer", "Understand student responses", "Manage classroom activities"],
        warmup: "Think of 5 instructions you give every day. How would you say them without words?",
        vocab: [
          { en: "Stand up", km: "Chhor Laeng", ex: "Stand up, please.", exKm: "Som chhor laeng." },
          { en: "Sit down", km: "Angkuy", ex: "Please sit down.", exKm: "Som angkuy." },
          { en: "Open your book", km: "Baek Sievphov", ex: "Open your book to page 5.", exKm: "Baek sievphov tamnab bram." },
          { en: "Close your book", km: "Bot Sievphov", ex: "Close your book now.", exKm: "Bot sievphov elov nih." },
          { en: "Listen", km: "Sdab", ex: "Please listen carefully.", exKm: "Som sdab oy baan la-or." },
          { en: "Repeat", km: "Niyeay Tam", ex: "Repeat after me.", exKm: "Niyeay tam knyom." },
          { en: "Write", km: "Sorsa", ex: "Write your name.", exKm: "Sorsa chhmuah robos neak." },
          { en: "Read", km: "Aan", ex: "Read the sentence.", exKm: "Aan preyok nih." },
          { en: "Be quiet", km: "Sngat", ex: "Be quiet, please.", exKm: "Som sngat." },
          { en: "Raise your hand", km: "Luk Dai", ex: "Raise your hand to answer.", exKm: "Luk dai daeumbey chhloy." }
        ],
        dialogue: [
          { speaker: "Teacher", text: "Good morning! Please stand up.", km: "Arun Suosdei! Som chhor laeng." },
          { speaker: "Students", text: "Good morning, teacher!", km: "Arun Suosdei, Lok Kru!" },
          { speaker: "Teacher", text: "Sit down. Open your book.", km: "Angkuy. Baek sievphov." },
          { speaker: "Teacher", text: "Listen and repeat after me.", km: "Sdab haey niyeay tam knyom." },
          { speaker: "Students", text: "Yes, teacher.", km: "Baat, Lok Kru." }
        ],
        roleplay: "Take turns being the teacher. Give 5 commands in Khmer to your group.",
        pairwork: "Partner A: Give a command in Khmer.\nPartner B: Perform the action, then switch.",
        groupActivity: "Simon Says in Khmer! One person gives commands, others follow only if 'Som' (please) is said first.",
        scenario: "It's the start of class. Give your students a series of instructions to begin the lesson.",
        seatwork: [
          { type: "fill", q: "'Stand up' in Khmer is: ___________", a: "Chhor Laeng" },
          { type: "fill", q: "'Be quiet' in Khmer is: ___________", a: "Sngat" },
          { type: "match", q: "Match: Listen → ?", a: "Sdab" },
          { type: "match", q: "Match: Write → ?", a: "Sorsa" },
          { type: "fill", q: "'Read' in Khmer is: ___________", a: "Aan" }
        ],
        summary: ["Learned 10 essential classroom commands", "Practiced giving instructions in Khmer", "Played Simon Says to reinforce commands"]
      },
      {
        title: "Day 5: Numbers and Counting",
        image: "https://images.pexels.com/photos/5212320/pexels-photo-5212320.jpeg?auto=compress&cs=tinysrgb&w=800",
        imageAlt: "Teacher at blackboard",
        objectives: ["Count from 1 to 20 in Khmer", "Use numbers in classroom context", "Ask about quantities"],
        warmup: "Count all the students in your class. Try counting objects on your desk!",
        vocab: [
          { en: "One", km: "Muoy", ex: "One more time.", exKm: "Muoy dong tiet." },
          { en: "Two", km: "Pii", ex: "Two students.", exKm: "Koun sas pii neak." },
          { en: "Three", km: "Bei", ex: "Three books.", exKm: "Sievphov bei." },
          { en: "Four", km: "Buon", ex: "Four chairs.", exKm: "Kao ei buon." },
          { en: "Five", km: "Bram", ex: "Five minutes.", exKm: "Bram neatii." },
          { en: "Six", km: "Bram Muoy", ex: "Page six.", exKm: "Tamnab bram muoy." },
          { en: "Seven", km: "Bram Pii", ex: "Seven days.", exKm: "Bram pii thngai." },
          { en: "Eight", km: "Bram Bei", ex: "Eight o'clock.", exKm: "Maong bram bei." },
          { en: "Nine", km: "Bram Buon", ex: "Nine students.", exKm: "Koun sas bram buon neak." },
          { en: "Ten", km: "Dob", ex: "Ten pages.", exKm: "Dob tamnab." },
          { en: "How many?", km: "Ponman?", ex: "How many students?", exKm: "Koun sas ponman neak?" }
        ],
        dialogue: [
          { speaker: "Teacher A", text: "How many students today?", km: "Koun sas ponman neak thngai nih?" },
          { speaker: "Teacher B", text: "Ten students.", km: "Dob neak." },
          { speaker: "Teacher A", text: "Open to page five.", km: "Baek tamnab bram." },
          { speaker: "Teacher B", text: "Five more minutes.", km: "Bram neatii tiet." }
        ],
        roleplay: "Practice giving page numbers and counting students using Khmer numbers.",
        pairwork: "Partner A: Say a number in English.\nPartner B: Say it in Khmer. Then switch!",
        groupActivity: "Number relay race! Each group counts from 1-10 in Khmer as fast as possible.",
        scenario: "You're taking attendance and need to count students, then tell your co-teacher the number.",
        seatwork: [
          { type: "fill", q: "'Five' in Khmer is: ___________", a: "Bram" },
          { type: "fill", q: "'Ten' in Khmer is: ___________", a: "Dob" },
          { type: "match", q: "Match: Three → ?", a: "Bei" },
          { type: "match", q: "Match: Seven → ?", a: "Bram Pii" },
          { type: "fill", q: "'How many?' in Khmer is: ___________", a: "Ponman?" }
        ],
        summary: ["Counted from 1-10 in Khmer", "Used numbers in classroom contexts", "Practiced asking about quantities"]
      },
      {
        title: "Day 6: Days of the Week",
        image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
        imageAlt: "Teachers in a meeting",
        objectives: ["Name all days of the week in Khmer", "Discuss schedules", "Talk about when events happen"],
        warmup: "What day is today? What do you teach on different days?",
        vocab: [
          { en: "Monday", km: "Thngai Chan", ex: "The meeting is on Monday.", exKm: "Prachiom nov thngai Chan." },
          { en: "Tuesday", km: "Thngai Angkea", ex: "I teach on Tuesday.", exKm: "Knyom bongrien thngai Angkea." },
          { en: "Wednesday", km: "Thngai Bot", ex: "Wednesday is sports day.", exKm: "Thngai Bot chea thngai kila." },
          { en: "Thursday", km: "Thngai Prohoa", ex: "Thursday afternoon.", exKm: "Thngai Prohoa rosiel." },
          { en: "Friday", km: "Thngai Sok", ex: "See you on Friday.", exKm: "Chob knea thngai Sok." },
          { en: "Saturday", km: "Thngai Sao", ex: "No school on Saturday.", exKm: "Ot mien rien thngai Sao." },
          { en: "Sunday", km: "Thngai Atit", ex: "Sunday is a holiday.", exKm: "Thngai Atit chea thngai chhob samrak." },
          { en: "Today", km: "Thngai Nih", ex: "What day is today?", exKm: "Thngai nih chea thngai ey?" },
          { en: "Tomorrow", km: "Thngai Saek", ex: "See you tomorrow.", exKm: "Chob knea thngai saek." },
          { en: "Yesterday", km: "Thngai Msel Menh", ex: "Yesterday was Monday.", exKm: "Thngai msel menh chea thngai Chan." }
        ],
        dialogue: [
          { speaker: "Teacher A", text: "What day is the meeting?", km: "Prachiom nov thngai ey?" },
          { speaker: "Teacher B", text: "The meeting is on Wednesday.", km: "Prachiom nov thngai Bot." },
          { speaker: "Teacher A", text: "And the field trip?", km: "Choh damneu kaa nov thngai ey?" },
          { speaker: "Teacher B", text: "Friday.", km: "Thngai Sok." }
        ],
        roleplay: "Plan a school week together. Decide what happens on each day.",
        pairwork: "Partner A: Ask about an event.\nPartner B: Answer with the day in Khmer.",
        groupActivity: "Create a class schedule in Khmer for the whole week. Present it to the group!",
        scenario: "You need to coordinate with your co-teacher about the weekly schedule. Discuss which days you teach together.",
        seatwork: [
          { type: "fill", q: "'Monday' in Khmer is: ___________", a: "Thngai Chan" },
          { type: "fill", q: "'Friday' in Khmer is: ___________", a: "Thngai Sok" },
          { type: "match", q: "Match: Sunday → ?", a: "Thngai Atit" },
          { type: "match", q: "Match: Tomorrow → ?", a: "Thngai Saek" },
          { type: "fill", q: "'Today' in Khmer is: ___________", a: "Thngai Nih" }
        ],
        summary: ["Learned all 7 days of the week in Khmer", "Discussed schedules using day names", "Practiced talking about when events happen"]
      },
      {
        title: "Day 7: Time and Schedule",
        image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800",
        imageAlt: "Teacher in classroom",
        objectives: ["Tell time in Khmer", "Discuss daily school schedule", "Ask about class times"],
        warmup: "What time does your first class start? What time do you finish?",
        vocab: [
          { en: "What time?", km: "Maong Ponman?", ex: "What time is the class?", exKm: "Thnak rien maong ponman?" },
          { en: "O'clock", km: "Maong", ex: "It's 8 o'clock.", exKm: "Maong bram bei." },
          { en: "Morning", km: "Pel Preuk", ex: "Morning assembly.", exKm: "Prachiom pel preuk." },
          { en: "Afternoon", km: "Pel Rosiel", ex: "Afternoon class.", exKm: "Thnak rien pel rosiel." },
          { en: "Break time", km: "Pel Samrak", ex: "It's break time!", exKm: "Pel samrak haeuy!" },
          { en: "Lunch time", km: "Pel Bai Thngai", ex: "It's lunch time.", exKm: "Pel bai thngai haeuy." },
          { en: "Class starts", km: "Thnak Rien Chab Pdaem", ex: "Class starts at 8.", exKm: "Thnak rien chab pdaem maong bram bei." },
          { en: "Class ends", km: "Thnak Rien Chob", ex: "Class ends at 3.", exKm: "Thnak rien chob maong bei." },
          { en: "Late", km: "Yuet", ex: "I am late.", exKm: "Knyom yuet." },
          { en: "Early", km: "Muon", ex: "You are early.", exKm: "Neak mok muon." }
        ],
        dialogue: [
          { speaker: "Teacher A", text: "What time does class start?", km: "Thnak rien chab pdaem maong ponman?" },
          { speaker: "Teacher B", text: "Class starts at 8 o'clock.", km: "Thnak rien chab pdaem maong bram bei." },
          { speaker: "Teacher A", text: "When is lunch?", km: "Pel bai thngai maong ponman?" },
          { speaker: "Teacher B", text: "Lunch is at 12.", km: "Pel bai thngai maong dob pii." }
        ],
        roleplay: "Ask and answer about your daily schedule times in Khmer.",
        pairwork: "Partner A: Ask what time different activities are.\nPartner B: Answer with times in Khmer.",
        groupActivity: "Create a visual daily schedule poster with all times written in Khmer.",
        scenario: "You need to find out the schedule for the day because there's a change. Ask office staff about new times.",
        seatwork: [
          { type: "fill", q: "'What time?' in Khmer is: ___________", a: "Maong Ponman?" },
          { type: "fill", q: "'Lunch time' in Khmer is: ___________", a: "Pel Bai Thngai" },
          { type: "match", q: "Match: Late → ?", a: "Yuet" },
          { type: "match", q: "Match: Break time → ?", a: "Pel Samrak" },
          { type: "fill", q: "'Early' in Khmer is: ___________", a: "Muon" }
        ],
        summary: ["Learned to tell time in Khmer", "Discussed daily school schedule", "Practiced asking about class times"]
      },
      {
        title: "Day 8: Directions and Locations",
        image: "https://images.pexels.com/photos/8419258/pexels-photo-8419258.jpeg?auto=compress&cs=tinysrgb&w=800",
        imageAlt: "School hallway",
        objectives: ["Give and ask for directions in Khmer", "Name locations in school", "Guide visitors around campus"],
        warmup: "Draw a simple map of your school. Label 5 locations.",
        vocab: [
          { en: "Where?", km: "Nov Na?", ex: "Where is the office?", exKm: "Kariyalay nov na?" },
          { en: "Here", km: "Ti Nih", ex: "It's here.", exKm: "Nov ti nih." },
          { en: "There", km: "Ti Nuh", ex: "Over there.", exKm: "Nov ti nuh." },
          { en: "Left", km: "Chhveng", ex: "Turn left.", exKm: "Bot chhveng." },
          { en: "Right", km: "Sdam", ex: "Turn right.", exKm: "Bot sdam." },
          { en: "Straight", km: "Trong", ex: "Go straight.", exKm: "Tov trong." },
          { en: "Upstairs", km: "Ler", ex: "The library is upstairs.", exKm: "Bannalai nov ler." },
          { en: "Downstairs", km: "Kraom", ex: "The canteen is downstairs.", exKm: "Rohaa nov kraom." },
          { en: "Next to", km: "Chit", ex: "Next to the office.", exKm: "Nov chit kariyalay." },
          { en: "Toilet", km: "Bongkun", ex: "Where is the toilet?", exKm: "Bongkun nov na?" }
        ],
        dialogue: [
          { speaker: "Teacher A", text: "Excuse me, where is the staff room?", km: "Som to, bantob kru nov na?" },
          { speaker: "Teacher B", text: "Go straight, then turn left.", km: "Tov trong, haey bot chhveng." },
          { speaker: "Teacher A", text: "Is it upstairs?", km: "Nov ler te?" },
          { speaker: "Teacher B", text: "No, it's downstairs, next to the office.", km: "Ot te, nov kraom, chit kariyalay." }
        ],
        roleplay: "One person asks for directions to a school location. The other gives directions in Khmer.",
        pairwork: "Using a school map, give each other directions to different rooms.",
        groupActivity: "Treasure hunt with Khmer directions! Hide clues and write direction cards in Khmer.",
        scenario: "A parent arrives and needs to find the principal's office. Guide them using Khmer directions.",
        seatwork: [
          { type: "fill", q: "'Where?' in Khmer is: ___________", a: "Nov Na?" },
          { type: "fill", q: "'Turn left' in Khmer is: ___________", a: "Bot Chhveng" },
          { type: "match", q: "Match: Upstairs → ?", a: "Ler" },
          { type: "match", q: "Match: Straight → ?", a: "Trong" },
          { type: "fill", q: "'Toilet' in Khmer is: ___________", a: "Bongkun" }
        ],
        summary: ["Learned directional words in Khmer", "Practiced giving directions around school", "Named key school locations"]
      },
      {
        title: "Day 9: Asking for Help",
        image: "https://images.pexels.com/photos/1181622/pexels-photo-1181622.jpeg?auto=compress&cs=tinysrgb&w=800",
        imageAlt: "Team collaborating",
        objectives: ["Ask for help politely in Khmer", "Offer help to colleagues", "Express needs and problems"],
        warmup: "Think of 3 situations where you needed help at school this week.",
        vocab: [
          { en: "Help", km: "Chuoy", ex: "Can you help me?", exKm: "Neak chuoy knyom ban te?" },
          { en: "Please help me", km: "Som Chuoy Knyom", ex: "Please help me carry this.", exKm: "Som chuoy knyom lii nih." },
          { en: "I need", km: "Knyom Trov Kar", ex: "I need a translator.", exKm: "Knyom trov kar aknak bak brae." },
          { en: "I don't understand", km: "Knyom Ot Yol", ex: "I don't understand this form.", exKm: "Knyom ot yol bong bae nih." },
          { en: "Can you repeat?", km: "Som Niyeay Mdong Tiet?", ex: "Can you repeat that slowly?", exKm: "Som niyeay mdong tiet yuet yuet?" },
          { en: "Slowly please", km: "Som Yuet Yuet", ex: "Speak slowly please.", exKm: "Som niyeay yuet yuet." },
          { en: "I have a problem", km: "Knyom Mien Banhaa", ex: "I have a problem with the printer.", exKm: "Knyom mien banhaa nung machine print." },
          { en: "Thank you for helping", km: "Aw Kun Dael Chuoy", ex: "Thank you for helping me.", exKm: "Aw kun dael chuoy knyom." },
          { en: "No problem", km: "Ot Mien Banhaa", ex: "No problem at all!", exKm: "Ot mien banhaa te!" },
          { en: "Do you understand?", km: "Neak Yol Te?", ex: "Do you understand my question?", exKm: "Neak yol somnua knyom te?" }
        ],
        dialogue: [
          { speaker: "Teacher A", text: "Please help me. I don't understand this form.", km: "Som chuoy knyom. Knyom ot yol bong bae nih." },
          { speaker: "Teacher B", text: "No problem! What do you need?", km: "Ot mien banhaa! Neak trov kar ey?" },
          { speaker: "Teacher A", text: "Can you repeat slowly?", km: "Som niyeay mdong tiet yuet yuet?" },
          { speaker: "Teacher B", text: "Of course. This is the attendance form.", km: "Baan. Nih chea bong bae vot vea vien." },
          { speaker: "Teacher A", text: "Thank you for helping!", km: "Aw kun dael chuoy!" }
        ],
        roleplay: "Create a situation where you need help and practice asking politely in Khmer.",
        pairwork: "Partner A: You have a problem. Ask for help.\nPartner B: Offer to help and solve the problem.",
        groupActivity: "Role-play different school problems (photocopier jam, lost keys, confusion with forms) and help each other in Khmer.",
        scenario: "The internet is down and you need to print worksheets. Ask the IT person and then a colleague for help.",
        seatwork: [
          { type: "fill", q: "'Help me' in Khmer is: ___________", a: "Chuoy Knyom" },
          { type: "fill", q: "'I don't understand' in Khmer is: ___________", a: "Knyom Ot Yol" },
          { type: "match", q: "Match: Slowly → ?", a: "Yuet Yuet" },
          { type: "match", q: "Match: No problem → ?", a: "Ot Mien Banhaa" },
          { type: "fill", q: "'I need' in Khmer is: ___________", a: "Knyom Trov Kar" }
        ],
        summary: ["Learned to ask for help politely", "Practiced offering assistance", "Used expressions for communication difficulties"]
      },
      {
        title: "Day 10: Food and Lunch",
        image: "https://images.pexels.com/photos/8617558/pexels-photo-8617558.jpeg?auto=compress&cs=tinysrgb&w=800",
        imageAlt: "School lunch",
        objectives: ["Name common foods in Khmer", "Order food at the school canteen", "Talk about meals with colleagues"],
        warmup: "What did you eat for breakfast today? What's your favorite Cambodian food?",
        vocab: [
          { en: "Rice", km: "Bay", ex: "I eat rice every day.", exKm: "Knyom nyam bay ral thngai." },
          { en: "Water", km: "Tuk", ex: "Can I have water?", exKm: "Som tuk ban te?" },
          { en: "Coffee", km: "Kafei", ex: "I want iced coffee.", exKm: "Knyom chong ban kafei tuk kok." },
          { en: "Noodles", km: "Mii", ex: "The noodles are delicious.", exKm: "Mii chngany nas." },
          { en: "Chicken", km: "Sach Moan", ex: "I'll have chicken.", exKm: "Knyom yok sach moan." },
          { en: "Delicious", km: "Chngany", ex: "This is very delicious!", exKm: "Nih chngany nas!" },
          { en: "Hungry", km: "Khliean", ex: "I am hungry.", exKm: "Knyom khliean." },
          { en: "Full", km: "Chhaet", ex: "I am full.", exKm: "Knyom chhaet haeuy." },
          { en: "How much?", km: "Thlai Ponman?", ex: "How much is this?", exKm: "Nih thlai ponman?" },
          { en: "I want", km: "Knyom Chong Ban", ex: "I want fried rice.", exKm: "Knyom chong ban bay chaa." }
        ],
        dialogue: [
          { speaker: "Teacher A", text: "I'm hungry. Let's have lunch.", km: "Knyom khliean. Tov nyam bay." },
          { speaker: "Teacher B", text: "What do you want to eat?", km: "Neak chong nyam ey?" },
          { speaker: "Teacher A", text: "I want noodles. And coffee.", km: "Knyom chong ban mii. Haey kafei." },
          { speaker: "Teacher B", text: "How much is the noodle soup?", km: "Mii thlai ponman?" },
          { speaker: "Vendor", text: "Six thousand riel.", km: "Bram muoy poan riel." }
        ],
        roleplay: "Practice ordering food at the school canteen. Ask prices and place your order in Khmer.",
        pairwork: "Partner A: You are the vendor. Name prices.\nPartner B: Order food and pay.",
        groupActivity: "Create a Khmer menu for your staff room with prices. Present it to the group!",
        scenario: "You're taking a new teacher to lunch. Help them order food and explain the menu in Khmer.",
        seatwork: [
          { type: "fill", q: "'Rice' in Khmer is: ___________", a: "Bay" },
          { type: "fill", q: "'Delicious' in Khmer is: ___________", a: "Chngany" },
          { type: "match", q: "Match: Water → ?", a: "Tuk" },
          { type: "match", q: "Match: Hungry → ?", a: "Khliean" },
          { type: "fill", q: "'How much?' in Khmer is: ___________", a: "Thlai Ponman?" }
        ],
        summary: ["Learned food vocabulary for school context", "Practiced ordering at the canteen", "Discussed meals with colleagues"]
      },
      {
        title: "Day 11: Weather and Seasons",
        image: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1280",
        imageAlt: "Colorful classroom",
        objectives: ["Describe weather in Khmer", "Discuss seasonal activities", "Make weather-related decisions"],
        warmup: "Look outside! How would you describe today's weather?",
        vocab: [
          { en: "Hot", km: "Kdav", ex: "It's very hot today.", exKm: "Thngai nih kdav nas." },
          { en: "Rain", km: "Pleang", ex: "It's raining.", exKm: "Pleang tleak." },
          { en: "Cool", km: "Troacheak", ex: "The morning is cool.", exKm: "Pel preuk troacheak." },
          { en: "Sunny", km: "Thngai Raing", ex: "It's sunny outside.", exKm: "Krav thngai raing." },
          { en: "Cloudy", km: "Mien Popeok", ex: "It's cloudy today.", exKm: "Thngai nih mien popeok." },
          { en: "Rainy season", km: "Rodov Vossa", ex: "Rainy season starts soon.", exKm: "Rodov vossa chab pdaem chit nih." },
          { en: "Hot season", km: "Rodov Kdav", ex: "Hot season is in April.", exKm: "Rodov kdav nov khae Mesa." },
          { en: "Umbrella", km: "Chat", ex: "Bring an umbrella.", exKm: "Yok chat mok." },
          { en: "Flood", km: "Tuk Chhoam", ex: "There's a flood warning.", exKm: "Mien kaer prakas tuk chhoam." },
          { en: "Stay inside", km: "Nov Knong", ex: "Students stay inside today.", exKm: "Koun sas nov knong thngai nih." }
        ],
        dialogue: [
          { speaker: "Teacher A", text: "It's very hot today!", km: "Thngai nih kdav nas!" },
          { speaker: "Teacher B", text: "Yes. Do we have outdoor PE?", km: "Baat. Yeung mien kila krav te?" },
          { speaker: "Teacher A", text: "No, students stay inside.", km: "Ot te, koun sas nov knong." },
          { speaker: "Teacher B", text: "I think it will rain later.", km: "Knyom kit tha nung mien pleang." }
        ],
        roleplay: "Discuss whether to have outdoor activities based on today's weather.",
        pairwork: "Partner A: Describe the weather.\nPartner B: Suggest an appropriate activity.",
        groupActivity: "Plan a week of activities based on a weather forecast. Use Khmer for weather words!",
        scenario: "It starts raining heavily during recess. Communicate with your co-teacher about keeping students safe.",
        seatwork: [
          { type: "fill", q: "'Hot' in Khmer is: ___________", a: "Kdav" },
          { type: "fill", q: "'Rain' in Khmer is: ___________", a: "Pleang" },
          { type: "match", q: "Match: Umbrella → ?", a: "Chat" },
          { type: "match", q: "Match: Rainy season → ?", a: "Rodov Vossa" },
          { type: "fill", q: "'Stay inside' in Khmer is: ___________", a: "Nov Knong" }
        ],
        summary: ["Learned weather vocabulary in Khmer", "Discussed seasonal impacts on school", "Practiced making weather-related decisions"]
      },
      {
        title: "Day 12: Student Behavior",
        image: "https://images.pexels.com/photos/7396377/pexels-photo-7396377.jpeg?auto=compress&cs=tinysrgb&w=800",
        imageAlt: "Students in classroom",
        objectives: ["Describe student behavior in Khmer", "Give praise and corrections", "Communicate with co-teachers about students"],
        warmup: "What positive behavior do you see most in your students?",
        vocab: [
          { en: "Good", km: "La-or", ex: "Very good!", exKm: "La-or nas!" },
          { en: "Well done!", km: "Bravó!", ex: "Well done, student!", exKm: "Bravó, koun sas!" },
          { en: "Naughty", km: "Khouch", ex: "Don't be naughty.", exKm: "Kom khouch." },
          { en: "Quiet", km: "Sngat", ex: "Please be quiet.", exKm: "Som sngat." },
          { en: "Clever", km: "Chhlat", ex: "You are very clever!", exKm: "Neak chhlat nas!" },
          { en: "Lazy", km: "Kchil", ex: "Don't be lazy.", exKm: "Kom kchil." },
          { en: "Pay attention", km: "Yok Chett Tukdak", ex: "Please pay attention.", exKm: "Som yok chett tukdak." },
          { en: "Stop", km: "Chhob", ex: "Stop talking.", exKm: "Chhob niyeay." },
          { en: "Share", km: "Chek Romleak", ex: "Please share with your friend.", exKm: "Som chek romleak nung puok maak." },
          { en: "Kind", km: "Mien Chett La-or", ex: "You are very kind.", exKm: "Neak mien chett la-or nas." }
        ],
        dialogue: [
          { speaker: "Teacher A", text: "That student is very clever!", km: "Koun sas nuh chhlat nas!" },
          { speaker: "Teacher B", text: "Yes, but sometimes he doesn't pay attention.", km: "Baat, pontae pekvela khlah koat ot yok chett tukdak." },
          { speaker: "Teacher A", text: "I'll remind him to focus.", km: "Knyom nung rumbliik koat oy pranyat." },
          { speaker: "Teacher B", text: "Well done to the girls today!", km: "Bravó koun srey thngai nih!" }
        ],
        roleplay: "Practice giving praise and gentle corrections in Khmer during a mock classroom scenario.",
        pairwork: "Partner A: Describe a student behavior.\nPartner B: Respond with appropriate Khmer praise or correction.",
        groupActivity: "Create a 'Classroom Rules' poster using positive Khmer phrases.",
        scenario: "Two students are arguing during group work. Use Khmer to calm them down and redirect them.",
        seatwork: [
          { type: "fill", q: "'Good' in Khmer is: ___________", a: "La-or" },
          { type: "fill", q: "'Stop' in Khmer is: ___________", a: "Chhob" },
          { type: "match", q: "Match: Clever → ?", a: "Chhlat" },
          { type: "match", q: "Match: Kind → ?", a: "Mien Chett La-or" },
          { type: "fill", q: "'Pay attention' in Khmer is: ___________", a: "Yok Chett Tukdak" }
        ],
        summary: ["Learned praise and correction vocabulary", "Practiced positive behavior management", "Communicated about students with co-teachers"]
      },
      {
        title: "Day 13: Health and Feeling Unwell",
        image: "https://images.pexels.com/photos/8363018/pexels-photo-8363018.jpeg?auto=compress&cs=tinysrgb&w=800",
        imageAlt: "Students at desk",
        objectives: ["Describe health symptoms in Khmer", "Ask how someone feels", "Handle student health situations"],
        warmup: "What do you do when a student says they feel sick?",
        vocab: [
          { en: "Sick", km: "Cheu", ex: "I feel sick.", exKm: "Knyom cheu." },
          { en: "Headache", km: "Cheu Kbal", ex: "I have a headache.", exKm: "Knyom cheu kbal." },
          { en: "Stomachache", km: "Cheu Puah", ex: "He has a stomachache.", exKm: "Koat cheu puah." },
          { en: "Fever", km: "Krun", ex: "She has a fever.", exKm: "Koat mien krun." },
          { en: "Tired", km: "Hot", ex: "I am very tired.", exKm: "Knyom hot nas." },
          { en: "Doctor", km: "Pet", ex: "Go to the doctor.", exKm: "Tov rok pet." },
          { en: "Medicine", km: "Thnam", ex: "Take your medicine.", exKm: "Nyam thnam." },
          { en: "Rest", km: "Samrak", ex: "You should rest.", exKm: "Neak kuor samrak." },
          { en: "Are you okay?", km: "Neak Sok Sabay Te?", ex: "Are you okay? You look pale.", exKm: "Neak sok sabay te? Neak meul svet." },
          { en: "Call the parents", km: "Turasoab Owpok", ex: "I need to call the parents.", exKm: "Knyom trov turasoab owpok." }
        ],
        dialogue: [
          { speaker: "Student", text: "Teacher, I have a headache.", km: "Lok Kru, knyom cheu kbal." },
          { speaker: "Teacher", text: "Are you okay? Go to the nurse.", km: "Neak sok sabay te? Tov rok aknak thae thnam." },
          { speaker: "Teacher", text: "(To co-teacher) She has a fever.", km: "Koat mien krun." },
          { speaker: "Co-teacher", text: "I'll call her parents.", km: "Knyom nung turasoab owpok koat." }
        ],
        roleplay: "Practice handling a student who feels unwell. Use Khmer to communicate with co-teacher.",
        pairwork: "Partner A: You're feeling sick. Describe symptoms.\nPartner B: Offer advice in Khmer.",
        groupActivity: "Create a health emergency flowchart with Khmer vocabulary.",
        scenario: "A student vomits during class. Communicate with your co-teacher and office staff to handle the situation.",
        seatwork: [
          { type: "fill", q: "'Sick' in Khmer is: ___________", a: "Cheu" },
          { type: "fill", q: "'Fever' in Khmer is: ___________", a: "Krun" },
          { type: "match", q: "Match: Rest → ?", a: "Samrak" },
          { type: "match", q: "Match: Medicine → ?", a: "Thnam" },
          { type: "fill", q: "'Tired' in Khmer is: ___________", a: "Hot" }
        ],
        summary: ["Learned health vocabulary for school", "Practiced handling unwell students", "Communicated health concerns with staff"]
      },
      {
        title: "Day 14: The Photocopier and Technology",
        image: "https://images.pexels.com/photos/3791246/pexels-photo-3791246.jpeg?auto=compress&cs=tinysrgb&w=800",
        imageAlt: "Using a photocopier",
        objectives: ["Use technology vocabulary in Khmer", "Ask for tech help", "Communicate about equipment problems"],
        warmup: "What technology do you use every day at school? What breaks most often?",
        vocab: [
          { en: "Photocopy", km: "Tham Tuk", ex: "I need to photocopy this.", exKm: "Knyom trov tham tuk nih." },
          { en: "Printer", km: "Machine Print", ex: "The printer is broken.", exKm: "Machine print khoch." },
          { en: "Computer", km: "Kampyutor", ex: "Turn on the computer.", exKm: "Baek kampyutor." },
          { en: "Internet", km: "Internet", ex: "The internet is slow.", exKm: "Internet yuet." },
          { en: "Paper", km: "Kradah", ex: "We need more paper.", exKm: "Yeung trov kar kradah tiet." },
          { en: "Broken", km: "Khoch", ex: "The projector is broken.", exKm: "Projector khoch." },
          { en: "Fix", km: "Chuah Chol", ex: "Can you fix it?", exKm: "Neak chuah chol ban te?" },
          { en: "Turn on", km: "Baek", ex: "Turn on the air conditioning.", exKm: "Baek machine troacheak." },
          { en: "Turn off", km: "Bot", ex: "Turn off the lights.", exKm: "Bot phleng." },
          { en: "How many copies?", km: "Tham Tuk Ponman?", ex: "How many copies do you need?", exKm: "Neak trov tham tuk ponman?" }
        ],
        dialogue: [
          { speaker: "Teacher A", text: "The printer is broken!", km: "Machine print khoch!" },
          { speaker: "Teacher B", text: "Again? I'll call IT.", km: "Mdong tiet? Knyom nung turasoab IT." },
          { speaker: "Teacher A", text: "I need 30 copies for class.", km: "Knyom trov kar samseb kbal samrab thnak rien." },
          { speaker: "Teacher B", text: "Use the one upstairs.", km: "Prer ach nov ler." }
        ],
        roleplay: "The photocopier is jammed. Ask for help and explain the problem in Khmer.",
        pairwork: "Partner A: Report a tech problem.\nPartner B: Offer solutions.",
        groupActivity: "Create a 'Tech Troubleshooting' guide with Khmer instructions.",
        scenario: "It's 5 minutes before class and the projector won't turn on. Communicate with your co-teacher to solve it.",
        seatwork: [
          { type: "fill", q: "'Photocopy' in Khmer is: ___________", a: "Tham Tuk" },
          { type: "fill", q: "'Broken' in Khmer is: ___________", a: "Khoch" },
          { type: "match", q: "Match: Turn on → ?", a: "Baek" },
          { type: "match", q: "Match: Paper → ?", a: "Kradah" },
          { type: "fill", q: "'Fix' in Khmer is: ___________", a: "Chuah Chol" }
        ],
        summary: ["Learned technology vocabulary for school", "Practiced reporting tech problems", "Communicated equipment needs with staff"]
      },
      {
        title: "Day 15: Meetings and Events",
        image: "https://images.pexels.com/photos/1181304/pexels-photo-1181304.jpeg?auto=compress&cs=tinysrgb&w=800",
        imageAlt: "Team meeting",
        objectives: ["Discuss meetings and events in Khmer", "Understand meeting announcements", "Participate in school planning"],
        warmup: "When was your last staff meeting? What was discussed?",
        vocab: [
          { en: "Meeting", km: "Prachiom", ex: "There's a meeting today.", exKm: "Mien prachiom thngai nih." },
          { en: "Assembly", km: "Prachiom Thom", ex: "School assembly at 8.", exKm: "Prachiom thom maong bram bei." },
          { en: "Event", km: "Pithii", ex: "The school event is Friday.", exKm: "Pithii sala thngai Sok." },
          { en: "Important", km: "Samkhan", ex: "This is very important.", exKm: "Nih samkhan nas." },
          { en: "Cancelled", km: "Lob Chaol", ex: "The meeting is cancelled.", exKm: "Prachiom trov ban lob chaol." },
          { en: "Postponed", km: "Plah Pelvelea", ex: "The event is postponed.", exKm: "Pithii trov ban plah pelvelea." },
          { en: "Attend", km: "Chol Ruom", ex: "Please attend the meeting.", exKm: "Som chol ruom prachiom." },
          { en: "Agenda", km: "Rebiev Varak", ex: "Here is the agenda.", exKm: "Nih chea rebiev varak." },
          { en: "Announcement", km: "Seckdei Prakas", ex: "I have an announcement.", exKm: "Knyom mien seckdei prakas." },
          { en: "Schedule change", km: "Phlas Pelvelea", ex: "There's a schedule change.", exKm: "Mien phlas pelvelea." }
        ],
        dialogue: [
          { speaker: "Teacher A", text: "Is there a meeting today?", km: "Mien prachiom thngai nih te?" },
          { speaker: "Teacher B", text: "Yes, at 3 o'clock in the staff room.", km: "Baat, maong bei nov bantob kru." },
          { speaker: "Teacher A", text: "What's it about?", km: "Ampi ey?" },
          { speaker: "Teacher B", text: "Sports day planning.", km: "Kar roeabchom thngai kila." }
        ],
        roleplay: "Announce a school event to your colleagues using Khmer.",
        pairwork: "Partner A: Inform about a schedule change.\nPartner B: Ask clarifying questions in Khmer.",
        groupActivity: "Plan a school event together using Khmer vocabulary. Present your plan!",
        scenario: "The principal announces a meeting in Khmer. Understand the key details and explain to your foreign colleague.",
        seatwork: [
          { type: "fill", q: "'Meeting' in Khmer is: ___________", a: "Prachiom" },
          { type: "fill", q: "'Important' in Khmer is: ___________", a: "Samkhan" },
          { type: "match", q: "Match: Cancelled → ?", a: "Lob Chaol" },
          { type: "match", q: "Match: Attend → ?", a: "Chol Ruom" },
          { type: "fill", q: "'Announcement' in Khmer is: ___________", a: "Seckdei Prakas" }
        ],
        summary: ["Learned meeting and event vocabulary", "Practiced discussing schedule changes", "Understood meeting announcements"]
      },
      {
        title: "Day 16: Emergencies",
        image: "https://images.pexels.com/photos/7425340/pexels-photo-7425340.jpeg?auto=compress&cs=tinysrgb&w=800",
        imageAlt: "Fire safety equipment",
        objectives: ["Handle emergency situations in Khmer", "Give emergency instructions", "Communicate urgently with staff"],
        warmup: "What's your school's emergency procedure? Do you know how to say 'help' in Khmer?",
        vocab: [
          { en: "Emergency", km: "Asonn", ex: "This is an emergency!", exKm: "Nih chea asonn!" },
          { en: "Fire", km: "Phleng", ex: "Fire! Get out!", exKm: "Phleng! Cheanh krav!" },
          { en: "Danger", km: "Gronthanak", ex: "Danger! Stay away.", exKm: "Gronthanak! Nov chngay." },
          { en: "Run", km: "Rott", ex: "Run quickly!", exKm: "Rott loeun!" },
          { en: "Careful", km: "Pranyat", ex: "Be careful!", exKm: "Pranyat!" },
          { en: "Call for help", km: "Hav Aknak Chuoy", ex: "Call for help immediately!", exKm: "Hav aknak chuoy phneal!" },
          { en: "Hospital", km: "Montii Pet", ex: "Take them to the hospital.", exKm: "Noa koat tov montii pet." },
          { en: "First aid", km: "Sevakmm Borbor", ex: "Get the first aid kit.", exKm: "Yok sevakmm borbor mok." },
          { en: "Earthquake", km: "Ranh Daey", ex: "Earthquake! Under the desk!", exKm: "Ranh daey! Nov krom tok!" },
          { en: "Everyone outside!", km: "Teang Os Cheanh Krav!", ex: "Everyone go outside now!", exKm: "Teang os cheanh krav elov nih!" }
        ],
        dialogue: [
          { speaker: "Teacher A", text: "Fire alarm! Everyone outside!", km: "Phleng! Teang os cheanh krav!" },
          { speaker: "Teacher B", text: "Students, line up quickly!", km: "Koun sas, chor chea juor loeun!" },
          { speaker: "Teacher A", text: "Is everyone here?", km: "Teang os nov ti nih te?" },
          { speaker: "Teacher B", text: "Yes, all safe.", km: "Baat, teang os suosdei phab." }
        ],
        roleplay: "Practice a fire drill. Give emergency instructions in Khmer.",
        pairwork: "Partner A: Report an emergency.\nPartner B: Respond with appropriate actions in Khmer.",
        groupActivity: "Create an emergency procedure poster in Khmer for your classroom.",
        scenario: "A fire alarm goes off. Direct your students safely outside while communicating with your co-teacher.",
        seatwork: [
          { type: "fill", q: "'Emergency' in Khmer is: ___________", a: "Asonn" },
          { type: "fill", q: "'Fire' in Khmer is: ___________", a: "Phleng" },
          { type: "match", q: "Match: Danger → ?", a: "Gronthanak" },
          { type: "match", q: "Match: Careful → ?", a: "Pranyat" },
          { type: "fill", q: "'Run' in Khmer is: ___________", a: "Rott" }
        ],
        summary: ["Learned emergency vocabulary", "Practiced giving urgent instructions", "Created emergency communication procedures"]
      },
      {
        title: "Day 17: Sports Day",
        image: "https://images.pexels.com/photos/8927011/pexels-photo-8927011.jpeg?auto=compress&cs=tinysrgb&w=800",
        imageAlt: "Children running on sports field",
        objectives: ["Use sports and physical activity vocabulary", "Give instructions for sports events", "Encourage students during activities"],
        warmup: "What sports do your students play? What's the most popular sport at your school?",
        vocab: [
          { en: "Sports", km: "Kila", ex: "Today is sports day.", exKm: "Thngai nih chea thngai kila." },
          { en: "Run", km: "Rott", ex: "Run to the finish line!", exKm: "Rott tov chob bombe!" },
          { en: "Jump", km: "Lot", ex: "Jump high!", exKm: "Lot oy kpuoh!" },
          { en: "Team", km: "Krom", ex: "Which team are you on?", exKm: "Neak nov krom na?" },
          { en: "Win", km: "Chhneas", ex: "We win!", exKm: "Yeung chhneas!" },
          { en: "Lose", km: "Chanh", ex: "Don't give up if you lose.", exKm: "Kom boh bang brae broesin chanh." },
          { en: "Ready", km: "Roeab", ex: "Are you ready?", exKm: "Neak roeab te?" },
          { en: "Start", km: "Chab Pdaem", ex: "Ready, set, start!", exKm: "Roeab, kounliang, chab pdaem!" },
          { en: "Cheer", km: "Thas Toek Chett", ex: "Let's cheer for our team!", exKm: "Yeung thas toek chett krom yeung!" },
          { en: "Well played!", km: "Leng La-or!", ex: "Well played, everyone!", exKm: "Leng la-or, teang os knea!" }
        ],
        dialogue: [
          { speaker: "Teacher A", text: "Are your students ready for sports day?", km: "Koun sas neak roeab samrab thngai kila te?" },
          { speaker: "Teacher B", text: "Yes! They're very excited.", km: "Baat! Puok koat rork ray nas." },
          { speaker: "Teacher A", text: "Which team is winning?", km: "Krom na kumpong chhneas?" },
          { speaker: "Teacher B", text: "The blue team! Let's cheer!", km: "Krom khiev! Yeung thas toek chett!" }
        ],
        roleplay: "Organize a mini sports event. Give instructions and encouragement in Khmer.",
        pairwork: "Partner A: Be the announcer for a race.\nPartner B: Cheer in Khmer.",
        groupActivity: "Plan a relay race with all instructions written in Khmer. Run it!",
        scenario: "You're supervising the long jump at sports day. Give instructions and announce results in Khmer.",
        seatwork: [
          { type: "fill", q: "'Sports' in Khmer is: ___________", a: "Kila" },
          { type: "fill", q: "'Win' in Khmer is: ___________", a: "Chhneas" },
          { type: "match", q: "Match: Team → ?", a: "Krom" },
          { type: "match", q: "Match: Ready → ?", a: "Roeab" },
          { type: "fill", q: "'Start' in Khmer is: ___________", a: "Chab Pdaem" }
        ],
        summary: ["Learned sports vocabulary in Khmer", "Practiced giving activity instructions", "Encouraged students using Khmer"]
      },
      {
        title: "Day 18: Field Trips",
        image: "https://images.pexels.com/photos/18506746/pexels-photo-18506746.jpeg?auto=compress&cs=tinysrgb&w=800",
        imageAlt: "Students on a school bus",
        objectives: ["Plan and discuss field trips in Khmer", "Give travel instructions", "Manage students during excursions"],
        warmup: "What was your last school field trip? Where would you love to take your students?",
        vocab: [
          { en: "Field trip", km: "Damneu Kaa", ex: "We have a field trip tomorrow.", exKm: "Yeung mien damneu kaa thngai saek." },
          { en: "Bus", km: "Lan Krong", ex: "Get on the bus.", exKm: "Laeng ler lan krong." },
          { en: "Museum", km: "Sarameun", ex: "We're going to the museum.", exKm: "Yeung tov sarameun." },
          { en: "Stay together", km: "Nov Cheamuoy Knea", ex: "Everyone stay together!", exKm: "Teang os nov cheamuoy knea!" },
          { en: "Line up", km: "Chor Chea Juor", ex: "Line up here.", exKm: "Chor chea juor nov ti nih." },
          { en: "Count students", km: "Rab Koun Sas", ex: "Count the students.", exKm: "Rab koun sas." },
          { en: "Don't run", km: "Kom Rott", ex: "Don't run near the road!", exKm: "Kom rott chit phlauv!" },
          { en: "Take photos", km: "Thort Rop", ex: "Let's take a photo.", exKm: "Yeung thort rop." },
          { en: "Come back", km: "Trolob Mok Vign", ex: "Come back at 2 o'clock.", exKm: "Trolob mok vign maong pii." },
          { en: "Fun", km: "Sbok", ex: "Did you have fun?", exKm: "Neak sbok te?" }
        ],
        dialogue: [
          { speaker: "Teacher A", text: "Is everyone on the bus?", km: "Teang os nov ler lan krong te?" },
          { speaker: "Teacher B", text: "Let me count. Yes, all here.", km: "Oy knyom rab. Baat, teang os nov ti nih." },
          { speaker: "Teacher A", text: "Stay together at the museum!", km: "Nov cheamuoy knea nov sarameun!" },
          { speaker: "Teacher B", text: "Come back here at 2.", km: "Trolob mok vign ti nih maong pii." }
        ],
        roleplay: "Organize a mini field trip. Give all instructions in Khmer.",
        pairwork: "Partner A: Be the lead teacher giving instructions.\nPartner B: Ask clarifying questions.",
        groupActivity: "Plan a field trip itinerary using Khmer for all instructions and times.",
        scenario: "You're on a field trip and one student wanders off. Communicate with staff to find them.",
        seatwork: [
          { type: "fill", q: "'Field trip' in Khmer is: ___________", a: "Damneu Kaa" },
          { type: "fill", q: "'Stay together' in Khmer is: ___________", a: "Nov Cheamuoy Knea" },
          { type: "match", q: "Match: Bus → ?", a: "Lan Krong" },
          { type: "match", q: "Match: Line up → ?", a: "Chor Chea Juor" },
          { type: "fill", q: "'Don't run' in Khmer is: ___________", a: "Kom Rott" }
        ],
        summary: ["Learned field trip vocabulary", "Practiced managing students on excursions", "Gave travel instructions in Khmer"]
      },
      {
        title: "Day 19: Parent Communication",
        image: "https://images.pexels.com/photos/8419640/pexels-photo-8419640.jpeg?auto=compress&cs=tinysrgb&w=800",
        imageAlt: "Teacher and parent conversation",
        objectives: ["Communicate with parents in basic Khmer", "Discuss student progress", "Handle parent inquiries politely"],
        warmup: "How often do you interact with parents? What do you usually discuss?",
        vocab: [
          { en: "Parent", km: "Owpok Mdai", ex: "The parent is waiting.", exKm: "Owpok mdai kumpong chham." },
          { en: "Father", km: "Owpok", ex: "Is that her father?", exKm: "Nuh chea owpok koat te?" },
          { en: "Mother", km: "Mdai", ex: "Her mother called.", exKm: "Mdai koat turasoab mok." },
          { en: "Student progress", km: "Vottana Koun Sas", ex: "Your child is doing well.", exKm: "Koun robos neak rien la-or." },
          { en: "Homework", km: "Kech Kar Pteah", ex: "Please check the homework.", exKm: "Som moel kech kar pteah." },
          { en: "Report card", km: "Bon Ran Kar", ex: "Here is the report card.", exKm: "Nih chea bon ran kar." },
          { en: "Improve", km: "Leu Laeng", ex: "Your child needs to improve.", exKm: "Koun neak trov leu laeng." },
          { en: "Well behaved", km: "Prapeut La-or", ex: "Your child is well behaved.", exKm: "Koun neak prapeut la-or." },
          { en: "Parent meeting", km: "Prachiom Owpok Mdai", ex: "Parent meeting is next week.", exKm: "Prachiom owpok mdai aatit kraoy." },
          { en: "Any questions?", km: "Mien Somnua Te?", ex: "Do you have any questions?", exKm: "Neak mien somnua te?" }
        ],
        dialogue: [
          { speaker: "Teacher", text: "Hello. Nice to meet you. I'm the English teacher.", km: "Chum Reap Suor. Rikreay del ban skol neak. Knyom chea kru pheasaa Angkles." },
          { speaker: "Parent", text: "How is my child doing?", km: "Koun knyom rien doch metech?" },
          { speaker: "Teacher", text: "Your child is doing well. Very clever!", km: "Koun neak rien la-or. Chhlat nas!" },
          { speaker: "Parent", text: "Thank you, teacher.", km: "Aw kun, Lok Kru." },
          { speaker: "Teacher", text: "Any questions?", km: "Mien somnua te?" }
        ],
        roleplay: "Practice a parent-teacher conference. Report on student progress in Khmer.",
        pairwork: "Partner A: Be the teacher reporting progress.\nPartner B: Be the parent asking questions.",
        groupActivity: "Role-play a parent evening with multiple parents. Each teacher reports on different students.",
        scenario: "A parent arrives unexpectedly wanting to discuss their child. Greet them and communicate basic information.",
        seatwork: [
          { type: "fill", q: "'Parent' in Khmer is: ___________", a: "Owpok Mdai" },
          { type: "fill", q: "'Homework' in Khmer is: ___________", a: "Kech Kar Pteah" },
          { type: "match", q: "Match: Report card → ?", a: "Bon Ran Kar" },
          { type: "match", q: "Match: Improve → ?", a: "Leu Laeng" },
          { type: "fill", q: "'Well behaved' in Khmer is: ___________", a: "Prapeut La-or" }
        ],
        summary: ["Learned parent communication vocabulary", "Practiced reporting student progress", "Handled parent inquiries politely"]
      },
      {
        title: "Day 20: Review & Celebration",
        image: "https://images.pexels.com/photos/8177922/pexels-photo-8177922.jpeg?auto=compress&cs=tinysrgb&w=800",
        imageAlt: "Certificate of achievement",
        objectives: ["Review all 20 days of vocabulary", "Test knowledge in a fun review game", "Celebrate course completion!"],
        warmup: "What was your favorite lesson? What Khmer phrase do you use most often now?",
        vocab: [
          { en: "Congratulations!", km: "Somrab Sdar!", ex: "Congratulations on completing the course!", exKm: "Somrab sdar dael ban banhchob vithii saeksa!" },
          { en: "I can speak Khmer", km: "Knyom Cheh Niyeay Khmer", ex: "Now I can speak Khmer!", exKm: "Elov nih knyom cheh niyeay Khmer!" },
          { en: "Thank you teacher", km: "Aw Kun Lok Kru", ex: "Thank you, teacher, for everything.", exKm: "Aw Kun Lok Kru samrab kal teang os." },
          { en: "I learned a lot", km: "Knyom Rien Ban Chraen", ex: "I learned a lot in this course.", exKm: "Knyom rien ban chraen knong vithii saeksa nih." },
          { en: "See you again", km: "Chob Knea Mdong Tiet", ex: "See you again soon!", exKm: "Chob knea mdong tiet chit nih!" }
        ],
        dialogue: [
          { speaker: "Teacher A", text: "Congratulations! We finished the course!", km: "Somrab sdar! Yeung banhchob vithii saeksa haeuy!" },
          { speaker: "Teacher B", text: "I learned so much. Thank you!", km: "Knyom rien ban chraen. Aw kun!" },
          { speaker: "Teacher A", text: "Now you can speak Khmer!", km: "Elov nih neak cheh niyeay Khmer!" },
          { speaker: "Teacher B", text: "See you again! Goodbye!", km: "Chob knea mdong tiet! Lea haeuy!" }
        ],
        roleplay: "Have a full conversation using vocabulary from ALL 20 days. Try to use at least 20 different Khmer words!",
        pairwork: "Quiz each other! Partner A says English, Partner B says Khmer. Score points!",
        groupActivity: "Grand Review Game: Teams compete to translate vocabulary from all lessons. Most points wins!",
        scenario: "It's your last day and you want to thank everyone — the principal, your co-teacher, the security guard, and the office staff. Use Khmer!",
        seatwork: [
          { type: "fill", q: "'Hello' in Khmer is: ___________", a: "Susadei" },
          { type: "fill", q: "'Teacher' in Khmer is: ___________", a: "Kru" },
          { type: "match", q: "Match: Thank you → ?", a: "Aw Kun" },
          { type: "match", q: "Match: Goodbye → ?", a: "Lea Haeuy" },
          { type: "fill", q: "'How are you?' in Khmer is: ___________", a: "Neak Sok Sabay Te?" }
        ],
        summary: ["Reviewed vocabulary from all 20 lessons", "Tested knowledge in review games", "Celebrated course completion! 🎉"]
      }
    ];
