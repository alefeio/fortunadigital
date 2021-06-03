import { useState } from "react";
import Head from "next/head";
import { Button } from "../../components/Button";

import styles from "./styles.module.scss";

export default function Ebook() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [emailCadastrado, setEmailCadastrado] = useState(false);
  const [telefoneCadastrado, setTelefoneCadastrado] = useState(false);
  const [aguarde, setAguarde] = useState(false);

  async function enviarEmail(e) {
    e.preventDefault();

    setAguarde(true);

    try {
      const respostaEmail = await fetch("/api/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome,
          email,
        }),
      });

      console.log(respostaEmail);
      alert("Email cadastrado com sucesso!");
      setAguarde(false);
      setEmailCadastrado(true);
    } catch (error) {
      alert("Ocorreu um erro ao cadastrar seu email. Tente novamente!");
      console.log(error);
    }
  }

  async function enviarNumero(e) {
    e.preventDefault();

    setAguarde(true);

    try {
      const respostaNumero = await fetch("/api/sendNumber", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome,
          email,
          telefone,
        }),
      });

      console.log(respostaNumero);
      alert("Número cadastrado com sucesso!");
      setAguarde(false);
      setTelefoneCadastrado(true);
    } catch (error) {
      alert("Ocorreu um erro ao cadastrar seu telefone. Tente novamente!");
      console.log(error);
    }
  }

  return (
    <>
      <Head>
        <title>
          Fortuna Digital | Todo o passo a passo de como o afiliado iniciante,
          bem como o profissional pode escalar suas vendas
        </title>
      </Head>

      {!emailCadastrado && (
        <main className={styles.contentContainer} id="form">
          <h2>
            <img src="/images/globo.png" alt="" /> FORTUNA DIGITAL
          </h2>
          <div>
            <section className={styles.hero}>
              <h1>
                EBOOK GRÁTIS: <span>Como Ser Top Afiliado</span> e Vender
                qualquer produto, seja físico ou digital para o mundo todo.
              </h1>
              <ul>
                <li>✅ Método aplicável e direto ao ponto</li>
                <li>✅ Como ficar a frente de 99% dos afiliados iniciantes</li>
                <li>
                  ✅ Mesmo para quem não sabe absolutamente nada de internet
                </li>
                <li>✅ Mesmo sem aparecer</li>
              </ul>
              <form onSubmit={enviarEmail}>
                <input
                  type="text"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="Seu nome*"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Seu melhor e-mail*"
                />
                <button className={styles.subscribeButton} type="submit">
                  {aguarde ? "Aguarde..." : "Receber conteúdo gratuito"}
                </button>
              </form>
            </section>
            <div>
              <img
                src="/images/ebook.png"
                alt="Semana Live Aberta Fortuna Digital"
              />
            </div>
          </div>
        </main>
      )}

      {emailCadastrado && !telefoneCadastrado && (
        <main className={styles.contentContainer} id="form">
          <h2>
            <img src="/images/globo.png" alt="" /> FORTUNA DIGITAL
          </h2>
          <div>
            <section className={styles.hero}>
              <h1>
                <span>O ebook foi enviado para o seu email!</span>
              </h1>
              <br />
              <h3>
                Agora, para alavancar ainda mais o seu sucesso, entre no nosso
                grupo do WhatsApp e tenha acesso a:
              </h3>
              <ul>
                <li>
                  ✅ Dicas diárias e práticas para aplicar em seu negócio online
                </li>
                <li>✅ Instruções para realizar suas primeiras vendas</li>
                <li>✅ Networking com alunos e profissionais experientes</li>
                <li>✅ Suporte 24h</li>
              </ul>
              <h3>
                <a
                  href="https://chat.whatsapp.com/CKvgQRYdSIO39LjZWwU7rf"
                  target="_blank"
                >
                  <span>Clique aqui</span> parar entrar no grupo, ou cadastre-se
                  abaixo.
                </a>
              </h3>
              <form onSubmit={enviarNumero}>
                <input
                  type="number"
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                  placeholder="Seu whatsapp* (apenas números, incluir DDD)"
                />
                <button className={styles.subscribeButton} type="submit">
                  {aguarde ? "Aguarde..." : "Entrar para o grupo"}
                </button>
              </form>
            </section>
            <img
              src="/images/grupo_whatsapp.png"
              className="wimg"
              alt="WhatsApp - Grupo Fortuna Digital"
            />
          </div>
        </main>
      )}

      {emailCadastrado && telefoneCadastrado && (
        <main className={styles.contentContainer2}>
          <h2>
            <img src="/images/globo.png" alt="" /> FORTUNA DIGITAL
          </h2>
          <section className={styles.hero4}>
            <p className="textCenter">
              TENHO CERTEZA ABSOLUTA DE QUE SE VOCÊ CHEGOU ATÉ AQUI, É PORQUE
              IRÁ
              <br />
              <span>CONQUISTAR GRANDES RESULTADOS!</span>
            </p>
            <h1>
              <a href="/ebook/EBOOK_FORTUNA_DIGITAL.pdf">
                <span>CLIQUE AQUI</span> E BAIXE SEU EBOOK.
              </a>
            </h1>
          </section>
        </main>
      )}

      {/* {!emailCadastrado && (
        <main className={styles.contentContainer3}>
          <section className={styles.hero3}>
            <h1>
              <span>
                EU SEI... Existem milhares de "gurus" que prometem dinheiro
                fácil.
              </span>
            </h1>
            <p>
              No entanto, nesta live você irá virar uma chave para aprender como
              é plenamente possível montar um{" "}
              <span>
                funil de vendas infinita que lhe proporcionará vendas
                automáticas todos os dias!
              </span>
            </p>
            <p>Resumo em 2 ou 3 das lives do que se trata o treinamento.</p>
          </section>
        </main>
      )} */}

      {!emailCadastrado && (
        <main id="passo-a-passo" className={styles.contentContainer2}>
          <div>
            <img
              src="/images/rodrigopinheiro.jpg"
              alt="Rodrigo Pinheiro - Produtor Digital"
            />
            <section className={styles.hero2}>
              <p>
                <span>Rodrigo Pinheiro</span>
                <h4>Produtor Digital</h4>
              </p>
              <p>
                Empreendedor com mais de 4 anos de experiência em criação de
                negócios pela internet e marketing digital.
              </p>
              <p>
                Atualmente com milhares de alunos. Um cara apaixonado pelo
                mercado digital, já faturou milhares de reais nesse mercado com
                infoprodutos, No entanto, nem sempre foi tão fácil assim.{" "}
              </p>
              <p>
                Depois de ter ERRADO várias vezes, desenvolveu um MÉTODO hoje
                TESTADO e VALIDADO por mais de milhares que aplicaram e
                TRANSFORMARAM esse CONHECIMENTO em CONQUISTAS NA INTERNET.{" "}
              </p>
            </section>
          </div>
        </main>
      )}

      {!emailCadastrado && (
        <main className={styles.contentContainer2}>
          <section className={styles.hero4}>
            <ul>
              <li>
                <h2>✅ Cadastre seu e-mail</h2>
                Seja informado, gratuitamente, sobre todas as novidades e
                últimas tendências do mercado digital.
              </li>
              <li>
                <h2>✅ Participe do grupo</h2>
                Reunimos alunos e uma equipe vencedora e motivada que vai te ajudar
                a dar o próximo passo.
              </li>
              <li>
                <h2>✅ Verifique seu e-mail</h2>
                Vamos enviar esse e-book incrível, que vai te guiar de uma forma
                extremamente prática a ser um Top Afiliado.
              </li>
            </ul>
            <Button link="#form">Receber conteúdo gratuito</Button>
            <a
              href="https://www.instagram.com/rodrigo.digitalpro"
              target="_blank"
            >
              <img src="/images/ico-insta.png" alt="Instagram" />
            </a>
            <a
              href="https://www.facebook.com/rodrigo.pinheiro.1000"
              target="_blank"
            >
              <img src="/images/ico-face.png" alt="Facebook" />
            </a>
            <a href="https://youtube.com/c/MochileiroRaiz" target="_blank">
              <img src="/images/ico-yt.png" alt="Youtube" />
            </a>
          </section>
        </main>
      )}
    </>
  );
}
