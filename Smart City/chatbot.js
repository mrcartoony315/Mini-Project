function toggleChatbot() {
    let chatbotBox = document.getElementById("chatbot-box");
    chatbotBox.style.display = chatbotBox.style.display === "none" ? "block" : "none";
}

function handleChat(event) {
    if (event.key === "Enter") {
        let userMessage = document.getElementById("userInput").value.toLowerCase();
        let responseBox = document.getElementById("chatbotResponse");

        if (userMessage.includes("hello") || userMessage.includes("hi")) {
            responseBox.textContent = "Hello! How can I help you explore the city?";
        } else if (userMessage.includes("weather")) {
            responseBox.textContent = "You can check the current weather above!";
        } else if (userMessage.includes("transport")) {
            responseBox.textContent = "Click the transport button to see bus & metro info!";
        } else {
            responseBox.textContent = "I'm not sure about that. Try asking about weather, transport, or attractions!";
        }
        
        document.getElementById("userInput").value = "";
    }
}
