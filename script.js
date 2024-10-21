function rsvp(eventName) {
    const notificationList = document.getElementById('notification-list');
    
    // Create a new notification element
    const newNotification = document.createElement('div');
    newNotification.innerHTML = `You have RSVP'd for the event: <strong>${eventName}</strong>`;
    
    // Add the new notification to the list
    notificationList.appendChild(newNotification);

    // Display a confirmation message
    alert(`You have successfully RSVP'd for ${eventName}!`);
}

function feedback(eventName) {
    const userFeedback = prompt(`Please provide your feedback for ${eventName}:`);
    if (userFeedback) {
        alert(`Thank you for your feedback on ${eventName}!`);
        
        // You can add logic here to store the feedback in the system
    }
}
