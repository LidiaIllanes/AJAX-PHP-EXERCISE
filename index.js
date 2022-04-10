// I store the imputs in two variables, the i create another variable i strore the parameters to pass onto the AJAX method,
let v1 = $('#first_number').val();
let v2 = $('#second_number').val();

function validate() {
    if ((v1 === "" || (/\D/.test(v1))) || (v2 === "" || (/\D/.test(v2)))) {
        alert("What you are trying to sum is not valid, enter a valid number!");
        return false;
    } else { return true }
}

function sum() {
    if (validate() === true) {
        let parameters = {
            'first_number': v1,
            'second_number': v2
        }
        $.ajax({
            data: parameters,
            url: 'index.php',
            type: 'post',
            success: function (response) {
                $("#result").html(response);
            }
        });
    }   
}
