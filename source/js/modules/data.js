const ticket = document.querySelector('#ticket').content.querySelector('.ticket');
const logoCompany = ticket.querySelector('.ticket--logo');
const price = ticket.querySelector('.ticket--price');
const departure = ticket.querySelector('#departure');
const comeBack = ticket.querySelector('#come-back');
const travelTimeThere = departure.querySelector('#travel-time-first');
const travelTimeBack = comeBack.querySelector('#travel-time-second');
const numberStopsThere = departure.querySelector('#stops');
const numberStopsBack = comeBack.querySelector('#stops');
const stopsPlaceThere = departure.querySelector('#stop-place');
const stopsPlaceBack = comeBack.querySelector('#stop-place');
const directionThere = departure.querySelector('#direction');
const directionBack = comeBack.querySelector('#direction');


const getDirection = (value) => {
  directionThere.textContent = `${value.segments[0].origin} - ${value.segments[0].destination}`
  directionBack.textContent = `${value.segments[1].origin} - ${value.segments[1].destination}`
}

const getTicketPrice = (value) => {
  let ticketPrice = `${value.price}`;
  let arrayNumbers = ticketPrice.split('');

  let arrayThousandths = [];
  let arrayHundredths = []

  for(let i = 0; i < arrayNumbers.length; i++) {
    if(i < 2) {
      arrayThousandths.push(arrayNumbers[i]);
    }
    if(i >= 2) {
      arrayHundredths.push(arrayNumbers[i]);
    }
  }

  price.textContent = `${arrayThousandths.join('')} ${arrayHundredths.join('')} ₽`;
}


const getTravelTime = (value) => {
  let hours = [];
  let minutes = [];

  for (let i = 0; i < value.segments.length; i++) {
    hours.push(Math.floor(value.segments[i].duration / 60));
    minutes.push(value.segments[i].duration - (hours[i] * 60));
  }

  hours.forEach((currentValue) => hours.push(currentValue + 'ч'));
  minutes.forEach((currentValue) => minutes.push(currentValue + 'м'));

  hours = hours.splice(2);
  minutes = minutes.splice(2);

  let timeOptionFirst = [];
  let timeOptionSecond = [];

  for (let i = 0; i < hours.length; i++) {
    if (i == 0 ) {
      timeOptionFirst.push(hours[i]);
      timeOptionFirst.push(minutes[i]);
    }

    if (i > 0 ) {
      timeOptionSecond.push(hours[i]);
      timeOptionSecond.push(minutes[i]);
    }
  }

  travelTimeThere.textContent = timeOptionFirst.join(' ');
  travelTimeBack.textContent = timeOptionSecond.join(' ');
}

const getNumberStops = (value) => {
  if (value.segments[0].stops.length == 0) {
    stopsPlaceThere.textContent = value.segments[0].stops.join(' ');
    numberStopsThere.textContent = 'Без пересадок';
  } else if (value.segments[0].stops.length == 1) {
      stopsPlaceThere.textContent = value.segments[0].stops.join(' ');
      numberStopsThere.textContent = '1 пересадка';
  } else if (value.segments[0].stops.length == 2) {
      stopsPlaceThere.textContent = value.segments[0].stops.join(', ');
      numberStopsThere.textContent = '2 пересадки';
  } else if (value.segments[0].stops.length == 3) {
      stopsPlaceThere.textContent = value.segments[0].stops.join(', ');
      numberStopsThere.textContent = '3 пересадки';
  }

  if (value.segments[1].stops.length == 0) {
    stopsPlaceBack.textContent = value.segments[1].stops.join(' ');
    numberStopsBack.textContent = 'Без пересадок';
  } else if (value.segments[1].stops.length == 1) {
      stopsPlaceBack.textContent = value.segments[1].stops.join(' ');
      numberStopsBack.textContent = '1 пересадка';
  } else if (value.segments[1].stops.length == 2) {
      stopsPlaceBack.textContent = value.segments[1].stops.join(', ');
      numberStopsBack.textContent = '2 пересадки';
  } else if (value.segments[1].stops.length == 3) {
      stopsPlaceBack.textContent = value.segments[1].stops.join(', ');
      numberStopsBack.textContent = '3 пересадки';
  }
}

export {ticket, logoCompany, getDirection, getTicketPrice, getTravelTime, getNumberStops};
