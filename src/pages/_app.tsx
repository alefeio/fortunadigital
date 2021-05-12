import { AppProps } from "next/app";
import { Rodape } from "../components/Rodape";

import "../styles/global.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Rodape />
    </>
  );
}

export default MyApp;
