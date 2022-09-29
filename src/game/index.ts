import { Application } from 'pixi.js'
import { setupPlane } from './plane'

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

export function initGame(_plane: any, bullets: any) {
  const plane = setupPlane(_plane, bullets)

  game.ticker.add(() => {
    plane.run()
  })

  return {
    plane,
    bullets
  }
}
