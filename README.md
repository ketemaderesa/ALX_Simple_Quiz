# ALX_Simple_Quiz

## Overview
This is a simple interactive quiz built with HTML, CSS, and JavaScript.  
The quiz presents a question, allows the user to select one of multiple answers,  
and provides immediate feedback upon submission.

---

## Project Structure
.
├── index.html # Main HTML file for the quiz
├── styles.css # Styling for the quiz interface
└── quiz.js # JavaScript functionality

---

## Features
- Displays a single question with multiple-choice answers.
- Allows the user to select one answer at a time.
- Shows feedback indicating whether the selected answer is correct or not.
- Uses basic JavaScript DOM manipulation (no libraries or frameworks).

---

## How It Works
1. **HTML:** Contains the quiz structure:
   - A question (`#quiz-question`)
   - Multiple radio buttons for answers
   - A submit button (`#submit-answer`)
   - A feedback paragraph (`#feedback`)

2. **CSS:** Adds basic styling, making the quiz visually clean and centered.

3. **JavaScript (`quiz.js`):**
   - Defines a `checkAnswer` function.
   - Checks if the selected answer matches the correct answer (`4`).
   - Displays feedback message accordingly.
   - Uses an event listener on the submit button to trigger validation.

---

## How to Run
1. Clone the repository:

   git clone https://github.com/<ketemaderesa>/ALX_Simple_Quiz.git
Open index.html in any modern web browser.

Select an answer and click Submit Answer to see the feedback.

Author
Ketema Deresa