import { createPinia, type Pinia } from 'pinia'

const store = createPinia()

export function setupStore(app: { use: (arg0: Pinia) => void }) {
  app.use(store)
}

export * from './modules/toast'
export * from './modules/user'
export * from './modules/stock'
export { store }
