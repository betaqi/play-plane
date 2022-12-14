import Buller from './bullet'
import { EnemyPlane, initEnemyPlanes } from './enemy-plane'
export interface IPlane {
  x: number
  y: number
  speed: number
  moveDown: () => void
  moveUp: () => void
  moveLeft: () => void
  moveRight: () => void
  bullets: Buller[]
  attack: () => void
  run: () => void
  enemyRun: () => void
}

const defaultPosition = {
  x: 340,
  y: 600,
  speed: 5
}

export function setupPlane(
  plane: IPlane,
  bullets: Buller[],
  enemyPlane: EnemyPlane[],
  options?: any
): IPlane {
  plane.bullets = bullets
  // init
  Object.assign(plane, options, defaultPosition)

  setInterval(() => {
    initEnemyPlanes(enemyPlane)
  }, 3000)

  initMove(plane)

  initBulletRun(plane, bullets)

  initAttack(plane, bullets)
  enemyPlanesRun(plane, enemyPlane)

  return plane
}

function initMove(plane: IPlane) {
  plane.moveDown = () => {
    plane.y += plane.speed
  }
  plane.moveUp = () => {
    plane.y -= plane.speed
  }
  plane.moveLeft = () => {
    plane.x -= plane.speed
  }
  plane.moveRight = () => {
    plane.x += plane.speed
  }
}

function initBulletRun(plane: IPlane, bullets: Buller[]) {
  plane.run = () => {
    bullets.forEach(bullet => {
      bullet.move()
    })
  }
}

function initAttack(plane: IPlane, bullets: Buller[]) {
  plane.attack = () => {
    const buller = new Buller()
    buller.x = plane.x + 20
    buller.y = plane.y
    buller.destroy = () => {
      const index = bullets.indexOf(buller)
      bullets.splice(index, 1)
    }
    bullets.push(buller)
  }
}

function enemyPlanesRun(plane: IPlane, enemyPlane: EnemyPlane[]) {
  plane.enemyRun = () => {
    enemyPlane.forEach(enemy => {
      enemy.move()
    })
  }
}
