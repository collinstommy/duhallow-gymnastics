import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import { loadEnv } from 'vite';
import storyblok from '@storyblok/astro';

const env = loadEnv("", process.cwd(), 'STORYBLOK');

export default defineConfig({
  integrations: [tailwind(),
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      components: {
        newsPage: 'storyblok/News',
        newsList: 'storyblok/NewsList',
        home: 'storyblok/Home',
      },
      apiOptions: {
      },
    })
  ]
});
