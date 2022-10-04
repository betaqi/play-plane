export class EnemyPlane {
  public x: number = 0
  public y: number = 0
  public speed: number = 1
  public bottomBoeder: number = 800

  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }
  move() {
    this.y += this.speed
    if (this.y >= this.bottomBoeder) {
      this.destroy && this.destroy()
    }
  }
  destroy() {}
}

export function initEnemyPlanes(enemyPlane: EnemyPlane[]) {
  const y = -Math.floor(Math.random() * (500 - 200) + 200)
  let enemy: EnemyPlane = new EnemyPlane(Math.random() * 600, y)

  enemy.destroy = () => {
    const index = enemyPlane.indexOf(enemy)
    enemyPlane.splice(index, 1)
    console.log(enemyPlane)
  }

  enemyPlane.push(enemy)
}
