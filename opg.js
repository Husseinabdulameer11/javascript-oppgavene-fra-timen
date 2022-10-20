//opg 1
function sum(nummerene=new Array(x,y,z)){
    return nummerene[0]+nummerene[1]+nummerene[2]
}
sum([1,2,3]);

// opg 2
function test(){
    let x = prompt("write a number"); 
    if((x%7) == 0){console.log("the result is divideable by 7 and the answer is: "+x/7);}
    else{
        console.log("the result is not divideable by 7 and the answer is: "+x/7);
        }
    }



    // opg 4
    var library=[{author:'bill gates',title:'the road ahead',readingStatus:true},{author:'Steve jobs',title:'walter isaacson',readingStatus:true},{author:'Suzanne collins',title:'Mockingjay: the final book of the hunger games',readingStatus:false}] 

    // opg 5
  
    function genererandomnummer(minimumnummer,maximumnummer){
        return Math.ceil(Math.random()*(maximumnummer-minimumnummer) + minimumnummer);
    }
      function OPGFEM(){
    let randomnummer = genererandomnummer(1,10);
    let brukersvar = prompt("guess the randomnumber that is between 1 and 10");
    if(brukersvar == randomnummer){
        alert("your guess is right");
    }
    else{alert(" your answer is wrong")}
    }
    