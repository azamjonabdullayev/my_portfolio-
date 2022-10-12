function $(selector) {
    return document.querySelector(selector);
}


let btn = document.querySelector('.btn');
let abt = document.querySelector('.about');


let hm = document.querySelector('#home__btn')
  hm.addEventListener('click',()=>{
    home.style.display='none'
    about.style.display='block'
  })
  let exit = document.querySelector('#abd')
  exit.addEventListener('click',()=>{
    about.style.display='none'
    home.style.display='block'
  })
  let sv=document.querySelector('#savol')
  sv.addEventListener('click',()=>{
    about.style.display='none'
    help.style.display='block'
  })
  let av=document.querySelector('#savol__block')
  av.addEventListener('click',()=>{
    help.style.display='none'
    about.style.display='block'


  })
function sendEmail() {
    Email.send({
        SecureToken: "8de80e65-5c14-447e-9ee5-7d1272c73798",
        To: ('azamjondasturchi11@gmail.com'),
        From: document.getElementById("email").value,
        Subject: "Sayt orqali yuborilgan xat",
        Body:
        "Name: " +
        document.getElementById("name").value +
        "<br> Email: " +
        document.getElementById("email").value +
        "<br> Phone: " +
        document.getElementById("phone").value +
        "<br> Message: " +
        document.getElementById("message").value,
      }).then((message) => alert("Xabaringiz muvaffaqiyatli yuborildi!"));}

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
    points: 16.00,
    spacing: 13.00
  })
 
