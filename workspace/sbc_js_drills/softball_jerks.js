// |||||||||||||||||||||||||||||||||
// ||||||||| SBC JS Drills |||||||||
// |||||||||||||||||||||||||||||||||
console.log('SOFTBALL JERKS\n\n');

// Complete these exercises "procedurally". By that I mean, only have it
// work when you first run the program. In order to see the values in
// console, make sure you `console.log()` any variable you need.

// For BONUS, try and make your algorithms into functions

// A. ||||||| ARRAY PLAY! |||||||

// 1. Make a roster variable and set it to an array of the players.
console.log("1. The Roster\n");
var roster = [
  "Judy Sokim",
  "Sam Fishinbottom"
  "Mike Pittz"
  "Amy Vlor"
  "Greg Craig"
  "Craig Greg"
  "Lex Luger"
  "Klempt Klarc"
  "Amit Patel"
  "Joanne Fabric"
  "Margaret Kalanchoe"
  "Lucy Bascetta"
];
console.log(roster);


// 2. Set the batting lineup to the last 9 people on the roster.
console.log("\n2. The Lineup\n");



// 3. Make a var batterUp and set it to the first member in the lineup.
//    Then, print to the console the batter's name append with " is up
//    to bat!".
console.log("\n3. Batter Up!\n");

var batterUp = lineup[0];

console.log(batterUp + is up to bat!);

// B. ||||||| CONDITIONAL POSITIONAL! |||||||

// 4. Select "Lex Luger" from the lineup and set him to the var slugger.
//    Then, create a variable onBase and set it to a number between 0
//    and 3. If the value of onBase is 2 or greater, print to the
//    console, "Lex take us home!", otherwise, print "Get us on base
//    Lex!"
console.log('\n4. Take Us Home, Slugger\n');

var sluggar = roster[6];
var onBase = 0;
if (onBase > = 2 && sluggar === "Lex Lugar") {
  console.log("Lex takes us home!");
} else {
  console.log("Get us on base!!");
}


// 5. Below is an undefined variable, warmingUp. Create a variable
//    leadingBy and set it to a number. Then, if leadingBy is less than
//    2, set warmingUp to "Sam Fishinbottom". Finally, create a variable
//    pitcher, and set it to the warmingUp var OR the first spot in the
//    roster.
console.log('\n5. Pitcher or Closer?\n');

var warmingUp = "";
var leadingBy = Math.floor(Math.random() * 4);
if (leadingBy < 2) {
  warmingUp = roster [1];
}
var pitcher = warmingUp || roster[0];
console.log(pitcher);


// 6. Create a variable downBy. If the pitcher is Sam Fishinbottom AND
//    downBy is greater than 2, tell Sam to go for the knees. Otherwise,
//    just tell her to strike 'em out.
console.log('\n6. Dirty Tricks\n');

var downBy
if pitcher === "Sam Fishinbottom" && downBy > 2) {
  console.log("Go for the knees, Sam!");
} else
  console.log()



// C. ||||||| LOOP TROOP |||||||
// 7. Using a while loop, iterate through the lineup and for each
//    player, print to the console "<player name> is ready to knock it
//    out of the park!"
console.log('\n7. Run Through the Batting Order\n');



// 8. No one can ever remember which one is Greg and which is Craig. If
//    a player contains "Greg" in their name, the team should fumble
//    when cheering them on. Otherwise, they should cheer: "Let's go
//    <player name>!". Use a for loop!
console.log('\n8. The Greg Craig Predicament\n');



// 9. The team is getting new jerseys with names on the back, but the
//    cost of printing a name over 7 characters isn't in the budget.
//    Create an empty array with the name playersCut. Then loop over the
//    roster array and add all players with a last name longer than 7
//    characters and print it to the console.
console.log('\n9. Long Name Freaks Gotta Go\n');
