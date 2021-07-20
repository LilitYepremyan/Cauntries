import React from 'react';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }
  handleInputChang = ({ target: { value } }) => {
    this.setState({
      inputValue: value,
    });
  };
  render() {
    const { inputValue } = this.setState;
    return (
      <div>
        <input onChange={this.handleInputChang} value={inputValue} />
      </div>
    );
  }
}
