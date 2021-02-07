
const contentInput = document.querySelector('.content-input');
const gram = document.querySelector('.content-button2');
const kilo = document.querySelector('.content-button1');
const allContent = document.querySelector('.content');
const clear = document.querySelector('.clear-btn');

kilo.addEventListener('click', function(){
        let typedNum = contentInput.value;
        console.log(typedNum);
    if (typedNum !== ''){
        const newVar = new Converter(typedNum);
        let kg = newVar.convertTokilo();
    document.querySelector('.display').innerText = kg;
    }
    gram.disabled = true;
});

gram.addEventListener('click', function(){
    let typedNum = contentInput.value;
    console.log(typedNum);
if (typedNum !== ''){
    const newVar = new Converter(typedNum);
   let g = newVar.convertTogram(); 
document.querySelector('.display').innerText = g;
}
kilo.disabled = true;
});

clear.addEventListener('click', function(){
    document.querySelector('.display').innerHTML = "";
    contentInput.value = "";
    kilo.disabled = false;
    gram.disabled = false;
})
