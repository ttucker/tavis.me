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
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    return stored === 'light' || stored === 'dark' ? stored : null
  } catch {
    return null
  }
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
  const toggleTheme = () => {
    const nextTheme = theme.value === 'dark' ? 'light' : 'dark'

    theme.value = nextTheme
    hasUserPreference.value = true

    try {
      window.localStorage.setItem(STORAGE_KEY, nextTheme)
    } catch {
      // Ignore storage failures and keep the in-memory preference.
    }

    applyTheme(nextTheme)
  }

  return {
    isDarkTheme: computed(() => theme.value === 'dark'),
    toggleTheme,
  }
}

export const disposeTheme = () => {
  mediaQuery?.removeEventListener('change', handleSystemThemeChange)
  mediaQuery = null
}
