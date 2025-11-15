function changeAboutMeText() {
    const aboutMeTexts = [
        "Tech Enthusiast",
        "Full Stack Web Developer",
        "java developer"       
    ];
    const typingSpeed = 100; // milliseconds per character
    const eraseSpeed = 50; // milliseconds per character during erasing
    const pauseTime = 1500; // milliseconds to pause between each text change
    const aboutMeElement = document.querySelector('.about-me');

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentText = aboutMeTexts[textIndex];

        if (!isDeleting && charIndex < currentText.length) {
            // Typing effect
            aboutMeElement.textContent += currentText[charIndex];
            charIndex++;
            setTimeout(type, typingSpeed);
        }
         else if (isDeleting && charIndex > 0) {
            // Erasing effect
            aboutMeElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(type, eraseSpeed);
        } 
        else {
            // Pause before switching to next text
            isDeleting = !isDeleting;
            if (!isDeleting) {
                textIndex = (textIndex + 1) % aboutMeTexts.length;
            }
            setTimeout(type, pauseTime);
        } 
    }

    type();
}
document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('dark-mode-toggle'); // Get the toggle button
    const body = document.body; // Get the body element

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode'); // Add/remove dark mode class
        const icon = darkModeToggle.querySelector('i'); // Get the icon inside the toggle button
        icon.classList.toggle("fa-sun"); // Switch to sun icon (light mode)
        icon.classList.toggle("fa-moon"); // Switch to moon icon (dark mode)
    });
});
changeAboutMeText();
document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar=entry.target.querySelector('.progress-bar');
                const progress = progressBar.dataset.progress;
                progressBar.style.setProperty('--progress', `${progress}%`);
                progressBar.classList.add('animated'); 
                observer.unobserve(entry.target); 
            } 
        });
    });
    const programmingLanguages= document.querySelectorAll('#programming-languages .skill');
    programmingLanguages.forEach(skill => {
        observer.observe(skill);
    });    
    });


    