import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { dataset, projectId } from './env';
import { Post } from './schemas/post';

export default defineConfig({
  name: 'default',
  title: 'Falsch Parker',

  projectId,
  dataset,

  plugins: [structureTool(), visionTool()],

  schema: {
    types: [Post],
  },
});
