const buildBlogPagingHref = (page = 1, tag = '') => {
  const tagParam = tag ? `&tag=${encodeURIComponent(tag)}` : '';
  return `?page=${page}${tagParam}`;
};

export { buildBlogPagingHref };
