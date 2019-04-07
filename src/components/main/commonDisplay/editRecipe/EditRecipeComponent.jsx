import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestUpdateRecipesApi, openEditRecipe } from '../../../../js/actions';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import './edit.scss';

const mapStateToProps = state => {
    return {
        currentRecipeObj: state.chooseReducer.currentRecipeObj
    }
};
const mapDispatchToProps = dispatch => {
    return {
        requestUpdateRecipesApi:(data) => dispatch(requestUpdateRecipesApi(data)),
        openEditRecipe: () => dispatch(openEditRecipe())
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

    enterTitle = event => {
        let title = event.target.value;
        this.setState(() => ({
            editedRecipeTitle: title
        }));
    };
    enterText = event => {
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
        this.props.openEditRecipe();
    };

    render() {
        let { editedRecipeTitle, editedRecipeText } = this.state;
        let { currentRecipeObj, openEditRecipe } = this.props;
        return (
            <div className="edit-recipe">
                <label>
                    Название рецепта<br/>
                    <input type="text" size="60" value={editedRecipeTitle} name="title" className="add-recipe__title" onChange={this.enterTitle}/>
                </label>
                <label>
                    Текст рецепта<br/>
                    <textarea name="text" cols="60" rows="10" value={editedRecipeText} className="add-recipe__text" onChange={this.enterText}/>
                </label>
                <div className="edit-recipe__buttons">
                    <Link className="link" to={`/show-recipe/${currentRecipeObj._id}`}>
                        <Button variant="contained" onClick={this.editRecipe}>Сохранить изменения</Button>
                    </Link>
                    <Link className="link" to={`/show-recipe/${currentRecipeObj._id}`}>
                        <Button variant="contained" onClick={openEditRecipe}>Отмена</Button>
                    </Link>
                </div>
            </div>
        )
    }
};

const EditRecipeForm = connect(mapStateToProps, mapDispatchToProps)(EditRecipeFormComponent);
export default EditRecipeForm;