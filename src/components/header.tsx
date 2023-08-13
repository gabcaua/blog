import Link from 'next/link'
import Head from 'next/head'
import ExtLink from './ext-link'
import { useRouter } from 'next/router'
import styles from '../styles/header.module.css'
import Script from 'next/script'

const navItems: { label: string; page?: string; link?: string }[] = [
  { label: 'Inicio', page: '/' },
  { label: 'Blog', page: '/blog' },
  { label: 'Contato', page: '/contact' },
  { label: 'GitHub', link: 'https://github.com/gabcaua/blog' },
]

const Header = ({
  titlePre = '',
  descPre = '📖 Meu Diário.',
  title = 'Oi, Mundo.',
  image = '/og-image.webp',
  color = '#83eeff',
}) => {
  const { pathname } = useRouter()

  return (
    <header className={styles.header}>
      <Head>
        <script
          data-ad-client="ca-pub-3730111662635989"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3730111662635989"
          crossOrigin="anonymous"
        ></script>
        <title>{titlePre ? titlePre : 'blog.cgsilva.com.br'}</title>
        <meta name="description" content={descPre} />
        <meta name="og:description" content={descPre} />
        <meta name="description" content={descPre} />
        <meta name="og:title" content={title} />
        <meta property="og:image" content={image} />
        <meta name="twitter:site" content="@gab_caua" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={image} />
        <meta name="theme-color" content={color} />
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
      </Head>
      <ul>
        {navItems.map(({ label, page, link }) => (
          <li key={label}>
            {page ? (
              <Link href={page}>
                <a className={pathname === page ? 'active' : undefined}>
                  {label}
                </a>
              </Link>
            ) : (
              <ExtLink href={link}>{label}</ExtLink>
            )}
          </li>
        ))}
      </ul>
    </header>
  )
}

export default Header
