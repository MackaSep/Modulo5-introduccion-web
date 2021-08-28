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

let usuarios = [usuario1, usuario2, usuario3, usuario4, usuario5, usuario6, usuario7, usuario8]

if (n<= usuarios.length) {
    console.log("Hola con arreglo " usuarios[n-1])
}else{
    console.log("Usuario no registrado")
}