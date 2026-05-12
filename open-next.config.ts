import { defineCloudflareConfig } from "@opennextjs/cloudflare/config";

const cfConfig = defineCloudflareConfig({});

export default {
  ...cfConfig,
  // Override: use npx next build (NOT npm run build) to avoid recursion
  buildCommand: "npx next build",
};
