import React, {useState, createContext} from 'react';

export const RecipeContext = createContext();

export const RecipeProvider = (props) => {

//////////////////////////////
// Set states as necessary
//////////////////////////////

const [recipes, setRecipes] = useState([]);
const [search, setSearch] = useState("");
const [urlQuery, setUrlQuery] = useState("vegetarian");
const [recipeName, setRecipeName] = useState("");

const valueToExport = {
    searchValue: [search,setSearch], 
    recipesValue: [recipes,setRecipes], 
    urlQueryValue: [urlQuery,setUrlQuery],
    recipeNameValue: [recipeName, setRecipeName]
}

    return (
        <RecipeContext.Provider value={valueToExport}>
            {props.children}
        </RecipeContext.Provider>
    )
}
