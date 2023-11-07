// chatbot.js

document.addEventListener("DOMContentLoaded", function () {
    const chatbotButton = document.querySelector("#chatbot-button");
    const chatbotContainer = document.querySelector("#chatbot-container");
    const chatbotMessages = document.querySelector("#chatbot-messages");
    const chatbotInput = document.querySelector("#chatbot-input");

    chatbotButton.addEventListener("click", function () {
        chatbotContainer.classList.toggle("open");
    });

    function appendUserMessage(message) {
        const userMessage = document.createElement("div");
        userMessage.className = "user-message";
        userMessage.innerText = message;
        chatbotMessages.appendChild(userMessage);
    }

    function appendBotMessage(message) {
        const botMessage = document.createElement("div");
        botMessage.className = "bot-message";
        botMessage.innerText = message;
        chatbotMessages.appendChild(botMessage);
    }

    chatbotInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter" && chatbotInput.value) {
            const userMessage = chatbotInput.value;
            appendUserMessage(userMessage);
            chatbotInput.value = "";

            // Simulate a bot response (replace with your actual chatbot logic)
            setTimeout(function () {
                const botResponse = "Welcome to the chat. For further assist contact in email test@gmail.com";
                appendBotMessage(botResponse);
            }, 500);
        }
    });
});


function closeChatbot() {
    localStorage.setItem('chatbot_closed', true);
    window.location.reload();
}

