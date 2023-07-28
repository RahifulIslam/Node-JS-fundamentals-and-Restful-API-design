async function fetchData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1'); // Await the completion of the fetch request
      const data = await response.json(); // Await the completion of parsing the response as JSON
      console.log(data); // Use the retrieved data
    } catch (error) {
      console.log('Error:', error);
    }
  }
  
  fetchData();