import React from 'react';
import { connect } from 'react-redux';

import './common.scss';

import AddRecipeFormComponent from '../addRecipe/AddRecipeComponent';
import EditRecipeForm from '../editRecipe/EditRecipeComponent';
import ShowRecipe from '../showRecipes/ShowRecipeComponent';

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
            {isRecipeChoosen && <ShowRecipe />}
            {isAddRecipeOpen && <AddRecipeFormComponent />}
            {isEditRecipeOpen && <EditRecipeForm />}
        </section>
    )
};

const CommonDisplay = connect(mapStateToProps)(CommonDisplayComponent);
export default CommonDisplay;