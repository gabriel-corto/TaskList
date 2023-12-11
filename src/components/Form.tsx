
import Input from './Input'
import { Check } from 'phosphor-react'

import styles from './Form.module.css'

export default function Form() {
  return (
    <form className={styles.form}>
      <Input 
        Name='task'
        Type='text'
        PlaceHolder='Add new task...'
      />

      <button> <Check weight='bold' /> Add</button>
    </form>
  )
}
