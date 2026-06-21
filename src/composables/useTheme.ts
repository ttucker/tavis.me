import { computed, ref } from 'vue'

type Theme = 'light' | 'dark'

const STORAGE_KEY = 'theme-preference'
const theme = ref<Theme>('dark')
const hasUserPreference = ref(false)

let initialized = false
let mediaQuery: MediaQueryList | null = null

const getSystemTheme = (): Theme => {
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

const getBootstrappedTheme = (): Theme | null => {
  const value = document.documentElement.dataset.theme

  return value === 'light' || value === 'dark' ? value : null
}

const applyTheme = (value: Theme) => {
  document.documentElement.dataset.theme = value
  document.documentElement.style.colorScheme = value
}

const handleSystemThemeChange = (event: MediaQueryListEvent) => {
  if (hasUserPreference.value) {
    return
  }

  theme.value = event.matches ? 'light' : 'dark'
  applyTheme(theme.value)
}

const readStoredTheme = (): Theme | null => {
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === 'light' || stored === 'dark') {
    return stored
  }

  return null
}

export const initTheme = () => {
  if (initialized || typeof window === 'undefined') {
    return
  }

  initialized = true

  const storedTheme = readStoredTheme()
  const bootstrappedTheme = getBootstrappedTheme()

  if (storedTheme) {
    hasUserPreference.value = true
    theme.value = storedTheme
  } else if (bootstrappedTheme) {
    theme.value = bootstrappedTheme
  } else {
    theme.value = getSystemTheme()
  }

  applyTheme(theme.value)

  mediaQuery = window.matchMedia('(prefers-color-scheme: light)')
  mediaQuery.addEventListener('change', handleSystemThemeChange)
}

export const useTheme = () => {
  const setTheme = (value: Theme) => {
    theme.value = value
    hasUserPreference.value = true
    window.localStorage.setItem(STORAGE_KEY, value)
    applyTheme(value)
  }

  const toggleTheme = () => {
    setTheme(theme.value === 'dark' ? 'light' : 'dark')
  }

  const clearThemePreference = () => {
    hasUserPreference.value = false
    window.localStorage.removeItem(STORAGE_KEY)
    theme.value = getSystemTheme()
    applyTheme(theme.value)
  }

  return {
    clearThemePreference,
    isDarkTheme: computed(() => theme.value === 'dark'),
    setTheme,
    theme,
    toggleTheme,
  }
}

export const disposeTheme = () => {
  mediaQuery?.removeEventListener('change', handleSystemThemeChange)
  mediaQuery = null
}
