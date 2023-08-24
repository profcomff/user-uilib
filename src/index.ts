import { App } from "vue";
import * as components from "./components";

function install(app: App, options: { root_url: string }) {
  for (const key in components) {
    // @ts-expect-error
    app.component(key, components[key]);

    if (!options.root_url.startsWith("https://")) {
      throw new Error("Invalid api root url");
    }
  }
}

export default { install };

export * from "./components";
