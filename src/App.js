import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ROUTES } from "./constants/routes";

import NavbarComponent from "./components/navbarComponent/navbarComponent";
const SearchRecipeView = React.lazy(() => import("./view/searchRecipeView/SearchRecipeView"));
const CreateRecipeView = React.lazy(() => import("./view/createRecipeView/createRecipeView"));
const CreatedRecipesView = React.lazy(() => import("./view/createdRecipesView/createdRecipesView"));
const HomeView = React.lazy(() => import("./view/homeView/homeView"));

function App() {
  return (
    <main className="App">
      <BrowserRouter>
        <NavbarComponent />
        <React.Suspense fallback="loading...">
          <Routes>
            <Route exact path={ROUTES.HOME_ROUTE} element={<HomeView />} />
            <Route path={ROUTES.SEARCH_ROUTE} element={<SearchRecipeView />} />
            <Route path={ROUTES.CREATE_ROUTE} element={<CreateRecipeView />} />
            <Route path={ROUTES.CREATED_RECIPES_ROUTE} element={<CreatedRecipesView />} />
          </Routes>
        </React.Suspense>
      </BrowserRouter>
    </main>
  );
}

export default App;
