import React from 'react'
import styles from '@/styles/Board.module.scss';

export default function StickyNote({ data }) {
  return (
    <div className={styles.stickyNote}>
        <p id={data?.id}>{data?.text}</p>
        {/* <footer>{data?.date}</footer> */}
    </div>
  )
}
