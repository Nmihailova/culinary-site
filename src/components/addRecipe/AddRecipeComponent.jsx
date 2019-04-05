import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestAddRecipeApi, openAddRecipe } from '../../js/actions';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import './add.scss';

const mapDispatchToProps = dispatch => {
    return {
        requestAddRecipeApi:(data) => dispatch(requestAddRecipeApi(data)),
        openAddRecipe: () => dispatch(openAddRecipe())
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
        this.props.openAddRecipe();
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
                <div className="add-recipe__buttons">
                    <Link to="/show-recipe"><Button variant="contained" disabled={this.state.newRecipeText.length === 0 || this.state.newRecipeTitle.length === 0 ? true : false} className="add-recipe__buttons__add-btn" onClick={this.addRecipe}>Добавить рецепт</Button></Link>
                    <Link to="/show-recipe"><Button variant="contained" className="add-recipe__buttons__cancel-btn" onClick={this.props.openAddRecipe}>Отмена</Button></Link>
                </div>
                
            </div>
        )
    }
};

const AddRecipeForm = connect(null, mapDispatchToProps)(AddRecipeFormComponent);
export default AddRecipeForm;