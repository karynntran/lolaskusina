import React, { Component } from 'react';

import RecipeItem from './recipe_item';



const RecipesList = (props) => {
	const recipeItems = props.recipes.data.map((recipe) => {
		return (
			<RecipeItem
				key={recipe.recipeName}
				recipe={recipe} />
		)
	});

	return (
		<div className="recipes-list section">
			<ul className="col-md-4 list-group">
				{ recipeItems }
			</ul>
		</div>
	); 

};

export default RecipesList;