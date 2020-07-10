var seconds = document.querySelector(".sec");
var milliSec = document.querySelector(".millisec");
var hour = document.querySelector(".hour");
var buttons = document.querySelectorAll("button"); 
var recordContainer = document.querySelector(".record-container");
var timerAssests = {
    milli :0,
    sec:0,
    min:0,
    record_timespan: {
        id:0,
    }
}
function timer(){

    var millisecond = timerAssests.milli++;
    milliSec.innerHTML = millisecond;
    if(millisecond===99)
    {
        var sec = ++timerAssests.sec;
        timerAssests.milli = 0;
        if(sec<10)
        seconds.innerHTML ="0"+ sec;
        else
        {
            seconds.innerHTML = sec;
        }

        if(sec===59)
        {
            timerAssests.sec=0;
            var mins= ++timerAssests.min;
            hour.innerHTML=mins;
        }
    }
}





var interval, stopCheck;
//Start Button
buttons[0].addEventListener("click", function(){
    interval = setInterval(timer,10);
   stopCheck=false;
})



//Stop Button
buttons[1].addEventListener("click", function(){
    clearInterval(interval);
    stopCheck =true;

})

function reset(){
    clearInterval(interval);
    milliSec.innerHTML= "00";
    seconds.innerHTML="00";
    hour.innerHTML="00";
    recordContainer.innerHTML="";
    timerAssests.record_timespan.id=0;
    
}

//Reset Button
buttons[2].addEventListener("click", reset);


//Record Timespan
function recordTimespan(){
            

        if(stopCheck===false)
        {
            var html = '<h3><label for="" id="id_no">%id% -</label><label for="" id="time"> &nbsp; &nbsp; %time%</label></h3>';

            id = ++timerAssests.record_timespan.id;
            html = html.replace("%id%",id);
            var recordedTime = hour.innerHTML+":"+seconds.innerHTML+":"+milliSec.innerHTML;
            html = html.replace("%time%", recordedTime);
            recordContainer.insertAdjacentHTML("beforeend",html);
        }
}


//Record Button
buttons[3].addEventListener("click", recordTimespan);