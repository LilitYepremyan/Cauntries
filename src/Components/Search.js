import React from 'react';
import Button from './Button';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue:""
    };
  }
  render() {
    const {inputValue}=this.setState
    return <div>
        <input value={inputValue}/>
        <Button text= "Search"/>
        
    </div>;
  }
}
