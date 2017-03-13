import React, {Component} from 'react'
//закинь в папку, а то быстро начнешь путаться в js/css файлах
import "./AddCommentForm.css"

export default class AddCommentForm extends Component {
    state = {
        name: '',
        text: ''
    }
    render() {
        return (
            <form className="add-comment" onSubmit={this.handleSubmitForm}>
                <input
                    className="add-comment__name"
                    type="text"
                    placeholder="Введите ваше имя"
                    value={this.state.name}
                    onChange={this.handleName}/><br/>
                <textarea
                    className="add-comment__text"
                    placeholder="Текст комментария"
                    value={this.state.text}
                    onChange={this.handleText}/><br/>
                <input
                    className="add-comment__btn"
                    type="submit"
                    value="Отправить комментарий"/>
            </form>
        )
    }
    handleSubmitForm = ev => {
        console.log("eventClick")
        ev.preventDefault()
    }
    handleText = ev => {
        if (ev.target.value.length > 150) 
            return
        this.setState({text: ev.target.value})
    }
    handleName = ev => {
        if (ev.target.value.length > 10) 
            return
        this.setState({name: ev.target.value})
    }

}
