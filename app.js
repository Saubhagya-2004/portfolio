const scriptURL = 'https://script.google.com/macros/s/AKfycbxPec861LpA6hE_Gxx_NGrCmz7ECD33XjGH4tWYfDub3t-QWPOizzMKVnAFp2P0pJX6/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Form is submitted" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})