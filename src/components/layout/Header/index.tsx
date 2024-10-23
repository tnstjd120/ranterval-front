import Image from 'next/image';
import Link from 'next/link';
import * as S from './Header.styled';

export default function Header() {
  return (
    <S.Container>
      <S.HeaderInner>
        <Link href="/">
          <Image src="/images/logo/logo-w.svg" alt="Ranterval" width={146} height={35} />
        </Link>
      </S.HeaderInner>
    </S.Container>
  );
}
