const keyframes = [
  {
    transform: 'rotateX(0)',
    offset: 0,
  },
  {
    transform: 'rotateY(180deg) rotateX(360deg) translateZ(-100px)',
    offset: 1
  }
];

let firstClick = true;

const timing = {
  duration: 2000,
  fill: 'forwards',
  easing: 'ease-in-out'
  // iterations: Infinity
}

// const animation = new Animation(keyframes,timing);
const card = document.getElementById('card');

const ani = card.animate(keyframes,timing);
ani.pause();



card.onclick = (e) => {
  const href = e?.target?.href;
  e.preventDefault();
  if (firstClick) {
    firstClick = false;
    ani.play();
  } else {
    ani.reverse();
  }
  if (href) {
    setTimeout(() => {
      window.open(href, '_blank');
    }, 1000)
  }
}