import React, {PropTypes, Component} from 'react'
import {connect} from 'react-redux'
import Article from '../Article/index'
import CSSTransition from 'react-addons-css-transition-group'
import accrdion from '../../decorators/accordion'
import './style.css'

class ArticleList extends Component {
    

    render() {
        const {articles, toggleOpenItem, isItemOpened} = this.props
        const filterArticlesIds = this.props.filter.filterArticles.map((s) => s.value)
        const articleComponents = articles
            //ок, но еще лучше делать фильтрацию в коннекте
            .filter(article => filterArticlesIds.indexOf(article.id) != -1)
            .filter(article => {
                return (this.props.filter.filterDate.from <= new Date(article.date)) && (new Date(article.date) <= this.props.filter.filterDate.to)
            })
            .map(article => <li key={article.id}>
            <Article article={article}
                     isOpen={isItemOpened(article.id)}
                     toggleOpen={toggleOpenItem(article.id)}
            />
        </li>)

        return (
            <CSSTransition component="ul"
                           transitionName="article-list"
                           transitionAppear={true}
                           transitionAppearTimeout={100}
                           transitionEnterTimeout={500}
                           transitionLeaveTimeout={300}
            >
                {articleComponents}
            </CSSTransition>
        )
    }
}


const mapStateToProps = state => {
    console.log('---', 'connect, state = ', state)
    return {
        articles: state.articles,
        filter: state.filter
    }
}

export default connect(mapStateToProps)(accrdion(ArticleList))

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired,
    isItemOpened: PropTypes.func.isRequired,
    toggleOpenItem: PropTypes.func.isRequired
}
