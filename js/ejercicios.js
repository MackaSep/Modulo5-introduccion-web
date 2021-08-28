// Ejercicio 1
let n = 90
let m = 50
let r = n + m

console.log(r)

// Ejercicio 2
let a = 1
let b = 2
let c = 3
let d = 4
let e = 5
let z = 1 * 2 * 3 * 4 * 5

console.log(z)

// Ejercicio 3
let x = 1
let y = 2
let zeta = 3
let re = ((x + zeta) * y * y)

console.log(re)

// Ejercicio 4
let a1 = "hola"
let b1 = "mundo"

console.log(a1 + b1)

// Ejercicio 5

a = "5"
b = "3"
c = "7"
d = a + b + c


// Ejercicio 6
let usuario1 = { nombre: "juan", apellido: "perez" }
let usuario2 = { nombre: "sara", apellido: "aparicio" }
let usuario3 = { nombre: "sebastián", apellido: "gonzales" }
let usuario4 = { nombre: "catalina", apellido: "rodriguez" }
let usuario5 = { nombre: "laura", apellido: "quintanilla" }
let usuario6 = { nombre: "camila", apellido: "lopez" }
let usuario7 = { nombre: "carlos", apellido: "gutierrez" }
let usuario8 = { nombre: "sergio", apellido: "chacon" }
n = 5

if (n == 1) {
    console.log("Hola, " + usuario1.nombre + " " + usuario1.apellido)
}else if(n == 2) {
    console.log("Hola, " + usuario2.nombre + " " + usuario2.apellido)
}else if(n == 3) {
    console.log("Hola, " + usuario3.nombre + " " + usuario3.apellido)
}else if(n == 4) {
    console.log("Hola, " + usuario4.nombre + " " + usuario4.apellido)
}else if(n == 5) {
    console.log("Hola, " + usuario5.nombre + " " + usuario5.apellido)
}else if(n == 6) {
    console.log("Hola, " + usuario6.nombre + " " + usuario6.apellido)
}else if(n == 7) {
    console.log("Hola, " + usuario7.nombre + " " + usuario7.apellido)
}else if(n == 8) {
    console.log("Hola, " + usuario8.nombre + " " + usuario8.apellido)
}else{
    console.log("Usuario no registrado")
}

// Arreglo / Array



// Ejercicio 1-28 / IF

a = 90
b = 50 
if (a > b) {
    console.log(a + " es mayor")
}else{
    console.log(b + " es mayor")
}

// Ejercicio 2-28 / IF

a = 30
b = 10
if (a > b) {
    console.log(a + " es mayor y " + b + " es menor")
}else if (a < b){ 
    console.log(b + " es mayor y " + a + " es menor")
}else{
    console.log(a + "y" + b + " son iguales")
}

// Ejercicio 3-28 / División Modular %

n = 8

if (n % 2 == 0) {
    console.log(n + " es par")
}else{
    console.log(n + " es IMPAR")
}

// Ejercicio 4-28 
    // Categorías
    // - A Todo Público
    // - B Desde los 9 años
    // - C Desde los 18
    // - D Desde los 25

let edad = 5

let categoria = "B"

if (categoria == "A") {
    console.log("Sí puede ver la película")
}else if (categoria == "B"){
    if (edad >= 9) {
        console.log("Sí puede ver la película")    
    }else{
        console.log("No puede ver la película")
    }
}

// Ejercicio con o si

