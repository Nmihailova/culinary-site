import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestAddRecipeApi, openAddRecipe } from '../../../../js/actions';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import './add.scss';

const mapStateToProps = state => {
    return {
        currentRecipeObj: state.chooseReducer.currentRecipeObj
    }
};

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

    enterTitle = event => {
        let title = event.target.value;
        this.setState(() => ({
            newRecipeTitle: title
        }))
    };
    enterText = event => {
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
        let { newRecipeTitle, newRecipeText } = this.state;
        let { currentRecipeObj, openAddRecipe } = this.props;
        return (
            <div className="add-recipe">
                <h2 className="add-recipe__title">Добавьте ваш рецепт</h2>
                <label>
                    Введите название рецепта<br/>
                    <input type="text" size="40" value={newRecipeTitle} name="title" className="add-recipe__title" onChange={this.enterTitle}/>
                </label>
                <label>
                    Введите текст рецепта<br/>
                    <textarea name="text" cols="40" rows="10" value={newRecipeText} className="add-recipe__text" onChange={this.enterText}/>
                </label>
                <div className="add-recipe__buttons">
                    <Button variant="contained" disabled={newRecipeText.length === 0 || newRecipeTitle.length === 0 ? true : false} className="add-recipe__buttons__add-btn" onClick={this.addRecipe}>Добавить рецепт</Button>

                    <Link className="link" to={Object.keys(currentRecipeObj).length !== 0 ? `/show-recipe/${currentRecipeObj._id}`: '/'}>
                        <Button variant="contained" className="add-recipe__buttons__cancel-btn" onClick={openAddRecipe}>Отмена</Button>
                    </Link>
                </div>
            </div>
        )
    }
};

const AddRecipeForm = connect(mapStateToProps, mapDispatchToProps)(AddRecipeFormComponent);
export default AddRecipeForm;