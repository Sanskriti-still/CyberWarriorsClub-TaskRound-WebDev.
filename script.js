document.addEventListener('DOMContentLoaded', () => {

    // 1. Hero Section - Dynamic Text Carousel
    const headlines = [
        "Unleash Your Inner Cyber Warrior.",
        "Code, Protect, Innovate.",
        "Join the Front Lines of Digital Defense.",
        "Master the Art of Cybersecurity."
    ];
    let headlineIndex = 0;
    const heroHeadline = document.getElementById('hero-headline');

    function updateHeroHeadline() {
        heroHeadline.textContent = headlines[headlineIndex];
        headlineIndex = (headlineIndex + 1) % headlines.length;
    }

    updateHeroHeadline(); // Initial call
    setInterval(updateHeroHeadline, 3000); // Change headline every 3 seconds

    // 2. About Us - Accordion Data
    const aboutData = [
        { title: "Our Mission", content: "The CyberWarriorsClub is dedicated to fostering a community where students can explore, learn, and excel in cybersecurity, coding, and ethical hacking..." },
        { title: "Our Vision", content: "To be the premier platform for aspiring cyber professionals, driving innovation and promoting secure digital practices..." },
        { title: "Our Values", content: "Collaboration, Innovation, Integrity, Continuous Learning, Impact." }
    ];

    const accordionContainer = document.querySelector('.accordion-container');
    aboutData.forEach(item => {
        const accordionItem = document.createElement('div');
        accordionItem.className = 'accordion-item';
        accordionItem.innerHTML = `
            <div class="accordion-title">${item.title}</div>
            <div class="accordion-content">
                <p>${item.content}</p>
            </div>
        `;
        accordionContainer.appendChild(accordionItem);
    });

    // Add click event listeners to toggle accordion
    accordionContainer.addEventListener('click', (e) => {
        const title = e.target.closest('.accordion-title');
        if (title) {
            title.nextElementSibling.classList.toggle('active');
        }
    });

    // 3. Events Section - Fictional Data
    const events = [
        { title: "Ethical Hacking 101 Workshop", date: "October 26, 2025", type: "upcoming", description: "Learn the fundamentals of penetration testing and white-hat hacking..." },
        { title: "Inter-Club Capture The Flag Challenge", date: "April 15, 2025", type: "past", description: "Our team secured 3rd place! Relive the challenges and solutions..." },
        { title: "Python for Pentesters", date: "November 10, 2025", type: "upcoming", description: "A hands-on workshop to automate security tasks with Python." }
    ];

    const eventGrid = document.querySelector('.event-grid');
    events.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.className = 'event-card';
        eventCard.innerHTML = `
            <h3>${event.title}</h3>
            <p class="event-date">${event.date}</p>
            <p>${event.description}</p>
            <a href="#" class="event-link">${event.type === 'upcoming' ? 'Register Now' : 'View Recap'}</a>
        `;
        eventGrid.appendChild(eventCard);
    });

    // 4. Team Section - Fictional Data
    const teamMembers = [
        { name: "Alex Chen", title: "President", image: "alex.jpg" },
        { name: "Maria Garcia", title: "VP of Operations", image: "maria.jpg" },
        { name: "Sam Wilson", title: "Lead Developer", image: "sam.jpg" }
    ];

    const teamCarousel = document.querySelector('.team-carousel');
    teamMembers.forEach(member => {
        const teamCard = document.createElement('div');
        teamCard.className = 'team-card';
        teamCard.innerHTML = `
            <img src="${member.image}" alt="${member.name}">
            <h4>${member.name}</h4>
            <p>${member.title}</p>
        `;
        teamCarousel.appendChild(teamCard);
    });
});