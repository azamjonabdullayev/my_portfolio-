function $(selector) {
    return document.querySelector(selector);
}


let btn = document.querySelector('.btn');
let abt = document.querySelector('.about');


btn.onclick = function() {
    btn.classList.toggle('btn--active');
    // btn.className = 'btn active'
    // abt.style.display = 'block'
    abt.classList.toggle('block')
    abt.classList.toggle('about--active');
};


// vanta js uchun kod pasta \\

VANTA.NET({
    el: "#vant",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    // minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x161515,
    backgroundColor: 0xb5b5c3,
    points: 14.00,
    spacing: 13.00
  })
 
