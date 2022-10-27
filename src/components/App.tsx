import React from 'react';
import '../styles.scss';
import Header from './header/Header';
import Title from './main/Title';
import Test from './header/Test';
import Block from './main/Block';

function App() {
  return (
    <div className="App">
<Header />
{/* <Test /> */}
 <Title /> 
<Block />
    </div>
  );
}

export default App;
