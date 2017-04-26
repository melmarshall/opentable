import React from 'react';

class Pagination extends React.Component {
    constructor(props){
        super(props);

        this.onPageTurn = this.onPageTurn.bind(this);
        this.calculateNumPages = this.calculateNumPages.bind(this);
        this.getBeginning = this.getBeginning.bind(this);
        this.getMiddle = this.getMiddle.bind(this);
        this.getEnd = this.getEnd.bind(this);
    }

    calculateNumPages(){
        let numPages = Math.round(this.props.pageInfo.total_entries / this.props.pageInfo.per_page);

        if((this.props.pageInfo.total_entries % this.props.pageInfo.per_page) > 0){
            numPages = numPages + 1;
        }

        this.numPages = numPages;
    }

    onPageTurn(e){
        this.props.onPageTurn(e.currentTarget.innerText);
    }

    getBeginning(){
        let begin = [];

        for(let i=0; (i < this.numPages && i < 3); i++){
            begin.push(<span onClick={this.onPageTurn}>{ i+1 }</span>)
        }
        if(this.numPages > 3){
            begin.push(<span>...</span>);
            begin.push(<span onClick={this.onPageTurn}>{ this.numPages }</span>);
        }

        return begin;
    }

    getMiddle(){
        let currPage = this.props.pageInfo.current_page;

        return (
            <span>
                <span onClick={this.onPageTurn}>1</span>
                <span>...</span>
                <span onClick={this.onPageTurn}>{ currPage - 1}</span>
                <span onClick={this.onPageTurn}>{ currPage }</span>
                <span onClick={this.onPageTurn}>{currPage + 1}</span>
                <span>...</span>
                <span onClick={this.onPageTurn}>{ this.numPages }</span>
            </span>
        )
    }

    getEnd(){
        let begin = [],
            i = this.numPages - 3;

        begin.push(<span onClick={this.onPageTurn}>1</span>);
        begin.push(<span>...</span>);
        while(i < this.numPages){
            begin.push(<span onClick={this.onPageTurn}>{ i+1 }</span>);
            i++;
        }

        return begin;
    }

    showSimple(){
        let allPages = [];

        for(let i = 0; i < this.numPages; i++){
            allPages.push(<span onClick={this.onPageTurn}>{i + 1}</span>);
        }

        return allPages;
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
