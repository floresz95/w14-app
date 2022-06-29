import React from 'react';

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            time: 0
        }
        setInterval(() => {
            this.incrementTimer()
        }, 1000)
        console.log("constructor called");
    }

    componentDidMount() {
        console.log("component created");
    }
    componentDidUpdate() {
        console.log("smth changed");
    }

    componentWillUnmount(){
        console.log("component unmounted");
    }
    incrementTimer () {
        this.setState({
            time: this.state.time+1
        })
    }

    render () {
        return(
            <>
                <div>
                    {this.state.time}
                </div>
                <button onClick={() => {this.incrementTimer()}}>Click me</button>
            </> 
        )
    }
}

export default Timer