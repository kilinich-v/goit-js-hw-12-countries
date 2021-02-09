import refs from './refs';
import countrieTemplate from '../templates/countrieTemplate.hbs';
import countriesList from '../templates/countriesList.hbs';

function creatMarkup(countries) {
    let markup = '';
    if (countries.length === 1) {
        markup = countrieTemplate(countries);
    } else {
        markup = countriesList(countries);
    }

    refs.containerCountries.innerHTML = '';
    refs.containerCountries.insertAdjacentHTML('beforeend', markup);
}

export default creatMarkup;