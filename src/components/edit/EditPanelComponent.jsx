import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import { openAddRecipe, openEditRecipe, requestDeleteRecipeApi } from '../../js/actions';

import './edit.scss';

const mapStateToProps = state => {
    return {
        isRecipeChoosen: state.chooseReducer.isRecipeChoosen,
        currentRecipeObj: state.chooseReducer.currentRecipeObj
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
    }
    render() {
        return (
            <div className="edit">
                <Link to="/add-recipe">                
                    <Fab size="medium" color="default" aria-label="Add" onClick={this.props.openAddRecipe}>
                        <AddIcon />
                    </Fab>
                </Link>
                <Link to="/edit-recipe">
                    <Fab size="medium" color="default" disabled={Object.keys(this.props.currentRecipeObj).length !== 0 ? false : true} aria-label="Edit" onClick={this.props.openEditRecipe}>
                        <EditIcon />
                    </Fab>
                </Link>
                <Link to="/">
                    <Fab size="medium" color="default" disabled={Object.keys(this.props.currentRecipeObj).length !== 0 ? false : true} aria-label="Delete" onClick={this.deleteRecipe}>
                        <DeleteIcon />
                    </Fab>
                </Link>
                
            </div>
        )
    }
};

const EditPanel = connect(mapStateToProps, mapDispatchToProps)(EditPanelComponent);
export default EditPanel;