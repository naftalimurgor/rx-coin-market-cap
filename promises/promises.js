const waitUp=()=> {
  return new Promise((resolve, reject)=> {
    setTimeout(() => {
      const fakeData  = {
        name: 'Kakashi sensei',
        age: 24 // made up
      }

      resolve(fakeData)
    }, 4000);
  })
}

// consuming the promise

waitUp().then((data) => console.log(data))

// calling the function as a normal function will returns Promise { <pending>s }

const data = waitUp()

console.log(data) // Promise { <pending>}