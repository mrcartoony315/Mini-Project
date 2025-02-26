document.getElementById("meetingForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    if (!name || !email || !date || !time) {
        alert("Please fill all fields!");
        return;
    }

    const meetingLink = `https://meet.example.com/${Date.now()}`;
    
    document.getElementById("confirmation").innerHTML = `
        Meeting Scheduled for <b>${name}</b> on <b>${date}</b> at <b>${time}</b><br>
        <a href="${meetingLink}" target="_blank">Join Meeting</a>
    `;

    // Optionally, send an email notification (requires backend integration)
});
