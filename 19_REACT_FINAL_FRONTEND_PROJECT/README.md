## Project 01 - Recipes App

The project of Trybe's 19th module, the last of the **Front-end** section!

*disclaimer*: The code on this particular directory is not the current for this project. Check the actual updated code [here](https://github.com/fabiosenracorrea/your_recipes_app)

## Quick Overview

![project overview](./project_overview.gif)

### What was proposed here

Because this is such a huge project with 88 requirements, the instructions on it is separated from this main `readme.md` and you can find it on this `md` file [here](./project_instructions)

### Grade

This project got a **100%/100%** grade and can be checkout entirely on [here](https://github.com/tryber/sd-06-project-recipes-app/pull/392).


#### Comments

This project marks the end of the **Front-End** module. 14-15 chapters of intense knowledge acquisition and practice. We've gone though basic HTML/CSS/JS paging all the way up to advanced React with Context API and Redux handles, diving deeper on JavaScript concepts and applications, and not forgetting to **test** every bit of code.

This project wraps it all up with a very good structure and organization, as well as code quality. It ended up so well, it became a stand alone project that i will be updating starting from now (12/03/2020) on a dedicated repository! You can check it out [here](https://github.com/fabiosenracorrea/your_recipes_app)

As a singular highlight for this project, it's hard to decide. There's a lot of code well written that can be chosen for this spot. I'd strongly advice for you to run though the application code. But on here, i'd like to share the code responsable for parsing the Object returned from the API, containing keys of ingredients `strIngredientN` and `strMeasureN`, where `N` is the number on the list. The response can have empty fields and it was my job to create an array of string on the format `ingredient - measure` for each filled pair.

```js
export default function parseIngredientAndMeasures(recipe) {
  const parsedIngredients = (
    Object
      .keys(recipe)
      .filter((detail) => {
        const ingredientPattern = /strIngredient\d/i;

        const detailIsIngredient = (
          ingredientPattern.test(detail)
        );

        // makes sure we only have filled ingredients
        if (detailIsIngredient) {
          return recipe[detail];
        }

        return false;
      })
      .map((ingredientKey) => {
        const everyNonDigitChar = /[^\d]/g;
        const ingredientNumber = ingredientKey.replace(everyNonDigitChar, '');

        const matchingMeasure = `strMeasure${ingredientNumber}`;

        const ingredient = recipe[ingredientKey];
        const measure = recipe[matchingMeasure];

        const displayFormat = `${ingredient} - ${measure}`;

        return displayFormat;
      })
  );

  return parsedIngredients;
}

```

###### Feedback

As always, any feedback or suggestion is welcomed.
