import React, { Component, PropTypes } from 'react'
import Select from 'react-select'
import {connect} from 'react-redux'
import {filterTitleArticle} from '../../AC/index'

import 'react-select/dist/react-select.css'

class SelectFilter extends Component {
    static propTypes = {
        
    };


    handleChange = selected => {
        this.props.dispatchTitleSelect(selected)
    }

    render() {
        const { articles, filter } = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return <Select
            options={options}
            value={filter.filterArticles}
            multi={true}
            onChange={this.handleChange}
        />
    }
}

export default connect((state) => {
    return {articles: state.articles, filter: state.filter};
}, {dispatchTitleSelect: filterTitleArticle})(SelectFilter)