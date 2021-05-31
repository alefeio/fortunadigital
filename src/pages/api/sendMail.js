const nodemailer = require("nodemailer");
// const config = require("../../../config.local");

async function sendMail(req, res) {
  const transporter = nodemailer.createTransport({
    host: process.env.HOSTMAIL,
    port: process.env.PORTMAIL,
    secure: false,
    auth: {
      user: process.env.USERMAIL,
      pass: process.env.PASSMAIL,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  try {
    const respostaAdmin = await transporter.sendMail({
      from: `${req.body.nome} <${req.body.email}>`,
      to: [process.env.USERMAIL],
      replyTo: req.body.email,
      subject: "Novo cadastro - Newsletter Fortuna Digital",
      text: "",
      html: `
      <strong>Nome:</strong> ${req.body.nome}
      <br />
      <strong>Email:</strong> ${req.body.email}`,
    });

    const respostaCliente = await transporter.sendMail({
      from: `Fortuna Digital <${process.env.USERMAIL}>`,
      to: [req.body.email],
      replyTo: process.env.USERMAIL,
      subject: "Ebook Fortuna Digital",
      text: "",
      html: `
      <div style="display: flex; align-items: center; justify-content: center;">
      <img style="width: 40px; height: 40px; margin: 10px;" src="http://fortunadigitalacademy.com.br/images/globo.png" />
      <h1>FORTUNA DIGITAL</h1>
      </div>
      <h2><strong>Olá, ${req.body.nome}!</strong></h2>
      <p>Obrigado por se cadastrar em nossa newsletter.</p>
      <p><strong><a href="https://www.fortunadigitalacademy.com.br/ebook/EBOOK_FORTUNA_DIGITAL.pdf">Clique aqui e baixe seu ebook gratuitamente.</a></strong></p>`,
    });

    console.log(respostaAdmin);
    console.log(respostaCliente);
    res.send(respostaAdmin);
  } catch (error) {
    res.send(error);
  }
}

export default sendMail;
