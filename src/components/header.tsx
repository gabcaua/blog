import Link from 'next/link'
import Head from 'next/head'
import ExtLink from './ext-link'
import { useRouter } from 'next/router'
import styles from '../styles/header.module.css'

const navItems: { label: string; page?: string; link?: string }[] = [
  { label: 'Inicio', page: '/' },
  { label: 'Diário (Blog)', page: '/blog' },
  { label: 'Contato', page: '/contact' },
  { label: 'Código-fonte', link: 'https://github.com/gabcaua/blog' },
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
