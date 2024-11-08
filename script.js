const scriptURL = 'https://script.google.com/macros/s/AKfycbxcR0sRpni6S2YmIE---II0o0PBfowcGHwBGo3Q5yxnlp482qW0eXrKv4jm6KLfCxGG7w/exec'; // Add the actual URL here

const form = document.forms['join-form'];

form.addEventListener('submit', e => {
    e.preventDefault(); // Remove the space after e.
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => alert("Thank you! Welcome to Clutch Coach."))
        .then(() => {window.location.reload();}) // Removed the extra semicolon
        .catch(error => console.error('Error!', error.message));
})
