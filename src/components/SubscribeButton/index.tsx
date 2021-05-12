import styles from "./styles.module.scss";

export function SubscribeButton(props) {
  const link = "https://sun.eduzz.com/812859";

  return (
    <a href={link} target="_blank" className={styles.subscribeButton}>
      {props.children}
    </a>
  );
}
