import React from 'react';

export default class Countries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      isLoading: false,
      error: '',
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: true,
    });
    fetch('https://restcountries.eu/rest/v2/all')
      .then((r) => r.json())
      .then((countries) => {
        console.log(countries);
        this.setState({
          countries,
          isLoading: false,
        });
      })
      .catch((error) => {
        this.setState({ error, isLoading: false });
      });
  }

  render() {
    const { countries, isLoading, error } = this.state;
    if (isLoading) {
      return 'Loading';
    }
    if (error) {
      return 'Error';
    }
    return (
      <div>
        <h1>Countries</h1>
        {countries.map(({ name, flag }) => (
          <div key={name}>
            <p>{name}</p>
            <img src={flag} alt="flag" className="flag-style" />
          </div>
        ))}
      </div>
    );
  }
}
