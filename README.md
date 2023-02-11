# POC Nest.js with GraphQL

## Table of contents

- [POC Nest.js with GraphQL](#poc-nestjs-with-graphql)
  - [Table of contents](#table-of-contents)
  - [General info](#general-info)
  - [Technologies](#technologies)
  - [Requirements](#requirements)
  - [Setup](#setup)
  - [Project status](#project-status)
  - [Licence](#licence)

## General info

A proof of concept _(POC)_ on using [GraphQL](https://graphql.org/) with [Nest.js](https://docs.nestjs.com/graphql/quick-start#getting-started-with-graphql--typescript).

## Technologies

The project is created with:

- Nest.js _(9.0.0)_
- GraphQL _16.6.0_
- Node.js _(18.14.0)_
- NPM _(9.4.1)_

Used database:

- MongoDB Atlas

## Requirements

To run the project properly, you'll need a `.env` file with a `MONGODB_URI` variable that contains your MongoDB instance URL.

## Setup

To run this project, install it locally using NPM:

```bash
# install dependencies
$ npm install
```

```bash
# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

The server should be up and running on the GraphQL Playground [localhost:5000](http://localhost:5000/graphql).

## Project status

This project is finished.

## Licence

[MIT licensed](./LICENCE).
