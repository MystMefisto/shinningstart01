// Variables
const input = document.querySelector('.input-convertion');
const result = document.querySelector('.result');
const submit = document.querySelector('.btn-convertion');
const convertion = document.querySelector('.convertion-container');
let showResult = null;

// Eventos
submit.addEventListener('click', e => {
    e.preventDefault();
    const value = input.value.trim();

    // to check how longer the input is 
    const numbersPattern = /\d/g;
    const numbersCount = (value.match(numbersPattern) || []).length;

    // Check looking for letters
    const lettersPattern = /[a-zA-Z]/g;
    const lettersCount = (value.match(lettersPattern) || []).length;

    // to check binary numbers
    const binaryPattern = /^[01]+$/;
    const isBinary = binaryPattern.test(value);

    if (numbersCount < 8) {
        // Less than 8 numbers
        const messageElement = document.createElement('li');
        messageElement.classList.add('length-message', 'list-group-item', 'list-group-item-danger','animate__animated','animate__fadeInDown');
        messageElement.innerText = 'Introduce at least 8 digits';
        result.appendChild(messageElement);
        setTimeout(() => {
            result.removeChild(messageElement);
        }, 3000);
    } 
    if (lettersCount > 0) {
        // Has letters
        const messageElement = document.createElement('li');
        messageElement.classList.add('length-message', 'list-group-item', 'list-group-item-danger','animate__animated','animate__fadeInDown');
        messageElement.innerText = 'Please, no letters';
        result.appendChild(messageElement);
        setTimeout(() => {
            result.removeChild(messageElement);
        }, 3000);
    } 
    if (!isBinary) {
        const messageElement = document.createElement('li');
        messageElement.classList.add('length-message', 'list-group-item', 'list-group-item-danger','animate__animated','animate__fadeInDown');
        messageElement.innerText = 'This is a BINARY converter, use binary numbers';
        result.appendChild(messageElement);
        setTimeout(() => {
            result.removeChild(messageElement);
        }, 3000);
    }

    if(isBinary){
        let binaries = [];
        let results = [];
        let result=0;

        //Invert the position of the array
        //to start working with the numbers
        Array.from(value).forEach((number)=>{
            binaries.push(number);
            //return binaries;
        });
        binaries.reverse();

        //Then make the operation to convert in
        //every number in its value depending
        //by the position
        
        binaries.forEach((number,index)=>{
            let operationNumber =(((number)*2)**(index));
            results.push(operationNumber);
        });

        //Now we sum everything to own the
        //result of the convertion
        results.forEach((number)=>{
            result= result + number;
        });

        // const previusResult = convertion.firstChild;
        // convertion.removeChild(previusResult);
        showResult = convertion.querySelector('.show-result');
        if (showResult) {
          showResult.remove();
        }

        //Then create the element to show
        //the convertion result
        showResult = document.createElement('span');
        showResult.classList.add('show-result', 'text-break', 'fs-2', 'fw-medium', 'text-primary', 'animate__fadeInUp','animate__animated');
        showResult.innerHTML = `RESULTS: ${result}`;
        convertion.appendChild(showResult);
    }
});