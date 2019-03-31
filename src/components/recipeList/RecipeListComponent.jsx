import React, { Component } from 'react';
import {connect} from 'react-redux';
import { requestGetRecipesApi, setCurRecipeObj, showRecipe } from '../../js/actions';

import './list.scss';

const mapStateToProps = state => {
    return {
        recipeList: state.recipesReducer.recipeList
    }
};
const mapDispatchToProps = dispatch => {
    return {
        requestGetRecipesApi: () => dispatch(requestGetRecipesApi()),
        setCurRecipeObj: data=> dispatch(setCurRecipeObj(data)),
        showRecipe: () => dispatch(showRecipe())
    }
};

class RecipeListComponent extends Component {
    componentDidMount() {
        this.props.requestGetRecipesApi();
    }

    chooseRecipe = e => {
        let currentId = e.target.id;
        let currRecipe = this.props.recipeList.filter(recipe => {
            return recipe._id === currentId;
        });
        this.props.setCurRecipeObj(currRecipe[0]);
        this.props.showRecipe();
    }

    render() {
        let recipeList;
        if(this.props.recipeList.length > 0 && typeof this.props.recipeList !== 'string') {
            recipeList = this.props.recipeList.map((recipe) => {
                return <li className="recipes__list__item" key={recipe._id} id={recipe._id} onClick={this.chooseRecipe}>{recipe.title}</li>
            });
        } else {
            recipeList = "Рецептов пока нет, но вы можете их добавить."
        }
        
        return (
            <div className="recipes">
                <ul className="recipes__list">
                    {recipeList}
                </ul>
            </div>
        )
    }
};

const RecipeList = connect(mapStateToProps, mapDispatchToProps)(RecipeListComponent);
export default RecipeList;

