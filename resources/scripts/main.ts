import "@/scss/stisla.scss";

import { Ziggy } from "@/scripts/utils/ziggy";
import ZiggyVue from "@/scripts/utils/ziggy/ZiggyVue";
import { createInertiaApp } from "@inertiajs/vue3";
import { resolvePageComponent } from "vite-plugin-laravel/inertia";
import { createApp, h } from "vue";
import { Config } from "ziggy-js";

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
  title: (title) => title ? `${title} - ${appName}` : appName,
  resolve: (name) => resolvePageComponent(name, import.meta.glob('../views/pages/**/*.vue')),
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .use(ZiggyVue, Ziggy as Config)
      .mount(el)
  },
})
