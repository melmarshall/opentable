import React from 'react';
import PageNumber from './PageNumber.jsx'

class Pagination extends React.Component {
    constructor(props){
        super(props);

        this.calculateNumPages = this.calculateNumPages.bind(this);
        this.getBeginning = this.getBeginning.bind(this);
        this.getMiddle = this.getMiddle.bind(this);
        this.getEnd = this.getEnd.bind(this);
        this.renderPageNumber = this.renderPageNumber.bind(this);
    }

    calculateNumPages(){
        let numPages = Math.round(this.props.pageInfo.total_entries / this.props.pageInfo.per_page);

        if((this.props.pageInfo.total_entries % this.props.pageInfo.per_page) > 0){
            numPages = numPages + 1;
        }

        this.numPages = numPages;
    }


    getBeginning(){
        let begin = [];

        for(let i=0; (i < this.numPages && i < 3); i++){
            begin.push(this.renderPageNumber(i+1));
        }
        if(this.numPages > 3){
            begin.push(<span>...</span>);
            begin.push(this.renderPageNumber(this.numPages));
        }

        return begin;
    }

    getMiddle(){
        let currPage = this.props.pageInfo.current_page;

        return (
            <span>
                { this.renderPageNumber(1) }
                <span>...</span>
                { this.renderPageNumber(currPage - 1) }
                { this.renderPageNumber(currPage) }
                { this.renderPageNumber(currPage + 1) }
                <span>...</span>
                { this.renderPageNumber(this.numPages) }
            </span>
        )
    }

    getEnd(){
        let begin = [],
            i = this.numPages - 3;

        begin.push(this.renderPageNumber(1));
        begin.push(<span>...</span>);
        while(i < this.numPages){
            begin.push(this.renderPageNumber(i + 1));
            i++;
        }

        return begin;
    }

    showSimple(){
        let allPages = [];

        for(let i = 0; i < this.numPages; i++){
            allPages.push(this.renderPageNumber(i+1));
        }

        return allPages;
    }

    renderPageNumber(index) {
        return (
            <PageNumber
                onPageTurn={ this.props.onPageTurn }
                i={ index }
                currPage={ this.props.pageInfo.current_page }
            />
        )
    }

    render() {
        this.calculateNumPages();

        let currPage = this.props.pageInfo.current_page,
            lastPages = this.numPages - 2;

        return (
            <div className='page-number-list'>
                { this.numPages <= 4 && this.showSimple() }
                { (this.numPages > 4 && currPage < 3) && this.getBeginning() }
                { (this.numPages > 4 && currPage > 2 && currPage < lastPages) && this.getMiddle(currPage) }
                { (this.numPages > 4 && currPage >= lastPages) && this.getEnd(currPage) }
            </div>
        )
    }
}

module.exports = Pagination;
