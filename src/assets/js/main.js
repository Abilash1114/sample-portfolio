function text(){
    const typed = new Typed("#type", {
        strings: ["UI/UX Designer", "Frontent Developer",],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true,
      });
      
}

function me(){
  const $card = document.querySelector('.me');
let bounds;

function rotateToMouse(e) {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  const leftX = mouseX - bounds.x;
  const topY = mouseY - bounds.y;
  const center = {
    x: leftX - bounds.width / 2,
    y: topY - bounds.height / 2
  }
  const distance = Math.sqrt(center.x**2 + center.y**2);
  
  $card.style.transform = `
    scale3d(1.07, 1.07, 1.07)
    rotate3d(
      ${center.y / 100},
      ${-center.x / 100},
      0,
      ${Math.log(distance)* 2}deg
    )
  `;
  
  $card.querySelector('.glow').style.backgroundImage = `
    radial-gradient(
      circle at
      ${center.x * 2 + bounds.width/2}px
      ${center.y * 2 + bounds.height/2}px,
      #ffffff55,
      #0000000f
    )
  `;
}

$card.addEventListener('mouseenter', () => {
  bounds = $card.getBoundingClientRect();
  document.addEventListener('mousemove', rotateToMouse);
});

$card.addEventListener('mouseleave', () => {
  document.removeEventListener('mousemove', rotateToMouse);
  $card.style.transform = '';
  $card.style.background = '';
});
}

function sec(){
  const menuItems = document.querySelectorAll(".menuname ul li");

  const sections = [
    document.querySelector(".top_header"),      // Home
    document.querySelector("#about-section"),   // About Me
    document.querySelector("#journey-section"), // My Journey
    document.querySelector("#portfolio-section"), // Portfolio
    document.querySelector("#contact-section")  // Contact Us
  ];

  window.addEventListener("scroll", () => {
    let currentIndex = 0;

    sections.forEach((sec, index) => {
      const rect = sec.getBoundingClientRect();
      if (rect.top <= 150 && rect.bottom >= 150) {
        currentIndex = index;
      }
    });

    menuItems.forEach((item, i) => {
      item.classList.remove("active");
      if (i === currentIndex) {
        item.classList.add("active");
      }
    });
  });

}