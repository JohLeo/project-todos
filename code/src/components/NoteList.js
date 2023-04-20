import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { notereminder } from 'reducers/reminders';
import { TaskBox } from './Styling/GlobalStyle'

export const NoteList = () => {
  const noteList = useSelector((store) => store.notes.items);
  const dispatch = useDispatch();

  const onDeleteNoteBtnClick = (id) => {
    dispatch(notereminder.actions.deleteSingleNote(id))
  }
  const onIsDoneCheckToggle = (id) => {
    dispatch(notereminder.actions.toggleIfItsDone(id))
  }
  return (
    <section>
      <ul>
        {noteList.map((singleNote) => {
          return (
            <TaskBox>
              <li key={singleNote.id}>
                <p>
                  <span>
                    {singleNote.name}
                  </span>
                  <button
                    type="button"
                    onClick={() => onDeleteNoteBtnClick({ id: singleNote.id })}> Delete todo
                  </button>
                  <label htmlFor={`note_with_id${singleNote.id}`}>
                    You done?
                    <input id={`note_with_id${singleNote.id}`} type="checkbox" value={singleNote.isDone} onChange={() => onIsDoneCheckToggle(singleNote.id)} />
                  </label>
                </p>
              </li>
            </TaskBox>
          )
        })}
      </ul>
    </section>
  )
}