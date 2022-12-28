const genratebtn = document.getElementById('pinBtn');
let input=document.getElementById('pinInput');
function Random(){
    let pin =Math.round (Math.random()*10000);
    let num=pin+"";
    if(num.length==4){
        return pin;
    }
    else{
        return Random();
    }
   
}
genratebtn.addEventListener('click',()=>{
    input.value=Random();
})


const calcBtn=document.getElementById('numberBtn');
const success=document.getElementById('yes');
const failed=document.getElementById('not');
calcBtn.addEventListener('click',(e)=>{
const num =e.target.innerText;
const valueInput = document.getElementById('valueInput');
if(num=='c'){
input.value="";
}
else if(num=='Submit'){
    const typedvalue = document.getElementById('valueInput').value;
    const RandomNum = document.getElementById('pinInput').value;
    if(RandomNum==typedvalue){
        success.style.display = "block";
        alert("Pin matched");
        failed.style.display = "none";
    }
    else{
        failed.style.display = "block";
        success.style.display = "none";
    }
}
else{

    let previousnum = valueInput.value;
    const newCalc = previousnum+num;
    valueInput.value=newCalc;
}
});




