import { en } from './en.ts'
import { es } from './es.ts'
import type { Locale, Messages } from './types.ts'

export const messages = { es, en } satisfies Record<Locale, Messages>

const STORAGE_KEY = 'brothers-coffee-locale'

function siteBase(): string {
  return import.meta.env.BASE_URL.replace(/\/$/, '')
}

export function localePath(locale: Locale): string {
  const base = siteBase()
  return locale === 'en' ? `${base}/en` : base || '/'
}

function normalizePath(path: string): string {
  if (path.length > 1 && path.endsWith('/')) return path.slice(0, -1)
  return path || '/'
}

function pathKind(): 'en' | 'root' {
  const base = siteBase()
  let path = window.location.pathname
  if (base && (path === base || path.startsWith(`${base}/`))) {
    path = path.slice(base.length) || '/'
  }
  return normalizePath(path) === '/en' ? 'en' : 'root'
}

function readStored(): Locale | null {
  try {
    const value = localStorage.getItem(STORAGE_KEY)
    return value === 'es' || value === 'en' ? value : null
  } catch {
    return null
  }
}

function browserLocale(): Locale {
  const list = navigator.languages?.length ? navigator.languages : [navigator.language]
  return list.some((lang) => lang.toLowerCase().startsWith('es')) ? 'es' : 'en'
}

// /en wins for this visit. On /, a saved choice wins, then the browser.
export function resolveInitialLocale(): Locale {
  if (pathKind() === 'en') return 'en'
  return readStored() ?? browserLocale()
}

export function localeFromLocation(): Locale {
  return pathKind() === 'en' ? 'en' : 'es'
}

function urlFor(locale: Locale): string {
  return localePath(locale) + window.location.search + window.location.hash
}

export function syncInitialPath(locale: Locale) {
  const next = urlFor(locale)
  const current = window.location.pathname + window.location.search + window.location.hash
  if (current !== next) history.replaceState(null, '', next)
}

export function rememberLocale(locale: Locale) {
  try {
    localStorage.setItem(STORAGE_KEY, locale)
  } catch {
    // Private mode can block storage; the route still carries the choice.
  }
  const next = urlFor(locale)
  const current = window.location.pathname + window.location.search + window.location.hash
  if (current !== next) history.pushState(null, '', next)
}

export function applyDocument(locale: Locale) {
  const copy = messages[locale]
  document.documentElement.lang = locale
  document.title = copy.meta.title
  document.querySelector('meta[name="description"]')?.setAttribute('content', copy.meta.description)
}

let prepared: Locale | null = null

export function prepareLocale(): Locale {
  if (!prepared) {
    prepared = resolveInitialLocale()
    syncInitialPath(prepared)
    applyDocument(prepared)
  }
  return prepared
}
