// Callback function
function getData(callback) {
    setTimeout(function() {
      const data = 'This is the retrieved data';
      callback(data);
    }, 2000);
  }
  
  function processData(data) {
    console.log('Processing data: ' + data);
  }
  
  // Calling the function and passing the callback function as an argument
  getData(processData);