# Phase 3 Project Horror Rater -- Frontend UI

## Second branch


-Adds the functionality to creating a new user and "read" all users on the page.


-Adds the ability to dynamically select the movie that you want to review.


-The User model now has a read and create ability.

-The Review has read, create, delete, and update.

-The one-to-many is the User to the Reviews.

-There are also additional parts for future changes. 


## What is it?

- A comprehensive list of horror movies with details for each, including director, release date, and sub-genre. Among that list, movies can have reviews where "users" post comments and ratings, both on overall quality of the film and the scariness factor.

## Introduction

This project's focus is **Ruby** and OOP in which I **built a Sinatra API backend** that uses
**Active Record** to access and persist data in a database, which is used
by a separate **React frontend** that interacts with the database via the API.

## Requirements

For this project, you can see:

[✔️] Use Active Record to interact with a database.
[✔️] Have at least two models with a one-to-many relationship.
[✔️] At a minimum, set up the following API routes in Sinatra:
  - create and read actions for both models
  - full CRUD capability for one of the models
[✔️] Build a separate React frontend application that interacts with the API to
  perform CRUD actions.
[✔️] Implement proper front end state management. You should be updating state using a
  setState function after receiving your response from a POST, PATCH, or DELETE 
  request. You should NOT be relying on a GET request to update state. 
[✔️] Use good OO design patterns. You should have separate classes for each of your
  models, and create instance and class methods as necessary. 
[✔️] Routes in your application (both client side and back end) should follow RESTful
  conventions.
[✔️] Use your back end optimally. Pass JSON for related associations to the front 
  end from the back end. You should use active record methods in your controller to grab
  the needed data from your database and provide as JSON to the front end. You
  should NOT be relying on filtering front end state or a separate fetch request to
  retrieve related data.

This application uses a React frontend interface and a
Sinatra backend API, where a user can:

- **Create** a new review or add a movie to the list
- **Read** a list of all movies and review
- **Update** an individual review
- **Delete** a review

A `Review` can be tagged with a `User`, so that each review _belongs to_ a
user and each user _has many_ reviews.

## Getting Started

### Backend Setup

You can start your server with:

```console
$ bundle exec rake server
```

This will run your server on port
[http://localhost:9292](http://localhost:9292).


This repository has all the starter code needed to get a Sinatra backend up and
running. Run `bundle install` to install the gems.


### Frontend Setup

The React app lives in a different repository in a **separate folder** with a for the
frontend. To view this, `cd` out of the backend project directory and into the React frontend. Once there, run:

```console
$ npm start
```

After starting the project locally, you should be able to view it at
[http://localhost:3000].


## Project Extras

- This project is intended to focus more on the backend than the frontend. It mainly focuses on working with
  Active Record and performing CRUD actions.
- Future additions would be to include user login authentication.


## Resources

- [create-react-app][]
- [dbdiagram.io][]
- [Postman][postman download]

[create-react-app]: https://create-react-app.dev/docs/getting-started
[create repo]: https://docs.github.com/en/get-started/quickstart/create-a-repo
[dbdiagram.io]: https://dbdiagram.io/
[postman download]: https://www.postman.com/downloads/
[network tab]: https://developer.chrome.com/docs/devtools/network/
