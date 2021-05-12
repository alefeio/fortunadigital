import styles from "./styles.module.scss";

export function Button(props) {
  return (
    <a href={props.link} className={styles.subscribeButton}>
      {props.children}
    </a>
  );
}
