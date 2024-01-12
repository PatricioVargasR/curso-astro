// Archivo de configuración de astro donde se pueden administrar las integraciones de diversos componentes

import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()]
});