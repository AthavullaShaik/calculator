Calculator Project README

Project Overview:

This project is a simple calculator built using HTML, CSS, and JavaScript. The calculator supports basic arithmetic operations: addition, subtraction, multiplication, and division. The goal of this project is to demonstrate the creation of a functional web application using fundamental web development technologies.

![calculator](https://github.com/AthavullaShaik/calculator/assets/139375503/18ce9db0-b597-4248-9209-84f896ba5ef1)

Features:

Basic arithmetic operations: addition, subtraction, multiplication, and division.
Responsive design for different screen sizes.
Clear button to reset the calculation.
Backspace button to remove the last entered digit or operator.

File Structure:


calculator/

│

├── index.html

├── style.css

├── script.js

└── README.md

index.html

This file contains the HTML structure of the calculator. It includes the display area and buttons for digits, operations, and control functions (clear and backspace).

style.css

This file contains the CSS styles to make the calculator visually appealing and responsive. It includes styles for layout, buttons, and the display screen.

script.js

This file contains the JavaScript code that provides the calculator's functionality. It handles button clicks, updates the display, and performs calculations.

How to Run the Project

1. Clone the repository:

   git clone [https://github.com/yourusername/calculator.git](https://athavullashaik.github.io/calculator/)

2. Navigate to the project directory:

   cd calculator
   
3. Open index.html in your web browser:
   
   open index.html

   Alternatively, you can use a live server extension in your code editor to launch the project.

Detailed Explanation

HTML (index.html)

The HTML structure includes:

A div with class calculator containing:

A div with class display for showing the input and result.

Buttons for digits (0-9), operators (+, -, *, /), and control functions (clear, backspace).

      <!DOCTYPE html>
      <html lang="en">
      <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator</title>
    <link rel="stylesheet" href="styles.css">
      </head>
      <body>
    <div class="calculator">
        <div class="evaluate">
            <input type="text" placeholder="" id="inputbox1" readonly>
        </div>
        <div class="input">
            <input type="text" placeholder="0" id="inputbox" readonly>
        </div>
        <div>
            <button class="operator">AC</button>
            <button class="operator">DEL</button>
            <button class="operator">%</button>
            <button class="operator">/</button>
        </div>

        <div>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button class="operator">*</button>
        </div>
        <div>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button class="operator">-</button>
        </div>

        <div>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button class="operator">+</button>
        </div>
        <div>
            <button>00</button>
            <button>0</button>
            <button>.</button>
            <button class="equalBtn">=</button>
        </div>
    </div>
    <script src="script.js"></script>
      </body>
      </html>


CSS (style.css)

The CSS styles ensure the calculator is visually appealing and user-friendly:

      <style>
       @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');
      </style>
      .{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'poppins', sans-serif;
      }
      body{
    background: linear-gradient(45deg,#0a0a0a ,#3a4452);
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
      }

      .calculator{
    border: 1px solid #717377;
    padding: 20px;
    border-radius: 16px;
    box-shadow: 0px 3px 15px #717377;

      }
      #inputbox{
    color:white;
    width: 275px;
    border: none;
    background: transparent;
    text-align: right;
    padding: 20px;
    font-size: 30px;
    cursor: pointer;
      }
      input::placeholder{
    color: #ffff;
      }
      button{
    border: none;
    border-radius: 50%;
    background: transparent;
    color: #ffff;
    width: 60px;
    height: 60px;
    font-size: 20px;
    margin: 10px;
    cursor: pointer;
    box-shadow: -8px -8px 15px rgb(225,225,225,0.1);

      }
      .equalBtn{
    background-color: #fb7c14;
      }
      .operator{
    color: #fb7c14;
      }
      #inputbox1{
    color:rgb(193, 189, 189);
    width: 290px;
    border: none;
    background: transparent;
    text-align: right;
    padding: 5px;
    font-size: 15px;
    cursor: pointer;
      }

JavaScript (script.js)

The JavaScript handles the calculator logic:

      let input = document.getElementById('inputbox');
      let input1 = document.getElementById('inputbox1');
      let buttons = document.querySelectorAll('button');
      let string = "";
      let string1 = "";
      let l_operator = '';
      let arr = Array.from(buttons);
      arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string1);
            string1+= e.target.innerHTML;
            input.value = string;
            input1.value = string1;
            string1 = string;
            l_operator = "=";
        } else if (e.target.innerHTML == 'AC') {
            string = "";
            string1 = "";
            input.value = string;
            input1.value = string1;
            l_operator = "";
        } else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            string1 = string1.substring(0, string1.length - 1);
            input.value = string;
            input1.value = string1;
        } 
        else if (e.target.innerHTML == '%' || e.target.innerHTML == '/'||e.target.innerHTML == '*' ||e.target.innerHTML == '-' ||e.target.innerHTML == '+' ) {
            string = "";
            string = eval(string1);
            string1+= e.target.innerHTML;
            input.value = string;
            input1.value = string1;
            string = "";
            l_operator = e.target.innerHTML;
        }
        else {
            if (l_operator =='=') {
                string = "";
                string1 = "";
                string += e.target.innerHTML;
                string1+= e.target.innerHTML;
                input.value = string;
                input1.value = string1;
                l_operator = '';
            }
            else{
                string += e.target.innerHTML;
                string1+= e.target.innerHTML;
                input.value = string;
                // input1.value = string1;
                
                  } 
              }
          })
      })

Future Improvements

*   Add support for keyboard input.

*   Implement advanced mathematical functions (e.g., square root, exponentiation).

*   Improve error handling and validation.

*   Enhance the user interface with animations and better styling.

Contributions

Contributions are welcome! If you have suggestions or improvements, please create an issue or submit a pull request.

Acknowledgments

Thank you to the web development community for the numerous tutorials and resources that made this project possible. Special thanks to everyone who provides feedback and improvements.

Feel free to customize this README to better fit your project's specifics. Happy coding!






