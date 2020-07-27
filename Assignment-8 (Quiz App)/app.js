

// IDs and Class of elements that can be use to get the element.
var domStrings = {
    fname : "#first-name",
    lname:"#last-name",
    email:"#email",
    password:"#password",
    signup_btn : "#signup-btn",
    signup_link:"#signup-link",
    signup_form:"#signup-form",
    nav_links : ".nav-link",
    login_form:".login-form",
    login_email:"#login-email",
    login_password:"#login-password",
    login_btn : "#login-btn",
    login_link:"#login-link",
    topic_check_btn:".topic-check",
    welcome_window:"#welcome-window",
    start_quiz_btn:"#start-quiz-btn",
    question_id:"#question-id",
    question:"#question",
    option_btn:".option-btn",
    next_btn:"#next-btn",
    topic_name:"#topic-name",
    time:{
        min:"#min",
        sec:"#sec",
    },
    quiz_window:"#quiz-window",
    loader_window:"#loader-window",
    result_window:"#result-window",
    user_name:"#user-name",
    correct_answers:"#correc-ans",
    percentage:"#percentage",
    score:"#score",
    result_btn:"#result-btn",
    quiz_result_type:"#quiz-result-type",
    result_img:"#result-img",
    remarks:"#remarks",
    start_quiz_link:"#start-quiz",
    loadeR_heading:"#loader-heading",
}


// This Data structure is use to store the user data, fetch the questions, and create result card.

var data = {
    questions:{
        html5:[], // All the html questions goes here
        css3:[],  // All the CSS questions goes here
        javascript:[],    // All the Javascript Questions goes here.
    },
    fetch_question:{
        que:[]
    },
    user_data:{
        user_name:"", //Will be set when the user login with their account
        email:"",     //Will be set when the user login with their account
    },

    //Display card will contain the type of quiz, username, their marks that he got and percentage
    user_result:{
        type_of_quiz:"", 
        total_marks:0,
        percentage:0
    }
};

// function constructor for questions
var Questions = function(id,question, options, correctAns)
{
    this.id=id;
    this.question =question;
    this.options = options;
    this.correctAns = correctAns;

}

Questions.prototype.check_answers = function(ans){
    if(ans===this.correctAns)
    {
        data.user_result.total_marks+=2;
        console.log(data.user_result.total_marks);
    }
}

// Questions.prototype.show_question = function(){
//     console.log(this.question);
// }

// Questions Instances

