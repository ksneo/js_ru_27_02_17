import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'

import { submitComment } from "../AC/index";

class NewCommentForm extends Component {
    static propTypes = {
    }

    state = {
        text: '',
        user: ''
    }

    handleChange = field => ev => {
        const {value} = ev.target
        if (!validators[field](value)) return

        this.setState({
            [field]: value
        })
    }

    handleSubmit = dispatch => articleId => ev => {
        ev.preventDefault()
        
        dispatch(this.state, articleId)
        
        this.setState({
            user: '',
            text: ''
        })
        
    }

    render() {
        const {newId, dispatchSubmit, articleId} = this.props;
        return (
            <form onSubmit = {this.handleSubmit(dispatchSubmit)(articleId)}>
                comment: <input type="text" value={this.state.text} onChange = {this.handleChange('text')}/>
                user: <input type="text" value={this.state.user} onChange = {this.handleChange('user')}/>
                <input type = "submit"/>
            </form>
        )
    }
}

const validators = {
    text: (text) => text.length < 150,
    user: (text) => text.length < 10
}
const mapPropsToState = (state) => {
    return {
        newId: state.generateID
    }
}
export default connect(
    mapPropsToState,
    { dispatchSubmit: submitComment }
)(NewCommentForm)