import React, {Fragment} from 'react';


class APIComponent extends React.Component {
  state = {
    title: 'default title',
    description: 'default description',
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        title: 'API title',
        description: 'API description',
      })
    }, 2000);
  }

  render() {
    return (
        <Fragment>
          <h1>{this.state.title}</h1>
          <p>{this.state.description}</p>
        </Fragment>
    )
  }
}


export default APIComponent;
