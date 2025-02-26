function sendMessage() {
    const userInput = document.getElementById("userInput").value.trim();
    if (!userInput) return;

    const chatbox = document.getElementById("chatbox");
    chatbox.innerHTML += `<p class="user-text">${userInput}</p>`;

    const response = getCourseRecommendation(userInput);
    setTimeout(() => {
        chatbox.innerHTML += `<p class="bot-text">${response}</p>`;
        chatbox.scrollTop = chatbox.scrollHeight;
    }, 1000);

    document.getElementById("userInput").value = "";
}

function getCourseRecommendation(input) {
    input = input.toLowerCase();

    if (input.includes("python") || input.includes("programming")) {
        return "I recommend taking 'Python for Beginners' on Coursera!";
    } else if (input.includes("data science") || input.includes("machine learning")) {
        return "You might like 'Machine Learning Specialization' on Udacity!";
    } else if (input.includes("web development")) {
        return "Try 'Full-Stack Web Development' on Udemy!";
    } else {
        return "I couldn't find an exact match. Try searching on edX or Udemy!";
    }
}
