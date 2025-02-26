function analyzeResume() {
    const input = document.getElementById("resumeInput");
    const feedbackDiv = document.getElementById("feedback");

    if (input.files.length === 0) {
        alert("Please upload a resume file.");
        return;
    }

    const resumeFile = input.files[0];
    const reader = new FileReader();

    reader.onload = function (event) {
        const text = event.target.result;

        // Simulate AI-based feedback
        const feedback = generateFeedback(text);
        
        feedbackDiv.innerHTML = "<h3>Resume Feedback:</h3><p>" + feedback + "</p>";
        feedbackDiv.style.display = "block";
    };

    reader.readAsText(resumeFile);
}

function generateFeedback(text) {
    // Simple mock analysis based on keywords
    if (!text.includes("skills")) {
        return "Your resume should include a 'Skills' section.";
    }
    if (!text.includes("experience")) {
        return "Consider adding a 'Work Experience' section.";
    }
    return "Your resume looks well-structured. Consider optimizing formatting.";
}
