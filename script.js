// DATA

const basicsData = [
  {
    icon: "⚖️",
    en: { title: "Right to Equality", desc: "Article 14-18: The law treats every citizen the same, regardless of religion, caste, gender or place of birth." },
    hi: { title: "समानता का अधिकार", desc: "अनुच्छेद 14-18: कानून हर नागरिक के साथ समान व्यवहार करता है, चाहे धर्म, जाति, लिंग या जन्म स्थान कुछ भी हो।" }
  },
  {
    icon: "🗳️",
    en: { title: "Right to Vote", desc: "Every Indian citizen above 18 years can vote in elections. It is a constitutional right, not a favor." },
    hi: { title: "मतदान का अधिकार", desc: "18 वर्ष से ऊपर हर भारतीय नागरिक चुनाव में मतदान कर सकता है। यह एक संवैधानिक अधिकार है।" }
  },
  {
    icon: "📚",
    en: { title: "Right to Education", desc: "Article 21A: Free and compulsory education is a fundamental right for children aged 6 to 14." },
    hi: { title: "शिक्षा का अधिकार", desc: "अनुच्छेद 21A: 6 से 14 वर्ष के बच्चों के लिए मुफ्त और अनिवार्य शिक्षा एक मौलिक अधिकार है।" }
  },
  {
    icon: "🗣️",
    en: { title: "Freedom of Speech", desc: "Article 19: You can express your opinion, but it comes with reasonable restrictions to protect public order." },
    hi: { title: "अभिव्यक्ति की स्वतंत्रता", desc: "अनुच्छेद 19: आप अपनी राय रख सकते हैं, लेकिन सार्वजनिक व्यवस्था बनाए रखने के लिए कुछ सीमाएं भी हैं।" }
  },
  {
    icon: "🚫",
    en: { title: "Right Against Discrimination", desc: "Article 15: No one can be denied access to public places, jobs or services based on caste, religion or gender." },
    hi: { title: "भेदभाव के विरुद्ध अधिकार", desc: "अनुच्छेद 15: जाति, धर्म या लिंग के आधार पर किसी को सार्वजनिक स्थान, नौकरी या सेवाओं से वंचित नहीं किया जा सकता।" }
  }
];

const dailyData = [
  {
    icon: "🛒",
    en: { title: "Consumer Rights", desc: "Consumer Protection Act 2019: You can demand refunds, replacements or compensation for defective goods and services." },
    hi: { title: "उपभोक्ता अधिकार", desc: "उपभोक्ता संरक्षण अधिनियम 2019: खराब सामान या सेवा के लिए आप रिफंड, बदलाव या मुआवज़ा माँग सकते हैं।" }
  },
  {
    icon: "📄",
    en: { title: "Right to Information", desc: "RTI Act 2005: Any citizen can ask any government department for information within 30 days." },
    hi: { title: "सूचना का अधिकार", desc: "RTI अधिनियम 2005: कोई भी नागरिक किसी भी सरकारी विभाग से 30 दिनों में जानकारी मांग सकता है।" }
  },
  {
    icon: "🚔",
    en: { title: "Right Against Arbitrary Arrest", desc: "Article 22: Police must inform you of the reason for arrest and produce you before a magistrate within 24 hours." },
    hi: { title: "मनमानी गिरफ्तारी के विरुद्ध अधिकार", desc: "अनुच्छेद 22: पुलिस को गिरफ्तारी का कारण बताना होगा और 24 घंटे में मैजिस्ट्रेट के सामने पेश करना होगा।" }
  },
  {
    icon: "🛡️",
    en: { title: "Women Safety Laws", desc: "Domestic Violence Act & IPC Sections protect women from harassment, abuse and unsafe workplaces." },
    hi: { title: "महिला सुरक्षा कानून", desc: "घरेलू हिंसा अधिनियम और IPC धाराएं महिलाओं को उत्पीड़न और असुरक्षित कार्यस्थलों से बचाती हैं।" }
  },
  {
    icon: "🔒",
    en: { title: "Right to Privacy", desc: "Declared a fundamental right under Article 21 by the Supreme Court in the 2017 Puttaswamy judgment." },
    hi: { title: "निजता का अधिकार", desc: "2017 के पुट्टस्वामी फैसले में सुप्रीम कोर्ट ने इसे अनुच्छेद 21 के तहत मौलिक अधिकार घोषित किया।" }
  }
];

