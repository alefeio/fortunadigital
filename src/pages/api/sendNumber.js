const nodemailer = require("nodemailer");
// const config = require("../../../config.local");

async function sendNumber(req, res) {
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
    const resposta = await transporter.sendMail({
      from: `${req.body.nome} <${req.body.email}>`,
      to: [process.env.USERMAIL],
      replyTo: req.body.email,
      subject: "Novo cadastro - Telefone",
      text: "",
      html: `
      <strong>Nome:</strong> ${req.body.nome}
      <br />
      <strong>Email:</strong> ${req.body.email}
      <br />
      <strong>Telefone:</strong> ${req.body.telefone}`,
    });

    console.log(resposta);
    res.send(resposta);
  } catch (error) {
    res.send(error);
  }
}

export default sendNumber;
