import Header from '@/components/header/header';
import { locales } from '@/app/i18n/settings';
import { Footer } from '@/components/footer/footer';
import { Poppins } from 'next/font/google';

import '../globals.scss';
import { buildMetadata } from '@/utils/metadata';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

export const metadata = buildMetadata('home');

export const generateStaticParams = () => {
  return locales.map((locale) => ({ lang: locale }));
};

const RootLayout = ({ children, params: { lang } }) => {
  return (
    <html lang={lang}>
      <body className={poppins.className}>
        <Header lang={lang} />
        <main className='mt-[75px]'>{children}</main>
        <Footer lang={lang} />
        <div id='modals'></div>
      </body>
    </html>
  );
};

export default RootLayout;
