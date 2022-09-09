import {ticket, logoCompany, getDirection, getTicketPrice, getTravelTime, getNumberStops} from './modules/data.js';

const main = document.querySelector('.main');

const getTravelInformation = (value) => {
  logoCompany.setAttribute('srcset', `http://pics.avs.io/99/36/${value.carrier}.png 1x, http://pics.avs.io/99/36/${value.carrier}@2x.png 2x`);
  logoCompany.setAttribute('src', `http://pics.avs.io/99/36/${value.carrier}.png`);
  getTravelTime(value);
  getTicketPrice(value);
  getNumberStops(value);
  getDirection(value);
};


fetch('http://localhost:3000/tickets')
  .then((response) => response.json())
  .then((data) => {
    data.forEach((currentValue) => {
      getTravelInformation(currentValue);
      const ticketCopy = ticket.cloneNode(true);
      main.appendChild(ticketCopy);
    })
  })

