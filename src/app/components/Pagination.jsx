import React from 'react';
import PageNumber from './PageNumber.jsx'

class Pagination extends React.Component {
    constructor(props){
        super(props);

        this.getBeginning = this.getBeginning.bind(this);
        this.getMiddle = this.getMiddle.bind(this);
        this.getEnd = this.getEnd.bind(this);
        this.renderPageNumber = this.renderPageNumber.bind(this);
    }


    getBeginning(){
        let begin = [];

        for(let i=0; (i < this.props.numPages && i < 3); i++){
            begin.push(this.renderPageNumber(i+1));
        }
        if(this.props.numPages > 3){
            begin.push(<span>...</span>);
            begin.push(this.renderPageNumber(this.props.numPages));
        }

        return begin;
    }

    getMiddle(){
        let currPage = this.props.currentPage;

        return (
            <span>
                { this.renderPageNumber(1) }
                <span>...</span>
                { this.renderPageNumber(currPage - 1) }
                { this.renderPageNumber(currPage) }
                { this.renderPageNumber(currPage + 1) }
                <span>...</span>
                { this.renderPageNumber(this.props.numPages) }
            </span>
        )
    }

    getEnd(){
        let begin = [],
            i = this.props.numPages - 3;

        begin.push(this.renderPageNumber(1));
        begin.push(<span>...</span>);
        while(i < this.props.numPages){
            begin.push(this.renderPageNumber(i + 1));
            i++;
        }

        return begin;
    }

    showSimple(){
        let allPages = [];

        for(let i = 0; i < this.props.numPages; i++){
            allPages.push(this.renderPageNumber(i+1));
        }

        return allPages;
    }

    renderPageNumber(index) {
        return (
            <PageNumber
                onPageTurn={ this.props.onPageTurn }
                i={ index }
                currPage={ this.props.currentPage }
            />
        )
    }

    render() {
        let currPage = this.props.currentPage,
            lastPages = this.props.numPages - 2;

        return (
            <div className='page-number-list'>
                { this.props.numPages <= 4 && this.showSimple() }
                { (this.props.numPages > 4 && currPage < 3) && this.getBeginning() }
                { (this.props.numPages > 4 && currPage > 2 && currPage < lastPages) && this.getMiddle(currPage) }
                { (this.props.numPages > 4 && currPage >= lastPages) && this.getEnd(currPage) }
            </div>
        )
    }
}

module.exports = Pagination;