// html Questions
var q1 = new Questions(1,"What does HTML stand for?",["Hyperlinks and Text Markup Language", "Hyper Text Markup Language", "Home Tool Markup Language","High Text Machine Language"], "Hyper Text Markup Language");
var q2 = new Questions(2,"Choose the correct HTML element for the largest heading:",["<head>", "<h1>", "<heading>","<h6>"], "<h1>");
var q3 = new Questions(3,"What is the correct HTML element for inserting a line break?",["<br>", "<lb>", "<break>","None of these"], "<br>");
var q4 = new Questions(4,"Choose the correct HTML element to define important text",["<b>", "<strong>", "<important>","<i>"], "<strong>");
var q5 = new Questions(5,"Choose the correct HTML element to define emphasized text",["<em>", "<i>", "<italic>","<emphasized>"], "<em>");
var q6 = new Questions(6,"How can you open a link in a new tab/browser window?",['<a href="url" target="_blank">', '<a href="url" new>', '<a href="url" target="new">','<a href="url" target="new_window">'], '<a href="url" target="_blank">');
var q7 = new Questions(7,"How many heading tags are there in HTML5?",["5", "6", "7","4"], "6");
var q8 = new Questions(8,"How can you make a numbered list?",["<ul>", "<ol>", "<list>","<dl>"], "<ol>");
var q9 = new Questions(9,"How can you make a bulleted list?",["<ul>", "<ol>", "<list>","<dl>"], "<ul>");
var q10 = new Questions(10,"What is the correct HTML for making a checkbox?",['<input type="check">', "<checkbox>", "<check>",'<input type="checkbox">'], '<input type="checkbox">');
var q11 = new Questions(11,"What is the purpose of using div tags in HTML?",["For creating Different styles.", "For creating different sections.", "For adding headings","For adding titles"], "For creating different sections");
var q12 = new Questions(12,"What is the correct HTML for making a text input field?",['<textinput type="text">', '<input type="textfield">', '<textfield>','<input type="text">'], '<input type="text">');
var q13 = new Questions(13,"Which among the following is the correct way in HTML to insert an image?",['<img url="https://bit.ly/2FicgIx">Quiz App</img>', '<img href="https://bit.ly/2FicgIx" alt= “quizApp”></img>', '<img src="https://bit.ly/2FicgIx" alt="Geeksforgeeks" alt="QuizApp">','<image src="https://bit.ly/2FicgIx" alt="Geeksforgeeks"></image>'], "Hype Text Markup Language");
var q14 = new Questions(14,"HTML file is saved by which extension?",[".htl", ".html", ".hml",".hmtl"], ".html");
var q15 = new Questions(15,"Purpose of caption Tag in HTML?",["It is used to display the Title for table at the top", "Is used to display the Title for table at the bottom", "Both","None"], "It is used to display the Title for table at the top");
var q16 = new Questions(16,"How can we resize the image?",["Using resize attribute", "Using height and width", "Using size attribute","Using rs attribute"], "Using height and width");
var q17 = new Questions(17,"How to do comment in HTML?",["<!--------->", "//", "/*   */","none"], "<!--------->");
var q18 = new Questions(18,"This is an instruction to the web browser about what version of HTML",["<!DOCTYPE>", "<DOCTYPE>", "<TYPE>","<!TYPE>"], "<!DOCTYPE>");
var q19 = new Questions(19,"Which of the following is block level element?",["<a>", "<label>", "<p>","<img>"], "<p>");
var q20 = new Questions(20,"Choose the correct HTML element for the smallest heading:",["<heading>", "<h6>", "<h1>","<h5>"], "<h6>");
 

// Push all these html questions in html arrays
data.questions.html5.push(q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12,q13,q14,q15,q16,q17,q18,q19,q20);


//Javascript questions

