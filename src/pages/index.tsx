import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import sharedStyles from '../styles/shared.module.css'

export default function Index() {
  return (
    <>
      <Header titlePre="Início" />
      <div className={sharedStyles.layout}>
        <img
          src="/vercel-and-notion.png"
          height="85"
          width="250"
          alt="Foto conceitual."
        />
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
            Para reparar os danos de não escrever por taaaaaantos anos, resolvi
            fazer um blogue, para escrever sobre desde coisas engraçadas e úteis
            até as coisas idiotas e sem significado. Eu me chamo Cauã Gabriel e
            sou um Desenvolvedor, Designer e Escritor. Criei a Listen, uma mera
            robô de música para o Discord, mas que levou 4 anos para chegar
            aqui. 😅
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
