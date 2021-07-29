import {createStore} from 'redux';
import { inc, dec, rnd } from './actions';
import { reducer } from './reducer';

//actionCreators

const store = createStore(reducer);
const {dispatch} = store;
const incDispacth = () => dispatch(inc());
const decDispacth = () => dispatch(dec());
const rndDispacth = (value) => dispatch(rnd(value));

document.getElementById('inc').addEventListener('click', incDispacth);
document.getElementById('dec').addEventListener('click', decDispacth);
document.getElementById('rnd').addEventListener('click', rndDispacth(Math.floor(Math.random()*10)))
const update = () => {
    document.getElementById('counter').innerHTML = store.getState();
}
store.subscribe(()=>{
    update()
})

// store.dispatch({type:'INC'});
// store.subscribe(()=>{
//     console.log(store.getState());
// })
// store.dispatch({type:'INC'});