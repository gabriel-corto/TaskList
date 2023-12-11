
import { Trash } from 'phosphor-react'
import styles from './TaskList.module.css'

export default function TaskList() {
  return (
    <ul className={styles.tasks}>
      <li>
        <strong>Learn React js </strong>
        <button> <Trash size={18} weight='bold' /> </button>
      </li>
      <li>
        <strong>Learn React js </strong>
        <button> <Trash size={18} weight='bold' /> </button>
      </li>
      <li>
        <strong>Learn React js </strong>
        <button> <Trash size={18} weight='bold' /> </button>
      </li>
    </ul>
  )
}
