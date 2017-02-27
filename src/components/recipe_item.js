import React, { Component } from 'react';

class RecipeItem extends Component {
	constructor(props) {
		super(props);

		this.state = { active: false };
		this._goToActiveView = this._goToActiveView.bind(this);
	}

	_goToActiveView(){
		this.state.active ? this.setState({ active: false}) : this.setState({ active: true });
	}

	render(){
		const recipeName = this.props.recipe.recipeName,
			recipeIngredients = this.props.recipe.ingredients.split("\n").map(function(text) { return ( <li key={text}> {text} <br/> </li> ) }),
			recipeProcedure = this.props.recipe.procedure,
			recipeCategory = this.props.recipe.category;
		return (
			<li className={["list-group-item recipe-li", this.state.active].join(" ")} onClick={this._goToActiveView}>
				<div className={[ "category-icon", recipeCategory ].join(" ")}></div>
				<div className="recipe-list-container">
					<div className="recipe-name">{ recipeName }</div>
					<div className="recipe-info">
						<div className="recipe-ingredients"><span className="keynames">Ingredients:</span>
							<ul className="ingredients">
									{ recipeIngredients }
							</ul>
						</div>
						<div className="recipe-procedure">
							<span className="keynames">Procedure:</span> { recipeProcedure }</div>
					</div>
				</div>
			</li>
		)
		
	}

};

export default RecipeItem;