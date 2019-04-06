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
        requestGetRecipesApi: () => dispatch(requestGetRecipesApi()),
        setCurRecipeObj: data=> dispatch(setCurRecipeObj(data))
    }
};

class GetCurrentRecipeComponent extends Component {
    componentDidUpdate() {
        let currRecipe = this.props.recipeList.filter(recipe => {
            return recipe._id === this.props.currentId;
        });
        this.props.setCurRecipeObj(currRecipe[0]);
    }

    render() {
        
       return null; 
    }
};

const GetCurrentRecipe = connect(mapStateToProps, mapDispatchToProps)(GetCurrentRecipeComponent);
export default GetCurrentRecipe;