# Project Overview

# Puppy Finder App
A CRUD App, using React and utilizing the Pet Finder API. A user can search for dogs to adopt by breed and zipcode. When the user finds a dog they may like, they can save it to a favorites list and edit their interest in the dog, add notes and/or remove from the puppy from the favorites list.

## Project Schedule

This schedule will be used to keep track of our progress throughout the week and align with our expectations.  

|  Day | Deliverable | Approval From Squad Lead |
|---|---| ---|
|Day 1: Tue| Project Idea, Wireframes, Project Setup, Webpack| Complete |
|Day 2: Wed| Set up Database, Routes and 3rd Party API| Complete |
|Day 3: Thurs| Basic Clickable Model | Complete |
|Day 4: Fri| Working Prototype and Styling| Complete |
|Day 5: Sat| Additional Styling and Deploy | Complete |
|Day 6: Sun| App Completed/Slides | Complete |
|Day 7: Mon| Project Presentations | Complete |

# Trello Board

![Trello Screenshot](https://i.imgur.com/qlb13nZ.png)
https://trello.com/b/dYEDr2VX

## Priority Matrix

![Time Priority Matrix](https://trello-attachments.s3.amazonaws.com/5a6ca2635159f923e03bf7bd/5a70d14fc8231d31403396e0/cefbb478b8ad7ee1375cd7ff427a02f9/Image_uploaded_from_iOS_(9).jpg) 

## MVP 

1. Functional Components (Header, Footer, About) 
2. API 3rd Party (puppy API) and Components to render
3. API (local database) and Components to render
4. CRUD functionality
5. Mobile and Desktop responsive; styling like wireframes
6. Deploy on Heroku

## POST MVP

1. Show location of shelters on a map
2. Add in registration (auth) for multiple users
3. Fun styling with loading placeholders

## Wireframes

### Search and Results
![Search and Results](https://trello-attachments.s3.amazonaws.com/5a6ca2635159f923e03bf7bd/5a70e3f3e0e7939fd3e42caf/ec9933335fd7762047fec09499549855/Image_uploaded_from_iOS_(11).jpg) 

### Single Result and Favorites
![Single Result and Favorites](https://trello-attachments.s3.amazonaws.com/5a6ca2635159f923e03bf7bd/5a70e44eaa3e35293659e6a3/0f1b446b6ea7af74178d5fa4492c7781/Image_uploaded_from_iOS_(12).jpg) 

### Favorites and Single Favorites
![Favorites and Single Favorites](https://trello-attachments.s3.amazonaws.com/5a6ca2635159f923e03bf7bd/5a70e4a8443c23f268225993/6b554b2d77d92c7b74d07d25787655ae/Image_uploaded_from_iOS_(13).jpg) 

### About
![About](https://trello-attachments.s3.amazonaws.com/5a6ca2635159f923e03bf7bd/5a70d008e2861fc615c26338/ed51182eebd0c4ba38c79d247586ece2/Image_uploaded_from_iOS_(3).jpg) 

## Table Structures
    
1. Puppies    
    CREATE TABLE puppies(
      id SERIAL PRIMARY KEY NOT NULL,
      name VARCHAR(255),
      photourl VARCHAR(255),
      sex VARCHAR(255),
      description VARCHAR(255),
      altered VARCHAR(255),
      housetrained VARCHAR(255),
      shelternumber VARCHAR(255),
      op_ID INTEGER,
      notes VARCHAR(255)
    );

2. Opinions
    CREATE TABLE IF NOT EXISTS opinons (
        id SERIAL PRIMARY KEY,
        opinion VARCHAR
    );


## Functional Components

1. Header
2. Footer
3. SearchForm
4. Search Results
5. Single Result
6. Favorites
7. Single Favorites
8. About

## React Routes

![React Routes](https://trello-attachments.s3.amazonaws.com/5a6ca2635159f923e03bf7bd/5a70d12ec3c6b594e6594953/e8469eb784c0866bda8152b7a1ab333a/Image_uploaded_from_iOS_(6).jpg) 

## Architecture Diagram

![Architecture Diagram](https://trello-attachments.s3.amazonaws.com/5a6ca2635159f923e03bf7bd/5a786cdf266bd3fc04bcc6ae/cee9a3847261fe3a8ed11a8ca4fb1c51/Image_uploaded_from_iOS_(15).jpg) 

## Code Snippet

![Code Snippet](https://trello-attachments.s3.amazonaws.com/5a6ca2635159f923e03bf7bd/5a78c3eaaabaf251de3e4b9d/f7d02c4673d1d1597e49a48e0205ff5f/Screen_Shot_2018-02-05_at_10.00.03_AM.png) 

## Issues and Resolutions

Issue: Pet Finder API data was very nested.
Resolution: Extensively testing the JSON objects to see exactly what we needed to write in our controller to call the data we wanted; deciding to specify a position in the array for photourl, instead of photos size.

Issue: PetFinder photourl's we're inside an array of different photo sizes, making it very difficult to identify a specific size for each data element and there are various image URLs for each pet. No good way to sort through them to find the largest, and some were too small to use in a web app.
Resolution: Tested and discovered that the 3rd image listed was often the largest, and always big enough to be seen clearly on the big screen. Wrote the code to always use the third photo in each pet's photo array.

Issue: Had difficulty figuring out when to pass data as props and when to make axios calls in React.
Resolution: Tested to see what made the most sense when connecting the necessary components.

## Instructions for Downloading Code
Instructions for downloading the code and running it on localhost:

To install this example on your computer, clone the repository and install dependencies
1. Git clone
2. Install dependencies, located in .json, npm install
3. Run the migration files in terminal with these commands psql -f migrations/add-opinion-table.sql psql -f migrations/add-puppies-table.sql
4. In one terminal window, enter the command npm start and in a separate one npm run build
3. Open a web browser and run on localhost:3000

This app uses environment variables to configure the clientID and clientSecret to access Google's API. Start the server with your own variables set to the appropriate credentials - see google developers console.
 
