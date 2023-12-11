
import { Check } from 'phosphor-react'

import styles from './Form.module.css'
import { FormEventHandler } from 'react'

type formProps = {
  onSaveTask: FormEventHandler,
  children: React.ReactNode
}

export default function Form({ onSaveTask, children}: formProps) {
  return (
    <form action='#' className={styles.form} onSubmit={onSaveTask}>
      { children }
      <button> <Check weight='bold' /> Add</button>
    </form>
  )
}
