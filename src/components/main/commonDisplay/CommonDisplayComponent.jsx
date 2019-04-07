import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import './common.scss';

import AddRecipeFormComponent from './addRecipe/AddRecipeComponent';
import EditRecipeForm from './editRecipe/EditRecipeComponent';
import ShowRecipe from './showRecipes/ShowRecipeComponent';
import {CommonText} from './CommonTextComponent';

const mapStateToProps = state => {
    return {
        recipeList: state.getReducer.recipeList
    }
};

const CommonDisplayComponent = ({ recipeList }) => {
    return (
        <section className="common-display">
            <Switch>
                <Route exact path="/" component={ CommonText } />
                {typeof recipeList !== 'string' && <Route path="/show-recipe/:recipeId" component={ ShowRecipe } />}
                <Route path="/add-recipe" component={ AddRecipeFormComponent } />
                <Route path="/edit-recipe" component={ EditRecipeForm } />
            </Switch>
        </section>
    )
};

const CommonDisplay = connect(mapStateToProps)(CommonDisplayComponent);
export default CommonDisplay;