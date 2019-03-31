import React, { Component } from 'react';
import { connect } from 'react-redux';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import { openAddRecipe, openEditRecipe, requestDeleteRecipeApi } from '../../js/actions';

import './edit.scss';

const mapStateToProps = state => {
    return {
        isRecipeChoosen: state.recipesReducer.isRecipeChoosen,
        currentRecipeObj: state.recipesReducer.currentRecipeObj
    }
};

const mapDispatchToProps = dispatch => {
    return {
        openAddRecipe: () => dispatch(openAddRecipe()),
        openEditRecipe: () => dispatch(openEditRecipe()),
        requestDeleteRecipeApi: id => dispatch(requestDeleteRecipeApi(id))
    }
};

class EditPanelComponent extends Component {
    deleteRecipe = () => {
        this.props.requestDeleteRecipeApi(this.props.currentRecipeObj._id);
        window.location.reload();
    }
    render() {
        return (
            <div className="edit">
                <Fab size="medium" color="default" aria-label="Add" onClick={this.props.openAddRecipe}>
                    <AddIcon />
                </Fab>
                <Fab size="medium" color="default" disabled={this.props.isRecipeChoosen ? false : true} aria-label="Edit" onClick={this.props.openEditRecipe}>
                    <EditIcon />
                </Fab>
                <Fab size="medium" color="default" disabled={this.props.isRecipeChoosen ? false : true} aria-label="Delete" onClick={this.deleteRecipe}>
                    <DeleteIcon />
                </Fab>
            </div>
        )
    }
};

const EditPanel = connect(mapStateToProps, mapDispatchToProps)(EditPanelComponent);
export default EditPanel;