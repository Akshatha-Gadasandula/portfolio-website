function scrollProjects(direction) {
    const container = document.querySelector('.projects-container');
    const scrollAmount = container.offsetWidth; // Use container width for smoother scroll
    container.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}
