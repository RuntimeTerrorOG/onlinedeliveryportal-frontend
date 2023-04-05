//simple way for different parts of a JavaScript application to communicate with each other
const eventBus = {

  //adds an event listener to the document object with the given event name
  on(event, callback) {
    document.addEventListener(event, (e) => callback(e.detail));
  },

  //creates a custom event with the given name and data and dispatches it on the document object
  dispatch(event, data) {
    document.dispatchEvent(new CustomEvent(event, { detail: data }));
  },

  //removes the event listener from the document object.
  remove(event, callback) {
    document.removeEventListener(event, callback);
  },
};

export default eventBus;