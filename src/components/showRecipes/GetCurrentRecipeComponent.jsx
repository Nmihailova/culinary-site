import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestGetRecipesApi, setCurRecipeObj } from '../../js/actions';

const mapStateToProps = state => {
    return {
        recipeList: state.getReducer.recipeList,
        currentRecipeObj: state.chooseReducer.currentRecipeObj
    }
};
const mapDispatchToProps = dispatch => {
    return {
        setCurRecipeObj: data=> dispatch(setCurRecipeObj(data))
    }
};

const GetCurrentRecipeComponent = ({ recipeList, setCurRecipeObj, currentId}) => {
        if(recipeList.length > 0 && typeof recipeList !== 'string') {
            let currRecipe = recipeList.filter(recipe => {
            return recipe._id === currentId;
        });
        setCurRecipeObj(currRecipe[0]);
        }
        
       return null; 
};

const GetCurrentRecipe = connect(mapStateToProps, mapDispatchToProps)(GetCurrentRecipeComponent);
export default GetCurrentRecipe;