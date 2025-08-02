ALX_Simple_Quiz & Simple Calculator
__________________________________________________________________________________________________
Overview
This repository contains two beginner-friendly JavaScript projects:

Simple Interactive Quiz – A multiple-choice quiz with instant feedback.

Simple Calculator – A basic calculator that performs addition, subtraction, multiplication, and division.

Project Structure
.
├── quiz
│   ├── index.html        # Quiz HTML layout
│   ├── styles.css        # Quiz styling
│   └── quiz.js           # Quiz functionality
│
└── calculator
    ├── index.html        # Calculator HTML layout
    ├── calculator.css    # Calculator styling
    └── calculator.js     # Calculator functionality
Features
Simple Quiz:
Displays one question with multiple-choice answers.

Allows selecting only one answer.

Provides feedback for correct, incorrect, or missing selection.

Uses plain JavaScript (no frameworks).

Simple Calculator:
Performs basic arithmetic operations:

Addition

Subtraction

Multiplication

Division

Interactive buttons to trigger calculations.

Displays results dynamically without refreshing the page.

How It Works
Quiz
HTML: Contains a question, radio inputs for answers, a submit button, and a feedback section.

CSS: Styles the quiz layout for clarity and good presentation.

JavaScript:

Defines a checkAnswer function.

Compares selected input with the correct answer (4).

Displays color-coded feedback.

Uses event listener to trigger answer checking on button click.

Calculator
HTML:

Two number input fields.

Four buttons for +, -, *, /.

A result display area.

CSS:

Centers the calculator on the screen.

Styles input fields, buttons, and result area.

JavaScript:

Defines functions for addition, subtraction, multiplication, and division.

Attaches event listeners to each button.

Fetches input values, performs the calculation, and updates the result dynamically.

How to Run
Clone the repository:

git clone https://github.com/<ketemaderesa>/ALX_Simple_Quiz.git
Open either project in your browser:

For the quiz, open quiz/index.html.

For the calculator, open calculator/index.html.

Author
Ketema Deresa