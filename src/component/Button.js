import React from 'react'
import PropTypes from  'prop-types'

import "./Button.css";

export default class Button extends React.Component{
    static propTypes = {
        name: PropTypes.string,
        wide: PropTypes.bool,
        click: PropTypes.func,
        disabled: PropTypes.bool,
    };
    clickFuntion = () =>{
        this.props.click(this.props.name);
    };
    render(){
        var classNameCss = "component-button";
        classNameCss += this.props.wide?" wide":"";
        return(
            <div className={classNameCss}>
                <button onClick={this.clickFuntion} disabled={this.props.disabled}>{this.props.name}</button>
            </div>
        );
    }
}