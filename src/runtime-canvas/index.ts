import { createRenderer } from 'vue'
import { Container, Sprite, Text, Texture } from 'pixi.js'

const renderer = createRenderer<Container, Container>({
  createElement(type: string) {
    let element
    switch (type) {
      case 'Container':
        element = new Container()
        break
      case 'Sprite':
        element = new Sprite()
        break
      default:
        throw new Error(`没有实现的类型 ${type}`)
    }
    return element
  },

  patchProp(el, key, prevValue, nextValue): void {
    switch (key) {
      case 'texture':
        (el as Sprite).texture = Texture.from(nextValue)
        break
      default:
        // @ts-expect-error
        el[key] = nextValue
    }
  },

  insert: function (el, parent): void {
    if (el && parent) {
      parent.addChild(el)
    }
  },

  remove: function (el): void {
    if (el && el.parent) {
      el.parent.removeChild(el)
    }
  },

  createText: function (text: string) {
    return new Text(text)
  },

  createComment: function (text: string) {
    return new Text(text)
  },

  setText: function (node, text: string): void {},

  setElementText: function (node, text: string): void {},

  parentNode: function (node) {
    return node.parent
  },

  nextSibling: function (node) {
    return null
  }
})

export function createApp(rootComponent: any) {
  return renderer.createApp(rootComponent)
}
