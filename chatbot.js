const questions = [
    {
        question: "Do you feel happy?",
        options: {
            a: "Yes",
            b: "No"
        },
        correctAnswer: "a",
        correctResponse: "Super! Let's keep that great energy going.",
        incorrectResponse: "I am sorry to hear that. I hope studying with us helps!"
    },
    {
        question: "Is JavaScript the same as Java?",
        options: {
            a: "Yes",
            b: "No"
        },
        correctAnswer: "b",
        correctResponse: "Exactly! They are completely different languages.",
        incorrectResponse: "Actually, no. They are very different programming languages!"
    },
    {
        question: "What does HTML stand for?",
        options: {
            a: "Hyper Text Markup Language",
            b: "Hot Tamales Make Laughs"
        },
        correctAnswer: "a",
        correctResponse: "Spot on! You are a web dev pro.",
        incorrectResponse: "Haha, nope! It's Hyper Text Markup Language."
    }
];

let currentQuestionIndex = 0; 

const chatContainer = document.getElementById("chat-container");
const chatForm = document.getElementById("chat-form");
const userInput = document.getElementById("user-input");

displayQuestion();

function displayQuestion() {
    let currentQuestion = questions[currentQuestionIndex]; 
    
    let optionsHTML = Object.keys(currentQuestion.options)
        .map(key => `${key}) ${currentQuestion.options[key]}`)
        .join(' | ');

    let botResponse = document.createElement("div");
    botResponse.classList.add("message");
    botResponse.innerHTML = `<strong>Bot:</strong> ${currentQuestion.question} <br> <span style="font-size: 0.9em; color: #555;">${optionsHTML}</span>`; 

    chatContainer.appendChild(botResponse); 
    scrollChatContainerToBottom();
}

function scrollChatContainerToBottom() {
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

chatForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let userResponse = userInput.value.toLowerCase().trim();

    let userMessage = document.createElement("div");
    userMessage.classList.add("message");
    userMessage.innerHTML = `<strong>You:</strong> ${userResponse}`; 
    chatContainer.appendChild(userMessage); 

    let currentQuestion = questions[currentQuestionIndex];
    let botFeedback = document.createElement("div");
    botFeedback.classList.add("message");
    
    if (userResponse === currentQuestion.correctAnswer) {
        botFeedback.innerHTML = `<strong>Bot:</strong> ✅ ${currentQuestion.correctResponse}`; 
    } else {
        botFeedback.innerHTML = `<strong>Bot:</strong> ❌ ${currentQuestion.incorrectResponse}`; 
    }
    
    chatContainer.appendChild(botFeedback); 
    scrollChatContainerToBottom();

    currentQuestionIndex = (currentQuestionIndex + 1) % questions.length; 

    userInput.value = ""; 
    
    setTimeout(displayQuestion, 800);
});