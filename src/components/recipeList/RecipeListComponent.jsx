import React, { Component } from 'react';
import {connect} from 'react-redux';
import { requestGetRecipesApi, setCurRecipeObj, showRecipe } from '../../js/actions';
import { Link } from 'react-router-dom';

import './list.scss';

const mapStateToProps = state => {
    return {
        recipeList: state.getReducer.recipeList,
        currentRecipeObj: state.chooseReducer.currentRecipeObj
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
                return <Link class="link" key={recipe._id} to={`/show-recipe/${recipe._id}`}>
                    <li className={this.props.currentRecipeObj._id === recipe._id ? "recipes__list__item active" : "recipes__list__item"} 
                         id={recipe._id} 
                        onClick={this.chooseRecipe}>
                        {recipe.title}
                    </li>
                </Link>
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

