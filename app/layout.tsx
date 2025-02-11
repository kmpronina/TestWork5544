import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import StyledComponentsRegistry from './registry';
import { Header } from './features';
import './globals.css';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Weather App',
  description: 'A simple weather application',
  keywords: ['Weather', 'Forecast', 'Weather App', 'Weather Forecast'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${manrope.variable} `}>
        <Theme className='container'>
          <StyledComponentsRegistry>
            <Header />
          </StyledComponentsRegistry>
          {children}
        </Theme>
      </body>
    </html>
  );
}
