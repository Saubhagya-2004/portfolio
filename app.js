const scriptURL = 'https://script.google.com/macros/s/AKfycbxN2IdiHchS1ANJBDLuNz4domeSF3wZGfArGbToIZeUeaIUveb4tP53A_g3i5RXWz4/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Form is submitted" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})