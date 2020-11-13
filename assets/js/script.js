let mainDiv = document.createElement('div');
let mainDivInput = document.createElement('div');
let divSpan = document.createElement('div');
let spanInput = document.createElement('span');
let inputFirstNumber = document.createElement('input');
let inputSecondNumber = document.createElement('input');
let button = document.createElement('button');
let resultMultiplication = document.createElement('p');

mainDiv.classList.add('container-fluid');
mainDivInput.classList.add('input-group', 'text-center', 'mt-3');
divSpan.classList.add('input-group-prepend');
spanInput.classList.add('input-group-text');
spanInput.textContent = "Premier nombre | deuxième nombre";
inputFirstNumber.classList.add('form-control', 'col-2');
inputFirstNumber.setAttribute('type', 'number');
inputFirstNumber.setAttribute('placeholder', "Ex : 10");
inputSecondNumber.classList.add('form-control', 'col-2');
inputSecondNumber.setAttribute('type', 'number');
inputSecondNumber.setAttribute('placeholder', 'Ex : 8');
button.classList.add('bg-danger', 'font-weight-bold', 'text-white');
button.textContent = "Multiplier";
resultMultiplication.classList.add('text-center', 'col-7', 'mt-2', 'display-3');

document.body.appendChild(mainDiv);
mainDiv.appendChild(mainDivInput);
mainDivInput.appendChild(divSpan);
divSpan.appendChild(spanInput);
mainDivInput.appendChild(inputFirstNumber);
mainDivInput.appendChild(inputSecondNumber);
mainDivInput.appendChild(button);
mainDiv.appendChild(resultMultiplication);

multiplication = (nb1, nb2) => { 
    return  nb1 * nb2;
};

button.addEventListener('click', function() {
    let nbOne = inputFirstNumber.value;
    let nbTwo = inputSecondNumber.value;
    let result = multiplication(nbOne, nbTwo);
    resultMultiplication.textContent = `Le résultat est ${result}`;
});