# Track Calorie #
This is a full-stack Javascript application built using HTML, Materialize, Node.js, Express.js, Handlebars.js, and MySQL.
The application follows a Model View Architecture (MVC) and uses RESTFUL routes (GET, POST, PUT, DELETE) to make requests to the server.
The application is deployed on Heroku and can be accessed online using the following link https://safe-caverns-63056.herokuapp.com/


### General ###
The application can be used to track daily meals along with the associated calorie intake. All the calories of the meals will be added up to
show aggregated calories intake. An item can be simply added by supplying the required fields and clicking on the provided add button.
Each item can enter into an edit state by clicking on the pencil icon beside each list item. Once an item enters an edit state, it can be 
updated or deleted. A back button is provided to exit from the edit state. The clear-all button will delete all entries up to date.

![Video of user interface](/public/assets/img/front-end-giphy.gif)

### Local setup for development purposes ###
The following must be installed to run the app locally.

* [Node.js](https://nodejs.org/en/)
* [npm](https://www.npmjs.com)
* [MySQL](https://www.mysql.com)

You need to have your own copy of MySQL database to run this app. Use schema.sql and seeds.sql for initial database setup (optional)
Then, in connection.js, enter the connection information and credentials to your database.

In the terminal window, navigate into the folder where you downloaded this app, and type npm install. Then, type node server.js and open your
browser to localhost:3000

### Technology ###

* HTML, Materialize, Handlebars.js
* Vanilla Javascript
* Node.js
* Object Relational Mapping (ORM)
* Express.js
* npm, including express and body-parser packages.
