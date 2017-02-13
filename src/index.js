import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';
import SearchBar from './components/search_bar';
import RecipesList from './components/recipes_list';



// create a new component. this component should produce some html

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {};

	}

	render(){
		return (
			<div>
				<Header />
				<SearchBar />
				<RecipesList />
			</div>
		)
	}
}

// take this component's generated  html and put it on the page (in the dom)

ReactDOM.render(<App />, document.querySelector('.container'));