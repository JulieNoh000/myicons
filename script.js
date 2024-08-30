document.querySelectorAll('.icon-item').forEach(item => {
    const img = item.querySelector('img');
    const hoverImg = item.getAttribute('data-hover');
    const sound = new Audio(item.getAttribute('data-sound'));

    item.addEventListener('mouseover', () => {
        img.src = hoverImg; 
        sound.play(); 
    });

    item.addEventListener('mouseout', () => {
        img.src = img.getAttribute('data-original'); 
        sound.pause();
        sound.currentTime = 0; 
    });

   
    img.setAttribute('data-original', img.src);
});
