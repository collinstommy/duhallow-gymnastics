import { defineConfig } from 'astro/config';
import NetlifyCMS from 'astro-netlify-cms';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind(), NetlifyCMS({
    config: {
      backend: {
        name: 'git-gateway',
        branch: 'main',
      },
      collections: [
        {
          label: "Config",
          name: "config",
          files: [{
            label: "Site Config",
            name: "site config",
            file: "src/content/config.json",
            fields: [
              { label: "Membership Text", name: "membership", widget: "markdown" },
              {
                label: "What we do",
                name: "info",
                widget: "list",
                fields: [
                  { label: "Title", name: "title", widget: "string" },
                  { label: 'Text', name: 'body', widget: 'markdown', },
                  { label: "Image", name: "image", widget: "image" },
                ]
              }
            ]
          }]
        },
        {
          name: 'news',
          label: 'News',
          folder: 'src/content/news',
          create: true,
          delete: true,
          fields: [
            { name: 'title', widget: 'string', label: 'Title' },
            { name: 'description', widget: 'string', label: 'Description' },
            { label: "Feature Image", name: "image", widget: "image", required: false },
            { name: 'imageAlt', widget: 'string', label: 'Image Description' },
            { name: 'body', widget: 'markdown', label: 'Text' },
            { label: "Date Published", name: "pubDate", widget: "datetime", format: 'x', date_format: "DD/MM/YYYY" }
          ],
        },
      ],
    },
  })]
});
