import {createStore} from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const reducer = (state = [], action) => {
    console.log(action);
    switch(action.type){
        case ADD_TODO:
            return []
        case DELETE_TODO:
            return []
        default:
            return state;
    }
}

const store = createStore(reducer);


const onSubmit = e => {
    e.preventDefault();
    const toDo = input.value;
    input.value = "";
    // dispatch를 통해 데이터를 배열 형식으로 보낼 수 있음
    store.dispatch({type: ADD_TODO, text: toDo});
}

form.addEventListener("submit", onSubmit);