console.log('Welcome to password valitdator!');

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your Password: ', (answer) => {
  // TODO: Log the answer in a database
  let hasUpperCase = false;
  if (answer.length >= 10){
      
      for (let i in answer){
      
        if(answer[i] === answer[i].toUpperCase()){
            hasUpperCase = true;
        }
    }
    if (hasUpperCase === true){
        console.log('Success, you password meets the requirements.')
    }else{
        console.log('Failure, Your password requires a uppercase letter');
    }
  }else{
      console.log('Failure, your password needs to be 10 or more charactar.');
  }
  
  rl.close();
});

