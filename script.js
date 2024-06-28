document.getElementById('yes-button').addEventListener('click', function() {
    document.getElementById('age-check').style.display = 'none';
    document.getElementById('home-page').style.display = 'block';
});

document.getElementById('no-button').addEventListener('click', function() {
    window.location.href = 'https://www.google.com'; 
});

document.getElementById('buy-button').addEventListener('click', function() {
    document.getElementById('popup').classList.remove('hidden');
    setTimeout(function() {
        document.getElementById('popup').classList.add('hidden');
    }, 2000); 
});

const pricePerBottle = 50; 
document.getElementById('quantity').addEventListener('input', function() {
    const quantity = this.value;
    const totalPrice = quantity * pricePerBottle;
    document.getElementById('total-price').innerText = totalPrice.toFixed(2);
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === '1234' && password === '1234') {
        document.getElementById('login-message').innerText = 'Login bem-sucedido!';
        window.location.href = 'index.html'; 
    } else {
        document.getElementById('login-message').innerText = 'Login ou senha incorretos.';
    }
});

const wineSuggestions = {
    1: ['Queijo Brie', 'Carne de Cordeiro', 'Chocolate Amargo'],
};

function loadSuggestions(wineId) { 
    const suggestions = wineSuggestions[wineId];
    const suggestionsContainer = document.getElement
}