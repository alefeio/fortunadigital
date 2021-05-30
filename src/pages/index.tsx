import Head from "next/head";
import { SubscribeButton } from "../components/SubscribeButton";
import { Header } from "../components/Header";

import styles from "./home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Fortuna Digital | Todo o passo a passo de como o afiliado iniciante,
          bem como o profissional pode escalar suas vendas
        </title>
      </Head>

      <Header />
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>Seja Bem-vindo! 👏</span>
          <h1>
            AGORA VOCÊ VAI DESCOBRIR COMO CRIAR UM{" "}
            <span>NEGÓCIO DIGITAL NA PRÁTICA</span>, DE FORMA RÁPIDA, SIMPLES E
            FÁCIL!
          </h1>
        </section>
        <div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/GFep-u4EiPU"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
          <SubscribeButton>QUERO ADQUIRIR!</SubscribeButton>
        </div>
      </main>

      <main id="passo-a-passo" className={styles.contentContainer2}>
        <h1>
          TUDO <span>PASSO A PASSO</span>
        </h1>
        <div>
          <img src="/images/fortuna_digital.jpg" alt="Fortuna Digital" />
          <section className={styles.hero2}>
            <p>
              <span>
                MÉTODO ÚNICO, SIMPLES E DEFINITIVO, VALIDADO PELOS
                MELHORES ESPECIALISTAS DO MERCADO
              </span>
              <br /> que eu utilizei para sair de um homem endividado e sem
              perspectivas para um EMPREENDEDOR DIGITAL DE SUCESSO, criando meu
              Negócio Online pela Internet (Começando do Absoluto Zero).
            </p>
            <SubscribeButton>QUERO APRENDER ESSE MÉTODO!</SubscribeButton>
          </section>
        </div>
      </main>

      <main className={styles.contentContainer3}>
        <h1>
          PRODUTORES <span>DO CURSO</span>
        </h1>
        <section className={styles.hero3}>
          <img src="/images/rodrigo.jpeg" alt="" />
          <span>Produtor: Rodrigo Pinheiro</span>
          <p>
            Um cara APAIXONADO pelo <span>MERCADO DIGITAL</span>, já faturou
            milhares de reais nesse mercado com INFOPRODUTOS. No entanto, nem
            sempre foi tão simples e fácil assim.
          </p>
          <p>
            Depois de ter ERRADO várias vezes, desenvolveu um 
            <span>MÉTODO</span>, hoje <span>VALIDADO e TESTADO</span> por
            milhares de alunos que aplicaram e TRANSFORMARAM esse 
            <span>CONHECIMENTO em CONQUISTAS NA INTERNET</span>.
          </p>
          <p>
            Uma de suas especialidades é vendas e alto nível de persuasão,
            voltado para o Neuro Marketing. Com diversos projetos, resolveu
            compilar tudo que aprendeu em um só treinamento. Já ajudou milhares
            de pessoas a transformarem suas vidas e{" "}
            <span>VIVER 100% DA INTERNET</span> e agora CHEGOU A SUA VEZ.
          </p>
          <br />
          <img src="/images/oris.jpeg" alt="" />
          <span>Co-Produtor: Orismar Xavier</span>
          <p>
            Empreendedor digital, especialista em{" "}
            <span>Marketing pago e orgânico</span>. Já ajudou diversas empresas
            a crescer o faturamento e agora vai te guiar a conquistar ganhos
            exponenciais, apenas investindo nos lugares certos.
          </p>
          <br />
          <img src="/images/alexandre.png" alt="" />
          <span>Co-Produtor: Alexandre Feio</span>
          <p>
            <span>Marketeiro e desenvolvedor de sites e aplicativos</span>.
            Responsável pela nossa plataforma digital, onde iremos oferecer aos
            nossos alunos a possibilidade de se tornarem autoridades em suas
            respectivas áreas, através de um espaço para criação e
            compartilhamento de conteúdo profissional.
          </p>
          {/* <p>
            Você não tem ideia do que eu já passei nesta vida. Eu olhava pessoas
            comuns, como eu e você, transformando suas vidas e procurei estudar
            este mercado fantástico.
          </p>
          <p>
            Nós Somos cheios de sonhos, projetos, planos, desejos, mas para
            conquistar o tão almejado objetivo, grande parte das vezes
            atravessamos situações terríveis para conseguir o sucesso!
          </p>
          <p>
            Passei por tudo isso, investi mais de 
            <span>5 MIL REAIS EM TREINAMENTOS, MASTERMINDS, MENTORIAS</span>,
            para trazer tudo mastigado para você.
          </p> */}
        </section>
      </main>

      <main id="depoimentos" className={styles.contentContainer4}>
        <h1>
          DEPOIMENTOS <span>DOS ALUNOS</span>
        </h1>
        <video src="/videos/depo12.mp4" controls>
          Seu navegador não suporta o elemento <code>video</code>.
        </video>
        <div>
          <video src="/videos/depo10.mp4" controls>
            Seu navegador não suporta o elemento <code>video</code>.
          </video>
          <video src="/videos/depo05.mp4" controls>
            Seu navegador não suporta o elemento <code>video</code>.
          </video>
          <video src="/videos/depo08.mp4" controls>
            Seu navegador não suporta o elemento <code>video</code>.
          </video>
          <video src="/videos/depo13.mp4" controls>
            Seu navegador não suporta o elemento <code>video</code>.
          </video>
          <video src="/videos/depo07.mp4" controls>
            Seu navegador não suporta o elemento <code>video</code>.
          </video>
          <video src="/videos/depo09.mp4" controls>
            Seu navegador não suporta o elemento <code>video</code>.
          </video>
          <video src="/videos/depo01.mp4" controls>
            Seu navegador não suporta o elemento <code>video</code>.
          </video>
          {/* <video src="/videos/depo06.mp4" controls>
            Seu navegador não suporta o elemento <code>video</code>.
          </video> */}
          <video src="/videos/depo11.mp4" controls>
            Seu navegador não suporta o elemento <code>video</code>.
          </video>
          <video src="/videos/depo02.mp4" controls>
            Seu navegador não suporta o elemento <code>video</code>.
          </video>
          <video src="/videos/depo14.mp4" controls>
            Seu navegador não suporta o elemento <code>video</code>.
          </video>
        </div>
        {/* <SubscribeButton>QUERO ACESSAR AGORA</SubscribeButton> */}
      </main>

      <main className={styles.contentContainer2}>
        <section className={styles.hero4}>
          <p className="textCenter">
            TENHO CERTEZA ABSOLUTA DE QUE SE VOCÊ CHEGOU ATÉ AQUI, VOCÊ NEM IRÁ
            ACREDITAR NA SUA
            <br />
            <span>
              EVOLUÇÃO E FACILIDADE DE APLICAÇÃO PARA CONQUISTAR GRANDES
              RESULTADOS
            </span>
            !
          </p>
          <h1>
            MESMO QUE VOCÊ SEJA UM COMPLETO INICIANTE SEM EXPERIÊNCIA ALGUMA,{" "}
            <span>ESSE TREINAMENTO FOI FEITO PARA VOCÊ!</span>
          </h1>
          <SubscribeButton>
            ACESSAR AGORA POR MENOS DE R$ 0,67 POR DIA
          </SubscribeButton>
        </section>
      </main>

      <main id="duvidas" className={styles.contentContainer3}>
        <h1>
          DÚVIDAS <span>FREQUENTES</span>
        </h1>
        <section className={styles.hero3}>
          <h2>MAS EU NÃO TENHO DINHEIRO</h2>
          <p>
            É exatamente por isso que você precisa URGENTE desse passo a passo
            porque se você está agora SEM DINHEIRO, você VAI continuar
            infelizmente sem dinheiro, até você tomar a decisão de fazer algo
            para mudar essa situação!
          </p>
          <h2>MAS EU NÃO CONSEGUI TER RESULTADOS ATÉ AGORA</h2>
          <p>
            É exatamente por este MOTIVO ique você precisa urgente deste MÉTODO
            porque não é possível ter resultados e crescer de fato SEM ter um
            DIRECIONAMENTO  VALIDADO E ESTRATÉGICO dentro desse mercado.
          </p>
          <h2>MAS EU NÃO SEI SE CONSIGO</h2>
          <p>
            É exatamente por isso que você precisa NESTE MOMENTO desse MÉTODO,
            pois ele será um desbloqueio de mentalidade negativa. Acredite, eu
            também era assim, mas configurei minha mente para ser um vencedor.
          </p>
          <p>
            Além disto, você não pode construir um edifício pelo teto, mas sim
            pela fundação. As técnicas abordadas são totalmente desenvolvidas
            para iniciantes que não sabem absolutamente nada! Por isso é sim
            para você!
          </p>
          <h2>TENHO UM NEGÓCIO PRÓPRIO, SERÁ QUE VALE A PENA?</h2>
          <p>
            Será uma alavanca fantástica para o teu negócio, pois TODOS os
            passos práticos que eu faço com você para crescer mais e mais seu
            empreendimento.
          </p>
          <p>
            VOCÊ IRÁ APRENDER TUDO QUE É NECESSÁRIO PARA O CRESCIMENTO DE SUA
            MARCA E AUTORIDADE , seja para negócio físico ou digital…
          </p>
          <h2>ISSO NÃO DÁ CERTO!</h2>
          <p>
            Eu não preciso nem comentar sobre isso, pois os próprios alunos,
            centenas e milhares de alunos estão tendo RESULTADOS EXTRAORDINÁRIOS
            todos os dias e VIVENDO DA INTERNET.
          </p>
          <p>
            Com pouco tempo, um celular ou computador com uma conexão com a
            internet, e vontade de querer aprender, SIM dá muito certo pra você.
          </p>
          <h2>NÃO TENHO TEMPO, É MUITO DIFÍCIL</h2>
          <p>
            É extremamente simplificado, direto ao ponto, objetivo, claro para
            aplicação, e com apenas 2 horas por dia e dedicação você consegue!
          </p>
          <p>
            Se eu consegui, mesmo trabalhando inicialmente o dia todo, com bem
            pouco tempo, sem saber de nada, sem ter dinheiro , consegui mudar
            completamente minha vida, você também consegue! Foi feito para você!
          </p>
          <h3>
            Lembrando que a <span>promoção de 50% de desconto</span> é por{" "}
            <span>tempo limitado</span> e amanhã este treinamento volta para seu
            valor original. Então, não deixe para amanhã esta{" "}
            <span>oportunidade de conquistar sua liberdade financeira</span>!
          </h3>
        </section>
      </main>

      <main id="bonus" className={styles.contentContainer2}>
        <section className={styles.hero4}>
          <h1>
            <img src="/images/face-ads.png" alt="" />
            <br />
            <span>
              Módulo Bônus completo de Facebook Ads do Básico ao extremo
              avançado
            </span>
            <br />
            <small>R$ 697,00</small>
            <br />
            R$ 0,00
          </h1>
          <p>
            Um treinamento completo de tráfego pago sempre atualizado com
            estratégias totalmente focadas em crescimento de Autoridade
            (Branding) para qualquer tipo de negócio. E muito além, você pode
            dar consultoria para pequenas e grandes empresas e faturar com isto.
          </p>
          <h1>
            <img src="/images/influencer.png" alt="" />
            <br />
            <span>
              AULA COMPLETA (Estratégia ÚNICA) Com Influencer (Influenciadores
              Digitais)
            </span>
            <br />
            <small>R$ 897,00</small>
            <br />
            R$ 0,00
          </h1>
          <p>
            Esse Bônus completo te proporcionará colocar em prática uma das
            estratégias mais avançadas e escaláveis do mercado na atualidade!
          </p>
          <h1>
            <img src="/images/israel-dawis.png" alt="" />
            <br />
            <span>AULA BÔNUS DE NEUROMARKETING (com Israel Dawis)</span>
            <br />
            <small>R$ 997,00</small>
            <br />
            R$ 0,00
          </h1>
          <p>
            Top player no mercado digital, que já faturou mais de 7 milhões. Um
            dos maiores estrategistas/especialistas de Copy em Neuromarketing da
            atualidade.
          </p>
        </section>
      </main>

      <main id="oferta-exclusiva" className={styles.contentContainer5}>
        <section className={styles.hero5}>
          <h1>
            <span>OFERTA EXCLUSIVA SOMENTE HOJE</span>
          </h1>
          <span>
            <strong>R$ 497</strong>
          </span>
          <h2>
            <span>12 x R$</span>
            19,70
            {/* <br />
            <span>ou R$ 236,40</span> */}
          </h2>
          <ul>
            <li>SUPORTE EXCLUSIVO</li>
            <li>MENTORIAS SEMANAIS</li>
            <li>
              MÉTODO TESTADO E APROVADO MILHARES DE ALUNOS POR TODO O BRASIL
            </li>
          </ul>
          <SubscribeButton>QUERO MUDAR DE VIDA AGORA! 🚀</SubscribeButton>
        </section>
      </main>
    </>
  );
}
