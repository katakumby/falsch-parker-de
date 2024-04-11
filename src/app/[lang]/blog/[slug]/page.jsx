import React from 'react';
import { client } from '@/sanity/client';
import {
  buildGetAllSlugs,
  buildGetNextPostSlug,
  buildGetPostDetails,
} from '@/utils/queries';
import { Container } from '@/components/container/container';
import { Heading } from '@/app/[lang]/blog/[slug]/heading';
import { Post } from '@/models/post';
import { PortableText } from '@portabletext/react';
import Link from 'next/link';
import { ArrowDotButton } from '@/components/buttons/arrowDotButton';

export const generateStaticParams = async () => {
  const slugObjs = await client.fetch(buildGetAllSlugs());
  return slugObjs.map((slugObj) => ({ slug: slugObj.current }));
};

const Page = async ({ params: { slug, lang } }) => {
  const post = await client
    .fetch(buildGetPostDetails(slug))
    .then((response) => {
      if (!response) {
        return {};
      }
      return new Post(response);
    });
  const nextPostSlug = await client.fetch(buildGetNextPostSlug(slug));

  return (
    <Container>
      <div className='mb-20 mt-4 flex flex-col gap-20 max-lg:mb-10 max-lg:gap-10'>
        <Heading post={post} lang={lang} />
        <div className='lg:px-10'>
          <PortableText
            value={post.content}
            components={portableTextComponents}
          />
        </div>
        {nextPostSlug ? (
          <div className='flex justify-center'>
            <ArrowDotButton href={`/${lang}/blog/${nextPostSlug}`}>
              Next blogpost
            </ArrowDotButton>
          </div>
        ) : null}
      </div>
    </Container>
  );
};

export default Page;

const portableTextComponents = {
  block: {
    h5: ({ children }) => <h5 className='font-bold'>{children}</h5>,
    normal: ({ children }) => <p className='mb-4 last:mb-0'>{children}</p>,
  },
  list: {
    bullet: ({ children }) => (
      <ul className='mb-4 list-disc pl-[2ch]'>{children}</ul>
    ),
    number: ({ children }) => (
      <ol className='mb-4 list-decimal pl-[2ch]'>{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },
  marks: {
    link: ({ value, children }) => (
      <Link href={value.href} target='_blank' className='underline'>
        {children}
      </Link>
    ),
  },
};

export const dynamic = 'force-dynamic';
