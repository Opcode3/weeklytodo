import styles from '@/styles/Board.module.scss';
import React from 'react'

export default function Inputnote() {
  return (
    <div className={styles.inputNote}>
        <h3>Input Note:</h3>
        <textarea rows="12"></textarea>
        <div>
            <label htmlFor='complete'><input type="checkbox" id='complete' />Task Completed?</label>
        </div>
        <button>Stick Note</button>
    </div>
  )
}
