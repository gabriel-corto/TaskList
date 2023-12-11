

import React from 'react'
import styles from './TaskList.module.css'

type TaskProps = {
  children: React.ReactNode
}

export default function TaskList( {children }: TaskProps ) {
  return (
    <ul className={styles.tasks}>
      { children }
    </ul>
  )
}
