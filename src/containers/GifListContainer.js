import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {

    state = {
        gifs: []
       }
     
  componentDidMount() {
    fetch('https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=WuUtaa4A5xPcHkK6oYAu6AEGYLEeimF6&rating=g')
      .then(response => response.json())
      .then(({data}) => {
        this.setState({
         gifs: data.map(
            gifs => ({url: gifs.images.original.url }))
        })
      })
  }

  render() {
    return (
    <div>
     <GifList />
    <GifSearch/>
    </div>
    )
  }
  
}

export default GifListContainer