import { useState } from 'react';
import ButtonDiv from './buttons-container';
import calculate from '../logic/calculate';

function Calculator() {
  const [calculatorState, setCalculatorState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (value) => {
    const updatedState = calculate(calculatorState, value);
    setCalculatorState(updatedState);
  };
  return (

    <div className="calc">
      <div className="screen">
        <span>
          {calculatorState.total}
          {' '}
          {calculatorState.operation}
          {' '}
          {calculatorState.next}
        </span>
      </div>
      <ButtonDiv onButtonClick={handleClick} />
    </div>
  );
}
export default Calculator;
