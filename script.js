function sendMessage() {
    const messageContainer = document.querySelector('.chat-messages');
    const messageInput = document.getElementById('message-input');
    const messageText = messageInput.value.trim();

    if (messageText === '') {
        return; // Don't send empty messages
    }

    const messageElement = document.createElement('div');
    messageElement.className = 'message';

    const senderName = 'Nate'; // Example sender name
    const senderColor = 'nate'; // Class for sender color

    if (Math.random() < 0.5) {
        senderName = 'ANi';
        senderColor = 'ani';
    }

    messageElement.classList.add(senderColor);
    messageElement.innerHTML = `<span class="sender-name ${senderColor}">${senderName}:</span> ${messageText}`;

    messageContainer.appendChild(messageElement);
    messageInput.value = ''; // Clear the input field
}
