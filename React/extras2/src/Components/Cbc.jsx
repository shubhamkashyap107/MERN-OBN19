import React from "react"


class CBC extends React.Component {

    constructor()
    {
        super();

        this.state = {
            count : 0
        }
    }

    componentDidMount()
    {
        console.log("Component Mounted")
    }

    componentWillUnmount()
    {
        console.log("Component Unmounted")
    }

    componentDidUpdate()
    {
        console.log("Method chala")
    }
    render()
    {
        return <div>
            <h1>{this.props.name}</h1>

            <div>
                <h1>{this.state.count}</h1>
                
                <div>
                    <button onClick={() => {
                        this.setState({
                            count : this.state.count + 1
                        })
                    }}>+</button>
                    <button onClick={() => {
                        this.setState({
                            count : this.state.count - 1
                        })
                    }}>-</button>
                </div>
            </div>
        </div>

    }
}


export default CBC