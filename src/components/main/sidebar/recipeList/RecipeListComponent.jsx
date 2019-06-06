import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCurRecipeObj, showRecipe } from '../../../../js/actions';
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
    setCurRecipeObj: data => dispatch(setCurRecipeObj(data)),
    showRecipe: () => dispatch(showRecipe())
  }
};

class RecipeListComponent extends Component {
  chooseRecipe = event => {
    let currentId = event.target.id;
    let currRecipe = this.props.recipeList.filter(recipe => {
      return recipe._id === currentId;
    });
    this.props.setCurRecipeObj(currRecipe[0]);
    this.props.showRecipe();
  }

  render () {
    let { recipeList, currentRecipeObj } = this.props;
    let recipesList;
    if (recipeList.length > 0 && typeof recipeList !== 'string') {
      recipesList = recipeList.map((recipe) => {
        return <Link className="link" key={recipe._id} to={`/show-recipe/${recipe._id}`}>
          <li className={currentRecipeObj._id === recipe._id ? "recipes__list__item active" : "recipes__list__item"}
            id={recipe._id}
            onClick={this.chooseRecipe}
          >{recipe.title}</li>
        </Link>
      });
    } else {
      recipesList = "Рецептов пока нет, но вы можете их добавить"
    }

    return (
      <div className="recipes">
        <ul className="recipes__list">
          {recipesList}
        </ul>
      </div>
    )
  }
};

const RecipeList = connect(mapStateToProps, mapDispatchToProps)(RecipeListComponent);
export default RecipeList;

