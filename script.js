// ============ MPSI PYQ QUESTIONS (GK + GS) ============
const gkQuestions = [
  { q: "Who was the first Governor-General of independent India?", options: ["C. Rajagopalachari", "Lord Mountbatten", "Lord Wavell", "Rajendra Prasad"], answer: 1, exp: "Lord Mountbatten (1947–48)." },
  { q: "The Battle of Plassey was fought in which year?", options: ["1757", "1764", "1857", "1761"], answer: 0, exp: "1757 – British vs Siraj-ud-Daulah." },
  { q: "Who founded the 'Servants of India Society'?", options: ["Gandhi", "Gokhale", "Tilak", "Nehru"], answer: 1, exp: "Gopal Krishna Gokhale (1905)." },
  { q: "Which is the longest river of Peninsular India?", options: ["Godavari", "Krishna", "Narmada", "Kaveri"], answer: 0, exp: "Godavari (1465 km)." },
  { q: "The 'Dandi March' was started in which year?", options: ["1928", "1930", "1931", "1942"], answer: 1, exp: "12 March 1930 (Salt Satyagraha)." },
  { q: "Who was the founder of the Mauryan dynasty?", options: ["Ashoka", "Bindusara", "Chandragupta Maurya", "Bimbisara"], answer: 2, exp: "Chandragupta Maurya (322 BCE)." },
  { q: "The National Anthem of India was adopted in?", options: ["1947", "1950", "1951", "1952"], answer: 1, exp: "24 January 1950." },
  { q: "Which state has the highest literacy rate in India?", options: ["Kerala", "Mizoram", "Goa", "Tripura"], answer: 0, exp: "Kerala (2011 Census: 94%)." },
  { q: "Who was the first Deputy Prime Minister of India?", options: ["Morarji Desai", "Sardar Patel", "Charan Singh", "Jagjivan Ram"], answer: 1, exp: "Sardar Vallabhbhai Patel (1947)." },
  { q: "The 'Quit India Movement' was launched in?", options: ["1940", "1942", "1944", "1946"], answer: 1, exp: "8 August 1942." },
  { q: "Which Indian city is known as the 'Silicon Valley of India'?", options: ["Hyderabad", "Pune", "Bengaluru", "Chennai"], answer: 2, exp: "Bengaluru." },
  { q: "Who was the founder of the Gupta dynasty?", options: ["Samudragupta", "Chandragupta I", "Skandagupta", "Ramagupta"], answer: 1, exp: "Chandragupta I (319 CE)." },
  { q: "In which year did India conduct Pokhran-II nuclear test?", options: ["1974", "1995", "1998", "2000"], answer: 2, exp: "11 & 13 May 1998." },
  { q: "Who is known as the 'Iron Man of India'?", options: ["Nehru", "Sardar Patel", "Bhagat Singh", "Tilak"], answer: 1, exp: "Sardar Vallabhbhai Patel." },
  { q: "The first Buddhist Council was held at?", options: ["Pataliputra", "Rajgriha", "Vaishali", "Kundalvan"], answer: 1, exp: "Rajgriha under Ajatashatru." },
  { q: "Which is the largest freshwater lake in India?", options: ["Chilika", "Wular", "Loktak", "Sambhar"], answer: 1, exp: "Wular Lake (J&K)." },
  { q: "Who wrote 'Arthashastra'?", options: ["Kalidasa", "Kautilya", "Banabhatta", "Panini"], answer: 1, exp: "Chanakya / Kautilya." },
  { q: "When was the Reserve Bank of India nationalised?", options: ["1947", "1949", "1951", "1969"], answer: 1, exp: "1 January 1949." },
  { q: "The 'Rowlatt Act' was passed in?", options: ["1917", "1919", "1921", "1923"], answer: 1, exp: "1919 – led to Jallianwala Bagh." },
  { q: "Who was the first woman IPS officer of India?", options: ["Kiran Bedi", "Kavita Choudhary", "Anuradha Koirala", "Bimla Devi"], answer: 0, exp: "Kiran Bedi (1972 batch)." },
  { q: "The highest civilian award of India is?", options: ["Padma Shri", "Padma Vibhushan", "Bharat Ratna", "Param Vir Chakra"], answer: 2, exp: "Bharat Ratna." },
  { q: "Which planet is known as the 'Evening Star'?", options: ["Mars", "Venus", "Mercury", "Jupiter"], answer: 1, exp: "Venus." },
  { q: "The Indian Constitution was adopted on?", options: ["26 Nov 1949", "26 Jan 1950", "15 Aug 1947", "26 Jan 1949"], answer: 0, exp: "26 November 1949." },
  { q: "Who was the last Mughal Emperor?", options: ["Akbar II", "Bahadur Shah Zafar", "Shah Alam II", "Aurangzeb"], answer: 1, exp: "Bahadur Shah Zafar (1837–1857)." },
  { q: "Which Indian state is known as 'God's Own Country'?", options: ["Goa", "Kerala", "Sikkim", "Meghalaya"], answer: 1, exp: "Kerala." },
  { q: "The 'Simon Commission' came to India in?", options: ["1927", "1928", "1929", "1930"], answer: 1, exp: "February 1928." },
  { q: "Who founded the 'Arya Samaj'?", options: ["Vivekananda", "Dayanand Saraswati", "Ramakrishna", "Raja Ram Mohan Roy"], answer: 1, exp: "Swami Dayanand Saraswati (1875)." },
  { q: "The Kargil War was fought in?", options: ["1997", "1998", "1999", "2000"], answer: 2, exp: "May–July 1999 (Operation Vijay)." },
  { q: "Which Article of Indian Constitution deals with 'Right to Constitutional Remedies'?", options: ["Article 19", "Article 21", "Article 32", "Article 44"], answer: 2, exp: "Article 32." },
  { q: "Who was the first Indian to win a Nobel Prize?", options: ["C.V. Raman", "Rabindranath Tagore", "Amartya Sen", "Mother Teresa"], answer: 1, exp: "Rabindranath Tagore (1913, Literature)." }
];

