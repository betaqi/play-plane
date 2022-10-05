export default class Bullet {
  public x: number = 0
  public y: number = 0
  public width: number = 96
  public height: number = 96
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
