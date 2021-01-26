# 29.1 - DEPLOYMENT: INTRODUCTION & HEROKU

[Heroku](https://heroku.com/) is a free platform where you can *deploy* your applications and make them available for the rest of the world.

It comes with a intuitive interface and CLI, and it's main advantage is the simplicity you have to deploy using it. If you want to deploy a simple NODEJS app that don't rely on local databases (on docker, for instance), heroku can be a quick go-to solution. If you want to deploy a react application, it has support por it using [buildpacks](https://elements.heroku.com/buildpacks).

## Steps for DEPLOYMENT

1. Create a [Heroku account](https://www.heroku.com/)
2. Install it's CLI:

```bash
sudo snap install heroku --classic
```

3. Auth your CLI

```bash
heroku login
```

4. Create a *git remote* pointing to heroku's service. You can do this by simply doing

```bash
heroku create your_unique_repo_name
```

This will create a heroku repo in a remote called **heroku**. If you want to rename that remote, just pass in the `--remote` tag followed by the name you want

4. Make sure you have a **Procfile** inside your main directory, containing the type of your application and how to run it

Example:

```
web: node index.js
```

5. Push to your heroku's remote master

```bash
git push heroku master
```

### Config

1. Checking on your apps

```bash
heroku apps
```

2. Setting .env variables

```bash
heroku config:set VAR="VALUE" --app your-app-12345
```

And listing them:

```bash
heroku config --app nome-do-seu-app-12345
```

3. Removing/Deleting your deploy

```
heroku destroy --app your-app-29302 --confirm your-app-29302
```

## Exercises

This is a theoric module. As such, there are no specific exercises to be done.

#### Comments

Deploying an application is definitely the next step for a jr. dev. It involves a lot more than just coding. It's great that some low profile/simple solutions to get your apps out there exists, but it's also worth noting what is worth to use or not.

When it comes to deploying a react app, for instance, heroku can be an option but there are better options out there such as [Netilify](https://www.netlify.com/) which only become insufficient when your traffic sky rockets.

Talking about nodeJS applications, heroku can be an option if you application is simple and don't rely on docker to contact your database (e.g. it connects to MongoDB Atlas). If you want a more complete experience on deploying back-end apps, i'd recommend checking out [Digital Ocean](https://www.digitalocean.com/). It has no free plan, but i doubt there's reliable options out there with a free back-end plan.

###### Feedback

As always, any feedback or suggestion is welcomed.

