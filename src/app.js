//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName,managerAge,currentTeam,trophiesWon){
  return [managerName,managerAge,currentTeam,trophiesWon]
}
// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}
//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function createFormation(obj) {
  if (obj.length!=0){
  return{
    defender:obj[0],
    midfield:obj[1],
    forward:obj[2]
  }
}
  else{
    return null
  }
  
}
// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year) {
  return players.filter((deb) => {
    return deb.debut == year
  })
}
//Progression 4 - Filter players that play at the position _______
function filterByPosition(posit) {
  return players.filter((d) => {
    return d.position==posit
  })
}
//Progression 5 - Filter players that have won ______ award
function filterByAward(award) {
  c=[]
  for (let i=0; i<players.length;i++){
    for(let j=0;j<players[i].awards.length;j++){
      if (players[i].awards[j].name==award){
        c.push(players[i])
      }
    }
  }
  return c
  }
//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(time){
  function filterByAwardxTimes(awd,times) {
    c=[]
    co=0
    for (let i=0; i<players.length;i++){
      for(let j=0;j<players[i].awards.length;j++){
        if (players[i].awards[j].name==awd){
          co+=1
        }
      }
      if (co==times){
        c.push(players[i])
      }
      co=0
    }
    return c
   }
}
//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(awd,country) {
  c=[]
  for (let i=0; i<players.length;i++){
    for(let j=0;j<players[i].awards.length;j++){
      if (players[i].awards[j].name==awd && players[i].country==country){
        c.push(players[i])
      }
    }
  }
  return c
}
//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards,team,age) {
  c=[]
  for (let i=0; i<players.length;i++){
    if (players[i]["awards"].length>=noOfAwards && players[i].team==team && players[i].age < age){
      c.push(players[i])
    }
  }
  return c
}

//Progression 9 - Sort players in descending order of their age

//Progression 10 - Sort players beloging to _____ team in descending order of awards won

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
function SortByNamexOlderThan(age) {
  c = players.filter(player => player.age > age);
  return c;
}