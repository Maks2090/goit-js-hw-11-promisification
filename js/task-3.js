
const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  
  const makeTransaction = (transaction) => {
    const delay = randomIntegerFromInterval(200, 500);
    const canProcess = Math.random() > 0.3;
   return  new Promise((resolve, reject) => {
       setTimeout(()=> {
           if(canProcess){
               resolve({ id: transaction.id, time: delay });
           }

           reject(transaction.id);

       },delay);
   } )
    
  };
  
  const logSuccess = ({ id, time }) => {
    console.log(`Transaction ${id} processed in ${time}ms`);
  };
  
  const logError = id => {
    console.warn(`Error processing transaction ${id}. Please try again later.`);
  };
  

  makeTransaction({ id: 70, amount: 150 }).then(logSuccess).catch(logError);
  makeTransaction({ id: 71, amount: 230 }).then(logSuccess).catch(logError);
  makeTransaction({ id: 72, amount: 200 }).then(logSuccess).catch(logError);
  makeTransaction({ id: 73, amount: 290 }).then(logSuccess).catch(logError);
  makeTransaction({ id: 74, amount: 124 }).then(logSuccess).catch(logError);
  makeTransaction({ id: 75, amount: 400 }).then(logSuccess).catch(logError);