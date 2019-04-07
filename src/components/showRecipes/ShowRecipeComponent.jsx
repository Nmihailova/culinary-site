import React, { Component} from 'react';
import { connect } from 'react-redux';
import {setCurRecipeObj} from '../../js/actions';
import CircularProgress from '@material-ui/core/CircularProgress';

import GetCurrentRecipe from './GetCurrentRecipeComponent';

import './show.scss';

const mapStateToProps = state => {
    return {
        currentRecipeObj: state.chooseReducer.currentRecipeObj,
        recipeList: state.getReducer.recipeList
    }
};

const mapDispatchToProps = dispatch => {
    return {
        setCurRecipeObj: data=> dispatch(setCurRecipeObj(data))
    }
};

class ShowRecipeComponent extends Component {
    componentDidMount() {
        if(this.props.recipeList.length > 0 && typeof this.props.recipeList !== 'string') {
            let currRecipe = this.props.recipeList.filter(recipe => {
                return recipe._id === this.props.match.params.recipeId;
            });
        this.props.setCurRecipeObj(currRecipe[0]);
        }
    }    
    
    render() {
        return (
            <div className="show">
                {this.props.currentRecipeObj ? 
                    <div>
                        <h2 className="show__title">{this.props.currentRecipeObj.title}</h2>
                        <p className="show__text">{this.props.currentRecipeObj.text}</p>
                    </div> 
                    : <CircularProgress className="show__circular" />
                }
            </div>
        )
    }
};

const ShowRecipe = connect(mapStateToProps, mapDispatchToProps)(ShowRecipeComponent);
export default ShowRecipe;