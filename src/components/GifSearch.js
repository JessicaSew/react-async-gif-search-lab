import React from 'react'



class GifSearch extends React.Component {
    state = {
        value: ""
       }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.componentDidMount()
    }

render () {
    return (
    <div>
        <form onSubmit={this.handleSubmit}>Enter a Search Term: 
            <input type="text" value={this.state.value}></input>
        </form>
        <button>Find Gifs</button>
    </div>
    )
}
    
}



export default GifSearch