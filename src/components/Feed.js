import React, { Component } from "react";
import FeedItem from "./FeedItem";
import Loading from "./HOC/Loading";

import FeedStyle from "./Feed.css";

class Feed extends Component {
  state = {
    filterText: ""
  };

  render() {
    const { loadingTime } = this.props;
    return (
      <div className="justify-content-center align-items-center">
        <FeedItem
          contacts={this.props.contacts}
          filterText={this.state.filterText}
        />
        <p>Loading time {loadingTime} seconds</p>
      </div>
    );
  }
}

export default Loading("contacts")(Feed);
