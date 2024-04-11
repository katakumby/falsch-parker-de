import { urlForImage } from '@/sanity/utils';

class Post {
  constructor(post) {
    this.id = post._id;
    this.title = post.title;
    this.time = post.time;
    this.synopsis = post.synopsis;
    this.tag = post.tag;
    this.imageUrl = urlForImage(post.cover);
    this.slug = post.slug.current;
    this.content = post.content ?? null;
  }
}

export { Post };
