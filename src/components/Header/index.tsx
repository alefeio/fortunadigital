import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        {/* <img src="/images/logo.png" alt="Fortuna Digital" /> */}
        <h2><img src="/images/globo.png" alt=""/> FORTUNA DIGITAL</h2>
        <nav>
          <a href="/ebook">EBOOK</a>
          <a href="#depoimentos">DEPOIMENTOS</a>
          <a href="#duvidas">
            DÚVIDAS FREQUENTES
          </a>
          <a href="#bonus">
            BÔNUS
          </a>
          <a href="#oferta-exclusiva" className={styles.active}>
            OFERTA EXCLUSIVA
          </a>
        </nav>
      </div>
    </header>
  );
}
