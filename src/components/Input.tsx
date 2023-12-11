
import styles from './Input.module.css'

type InputProps = { 
  Type: string,
  Name: string,
  Value?: string,
  PlaceHolder: string
}

export default function Input({ Type, Name, Value, PlaceHolder }: InputProps) {
  return (
    <input 
      type={Type}
      name={Name}
      value={Value}
      placeholder={PlaceHolder}
      className={styles.input} />
  )
}
