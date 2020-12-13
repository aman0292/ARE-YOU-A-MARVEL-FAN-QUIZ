var readlinesync=require('readline-sync');
 var chalk = require('chalk');
  var score=0;
 var username=readlinesync.question("what's your name? ");
  var exit = 0;

// leaderboard (top five marvel fan name and thier score)
 var highscore= 
 [
   {   name:"sanchit  ",score : 8 },
   {   name:"yashi   ",score : 8 },
   {   name:"manu   ",score : 7 },
   {   name:"arjav   ",score : 7 },
   {   name:"prashant   ",score : 6 }
 
 ]

 //welcome user
 console.log(chalk.green("Welcome! ")+username+" to are you a true " +chalk.yellowBright("MARVEL FAN ?"));
 console.log('------------------------\n');

//Questions
var questions=
[
  {
    ques:`What is Captain America’s shield made of?

(a) Adamantium
(b) Vibranium
(c) Promethium
(d) Carbonadium `,
    ans:"b"
  },
 
  {
    ques:`Before becoming Vision, what is the name of Iron Man’s A.I. butler?

(a) H.O.M.E.R.
(b) J.A.R.V.I.S.
(c) A.L.F.R.E.D.
(d) M.A.R.V.I.N. `,
    ans:"b"
  },
   {
    ques:`Around how many years was Captain America frozen?

(a) 40 years
(b) 99 years
(c) 25 years
(d) 70 years `,
    ans:"d"
  },
  {
    ques:`Thor comes from which planet?

(a) Titan
(b) Asgard
(c) Earth
(d) Jotunheim `,
    ans:"b"
  },
  {
    ques:`Who is Ultron?

(a) A humanoid powered by the Tesseract
(b) An android powered by the Infinity Stones
(c) An artificial intelligence program that went rogue
(d) The leader of the extraterrestrial race Chitauri  `,
    ans:"c"
  },
{
    ques:`In Avengers: Infinity War, why doesn't Dr. Strange engage in an endless time loop to make Thanos surrender?

(a) He just messes up
(b) Letting him win is the only viable option
(c) The Avengers have to reunite for the Endgame, obviously
(d) Dr. Strange is too weak for an endless time loop `,
    ans:"b"
  },
{
    ques:`Who was the last holder of the Space Stone before Thanos claims it for his Infinity Gauntlet?

(a) Thor
(b) Loki
(c) The Collector
(d) Tony Stark `,
    ans:"b"
  },
{
    ques:`What does the Winter Soldier say after Steve recognizes him for the first time?

(a) “Who the hell is Bucky?”
(b) “Do I know you?”
(c) “He’s gone.”
(d) “What did you say? `,
    ans:"a"
  },
{
    ques:`What landmark does Peter Parker rescue his classmates from in Spider-Man: Homecoming?

(a) Washington Monument
(b) Statue of Liberty
(c) Mount Rushmore
(d) Golden Gate Bridge
 `,
    ans:"a"
  },
{
    ques:`What is the name of Thor’s hammer?

(a) Vanir
(b) Mjolnir
(c) Aesir
(d) Norn `,
    ans:"b"
  }

]
 // function to play this quiz
 function play(question,answer)
 {

     // check the valid input
  var loop = 0;

  while( loop < 100 ){
     console.log(chalk.red("\nPress 'e' to exit the game\n"));
     var currentanswer = readlinesync.question("Input answer : ");
    if( currentanswer.toUpperCase() === "A" || currentanswer.toUpperCase() === "B" || currentanswer.toUpperCase() === "C" || currentanswer.toUpperCase() === "D" || currentanswer.toUpperCase() === "E" ){
      break;  
    }
  
    // if input type is not correct then it display invalid input
    console.log(chalk.red('\nInvalid input ')+"try again!");
  } 

  //display the answer
  console.log("you answered: "+currentanswer);

//check answer
if(answer.toUpperCase()==currentanswer.toUpperCase())
{
  console.log(chalk.green("\ncorrect answer!"));
  score++;
}
else if(currentanswer.toUpperCase()=="E")
{
  exit++;
  console.log("you have exit the game! ");
}
else{
  console.log(chalk.red("\nWrong answer!"))
  console.log(chalk.green("The correct answer is: ")+answer+"\n");
}
 }
//To display all the questions, using for loop

for(var i=0;i<questions.length;i++)
{
  if(exit==0)
  {
    var displayquestion=(i+1)+"."+questions[i].ques;
    console.log(displayquestion );
    //check answer
    play(questions[i].ques,questions[i].ans);
  }
  else{
    break;
  }
}
//display final score
if(exit==0)
{
  console.log(chalk.yellowBright("Game finished! "));
  console.log("Your final score is: "+score);
}

// check the score if it is highscore then congrats him

// Also ask to take the screenshot and send it

if( score > highscore[0].score ){
  console.log(chalk.green('☆彡(ノ^ ^)ノ Congratulations ヘ(^ ^ヘ)☆彡')+" you have made a new high score by beating "+highscore[0].name+`
You have earned the first place in the leaderboard
  
Take a screenshot and send it to me so that i can update the highscore
  `)
}

// Update the leaderboard depends upon the score of the Player

for( var i = 0; i < highscore.length; i++ ){
  if( score > highscore[i].score ){
     highscore.splice(i, 0, { name: username+"  ", score: score });
     highscore.pop();
     break;     
  }
}

// Ask to check the leaderboard
if( exit == 0 ){

   var checkhighscore = readlinesync.question("Do you want to check the leaderboard? "+chalk.gray('yes or no '));
   console.log("\n");

// if user input yes then display leaderboard

if( checkhighscore.toLowerCase() == "yes" ){
  for( var i = 0; i < highscore.length; i++ ){
    console.log((i+1)+". "+chalk.yellowBright("name : ")+chalk.green(highscore[i].name)+chalk.yellowBright(" score : ")+chalk.green(highscore[i].score));
  }
}
   
}

console.log(chalk.yellow(`
Thanks for playing!`)); 
