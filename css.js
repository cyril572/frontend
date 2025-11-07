 let x=document.getElementById("dark")
  let y=  document.getElementById("light")
  let z=document.getElementById("change")
  let p=document.getElementById("wee")
  
x.addEventListener('click',()=>{
    document.body.classList.toggle("black")
    if(document.body.classList.contains("black")){
        z.innerText="light mode"
        p.src="star-fill (1).svg"
    }
    else{
        z.innerText="dark mode"
        p.src="emoji-sunglasses.svg"
    }
  
})



// const apiURL =  "https://mocki.io/v1/5b24a48c-c423-40df-aa9a-5f03c39d8169"; // replace with your API link
// let questions = [];
// let currentIndex = 0;

// // Fetch CSS questions from API
// async function loadQuestions() {
//   try {
//     const response = await fetch(apiURL);
//     questions = await response.json();
//     showQuestion();
//   } catch (error) {
//     document.getElementById("question").innerText = "Error loading questions!";
//     console.error(error);
//   }
// }

// // Display the current question
// function showQuestion() {
//   const questionBox = document.getElementById("question");
//   if (currentIndex < questions.length) {
//     questionBox.textContent = questions[currentIndex].question;
//   } else {
//     questionBox.textContent = "🎉 You’ve reached the end!";
//   }
// }

// // Show next question when button is clicked
// document.getElementById("nextBtn").addEventListener("click", () => {
//   currentIndex++;
//   showQuestion();
// });

// // Load questions on page start
// loadQuestions();

// script.js

const apiURL = "https://mocki.io/v1/66676a30-6815-4095-a579-9fabaa2b9190"; // <-- replace with your real Mocki URL
let questions = [];
let currentIndex = 0;
let score = 0;

// Fetch questions from API
async function loadQuestions() {
  try {
    const response = await fetch(apiURL);
    if (!response.ok) throw new Error( "Network response was not ok" `(${response.status})`);
    questions = await response.json();
    // basic validation
    if (!Array.isArray(questions) || questions.length === 0) {
      throw new Error("API did not return an array of questions.");
    }
    showQuestion();
  } catch (error) {
    const qEl = document.getElementById("question");
    if (qEl) qEl.textContent = "Error loading questions!";
    console.error("loadQuestions error:", error);
  }
}

// Display question + options
function showQuestion() {
  const questionBox = document.getElementById("question");
  const optionsBox = document.getElementById("options");

  if (!questionBox || !optionsBox) {
    console.error("Required DOM elements (#question or #options) not found.");
    return;
  }

  if (currentIndex < questions.length) {
    const q = questions[currentIndex];
    // Use backticks for template literals
    questionBox.textContent = `Q${currentIndex + 1}. ${q.question}`;

    // Clear old options
    optionsBox.innerHTML = "";

    // Create buttons for each option (safely handle if options missing)
    (q.options || []).forEach(option => {
      const btn = document.createElement("button");
      btn.textContent = option;
      btn.className = "option-btn";
      btn.type = "button";
      btn.addEventListener("click", () => checkAnswer(option, q.answer));
      optionsBox.appendChild(btn);
    });
  } else {
    // Use backticks here too
    document.getElementById("quiz").innerHTML =
      `<h2>🎉 Quiz Finished!</h2><p>Your score: ${score}/${questions.length}</p>`;
  }
}

// Check answer
function checkAnswer(selected, correct) {
  if (selected === correct) {
    score++;
    document.getElementById("semo").textContent = "✅ Correct!";
    // optionally show feedback on page instead of alert
    // alert("✅ Correct!");
  } else {
    // alert(❌ Wrong! Correct answer: ${correct});
    document.getElementById("semo").textContent =
      `❌ Wrong! The correct answer was: ${correct}`;
  }

  currentIndex++;
  showQuestion();
}

// Start
loadQuestions();