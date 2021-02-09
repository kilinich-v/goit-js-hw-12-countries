function fetchCountries(query) {
    return fetch(`https://restcountries.eu/rest/v2/name/${query}`)
        .then(res => res.json())
        .catch(err => console.log(err));
}

export default fetchCountries;