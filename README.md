# Phase 3 Project Horror Rater -- Frontend UI

## Description
  

An app hosting a list of horror movies with details for each, including director, release date, and sub-genre. Among that list, movies can have reviews where "users" (a feature to be deeply expanded in Phase 4) can post comments and ratings, both on overall quality of the film and the scariness factor.


## Introduction


This project's focus is **Ruby** and OOP in which I **built a Sinatra API backend** that uses
**Active Record** to access and persist data in a database, which is used by this separate **React frontend** that interacts with the database via the API. To view the **API** navigate to:



https://github.com/jacobsaltzman/phase-3-sinatra-react-project 



## Usage


In this frontend app, users can:


[✔️] Create a "user" and see a list of all current users on the home page.

![image](https://user-images.githubusercontent.com/55026856/205797248-8aa10cae-7cf1-4b6d-8ae4-9736135300e5.png)



[✔️] Navigate to a movie page that has a list of the current movies including:
    - details about each movie.
    - a button to click and see all the reviews for a given movie.
    - a link that navigates to a new "page" where you can make a review for that movie.
    

![image](https://user-images.githubusercontent.com/55026856/205797610-6ba79b56-a369-4453-9be8-6e6e04971ef5.png)



[✔️] Navigate to a movie create page to add a movie to the database and list.

![image](https://user-images.githubusercontent.com/55026856/205797042-916ce054-4dce-4bee-937d-b9dae350425e.png)



[✔️] View a reviews page that lists all the reviews for every movie, and where "users" can:
    -delete a review
    -edit a review
    -see more details about each review
    
  ![image](https://user-images.githubusercontent.com/55026856/205797691-6cba5f1c-088a-4b05-af82-7fc3451baf34.png)



    
[✔️] Toggle dark and light mode and view a bunch of stylization of the movies and forms.

![image](https://user-images.githubusercontent.com/55026856/205797314-a2c64563-a521-46b7-baef-b657855f775a.png)



[X] User login link and signup forms are still in development and will be further expanding in Phase 4. 

![image](https://user-images.githubusercontent.com/55026856/205797355-acc50f0d-d876-43cb-b347-4e086df49764.png)




## Second branch changes


-Adds the functionality of creating a new user and "read" all users on the page.


-Adds the ability to dynamically select the movie that you want to review.


-The User model now has a read and create ability, but does not extend farther than that yet.


-The Review has full CRUD.


-There are also additional parts for future changes in the backend.



## Getting Started


### Frontend Setup

To launch the app `cd` into the main project directory. Once there, run:

```console
$ npm start
```

After starting the project locally, you should be able to view it at
[http://localhost:3000].


### Backend Setup


See backend repo for details on how to set up the server.

https://github.com/jacobsaltzman/phase-3-sinatra-react-project/tree/second 



## Project Extras

- This project is intended to focus more on the backend than the frontend. It mainly focuses on working with
  Active Record and performing CRUD actions.
  
- Future additions would be to include user login authentication.


