import { defineCliConfig } from "sanity/cli"

export default defineCliConfig({
  api: {
    projectId: "p5hejukj",
    dataset: "production",
  },
  deployment: {
    appId: "a2r9cu8ix7cdifk0m0nxthrc",
    autoUpdates: true,
  },
  typegen: {
    enabled: true,
    path: "../lib/sanity/**/*.{ts,tsx}",
    schema: "schema.json",
    generates: "../sanity.types.ts",
    overloadClientMethods: false,
  },
})
