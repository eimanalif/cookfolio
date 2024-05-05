const express = require('express');
const app = express();
const port = process.env.PORT || 5000; // Use environment variable for port or default to 5000

// Add middleware 
app.use(express.json()); // Parse incoming JSON data

// Placeholder route
app.get('/', (req, res) => {
  res.send('Cookfolio Backend is running!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});


const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost:27017/cookfolio'; // Replace with your connection details

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('Error connecting to MongoDB', err));


const recipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String },
  ingredients: { type: Array },
  instructions: { type: String },
  board: { type: mongoose.Schema.Types.ObjectId, ref: 'Board' }, // Reference to Board model (if implementing boards)
});

const Recipe = mongoose.model('Recipe', recipeSchema);

app.post('/recipes', async (req, res) => {
  const { name, image, ingredients, instructions, board } = req.body; // Destructure data from request body
  
  try {
    const newRecipe = new Recipe({ name, image, ingredients, instructions, board });
    const savedRecipe = await newRecipe.save();
    res.json(savedRecipe); // Send saved recipe data back to frontend
  } catch (err) {
    console.error(err);
    res.status(500).send('Error creating recipe');
  }
});



app.get('/recipes', async (req, res) => {
  try {
    const recipes = await Recipe.find(); // Fetch all recipes from the database

    // Ensure Content-Type header is set to application/json
    res.setHeader('Content-Type', 'application/json');

    // Send the fetched recipes as JSON
    res.json(recipes);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching recipes');
  }
});


app.get('/recipes/:id', async (req, res) => {
  const { id } = req.params; // Get recipe ID from request parameters
  
  try {
    const recipe = await Recipe.findById(id); // Find recipe by ID
    if (!recipe) {
      return res.status(404).send('Recipe not found');
    }
    res.json(recipe);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching recipe');
  }
});


app.put('/recipes/:id', async (req, res) => {
  const { id } = req.params;
  const { name, image, ingredients, instructions, board } = req.body; // Updated data

  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(id, { $set: { name, image, ingredients, instructions, board } }, { new: true }); // Update recipe and return updated data
    if (!updatedRecipe) {
      return res.status(404).send('Recipe not found');
    }
    res.json(updatedRecipe);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error updating recipe');
  }
});

app.delete('/recipes/:id', async (req, res) => {
  const { id } = req.params;
  
  try {
    const deletedRecipe = await Recipe.findByIdAndDelete(id);
    if (!deletedRecipe) {
      return res.status(404).send('Recipe not found');
    }
    res.json({ message: 'Recipe deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error deleting recipe');
  }
});



