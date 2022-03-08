class Player {
  name: string
  x: number = 0
  y: number = 0

  constructor(name: string){
    this.name = name
    // this.x = 0
    // this.y = 0
  }

  display(prefix: string): void{
    console.log(
      prefix +
      " player " + this.name +
      " is at (" + this.x +", "+ this.y + ")"
    )
  }
}

let playOne = new Player('Rukno')
playOne.x = 10
playOne.y = 10

console.log(playOne)

playOne.display('###')

let playTwo = new Player('Emmanuel')
playTwo.x = 20
playTwo.y = 20

