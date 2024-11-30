// Function to show the selected page (could be used for more advanced page handling)
function showPage(page) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => section.style.display = 'none'); // Hide all sections
    document.getElementById(page).style.display = 'block'; // Show the selected page
}

// Smooth scrolling for internal links
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop - 60, // offset to account for the header
            behavior: 'smooth'
        });
    });
});

// Form submit action for Contact Us form
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const company = document.getElementById('company').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !company || !subject || !message) {
        alert('All fields are required!');
        return;
    }

    alert(`Thank you, ${name}! Your message has been received.`);
    this.reset();
});
