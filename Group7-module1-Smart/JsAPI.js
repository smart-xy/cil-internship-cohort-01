//using fetch 

const userAction = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const myJson = await response.json(); //extract JSON from the http response
  // do something with myJson
}
