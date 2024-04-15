import type { ShallowRef } from 'vue'

export interface RequestParameter {
  name: string
  defaultValue?: string
  explanation: string
  isRequired: boolean
}

export interface RouteManager {
  readonly currentView: any
  readonly currentPathMenuItem: ShallowRef<string | null>
  pathMenuItems: readonly string[]
  setViewFromPathMenuItem: (item: string) => void
}