var q21 = new Questions("1", "Inside which HTML element do we put the JavaScript?",["<Scripting>","<JS>","<script>","<javascript>"],"<script>");
var q22 = new Questions("2", "Which of the following is correct about features of JavaScript?",["JavaScript is integrated with HTML","JavaScript is open and cross-platform.","Both of the above","All of the above."],"Both of the above");
var q23 = new Questions("3", "Which built-in method returns the character at the specified index?",["characterAt()","getCharAt()","charAt()","None of the above."],"charAt()");
var q24 = new Questions("4", "Which of the following function of String object returns the calling string value converted to upper case?",["toLocaleUpperCase()","toUpperCase()","toString()","substring()"],"toUpperCase()");
var q25 = new Questions("5", "Which of the following function of Array object extracts a section of an array and returns a new array?",["reverse()","shift()","slice()","some()"],"slice()");
var q26 = new Questions("6", "Where is the correct place to insert a JavaScript?",["The <head> section","The <body> section","Both the <head> and the <body> section are correct","None of these"],"Both the <head> and the <body> section are correct");
var q27 = new Questions("7", "How do you write 'Hello World' in an alert box?",["alert('Hello World')","msgBox('Hello World')","prompt('Hello World')","alertBox('Hello World')"],"alert('Hello World')");
var q28 = new Questions("8", "How do you create a function in JavaScript?",["function = myFunction()","function myFunction()","var function = myFunction()","myFunction()"],"var function = myFunction()");
var q29 = new Questions("9", "How do you call a function named 'myFunction'?",["myFunction()","call myFunction()","function myFunction()","None of these"],"myFunction()");
var q30 = new Questions("10", "What is DOM?",["Document Object Model","Document Oriented Model","Data Object Model","Data Oriented Model"],"Document Object Model");
var q31 = new Questions("11","How to write an IF statement in JavaScript?",["if i == 5 then","if i = 5","if (i == 5)","if i = 5 then"],"if (i == 5)");
var q32 = new Questions("12", "How does a WHILE loop start?",["while i = 1 to 10","while (i <= 10)","while (i <= 10; i++)","while i<10: i++"],"while (i <= 10)");
var q33 = new Questions("13", "How does a FOR loop start?",["for i = 1 to 5","for (i = 0; i <= 5)","for (i <= 5; i++)","for (i = 0; i <= 5; i++)"],"for (i = 0; i <= 5; i++)");
var q34 = new Questions("14", "How can you add a comment in a JavaScript?",["'This is a comment","<!--This is a comment-->","//This is a comment"," /*This is a comment*/"],"//This is a comment");
var q35 = new Questions("15", "What is the correct way to write a JavaScript array?",['var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")','var colors = "red", "green", "blue"','var colors = ["red", "green", "blue"]','var colors = (1:"red", 2:"green", 3:"blue")'],'var colors = ["red", "green", "blue"]');
var q36 = new Questions("16", "How do you round the number 7.25, to the nearest integer?",["round(7.25)","rnd(7.25)","Math.rnd(7.25)","Math.round(7.25)"],"Math.round(7.25)");
var q37 = new Questions("17", "Which event occurs when the user clicks on an HTML element?",["onchange","onmouseclick","onclick","onmouseover"],"onclick");
var q38 = new Questions("18", "How do you declare a JavaScript variable?",["var carName;","variable carName;","v carName;","carName;"],"var carName;");
var q39 = new Questions("19",  "Which operator is used to assign a value to a variable?",["-","==","=","X"],"=");
var q40 = new Questions("20", "Choose the correct JavaScript syntax to change the content of the following HTML code.",["document.getElement('p').innerHTML='hello world';","document.getElementById(“p”).innerHTML=”hello world”;","document.getId('p')=”Hello world”;","document.getElementById('p').innerHTML=Hello world;"],"document.getElement('p').innerHTML='hello world';");


// Push all javascript question to the js arrays.

data.questions.javascript.push(q21,q22,q23,q24,q25,q26,q27,q28,q29,q30,q31,q32,q33,q34,q35,q36,q37,q38,q39,q40);

// Create Account Code

var addUser = function(firstName, lastName, email, password){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
};


var account_login = false;


//Function the collects the input field of create account form
var getInput = function(){
    var fname = document.querySelector(domStrings.fname).value;
    var lname = document.querySelector(domStrings.lname).value;
    var email = document.querySelector(domStrings.email).value;
    var password = document.querySelector(domStrings.password).value;

    return {
        firstName : fname,
        lastName : lname,
        email : email,
        password : password
    }
}

var checkExistenceEmail = function(email, arr){
    var isExist = false;

    arr.forEach(function(curr){
        if(curr.email===email)
        {
            isExist = true;
        }
    });
    return isExist;
}

var validation = function(event, obj)
{
    if(obj.firstName==="" || obj.lastName==="" || obj.email==="" || obj.password==="")
    {
        alert("Please Fill All the field");
        event.preventDefault();
        return false;
    }
    else 
    {
        return true;
    }
}

var users = []; // Here all the users data stored that will created account. 

var createAccount = function(event){
    // Taking Input of all fields
    var inputs = getInput();

    // Check Validation
    var isValid = validation(event, inputs); // Event is use to stop the reload when click on submit button

    // Check Email Existence
    if(isValid===true)
    {
    var check = checkExistenceEmail(inputs.email, users);

    // Create instance of addUser if check is true else give error
    if(check===false)
    {
        var usr = new addUser(inputs.firstName, inputs.lastName, inputs.email, inputs.password);
        //Add User in userArrays; 
        users.push(usr);
        
        clearFields();
        alert("Account created Sucessfully");
    }
    else 
    {
        alert("Email Already Exists");
    }
    
    event.preventDefault();
}
};




