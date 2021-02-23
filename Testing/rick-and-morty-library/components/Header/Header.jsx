import { useRouter } from 'next/router';

import Link from 'next/link';

import {title, button} from './header.module.scss';

const Header = ( { title }) => {
  const router = useRouter();

  const header = (
    <>
      <h1 className={title}>{title}</h1>
      <button onClick={() => router.back()} className={button} type='button'>
        {'< BACK'}
      </button>
    </>
  );

  return header;
};

export default Header;
