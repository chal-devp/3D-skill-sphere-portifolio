document.getElementById('goldenContactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const feedback = document.getElementById('formFeedback');
    
    // Professional Success State
    feedback.innerHTML = "Thank you. Our concierge will reach out to you shortly.";
    feedback.style.color = "#D4AF37";
    feedback.style.marginTop = "20px";
    feedback.style.textAlign = "center";
    feedback.style.fontSize = "25px";
    
    e.target.reset(); // Clears the form after sending
});

