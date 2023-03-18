import React from 'react'
import styles from '@/styles/Board.module.scss';

export default function StickyNote({ data, event }) {
  return (
    <div className={styles.stickyNote} onClick={e => event(data?.id)}>
        <p id={data?.id}>{data?.text}</p>
        {/* <footer>{data?.date}</footer> */}
    </div>
  )
}
