export default class Bullet {
  public x: number = 0
  public y: number = 0
  public speed: number = 2
  public border: number = 0

  constructor() {}

  public move() {
    this.y -= this.speed
    if (this.y <= this.border) {
      this.destroy && this.destroy()
    }
  }

  public destroy() {}
}
