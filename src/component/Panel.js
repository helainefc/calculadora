import React from 'react';
import Button from './Button';
import PropTypes from 'prop-types';

import "./Panel.css"
export default class Panel extends React.Component {
    static propTypes = {
        click: PropTypes.func,
    };
    clickFuntion = buttonName => {
        this.props.click(buttonName);
    };
    render() {
        return (
            <div className="component-button-panel" >
                <div>
                    <Button name="/" click={this.clickFuntion} ></Button>
                    <Button name="*" click={this.clickFuntion} ></Button>
                    <Button name="-" click={this.clickFuntion}></Button>
                    <Button name="+" click={this.clickFuntion}></Button>
                </div>
                <div>
                    <Button name="7" click={this.clickFuntion}></Button>
                    <Button name="8" click={this.clickFuntion}></Button>
                    <Button name="9" click={this.clickFuntion}></Button>
                    <Button name="C" click={this.clickFuntion} ></Button>
                </div>
                <div>
                    <Button name="4" click={this.clickFuntion}></Button>
                    <Button name="5" click={this.clickFuntion}></Button>
                    <Button name="6" click={this.clickFuntion}></Button>
                </div>
                <div>
                    <Button name="1" click={this.clickFuntion}></Button>
                    <Button name="2" click={this.clickFuntion}></Button>
                    <Button name="3" click={this.clickFuntion}></Button>
                </div>
                <div>
                    <Button name="0" click={this.clickFuntion}></Button>
                    <Button name="." click={this.clickFuntion}></Button>
                    <Button name="=" click={this.clickFuntion}></Button>
                </div>

            </div>
        );
    }
}