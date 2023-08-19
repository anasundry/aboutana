const container = document.getElementById('container');
const magnifyingGlass = document.getElementById('magnifyingGlass');
const content = document.querySelector('.loading-container');

window.addEventListener('load', () => {
  setTimeout(() => {
    content.style.display = 'none';
    container.innerHTML = '<img src="elo.gif" alt="GIF Background">';
    magnifyingGlass.style.display = 'block'; // Show the magnifying glass
    setupMagnifyingGlass();
  }, 2000); // Adjust the delay time in milliseconds (2000ms = 2 seconds)
});

function setupMagnifyingGlass() {
  document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    magnifyingGlass.style.left = mouseX + 'px';
    magnifyingGlass.style.top = mouseY + 'px';
  });

  // Zoom in and open the next page on image click
  const img = document.querySelector('.container img');
  img.addEventListener('click', () => {
    img.style.transition = 'transform 0.5s ease-in-out';
    img.style.transform = 'scale(2)'; // Zoom in
    setTimeout(() => {
      // Open the next page or perform any action here
      window.location.href = 'nextpage.html';
    }, 500); // Delay before opening the next page in milliseconds (500ms = 0.5 seconds)
  });
}

