import React from 'react';

class Pagination extends React.Component {
    constructor(props){
        super(props);

        this.onPageTurn = this.onPageTurn.bind(this);
    }

    getNumPages(){
        let numPages = Math.round(this.props.pageInfo.total_entries / this.props.pageInfo.per_page);

        if((this.props.pageInfo.total_entries % this.props.pageInfo.per_page) > 0){
            numPages = numPages + 1;
        }

        return numPages;
    }

    onPageTurn(e){
        this.props.onPageTurn(e.currentTarget.innerText);
    }

    // 1 2 3 .. 22 --> 1 .. 3 4 5 .. 22 --> 1 .. 4 5 6 .. 22
    render() {
        let numPages = this.getNumPages(),
            nums = [];

        if(numPages < 3){
            for(let i=0; i < numPages; i++){
                nums.push(
                    <span>{ i+ 1 }</span>
                )
            }
        } else {
            for(let i=0; i < 3; i++){
                nums.push(<span onClick={this.onPageTurn}>{ i+ 1 }</span>)
            }
            nums.push(<span>...</span>)
            nums.push(<span onClick={this.onPageTurn}>{ numPages }</span>)
        }

        return (
            <div className='page-number-list'>
                { nums }
            </div>
        )
    }
}

module.exports = Pagination;
