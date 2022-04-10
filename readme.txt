# "Realiza la suma de 2 valores introducidos y enviados mediante AJAX a un PHP que devuelve el resultado para mostrarlo."

## The aim of this exercise is to: 
 Sum to inputs sendt by AJAX to PHP and return the result to be shown 
  
  ### Technologies
    Boostraps 
    PHP
    AJAX
    JQUERY

    ## HTML:
        ### Style: I set the style of the page the using Boostraps as it is a quicker and simpler option for a short exercise like this, I had thought of creating a anothe css file but I will have to create another file for it, making the exercise even loger, which I thought unnecessary in this case.

        ### Structure: 
            #### I added an H1 as a tittle

            #### a couple of inputs with the id first_number and 
            second_number so I could call them in the js file and the php file
            #### an input type button that will run the method sum() created in the js file when being clicked

            #### an H2 to indicate the result of the operation

            #### and finally a span with the id result that will display the result of the operation return from the php.

    ## JS: 
        ### I created to variables to store the val()/value of the imput entered in each of the input boxes, so I could reuse the data in both of the functions.

        ### Then create the function validate to make sure that the values entered could only be numbers, as otherwise the code would brake if enter letter or empty, with and if statement that will display and alert message in the page to remind the user that the input must be numeric

        #### and finally the function sum would firs validate() that the data is a number and then pass the params to ajax that will send them to the php file and if the procces is succsesful will then send it to the span in the html with the id result that will display it in the page
    
    ## PHP: 
        ### I store inside the variable result the sum of the first and second input and echo result to display the output of parameters that are passed to it to the js to be passed to the html for display.


