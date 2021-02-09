import './styles.scss';
import 'lodash';
import refs from './js/refs';
import creatMarkup from './js/create-markup';
import fetchCountries from './js/fetch-countries';
import creatAlerts from './js/alerts';



refs.input.addEventListener('input', _.debounce(handlerCountries, 500));

function handlerCountries(event) {
    const inputValue = event.target.value;

    fetchCountries(inputValue).then(countries => {
        if (countries.length > 10) {
            creatAlerts(countries);

            creatMarkup(countries);
        } else {
            creatMarkup(countries);
        }
    });
}
