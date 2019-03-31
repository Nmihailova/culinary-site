import React, { Component } from 'react';
import { connect } from 'react-redux';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import { openAddRecipe, openEditRecipe } from '../../js/actions';

import './edit.scss';

const mapDispatchToProps = dispatch => {
    return {
        openAddRecipe: () => dispatch(openAddRecipe()),
        openEditRecipe: () => dispatch(openEditRecipe())
    }
};

class EditPanelComponent extends Component {
    render() {
        return (
            <div className="edit">
                <Fab size="medium" color="default" aria-label="Add" onClick={this.props.openAddRecipe}>
                    <AddIcon />
                </Fab>
                <Fab size="medium" color="default" aria-label="Edit" onClick={this.props.openEditRecipe}>
                    <EditIcon />
                </Fab>
                <Fab size="medium" disabled aria-label="Delete">
                    <DeleteIcon />
                </Fab>
            </div>
        )
    }
};

const EditPanel = connect(null, mapDispatchToProps)(EditPanelComponent);
export default EditPanel;