// Event listeners for navigation between pages

// Welcome Page
document.getElementById("nextButton").addEventListener("click", function() {
    document.getElementById("welcomePage").style.display = "none";
    document.getElementById("aboutPage").style.display = "block";
});

// About Page
document.getElementById("nextToStreamButton").addEventListener("click", function() {
    document.getElementById("aboutPage").style.display = "none";
    document.getElementById("streamSelectionPage").style.display = "block";
});

document.getElementById("backToWelcomeButton").addEventListener("click", function() {
    document.getElementById("aboutPage").style.display = "none";
    document.getElementById("welcomePage").style.display = "block";
});

// Stream Selection Page
document.getElementById("engineeringButton").addEventListener("click", function() {
    document.getElementById("streamSelectionPage").style.display = "none";
    document.getElementById("departmentSelectionPage").style.display = "block";
    document.getElementById("appliedDepartments").style.display = "none"; // Hide Applied Departments
    document.getElementById("engineeringDepartments").style.display = "block"; // Show Engineering Departments
});

document.getElementById("appliedButton").addEventListener("click", function() {
    document.getElementById("streamSelectionPage").style.display = "none";
    document.getElementById("departmentSelectionPage").style.display = "block";
    document.getElementById("engineeringDepartments").style.display = "none"; // Hide Engineering Departments
    document.getElementById("appliedDepartments").style.display = "block"; // Show Applied Departments
});

document.getElementById("backToAboutButton").addEventListener("click", function() {
    document.getElementById("streamSelectionPage").style.display = "none";
    document.getElementById("aboutPage").style.display = "block";
});

// Department Selection Page
document.getElementById("schoolOfElectrical").addEventListener("click", function() {
    document.getElementById("departmentSelectionPage").style.display = "none";
    document.getElementById("subDepartmentSelectionPage").style.display = "block";
    document.getElementById("electricalSubDepartments").style.display = "block"; // Show Electrical sub-departments
    document.getElementById("mechanicalSubDepartments").style.display = "none"; // Hide Mechanical
    document.getElementById("civilSubDepartments").style.display = "none"; // Hide Civil
});

document.getElementById("schoolOfMechanical").addEventListener("click", function() {
    document.getElementById("departmentSelectionPage").style.display = "none";
    document.getElementById("subDepartmentSelectionPage").style.display = "block";
    document.getElementById("electricalSubDepartments").style.display = "none"; // Hide Electrical
    document.getElementById("mechanicalSubDepartments").style.display = "block"; // Show Mechanical sub-departments
    document.getElementById("civilSubDepartments").style.display = "none"; // Hide Civil
});

document.getElementById("schoolOfCivil").addEventListener("click", function() {
    document.getElementById("departmentSelectionPage").style.display = "none";
    document.getElementById("subDepartmentSelectionPage").style.display = "block";
    document.getElementById("electricalSubDepartments").style.display = "none"; // Hide Electrical
    document.getElementById("mechanicalSubDepartments").style.display = "none"; // Hide Mechanical
    document.getElementById("civilSubDepartments").style.display = "block"; // Show Civil sub-departments
});

// Back Button for Department Selection Page
document.getElementById("backToStreamButton").addEventListener("click", function() {
    document.getElementById("departmentSelectionPage").style.display = "none";
    document.getElementById("streamSelectionPage").style.display = "block";
});

// Sub-Department Selection Page
document.getElementById("backToDepartmentButton").addEventListener("click", function() {
    document.getElementById("subDepartmentSelectionPage").style.display = "none";
    document.getElementById("departmentSelectionPage").style.display = "block";
});


document.getElementById("backToSubDepartmentButton").addEventListener("click", function() {
    document.getElementById("semesterInputPage").style.display = "none";
    document.getElementById("subDepartmentSelectionPage").style.display = "block";
});


// Restart Button
document.getElementById("restartButton").addEventListener("click", function() {
    location.reload(); // Refresh the page to start over
});