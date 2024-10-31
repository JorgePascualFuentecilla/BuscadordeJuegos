import{assignByPrice}from "./ApiIntegration.js"
import{mostrarTarjetas}from "./gameCards.js"
// Crear el formulario
const form = document.createElement('form');
form.method = 'POST'; 
form.action = '/submit'; 
document.body.appendChild(form);

// Crea el label para el campo de entrada de tipo número
const labelNumber = document.createElement('label');
labelNumber.textContent = 'Introduce un número: ';
labelNumber.htmlFor = 'quantity';
form.appendChild(labelNumber);

// Crea el tipo número
const inputNumber = document.createElement('input');
inputNumber.type = 'number';
inputNumber.name = 'quantity';
inputNumber.id = 'quantity'; 
form.appendChild(inputNumber);

// Crear el botón de envío
const submitButton = document.createElement('button');
submitButton.type = 'submit';
submitButton.textContent = 'Enviar';
form.appendChild(submitButton);
submitButton.addEventListener("click", async (e) => {
  e.preventDefault();
  console.log(inputNumber.value)
  const importDeal = await assignByPrice(inputNumber.value);
  mostrarTarjetas(importDeal)
})  