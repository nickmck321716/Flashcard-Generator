var inquirer = require("inquirer");

function ClozeCard(cloze, partial, fullText) {
    this.cloze = cloze,
        this.partial = partial,
        this.fullText = fullText
};

var firstPresident = new ClozeCard("George Washington", "... was the first president of the United States", "George Washington was the first president of the United States");
var array = [{
    type: "input",
    message: firstPresident.partial,
    name: "question"
}]
var array2 = [{
    type: "list",
    message: "Would you like to try again?",
    choices: ["Yes I can't belive i got that wrong","No shut up and tell me the answer"],
    name: "tryAgain"
}]
function quiz() {
    inquirer
        .prompt(array)
        .then(function(inquirerResponse) {
            if (inquirerResponse.question === firstPresident.cloze) {
                console.log("\nThat is Correct Good Job!!\n");
                console.log("\n" + firstPresident.fullText + "\n")
            } else {
                console.log("\nThat is Wrong you need to go back to history class\n");
                inquirer
                    .prompt(array2)
                    .then(function(inquirerResponse) {
                        if (inquirerResponse.tryAgain === array2[0].choices[1]) {
                            console.log("\nThe correct answer is " + firstPresident.fullText + "\n");
                        } else {
                            quiz();
                        };
                    });
            };
        });
};
quiz();
module.exports = ClozeCard;