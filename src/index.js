import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import data from './data/data';

import Header from './components/header';
import Navigation from './components/navigation';
import SearchBar from './components/search_bar';
import RecipesList from './components/recipes_list';





// create a new component. this component should produce some html

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: ''
		};
		this.loaded = false;
		this._filterList = this._filterList.bind(this);

		// console.log(this.state.recipes)
	}

	fetchData(){
		var that = this;
		fetch('http://localhost:8080/src/data/data.json', {
			method: 'GET',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			}
		})
		.then(function(response) {
			if (response.status >= 400) {
				throw new Error("Bad response from server");
			}
			return response.json();
		})
		.then(function(data) {
			that.setState({ data : data.data })
		});
	}

	componentDidMount(){
		this.fetchData();
		this.loaded = true;
	}

	_filterList(term){
        //get query result
        var queryResult=[];
        data.data.map(function(recipe){
            if(recipe.recipeName.toLowerCase().indexOf(term)!=-1)
            queryResult.push(recipe);
        });
        this.setState({ data: queryResult })
        console.log(this.state)
	};

	render(){
		if (this.loaded === true) {
			return (
				<div>
					<Header />
					<Navigation filterList={this._filterList}/>
					<RecipesList recipes={this.state} />
				</div>
			)
		} else {
			return (
				<div>Loading...</div>
			)
		}

	}
}

// take this component's generated  html and put it on the page (in the dom)

ReactDOM.render(<App />, document.querySelector('.container'));