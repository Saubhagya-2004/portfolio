let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');
window.onscroll = () => {
    let scrollPosition = window.scrollY;
    sections.forEach(section => {
        let top = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');
        if (scrollPosition >= top && scrollPosition < top + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector(`header .navbar a[href*="${id}"]`).classList.add('active');
            });
        }
    });
    menuicon.classList.remove('bx-x');
    navbar.classList.remove('active');
};
let menuicon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');
menuicon.onclick=()=>{
  menuicon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}
const scriptURL = 'https://script.google.com/macros/s/AKfycbxN2IdiHchS1ANJBDLuNz4domeSF3wZGfArGbToIZeUeaIUveb4tP53A_g3i5RXWz4/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Form is submitted" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
