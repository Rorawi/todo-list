import React,{useState} from 'react';
import { useSelector,connect } from 'react-redux';
import { doc, deleteDoc } from "firebase/firestore";
import { db } from '../firebase/config';
import EditList from './EditList';
import { updateDoc } from "firebase/firestore";
const TodoList = (props) => {
    const [list, setList] = useState("");

     const item =useSelector((state)=>(state.list_items))
     //console.log(item);
     const [model,setModel] = useState(false)
    

    
     const HandleDelete = async()=> {
    //   await deleteDoc(doc(db, "todo-list", props.addList.id ));
     }
    
    return (
        <div className={model ? "model open": "model"}>

        
            {item.map((item)=>{
                
                return(
                    <div key={item.id}>
                    <h1>List item: {item.addList}</h1>

                    <button onClick={async()=> {
                        const listRef = doc(db, "todo-list", item.id);

                        // Set the "capital" field of the city 'DC'
                        await updateDoc(listRef, item.id)
                    }}>Edit</button>
                    <button onClick={async ()=>{
      await deleteDoc(doc(db, "todo-list", item.id ));

                    }}>Delete</button>
                    {/* <EditList edit_id={item.id}/> */}
                    </div>

                )
            })}
            
           
        
          
        </div>
    );
}

// const mapState =(state) => ({
//     list: state.list_items
// })

export default TodoList;
