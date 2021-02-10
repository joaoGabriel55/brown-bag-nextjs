import React from 'react'

import styles from './Alert.module.css'

interface AlertProps {
  text: string
  open: boolean
}

export default function Alert({ text, open }: AlertProps) {
  return (
    <div className={styles['alert-content']} style={{ display: open ? 'block' : 'none' }}>
      {text}
    </div>
  )
}