//show create account form
var show_createAcc_form = function(event){
    if(account_login!=true)
    {
    event.preventDefault();
    document.querySelector(domStrings.signup_form).classList.remove("hide-form");
    
    //remove active classes on other links
    var links = document.querySelectorAll(domStrings.nav_links);
    links = Array.prototype.slice.call(links);

    links.forEach(function(curr){
        curr.classList.remove("active");
    })

    //add active class on current link
    this.classList.add("active");

    // hide all other sections
    document.querySelector(domStrings.login_form).classList.add("hide-form");
}
else{
    event.preventDefault();
    alert("Please reload this page to create an another account!. You already login")
}

}



// Login Form Code 
var getInputs_loginForm = function(){
    var login_email = document.querySelector(domStrings.login_email).value;
    var login_password = document.querySelector(domStrings.login_password).value;

    return {
        loginEmail : login_email,
        loginPassword: login_password,
    }
}

var checkEmptyFields = function(event, obj){
    var isEmpty = false;
    if(obj.loginEmail==="" || obj.loginPassword==="")
    {
        alert("Please Fill All the field");
        event.preventDefault();
        isEmpty = true
    }
    else
    return isEmpty;

}

var matchCredentials = function(email,pass, usersArr){
    var isExist = false;

    usersArr.forEach(function(curr){
       if(curr.email===email && curr.password===pass)
       {
           isExist=true;
           data.user_data.user_name=curr.firstName+" "+curr.lastName;
       }
    });

    return isExist;
    
    
}


var login = function(event){
    
    //Get input values
    var inputs = getInputs_loginForm();
    console.log(inputs);
    //check empty fields
    var check = checkEmptyFields(event, inputs);
    
    //Match with users
    var checkMatched = matchCredentials(inputs.loginEmail,inputs.loginPassword, users);
    //Login Success if matched else error
    console.log(checkMatched);
    if(checkMatched===true && check===false)
    {
        alert("Login Successfully");
        document.querySelector(domStrings.login_form).classList.add("hide-form");
        document.querySelector(domStrings.welcome_window).classList.remove("hide-form");
         //remove active classes on other links
        var links = document.querySelectorAll(domStrings.nav_links);
        links = Array.prototype.slice.call(links);
    
        links.forEach(function(curr){
            curr.classList.remove("active");
        })
        
        document.querySelector(domStrings.start_quiz_link).classList.add("active");
        clearFields();

        account_login = true;


    }
    else if(checkMatched!=true)
    {
        alert("Account not valid");
    }

    event.preventDefault();
}


var show_login_form = function(event){
    if(account_login!=true)
    {
    document.querySelector(domStrings.login_form).classList.remove("hide-form")

    //remove active classes on other links
     var links = document.querySelectorAll(domStrings.nav_links);
     links = Array.prototype.slice.call(links);
 
     links.forEach(function(curr){
         curr.classList.remove("active");
     })
 
     //add active class on current link
     this.classList.add("active");
     event.preventDefault();
 
     // hide all other sections
     document.querySelector(domStrings.signup_form).classList.add("hide-form");
    }
    else
    {
        alert("account already login");
        event.preventDefault();
    }
 
}

var timing_var;
var removeLoader = function(){
    document.querySelector(domStrings.loader_window).classList.add("hide-form");
    show_question();
    timing_var = setInterval(timer,1000);
    document.querySelector(domStrings.quiz_window).classList.remove("hide-form");
}


var clearFields = function(){
    document.querySelector(domStrings.fname).value="";
    document.querySelector(domStrings.lname).value="";
    document.querySelector(domStrings.email).value="";
    document.querySelector(domStrings.password).value="";
    document.querySelector(domStrings.login_email).value="";
    document.querySelector(domStrings.login_password).value="";
        // Uncheck all radio buttons when start quiz button clicked
        radio_btns.forEach(function(curr){
            curr.checked=false;
         })  ;
    
         // Hide all the content when start quiz button clicked
    
         radio_btns.forEach(function(curr){
            curr.parentNode.nextElementSibling.style.display="none";
            curr.parentNode.nextElementSibling.nextElementSibling.style.display="none";
            curr.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.style.display = "none";
        
            });
     

}




