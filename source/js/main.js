import {getData} from './modules/data.js';
import {getFilteredData, deleteUnfilteredTickets} from './modules/filters.js';

const checkBoxs = document.querySelectorAll('input[type=radio]');

fetch('http://localhost:3000/tickets')
  .then((response) => response.json())
  .then((data) => {
    checkBoxs.forEach((checkBox) => {
      checkBox.addEventListener('change', (evt) => {
        deleteUnfilteredTickets();
        getFilteredData(data, evt);
      })
    })
    getData(data);
  })

