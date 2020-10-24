import React from 'react';

function Count({ text, count }) {
    console.log(`%c Rendering ${text}`, 'color: #00ff5c');
	return <div>{text} - {count}</div>
}

//export default Count;
export default React.memo(Count)