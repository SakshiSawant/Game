var readlineSync = require('readline-sync');
var score = 0;

var questions = [
{
  question: 'How many pandavas were there ?',
  answer: 5
},
{
  question: 'Which weapon did Arjuna used ?',
  answer: 'Bow and Arrow'
},
{
  question: 'Who was the eldest among pandavas ?',
  answer: 'Yudhisthir'
},
{
  question: 'Lord krishna was on whose side ?',
  answer: 'Pandavas'
},
{
  question: 'How long was the Mahabharata war ?',
  answer: 18
}
];

var options = [
  {
    option: [5,9,1,2],
  },
  {
    option: ['Sword','Saw','Bow and Arrow','Arrow'],
  },
  {
    option: ['Bheem','Yudhisthir','Arjun','Nakul'],
  },
  {
    option: ['Kauravas','Pandavas'],
  },
  {
    option: [15,21,5,18],
  }
];

var highScore = [
  {
    name: 'Sakshi',
    score: 4,
  }
];





function welcome()
{
  var username = readlineSync.question('What is your name ?');
  console.log();
  console.log('Welcome to the game! ' + username); 
  console.log('Check how well do you know about Mahabharata!');
  console.log('_______________________________________________');
}



function play(question,option,answer)
{
  var userans = readlineSync.keyInSelect(option,question);
  if(option[userans] === answer)
  {
    score = score + 1;
  }
  else
  {
    score = score - 1;
  }
  console.log('Your score till now is:' + score);
  console.log('_______________________________________________');
}

function game(){
  for(var i=0;i<questions.length;i++)
  {
    var q = i+1;
    console.log('Q: '+ q);
    var current_question = questions[i];
    var current_options = options[i];
    play(current_question.question,current_options.option,current_question.answer);
  }
  console.log('Your final score is: ' + score);
}

function showScores()
{
  console.log();
  console.log('Your score is: ',score);
  console.log('Check the highscore:');
  highScore.map(score => console.log(score.name, " : ", 
  score.score));
  console.log('If your score is more than the highscore do tell me!');
}


welcome();
game();
showScores();