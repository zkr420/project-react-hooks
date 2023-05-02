import React, { Component } from 'react';

class App extends Component {
  state = {
    person: {
      fullName: "Zakaria saidi",
      bio: "I’m a web developer. I spend my whole day, practically every day, experimenting with HTML, CSS, and JavaScript; dabbling with Python and Ruby; and inhaling a wide variety of potentially useless information through a few hundred RSS feeds. I build websites that delight and inform.",
      imgSrc: "https://via.placeholder.com/150",
      profession: "Web Developer"
    },
    shows: false,
    mountedAt: new Date()
  };

  toggleShow = () => {
    this.setState(prevState => ({
      shows: !prevState.shows
    }));
  };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({ mountedAt: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { shows, mountedAt } = this.state;

    return (
      <div>
        <button onClick={this.toggleShow}>Toggle Profile</button>
        {shows && (
          <div>
            <img src={imgSrc} alt="Profile" />
            <h1>{fullName}</h1>
            <h2>{profession}</h2>
            <p>{bio}</p>
          </div>
        )}
        <p>Component mounted at: {mountedAt.toLocaleTimeString()}</p>
      </div>
    );
  }
}

export default App;
