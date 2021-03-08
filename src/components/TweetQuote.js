import React from 'react'
import twitterLogo from '../twitterLogo.png'

function TweetQuote(props) {
	return (
		<a  id='tweet-quote'
			href={formatTweetUrl(props)}
			style={
				{backgroundColor: props.rgb}
			}>
			<img id='twitter-logo'
				 src={twitterLogo} />
		</a>
	);
}

function formatTweetUrl(props) {
	let text = '?text=' + props.quote + ' ' + props.author;
	return 'https://twitter.com/intent/tweet' + text;
}

export default TweetQuote;