//-----------------------------------------------------Quiz Welcome Window-----------


//get Radio Buttons
var radio_btns = document.querySelectorAll(domStrings.topic_check_btn);

// Convert radio_btns nodelist to arrays
radio_btns = Array.prototype.slice.call(radio_btns);

// Code to show the content on specific radion button click
var show_topic_list = function(){
    radio_btns.forEach(function(curr){
    curr.parentNode.nextElementSibling.style.display="none";
    curr.parentNode.nextElementSibling.nextElementSibling.style.display="none";
    curr.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.style.display = "none";

    });
    this.parentNode.nextElementSibling.style.display="block";
    this.parentNode.nextElementSibling.nextElementSibling.style.display="block";
    this.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.style.display = "block";

}
var type="html5";
var start_quiz = function(){
    var isradioBtn_Clicked = false;
    radio_btns.forEach(function(curr){
        if(curr.checked===true) //Check which element is checked
        {
            type = curr.parentNode.textContent; //Fetch the text content of checked element.
            isradioBtn_Clicked = true;
        }
    })  

    if(isradioBtn_Clicked!=false)
    {

    type = type.trim(); //Remove all white spaces from the textcontent
    type = type.toLowerCase();
    var ques=data.questions[type.toLowerCase()];
    data.fetch_question.que = ques;
    console.log(data.fetch_question.que);
    document.querySelector(domStrings.welcome_window).classList.add("hide-form");
    data.user_result.type_of_quiz=type.toLowerCase();
    document.querySelector(domStrings.loader_window).classList.remove("hide-form");
    
    setTimeout(removeLoader,1000);
    
    clearFields();

    }
    else
    {
        alert("Please select the topic first!");
    }

    
}

//--------------------Quiz Welcome Window End---------------

var count = 0;

// Get all the options button
var optionBtns = document.querySelectorAll(domStrings.option_btn);
optionBtns = Array.prototype.slice.call(optionBtns);


//Show quiz questions
var show_question = function(){
    if(count<20)
    {
    var topicName = document.querySelector(domStrings.topic_name).textContent;
    topicName = topicName.replace("%type%",type);
    document.querySelector(domStrings.topic_name).textContent=topicName;
    var id = data.questions[type][count].id;
    var question = data.questions[type][count].question;
    var options = data.questions[type][count].options;
    var correctAns = data.questions[type][count].correctAns;
    console.log(question);
    //Display ID
    document.querySelector(domStrings.question_id).textContent = id;
    //Display Question
    document.querySelector(domStrings.question).innerHTML=question;
    
    //Show options on buttons
    optionBtns.forEach(function(curr, index){
        curr.textContent = options[index];
    });
    count++;
}
}

// change style of button when any option is selected
var selectedAns="";
var option_btn_clicked = function(){
    remove_optionBtn_checked_class();
    this.classList.add("option-btn-checked");
    selectedAns = this.textContent;
    isOptionSelected =true;
}


var remove_optionBtn_checked_class = function(){
    optionBtns.forEach(function(curr, index){
        curr.classList.remove("option-btn-checked");
    })
}

var lastClicked = 0, loader_text = "";
var NextFunction = function(){
    if(selectedAns!=="")
    {
    data.questions[type][count-1].check_answers(selectedAns);
    show_question();
    remove_optionBtn_checked_class();
    selectedAns="";
    lastClicked++;
    if(lastClicked===count)
    {
        document.querySelector(domStrings.loader_window).classList.remove("hide-form");
        loader_text = "We are creating your result, Please wait..."
        document.querySelector(domStrings.loadeR_heading).textContent=loader_text;
        // result();
        document.querySelector(domStrings.quiz_window).classList.add("hide-form");
        setTimeout(generate_result_after_loader,3000);
        console.log(data.user_result.percentage);
        clearInterval(timing_var);
    }
    }
    else 
    {
        alert("Please choose your answer!");
    }
}



// Timer Function
var sec =0;
var min=0;

