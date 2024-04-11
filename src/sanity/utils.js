import imageUrlBuilder from '@sanity/image-url';
import { client } from '@/sanity/client';

const builder = imageUrlBuilder(client);

const urlForImage = (source) => {
  return builder.image(source).url();
};

export { urlForImage };
