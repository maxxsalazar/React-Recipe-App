////////////////////////
// All the imports
////////////////////////

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Home';
import FullRecipe from './FullRecipe';
import { RecipeProvider } from './RecipeContext';


////////////////////////
// Main component 
////////////////////////

function App() {
  
////////////////////////
// Return component
////////////////////////

  return (
<Router >
  <RecipeProvider>
    <div className="App">
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path={`/FullRecipe/:name`} exact component={FullRecipe} />
      </Switch>
    </div>
    </RecipeProvider>
</Router>
  );
}

////////////////////////
// Export Default
////////////////////////

export default App;
