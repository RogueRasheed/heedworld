import styles from "./Button.module.css"


export default function Button({children, onClick}) {
  return (
<button onClick={onClick} className={`${styles.btn} ${styles.primary}`} >
    {children}
</button>
  )
}
