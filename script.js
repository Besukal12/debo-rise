const FORM_URL = "https://forms.gle/9DN8bRhPkY456Wx97"; // replace with your Google Form link
const SCHOOL = "Fit Awrari Abayneh Secondary School";
const pages = [
  ["index.html", "Home"],
  ["program.html", "Program"],
  ["future.html", "Our Future"],
  ["join.html", "Join"],
];
const cur = location.pathname.split("/").pop() || "index.html";
document.getElementById("nav").innerHTML =
  `<header><div class="wrap bar"><a href="index.html"><img src="assets/logo.png" alt="Debo Rise"></a><button id="mb" aria-expanded="false" aria-controls="mn">Menu</button><nav id="mn">${pages.map((p) => `<a href="${p[0]}" class="${p[0] == cur ? "on" : ""}">${p[1]}</a>`).join("")}<a class="btn" data-apply href="${FORM_URL}">Apply now</a></nav></div></header>`;
document.getElementById("foot").innerHTML =
  `<footer><div class="wrap"><div class="fg"><div class="footer-brand"><img src="assets/logo.png" alt="Debo Rise"><p>Rise together.</p><span>A student program at ${SCHOOL}.</span></div><div class="footer-links"><h2>Explore</h2><nav aria-label="Footer">${pages.map((p) => `<a href="${p[0]}">${p[1]}</a>`).join("")}</nav></div><div class="footer-promise"><span class="footer-label">Our promise</span><p>Grades always come first.</p><span>A teacher supervises every group.</span></div></div><div class="footer-bottom"><span>Learn together. Build together. Rise together.</span><span>Made for students, rooted in community.</span></div></div></footer>`;
document.querySelectorAll("[data-apply]").forEach((a) => (a.href = FORM_URL));
const mb = document.getElementById("mb"),
  mn = document.getElementById("mn");
mb.onclick = () => {
  const o = mn.classList.toggle("open");
  mb.setAttribute("aria-expanded", o);
};
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
const wk = document.getElementById("wk");
if (wk) {
  const tb = document.getElementById("tabs");
  const show = (i) => {
    [...tb.children].forEach((b, j) => b.setAttribute("aria-selected", j == i));
    const w = W[i];
    wk.innerHTML = `<h3>Week ${i + 1}: ${w[0]}</h3><p>${w[1]}</p><table><tr><th>Web Development</th><td>${w[2]}</td></tr><tr><th>Graphic Design</th><td>${w[3]}</td></tr><tr><th>Video Editing</th><td>${w[4]}</td></tr></table>`;
  };
  W.forEach((w, i) => {
    const b = document.createElement("button");
    b.textContent = "Week " + (i + 1);
    b.onclick = () => show(i);
    tb.appendChild(b);
  });
  show(0);
}
