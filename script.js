function sendMessage() {
    var input = document.getElementById('messageInput');
    var messageArea = document.getElementById('messageArea');
    var message = input.value.trim();

    if(message !== "") {
        // Create the user's message
        createMessageElement(message, 'right', '#b2fab4'); // Greenish for sent message

        // Simulate receiving a reply after a short delay
        setTimeout(() => {
            const replyMessage = "This is an automatic reply."; // Default reply message
            createMessageElement(replyMessage, 'left', '#fab2b2'); // Different style for reply
        }, 1000); // Adjust delay as needed

        input.value = ''; // Clear the input field
    }

    input.focus(); // Focus back to the input field
}

function submitCase() {
    const geography = document.getElementById('geography').value;
    const caseType = document.getElementById('case-Type').value; // Ensure IDs match your HTML
    const industry = document.getElementById('industry').value;
    const difficulty = document.getElementById('difficulty').value;

    console.log("Hello")


    // Check if all dropdowns have been selected
    if (!geography || !caseType || !industry || !difficulty) {
        alert('Please fill out all fields before submitting.');
        return; // Stop the function if any field is not filled
    }
    fetch('http://localhost:5000/submit-case', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            geography: geography,
            caseType: caseType,
            industry: industry,
            difficulty: difficulty,
            }),
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((error) => console.error('Error:', error));

    if (!geography || !caseType || !industry || !difficulty) {
        alert('Please fill out all fields before submitting.');
        return; // Stop the function if any field is not filled
    }

    console.log("Hello")

    // Save the selections to localStorage
    localStorage.setItem('preferences', JSON.stringify({
        geography: geography,
        caseType: caseType,
        industry: industry,
        difficulty: difficulty,
    }));

    // Redirect to the chat page
    window.location.href = 'chat.html';
}

function createMessageElement(text, alignment, backgroundColor) {
    var messageArea = document.getElementById('messageArea');
    var messageDiv = document.createElement('div');
    messageDiv.textContent = text;
    messageDiv.style.padding = '10px 20px';
    messageDiv.style.margin = '10px 0';
    messageDiv.style.borderRadius = '20px';
    messageDiv.style.backgroundColor = backgroundColor;
    messageDiv.style.color = 'black';
    messageDiv.style.maxWidth = '60%';
    messageDiv.style.wordWrap = 'break-word';
    console.log("createMessageElement")
    if (alignment === 'right') {
        messageDiv.style.float = 'right';
        messageDiv.style.textAlign = 'right'
    } else {
        messageDiv.style.float = 'left';
        messageDiv.style.textAlign = 'left'
    }
    messageDiv.style.clear = 'both';

    messageArea.appendChild(messageDiv);
    messageArea.scrollTop = messageArea.scrollHeight; // Scroll to the bottom of the message area
}

// Function that runs when the chat page loads
function displayWelcomeMessage() {
    // Retrieve preferences from localStorage
    const preferences = JSON.parse(localStorage.getItem('preferences'));

    console.log(preferences);
    if (preferences) {
        const welcomeMessage = `Welcome to your case interview. We will be conducting a ${preferences.caseType} interview targeting the ${preferences.industry} industry in the ${preferences.geography}. This will be a ${preferences.difficulty} case.`;
        // Call createMessageElement with the AI's welcome message
        createMessageElement(welcomeMessage, 'left', '#fab2b2'); // Style for AI message
    }
    // Clear the preferences from localStorage
    localStorage.removeItem('preferences');
}

// Call displayWelcomeMessage when the window loads
window.onload = function() {
    displayWelcomeMessage();
};