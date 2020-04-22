import React, { Component } from 'react'

export default class Home2 extends Component {

    state = {
        subtitle: 'React (Class)'
    }

    resetSubtitle() {
        this.setState({
            subtitle: 'React (Class)'
        })
    }

    render() {
        return (
            <div className="home">
                <h1>{ this.props.msg}</h1>
                <h2>{ this.state.subtitle}</h2>

                <input type="text" value={ this.state.subtitle } 
                    onChange={ e => this.setState({ subtitle: e.target.value })} />
                <button onClick={ () => this.resetSubtitle() }>Reset subtitle</button>
          </div>
        )
    }
}