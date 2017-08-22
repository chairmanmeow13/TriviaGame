var count=10;

var counter=setInterval(timer, 1000); 

function timer()
{
  count=count-1;
  if (count <= 0)
  {
     clearInterval(counter);
     alert("Time's up!");
  }

  document.getElementById("timer").innerHTML=count + " seconds left"; // watch for spelling
};


var questions = [
	{
        question: 'What are the Words of House Stark?',
        choices: ['Unbowed, Unbent, Unbroken', 'Ours is the Fury', 'Winter is Coming'],
        answer: 2
        },
    {
        question: 'Which Targaryen conquered and unified Westeros?',
        choices: ['Baelon', 'Aegon', 'Maegor'],
        answer: 1
        },
    {
        question: 'Which of the following is NOT one of the Free Cities?',
        choices: ['Bravos', 'Qarth', 'Pentos'];
        answer: 1
        },
];

