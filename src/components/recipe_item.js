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
			recipeIngredients = this.props.recipe.ingredients,
			recipeProcedure = this.props.recipe.procedure;
		return (
			<li className={["list-group-item", this.state.active].join(" ")} onClick={this._goToActiveView}>
				<div>
					<div className="recipe-name">{ recipeName }</div>
					<div className="recipe-info">
						<div className="recipe-ingredients">Ingredients: { recipeIngredients }</div>
						<div className="recipe-procedure">Procedure: { recipeProcedure }</div>
					</div>
				</div>
			</li>
		)
		
	}

};

export default RecipeItem;