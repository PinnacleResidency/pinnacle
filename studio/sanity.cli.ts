import { defineCliConfig } from "sanity/cli"

export default defineCliConfig({
  api: {
    projectId: "p5hejukj",
    dataset: "production",
  },
  deployment: {
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
