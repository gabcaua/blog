import ExtLink from './ext-link'
export default function Footer() {
  return (
    <>
      <footer>
        <span>Meu maior projeto.</span>
        <ExtLink href="https://cgsilva.com.br">
          <img
            src="https://blog.cgsilva.com.br/listen.svg"
            height={46}
            width={132}
            alt="deploy to Vercel button"
          />
        </ExtLink>
        <span>
          ou{' '}
          <ExtLink href="https://www.youtube.com/@cn_estudios">
            veja meu estúdio
          </ExtLink>
        </span>
      </footer>
    </>
  )
}
