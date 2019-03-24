import React, { Component } from 'react';
import {connect} from 'react-redux';
import { requestGetRecipesApi } from '../../js/actions';

import './list.scss';

const mapStateToProps = state => {
    return {
        recipeList: state.recipesReducer.recipeList
    }
};

const mapDispatchToProps = dispatch => {
    return {
        requestGetRecipesApi: () => dispatch(requestGetRecipesApi())
    }
};

class RecipeListComponent extends Component {
    componentDidMount() {
        this.props.requestGetRecipesApi();
    }

    render() {
        let recipeList;
        if(this.props.recipeList.length > 0 && typeof this.props.recipeList !== 'string') {
            recipeList = this.props.recipeList.map((recipe, index) => {
                return <li className="recipes__list__item" key={index}>{recipe.title}</li>
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

