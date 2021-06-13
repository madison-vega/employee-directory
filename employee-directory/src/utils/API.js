// get data, console log it
// filter input box
// sort/ click on header and sort list
// call to api one time when page loads
// save data in state 
// component did mount/or hooks
// use map function to iterate over state array



import axios from "axios";

const url = 'https://randomuser.me/api/?results=20'

export default {
  getEmployees: function() {
    return axios.get(url)
  }
};