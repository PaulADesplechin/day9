const progressBarFill = document.getElementById('progress-bar-fill'); 
const progressInput = document.getElementById('progress-input');


function updateProgressBar() {
    const inputValue = progressInput.value; 


    if (inputValue >= 0 && inputValue <= 100) {
        progressBarFill.style.width = `${inputValue}%`;
        alert('Please enter a value between 0 and 100.');
    }
}

progressInput.addEventListener('input', updateProgressBar);
