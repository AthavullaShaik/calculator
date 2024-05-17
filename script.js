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
