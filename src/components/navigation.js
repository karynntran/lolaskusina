import React, { Component } from 'react';
import SearchBar from './search_bar';


class Navigation extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render(){
		const recipeCategories = ["all", "beef", "pork", "vegetables", "poultry", "dessert", "seafood", "noodles"];

		const categories = recipeCategories.map((category) => {
			return (
				<li className="category" key={category} onClick={event=> this.props.filterByCategory(category)}>{category}</li>
			)
		});

		return (
			<div className={["navigation section", this.props.status].join(" ")}>
				<SearchBar filterList={this.props.filterList}/>
				<div className="category-filter">
					<ul className="recipe-categories">
						{categories}
					</ul>
				</div>
			</div>
		)
		
	}

};

export default Navigation;
