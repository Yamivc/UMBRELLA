let events = [
    {
      city: "Madrid",
      date: "20/12/23"
    },
    {
      city: "Valencia",
      date: "21/12/23"
    },
  
  ];
  
  function initialize() {
    const EVENT_FORM = document.getElementById("event-form")
    EVENT_FORM.addEventListener("submit", addEvent);
  
    showEvents();
  
  }
  
  function addEvent(event) {
    event.preventDefault();
  
    const CITY = event.target.city.value;
    const DATE = event.target.city.value;
  
    events.push({
  
      city: CITY,
      date: DATE
    })
    showEvents();
  }
  
  function showEvents() {
    const EVENT_LIST = document.getElementById("event-list");
  
    EVENT_LIST.innerHTML = "";
  
    for (let i = 0; i < events.length; i++) {
      EVENT_LIST.innerHTML += `<li>${events[i].city} <button onclick="deleteEvent(${i})">DELETE<button></li>`;
    }
  
  }
  
  function deleteEvent(eventId){
    events.splice(eventId, 1);
    showEvents();
  }
  
  initialize();