const gsQuestions = [
  { q: "Which Article of Indian Constitution provides for the abolition of untouchability?", options: ["Article 14", "Article 15", "Article 17", "Article 19"], answer: 2, exp: "Article 17." },
  { q: "The Directive Principles of State Policy were borrowed from?", options: ["USA", "Ireland", "UK", "Canada"], answer: 1, exp: "Ireland." },
  { q: "Which Fundamental Right is called the 'Heart and Soul' of the Constitution?", options: ["Right to Equality", "Right to Freedom", "Right to Constitutional Remedies", "Right against Exploitation"], answer: 2, exp: "Article 32 — Right to Constitutional Remedies." },
  { q: "Which is the largest cell in the human body?", options: ["Nerve cell", "Ovum", "Muscle cell", "WBC"], answer: 1, exp: "Female ovum (about 0.1 mm)." },
  { q: "Which vitamin is known as 'Ascorbic Acid'?", options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"], answer: 2, exp: "Vitamin C (Ascorbic Acid)." },
  { q: "The First Schedule of the Indian Constitution deals with?", options: ["States & UTs", "Oaths", "Languages", "Anti-defection"], answer: 0, exp: "List of States & Union Territories." },
  { q: "Which gas is most abundant in Earth's atmosphere?", options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Argon"], answer: 2, exp: "Nitrogen (~78%)." },
  { q: "Who is called the 'Father of the Indian Constitution'?", options: ["Nehru", "Dr. B.R. Ambedkar", "Rajendra Prasad", "Patel"], answer: 1, exp: "Dr. B.R. Ambedkar." },
  { q: "The Governor of a state is appointed by?", options: ["Chief Minister", "President", "Prime Minister", "Chief Justice"], answer: 1, exp: "Appointed by the President." },
  { q: "Which part of the Indian Constitution deals with Fundamental Duties?", options: ["Part III", "Part IV", "Part IV-A", "Part V"], answer: 2, exp: "Part IV-A (Article 51A, 42nd Amendment)." },
  { q: "The chemical symbol of Sodium is?", options: ["So", "Na", "Sd", "S"], answer: 1, exp: "Na (from Latin 'Natrium')." },
  { q: "Which acid is present in the human stomach?", options: ["Sulphuric", "Nitric", "Hydrochloric", "Citric"], answer: 2, exp: "Hydrochloric acid (HCl)." },
  { q: "Who was the chairman of the Drafting Committee of Indian Constitution?", options: ["Nehru", "Dr. B.R. Ambedkar", "Rajendra Prasad", "Sardar Patel"], answer: 1, exp: "Dr. B.R. Ambedkar." },
  { q: "The unit of electric current is?", options: ["Volt", "Watt", "Ampere", "Ohm"], answer: 2, exp: "Ampere (A)." },
  { q: "Which Schedule of the Constitution contains the Anti-Defection Law?", options: ["8th", "9th", "10th", "11th"], answer: 2, exp: "10th Schedule (52nd Amendment, 1985)." },
  { q: "Which blood group is called the 'Universal Donor'?", options: ["AB+", "A-", "O-", "B+"], answer: 2, exp: "O negative (O−)." },
  { q: "The value of 'g' (acceleration due to gravity) is?", options: ["8.9 m/s²", "9.8 m/s²", "10.8 m/s²", "11.2 m/s²"], answer: 1, exp: "9.8 m/s²." },
  { q: "Which is the smallest bone in the human body?", options: ["Femur", "Stapes", "Tibia", "Humerus"], answer: 1, exp: "Stapes (in the middle ear)." },
  { q: "The concept of 'Judicial Review' was borrowed from?", options: ["UK", "USA", "Ireland", "Canada"], answer: 1, exp: "USA." },
  { q: "Which planet has the maximum number of moons?", options: ["Jupiter", "Saturn", "Uranus", "Neptune"], answer: 1, exp: "Saturn (146+ confirmed moons)." },
  { q: "The Right to Education (Article 21A) was added by which Amendment?", options: ["42nd", "44th", "86th", "91st"], answer: 2, exp: "86th Constitutional Amendment (2002)." },
  { q: "Which is the hardest natural substance?", options: ["Iron", "Diamond", "Quartz", "Gold"], answer: 1, exp: "Diamond." },
  { q: "The term of the President of India is?", options: ["4 years", "5 years", "6 years", "7 years"], answer: 1, exp: "5 years." },
  { q: "Which organ is called the 'Master Gland' of human body?", options: ["Thyroid", "Adrenal", "Pituitary", "Pancreas"], answer: 2, exp: "Pituitary gland." },
  { q: "Money Bill can be introduced only in?", options: ["Rajya Sabha", "Lok Sabha", "Either House", "Joint Session"], answer: 1, exp: "Only Lok Sabha (Article 110)." },
  { q: "The SI unit of Pressure is?", options: ["Newton", "Pascal", "Joule", "Watt"], answer: 1, exp: "Pascal (Pa)." },
  { q: "What is the pH value of pure water?", options: ["5", "6", "7", "8"], answer: 2, exp: "7 (neutral)." },
  { q: "Who appoints the Chief Justice of India?", options: ["Prime Minister", "President", "Parliament", "Law Minister"], answer: 1, exp: "Appointed by the President." },
  { q: "The ozone layer is present in which layer of atmosphere?", options: ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"], answer: 1, exp: "Stratosphere." },
  { q: "Which Fundamental Right was removed by the 44th Amendment?", options: ["Right to Equality", "Right to Property", "Right to Freedom", "Right to Education"], answer: 1, exp: "Right to Property (made a legal right under Article 300A)." }
];

// ============ QUIZ LOGIC ============
let questions = [];
let index = 0;
let answers = [];
let timer = null;
let seconds = 0;

function startQuiz(type) {
  questions = type === "gk" ? [...gkQuestions] : [...gsQuestions];
  index = 0;
  answers = new Array(questions.length).fill(null);
  seconds = 0;

  showScreen("quiz");
  startTimer();
  render();
}

function startTimer() {
  clearInterval(timer);
  timer = setInterval(() => {
    seconds++;
    const m = String(Math.floor(seconds / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    document.getElementById("timer").textContent = `⏱ ${m}:${s}`;
  }, 1000);
}

function render() {
  const q = questions[index];

  document.getElementById("qnum").textContent = `Q ${index + 1} / ${questions.length}`;
  document.getElementById("fill").style.width = `${((index + 1) / questions.length) * 100}%`;
  document.getElementById("question").textContent = `${index + 1}. ${q.q}`;

  const box = document.getElementById("options");
  box.innerHTML = "";

  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.textContent = `${String.fromCharCode(65 + i)}. ${opt}`;
    if (answers[index] === i) btn.classList.add("selected");
    btn.onclick = () => {
      answers[index] = i;
      render();
    };
    box.appendChild(btn);
  });

  document.querySelector(".btns button:nth-child(1)").disabled = index === 0;

  const nextBtn = document.querySelector(".btns button:nth-child(2)");
  nextBtn.textContent = index === questions.length - 1 ? "Last" : "Next ➡";
}

function next() {
  if (index < questions.length - 1) {
    index++;
    render();
  }
}

function prev() {
  if (index > 0) {
    index--;
    render();
  }
}

function submitQuiz() {
  const skipped = answers.filter(a => a === null).length;
  if (skipped > 0) {
    if (!confirm(`${skipped} question(s) attempt nahi kiye. Submit karein?`)) return;
  }

  clearInterval(timer);

  let correct = 0, wrong = 0, skip = 0;

  questions.forEach((q, i) => {
    if (answers[i] === null) skip++;
    else if (answers[i] === q.answer) correct++;
    else wrong++;
  });

  const total = questions.length;
  const percent = Math.round((correct / total) * 100);

  document.getElementById("score").textContent = `${correct}/${total}`;
  document.getElementById("c").textContent = correct;
  document.getElementById("w").textContent = wrong;
  document.getElementById("s").textContent = skip;

  let msg = "";
  if (percent >= 90) msg = "🌟 Outstanding!";
  else if (percent >= 70) msg = "👏 Excellent!";
  else if (percent >= 50) msg = "👍 Good! Practice more.";
  else if (percent >= 30) msg = "📚 Average. Keep trying!";
  else msg = "💪 Practice makes perfect!";

  document.getElementById("msg").textContent = `${percent}% — ${msg}`;

  showScreen("result");
}

function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  window.scrollTo({ top: 0 });
}
