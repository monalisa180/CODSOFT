function sendMessage() {
    let input = document.getElementById("userInput").value;
    let chatbox = document.getElementById("chatbox");

    // Show user message
    chatbox.innerHTML += "<p><b>You:</b> " + input + "</p>";

    let response = getBotResponse(input);

    // Show bot response
    chatbox.innerHTML += "<p><b>Bot:</b> " + response + "</p>";

    document.getElementById("userInput").value = "";
}

function getBotResponse(input) {
    input = input.toLowerCase();

    if (input.includes("hello") || input.includes("hi")) {
        return "Hello! How can I help you?";
    } 
    else if (input.includes("how are you")) {
        return "I'm fine! What about you?";
    } 
    else if (input.includes("your name")) {
        return "I am a simple chatbot.";
    } 
    else if (input.includes("bye")) {
        return "Goodbye! Have a nice day!";
    } 
    else {
        return "Sorry, I don't understand.";
    }
}
