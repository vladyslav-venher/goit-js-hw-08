document.addEventListener('DOMContentLoaded', handlerContent);

function handlerContent() {
    const nameInput = document.getElementById('name-input');
    const nameOutput = document.getElementById('name-output');

    nameInput.addEventListener('input', handlerInput);
    function handlerInput() {
        const valueTrimmed = nameInput.value.trim();
        nameOutput.textContent = valueTrimmed ? valueTrimmed : "Anonymous";
    }
}

