import styles from '@/styles/Board.module.scss';
import React from 'react'

export default function Inputnote({data, event}) {
  const [note, setNote] = React.useState(null);
  const [noteArea, setNoteArea] = React.useState("");
  React.useEffect(()=>{
    if(data) {
      setNote(data);
      setNoteArea(data?.text);
    }
  }, [data])

  const submitStickerHandler = e => {
    e.preventDefault();
    note.text = noteArea;
    event(note)
  }
  return (
    <div className={styles.inputNote}>
        <textarea rows="12" onChange={e => setNoteArea(e.target.value)} value={noteArea}></textarea>
        <div className={styles.manageTask}>
            <label htmlFor='complete'><input type="checkbox" id='complete' /> <p>Task Completed?</p> </label>
            <button onClick={e => submitStickerHandler(e)}>Add Stick Note</button>
        </div>
    </div>
  )
}
