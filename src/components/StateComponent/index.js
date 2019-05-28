import React from 'react';


class StateComponent extends React.Component {
  state = {
    counter: 0
  };

  constructor() {
    super();

    // It is quite rare in reacty-apps to put stuff in the constructor.
    // Often it is used for scope binding if you decide not to use experimental JS.
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  componentDidMount() {
    console.log('STATECOMPONENT: got added to the DOM.');
  }

  componentWillUnmount() {
    console.log('STATECOMPONENT: got removed from the DOM.');
  }

  onButtonClick(event) {
    // this.setState = React.Component.setState (inherited function).

    // When React.Component.setState is called, it RE-RENDERS THE DOM.
    // That is why our timestamp is also being updated.
    this.setState({
      counter: this.state.counter + 1,
    })
  }

  render() {
    const timestamp = Date.now();
    let buttonText = 'boop';

    if (this.state.counter > 0) {
      buttonText = 'You booped me ' + this.state.counter + ' times';
    }

    return (
        <div>
          <p>I am a component with state... *AND* a BUTTON! <code>{timestamp}</code></p>
          <button onClick={this.onButtonClick}>{buttonText}</button>
        </div>
    )
  }
}


export default StateComponent;
