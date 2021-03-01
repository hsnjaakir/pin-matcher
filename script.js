const notifySection = document.getElementById("notify-section");
notifySection.style.display = "none";
function Random () {
    const number = Math.random()*10000;
    let value = Math.round(number);
    let length = Math.log10(value)+1;
    while (length < 4) {
        value = value*10;
        length = Math.log10(value)+1;
}
    return value;
}
const randomValue = Random ();

const generatePin = document.getElementById("generatePin");
generatePin.addEventListener('click', function (){
    document.getElementById("randomText").value = randomValue;
})

function button (id) {
    const x = document.getElementById(id);
    x.addEventListener('click',function (){
    const initialInput = document.getElementById("getPin").value;
    const getPin = document.getElementById(id).innerText; 
    document.getElementById("getPin").value = initialInput + getPin;
})
}

const clear = document.getElementById('clear');
clear.addEventListener('click', function(){
    document.getElementById('getPin').value = '';
})

const clearOneByOne = document.getElementById('delete');
clearOneByOne.addEventListener('click', function(){
    const getPin = document.getElementById('getPin').value;
    const quotient = getPin/10;
    const result = Math.floor(quotient);
    if (result == 0) {
        document.getElementById('getPin').value = '';
    }
    else{
        document.getElementById('getPin').value = result;
    }

})

button("zero");
button("one");
button("two");
button("three");
button("four");
button("five");
button("six");
button("seven");
button("eight");
button("nine");

const submit = document.getElementById('submit');
submit.addEventListener('click', function(){
    if (randomValue == document.getElementById("getPin").value) {
        notifySection.style.display = "block";
    }
})
