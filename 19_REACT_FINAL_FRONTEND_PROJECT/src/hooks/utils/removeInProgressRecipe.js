const typeToKey = {
  comidas: 'meals',
  bebidas: 'cocktails',
};

export default function removeInProgressRecipe(type, recipeID) {
  const oldInProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));

  const recipesAccess = typeToKey[type];
  const recipesToUpdate = { ...oldInProgressRecipes[recipesAccess] };

  delete recipesToUpdate[recipeID];

  const newRecipesInProgress = {
    ...oldInProgressRecipes,
    [recipesAccess]: recipesToUpdate,
  };

  localStorage.setItem('inProgressRecipes', JSON.stringify(newRecipesInProgress));
}
