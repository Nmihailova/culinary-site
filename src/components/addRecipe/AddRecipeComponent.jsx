import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestAddRecipeApi } from '../../js/actions';

import './add.scss';

const mapDispatchToProps = dispatch => {
    return {
        requestAddRecipeApi:(data) => dispatch(requestAddRecipeApi(data))
    }
};

class AddRecipeFormComponent extends Component {
    state = {
        newRecipeTitle: '',
        newRecipeText: ''
    };
    enterTitle = (event) => {
        let title = event.target.value;
        this.setState(() => ({
            newRecipeTitle: title
        }))
    };
    enterText = (event) => {
        let text = event.target.value;
        this.setState(() => ({
            newRecipeText: text
        }))
    };
    addRecipe = () => {   
        let dataObj = {
            title: this.state.newRecipeTitle,
            text: this.state.newRecipeText
        };
        this.props.requestAddRecipeApi(dataObj);
    };
    render() {
        return (
            <div className="add-recipe">
                <h2 className="add-recipe__title">Добавьте ваш рецепт</h2>
                <label>
                    Введите название рецепта<br/>
                    <input type="text" size="40" value={this.state.newRecipeTitle} name="title" className="add-recipe__title" onChange={this.enterTitle}/>
                </label>
                <label>
                    Введите текст рецепта<br/>
                    <textarea name="text" cols="40" rows="10" value={this.state.newRecipeText} className="add-recipe__text" onChange={this.enterText}/>
                </label>
                <button className="add-recipe__add-btn" onClick={this.addRecipe}>Добавить рецепт</button>
            </div>
        )
    }
};

const AddRecipeForm = connect(null, mapDispatchToProps)(AddRecipeFormComponent);
export default AddRecipeForm;