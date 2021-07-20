import React from 'react';
import styles from './Countries.module.css';

export default class Countries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      results: [],
      isEmpty: true,
    };
  }

  componentDidMount() {
    fetch('https://restcountries.eu/rest/v2/all')
      .then((res) => res.json())
      .then((data) => {
        let filteredData = data.map((item) => {
          return { name: item.name, flag: item.flag };
        });
        this.setState({ countries: filteredData });
      });
  }

  componentDidUpdate() {
    console.log(this.state.countries);
  }

  handeleinputChange = (evn) => {
    if (evn.target.value.trim() === '') {
      this.setState({ results: [], isEmpty: true });
      return;
    }
    if (evn.target.value) {
      let text = evn.target.value[0].toUpperCase() + evn.target.value.slice(1);
      let results = this.state.countries.filter((item) =>
        item.name.startsWith(text)
      );
      this.setState({ results, isEmpty: false });
    }
  };

  render() {
    const { countries, results, error, isEmpty } = this.state;
    const err = isEmpty ? null : <p>There is no such country</p>;
    return countries.length ? (
      <>
        <label>Search</label>
        <input onChange={(e) => this.handeleinputChange(e)} />
        {results.length ? (
          <div className={styles.results}>
            {results.map((c) => {
              return (
                <div className={styles.countriesContainer}>
                  <img src={c.flag} />
                  <p>{c.name}</p>
                </div>
              );
            })}
          </div>
        ) : (
          err
        )}
      </>
    ) : (
      <h3>Loading ...</h3>
    );
  }
}
