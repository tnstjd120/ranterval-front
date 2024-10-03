import { Layout } from '@/components';
import Providers from '@/providers';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

const pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
  weight: '45 920',
  display: 'swap',
  variable: '--font-pretendard',
});

export const metadata: Metadata = {
  title: 'Ranterval',
  description: '랜덤 화면 공유 모각코 서비스',
  icons: {
    icon: '/images/favicon.ico',
  },
  openGraph: {
    title: 'Ranterval',
    description: '랜덤 화면 공유 모각코 서비스',
    images: [{ url: '/images/og-image.png', width: 800, height: 400 }],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    images: [{ url: '/images/og-image.png', width: 800, height: 400 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={pretendard.variable}>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
