let answers = ["A","C","B","D","D"], 
    result = answers.length;

function getradio( radio ){
    let radio01 = document.getElementsByName( radio ); // Get radio group by-name
    for(let i=0; i<radio01.length; i++)
      if(radio01[i].checked) return radio01[i].value; // return the checked value
}

function getScore(){
    let score = 0;
  for (let j=0; j<result; j++)
    if(getradio("question"+j)===answers[j]) score ++; // increment only
  return score;
}

function returnScore(){
  alert("Your score is "+ getScore() +"/"+ result);
}
let audio = document.getElementById("audioID");

function play() { 
  return audio.paused ? audio.play() : audio.pause();

};