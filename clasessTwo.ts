interface GameObject {
  x: number
  y: number
  z: number
  update(): void
}

abstract class PlayerNew implements GameObject{
  // only handled at compile time
  // weak with any type every where
  // readonly name: string

  static playerCount = 0
  // works similar to readonly 
  // static readonly maxSpeed = 5
  static maxSpeed = 5

  // private and public only handled at compile time
  name: string
  x: number = 0
  y: number = 0
  z: number = 0

  // not accessible across inheritance
  private score: number = 0
  // accessible only across inheritance
  protected points: number = 0

  // constructor(public name: string){
  // refactor to deaclare, asing and set name variable
  
  constructor(name: string){
    PlayerNew.playerCount++
    this.name = name
    // this.x = 0
    // this.y = 0
  }

  // Cannot assign to 'name' because it is a read-only property.
  // changeName(){
  //   this.name = 'Robocop'
  // }

  display(prefix: string): void {
    console.log(
      prefix +
      " player " + this.name +
      " is at (" + this.x +", "+ this.y + ")"
    )
  }

  abstract delete(): void

  update(): void {}

  private calculateMotion(){
    //very complicated process ...  
  }
}

// access across the class without object instance
console.log(PlayerNew.playerCount)

// with abstract
// Cannot create an instance of an abstract class.
// let PlayObj = new PlayerNew('Bob')

// Property 'calculateMotion' is private and only accessible within class 'PlayerNew'.
// PlayObj.calculateMotion()


class Gunner extends PlayerNew {
  bullets = 0
  // points = 0

  constructor(name: string, public gunType: string){
    // Constructors for derived classes must contain a 'super' call.
    super(name)
    this.points = 0
  }

  update(): void {
    // super.update()
    this.bullets += 1
  }

  delete(): void {
    // process to delete ...
  }
}

let GunnerObj = new Gunner('Rob', 'shotgun')
// Property 'score' is private and only accessible within class 'PlayerNew'.
// GunnerObj.score

// Property 'points' is protected and only accessible within class 'PlayerNew' and its subclasses.
// GunnerObj.points
