function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.style.display = sidebar.style.display === 'block' ? 'none' : 'block';
}

function closeSidebar() {
    document.getElementById('sidebar').style.display = 'none';
}

window.onclick = function(event) {
    const sidebar = document.getElementById('sidebar');
    if (event.target !== sidebar && event.target.className !== 'hamburger') {
        sidebar.style.display = 'none';
    }
}


let currentIndex = 0;
const slider = document.querySelector('.slider');
const totalCards = document.querySelectorAll('.card').length;

function moveSlider(direction) {
    const maxIndex = totalCards - 1;
    currentIndex = (currentIndex + direction + totalCards) % totalCards;
    slider.style.transform = `translateX(-${currentIndex * 320}px)`;
}

// Auto-slide functionality
setInterval(() => {
    moveSlider(1);
}, 3000); // Changes slide every 3 seconds


document.addEventListener('DOMContentLoaded', () => {
    const reviews = document.querySelectorAll('.review-card');
    const slider = document.querySelector('.feedback-slider');
    const progressBar = document.querySelector('.progress-fill');
    const prevButton = document.querySelector('.prev-btn');
    const nextButton = document.querySelector('.next-btn');

    if (!slider || reviews.length === 0) {
        console.error("Slider or reviews not found.");
        return;
    }

    let reviewIndex = 0;

    // Function to change reviews
    function changeReview(direction) {
        // Remove active state from all reviews
        reviews.forEach(review => review.classList.remove('active'));

        // Update index and apply changes
        reviewIndex = (reviewIndex + direction + reviews.length) % reviews.length;

        slider.style.transform = `translateX(-${reviewIndex * 100}%)`;

        // Highlight the active review
        reviews[reviewIndex].classList.add('active');

        // Progress bar update
        progressBar.style.width = `${((reviewIndex + 1) / reviews.length) * 100}%`;
    }

    // Button Controls
    prevButton.addEventListener('click', () => changeReview(-1));
    nextButton.addEventListener('click', () => changeReview(1));

    // Initialize by marking the first review active
    reviews[0].classList.add('active');
});


const tabs = document.querySelectorAll('.tab');
const faqItems = document.querySelectorAll('.faq-item');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const category = tab.getAttribute('data-category');

        // Remove active class from all tabs
        tabs.forEach(t => t.classList.remove('active'));

        // Add active class to the clicked tab
        tab.classList.add('active');

        // Hide all FAQ items
        faqItems.forEach(item => {
            if (item.classList.contains(category)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});