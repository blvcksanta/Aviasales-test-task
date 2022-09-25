import {getData} from "./data.js";

const deleteUnfilteredTickets = () => {
  const tickets = document.querySelectorAll('.ticket');
  tickets.forEach((currentValue) => {
    currentValue.remove();
  })
}

const doFiltering = (data, value) => {
  return data.filter(({segments: [departure, comeBack]}) =>
    departure.stops.length == parseInt(value.match(/\d+/)) && comeBack.stops.length == parseInt(value.match(/\d+/))
  );
}

const getFilteredData = (data, value) => {
  if (value == 'all') {
    getData(data);
  } else {
    getData(doFiltering(data, value));
  }
}

export {getFilteredData, deleteUnfilteredTickets};
