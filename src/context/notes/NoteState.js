import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
    const notesInitial = [
      {
        _id: "6241b2c2ca8901f455cvec629f",
        user: "62404a5856eb13a121acc92f",
        title: "My Title",
        description: "Please wake up early",
        tag: "Personal",
        date: "2022-03-28T13:06:10.941Z",
        __v: 0,
      },
      {
        _id: "6241b2c2ca8901f455wec629f",
        user: "62404a5856eb13a121acc92f",
        title: "My Title",
        description: "Please wake up early",
        tag: "Personal",
        date: "2022-03-28T13:06:10.941Z",
        __v: 0,
      },
      {
        _id: "6241b2c2ca8901f455rec629f",
        user: "62404a5856eb13a121acc92f",
        title: "My Title",
        description: "Please wake up early",
        tag: "Personal",
        date: "2022-03-28T13:06:10.941Z",
        __v: 0,
      },
      {
        _id: "6241b2c2ca8901f455ec6y29f",
        user: "62404a5856eb13a121acc92f",
        title: "My Title",
        description: "Please wake up early",
        tag: "Personal",
        date: "2022-03-28T13:06:10.941Z",
        __v: 0,
      },
      {
        _id: "6241b2c2ca8901f4855ec629f",
        user: "62404a5856eb13a121acc92f",
        title: "My Title",
        description: "Please wake up early",
        tag: "Personal",
        date: "2022-03-28T13:06:10.941Z",
        __v: 0,
      },
      {
        _id: "6241b2c2ca8901f455e6c629f",
        user: "62404a5856eb13a121acc92f",
        title: "My Title",
        description: "Please wake up early",
        tag: "Personal",
        date: "2022-03-28T13:06:10.941Z",
        __v: 0,
      },
    ];
    const [notes, setNotes] = useState(notesInitial)


    return (
      <NoteContext.Provider value={{notes, setNotes}}>
        {props.children}
      </NoteContext.Provider>
    );
}

export default NoteState;