// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Contact Form Alert (Modify if needed)
document.addEventListener('DOMContentLoaded', function () {
    const contactSection = document.getElementById('contact');
    contactSection.innerHTML += `
        <form id="contactForm">
            <input type="text" id="name" placeholder="Your Name" required>
            <input type="email" id="email" placeholder="Your Email" required>
            <textarea id="message" placeholder="Your Message" required></textarea>
            <button type="submit">Send</button>
        </form>
    `;

    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you! Your message has been sent.');
        this.reset();
    });
});