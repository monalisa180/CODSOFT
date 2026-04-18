function sendMessage() {
    let input = document.getElementById("userInput").value;
    let chatbox = document.getElementById("chatbox");

    if (input.trim() === "") return;

    // Show user message
    chatbox.innerHTML += `<p class="user-msg"><b>You:</b> ${input}</p>`;

    let response = getBotResponse(input.toLowerCase());

    // Show bot response
    chatbox.innerHTML += `<p class="bot-msg"><b>Bot:</b> ${response}</p>`;

    document.getElementById("userInput").value = "";

    chatbox.scrollTop = chatbox.scrollHeight;
}

// RULE-BASED RESPONSES
function getBotResponse(input) {

    if (input.includes("hello") || input.includes("hi")) {
        return "Hello! How can I help you?";
    }

    else if (input.includes("how are you")) {
        return "I'm just a bot, but I'm doing great!";
    }

    else if (input.includes("what is your name")) {
        return "I am a Rule-Based Chatbot ";
    }

    else if (input.includes("bye")) {
        return "Goodbye! Have a nice day!";
    }
    else if (input.includes("what is today's date")) {
        let date = new Date().toLocaleDateString();
        return "Today's date is  " + date;
    }

    else if (input.includes("help")) {
        return "You can ask me simple questions like hello, name, or help.";
    }

    else {
        return "Sorry, I don't understand that.";
    }
}
