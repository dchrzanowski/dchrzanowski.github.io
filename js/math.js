// GLOBALS  (globals are lazy but sure, its quicker :) )
var HEAD = $("#math-head");
var SUBHEAD = $("#math-subhead");
var CONTENT = $("#math-content");
var SCORE = 0;
var QUESTIONSPICKED = [];
var LEVEL = 1;
var CURRENTQUESTION = null;
var ANSWERS = "";
var Q = [];  // questions array
var A = [];  // answers array


// ***************************************************
// HELPER FUNCTIONS
// ***************************************************
// return a random number from 1 to x (both inclusive)
function rand(x) {
    return parseInt((Math.random() * x) + 1);
};


// return a random number in between x and y (both inclusive)
function randRange(y, x) {
    return parseInt((Math.random() * Math.abs((x + 1) - y)) + y);
};


// alert if num is not a number or ZERO and return false
function isNum(num) {
    num = parseFloat(num);

    if(isNaN(num)) {
        alert("Input fields accept numbers only!");
        return false;
    }

    return true;
};


// check if a number(query) exists in an array (arr)
function isInArray(query, arr) {
    for (var i = 0; i < arr.length; i++) {

        if (query == arr[i]) {
            // value found
            return true;
        }
    }

    return false;
};


// increase the difficulty range of the question, based on difficulty difference
function increaseDifficulty(range, difficultyDiff) {
    return range + Math.pow(range, difficultyDiff +1);
};


// pick a question from the pool, does not repeat question
function pickQuestion() {
    var idx = 0;
    var question = null;

    // loop is infinity safe as there are more questions
    // in the bank than the questions being asked
    while (true) {
        idx = rand(math_data.length) -1;

        // check if the question was already picked, if yes - pick another
        if (isInArray(idx, QUESTIONSPICKED)) {
            continue;
        }

        question = math_data[idx];
        // check if the question is within the level range
        if (question.level > LEVEL) {
            continue;
        }

        // add the question to picked ones and return the question object
        QUESTIONSPICKED.push(idx);
        return question;
    }
};


// get values of all input fields
function getInputs() {
    var inputs = [];
    var el = $("input");
    var value = 0;

    for (var i = 0; i < el.length; i++) {
        value = $(el[i]).val();
        inputs.push(parseFloat(value));
    }
    return inputs;
}


// verify inputs
function verifyInputs(arr) {
    for (var i = 0; i < arr.length; i++) {

        // check if each input is a number
        if (!(isNum(arr[i]))) {
            return false;
        }
    }
    return true;
}


// reset all questions and answers
function resetQA() {
    Q = [];
    A = [];
}


// reset all global variables
function resetAll() {
    resetQA();
    SCORE = 0;
    QUESTIONSPICKED = [];
    LEVEL = 1;
    ANSWERS = "";
}


// check if the answer matches the question asked
// it uses the eval function to receive a true of false
function verifyAnswer() {
    // check if the equationAnswer field exists
    if (CURRENTQUESTION.equationAnswer != undefined) {
        var question = eval(CURRENTQUESTION.equation);
        var answer = eval(CURRENTQUESTION.equationAnswer);
    }

    // check if the question has the accuracy variable
    // if yes, then return it
    if (CURRENTQUESTION.accuracy != undefined) {
        var accuracy = CURRENTQUESTION.accuracy;
        if (answer > question - accuracy && answer < question + accuracy) {
            return true;
        } else {
            return false;
        }
    }

    // check if the question has a equationAnswer field
    if (CURRENTQUESTION.equationAnswer != undefined) {
        return question == answer;
    }

    // regular question evaluation
    return eval(CURRENTQUESTION.equation) ;
}


// attach the ENTER key event listener to on input box and focus the input box
function setupInputBoxEvent() {
    $('.inputbox').keypress(function(e) {
        if (e.which == 13) checkAnswer();
    });

    $('.inputbox')[0].focus();
};


// set the score color
function setScoreColor(color) {
    $("#score").css("color", color);
}

// set score based on the current global score
function setScoreColorLogic() {
    if (SCORE >= 80) {
        setScoreColor("green");
    } else if (SCORE >= 60) {
        setScoreColor("blue");
    } else if (SCORE >= 40) {
        setScoreColor("yellow");
    } else {
        setScoreColor("red");
    }
}



