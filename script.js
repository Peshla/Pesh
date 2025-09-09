// JS Animation: Floating GitHub stats on hover & animated text

// Floating effect for stats cards
document.querySelectorAll('.stats img').forEach((img) => {
  img.addEventListener('mouseenter', () => {
    img.style.transform = 'scale(1.07) rotate(-4deg)';
  });
  img.addEventListener('mouseleave', () => {
    img.style.transform = '';
  });
});

// Animated typing for name
const nameEl = document.querySelector('.profile-info h1');
const nameText = "Peshla Khoza";
let idx = 0;
function typeName() {
  if (idx <= nameText.length) {
    nameEl.textContent = nameText.slice(0, idx) + '|';
    idx++;
    setTimeout(typeName, 130);
  } else {
    nameEl.textContent = nameText;
  }
}
typeName();