var timer = function(){
    sec++;
    if(sec<10)
    {
    sec = "0"+sec;
    }
   
    if(sec>59)
    {
        min++;
      
        sec=0;
       
    }
    document.querySelector(domStrings.time.sec).textContent = sec;
    if(min<10)
    {
        document.querySelector(domStrings.time.min).textContent ="0"+ min;
    }else
    {
        document.querySelector(domStrings.time.min).textContent =min;
    }

    console.log("run");
   
}


// calculate percentage
var percentage = function(usr_marks){
    data.user_result.percentage= Math.floor((usr_marks/40)*100);
}


var result_display = {
    pass:{
        src:"image/congratulation.jpg",
        remarks:"You did great!"
    },
    fail:{
        src:"image/fail.png",
        remarks:"Grap the concepts and then try again"
    }
}

// Show result
var result = function(){
   document.querySelector(domStrings.quiz_window).classList.add("hide-form");  
   percentage(data.user_result.total_marks);
   var check_percentage = data.user_result.percentage;
   if(check_percentage>=50)
   {
       document.querySelector(domStrings.result_img).src = "image/congratulation.jpg";
       document.querySelector(domStrings.remarks).textContent = "You did great!";
   }else if(check_percentage<50)
   {
    document.querySelector(domStrings.result_img).src = "image/fail.png";
    document.querySelector(domStrings.result_img).style.height = "130px";
    document.querySelector(domStrings.remarks).textContent = "Grap the concepts and then try again";
   }
   document.querySelector(domStrings.user_name).textContent = data.user_data.user_name;
   document.querySelector(domStrings.correct_answers).textContent = data.user_result.total_marks/2;
   document.querySelector(domStrings.score).textContent = data.user_result.total_marks;
   document.querySelector(domStrings.percentage).textContent = data.user_result.percentage+"%";
   document.querySelector(domStrings.quiz_result_type).textContent = type;
   document.querySelector(domStrings.result_window).classList.remove("hide-form");  

}

// Go to home page

var reset = function(){
    type="";
    count=0;
    lastClicked=0;
    selectedAns="";
    data.user_result.percentage=0;
    data.user_result.total_marks=0;
    data.user_result.type_of_quiz="";
    document.querySelector(domStrings.topic_name).textContent="%type% Quiz!";
    loader_text = "Be patience! Questions is loading..."
    document.querySelector(domStrings.loadeR_heading).textContent=loader_text;
    clearInterval(timing_var);
    document.querySelector(domStrings.time.sec).textContent="00";
    document.querySelector(domStrings.time.min).textContent="00";
    sec =0;
    min=0;
    
}


var goToHomePage = function(){

    document.querySelector(domStrings.result_window).classList.add("hide-form");
    document.querySelector(domStrings.welcome_window).classList.remove("hide-form");
    reset();
}


var generate_result_after_loader = function(){
    document.querySelector(domStrings.loader_window).classList.add("hide-form");
    result();    
    document.querySelector(domStrings.result_window).classList.remove("hide-form");

}


var initialize = function(){
    //Get signup button and add eventListener
    document.querySelector(domStrings.signup_btn).addEventListener("click", createAccount);

    //Click on signup nav-item to show create account form
    document.querySelector(domStrings.signup_link).addEventListener("click",show_createAcc_form);

    //Click on login button and add eventListener
    document.querySelector(domStrings.login_btn).addEventListener("click",login);

    //Click on login nav-item to show login form
    document.querySelector(domStrings.login_link).addEventListener("click",show_login_form);

    //Add Event Listener to all radio btns
    radio_btns.forEach(function(curr){
    curr.addEventListener("click", show_topic_list);
    })

    //Add event lister to start quiz button
    document.querySelector(domStrings.start_quiz_btn).addEventListener("click", start_quiz);

    // Add event listener on option buttons
    optionBtns.forEach(function(curr){
        curr.addEventListener("click", option_btn_clicked);


    // Add event listener to next button
    document.querySelector(domStrings.next_btn).addEventListener("click", NextFunction);

    //Add Event Listener to go to homepage button
    document.querySelector(domStrings.result_btn).addEventListener("click", goToHomePage);


})


}

initialize();



