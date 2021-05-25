/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'src/api/server' {
  import {client} from 'src/api/server'
  
  export default client
}