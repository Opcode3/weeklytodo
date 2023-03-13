import React from 'react'
import styles from '@/styles/Board.module.scss';
import StickyNote from './stickynote';

export default function Board() {

    const notes = [
        { id: 1, text: "Hard Work", date: "Monday, 13TH March, 2023."},
        { id: 2, text: "Him Work", date: "Monday, 13TH March, 2023."},
        { id: 3, text: "Hard Work", date: "Monday, 13TH March, 2023."},
        { id: 4, text: "Hard Work", date: "Monday, 13TH March, 2023."},
        { id: 5, text: "Hard Work", date: "Monday, 13TH March, 2023."},
        { id: 6, text: "Hard Work", date: "Monday, 13TH March, 2023."},
        { id: 7, text: "Hard Work", date: "Monday, 13TH March, 2023."},
        { id: 8, text: "Hard Work", date: "Monday, 13TH March, 2023."},
        { id: 9, text: "Little Hard Work", date: "Monday, 13TH March, 2023."},
    ]
  return (
    <div className={styles.main}>
        <div className={styles.heading}>
            <h2> <b>Todo Weekly Theme: </b> Taking it a step at a time</h2>
            <p>
                <span> <b>Start Date:</b> Monday, 13TH March, 2023 </span>
                <span> <b>End Date:</b> Saturday, 18TH March, 2023 </span>
            </p>
        </div>
        <div className={styles.board}>
            {
                notes.map(note => <StickyNote key={note.id} data={note} />)
            }
        </div>
    </div>
  )
}
