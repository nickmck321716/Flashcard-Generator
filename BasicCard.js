var inquirer = require("inquirer");

function BasicCard(front, back) {
	this.front = front,
	this.back = back
};

var firstPresident = new BasicCard("Who was the first president of the United States", "George Washington");
var array = [
	{
		type:"input",
		message: firstPresident.front,
		name: "question"
	}
]

inquirer
    .prompt(array)
    .then(function(inquirerResponse) {
        if (inquirerResponse.question === firstPresident.back) {
        	console.log("\nThat is Correct Good Job!!\n");
        } else {
        	console.log("\nThat is Wrong you need to go back to history class\n");
        	console.log("\nThe correct answer is " + firstPresident.back + "\n");
        };
    });
//console.log(firstPresident.front);
//console.log(firstPresident.back);

module.exports = BasicCard;