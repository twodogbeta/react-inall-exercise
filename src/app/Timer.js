import React from 'react';
import './timer.less';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

class Timer extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            isTiming: false,
            button: 'Start',
            time: 0,
            counter: null
        }
    }

    countTime = () => {
        if (this.state.time > 0) {
            this.setState({time: this.state.time - 1});
        } else {
            this.setState({
                initTime: '',
                time: this.state.time - 1,
                isTiming : false,
                button: 'Start'
            });
            clearInterval(this.state.counter);
        }
    }

    handleClick = () => {
        let isTiming;
        if(this.state.time > 0 && !this.state.isTiming) {
            isTiming = true;
            this.setState({counter: setInterval(this.countTime, 1000)});
            this.setState({isTiming: isTiming});
        } else if (this.state.isTiming) {
            isTiming = false;
            clearInterval(this.state.counter);
            this.setState({isTiming: isTiming});
        }

        if(isTiming) {
            this.setState({button: 'End'});
        } else {
            this.setState({button: 'Start'});
        }
    }
    render() {
        return <div id="timer">
                <h1>在线倒计时器</h1>
                <table>
                    <tr>
                        <td>
                        <div>
                            <label>设置时间</label>
                            <input name="time" onChange={(event)=>this.setState({
                                initTime: event.target.value, time: event.target.value})}
                                 value={this.state.isTiming ? '':this.state.initTime}/>
                            <br/>
                            <button type="button" className="btn btn-primary" onClick={this.handleClick}
                                disabled={this.state.isTiming ? true : false}>{this.state.button}</button>
                        </div>
                        </td>
                        <td>
                            {this.state.isTiming ? <span>{this.state.time} Seconds</span>: ''}
                        </td>
                    </tr>
                </table>
                <Link to="/">回到主页</Link>
            </div>
    }
}

export default Timer;