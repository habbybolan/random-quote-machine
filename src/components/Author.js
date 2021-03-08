import React from 'react';
import '../styles.css';


function Author(props) {
	return (
		<div id='author'
			style={
				{color: props.rgb}
			}>
			{'-' + props.author}
		</div>
	);
}

export default Author;