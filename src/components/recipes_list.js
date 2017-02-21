import React, { Component } from 'react';

import RecipeItem from './recipe_item';



const RecipesList = (props) => {
	console.log(props)
	const recipeItems = props.recipes.data.map((recipe) => {
		return (
			<RecipeItem
				key={recipe.id}
				recipe={recipe} />
		)
	});

	return (
		<ul className="col-md-4 list-group">
			{ recipeItems }
		</ul>
	); 

};

export default RecipesList;