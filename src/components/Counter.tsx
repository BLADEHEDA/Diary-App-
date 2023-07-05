import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../store/counterSlice';

const Counter = () => {
  // const count = useSelector((state) => state.counter.value);
  const count = useSelector((state: any) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
       <div className='text-3xl font-bold text-blue-600' >Welcome to Diary App </div>
      <div>Count: {count}</div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;
