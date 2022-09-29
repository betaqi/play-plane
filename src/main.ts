import App from './App.vue'
import { getRootContainer } from './game/index'
import { createApp } from './runtime-canvas/'
createApp(App).mount(getRootContainer())
