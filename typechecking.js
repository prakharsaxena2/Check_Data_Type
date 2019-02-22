function checkdatatype(type)
{
     if(type===null)
   {
    console.log("Null");
    console.log(type);

   }
   
    
    else if(typeof(type)==='object'&& typeof(type[0])!=='object' )
    {
        console.log("array");
        type.map((x,i)=>{
            console.log(x);

        })
        
        
    
       
    }
    
     else if(typeof(type)==='object'&& typeof(type[0])==='object')
    {
        console.log("Array of object");
        //console.log(type);
        type.map((x,i)=>{
            console.log(x);

        })
       
    }

    else if(typeof(type)==='boolean')
    {
        console.log("Boolean");
        console.log(type);
    }
    else if(typeof(type)==='number')
    {
        console.log("Number");
        console.log(type);
    }
    else if(typeof(type)==='string')
   {
       console.log("String");
       console.log(type);
   }
   else if(typeof(type)==='undefined')
   {
    console.log("Undefined");
    console.log(type);

   }
   
   
   

   else if(typeof(type)==='NaN')
   {
    console.log("NaN");
    console.log(type); 
   }

    
    
}

   

array=[1,2,3,4]; //Array
object_array =[{"id":1},{"id":2}];   //Array of object
Boolean1=true;                      //Boolean test case1
Boolean2=false;                     //Boolean test case2
Number1=2;                          //Number
String1="Prakhar";                  //String
var g;                              //undefined test case

var nani=1-'w';                     //Nan test case
checkdatatype(array);               //Function call
checkdatatype(object_array);
checkdatatype(Boolean1);
checkdatatype(Boolean2);
checkdatatype(Number1);
checkdatatype(String1);
checkdatatype(g);
checkdatatype(null);

checkdatatype(nani);


