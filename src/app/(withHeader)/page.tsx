import { ReactNode } from 'react';

type PageProps = {
  children: ReactNode;
};

export default function Page({ children }: PageProps) {
  return (
    <>
      Main Page
      {children}
    </>
  );
}
