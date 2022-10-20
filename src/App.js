import React,{useEffect} from 'react'
import './App.css';
import AddList from "./components/AddList"
import { collection, query, onSnapshot } from "firebase/firestore";
import { useDispatch } from "react-redux"
import { db } from './firebase/config';
import {addListItem} from './action/todoAction'
import TodoList from './components/todoList';


function App() {
  const dispatch = useDispatch()
  useEffect(()=> {
      const readData =async()=> {
        const q = query(collection(db, "todo-list"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          const listArr = [];
          querySnapshot.forEach((doc) => {
             listArr.push(doc.data());
          });
         dispatch(addListItem(listArr))
         console.log(listArr);
        });
      };
      readData()
  },[]
  )
  return (
    <>
    <div>
    <AddList/>
    <TodoList/>
    </div>
    </>
  );
}

export default App;
