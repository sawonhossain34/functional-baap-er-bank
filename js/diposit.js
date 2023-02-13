

function getInputFieldValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
}

function getElementValueByid(elementId){
    const element =document.getElementById(elementId);
    const elementValueString =element.innerText;
    const value =parseFloat(elementValueString);
    return value;
}

document.getElementById('btn-diposit').addEventListener('click',function(){

const newDipositAmmount = getInputFieldValueById('diposit-field');

})