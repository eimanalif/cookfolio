Cookfolio

Cookfolio is a full-stack web application for managing and sharing recipes. Users can add, view, edit, and delete recipes. The frontend is built with React, and the backend uses Node.js, Express, and MongoDB.




Table of Contents
•	FeaturesDemo
•	Installation
•	Usage
•	API Endpoints
•	Contributing





Features
•	Add new recipes with title, ingredients, and instructions.
•	View a list of all recipes.
•	Edit existing recipes.
•	Delete recipes.
•	Search recipes by name.




Installation
Prerequisites
•	Node.js
•	npm
•	MongoDB




Clone the Repository
git clone https://github.com/eimanalif/cookfolio.git
cd cookfolio



Install Dependencies
Client
cd client
npm install


Environment Variables
Create a .env file in the server directory and add the following environment variables:
MONGO_URI=mongodb://localhost:27017/cookfolio
PORT=5000


Running the Application
Start the Server
Cd client 
npm start
Start the Client

Open another terminal window:
cd client
npm start
The application will be available at http://localhost:3000.
Usage
1.	Open the application in your browser.
2.	Use the navigation bar to add, view, edit, or delete recipes.
3.	Use the search bar to find recipes by name.


API Endpoints
Recipes
•	GET /recipes: Get all recipes.
•	GET /recipes/
: Get a specific recipe by ID.
•	POST /recipes: Add a new recipe.
•	PUT /recipes/
: Update an existing recipe.
•	DELETE /recipes/
: Delete a recipe.


Contributing
Contributions are welcome! Please open an issue or submit a pull request with your changes.
1.	Fork the repository.
2.	Create your feature branch (git checkout -b feature/YourFeature).
3.	Commit your changes (git commit -m 'Add some feature').
4.	Push to the branch (git push origin feature/YourFeature).
5.	Open a pull request.


Contact
Eiman Fadlelmowla 
eiman.fadlelmowla@gmail.com


