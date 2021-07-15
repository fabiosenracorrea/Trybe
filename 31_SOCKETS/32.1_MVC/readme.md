# 32.1 - SOFTWARE ARCHITECTURE: MVC

Before jumping in Sockets, a honorable mention to a type of architecture should be made: MVC (Model - View - Controller).

This type of architecture was extremely popular in the past and can still be found in a lot of projects nowadays.

The difference between MVC and MSC is that all the application rules lies to the Model (and sometimes you will find Model+Controller). The data is processed in the server and returned "ready" for the requesting user.

## View

This new module is what the user will see and his request returns. It could simply be a login page (same for everyone) or a customized dashboard with the requesting user info.

Your application simply creates the view (generally, a HTML page) with the data it needs and send it back.

To do so, most of the time you should be using a **template engine**. A template engine is something that allow you to inject dynamic code into static files (eg. a html file);

Express normally comes with the ability to understand a lot of template engines. You can check the list of them [here](https://expressjs.com/en/resources/template-engines.html).

For this simple example, we'll be using [EJS](https://ejs.co/);

Let's say we have an express application. We first install EJS:

```bash
npm install ejs
```

On our core server file, we need to tell express which engine we are using and where our views are:

```javascript
// ...

const app = express();

app.set('view engine', 'ejs');

app.set('views', './views');

// ...
```

Finally, let's say we have a route to return *book authors*. We could simply do:

```javascript
async function listAuthors(request, response) {
 const authors = await Author.getAll();

 response.status(200).render('authors/index', { authors });
};
```

This basically tells express: "look into the views folder, and grab the index file of the authors folder inside, rendering with the *authors* variable"

Our index.ejs file (yes! not .html) would look like:

```html
<!doctype html>
<html>
  <head>
    <title>MVC - Exemplo</title>
  </head>
  <body>
    <ul>
      <% authors.forEach((author) => { %>
        <li><%= author.name %></li>
      <% }) %>
    </ul>
  </body>
</html>
```

The "weird" syntax here is what is used to, in this case, run javascript code to render the page correctly with the info we provided, before sending it back to the client.

If you want to know more about the syntax, check the [ejs](https://ejs.co/) documentation.

## Exercises

On this module there is 2 batches of exercises. You can check them out below:

* [MVC - Exercise 1](./exercises/exercise_1)
* [MVC - Exercise 1](./exercises/exercise_2)

----

#### Comments

MVC is predominant specially when it comes to PHP and early versions of web applications. As the technology evolves and new design patterns became more and more apparent (MSC for instance), MVC kinda of falls off.

The control over your application modules and isolation of concerns are, more often than not, compromised, and an application in need of dependency inversion and single responsibility is created.

###### Feedback

As always, any feedback or suggestion is welcomed.

