import { Application } from 'pixi.js'
import { IPlane, setupPlane } from './plane'
import Bullet from '../game/bullet'
import { EnemyPlane } from '../game/enemy-plane'
import { fighting } from './fighting'

export * from './plane'

export const game = new Application({
  width: 800,
  height: 800,
  // transparent: true
  backgroundColor: 15132922
})
document.body.append(game.view)

export function getRootContainer() {
  return game.stage
}

export function initGame(_plane: any, bullets: Bullet[], enemyPlane: EnemyPlane[]) {
  const plane = setupPlane(_plane, bullets, enemyPlane)

  run(_plane, enemyPlane)

  return {
    plane,
    bullets,
    enemyPlane
  }
}

function run(plane: IPlane, enemyPlanes: EnemyPlane[]) {
  game.ticker.add(() => {
    plane.run()
    plane.enemyRun()
    fighting(plane.bullets, enemyPlanes)
  })
}
