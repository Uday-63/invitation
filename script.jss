function openInvite() {
    document.getElementById("home").style.display = "none";
    document.getElementById("invitation").style.display = "block";
}

// Music
function playMusic() {
    document.getElementById("music").play();
}

// WhatsApp Share
function shareWhatsApp() {
    let text = "You're invited 🎉 Check this invitation:";
    let url = window.location.href;
    window.open(`https://wa.me/?text=${encodeURIComponent(text + " " + url)}`);
}

// Feedback
function submitFeedback() {
    let fb = document.getElementById("feedback").value;
    if (fb === "") {
        alert("Please write something 😊");
    } else {
        alert("Thank you ❤️");
    }
}
