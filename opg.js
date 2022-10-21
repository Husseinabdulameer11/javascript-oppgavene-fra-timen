//opg 1
function sum(nummerene=new Array(x,y,z)){
    let sum = 0;
    for(i = 0;i<nummerene.length;i++){
         if(isNaN(nummerene[i])){
           sum +=0;
         }else{
            sum+=nummerene[i];
         } 
     }
   return sum;
}
console.log(sum([1,2,3]));
console.log(sum([100,-200,3]));
console.log(sum([1,2,'a',3]));

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
    console.log(library[0].author +"  "+library[0].title+"  "+library[0].readingStatus);
     console.log(library[1].author +"  "+library[1].title+"  "+library[1].readingStatus);
     console.log(library[2].author +"  "+library[2].title+"  "+library[2].readingStatus);  
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
    
