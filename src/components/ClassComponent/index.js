import React from 'react';


class ClassComponent extends React.Component {
  constructor() {
    super();

    // It is quite rare in reacty-apps to put stuff in the constructor.
    // Often it is used for scope binding if you decide not to use experimental JS.
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  componentDidMount() {
    console.log('CLASSCOMPONENT: got added to the DOM.');
  }

  componentWillUnmount() {
    console.log('CLASSCOMPONENT: got removed from the DOM.');
  }

  onButtonClick(event) {
    console.log('you clicked a button. well done you');
  }

  render() {
    return (
        <div>
          <p>I am regular component... with a BUTTON!</p>
          <button onClick={this.onButtonClick}>boop</button>
        </div>
    )
  }
}


export default ClassComponent;
