/**
 * "React" needs to be imported on every file that uses JSX.
 */
import React from 'react';

import SuperSimpleComponent from '../../components/SuperSimpleComponent';
import SimpleComponent from '../../components/SimpleComponent';
import SimplePropComponent from '../../components/SimplePropComponent';
import ClassComponent from '../../components/ClassComponent';
import StateComponent from '../../components/StateComponent';
import APIComponent from '../../components/APIComponent';


function Home() {
  return (
    <div>
      <section>
        <h1>Home</h1>
        <p>This is the home page.</p>
      </section>

      <hr/>

      <section>
        <SuperSimpleComponent/>
      </section>

      <hr/>

      <section>
        <SimpleComponent/>
      </section>

      <hr/>

      <section>
        <SimplePropComponent text="I am a component with a prop!"/>
      </section>

      <hr/>

      <section>
        <ClassComponent/>
      </section>

      <hr/>

      <section>
        <StateComponent/>
      </section>

      <hr/>

      <section>
        <APIComponent/>
      </section>
    </div>
  )
}

export default Home;
