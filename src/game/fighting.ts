import Bullet from './bullet'
import { EnemyPlane } from './enemy-plane'

export function fighting(bullets: Bullet[], enemyPlane: EnemyPlane[]) {
  bullets.forEach((bullet, bulletIdx) => {
    enemyPlane.forEach((enemy, enemyIdx) => {
      if (hitTestObject(bullet, enemy)) {
        bullets.splice(bulletIdx, 1)
        enemyPlane.splice(enemyIdx, 1)
      }
    })
  })
}
function hitTestObject(bullet: Bullet, enemy: EnemyPlane): Boolean {
  return (
    bullet.x + bullet.width >= enemy.x &&
    enemy.x + enemy.width >= bullet.x &&
    bullet.y + bullet.height >= enemy.y &&
    enemy.y + enemy.height >= bullet.y
  )
  //
}
