# 29.2 - DEPLOYMENT - PROCESS MANAGEMENT

Process Management exists to make sure our server won't simply stop working after a bug/crash that makes our script stops running. It's a tool to basically watch how our script is performing and take actions if necessary to make sure it stays up.

Some advantages are:

- Automatic Reload;
- Abstraction of native managers
- Session management;
- EAsy to scale on CPU usage
- Multiple application management;
- Load balancing
- Monitoring;
- Logs management

There are a lot of PM's out there, but this lesson will focus on one of the most popular ones: [PM2](https://pm2.keymetrics.io/).

## Installation

By simply doing

```bash
npm install pm2@latest -g
```

## Setup

Once installed, you can simply tell the CLI where is your script you want to keep running:

```bash
pm2 start ./dist/index.js --name <Process_name>
```

You can also use **stop, restart, delete and reload** as keywords + the process name to perform relative actions.

The one thats worth mentioning is that **reload**, as opposed to **restar** has a *0-second-downtime* characteristic.

## Monitoring

```bash
pm2 list
```

Will show all process with relative info, such as memory consumption, uptime and CPU usage.

There's also a dashboard web view you can use if you register [here](https://id.keymetrics.io/api/oauth/register) and configure your server/pc with the necessary keys.

## Cluster

Pm2 enables you to use more than just one CPU to run your process. It performs the necessary load balancing and management of those processes to make it easier for you server to receive more requests.

You can set it up by doing:

```bash
pm2 start index.js --instances 2 --name <Process_name>
```

O simply pass in **max or 0** to use all available CPUs on the machine.

## Scale

You can also set a number of process you want active at all times

```bash
pm2 scale <Process_name> 3
```

## More features

Apart from the auto-restart feature, PM2 can be configured to watch other things:

* Max Memory usage: restarts the process after a certain threshold is reached.
* Restart Delay
* Backoff strategies

## Usage with Heroku

As Heroku is a third party deploy option (as opposed to, Digital Ocean, for instance), it's usage is slightly different:

1. instal pm2 as project dependency `npm install pm2`
2. Add a specific script

```json
// ...
"scripts": {
  "start": "pm2-runtime start ecosystem.config.yml"
}
// ...
```

3. add the YAML file telling where the server file is

```YAML
apps:

- name: app
  script: ./index.js
```

Further configuration on how pm2 will be ran can be done in this file as well. You can read more about it [here](https://pm2.keymetrics.io/docs/usage/application-declaration/)

## Exercises

This is another theoric topic, where most of the concepts were tested on a local machine. PM2 is pretty straight forward to configure and use.

#### Comments

Process Management is 100% necessary to any application that wants to be public. It's improbable to assume no bugs or crashes will occur once in production. PM2 is one of the most famous (and easy to use) PMs out there, so it definitely is worth a check.

To make sure both contents of this module were understood, there is a [project](../Project_01_Heroku_PM2_Deploy) to wrap it all up.

###### Feedback

As always, any feedback or suggestion is welcomed.

