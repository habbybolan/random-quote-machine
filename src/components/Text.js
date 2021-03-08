import React from 'react';
import '../styles.css';


function Text(props) {
	return (
		<div id='text'
			style={
				{color: props.rgb}
			}>
			{"''" + props.quote + "''"}
		</div>
	);
}

export default Text;