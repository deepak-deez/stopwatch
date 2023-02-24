showTime=document.querySelector('.show-time')
resetBtn=document.querySelector('.reset')
startBtn=document.querySelector('.start')
recordBtn=document.querySelector('.record')
resetRecordBtn=document.querySelector('.reset-record')
display=document.querySelector('.display')
 let counter1 =0;
let counter2=0;
let counter3=0;
let clicked=0;

startBtn.onclick=()=>{ 


if(!startBtn.classList.contains('pause')){
startBtn.classList.add('pause');
startBtn.innerHTML="Pause";

	timer=setInterval(function() {
	e1=print(counter1);
  e2=print(counter2);
  e3=print(counter3);
    showTime.innerHTML=`${e3}:${e2}:${e1}`;

    counter1 += 1;
    if(counter1==60){
    	counter2+=1;
      counter1=0;
    }
  if(counter2==60){
      counter3+=1;
      counter2=0;
    } 


  
}, 1000);
console.log(timer);

}
else{
 clearInterval(timer);
 startBtn.classList.remove('pause');
 startBtn.innerHTML='Resume';
}
 resetBtn.onclick=()=>{
        clearInterval(timer);
        showTime.innerHTML=`00:00:00`;
 startBtn.classList.remove('pause');
        startBtn.innerHTML="start";
        counter1=0;counter2=0;counter3=0;
       
    }


}
/* pauseBtn.onclick =()=>{
console.log("1");
} */

recordBtn.onclick=()=>{
   let list= document.createElement('li')
   list.innerHTML=showTime.innerHTML;
display.append(list);
}


resetRecordBtn.onclick=()=>{
    display.innerHTML="";
}


function print(counter){
if(counter<10)
return "0"+counter;
else
return counter;

}
console.log('I am a synchronous message');