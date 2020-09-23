## 13.2 - React Routing

On this lesson one of the most important components of React Single Page Applications (SPAs) is introduced: `<Link to="/" />`

And because this is such a hot topic, exercises on this topic will be covered on the next Project [Movie Cards: CRUD](../Project_01_CRUD_Movie_Cards).

### What was covered here?

We divide the study on React Routing into:

1. Understanding how to use it

You need to add a dependency to your React project

```bash
npm instal react-router-dom
# or
yarn add react-router-dom
```

2. Basic concepts

* **Browser Router**: 'the father of all routes' - a component that must be encapsulating all routes to enable the Link component to work properly. There are other *Router* components, but this one is pretty much the only one you'll need.

* **Route**: A pretty flexible component that loads whichever page (component) we tell it to load, given a specified path. Be aware! Sometimes you'll want to use the `exact` attribute because the component doesn't check for strict equality on the provided path, but for inclusion. You can also pass in props to the component using the *render* attribute, which can be quite handy when controlling the data flowing downwards in the application.

* **Switch**: A solution to the not-strict Route matching! This encapsulating component takes Routes as children and only allows the first one that matches to render.

* **Link**: A component designed to replace the anchor element `<a>` to link to anywhere inside our application. Styling it with css is the same, and the component doesn't reload the page to redirect to the address linked.

###### Feedback

As always, any feedback or suggestion is welcomed.
