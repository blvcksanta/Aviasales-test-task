import {getData} from "./data.js";

const deleteUnfilteredTickets = () => {
  const tickets = document.querySelectorAll('.ticket');
  tickets.forEach((currentValue) => {
    currentValue.remove();
  })
}

const doFiltering = (data, value) => {
  return data.filter((currentValue) => {
  const numberStopsDeparture = currentValue.segments[0].stops.length;
  const numberStopsComeBack = currentValue.segments[1].stops.length;
  if (numberStopsDeparture == parseInt(value.match(/\d+/)) && numberStopsComeBack == parseInt(value.match(/\d+/))) {
    return true;
  }
  });
}

const getFilteredData = (data, value) => {
  if (value == 'all') {
    getData(data);
  } else {
    getData(doFiltering(data, value));
  }
}

export {getFilteredData, deleteUnfilteredTickets};
