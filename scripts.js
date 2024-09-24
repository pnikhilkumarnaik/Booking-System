function confirmBooking() {
    var name = document.getElementById('name').value;
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;
    
    if (name && date && time) {
        var confirmationText = `Name: ${name}<br>Date: ${date}<br>Time: ${time}`;
        document.getElementById('confirmationText').innerHTML = confirmationText;
        document.getElementById('popupModal').style.display = 'block';
    } else {
        alert("Please fill in all fields.");
    }
}

function closeModal() {
    document.getElementById('popupModal').style.display = 'none';
}

function confirmAndRedirect() {
    var name = document.getElementById('name').value;
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;

    // Redirect to ticket page with query parameters
    var confirmationUrl = `ticket.html?name=${encodeURIComponent(name)}&date=${encodeURIComponent(date)}&time=${encodeURIComponent(time)}`;
    window.location.href = confirmationUrl;
}
