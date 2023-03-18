import React from 'react'
import styles from '@/styles/Board.module.scss';
import StickyNote from './stickynote';
import Inputnote from './inputnote';
import MarkIcon from './icon/markIcon';

export default function Board() {

    const [inputState, setInputState] = React.useState(true);
    const [toggleModal, setToggleModal] = React.useState(false);
    const [modalData, setModalData] = React.useState(null)

    const [notes, setNotes] = React.useState([
        { id: 1, text: "Hard Work", date: "Monday, 13TH March, 2023."},
        { id: 2, text: "Him Work", date: "Monday, 13TH March, 2023."},
        { id: 3, text: "Hard Work", date: "Monday, 13TH March, 2023."},
        { id: 4, text: "Hard Work", date: "Monday, 13TH March, 2023."},
        { id: 5, text: "Hard Work", date: "Monday, 13TH March, 2023."},
        { id: 6, text: "Hard Work", date: "Monday, 13TH March, 2023."},
        { id: 7, text: "Hard Work", date: "Monday, 13TH March, 2023."},
        { id: 8, text: "Hard Work", date: "Monday, 13TH March, 2023."},
        { id: 9, text: "Little Hard Work", date: "Monday, 13TH March, 2023."},
    ]);

    const closeModalHandler = (e) => {
        setToggleModal(!toggleModal)
    }

    const stickyNoteHandler = (id) => {
        const searchedData = notes.filter(note => note.id == id)[0];
        if(searchedData){
            setModalData(searchedData);
            setToggleModal(!toggleModal)
        }
    }

    const alterNoteHandler = (incoming) => {
        if(incoming){

            const newData = notes.map(note => {
                if(note.id == incoming.id){
                    return incoming;
                }
                return note;
            });
            setNotes(newData)
            setToggleModal(!toggleModal)
        }
        
    }
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
                notes.map(note => <StickyNote key={note.id} data={note} event={stickyNoteHandler} />)
            }
        </div>
        <div className={styles.modal} style={{display: toggleModal? "flex": "none"}}>
            <div>
                <div className={styles.modalHeader}>
                    <h2>{ inputState ? "Creating a note" : "Updating a note"}</h2>
                    <span onClick={e => closeModalHandler(e)}><MarkIcon /></span>
                </div>
                
                <Inputnote data={modalData} event={alterNoteHandler} />
            </div>
        </div>
    </div>
  )
}
