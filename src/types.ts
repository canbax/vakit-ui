import type { Ref } from 'vue'

export interface RequestParameter {
  name: string
  defaultValue?: string
  explanation: string
  isRequired: boolean
}

export interface RouteManager {
  readonly currentView: any
  readonly currentPathMenuItem: Ref<string | null>
  pathMenuItems: readonly string[]
  setViewFromPathMenuItem: (item: string) => void
}
