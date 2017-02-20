import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import data from './data/data';

import Header from './components/header';
import SearchBar from './components/search_bar';
import RecipesList from './components/recipes_list';



// create a new component. this component should produce some html

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {data: 'HI'};

		// console.log(this.state.recipes)
	}

	fetchData(){
		fetch('http://localhost:8080/src/data/data.json', {
			method: 'GET',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			}
		})
		.then(function(response) {
			if (response.status >= 400) {
				console.log(response)
				throw new Error("Bad response from server");
			}
			return response.json();
		})
		.then(function(data) {
			console.log(data)
		});
	}

	componentDidMount(){
		this.fetchData();
	}

	render(){
		return (
			<div>
				<Header />
				<SearchBar />
				<RecipesList/>
			</div>
		)
	}
}

// take this component's generated  html and put it on the page (in the dom)

ReactDOM.render(<App />, document.querySelector('.container'));