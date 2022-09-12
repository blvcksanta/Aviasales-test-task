import {getData} from "./data.js";

const deleteUnfilteredTickets = () => {
  const tickets = document.querySelectorAll('.ticket');
  tickets.forEach((currentValue) => {
    currentValue.remove();
  })
}

const doFiltering = (data, evt) => {
  return data.filter((currentValue) => {
  const numberStopsDeparture = currentValue.segments[0].stops.length;
  const numberStopsComeBack = currentValue.segments[1].stops.length;
  if (numberStopsDeparture == parseInt(evt.target.value.match(/\d+/)) && numberStopsComeBack == parseInt(evt.target.value.match(/\d+/))) {
    return true;
  }
  });
}

const getFilteredData = (data, evt) => {
  if (evt.target.value == 'all') {
    getData(data);
  } else {
    getData(doFiltering(data, evt));
  }
}

export {getFilteredData, deleteUnfilteredTickets};