// ***************************************************
// TEMPLATE PARSER
// ***************************************************
// Parse the template based on a given question.
// Parser will place random numbers when in encounter '$' keyword
// and input fields when it encounters '#' keyword.
// Random numbers are generated based on the question's range variable.
// This function uses the global Q variable and places values in it.
function parseTemplate(question) {
    var template = question.template;
    var output = "";
    var ch = "";
    resetQA();

    for (var i = 0; i < template.length; i++) {
        ch = template[i];

        if (ch == "$") {  // random num keyword
            var questionNum = template[++i];  // grab the next char and advance i
            if (Q[questionNum] == null) {  // if the number wasnt generated yet

                var lowDiffLevel = question.range[0];
                var highDiffLevel = question.range[1];

                // if the question picked is below the level, make it more difficult
                if (question.level < LEVEL) {
                    lowDiffLevel = increaseDifficulty(lowDiffLevel, LEVEL - question.level);
                    highDiffLevel = increaseDifficulty(highDiffLevel, LEVEL - question.level);
                }

                Q[questionNum] = randRange(lowDiffLevel, highDiffLevel);
            }
            output += Q[questionNum];
        }
        else if (ch == "#") {  // input field keyword
            output += "<input type='text' value='' class='inputbox' autofocus>";
        }
        else {  // just copy
            output += ch;
        }
    }

    return output;
}



// ***************************************************
// WELCOME SCREEN AND DIFFICULTY SELECTOR
// ***************************************************
// create a welcome screen
function welcome() {
    resetAll();
    HEAD.text("Welcome to the maths quiz, answer 10 question!");
    SUBHEAD.text("Choose your difficulty and click start");

    var out = "<select id='difficulty'>" +
        "<option value='1'>Easy</option>" +
        "<option value='2'>Medium</option>" +
        "<option value='3'>Hard</option>" +
        "</select>" +
        "<br><button onclick='start()' class='math-button'>Start</button>";
    CONTENT.html(out);
};

// pick up the dificulty level and start the quiz
function start() {
    LEVEL = parseInt($('#difficulty').val());
    nextQuestion();
};



// ***************************************************
// MAIN QUIZ
// ***************************************************
// Main function that generates the question
// and inserts the HTML into the document
function generateQuestionHTML() {
    var q = pickQuestion();
    var p = parseTemplate(q);

    var qNum = QUESTIONSPICKED.length;
    var submitButton = "<br><button onclick='checkAnswer()' class='math-button'>Submit</button>";


    var content = "<table id='maths'>" +
        "<tr>" +
        "<td id='math-cell1'>" +
        "<div id='question'>" + p + "</div>" +
        "</td>" +
        "<td id='math-cell2'>" +
        "<img src='" + q.image + "' class='img-responsive img-rounded'>" +
        "</td>" +
        "</tr>" +
        "</table>" +
        submitButton;

    // setup the html and textual content
    HEAD.text("Question " + (qNum) + " : " + q.name);
    SUBHEAD.text(q.text);
    CONTENT.html(content);
    return q;
};

// proceed to the next question (if possible)
function nextQuestion() {

    if (QUESTIONSPICKED.length > 9) {
        finishQuiz();
        return;
    }

    CURRENTQUESTION = generateQuestionHTML();

    setupInputBoxEvent();
};

// read and verify user inputs, check if the answer is correct
// and proceed to the next question or post an error if answer is incorrect
function checkAnswer() {
    A = getInputs();

    if (!(verifyInputs(A))) return;

    if (verifyAnswer()) {
        SCORE += 10;
        // TODO move the answers to a function
        // and produce a 'nicer' output
        ANSWERS += "<br><span style='color:green'>Question " +
            QUESTIONSPICKED.length +
            " : Correct answer! " +
            " You gave " + A[0] +
            " and the answer was " +
            eval(CURRENTQUESTION.answer) +
            "</span>";
        nextQuestion();
    } else {
        ANSWERS += "<br><span style='color:red'>Question " +
            QUESTIONSPICKED.length +
            " : Wrong answer! " +
            " You gave " + A[0] +
            " and the answer was " +
            eval(CURRENTQUESTION.answer) +
            "</span>";
        nextQuestion();
    }
}


// post results at the end of the quiz
function postResult() {
    HEAD.text("You have completed the quiz!");
    SUBHEAD.text("");
    var submitButton = "<br><button onclick='welcome()' class='math-button'>Restart Quiz</button>";

    var content = "<p class='text-center'>" +
        "Your final score is <span id='score'>" + SCORE + "</span> / 100" +
        "</p>" +
        ANSWERS +
        submitButton;

    CONTENT.html(content);
    setScoreColorLogic();
}


// finish the quiz and ask to restart the quiz
function finishQuiz() {
    postResult();
};

window.onload = welcome;
