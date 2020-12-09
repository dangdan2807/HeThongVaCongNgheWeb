var userAgent = prompt("Please enter your age: ");
if(userAgent == 0)
    alert("so you`re a baby");
else if (userAgent < 0 || userAgent > 200)
    alert("I think you may be lying about your age");
else
    alert("That`s a good age");