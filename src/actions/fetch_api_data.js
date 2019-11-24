import axios from 'axios';

export function fetchAPIResponse(city) {
  return function (dispatch) {
    axios.get('http://api.weatherstack.com/current?access_key=99f93739261e08fcb52819eae0f2d5e5&query=' + city).then(response => {

      // get location object
      let arr1 = [];
      for (let key1 in response.data.loction) {
        arr1.push(response.data.loction[key1]);
      }
      dispatch({ type: 'FETCH_LOCATION', payload: arr1 });

      // get current condition object
      let arr2 = [];
      for (let key2 in response.data.current) {
        arr2.push(response.data.current[key2]);
      }
      //search the index of condition array
      console.log(arr2);
      // remove from the array
      arr2.splice(5, 1);

      dispatch({ type: 'FETCH_WEATHER', payload: arr2 });

      // get loacation object
      let arr3 = [];
      for (let key3 in response.data.current.condition) {
        arr3.push(response.data.current.condition[key3]);
      }
      dispatch({ type: 'FETCH_CONDITIONS', payload: arr3 });

      console.log(response)
    }).catch(err => {
      console.log(err)
    });

  }
}

