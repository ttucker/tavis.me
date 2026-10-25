declare module 'node:url' {
  export class URL {
    constructor(input: string, base?: string | URL)
  }

  export function fileURLToPath(url: URL | string): string
}
