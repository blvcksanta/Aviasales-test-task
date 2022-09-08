const logoCompany = document.querySelector('.ticket--logo');
const price = document.querySelector('.ticket--price');
const ticketInformations = document.querySelectorAll('.ticket--list');
const travelTime = ticketInformations[0].querySelectorAll('.ticket--text')[1];
const travelTime2 = ticketInformations[1].querySelectorAll('.ticket--text')[1];
const stops = ticketInformations[0].querySelectorAll('.ticket--text')[2];
const stops2 = ticketInformations[1].querySelectorAll('.ticket--text')[2];

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

  return `${arrayThousandths.join('')} ${arrayHundredths.join('')} Р`
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

  return {
    first: timeOptionFirst,
    second: timeOptionSecond,
  }
}

const test = (value) => {
  price.textContent = getTicketPrice(value);
  logoCompany.setAttribute('srcset', `http://pics.avs.io/99/36/${value.carrier}.png 1x, http://pics.avs.io/99/36/${value.carrier}@2x.png 2x`);
  logoCompany.setAttribute('src', `http://pics.avs.io/99/36/${value.carrier}.png`);
  travelTime.textContent = getTravelTime(value).first.join(' ');
  travelTime2.textContent = getTravelTime(value).second.join(' ');
  stops.textContent = value.segments[0].stops.join(' ');
  stops2.textContent = value.segments[1].stops.join(' ');
};


fetch('http://localhost:3000/tickets')
  .then((response) => response.json())
  .then((data) => {
    console.log(data[0]);
    test(data[0]);
  })
