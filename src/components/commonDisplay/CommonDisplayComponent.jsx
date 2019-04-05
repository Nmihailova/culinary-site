import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import './common.scss';

import AddRecipeFormComponent from '../addRecipe/AddRecipeComponent';
import EditRecipeForm from '../editRecipe/EditRecipeComponent';
import ShowRecipe from '../showRecipes/ShowRecipeComponent';
import {CommonText} from './CommonTextComponent';

const mapStateToProps = state => {
    return {
        isAddRecipeOpen: state.recipesReducer.isAddRecipeOpen,
        isRecipeChoosen: state.recipesReducer.isRecipeChoosen,
        isEditRecipeOpen: state.recipesReducer.isEditRecipeOpen
    }
};

const CommonDisplayComponent = ({ isAddRecipeOpen, isRecipeChoosen, isEditRecipeOpen }) => {
    return (
        <section className="common-display">
            <Switch>
                <Route exact path="/" component={CommonText} />
                <Route exact path="/show-recipe" component={ShowRecipe} />
                <Route exact path="/add-recipe" component={AddRecipeFormComponent} />
                <Route exact path="/edit-recipe" component={EditRecipeForm} />
            </Switch>
        </section>
    )
};

const CommonDisplay = connect(mapStateToProps)(CommonDisplayComponent);
export default CommonDisplay;