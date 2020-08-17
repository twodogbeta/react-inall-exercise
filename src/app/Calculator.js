import React from 'react';
import './calculator.less';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data:''
        }
    }

    displayOnScreen = (event) => {
        this.setState({
            data: this.state.data + event.target.value
        });
    }

    calculate = () => {
        let data = this.state.data;
        let num1, num2, operator;
        for(let i=0; i<data.length; i++){
            if (data[i] == '+' || data[i] == '-' || data[i] == '*'){
                operator = data[i];
                num1 = parseInt(data.substr(0, i));
                num2 = parseInt(data.substr(i+1, data.length));
                break;
            }
        }

        if (isNaN(num1) || isNaN(num2) || operator == undefined ) {
            this.setState({data: ''});
            return;
        }
        switch(operator) {
            case '+': this.setState({data: num1 + num2});
                        break;
            case '-': this.setState({data: num1 - num2});
                        break;
            case '*': this.setState({data: num1 * num2});
                        break;
        }
    }

    render() {
        return <div id="calculator">
            <h1>在线计算器</h1>
            <div id="calculator-body">
                <textarea id="screen" value={this.state.data}></textarea>
                <br/>
                <button type="button" class="btn btn-warning" value="+" onClick={this.displayOnScreen}>+</button>
                <button type="button" class="btn btn-warning" value="-" onClick={this.displayOnScreen}>-</button>
                <button type="button" class="btn btn-warning" value="*" onClick={this.displayOnScreen}>*</button>
                <br/>
                <button type="button" class="btn btn-primary" value="7" onClick={this.displayOnScreen}>7</button>
                <button type="button" class="btn btn-primary" value="8" onClick={this.displayOnScreen}>8</button>
                <button type="button" class="btn btn-primary" value="9" onClick={this.displayOnScreen}>9</button>
                <br/>
                <button type="button" class="btn btn-primary" value="4" onClick={this.displayOnScreen}>4</button>
                <button type="button" class="btn btn-primary" value="5" onClick={this.displayOnScreen}>5</button>
                <button type="button" class="btn btn-primary" value="6" onClick={this.displayOnScreen}>6</button>
                <br/>
                <button type="button" class="btn btn-primary" value="1" onClick={this.displayOnScreen}>1</button>
                <button type="button" class="btn btn-primary" value="2" onClick={this.displayOnScreen}>2</button>
                <button type="button" class="btn btn-primary" value="3" onClick={this.displayOnScreen}>3</button>
                <br/>
                <button type="button" class="btn btn-primary" value="0" onClick={this.displayOnScreen}>0</button>
                <button type="button" class="btn btn-success" onClick={()=>this.setState({data:''})}>Clear</button>
                <button type="button" class="btn btn-danger" onClick={this.calculate}>=</button>
            </div>
            <Link to="/">回到主页</Link>
        </div>
    }
}

export default Calculator;