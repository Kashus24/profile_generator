const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Whats your name? ', (userName) => {
  rl.question('What\'s an activity you enjoy?', (favHobby) => {
    rl.question('What do you listen to while doing that?',(favSong) => {
      rl.question('Which meal is your favourite ?',(favMeal) => {
        rl.question('What\'s your favourite thing to eat for that meal?',(favFood) => {
          rl.question('Which sport is your absolute favourite?',(favSport) => {
            rl.question('What is your superpower? In a few words, tell us what you are amazing at!?',(superPower) => {
              console.log(`Hello! My name is ${userName} and I love  ${favHobby}. ${favSong} is my top song. My favourtie meal is ${favMeal}, of which i enjoy eating ${favFood} the most. I'm always playing ${favSport}. My super power is ${superPower}.`)

              rl.close();
            });
          });
        });
      });
  });
});
});
