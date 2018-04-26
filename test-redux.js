const redux  =require('redux');
const ADD_TODO_ACTION = "add_to_do";
/*function app() {
    //name reducer
}*/
let store = redux.createStore(function app(state=[], action) {
    if(action.type === ADD_TODO_ACTION) {
        state.push(action.todo);
        return state;
        //return [...state, action.todo];
    }
    return state;

},[]);

store.subscribe(() => {
    console.log(store.getState());
});
store.dispatch({
    type : ADD_TODO_ACTION,
    todo : {name : "redux", done : false}
});
store.dispatch({
    type : ADD_TODO_ACTION,
    todo : {name : "Test", done : false}
});
store.dispatch({
    type : ADD_TODO_ACTION,
    todo : {name : "Test1", done : false}
});



