import { legacy_createStore as createStore } from "redux";
import TodoReducer  from "../reducer/todoReducer";
let Store = createStore(TodoReducer)

export default Store;