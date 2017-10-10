import * as React from 'react';
import './Overview.css';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

const Overview = ({name, enthusiasmLevel = 1, onIncrement, onDecrement}: Props) => {
  if (enthusiasmLevel <= 0) {
    throw new Error('You could be a bit more happy');
  }

  return (
    <div className="overview">
      <div className="greeting">
        Jesus {name + Array(enthusiasmLevel + 1).join('!')}
      </div>
      <div>
        <button onClick={onDecrement}>-</button>
        <button onClick={onIncrement}>+</button>
      </div>
    </div>
  );
};

export default Overview;