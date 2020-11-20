import React, { Component } from 'react'
import Header from './Header'
import Pod from './Pod'
import MarsRover from './MarsRover'
import Search from './Search'
import Weather from './Weather'



 class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                <Search />
                <Weather/>
                <Pod />
                <MarsRover/>
            </div>
        )
    }
}

export default Main;