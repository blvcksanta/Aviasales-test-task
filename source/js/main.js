import {getData} from './modules/data.js';
import {getFilteredData, deleteUnfilteredTickets} from './modules/filters.js';

const filter = document.querySelector('.filters')
const filterCheckBoxs = filter.querySelectorAll('input[type=radio]');

const sort = document.querySelector('.sort');
const sortCheckBoxs = sort.querySelectorAll('input[type=checkbox]');

fetch('http://localhost:3000/tickets')
  .then((response) => response.json())
  .then((data) => {
    sortCheckBoxs.forEach((sortCheckBox) => {
      sortCheckBox.addEventListener('change', (evt) => {
        const cheapestButton = document.querySelector('.sort--button__js-cheapest');
        cheapestButton.classList.toggle('sort--button__js-click');
        const sortData = data.slice().sort((a, b) => a.price - b.price);
        if(evt.target.name === 'cheapest' && evt.target.checked) {
          deleteUnfilteredTickets();
          filterCheckBoxs.forEach((filterCheckBox) => {
            if(filterCheckBox.checked) {
              getFilteredData(sortData, filterCheckBox.value);
            }
            filterCheckBox.addEventListener('change', () => {
              deleteUnfilteredTickets();
              getFilteredData(sortData, filterCheckBox.value);
            })
          })
        } else {
          deleteUnfilteredTickets();
          filterCheckBoxs.forEach((filterCheckBox) => {
            if(filterCheckBox.checked) {
              getFilteredData(data, filterCheckBox.value);
            }
            filterCheckBox.addEventListener('change', () => {
              deleteUnfilteredTickets();
              getFilteredData(data, filterCheckBox.value);
            })
          })
        }
      })
    })

    filterCheckBoxs.forEach((filterCheckBox) => {
      filterCheckBox.addEventListener('change', () => {
        deleteUnfilteredTickets();
        getFilteredData(data, filterCheckBox.value);
      })
    })

    getData(data);
  })

