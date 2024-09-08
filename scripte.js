// Function to allow admin to edit the mission
document.getElementById("edit-mission").addEventListener("click", function() {
    let missionText = prompt("Enter new mission:");
    if (missionText) {
        document.getElementById("mission-text").innerText = missionText;
        localStorage.setItem('missionText', missionText); // Save mission to localStorage
    }
});

// Function to allow admin to edit the vision
document.getElementById("edit-vision").addEventListener("click", function() {
    let visionText = prompt("Enter new vision:");
    if (visionText) {
        document.getElementById("vision-text").innerText = visionText;
        localStorage.setItem('visionText', visionText); // Save vision to localStorage
    }
});

// Function to edit team members
function editMember(memberID) {
    let name = prompt("Enter new name for member " + memberID + ":");
    let role = prompt("Enter new role for member " + memberID + ":");
    if (name && role) {
        document.querySelector(`#member${memberID} h3`).innerText = name;
        document.querySelector(`#member${memberID} p`).innerText = role;
        localStorage.setItem(`member${memberID}-name`, name);  // Save team member name
        localStorage.setItem(`member${memberID}-role`, role);  // Save team member role
    }
}

// Admin login (simple example, not secure for production)
function adminLogin() {
    let password = prompt("Enter admin password:");
    if (password === "admin123") {  // Hardcoded admin password
        // Show admin buttons
        let adminBtns = document.querySelectorAll('.admin-btn');
        adminBtns.forEach(btn => btn.style.display = 'inline-block');
        alert("Admin mode activated");
    } else {
        alert("Incorrect password!");
    }
}

// Change background image and save it to localStorage
document.getElementById('change-bg-btn').addEventListener('click', function() {
    let newBgUrl = document.getElementById('bg-url').value;
    if (newBgUrl) {
        document.body.style.backgroundImage = `url('${newBgUrl}')`;
        localStorage.setItem('backgroundImage', newBgUrl); // Save background image URL to localStorage
        document.getElementById('bg-url').value = ''; // Clear input after change
    } else {
        alert("Please enter a valid URL");
    }
});

// Load saved data from localStorage on page load
function loadSavedData() {
    // Load background image
    const savedBgUrl = localStorage.getItem('backgroundImage');
    if (savedBgUrl) {
        document.body.style.backgroundImage = `url('${savedBgUrl}')`;
    }

    // Load mission and vision
    const savedMission = localStorage.getItem('missionText');
    if (savedMission) {
        document.getElementById('mission-text').innerText = savedMission;
    }

    const savedVision = localStorage.getItem('visionText');
    if (savedVision) {
        document.getElementById('vision-text').innerText = savedVision;
    }

    // Load team member data (example for 2 members, you can extend it for all 10)
    for (let i = 1; i <= 10; i++) {
        let savedName = localStorage.getItem(`member${i}-name`);
        let savedRole = localStorage.getItem(`member${i}-role`);
        if (savedName) {
            document.querySelector(`#member${i} h3`).innerText = savedName;
        }
        if (savedRole) {
            document.querySelector(`#member${i} p`).innerText = savedRole;
        }
    }
}

// Automatically prompt for admin login when page loads
window.onload = function() {
    loadSavedData(); // Load saved data from localStorage when the page loads
};
