import React from 'react';
import '../styles.css'
import NewQuote from '../components/NewQuote'
import Text from '../components/Text'
import Author from '../components/Author'
import TweetQuote from '../components/TweetQuote'
import * as quotes from '../quotes.json'

function App() {
  return (
    <div>
    	<QuoteBox />
    </div>
  );
}

class QuoteBox extends React.Component {
	constructor(props) {
		super(props);
		let randomQuote = getRandomQuote();
		this.state = {
			quote: randomQuote.quote,
			author: randomQuote.author,
			rgb: getRandomRgb()
		}
		this.newQuoteClicked = this.newQuoteClicked.bind(this);
	}

	newQuoteClicked() {
		let randomQuote = getRandomQuote();
		this.setState({
			quote: randomQuote.quote,
			author: randomQuote.author,
			rgb: getRandomRgb()
		})
	}

	render() {
		return (
			<div id='background'
				 style={
				 	{backgroundColor: this.state.rgb}
				 	}>
				<div id='quote-box'>
					<Text  quote={this.state.quote} rgb = {this.state.rgb} />
					<Author author={this.state.author} rgb = {this.state.rgb} />
					<NewQuote newQuoteClicked={this.newQuoteClicked} rgb = {this.state.rgb} />
					<TweetQuote quote={this.state.quote} author={this.state.author} rgb = {this.state.rgb} />
				</div>
			</div>
		);
	}
}

function getRandomQuote() {
	let quotesParse = quotes['quotes'];
	const rand = Math.floor(Math.random() * quotesParse.length);

	return quotesParse[rand];
}

function getRandomRgb() {
	let R = Math.floor(Math.random() * 256);
	let G = Math.floor(Math.random() * 256);
	let B = Math.floor(Math.random() * 256);
	return 'rgb(' + R + ',' + 
			 		G + ',' + 
			 		B + ')'
}

export default App;
