var textBox = document.querySelector("#input-number");
var buttons = document.querySelectorAll("button");
var clear = document.querySelector("#clear-textbox");
var deleteAnumber = document.querySelector("#delete-number");
var controller = document.querySelector("#controller");



//clear Function
var clearDisplay = function(){
    textBox.value="";
    document.querySelector("#exp-display").innerText=0;

}

// Calculation Function
var calculation = function(){
try{
    var ans;
    var aa;
    document.querySelector("#exp-display").innerText=textBox.value;
    ans = eval(textBox.value); //Using evaluate function to perform complex expression also.
    aa = ans.toString();
    if(aa.includes("."))
    {
        textBox.value = ans.toFixed(5);
    }
    else
    {
        textBox.value = ans;


    }
}
catch(error)
{
    textBox.value="Error!";
    document.querySelector("#exp-display").innerText=0;;

}
}

// Display button values to the textBox
for(var i=0;i<buttons.length;i++)
{

    if(buttons[i].getAttribute("id")==="controller")
    {
        continue;
    }
    buttons[i].addEventListener("click",function(){
         textBox.value  += this.textContent;
    }
    );
}

// Clear Textbox
clear.addEventListener("click",clearDisplay);

//Delete a number
var removeAnum = function(){
    var val = document.querySelector("#input-number").value.slice(0,textBox.value.length-1);
    textBox.value=val;
}


deleteAnumber.addEventListener("click",removeAnum);
controller.addEventListener("click",calculation);
document.addEventListener("keypress",function(event){

    switch(event.keyCode)
    {
        case 48:
            textBox.value+="0";
        break;
        case 49:
            textBox.value+="1";
        break;
        case 50:
            textBox.value+="2";
        break;
        case 51:
            textBox.value+="3";
        break;
        case 52:
            textBox.value+="4";
        break;
        case 53:
            textBox.value+="5";
        break;
        case 54:
            textBox.value+="6";
        break;
        case 55:
            textBox.value+="7";
        break;
        case 56:
            textBox.value+="8";
        break;
        case 57:
            textBox.value+="9";
        break;
        case 43:
            textBox.value+="+";
        break;
        case 45:
            textBox.value+="-";
        break;
        case 42:
            textBox.value+="*";
        break;
        case 47:
            textBox.value+="/";
        break;
        case 13:
            {
               calculation();
            }
        break;
       
    }
})

document.addEventListener("keyup",function(event)
{
    if(event.keyCode===8) // Backspace Key
    {
        removeAnum();
    }
    else if(event.keyCode===46) // Delete key to clear screen
    {
        clearDisplay();
    }

});