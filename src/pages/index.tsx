import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import sharedStyles from '../styles/shared.module.css'

export default function Index() {
  return (
    <>
      <Header titlePre="Início" />
      <div className={sharedStyles.layout}>
        <img src="/logo.webp" height="85" width="85" alt="Foto conceitual." />
        <h1>Oi, Mundo.</h1>
        <h2>
          Meu diário. <br />{' '}
          <ExtLink
            href="https://github.com/vercel"
            className="dotted"
            style={{ color: 'inherit' }}
          >
            Mantido pela Vercel
          </ExtLink>
        </h2>

        <Features />

        <div className="explanation">
          <p>
            Para reparar os danos de não escrever por tantos anos, resolvi fazer
            um blogue, pra escrever sobre coisas engraçadas e úteis, ou coisas
            idiotas e sem significado. Me chamo Cauã Gabriel e sou um
            Desenvolvedor, Designer e Escritor. E Criei a Listen, uma mera robô
            de música para o Discord, o que levou 4 anos. 😅
          </p>

          <p>
            Então oi, Mundo,
            <br />
            Vim te pedir para clicar no botão azul.
          </p>
        </div>
      </div>
    </>
  )
}
