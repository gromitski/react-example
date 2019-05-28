import React from 'react';


function SimplePropComponent(props) {
  const text = props.text;
  const showSecret = props.showSecret;

  return (
      <div>
        <p>{text}</p>
        {showSecret && <p>I am secret</p>}
      </div>
  )
}

SimplePropComponent.defaultProps = {
  text: '',
  showSecret: false,
};

export default SimplePropComponent;
