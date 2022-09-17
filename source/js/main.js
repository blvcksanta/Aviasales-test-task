import {getData} from './modules/data.js';
import {getFilteredData, deleteUnfilteredTickets} from './modules/filters.js';

// import './modules/sort.js';

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
        if(evt.target.name === 'cheapest' && evt.target.checked) {
          cheapestButton.classList.add('sort--button__js-click');
          const sortData = data.slice().sort((a, b) => a.price - b.price);
          deleteUnfilteredTickets();
          getData(sortData);
          filterCheckBoxs.forEach((filterCheckBox) => {
            filterCheckBox.addEventListener('change', (evt) => {
              deleteUnfilteredTickets();
              getFilteredData(sortData, evt);
            })
          })
        } else {
          cheapestButton.classList.remove('sort--button__js-click');
          filterCheckBoxs.forEach((filterCheckBox) => {
            filterCheckBox.addEventListener('change', (evt) => {
              deleteUnfilteredTickets();
              getFilteredData(data, evt);
            })
          })
          deleteUnfilteredTickets();
          getData(data);
        }
      })
    })

    filterCheckBoxs.forEach((filterCheckBox) => {
      filterCheckBox.addEventListener('change', (evt) => {
        deleteUnfilteredTickets();
        getFilteredData(data, evt);
      })
    })

    getData(data);
  })

