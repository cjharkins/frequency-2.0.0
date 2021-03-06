import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


let fakeServerData = {
  user: {
    name: 'Cory',
    playlists: [
      {
        name: 'My favorites',
        songs: [
          {name: 'Beat It', duration: 1345}, 
          {name: 'Cannelloni Makaroni', duration: 1236},
          {name: 'Rosa helikopter', duration: 70000}
        ]
      },
      {
        name: 'Discover Weekly',
        songs: [
          {name: 'Beat It', duration: 1345}, 
          {name: 'Cannelloni Makaroni', duration: 1236},
          {name: 'Rosa helikopter', duration: 70000}
        ]
      },
      {
        name: 'Another playlist - the best!',
        songs: [
          {name: 'Beat It', duration: 1345}, 
          {name: 'Cannelloni Makaroni', duration: 1236},
          {name: 'Rosa helikopter', duration: 70000}
        ]
      },
      {
        name: 'Playlist - yeah!',
        songs: [
          {name: 'Beat It', duration: 1345}, 
          {name: 'Cannelloni Makaroni', duration: 1236},
          {name: 'Rosa helikopter', duration: 70000}
        ]
      }
    ]
  }
};


class PlaylistCounter extends Component {
  render(){
    return (
      <div style={{display: 'inline-block', 'font-size': '.5em',margin: '20px'}}>
        <h2>{this.props.playlists.length} playlists</h2>
      </div>
    );
  }
}


class HoursCounter extends Component {
  render(){
    let allSongs = this.props.playlists.reduce((songs, eachPlaylist) => {
      return songs.concat(eachPlaylist.songs)
    }, [])
    let totalDuration = allSongs.reduce((sum, eachSong) => {
      return sum + eachSong.duration
    }, 0)
    return (
      <div style={{display: 'inline-block', 'font-size': '.5em',margin: '20px'}}>
        <h2>{Math.round(totalDuration/60)} hours</h2>
      </div>
    );
  }
}

class Filter extends Component {
  render(){
    return (
      <div>
        <input type="text" onKeyUp={ event => this.props.onTextChange(event.target.value) }/>
        <img src="" alt="" />
      </div>
    );
  }
}

class Playlist extends Component {
  render() {
    let playlist = this.props.playlist
    return (
      <div>
        <img />
        <h3>{playlist.name}</h3>
        <ul>
          {playlist.songs.map(song => 
            <li>{song.name}</li>
          )}
        </ul>
      </div>
    );
  }
}

class App extends Component {
  constructor(){
    super();
    this.state = {
      serverData: {}, 
      filterString: ''
    }
  }
  componentDidMount(){
    setTimeout(()=>{
      this.setState({serverData: fakeServerData});
    },3000);
    setTimeout(()=>{
      this.setState({filterString: ''});
    },2000);
  }

render() { 
  let playlistToRender = this.state.serverData.user ?
          this.state.serverData.user.playlists
          .filter(playlist => playlist.name.toLowerCase()
                              .includes(this.state.filterString.toLowerCase())
  ): []
     
    return (
      <div className="App">
        {this.state.serverData.user ?  
          <div> 
        <h1>
          {this.state.serverData.user && this.state.serverData.user.name}'s Frequency
        </h1>
        <div>
          <PlaylistCounter playlists={playlistToRender} />
          <HoursCounter playlists={playlistToRender} />
        </div>
        <Filter onTextChange={text => this.setState({filterString: text})} />
        {playlistToRender.map(playlist=>
              <Playlist playlist={playlist} /> 
          )}
        </div>: 'Loading app...'
      }
      </div>
    );
  }
}

export default App;
