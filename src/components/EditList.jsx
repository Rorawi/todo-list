import React,{useState} from 'react';
import { doc, setDoc } from "firebase/firestore";
import { db } from '../firebase/config'; 
import {v4 as uuid} from "uuid"

const EditList = (props) => {
    const [addList,setList] = useState("")

    const HandleAdd = async(e)=> {
        e.preventDefault();
        console.log('clicked ohh clicked');
let newList = {addList, id:uuid()}

//Add a new document in collection "todo-list"
try {
    await setDoc(doc(db, "todo-list", newList.id),newList);
} catch (e) {
    console.log(e);
}
setList("")
    } 

    return (
        <div>
              <input type="text" value={addList} onChange={(e) =>{
                        setList(e.target.value);
                    }} 
                />
            <button onClick={HandleAdd}>Submit</button>
        </div>
    );
}

export default EditList;
