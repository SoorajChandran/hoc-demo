import React, { Component } from "react";
import FeedItem from "./FeedItem";
import Loading from "./HOC/Loading";

class Feed extends Component {
  render() {
    const { loadingTime } = this.props;
    return (
      <div className="feed">
        <FeedItem contacts={this.props.contacts} />
        <p>Loading time {loadingTime} seconds</p>
      </div>
    );
  }
}

export default Loading("contacts")(Feed);
