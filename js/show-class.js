document.addEventListener("DOMContentLoaded", function() {
    const imgSection = document.querySelector('.about-img');
    const detailSection = document.querySelector('.about-detail');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target); // Stop observing once the animation is triggered
            }
        });
    }, { threshold: 0.1 }); // Trigger when 10% of the section is visible

    observer.observe(imgSection);
    observer.observe(detailSection);
});
