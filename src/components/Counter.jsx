const Counter = ({ score, onIncrement, onDecrement }) => {
  return (
    <div className="Counter">
      <button onClick={onDecrement}>-</button>
      <span>{score}</span>
      <button onClick={onIncrement}>+</button>
    </div>
  );
};

export default Counter;
