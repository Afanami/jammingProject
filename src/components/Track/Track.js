import React, { Component } from "react";
import "./Track.css";

class Track extends Component {
  constructor(props) {
    super(props);

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  addTrack() {
    this.props.onAdd(this.props.track);
  }

  removeTrack() {
    this.props.onRemove(this.props.track);
  }

  renderAction() {
    if (this.props.isRemoval) {
      return (
        <a className="Track-action" onClick={this.removeTrack}>
          -
        </a>
      );
    } else {
      return (
        <a className="Track-action" onClick={this.addTrack}>
          +
        </a>
      );
    }
  }

  renderActionTrack() {
    if (this.props.isRemoval) {
      return (
        <a className="Track-information" onClick={this.removeTrack}>
          <h3>{this.props.track.name}</h3>
          <p>
            {this.props.track.artist} | {this.props.track.album}
          </p>
        </a>
      );
    } else {
      return (
        <a className="Track-information" onClick={this.addTrack}>
          <h3>{this.props.track.name}</h3>
          <p>
            {this.props.track.artist} | {this.props.track.album}
          </p>
        </a>
      );
    }
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information" isRemoval={true}>
          {this.renderActionTrack()}
        </div>
        <div className="Track-action" isRemoval={true}>
          {this.renderAction()}
        </div>
      </div>
    );
  }
}

export default Track;
