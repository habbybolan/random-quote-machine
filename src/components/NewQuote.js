import React from 'react';

function NewQuote(props) {
	return (
		<button id='new-quote'
				onClick={props.newQuoteClicked} 
				style={
					{backgroundColor: props.rgb}
				}>
			New Quote
		</button>
	);
}

export default NewQuote;