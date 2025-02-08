document.addEventListener("DOMContentLoaded", function () {
    const chatbotBtn = document.getElementById("chatbot-btn");

    // Create chatbot UI
    const chatbotBox = document.createElement("div");
    chatbotBox.id = "chatbot-box";
    chatbotBox.classList = "fixed bottom-16 right-5 bg-white p-4 shadow-lg rounded-lg hidden";
    chatbotBox.innerHTML = `
        <h3 class="text-lg font-bold mb-2">Chatbot</h3>
        <div id="chat-messages" class="h-32 overflow-auto border p-2 text-sm"></div>
        <input type="text" id="chat-input" class="border w-full p-1 mt-2" placeholder="Ask me anything..." />
        <button id="send-btn" class="bg-blue-500 text-white px-3 py-1 mt-2">Send</button>
    `;

    document.body.appendChild(chatbotBox);

    chatbotBtn.addEventListener("click", function () {
        chatbotBox.classList.toggle("hidden");
    });

    document.getElementById("send-btn").addEventListener("click", function () {
        const chatMessages = document.getElementById("chat-messages");
        const userMessage = document.getElementById("chat-input").value.toLowerCase();

        if (userMessage.trim() !== "") {
            chatMessages.innerHTML += `<p><strong>You:</strong> ${userMessage}</p>`;

            let botReply = "Sorry, I don't understand that. Try asking about our company or services.";

            // Check for keywords and provide appropriate responses
            if (userMessage.includes("company") || userMessage.includes("about")) {
                botReply = "We are a leading IT solutions company providing Web Development, AI, and Cloud Computing services.";
            } 
            else if (userMessage.includes("services")) {
                botReply = "Our services include Web Development, AI-powered solutions, and Cloud Computing.";
            } 
            else if (userMessage.includes("contact")) {
                botReply = "You can contact us at support@itcompany.com or visit our Contact Us page.";
            }

            // Display bot response
            setTimeout(() => {
                chatMessages.innerHTML += `<p><strong>Bot:</strong> ${botReply}</p>`;
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }, 1000);

            document.getElementById("chat-input").value = "";
        }
    });
});
