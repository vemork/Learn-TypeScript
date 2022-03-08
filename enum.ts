enum EnemyState {
  SLEPPING,
  PATROLLING,
  FIGHTING
}

// Values

// 0
// 1
// 2
// ...

enum EnemyState2 {
  SLEPPING = 10,
  PATROLLING,
  FIGHTING
}

// Values

// 10
// 11
// 12
// ...

enum EnemyState3 {
  SLEPPING = 10,
  PATROLLING = 22,
  FIGHTING = 44
}

let y: "SLEPPING" | "PATROLLING" | "FIGHTING"

// Always explicit strings
enum EnemyState4 {
  SLEPPING = "UNO",
  PATROLLING = "DOS",
  FIGHTING = "TRES"
}

const enum EnemyState5 {
  SLEPPING = "UNO",
  PATROLLING = "DOS",
  FIGHTING = "TRES"
}


