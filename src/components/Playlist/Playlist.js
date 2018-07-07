import React, { Component } from "react";
import TrackList from "../TrackList/TrackList";
import "./Playlist.css";

class Playlist extends Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  /* Probably implemented wrong */
  handleNameChange(event) {
    this.props.onNameChange(event.target.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="Playlist">
        <input
          value={this.props.playlistName}
          onChange={this.handleNameChange}
        />
        <TrackList
          tracks={this.props.playlistTracks}
          onRemove={this.props.onRemove}
          isRemoval={true}
        />
        <a className="Playlist-save" onClick={this.props.onSave}>
          SAVE TO SPOTIFY
        </a>
        <a className="Reset-playlist" onClick={this.props.onReset}>
          RESET
        </a>
      </div>
    );
  }
}

export default Playlist;
