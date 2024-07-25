const mybutton1 = document.getElementById('myButton1');

mybutton1.addEventListener('click', function() {
    var email = document.getElementById('input-email').value;
    var errorImage = document.getElementById('error-image');
    
    // Regular expression for validating email format
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (emailPattern.test(email)) {
      console.log(email);
      errorImage.style.display = 'none'; // Hide error image if email is valid
    } else {
      errorImage.style.display = 'block'; // Show error image if email is invalid
    }
  });

  //FORMAT_TO_FOLLOW
/*
1. Listen for a click event on the div with id="myButton"(on line).
2. Retrieve the value from the textarea(on line 4).
3. Validate the email format(on line 10).
4. Log the email value to the console
 if it is valid and remove the error image(on line 12).
5. Show an error image if the email format is incorrect.(on line 14)
*/
