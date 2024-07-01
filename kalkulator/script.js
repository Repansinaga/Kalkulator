let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        // Ganti semua 'x' dengan '*' untuk evaluasi
        let expression = display.value.replace(/x/g, '*');
        
        // Gunakan Function constructor untuk evaluasi yang lebih aman
        let result = Function('"use strict";return (' + expression + ')')();
        
        // Tampilkan hasil dengan maksimal 8 desimal jika bukan integer
        display.value = Number.isInteger(result) ? result : result.toFixed(8);
    } catch (error) {
        display.value = 'Error';
    }
}

// Tambahkan event listener untuk input keyboard
document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (/[0-9+\-*/x.]/.test(key)) {
        appendToDisplay(key === '*' ? 'x' : key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        display.value = display.value.slice(0, -1);
    } else if (key === 'Escape') {
        clearDisplay();
    }
});