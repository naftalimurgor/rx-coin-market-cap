

// a function thaat returns a promise

const waitUpWtihError = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // mimick a delay, like a long running web api call
      // promise rejected with an error
      reject(new Error('Request Failed'))
    }, 4000)
  })
}


const waitUp = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const fakeData = {
        name: 'Naruto Uchiah',
        age: 14 // made up
      }

      resolve(fakeData)
    }, 4000)
  })
}

// async-style

const main = async () => {
  try {
    const data = await waitUp()
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}



const mainWithError = async() => {
  try {
    const res = await waitUpWtihError()
  } catch (error) {
    console.log()
  }
}