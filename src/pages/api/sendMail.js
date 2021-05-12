const nodemailer = require("nodemailer");
const config = require("../../../config.local");

export default function sendMail(req, res) {
  const transporter = nodemailer.createTransport({
    host: config.HOSTMAIL,
    port: config.PORTMAIL,
    secure: false,
    auth: {
      user: config.USERMAIL,
      pass: config.PASSMAIL,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  transporter
    .sendMail({
      from: `${req.body.nome} <${req.body.email}>`,
      to: [config.USERMAIL],
      replyTo: req.body.email,
      subject: "Novo cadastro - Newsletter Fortuna Digital",
      text: "",
      html: `
      <strong>Nome:</strong> ${req.body.nome}
      <br />
      <strong>Email:</strong> ${req.body.email}`,
    })
    .then((resposta) => {
      console.log(resposta);

      res.send(resposta);
    })
    .catch((error) => {
      // res.send("Erro:");
      res.send(error);
    });

  transporter
    .sendMail({
      from: `Fortuna Digital <${config.USERMAIL}>`,
      to: [req.body.email],
      replyTo: config.USERMAIL,
      subject: "Ebook Fortuna Digital",
      text: "",
      html: `
      <div style="display: flex; align-items: center; justify-content: center;">
      <img style="width: 40px; height: 40px; margin: 10px;" src="http://fortunadigitalacademy.com.br/images/globo.png" />
      <h1>FORTUNA DIGITAL</h1>
      </div>
      <h2><strong>Olá, ${req.body.nome}!</strong></h2>
      <p>Obrigado por se cadastrar em nossa newsletter.</p>
      <p><strong><a href="http://fortunadigitalacademy.com.br/ebook/EBOOK_FORTUNA_DIGITAL.pdf">Clique aqui e baixe seu ebook gratuitamente.</a></strong></p>`,
    })
    .then((resposta) => {
      console.log(resposta);

      res.send(resposta);
    })
    .catch((error) => {
      // res.send("Erro:");
      res.send(error);
    });
}
