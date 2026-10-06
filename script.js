const FORM_URL = "https://forms.gle/9DN8bRhPkY456Wx97";
const SCHOOL = "Fit Awrari Abayneh Secondary School";
const pages = [
  ["index.html", "Home"],
  ["program.html", "Program"],
  ["future.html", "Our Future"],
  ["join.html", "Join"],
];
const pagesAm = [
  ["index.html", "መነሻ"],
  ["program.html", "ፕሮግራም"],
  ["future.html", "የእኛ የወደፊት እቅድ"],
  ["join.html", "ተቀላቀል"],
];
const cur = location.pathname.split("/").pop() || "index.html";
const pageTitles = {
  "index.html": { en: "Debo Rise: Rise together", am: "ደቦ ራይስ: አብሮ እንነሳ" },
  "program.html": { en: "The Program | Debo Rise", am: "ፕሮግራም | ደቦ ራይስ" },
  "future.html": { en: "Our Future | Debo Rise", am: "የእኛ የወደፊት እቅድ | ደቦ ራይስ" },
  "join.html": { en: "Join | Debo Rise", am: "ተቀላቀል | ደቦ ራይስ" },
};
const translations = {
  en: {
    "nav.home": "Home",
    "nav.program": "Program",
    "nav.future": "Our Future",
    "nav.join": "Join",
    "nav.apply": "Apply now",
    "nav.menu": "Menu",
    "nav.lang": "አማርኛ",
    "footer.explore": "Explore",
    "footer.promise": "Our promise",
    "footer.promiseTxt": "Grades always come first.",
    "footer.supervision": "A teacher supervises every group.",
    "footer.tagline": "Learn together. Build together. Rise together.",
    "footer.made": "Made for students, rooted in community.",
    "footer.program": `A student program at ${SCHOOL}.`,
    "page.join.hero": "Join the first group.",
    "page.join.lead": "About 30 spaces. Beginners are welcome.",
    "page.join.requirements": "What you need",
    "page.join.how": "How to join",
    "page.join.apply": "Apply",
    "page.join.info": "Come to the info session",
    "page.join.selected": "Get selected",
    "page.join.start": "Start at the kickoff",
    "page.join.applyText": "Fill in the short form.",
    "page.join.infoText": "See all three fields and ask questions.",
    "page.join.selectedText":
      "We choose students who will commit. A waitlist is kept.",
    "page.join.startText": "Meet your mentor and begin Week 1.",
    "page.join.questions": "Questions",
    "faq.cost": "Does it cost money?",
    "faq.costA": "No. The pilot is free for students.",
    "faq.field": "What if I do not know my field?",
    "faq.fieldA":
      "Come to the info session. You will try a short demo of each field before you choose.",
    "faq.grades": "Will it hurt my grades?",
    "faq.gradesA":
      "Grades come first. All activities are outside class hours, and you can pause if you need to.",
    "faq.safe": "Is it safe?",
    "faq.safeA":
      "A teacher is in every group. Mentors answer only in the groups, never in private chats. Parents are informed.",
    "faq.exp": "Do I need experience?",
    "faq.expA": "No. Every lesson starts from zero.",
    "week.tab": "Week",
    "week.learn": "Learn",
    "week.think": "Think",
    "week.build": "Build",
    "week.solve": "Solve",
    "week.teach": "Teach",
    "week.subtitle":
      "Pick a week to see what each field does. Every week ends with something you can show.",
    "week.heading": "Six weeks. One real project.",
    "week.yourWeek": "Your week",
    "week.meetingA": "Meeting A",
    "week.meetingB": "Meeting B",
    "week.daily": "Every day",
    "week.dailyProof": "Daily proof",
    "week.day7": "Day 7",
    "week.stuck": "Stuck? Call a debo.",
    "week.stuckLead":
      "If you are stuck for 20 minutes, post #CallADebo with a screenshot and your question. Classmates and mentors gather to help you finish. Helping others is practice for the Teach step.",
    "week.certificate": "How you earn the certificate",
    "week.certificateLead":
      "The certificate is signed by the school and Debo Rise. You earn it by finishing, not only by attending.",
    "week.showcase": "Showcase Day",
    "week.showcaseLead":
      "At the end of Week 6, you show your work to the principal, teachers, parents, and mentors. Some students present on stage. Everyone has a station to explain their project.",
    "week.leave": "What you leave with",
    "future.hero": "We start small. We aim high.",
    "future.lead": "We build each step only after the one before it works.",
    "future.roadmap": "The roadmap",
    "future.app": "The app",
    "future.why": "Why not build it all now?",
    "future.how": "How it can grow",
    "future.mvp": "MVP features",
    "future.full": "Full vision",
    "future.pilot": "Pilot (months 0 to 3)",
    "future.light": "Light website (months 3 to 6)",
    "future.mvpApp": "MVP app (months 6 to 12)",
    "future.fullPlatform": "Full platform (year 2 and beyond)",
    "future.pilotText":
      "Telegram community, 3 fields, about 30 students, and a Showcase Day. We prove that students finish real projects.",
    "future.lightText":
      "Student profiles and project pages. A second group starts.",
    "future.mvpText":
      "A portfolio app where mentors verify projects and companies can offer internships.",
    "future.fullText":
      "A student community across Ethiopia with feeds, chat, points, trophies, and live mentoring.",
    "home.heroTitle": "From “I want to become” to “I can actually do.”",
    "home.heroLead":
      "Debo Rise is a 6-week program for ambitious students. You learn a real skill, build a real project, and finish with a certificate and a portfolio piece you can show to anyone.",
    "home.apply": "Apply now",
    "home.program": "See the program",
    "home.factsWeeks": "weeks",
    "home.factsFields": "fields",
    "home.factsProject": "real project each",
    "home.factsCost": "cost to students",
    "home.problemTitle": "Many students have big dreams. Few have proof.",
    "home.problemLead":
      "Social media shows quick success. Real skill takes time, practice, and feedback. Most students learn alone, get no help, and give up before they build anything.",
    "home.problemSkill": "No practical skills",
    "home.problemSkillText":
      "Dreams of being a developer, designer, or creator, but nothing built yet.",
    "home.problemShow": "Nothing to show",
    "home.problemShowText":
      "For a job, internship, or university, grades are often the only proof.",
    "home.problemGuidance": "No guidance",
    "home.problemGuidanceText":
      "Random videos, no feedback, and no one to ask when stuck.",
    "home.deboTitle": "What is a debo?",
    "home.deboLead":
      "In Ethiopian villages, when the harvest is ready, neighbors gather to help each other bring it in. That gathering is a debo.",
    "home.deboQuote":
      "Debo Rise does the same for our students’ futures. We gather, we help each other, and we rise together.",
    "home.methodTitle": "One simple method",
    "home.methodLead": "Every student follows the same five steps.",
    "home.learn": "Learn",
    "home.learnText": "Pick a field and learn the basics.",
    "home.think": "Think",
    "home.thinkText": "Discuss, question, and plan.",
    "home.build": "Build",
    "home.buildText": "Make a real project.",
    "home.solve": "Solve",
    "home.solveText": "Test it on a real problem.",
    "home.teach": "Teach",
    "home.teachText": "Share what you learned.",
    "home.fieldsTitle": "Choose your field",
    "home.fieldsLead":
      "Beginners are welcome. Not sure yet? You can try all three at our info session.",
    "home.web": "Web Development",
    "home.webText":
      "Learn HTML and CSS. Build a responsive website for a real business.",
    "home.graphic": "Graphic Design",
    "home.graphicText":
      "Design a logo, poster, and social post for a real client.",
    "home.video": "Video Editing",
    "home.videoText":
      "Plan, film, and edit a short video that tells a real story.",
    "home.benefitsTitle": "Who benefits",
    "home.student": "Students",
    "home.studentList":
      "A real skill and a finished project;A portfolio to show;Confidence and a next step",
    "home.school": "The school",
    "home.schoolList":
      "A stronger reputation;Students with real projects;A Showcase Day for parents",
    "home.generation": "Our generation",
    "home.generationList":
      "Less dreaming, more doing;Helping each other grow;Creators, not only consumers",
    "home.readyTitle": "Ready to build something real?",
    "home.readyLead":
      "Spaces are limited to about 30 students. Apply, join the info session, and start your first week.",
    "home.howJoin": "How joining works",
    "home.programLink": "See the program",
    "home.ctaTitle": "Apply now",
    "home.ctaAlt": "How joining works",
    "home.photoAlt": "A green sprout growing toward the sun",
    "week.choose": "Choose a week",
    "week.schedule1": "Meeting A: in person at school, 60 minutes",
    "week.schedule2": "Meeting B: online, 45 minutes",
    "week.schedule3": "Every day: 1 to 2 hours of learning and practice",
    "week.schedule4": "Daily proof: post a screenshot or note in your group",
    "week.schedule5": "Day 7: rest",
    "week.certificateList": "Attend at least 9 of 12 meetings;Post proof of work at least 20 times;Finish your final project and pass the mentor review;Present at Showcase Day",
    "week.leaveList": "One practical skill;One finished real project;A portfolio piece and mentor feedback;A plan for your next step",
    "page.join.requirementsList": "1 to 2 hours every day for 6 weeks;Two meetings a week, one in person and one online;A phone or computer, and Telegram;Permission from a parent or guardian;The will to finish",
    "future.appLead": "Telegram is our free place for chat. The app focuses on what Telegram cannot do: verified proof of skills.",
    "future.whyLead": "An app with no users is empty. We first learn what students need, then build only that.",
    "future.mvpList": "Student profile and project pages;Progress through Learn, Think, Build, Solve, Teach;Mentor feedback and verified badge;One shareable portfolio link;Company view for internships",
    "future.fullList": "Feed to share work, plus chat and groups;Points, trophies, and challenges;Learning tracks for every field;Live mentoring and recordings;School dashboards and mobile apps",
    "future.growList": "Schools join and support the program;Companies sponsor challenges and offer internships;Optional paid workshops later",
  },
  am: {
    "nav.home": "መነሻ",
    "nav.program": "ፕሮግራም",
    "nav.future": "የወደፊት እቅድ",
    "nav.join": "ተቀላቀል",
    "nav.apply": "አስመዝግቡ",
    "nav.menu": "ምናሌ",
    "nav.lang": "EN",
    "footer.explore": "ይመልከቱ",
    "footer.promise": "የእኛ ሃላፊነት",
    "footer.promiseTxt": "የትምህርት እውነተኛ ቅድሚያ ይሰጣል።",
    "footer.supervision": "እያንዳንዱ ቡድን በአስተማሪ ይተዳደራል።",
    "footer.tagline": "አብሮ ይማሩ። አብሮ ይሠሩ። አብሮ እንነሳለን።",
    "footer.made": "ለተማሪዎች የተዘጋጀ፣ በማህበረሰቡ ላይ የተመሰረተ።",
    "footer.program": `ለተማሪዎች የተዘጋጀ ፕሮግራም በ ${SCHOOL}።`,
    "page.join.hero": "የመጀመሪያ ቡድኑን ተቀላቀሉ።",
    "page.join.lead": "በግምት 30 ቦታዎች። መጀመሪያ ያለው ማንኛውም ተማሪ እንኳን እንቀበላለን።",
    "page.join.requirements": "የሚያስፈልጉት ነገሮች",
    "page.join.how": "እንዴት መቀላቀል ይቻላል",
    "page.join.apply": "ያመልክቱ",
    "page.join.info": "ወደ መረጃ ክፍለ ጊዜ ይምጡ",
    "page.join.selected": "ተመርጠዋል",
    "page.join.start": "በመጀመሪያ ስብሰባ ላይ ይጀምሩ",
    "page.join.applyText": "አጭር ቅጹን ይሙሉ።",
    "page.join.infoText": "ሦስቱንም መስኮች ይመልከቱ እና ጥያቄዎችን ይጠይቁ።",
    "page.join.selectedText": "የሚያስተማሩ እና የሚቀጥሉ ተማሪዎችን እንመርጣለን። የጠባቂ ዝርዝር አለ።",
    "page.join.startText": "አስተማሪዎን ያገኛሉ እና ከሳምንት 1 ጀምረዋል።",
    "page.join.questions": "ጥያቄዎች",
    "faq.cost": "ዋጋ አለው?",
    "faq.costA": "አይ። ፕሮግራሙ ለተማሪዎች ነፃ ነው።",
    "faq.field": "መስክ አላውቅም እንዴት ነው?",
    "faq.fieldA": "ወደ መረጃ ክፍለ ጊዜ ይምጡ። ከመምረጥዎ በፊት የእያንዳንዱን መስክ አጭር ሙከራ ያድራሉ።",
    "faq.grades": "የትምህርት ነጥቦቼን ያበላሻል?",
    "faq.gradesA":
      "የትምህርት እውነታ ቀዳሚ ነው። ሁሉም እንቅስቃሴዎች ከክፍል ሰዓት ውጭ ናቸው፣ እና ከፈለጉ ሊያቆሙ ይችላሉ።",
    "faq.safe": "ደህንነቱ ያረጋግጣል?",
    "faq.safeA":
      "በእያንዳንዱ ቡድን አስተማሪ አለ። አስተማሪዎች ከቡድኖች ውጪ በግል ቻት አይመልሱም። ወላጆች ይነገራሉ።",
    "faq.exp": "ልምድ ያስፈልገኛል?",
    "faq.expA": "አይ። እያንዳንዱ ትምህርት ከዜሮ ይጀምራል።",
    "week.tab": "ሳምንት",
    "week.learn": "ተማር",
    "week.think": "አስቡበው",
    "week.build": "ሠራ",
    "week.solve": "ፈታ",
    "week.teach": "አስተማር",
    "week.subtitle":
      "እያንዳንዱን መስክ ለማየት ሳምንት ይምረጡ። እያንዳንዱ ሳምንት ሊያሳዩ የሚችሉ ነገሮች ያሉበታል።",
    "week.heading": "ስድስት ሳምንቶች። አንድ ተግባራዊ ፕሮግራም።",
    "week.yourWeek": "የእርስዎ ሳምንት",
    "week.meetingA": "ስብሰባ A",
    "week.meetingB": "ስብሰባ B",
    "week.daily": "እያንዳንዱ ቀን",
    "week.dailyProof": "የቀን ማስረጃ",
    "week.day7": "ቀን 7",
    "week.stuck": "ተጨናነቀ? ደቦን ይጠሩ።",
    "week.stuckLead":
      "ከ20 ደቂቃ በኋላ ተጨናነቀህ ከሆነ፣ #CallADebo በማስቀመጥ ስክሪንሾት እና ጥያቄዎን ይለጥፉ። ጓደኞች እና አስተማሪዎች እርዳታ ለመስጠት ይሰበሰባሉ። ሌሎችን ማገዝ ለአስተማር ሂደት ልምድ ነው።",
    "week.certificate": "የሰርተፊኬት እንዴት ያገኛሉ",
    "week.certificateLead":
      "ሰርተፊኬት በት/ቤት እና ደቦ ራይስ ተፈርሟል። እርስዎ በመገኘት እንጂ በመስተዋል ብቻ አይደለም።",
    "week.showcase": "የማሳያ ቀን",
    "week.showcaseLead":
      "በሳምንት 6 መጨረሻ ላይ ሥራዎን ለአለቃ፣ አስተማሪዎች፣ ወላጆች እና አስተማሪዎች ያሳያሉ። አንዳንድ ተማሪዎች ላይ እያለ ይናገራሉ። እያንዳንዱ ተማሪ ፕሮጀክቱን ለማብራራት ጣቢያ አለው።",
    "week.leave": "የተወስዱት ነገሮች",
    "future.hero": "አንድ ትንሽ ነገር እንጀምራለን። ከፍ እንልልሣለን።",
    "future.lead": "እያንዳንዱን እርምጃ ከቀደሙት እርምጃዎች በኋላ ብቻ እንገነባለን።",
    "future.roadmap": "የመንገድ ካርታ",
    "future.app": "አፕሊኬሽኑ",
    "future.why": "ለምን ሁሉንም አሁን አንገነባም?",
    "future.how": "እንዴት እንደሚያድግ",
    "future.mvp": "MVP ባህሪዎች",
    "future.full": "ሙሉ ራዕይ",
    "future.pilot": "ፓይሎት (0–3 ወራቶች)",
    "future.light": "ቀላል ድረ-ገጽ (3–6 ወራቶች)",
    "future.mvpApp": "MVP አፕሊኬሽን (6–12 ወራቶች)",
    "future.fullPlatform": "ሙሉ መድረክ (2ኛ ዓመት እና በኋላ)",
    "future.pilotText":
      "በቴሌግራም ማህበረሰብ፣ 3 መስኮች፣ በግምት 30 ተማሪዎች እና የማሳያ ቀን። ተማሪዎች ተግባራዊ ፕሮጀክቶችን እንዴት እንደሚያጠናቅቁ እናሳያለን።",
    "future.lightText": "የተማሪ መገለጫዎች እና የፕሮጀክት ገጾች። ሁለተኛ ቡድን ይጀምራል።",
    "future.mvpText":
      "አስተማሪዎች ፕሮጀክቶችን የሚያረጋግጡበት እና ኩባንያዎች ኢንተርንሽን ሊያገኙ የሚችሉ ፖርትፎሊዮ አፕሊኬሽን።",
    "future.fullText":
      "በኢትዮጵያ በኩል የተማሪዎች ማህበረሰብ ከፍለት፣ ቻት፣ ነጥቦች፣ ሽልማቶች እና ቀጥታ አስተማር ጋር።",
    "home.heroTitle": "ከ “እኔ ልሆን እፈልጋለሁ” ወደ “እኔ በእውነቱ ማድረግ እችላለሁ”",
    "home.heroLead":
      "ደቦ ራይስ ለተቀጣጣይ ተማሪዎች የተዘጋጀ 6 ሳምንታዊ ፕሮግራም ነው። እውነተኛ ክህሎት ታስተምራለህ፣ እውነተኛ ፕሮጀክት ታነጣጥራለህ፣ እና እውነተኛ ሰርተፊኬትና ፖርትፎሊዮ ትኖራለህ።",
    "home.apply": "አስመዝግቡ",
    "home.program": "ፕሮግራሙን ይመልከቱ",
    "home.factsWeeks": "ሳምንታት",
    "home.factsFields": "መስኮች",
    "home.factsProject": "እያንዳንዱ እውነተኛ ፕሮጀክት",
    "home.factsCost": "ለተማሪዎች የሚሆን ዋጋ",
    "home.problemTitle": "ብዙ ተማሪዎች ታላላቅ ራዕይ አላቸው። ግን ማስረጃ የለም።",
    "home.problemLead":
      "ማህበራዊ ሚዲያ ፈጣን ስኬትን ያሳያል። እውነተኛ ክህሎት ጊዜ፣ ልምምድ እና አስተያየት ያስፈልገዋል። ብዙ ተማሪዎች ብቻቸውን ይማራሉ፣ እርዳታ የላቸውም እና ከፕሮጀክት በፊት ይተዋወቃሉ።",
    "home.problemSkill": "ተግባራዊ ክህሎት የለም",
    "home.problemSkillText":
      "የገንቢ፣ የንድፍ እና የፈጠራ ራዕይ አለ፣ ነገር ግን እስካሁን የተሠራ ነገር የለም።",
    "home.problemShow": "ማሳየት የሚቻል ነገር የለም",
    "home.problemShowText":
      "ለስራ፣ ለተማሪነት ወይም ለዩኒቨርሲቲ፣ የተማሪነት ውጤት ብዙ ጊዜ ብቻ ማስረጃ ነው።",
    "home.problemGuidance": "እርዳታ የለም",
    "home.problemGuidanceText":
      "የዘፈቀደ ቪዲዮዎች፣ አስተያየት የሌለ፣ እና ተጨናነቀ በሚል ጊዜ ማማራት የሚችል ማንም የለም።",
    "home.deboTitle": "ደቦ ምንድን ነው?",
    "home.deboLead":
      "በኢትዮጵያ መንደሮች ውስጥ ሰብል ሲዘጋጅ፣ ጎረምሶች አብረው እርስ በርስ እንዲረዱ ይሰበሰባሉ። ይህ ስብሰባ ደቦ ነው።",
    "home.deboQuote":
      "ደቦ ራይስ በተማሪዎች የወደፊት ሕይወት ላይ ተመሳሳይ ነው። እንሰበሰባለን፣ እርስ በርስ እንረዳለን፣ እና አብሮ እንነሳለን።",
    "home.methodTitle": "አንድ ቀላል ዘዴ",
    "home.methodLead": "እያንዳንዱ ተማሪ ተመሳሳይ አምስት እርምጃዎችን ይከተላል።",
    "home.learn": "ተማር",
    "home.learnText": "መስክ ይምረጡ እና መሠረታዊ ነገሮችን ይማሩ።",
    "home.think": "አስቡበው",
    "home.thinkText": "ይወያዩ፣ ጥያቄ ይጠይቁ እና ያቅዱ።",
    "home.build": "ሠራ",
    "home.buildText": "እውነተኛ ፕሮጀክት ይፍጠሩ።",
    "home.solve": "ፈታ",
    "home.solveText": "በእውነተኛ ችግር ላይ ይፈትሹት።",
    "home.teach": "አስተማር",
    "home.teachText": "ያስተማሩትን ነገር ያካፍሉ።",
    "home.fieldsTitle": "መስክዎን ይመርጡ",
    "home.fieldsLead":
      "መጀመሪያ ያለው ማንኛውም ተማሪ እንኳን ይቀበላል። አሁን አላውቅም እንዴት ነው? በመረጃ ስብሰባ ሦስቱንም እንዲሞክሩ ትችላላችሁ።",
    "home.web": "የድረ-ገጽ ልማት",
    "home.webText": "HTML እና CSS ይማሩ። ለእውነተኛ ንግድ ተስማሚ ድረ-ገጽ ይፍጠሩ።",
    "home.graphic": "ግራፊክ ዲዛይን",
    "home.graphicText": "ለእውነተኛ ደንበኛ ሎጎ፣ ፖስተር እና ማህበራዊ ልጣጭ ይነድፉ።",
    "home.video": "የቪዲዮ እየስራ",
    "home.videoText": "አጭር ቪዲዮ እቅድ አድርጉ፣ ይቀርጹ እና ያርትዑት።",
    "home.benefitsTitle": "ማን የሚጠቀምበታል",
    "home.student": "ተማሪዎች",
    "home.studentList":
      "እውነተኛ ክህሎት እና የተጠናቀቀ ፕሮጀክት;ፖርትፎሊዮ ለማሳየት;እምነት እና ቀጣይ እርምጃ",
    "home.school": "ት/ቤት",
    "home.schoolList": "የበለጠ ታማኝ ስም;እውነተኛ ፕሮጀክቶች ያላቸው ተማሪዎች;ለወላጆች የማሳያ ቀን",
    "home.generation": "የእኛ ትውልድ",
    "home.generationList":
      "ብዙ ማሰብ ይተካል፣ አብሮ መወጣት;እርስ በርስ እንዴት እንደሚያድጉ;ፈጣሪዎች፣ ሳይሆኑ ተጠቃሚዎች ብቻ",
    "home.readyTitle": "እውነተኛ ነገር ለመፍጠር ዝግጁ ነዎት?",
    "home.readyLead":
      "ቦታዎች በግምት 30 ተማሪዎች ብቻ ተወስነዋል። ያመልክቱ፣ የመረጃ ስብሰባ ይቀላቀሉ እና የመጀመሪያ ሳምንትዎን ይጀምሩ።",
    "home.howJoin": "እንዴት መቀላቀል እንደሚቻል",
    "home.programLink": "ፕሮግራሙን ይመልከቱ",
    "home.ctaTitle": "አስመዝግቡ",
    "home.ctaAlt": "እንዴት መቀላቀል እንደሚቻል",
    "home.photoAlt": "ወደ ፀሐይ የሚያድግ አረንጓዴ ቡቃያ",
    "week.choose": "ሳምንት ይምረጡ",
    "week.schedule1": "ስብሰባ A፦ በት/ቤት በአካል፣ 60 ደቂቃ",
    "week.schedule2": "ስብሰባ B፦ በመስመር ላይ፣ 45 ደቂቃ",
    "week.schedule3": "በየቀኑ፦ ከ1 እስከ 2 ሰዓት መማርና ልምምድ",
    "week.schedule4": "የዕለቱ ማስረጃ፦ በቡድንዎ ውስጥ ስክሪንሾት ወይም ማስታወሻ ያጋሩ",
    "week.schedule5": "ቀን 7፦ ዕረፍት",
    "week.certificateList": "ከ12ቱ ስብሰባዎች ቢያንስ 9ኙን ይከታተሉ;የሥራዎን ማስረጃ ቢያንስ 20 ጊዜ ያጋሩ;የመጨረሻ ፕሮጀክትዎን ያጠናቅቁ እና የአማካሪ ግምገማ ያልፉ;በማሳያ ቀን ሥራዎን ያቅርቡ",
    "week.leaveList": "አንድ ተግባራዊ ክህሎት;አንድ የተጠናቀቀ ፕሮጀክት;ለማሳየት የሚችሉት ሥራ እና የአማካሪ አስተያየት;ቀጣይ እርምጃዎን የሚያሳይ እቅድ",
    "page.join.requirementsList": "በየቀኑ ከ1 እስከ 2 ሰዓት ለ6 ሳምንታት;በሳምንት ሁለት ስብሰባዎች፣ አንዱ በአካል አንዱ በመስመር ላይ;ስልክ ወይም ኮምፒውተር እና ቴሌግራም;የወላጅ ወይም የአሳዳጊ ፈቃድ;እስከመጨረሻው የመቀጠል ፍላጎት",
    "future.appLead": "ቴሌግራም ለውይይት ነፃ ቦታችን ነው። አፕሊኬሽኑ ቴሌግራም የማይሰጠውን ያደርጋል፤ ክህሎትዎን በሥራ ማስረጃ ማረጋገጥ።",
    "future.whyLead": "ተጠቃሚ የሌለው አፕሊኬሽን ባዶ ነው። መጀመሪያ ተማሪዎች ምን እንደሚፈልጉ እንማራለን፣ ከዚያም ያንን ብቻ እንገነባለን።",
    "future.mvpList": "የተማሪ መገለጫ እና የፕሮጀክት ገጾች;ተማር፣ አስብ፣ ገንባ፣ ፍታ፣ አስተምር በሚሉት ደረጃዎች የሚያሳይ እድገት;የአማካሪ አስተያየት እና የተረጋገጠ ምልክት;ሊጋራ የሚችል አንድ የሥራ ማሳያ አገናኝ;ኩባንያዎች ለሥራ ልምምድ የሚመለከቱበት",
    "future.fullList": "ሥራን የሚያጋራ ገጽ፣ ውይይት እና ቡድኖች;ነጥቦች፣ ዋንጫዎች እና ተግዳሮቶች;ለእያንዳንዱ መስክ የመማሪያ መንገዶች;በቀጥታ የአማካሪ ድጋፍ እና ቅጂዎች;ለት/ቤቶች ዳሽቦርድ እና የስልክ መተግበሪያዎች",
    "future.growList": "ት/ቤቶች ፕሮግራሙን ይቀላቀላሉ እና ይደግፋሉ;ኩባንያዎች ተግዳሮቶችን ይደግፋሉ እና የሥራ ልምምድ ዕድል ይሰጣሉ;ወደፊት አማራጭ የክፍያ ሥልጠናዎች",
  },
};
const getTranslation = (key, lang) => (translations[lang] || translations.en)[key] || translations.en[key] || "";
function updatePageText(lang) {
  document.documentElement.lang = lang === "am" ? "am" : "en";
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    const value = getTranslation(key, lang);
    if (value) {
      if (el.dataset.i18nHtml === "true") el.innerHTML = value;
      else el.textContent = value;
    }
  });
  document.querySelectorAll("[data-i18n-list]").forEach((list) => {
    const value = getTranslation(list.dataset.i18nList, lang);
    if (value) {
      const items = value.split(";").map((item) => item.trim());
      [...list.children].forEach((item, index) => {
        if (items[index]) item.textContent = items[index];
      });
    }
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const value = getTranslation(el.dataset.i18nAria, lang);
    if (value) el.setAttribute("aria-label", value);
  });
  const langToggle = document.querySelector("[data-lang-toggle]");
  if (langToggle) {
    langToggle.setAttribute(
      "aria-label",
      lang === "am" ? "Switch language to English" : "ቋንቋን ወደ አማርኛ ቀይር",
    );
  }
  const title = pageTitles[cur]?.[lang] || pageTitles[cur]?.en || document.title;
  if (title) document.title = title;
}
function renderHeaderAndFooter(lang) {
  const navList = lang === "am" ? pagesAm : pages;
  const nav = document.getElementById("nav");
  const footerText = {
    title: lang === "am" ? "ደቦ ራይስ" : "Debo Rise",
    strap: lang === "am" ? "አብሮ እንነሳለን።" : "Rise together.",
    school: lang === "am" ? `ከ ${SCHOOL} የተማሪ ፕሮግራም።` : `A student program at ${SCHOOL}.`,
    explore: getTranslation("footer.explore", lang),
    promise: getTranslation("footer.promise", lang),
    promiseText: getTranslation("footer.promiseTxt", lang),
    supervision: getTranslation("footer.supervision", lang),
    tagline: getTranslation("footer.tagline", lang),
    made: getTranslation("footer.made", lang),
    langBtn: lang === "am" ? "EN" : "አማርኛ",
    apply: getTranslation("nav.apply", lang),
  };
  nav.innerHTML = `
    <header>
      <div class="wrap bar">
        <a href="index.html"><img src="assets/logo.png" alt="Debo Rise"></a>
        <button id="mb" aria-expanded="false" aria-controls="mn">${getTranslation("nav.menu", lang)}</button>
        <nav id="mn">
          ${navList.map((p) => `<a href="${p[0]}" class="${p[0] == cur ? "on" : ""}">${p[1]}</a>`).join("")}
          <button class="lang-toggle" type="button" data-lang-toggle>${footerText.langBtn}</button>
          <a class="btn" data-apply href="${FORM_URL}">${footerText.apply}</a>
        </nav>
      </div>
    </header>
  `;
   document.getElementById("foot").innerHTML = `
    <footer>
      <div class="wrap">
        <div class="fg">
          <div class="footer-brand">
            <img src="assets/logo.png" alt="Debo Rise">
            <p>${footerText.strap}</p>
            <span>${footerText.school}</span>
          </div>
          <div class="footer-links">
            <h2>${footerText.explore}</h2>
            <nav aria-label="Footer">${navList.map((p) => `<a href="${p[0]}">${p[1]}</a>`).join("")}</nav>
          </div>
          <div class="footer-promise">
            <span class="footer-label">${footerText.promise}</span>
            <p>${footerText.promiseText}</p>
            <span>${footerText.supervision}</span>
          </div>
        </div>
        <div class="footer-bottom">
          <span>${footerText.tagline}</span>
          <span>${footerText.made}</span>
        </div>
      </div>
    </footer>
  `;
   const mb = document.getElementById("mb"), mn = document.getElementById("mn");
  if (mb && mn) {
    mb.onclick = () => {
      const isOpen = mn.classList.toggle("open");
      mb.setAttribute("aria-expanded", String(isOpen));
    };
  }
  document.querySelectorAll("[data-apply]").forEach((a) => (a.href = FORM_URL));
  const toggle = document.querySelector("[data-lang-toggle]");
  if (toggle) {
    toggle.addEventListener("click", () => {
      const next = localStorage.getItem("lang") === "am" ? "en" : "am";
      localStorage.setItem("lang", next);
      renderHeaderAndFooter(next);
      updatePageText(next);
      renderProgramWeeks(next);
    });
  }
}
function applyLanguage() {
  const saved = localStorage.getItem("lang");
  const preferred = (navigator.language || "").toLowerCase();
  const lang = saved || (preferred.startsWith("am") ? "am" : "en");
  renderHeaderAndFooter(lang);
  updatePageText(lang);
  renderProgramWeeks(lang);
}
const W = [
  [
    "Learn",
    "Learn the basics and finish a first small task.",
    "“About Me” web page",
    "Recreated poster and your improved version",
    "30 to 45 second practice edit",
  ],
  [
    "Think",
    "Choose a real client and plan your project.",
    "Business brief and paper wireframe",
    "Client brief and moodboard",
    "Concept, storyboard, and shot list",
  ],
  [
    "Build",
    "Start making the real project.",
    "Homepage draft",
    "3 logo ideas and 1 final logo",
    "All footage and a rough cut",
  ],
 [
    "Build",
    "Finish a full working draft.",
    "Full responsive website draft",
    "Poster and social media post",
    "Fine cut of the full video",
  ],
  [
    "Solve",
    "Test with a real person and improve. A guest speaker on digital marketing joins online.",
    "Final website and client feedback",
    "Final brand kit and client feedback",
    "Final video and client feedback",
  ],
  [
    "Teach",
    "Teach what you learned and show your work at Showcase Day.",
    "Presentation and live demo",
    "Presentation with before and after",
    "Presentation and final video",
  ],
];
const W_am = [
  [
    "ተማር",
    "መሠረታዊ ነገሮችን ይማሩ፤ ከዚያም ትንሽ የመጀመሪያ ሥራ ያጠናቅቁ።",
    "“ስለ እኔ” ድረ-ገጽ",
    "የተቀዳ ፖስተር እና ያሻሻሉት ስሪት",
    "ከ30 እስከ 45 ሰከንድ የልምምድ ቪዲዮ እትም",
  ],
  [
    "አስብ",
    "እውነተኛ ደንበኛ ይምረጡ እና ፕሮጀክትዎን ያቅዱ።",
    "የንግድ አጭር መግለጫ እና የወረቀት የገጽ እቅድ",
    "የደንበኛ አጭር መግለጫ እና የምስል ማጣቀሻ ስብስብ",
    "የሀሳብ እቅድ፣ የታሪክ ቅደም ተከተል እና የቀረጻ ዝርዝር",
  ],
  [
    "ገንባ",
    "እውነተኛውን ፕሮጀክት መሥራት ይጀምሩ።",
    "የመነሻ ገጽ ረቂቅ",
    "3 የአርማ ሀሳቦች እና 1 የመጨረሻ አርማ",
    "ሁሉም ቀረጻዎች እና ያልተጠናቀቀ የመጀመሪያ እትም",
  ],
  [
    "ገንባ",
    "ሙሉ በሙሉ የሚሠራ ረቂቅ ያጠናቅቁ።",
    "ለተለያዩ ስክሪኖች የሚስማማ ሙሉ ድረ-ገጽ ረቂቅ",
    "ፖስተር እና የማህበራዊ ሚዲያ ልጥፍ",
    "የሙሉ ቪዲዮው የመጨረሻ እትም",
  ],
  [
    "ፈትሽ እና አሻሽል",
    "ከእውነተኛ ተጠቃሚ ጋር ይፈትሹ እና ያሻሽሉ። በዲጂታል ግብይት ላይ የሚሠራ እንግዳ ተናጋሪ በመስመር ላይ ይቀላቀላል።",
    "የመጨረሻ ድረ-ገጽ እና የደንበኛ አስተያየት",
    "የመጨረሻ የብራንድ ስብስብ እና የደንበኛ አስተያየት",
    "የመጨረሻ ቪዲዮ እና የደንበኛ አስተያየት",
  ],
  [
    "አስተምር",
    "የተማሩትን ለሌሎች ያካፍሉ፤ በማሳያ ቀንም ሥራዎን ያቅርቡ።",
    "አጭር ንግግር እና በቀጥታ የሚያሳይ ሙከራ",
    "የመጀመሪያውንና የተሻሻለውን ሥራ የሚያሳይ ንግግር",
    "ንግግር እና የመጨረሻ ቪዲዮ",
  ],
];
let activeWeek = 0;
function renderProgramWeeks(lang) {
  const wk = document.getElementById("wk");
  const tb = document.getElementById("tabs");
  if (!wk || !tb) return;

  const isAmharic = lang === "am";
  const weekData = isAmharic ? W_am : W;
  const show = (index) => {
    activeWeek = index;
    [...tb.children].forEach((button, buttonIndex) => {
      button.setAttribute("aria-selected", String(buttonIndex === index));
    });
    const week = weekData[index];
    const weekLabel = isAmharic ? "ሳምንት" : "Week";
    const fields = isAmharic
      ? ["የድረ-ገጽ ልማት", "ግራፊክ ዲዛይን", "የቪዲዮ እየስራ"]
      : ["Web Development", "Graphic Design", "Video Editing"];
    wk.innerHTML = `<h3>${weekLabel} ${index + 1}: ${week[0]}</h3><p>${week[1]}</p><table><tr><th>${fields[0]}</th><td>${week[2]}</td></tr><tr><th>${fields[1]}</th><td>${week[3]}</td></tr><tr><th>${fields[2]}</th><td>${week[4]}</td></tr></table>`;
  };

  tb.innerHTML = "";
  weekData.forEach((week, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = `${isAmharic ? "ሳምንት" : "Week"} ${index + 1}`;
    button.onclick = () => show(index);
    tb.appendChild(button);
  });
  show(Math.min(activeWeek, weekData.length - 1));
}
applyLanguage();
