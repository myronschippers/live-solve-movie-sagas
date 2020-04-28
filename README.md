# Movie Sagas

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description

Displays a listing of movies with specific information. The information for each movie can be edited individually if it needs to be updated at any point. Each movie will also allow the association to multiple movie genres in case a movie belongs to more than one genre.


### Screen Shot

#### Home

[Home Page](/wireframes/home.png)

#### Details

[Details Page](/wireframes/details.png)

#### Edit

[Edit Page](/wireframes/edit.png)


### Prerequisites

Software required to install the app (e.g. node).

- [Node.js](https://github.com/nvm-sh/nvm)
- [PostgreSQL](https://wiki.postgresql.org/wiki/Homebrew)
- [Postico](https://eggerapps.at/postico/)

## Installation

1. Create a database named `saga_movies_weekend`
1. The queries in the `database.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on Postgres, so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries,
1. Open up your editor of choice and run `npm install` from the project terminal
1. Run `npm run server`
1. Run `npm run client` in a separate terminal
  - The npm run client command will open up a new browser tab for you!

## Usage

1. From the Home page the user can click on an individual movie item from the list. The user will be taken to a Details page for that particular movie that was clicked.
1. On the Details page the user can either click on the Back to List button to be navigated to the Home page where all the movies are listed or click on the Edit button and be navigated to the Edit page.
1. On the Edit page the user can update / change the Title and Description information for that specific movie. The updates will not be saved until the user clicks the Save button.
  - After the new information is saved the user is navigated back to the Details page.
1. On the Edit page if the user decides they no longer wish to edit the movie they can click on the Cancel button and be navigated back to the Details page without any of their updates being saved.

## Built With

- Node.js with Express
- React with Redux & Redux-Saga
- React Router Dom 
- Axios


## Acknowledgement

Thanks to [Prime Digital Academy](https://www.primeacademy.io/) for allowing me to give this demonstration of an assignment solution.