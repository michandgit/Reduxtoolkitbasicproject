import { counterActions } from '../store/index';
import classes from './Counter.module.css';
import { useDispatch, useSelector} from 'react-redux'

const Counter = () => {
  const dispatch = useDispatch();
  const showcounter = useSelector(state => state.counter.showcounter);
  const counter  = useSelector(state => state.counter.counter)
  
  
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };
  

  const incrementHandler = () =>{
    dispatch(counterActions.increment())
  }

  const increaseHandler = () =>{
    dispatch(counterActions.increase(5))
  }

  const decrementHandler = () =>{
    dispatch(counterActions.decrement())
  }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
     {showcounter && <div className={classes.value}>{counter}</div> } 
      <div >
        <button onClick={incrementHandler}>
          INCREMENT
        </button>
        <button onClick={increaseHandler}>increase BY 5</button>
        <button onClick={decrementHandler}>
          DECREMENT
        </button>
      </div>


      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
