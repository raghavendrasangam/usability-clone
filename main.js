const togglebtn = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

togglebtn.addEventListener('click', ()=>{
    navLinks.classList.toggle('active')
})