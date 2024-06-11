// This file is an augmentation to the built-in ImportMeta interface
// Thus cannot contain any top-level imports
// <https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation>

interface ImportMetaEnv {
  [key: string]: any
  /** The base url the app is being served from. This is determined by the [`base` config option](https://vitejs.dev/config/shared-options#base). */
  BASE_URL: string
  /**
   * The [mode](https://vitejs.dev/guide/env-and-mode#modes) the app is running in.
   * By default, the dev server (`dev` command) runs in `development` mode and the `build` command runs in `production` mode.
   */
  MODE: string
  /** Whether the app is running in development (always the opposite of `import.meta.env.PROD`). */
  DEV: boolean
  /** Whether the app is running in production (running the dev server with `NODE_ENV='production'` or running an app built with `NODE_ENV='production'`). */
  PROD: boolean
  /** Whether the app is running in the [server](https://vitejs.dev/guide/ssr#conditional-logic). */
  SSR: boolean
}

interface ImportMeta {
  url: string

  readonly hot?: import('./hot').ViteHotContext

  readonly env: ImportMetaEnv

  glob: import('./importGlob').ImportGlobFunction
}
