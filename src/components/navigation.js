import React, { Component } from 'react';
import SearchBar from './search_bar';


class Navigation extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}


	render(){
		const recipeCategories = ["beef", "pork", "vegetable", "poultry", "dessert", "seafood"];

		const categories = recipeCategories.map((category) => {
			return (
				<li className="category" key={category}>{category}</li>
			)
		});

		return (
			<div className="navigation section">
				<SearchBar filterList={this.props.filterList}/>
				<ul className="recipe-categories">
					{categories}
				</ul>
			</div>
		)
		
	}

};

export default Navigation;
