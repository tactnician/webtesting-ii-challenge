import React, { Component } from 'react';
import Dashboard from './Dashboard'; 
import Count from './Count';


export default class Display extends Component {
    state = {
        strikes: 0,
        balls: 0, 
        fouls: 0,
        hits: 0
    }

    incrementStrike = (e) => {
        e.preventDefault();
        this.setState({...state, strikes: this.state.strikes +1})
    }

    incrementBall = (e) => {
        e.preventDefault();
        this.setState({...state, balls: this.state.balls +1})
    }

    incrementFoul = (e) => {
        e.preventDefault();
        this.setState({...state, fouls: this.state.fouls +1})
    }

    incrementHit = (e) => {
        e.preventDefault();
        this.setState({...state, hits: this.state.hits +1})
    }

    resetCount = (e) => {
        e.preventDefault();
        this.setState({
            ...state,
            strikes: 0,
            balls: 0, 
            fouls: 0
        })
    }

    render() {
        return (
        <div>
            <Count 
                strikes = {this.state.strikes} 
                balls = {this.state.balls}
                fouls = {this.state.fouls}
            />
            <Dashboard 
                addStrike = {this.incrementStrike}
                addBall = {this.incrementBall}
                addFoul = {this.incrementFoul}
                addHit = {this.incrementHit}
                resetCount = {this.resetCount}
            />
        </div>
        )
    }
}
