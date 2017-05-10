import React from 'react';

class PageNumber extends React.Component {
    constructor(props){
        super(props);

        this.onPageTurn = this.onPageTurn.bind(this);
    }

    onPageTurn(e){
        this.props.onPageTurn(e.currentTarget.innerText);
    }

    render(){
        let pageClass = (this.props.currPage === this.props.i) ? 'selected-page' : 'page-number';

        return (
            <span className={ pageClass } onClick={this.onPageTurn}>{ this.props.i }</span>
        );
    }
}

module.exports = PageNumber;
