
import Input from './Input'
import { Check } from 'phosphor-react'

import styles from './Form.module.css'
import { FormEventHandler } from 'react'

type formProps = {
  onSaveTask: FormEventHandler
}

export default function Form({ onSaveTask }: formProps) {
  return (
    <form action='#' className={styles.form} onSubmit={onSaveTask}>
      <Input 
        Name='task'
        Type='text'
        PlaceHolder='Add new task...'
      />
      <button> <Check weight='bold' /> Add</button>
    </form>
  )
}
