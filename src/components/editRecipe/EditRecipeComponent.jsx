import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestUpdateRecipesApi } from '../../js/actions';

import './edit.scss';

const mapStateToProps = state => {
    return {
        currentRecipeObj: state.recipesReducer.currentRecipeObj
    }
};
const mapDispatchToProps = dispatch => {
    return {
        requestUpdateRecipesApi:(data) => dispatch(requestUpdateRecipesApi(data))
    }
};

class EditRecipeFormComponent extends Component {
    state = {
        editedRecipeTitle: '',
        editedRecipeText: ''
    };

    componentDidMount() {
        this.setState(() => ({
            editedRecipeTitle: this.props.currentRecipeObj.title,
            editedRecipeText: this.props.currentRecipeObj.text
        }))
    }

    enterTitle = (event) => {
        let title = event.target.value;
        this.setState(() => ({
            editedRecipeTitle: title
        }));
    };
    enterText = (event) => {
        let text = event.target.value;
        this.setState(() => ({
            editedRecipeText: text
        }));
    };
    editRecipe = () => {   
        let dataObj = {
            id: this.props.currentRecipeObj._id,
            title: this.state.editedRecipeTitle,
            text: this.state.editedRecipeText
        };
        this.props.requestUpdateRecipesApi(dataObj);
        window.location.reload();
    };
    render() {
        return (
            <div className="edit-recipe">
                <label>
                    Название рецепта<br/>
                    <input type="text" size="40" value={this.state.editedRecipeTitle} name="title" className="add-recipe__title" onChange={this.enterTitle}/>
                </label>
                <label>
                    Текст рецепта<br/>
                    <textarea name="text" cols="40" rows="10" value={this.state.editedRecipeText} className="add-recipe__text" onChange={this.enterText}/>
                </label>
                <button className="edit-recipe__add-btn" onClick={this.editRecipe}>Сохранить изменения</button>
            </div>
        )
    }
};

const EditRecipeForm = connect(mapStateToProps, mapDispatchToProps)(EditRecipeFormComponent);
export default EditRecipeForm;