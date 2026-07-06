// This file holds all the content our API will serve.
// Same data as the frontend, just living on the server now.

const basicsData = [
  {
    icon: "⚖️",
    en: { title: "Right to Equality", desc: "Article 14-18: The law treats every citizen the same, regardless of religion, caste, gender or place of birth." },
    hi: { title: "समानता का अधिकार", desc: "अनुच्छेद 14-18: कानून हर नागरिक के साथ समान व्यवहार करता है।" }
  },
  {
    icon: "🗳️",
    en: { title: "Right to Vote", desc: "Every Indian citizen above 18 years can vote in elections. It is a constitutional right, not a favor." },
    hi: { title: "मतदान का अधिकार", desc: "18 वर्ष से ऊपर हर भारतीय नागरिक चुनाव में मतदान कर सकता है।" }
  },
  {
    icon: "📚",
    en: { title: "Right to Education", desc: "Article 21A: Free and compulsory education is a fundamental right for children aged 6 to 14." },
    hi: { title: "शिक्षा का अधिकार", desc: "अनुच्छेद 21A: 6 से 14 वर्ष के बच्चों के लिए मुफ्त और अनिवार्य शिक्षा एक मौलिक अधिकार है।" }
  },
  {
    icon: "🗣️",
    en: { title: "Freedom of Speech", desc: "Article 19: You can express your opinion, with reasonable restrictions to protect public order." },
    hi: { title: "अभिव्यक्ति की स्वतंत्रता", desc: "अनुच्छेद 19: आप अपनी राय रख सकते हैं, कुछ सीमाओं के साथ।" }
  },
  {
    icon: "🚫",
    en: { title: "Right Against Discrimination", desc: "Article 15: No one can be denied access to public places, jobs or services based on caste, religion or gender." },
    hi: { title: "भेदभाव के विरुद्ध अधिकार", desc: "अनुच्छेद 15: जाति, धर्म या लिंग के आधार पर भेदभाव नहीं किया जा सकता।" }
  }
];

const dailyData = [
  {
    icon: "🛒",
    en: { title: "Consumer Rights", desc: "Consumer Protection Act 2019: You can demand refunds, replacements or compensation for defective goods." },
    hi: { title: "उपभोक्ता अधिकार", desc: "उपभोक्ता संरक्षण अधिनियम 2019: खराब सामान के लिए रिफंड या मुआवज़ा माँग सकते हैं।" }
  },
  {
    icon: "📄",
    en: { title: "Right to Information", desc: "RTI Act 2005: Any citizen can ask any government department for information within 30 days." },
    hi: { title: "सूचना का अधिकार", desc: "RTI अधिनियम 2005: कोई भी नागरिक सरकारी विभाग से जानकारी मांग सकता है।" }
  },
  {
    icon: "🚔",
    en: { title: "Right Against Arbitrary Arrest", desc: "Article 22: Police must inform you of the reason for arrest within 24 hours." },
    hi: { title: "मनमानी गिरफ्तारी के विरुद्ध अधिकार", desc: "अनुच्छेद 22: पुलिस को गिरफ्तारी का कारण बताना होगा।" }
  },
  {
    icon: "🛡️",
    en: { title: "Women Safety Laws", desc: "Domestic Violence Act & IPC Sections protect women from harassment and abuse." },
    hi: { title: "महिला सुरक्षा कानून", desc: "घरेलू हिंसा अधिनियम महिलाओं को उत्पीड़न से बचाता है।" }
  },
  {
    icon: "🔒",
    en: { title: "Right to Privacy", desc: "Declared a fundamental right under Article 21 by the Supreme Court in 2017." },
    hi: { title: "निजता का अधिकार", desc: "2017 में सुप्रीम कोर्ट ने इसे अनुच्छेद 21 के तहत मौलिक अधिकार घोषित किया।" }
  }
];

const hiddenData = [
  {
    icon: "💻",
    en: { title: "Cyber Laws", desc: "IT Act 2000: Online fraud and harassment are punishable. File complaints at cybercrime.gov.in." },
    hi: { title: "साइबर कानून", desc: "IT अधिनियम 2000: ऑनलाइन धोखाधड़ी दंडनीय है। शिकायत cybercrime.gov.in पर करें।" }
  },
  {
    icon: "👨‍⚖️",
    en: { title: "Right to Free Legal Aid", desc: "Article 39A: If you cannot afford a lawyer, the state must provide one free of cost." },
    hi: { title: "मुफ्त कानूनी सहायता का अधिकार", desc: "अनुच्छेद 39A: वकील का खर्च न उठा पाने पर राज्य मुफ्त वकील देगा।" }
  },
  {
    icon: "🤐",
    en: { title: "Right Against Self-Incrimination", desc: "Article 20(3): No one can be forced to be a witness against themselves." },
    hi: { title: "आत्म-दोषारोपण के विरुद्ध अधिकार", desc: "अनुच्छेद 20(3): किसी को अपने खिलाफ गवाह बनने पर मजबूर नहीं किया जा सकता।" }
  },
  {
    icon: "🚗",
    en: { title: "Motor Vehicle Rights", desc: "Police can ask only for license, RC, insurance and pollution certificate. A soft copy is valid." },
    hi: { title: "मोटर वाहन अधिकार", desc: "पुलिस केवल लाइसेंस, RC, इंश्योरेंस मांग सकती है। सॉफ्ट कॉपी भी मान्य है।" }
  },
  {
    icon: "🏢",
    en: { title: "Workplace Rights", desc: "POSH Act 2013: Workplaces with 10+ employees must have a harassment complaints committee." },
    hi: { title: "कार्यस्थल अधिकार", desc: "POSH अधिनियम 2013: 10+ कर्मचारियों वाले कार्यस्थल पर शिकायत समिति ज़रूरी है।" }
  }
];

const faqData = [
  { en: { q: "Can the police search my phone without permission?", a: "No. Police generally need a warrant or your consent, except in specific situations." }, hi: { q: "क्या पुलिस बिना अनुमति फोन चेक कर सकती है?", a: "नहीं, कुछ विशेष परिस्थितियों को छोड़कर वारंट चाहिए।" } },
  { en: { q: "Is verbal abuse at the workplace illegal?", a: "Yes, if it amounts to harassment, it can be reported under workplace conduct laws." }, hi: { q: "क्या कार्यस्थल पर मौखिक दुर्व्यवहार गैरकानूनी है?", a: "हां, यह उत्पीड़न माना जा सकता है।" } },
  { en: { q: "Can a shopkeeper refuse to give a bill?", a: "No. Every customer has the right to a proper bill." }, hi: { q: "क्या दुकानदार बिल देने से मना कर सकता है?", a: "नहीं, हर ग्राहक को बिल पाने का अधिकार है।" } },
  { en: { q: "Do minors have any legal rights at work?", a: "Child labour below 14 in hazardous jobs is banned under the Child Labour Act." }, hi: { q: "क्या नाबालिगों के काम पर अधिकार हैं?", a: "14 वर्ष से कम उम्र में खतरनाक काम कराना प्रतिबंधित है।" } }
];

module.exports = { basicsData, dailyData, hiddenData, faqData };
