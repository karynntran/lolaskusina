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
				<li className="category" key={category} onClick={event=> this.props.filterByCategory(category)}>{category}</li>
			)
		});

		return (
			<div className="navigation section">
				<SearchBar filterList={this.props.filterList}/>
				<div className="category-filter">
					<div className="see-all" onClick={event=> this.props.filterByCategory('all')}>see all</div>
					<ul className="recipe-categories">
						{categories}
					</ul>
				</div>
			</div>
		)
		
	}

};

export default Navigation;
