import Image from 'next/image';
import Title from 'components/shared/Title/Title';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
    stickyHeader,
    shrinked,
    pageTitle,
    logo
} from './StickyHeader.module.scss';

const StickyHeader = () => {
    const [scrolled, setScrolled] = useState(false);
    const handleScroll = () => setScrolled(window.scrollY > 50);

    useEffect(() => window.addEventListener('scroll', handleScroll));

    return (
        <header className={`${stickyHeader} ${scrolled ? shrinked : ''}`}>
            <Title
                type='h1'
                text='Rick & Morty Library'
                className={pageTitle}
            />

            <Link href='/' passHref>
                <a>
                    <picture className={logo}>
                        <source srcSet='/images/logo.webp' />
                        <source srcSet='/images/logo.png' />
                        <img
                            src='/images/logo.png'
                            alt='Rick and Morty Library Logo'
                            loading='lazy'
                        />
                    </picture>
                </a>
            </Link>
        </header>
    );
};

export default StickyHeader;
