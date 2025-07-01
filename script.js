function convertTemperature() {
    const input = parseFloat(document.getElementById('inputTemp').value);
    const from = document.getElementById('fromUnit').value;
    const to = document.getElementById('toUnit').value;
    let result;
  
    if (isNaN(input)) return alert("Please enter a valid number");
  
    if (from === to) {
      result = input;
    } else if (from === 'celsius') {
      result = to === 'fahrenheit' ? input * 9/5 + 32 : input + 273.15;
    } else if (from === 'fahrenheit') {
      result = to === 'celsius' ? (input - 32) * 5/9 : (input - 32) * 5/9 + 273.15;
    } else if (from === 'kelvin') {
      result = to === 'celsius' ? input - 273.15 : (input - 273.15) * 9/5 + 32;
    }
  
    const display = document.getElementById('result');
    display.innerText = `${result.toFixed(2)} °${to.charAt(0).toUpperCase()}`;
  
    const historyDiv = document.getElementById('history');
    const entry = document.createElement('div');
    entry.innerText = `${input} ${from} → ${result.toFixed(2)} ${to}`;
    historyDiv.prepend(entry);
  }
  
  function toggleTheme() {
    document.body.classList.toggle('dark-mode');
  }

  // Create ghost cursor
const ghost = document.createElement('div');
ghost.classList.add('ghost-cursor');
document.body.appendChild(ghost);

let mouseX = 0, mouseY = 0;
let ghostX = 0, ghostY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateGhostCursor() {
  ghostX += (mouseX - ghostX) * 0.1;
  ghostY += (mouseY - ghostY) * 0.1;
  ghost.style.left = ghostX + 'px';
  ghost.style.top = ghostY + 'px';
  requestAnimationFrame(animateGhostCursor);
}
animateGhostCursor();
