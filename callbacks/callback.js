// callbacks
// We perform an asyncronous action the pass the results to a callback funtcion to operate on the data


const waitUp = (callback) => {
  setTimeout(() => {
    // mimick a long running operation that takes time to return
    const fakeData = {
      name: 'kakashi sensei',
      village: 'Hidden leaf'
    }
    // pass data to the callback function where it can be used
    callback(fakeData)
  }, 3000);
}


// calling the waitUp function

waitUp((data) => console.log(data))