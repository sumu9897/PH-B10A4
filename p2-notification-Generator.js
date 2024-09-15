function sendNotification(email) {
    if (!email.includes('@')) {
        return "Invalid Email";
    }

    let parts = email.split('@');
    if (parts.length !== 2) {
        return "Invalid Email";
    }

    let username = parts[0];
    let domain = parts[1];
    
    return `${username} sent you an email from ${domain}`;
}

console.log(sendNotification("zihad@gmail.com"));
console.log(sendNotification("farhan34@yahoo.com"));
console.log(sendNotification("nadim.naem5@outlook.com"));
console.log(sendNotification("fahim234.hotmail.com"));
console.log(sendNotification("sadia8icloud.com"));
