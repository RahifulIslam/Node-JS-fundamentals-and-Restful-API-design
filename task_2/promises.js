// Resolve
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = 'Promise resolved!';
      resolve(data); 
    }, 1000);
  });
  
  myPromise.then((result) => {
    console.log(result); 
  }).catch((error) => {
    console.log(error);
  });

  // Reject
//   const myPromise2 = new Promise((resolve, reject) => {
//     const error = new Error('Something went wrong!');
//     reject(error); 
//   });
  
//   myPromise2.then((result) => {
//     console.log(result); 
//   }).catch((error) => {
//     console.log(error); 
//   });