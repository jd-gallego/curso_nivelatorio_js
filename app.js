/*
let title = document.getElementById("main_title");
let btn = document.getElementById("button_enviar");
btn.addEventListener("click", function(){
    let currentTitle = title.textContent;
    if (currentTitle === currentTitle.toUpperCase()) {

        title.textContent = currentTitle.toLowerCase();

    } else {

        title.textContent = currentTitle.toUpperCase();

    }
});

const precioOriginal = 20000;
const descuentoPorcentaje = 20;

function calcularPrecioConDescuento() {
    if (precioOriginal > 0) {

        const descuento = precioOriginal * (descuentoPorcentaje / 100);
        const precioFinal = precioOriginal - descuento;
        return precioFinal;

    } else {

        return precioFinal = "El precio debe ser mayor a 0";

    }
}

const precioConDescuento = calcularPrecioConDescuento();
    console.log(precioConDescuento);




   let sum = 0;
   for (let i = 0; i < 10; i++){

    sum += i;

   }
   console.log(sum);



   let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
   let sumVal = 0;

for(let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 === 0){

        sumVal += numbers[i];

    }
}
console.log(sumVal);



const add = (a,b) => a + b;
const multiply = (a,b) => a * b;

const result = multiply(add(2,3), add(4,5));
console.log(result);

const factorial = n =>(n === 0 ? 1 : n * factorial(n - 1));
console.log(factorial(5));



// condicional if ternario
const numero = 5;
const verificar = numero < 5 ? "El numero "+numero+" es menor a 5." : "El numero "+numero+" es mayor o igual a 5.";
console.log(verificar);



let counter = 10
console.log(counter);
function add(num1, num2){
    counter ++;
    return num1 + num2 + counter;
}
const result1 = add(10,20);
const result2 = add(10,20);
const result3 = add(10,20);
console.log(result1, result2, result3);
console.log(counter);



//funciones flecha es como una funcion normal solo que no hay necesidad de escribir return para obtener el valor
let add = (a,b) => a + b;
const r4 = add(1,2);
console.log({r4});


//funciones autoejecutables
(() => console.log("autoejecutable"))();



const ventilador = {
    marca : "home element",
    color : "negro",
    velocidades : 3,
    peso : 3000,
    descripcion : function(){
        console.log(
            `el ventilador de marca ${this.marca} tiene ${this.velocidades} velocidades`
        );
    },
};
ventilador.descripcion();

function add(a = 0, b = 0){
    return a + b;
}

console.log(add(10, 5));
console.log(add(10));
console.log(add());

//forma de ordenar un array con .sort
let numbers = [8,2,4,6,1,3,5,7,9];
function arreglar (arr){
    return arr.sort((a,b) => a - b);
}
numbers = arreglar(numbers);
console.log(numbers);



//otra forma pero sin .sort
let numbers = [8,2,4,6,1,3,5,7,9];
function arreglar(arr){
    let len = arr.length;
    for(let i = 0; i < len; i++){
        for(let j = 0; j < len - i - 1; j++){
            if(arr[j] > arr[j + i]){
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
numbers = arreglar(numbers);
console.log(numbers);
*/


const person = [
    {
        firstName : "maria paula",
        lastName : "cañarte",
    },
    {
        firstName : "gabriela",
        lastName : "morales",
    },
    {
        firstName : "emmanuel",
        lastName : "rodas",
    },
];

const complete = person.map((person) => `${person.firstName} ${person.lastName}`);
console.log(complete);


//.filter filtra segun la condicion
const numbers = [1,2,3,4,5,6];
const mayor3 = numbers.filter(function(numbers){
    return numbers > 3;
});
//or
const mayor5 = numbers.filter(number => number > 5);

console.log(mayor3);
console.log(mayor5);



//.find encuentra al primero que cumpla la condicion
const personas = [
    {
        nombre : "Ana", edad : 25
    },
    {
        nombre : "Juan", edad : 30
    },
    {
        nombre : "Luis", edad : 45
    }
];

const persona = personas.find(persona => persona.edad > 50);
console.log(persona);


//