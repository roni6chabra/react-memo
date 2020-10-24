import React , { useState , useMemo , useCallback } from 'react';
import Count from './Count';
import Btn from './Btn';
import './App.css';

const App = () => {
  const [age, setAge] = useState(25)
  const [salary, setSalary] = useState(50000)

  	const incrementAge = useCallback(() => {
		console.log('incrementAge',age);
		setAge(age + 1)
	},[age])

	const incrementSalary = useCallback(() => {
		console.log('incrementSalary',salary);
		setSalary(salary + 1000);
  	},[salary])

	const isEvenAge = useMemo(() => {
		console.time();
		for (let i=0; i< 2000000000; i++);
		console.timeEnd();
		return age % 2 === 0
	},[age])
	 
	console.log('==============');

	return (
    <div className="App">
		<h1>useMemo + useCallback!!</h1>
		<h2>{isEvenAge ? <span className='even'>Even</span> : <span>Odd</span>} Age</h2>
		<Count text="Age" count={age} />
		<Btn handleClick={incrementAge}>Increment Age</Btn>
		<Count text="Salary" count={salary} />
		<Btn handleClick={incrementSalary}>Increment Salary</Btn>
	</div>
  )
}
export default App;