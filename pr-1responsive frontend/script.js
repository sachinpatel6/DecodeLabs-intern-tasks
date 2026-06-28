
// API CONFIG

// This is where our backend server lives.
// When we deploy online later, only this line will need to change.
const API_BASE_URL = "http://localhost:5000/api/rights";


// RENDER CARDS
// (same as before - just the data now comes from the backend)

function renderCards(data, containerId) {
  const container = document.getElementById(containerId);
  let html = "";

  data.forEach((item, index) => {
    html += `
      <div class="flip-card" data-index="${index}">
        <div class="flip-card-inner">
          <div class="flip-front">
            <div class="card-icon">${item.icon}</div>
            <h3 class="card-title" data-en="${item.en.title}" data-hi="${item.hi.title}">${item.en.title}</h3>
            <p class="tap-hint" data-en="Tap to read more" data-hi="और पढ़ने के लिए टैप करें">Tap to read more</p>
          </div>
          <div class="flip-back">
            <p class="card-desc" data-en="${item.en.desc}" data-hi="${item.hi.desc}">${item.en.desc}</p>
          </div>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;

  container.querySelectorAll(".flip-card").forEach(card => {
    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
    });
  });
}


// RENDER FAQ

function renderFAQ(data) {
  const container = document.getElementById("faqList");
  let html = "";

  data.forEach((item, index) => {
    html += `
      <div class="faq-item" data-index="${index}">
        <div class="faq-question">
          <span data-en="${item.en.q}" data-hi="${item.hi.q}">${item.en.q}</span>
          <span class="faq-icon">+</span>
        </div>
        <div class="faq-answer" data-en="${item.en.a}" data-hi="${item.hi.a}">${item.en.a}</div>
      </div>
    `;
  });

  container.innerHTML = html;

  container.querySelectorAll(".faq-item").forEach(item => {
    item.querySelector(".faq-question").addEventListener("click", () => {
      item.classList.toggle("open");
    });
  });
}


// FETCH FROM BACKEND

// "async" lets us use "await" - which means "wait for this to finish before moving on"
async function loadRights() {
  try {
    // fetch() goes and asks the backend for data, like sending a request to a server
    const basicsRes = await fetch(`${API_BASE_URL}/basics`);
    const dailyRes = await fetch(`${API_BASE_URL}/daily`);
    const hiddenRes = await fetch(`${API_BASE_URL}/hidden`);
    const faqRes = await fetch(`${API_BASE_URL}/faq`);

    // .json() converts the raw response into a usable JavaScript array/object
    const basicsData = await basicsRes.json();
    const dailyData = await dailyRes.json();
    const hiddenData = await hiddenRes.json();
    const faqData = await faqRes.json();

    // now render everything using the data we just received
    renderCards(basicsData, "basicsGrid");
    renderCards(dailyData, "dailyGrid");
    renderCards(hiddenData, "hiddenGrid");
    renderFAQ(faqData);

  } catch (error) {
    // this runs if the backend server is not running, or something went wrong
    console.error("Could not load data from backend:", error);
    document.querySelectorAll(".card-grid").forEach(grid => {
      grid.innerHTML = `<p style="color:#a55;">Could not load content. Make sure the backend server is running.</p>`;
    });
  }
}


// LANGUAGE TOGGLE

function setLanguage(lang) {
  document.querySelectorAll("[data-en]").forEach(el => {
    const text = el.getAttribute(lang === "hi" ? "data-hi" : "data-en");
    if (text) {
      el.innerHTML = text;
    }
  });

  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
}

document.getElementById("langToggle").addEventListener("click", (e) => {
  const btn = e.target.closest(".lang-btn");
  if (!btn) return;
  setLanguage(btn.dataset.lang);
});


// MOBILE NAV TOGGLE

document.getElementById("hamburger").addEventListener("click", () => {
  document.getElementById("mainNav").classList.toggle("show");
});


// INIT

loadRights();