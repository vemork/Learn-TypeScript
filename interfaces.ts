
interface User {
  name: string,
  firstVisitedAt: Date,
  role: "admin" | "manager" | "employee"
}

interface AdminUSer extends User {
  jobTitle?: string // optional
  access: string[]
  logName(prefix: string): boolean
}

let u: User = {
  name: "Emma",
  firstVisitedAt: new Date(),
  role: "admin"
}

type OtherUSer = { name: string }
let u2: OtherUSer = { name: "Bob"}

let usu: AdminUSer = {
  name: "Karl",
  firstVisitedAt: new Date(),
  role: "manager",
  access: ['backoffice'],
  logName(prefix: string){
    console.log(prefix)
    return true
  }
}

interface MapOfUsers {
  [id: number]: User
}

let m: MapOfUsers = {
  0: usu,
  1: {
    name: "Emmanuel",
    firstVisitedAt: new Date(),
    role: "manager", 
  }
}

interface MapOfUsers2 {
  [id: string]: User
}

let m2: MapOfUsers2 = {
  "principal": usu,
  "viceprincipal": {
    name: "Emmanuel",
    firstVisitedAt: new Date(),
    role: "manager", 
  }
}