document.querySelectorAll('.icon-item').forEach(item => {
    const img = item.querySelector('img');
    const hoverImg = item.getAttribute('data-hover');
    const sound = new Audio(item.getAttribute('data-sound'));

    item.addEventListener('mouseover', () => {
        img.src = hoverImg; // Change the icon on hover
        sound.play(); // Play sound on hover
    });

    item.addEventListener('mouseout', () => {
        img.src = img.getAttribute('data-original'); // Revert the icon on mouse out
        sound.pause();
        sound.currentTime = 0; // Reset the sound
    });

    // Save the original image source
    img.setAttribute('data-original', img.src);
});
