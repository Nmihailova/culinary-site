import React from 'react';
import { connect } from 'react-redux';

import './show.scss';

const mapStateToProps = state => {
    return {
        currentRecipeObj: state.recipesReducer.currentRecipeObj
    }
};

const ShowRecipeComponent = ({currentRecipeObj}) =>{
    return (
        <div className="show">
            <h2 className="show__title">{currentRecipeObj.title}</h2>
            <p className="shiw__text">{currentRecipeObj.text}</p>
        </div>
    )
};

const ShowRecipe = connect(mapStateToProps)(ShowRecipeComponent);
export default ShowRecipe;