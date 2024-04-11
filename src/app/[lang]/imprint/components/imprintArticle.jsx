import React from 'react';
import Link from 'next/link';

export const ImprintArticle = () => {
  return (
    <div className='my-[75px]'>
      <h2 className='py-10 text-7xl font-bold'>Unser Impressum</h2>

      <h3 className='pb-10 text-5xl'>TowShare Group GmbH</h3>

      <p className='text-2xl'>
        Schützengasse 4<br />
        8001 Zürich
        <br />
        Schweiz
      </p>

      <p className='pt-10'>
        <Link
          className='text-2xl underline'
          href='mailto:ml@falsch-parker.ch'
          target='_blank'>
          info@falsch-parker.ch
        </Link>
      </p>
    </div>
  );
};
