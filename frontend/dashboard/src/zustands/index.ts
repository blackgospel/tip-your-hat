import produce from 'immer'
import create from 'zustand'
import { devtools } from 'zustand/middleware'

const immer = (config: any) => (set: any, get: any, api: any) =>
  config((fn: any) => set(produce(fn)), get, api)

export { devtools, create, immer }
