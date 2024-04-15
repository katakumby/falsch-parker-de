import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { enDataset, deDataset, projectId } from './env';
import { Post } from './schemas/post';

export default defineConfig([
  {
    name: 'default',
    title: 'Falsch Parker (en)',
    basePath: '/english',

    projectId,
    dataset: enDataset,

    plugins: [structureTool(), visionTool()],

    schema: {
      types: [Post],
    },
  },
  {
    name: 'de',
    title: 'Falsch Parker (de)',
    basePath: '/deutsch',

    projectId,
    dataset: deDataset,

    plugins: [structureTool(), visionTool()],

    schema: {
      types: [Post],
    },
  },
]);