const hiddenData = [
  {
    icon: "💻",
    en: { title: "Cyber Laws", desc: "IT Act 2000: Online fraud, harassment, and data theft are punishable. You can file a complaint at cybercrime.gov.in." },
    hi: { title: "साइबर कानून", desc: "IT अधिनियम 2000: ऑनलाइन धोखाधड़ी और उत्पीड़न दंडनीय है। शिकायत cybercrime.gov.in पर दर्ज कर सकते हैं।" }
  },
  {
    icon: "👨‍⚖️",
    en: { title: "Right to Free Legal Aid", desc: "Article 39A: If you cannot afford a lawyer, the state must provide one to you free of cost." },
    hi: { title: "मुफ्त कानूनी सहायता का अधिकार", desc: "अनुच्छेद 39A: यदि आप वकील का खर्च नहीं उठा सकते, तो राज्य आपको मुफ्त वकील देगा।" }
  },
  {
    icon: "🤐",
    en: { title: "Right Against Self-Incrimination", desc: "Article 20(3): No one can be forced to be a witness against themselves during police interrogation." },
    hi: { title: "आत्म-दोषारोपण के विरुद्ध अधिकार", desc: "अनुच्छेद 20(3): पुलिस पूछताछ में किसी को भी अपने खिलाफ गवाह बनने पर मजबूर नहीं किया जा सकता।" }
  },
  {
    icon: "🚗",
    en: { title: "Motor Vehicle Rights", desc: "Police can ask only for license, RC, insurance and pollution certificate. A soft copy on your phone is valid." },
    hi: { title: "मोटर वाहन अधिकार", desc: "पुलिस केवल लाइसेंस, RC, इंश्योरेंस और पॉल्यूशन सर्टिफिकेट मांग सकती है। फोन में सॉफ्ट कॉपी भी मान्य है।" }
  },
  {
    icon: "🏢",
    en: { title: "Workplace Rights", desc: "POSH Act 2013: Every workplace with 10+ employees must have a committee to handle harassment complaints." },
    hi: { title: "कार्यस्थल अधिकार", desc: "POSH अधिनियम 2013: 10+ कर्मचारियों वाले हर कार्यस्थल पर उत्पीड़न शिकायत समिति होना ज़रूरी है।" }
  }
];

const faqData = [
  {
    en: { q: "Can the police search my phone without permission?", a: "No. Police generally need a warrant or your consent to search your phone, except in specific situations defined by law." },
    hi: { q: "क्या पुलिस बिना अनुमति मेरा फोन चेक कर सकती है?", a: "नहीं। कुछ विशेष परिस्थितियों को छोड़कर, पुलिस को फोन चेक करने के लिए वारंट या आपकी सहमति चाहिए।" }
  },
  {
    en: { q: "Is verbal abuse at the workplace illegal?", a: "Yes, if it amounts to harassment or creates a hostile work environment, it can be reported under workplace conduct laws." },
    hi: { q: "क्या कार्यस्थल पर मौखिक दुर्व्यवहार गैरकानूनी है?", a: "हां, अगर यह उत्पीड़न या प्रतिकूल कार्य वातावरण बनाता है, तो इसकी शिकायत की जा सकती है।" }
  },
  {
    en: { q: "Can a shopkeeper refuse to give a bill?", a: "No. Every customer has the right to a proper bill for goods or services purchased." },
    hi: { q: "क्या दुकानदार बिल देने से मना कर सकता है?", a: "नहीं। हर ग्राहक को खरीदे गए सामान या सेवा का बिल पाने का अधिकार है।" }
  },
  {
    en: { q: "Do minors have any legal rights at work?", a: "Child labour below 14 years is banned in hazardous occupations under the Child Labour Act, with strict penalties for violations." },
    hi: { q: "क्या नाबालिगों के काम पर कोई कानूनी अधिकार हैं?", a: "बाल श्रम कानून के तहत 14 वर्ष से कम उम्र के बच्चों से खतरनाक काम कराना प्रतिबंधित है।" }
  }
];

// CARDS 
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

// attach flip behaviour
  container.querySelectorAll(".flip-card").forEach(card => {
    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
    });
  });   
}

// FAQ
function renderFAQ() {
  const container = document.getElementById("faqList");
  let html = "";

  faqData.forEach((item, index) => {
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

//  MOBILE NAV TOGGLE
document.getElementById("hamburger").addEventListener("click", () => {
  document.getElementById("mainNav").classList.toggle("show");
});

// INIT
renderCards(basicsData, "basicsGrid");
renderCards(dailyData, "dailyGrid");
renderCards(hiddenData, "hiddenGrid");
renderFAQ();
