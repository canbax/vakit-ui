import { shallowRef, watch } from 'vue'
import { useBrowserLocation } from '@vueuse/core'
import DocsPage from '@/pages/DocsPage.vue'
import MainPage from '@/pages/MainPage.vue'
import SupportPage from '@/pages/SupportPage.vue'
import NotFoundPage from '@/pages/NotFoundPage.vue'
import BlogPage from '@/pages/BlogPage.vue'
import type { RouteManager } from '@/types'

export function useRoute(): RouteManager {
  const location = useBrowserLocation()
  const routePathToVueComponent: Record<string, any> = {
    '/': MainPage,
    '': MainPage,
    main: MainPage,
    docs: DocsPage,
    support: SupportPage,
    blog: BlogPage
  }
  const pathMenuItems: readonly string[] = ['main', 'docs', 'support', 'blog'] as const

  const currentView = shallowRef(null)
  const currentPathMenuItem = shallowRef<string | null>(null)

  watch(
    location,
    () => {
      setViewFromRoutePath(location.value.pathname?.replace('/', '') ?? '')
    },
    { immediate: true, deep: true }
  )

  function setViewFromRoutePath(path: string) {
    console.log('set view from: ', path)

    const pageToGo = routePathToVueComponent[path]
    console.log('page to go: ', pageToGo)
    if (!pageToGo) {
      currentView.value = NotFoundPage
      currentPathMenuItem.value = null
    } else {
      currentView.value = pageToGo
      currentPathMenuItem.value = path
    }
  }

  function setViewFromPathMenuItem(item: string) {
    setViewFromRoutePath(item) // title is also route path
  }

  return {
    currentView,
    currentPathMenuItem,
    pathMenuItems,
    setViewFromPathMenuItem
  }
}
