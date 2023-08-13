import ExtLink from './ext-link'
export default function Footer() {
  return (
    <>
      <footer>
        <span>Meu maior projeto.</span>
        <ExtLink href="https://cgsilva.com.br">
          <img src="/listen.svg" height={46} width={132} alt="blue button" />
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
