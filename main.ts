// lib > dom > to create HTMLElement from DOM API
// 
let element1: HTMLElement = document.getElementById("content")

// Refactor with union
let element2: HTMLElement | null = document.getElementById("content")

let obj: object = {
  'id': 1,
  'name': 'sam'
}

// number is not assignable to type object
let obj2: object = 1

let nothingHere: undefined = undefined
let someNull: null = null

let former: string = undefined
// Refactor
let former2: string | undefined = undefined
former2 = 'Now I have a value'

// "strictNullChecks": false, --> prevent many errors in legacy 

function handleError(value: number): never {
  throw new Error ('An error has been ocurred.')
}

function process(data: number): void {
  console.log(`number ${data} accepted.`)
}

