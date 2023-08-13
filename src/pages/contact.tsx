import Header from '../components/header'
import ExtLink from '../components/ext-link'

import sharedStyles from '../styles/shared.module.css'
import contactStyles from '../styles/contact.module.css'

import GitHub from '../components/svgs/github'
import Twitter from '../components/svgs/twitter'
import Envelope from '../components/svgs/envelope'
import LinkedIn from '../components/svgs/linkedin'

const contacts = [
  {
    Comp: Twitter,
    alt: 'twitter icon',
    link: 'https://twitter.com/imcgsilva',
  },
  {
    Comp: GitHub,
    alt: 'github icon',
    link: 'https://github.com/gabcaua',
  },
  {
    Comp: LinkedIn,
    alt: 'linkedin icon',
    link: 'https://www.linkedin.com/in/cgsilva-dev/',
  },
  {
    Comp: Envelope,
    alt: 'envelope icon',
    link: 'mailto:contato@cgsilva.com.br?subject=Seu blog.',
  },
]

export default function Contact() {
  return (
    <>
      <Header
        titlePre="Contato"
        image="/cg.webp"
        descPre="contato@cgsilva.com.br"
        title="Contato"
        color="#fff"
      />
      <div className={sharedStyles.layout}>
        <div className={contactStyles.avatar}>
          <img
            src="/logo.svg"
            alt="logo with letters CG"
            height={60}
            width={60}
          />
        </div>

        <h1 style={{ marginTop: 0 }}>Contato</h1>

        <div className={contactStyles.name}>
          Cauã Silva - Desenvolvedor @{' '}
          <ExtLink
            className={contactStyles.a}
            styles={{ color: '#0070f3' }}
            href="https://cgsilva.com.br"
          >
            <a>Listen</a>
          </ExtLink>
        </div>

        <div className={contactStyles.links}>
          {contacts.map(({ Comp, link, alt }) => {
            return (
              <ExtLink key={link} href={link} aria-label={alt}>
                <Comp height={32} />
              </ExtLink>
            )
          })}
        </div>
      </div>
    </>
  )
}
