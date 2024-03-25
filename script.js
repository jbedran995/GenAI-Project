function sendMessage() {
    var input = document.getElementById('messageInput');
    var messageArea = document.getElementById('messageArea');
    var message = input.value.trim();

    if(message !== "") {
        var newMessage = document.createElement('div');
        newMessage.textContent = message;
        // Styling for the message
        newMessage.style.padding = '10px 20px';
        newMessage.style.marginBottom = '10px';
        newMessage.style.marginTop = '10px';
        newMessage.style.borderRadius = '20px';
        newMessage.style.backgroundColor = '#b2fab4'; // Greenish background
        newMessage.style.color = 'black'; // Text color black
        newMessage.style.textAlign = 'right';
        newMessage.style.maxWidth = '60%';
        newMessage.style.wordWrap = 'break-word';
        newMessage.style.float = 'right';
        newMessage.style.clear = 'both';

        // Append new message at the bottom
        messageArea.appendChild(newMessage);

        // Clear the input field
        input.value = '';

        // Scroll to the bottom of the message area to show the newest message
        messageArea.scrollTop = messageArea.scrollHeight;
    }

    // Focus back to the input field
    input.focus();
}

function removeDefaultOption(selectElement) {
    for (let i = 0; i < selectElement.options.length; i++) {
        if (selectElement.options[i].value === "") {
            selectElement.remove(i);
            break;
        }
    }
}