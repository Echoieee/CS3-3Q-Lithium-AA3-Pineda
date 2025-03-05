function verifyMessage() {
    let message = prompt("Enter your message:");
    let result = "";

    let hasFR = message.indexOf("FR") !== -1 || message.indexOf("fr") !== -1;
    let hasAI = message.indexOf("AI") !== -1 || message.indexOf("ai") !== -1;
    let hasAltAI = message.indexOf("aI") !== -1 || message.indexOf("Ai") !== -1;

    if (hasFR && hasAI) {
        result = 'The message "' + message + '" is legitimate.';
    } else if (hasFR) {
        result = 'The message "' + message + '" is legitimate.';
    } else if (hasAI) {
        result = 'The message "' + message + '" is tampered with.';
    } else if (hasAltAI) {
        result = 'The message "' + message + '" is tampered with.';
    } else {
        result = 'The message  "' + message + '" is yet to be encoded.';
    }

    document.getElementById("result").innerText = result;
}