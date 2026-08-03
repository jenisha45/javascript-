//try and catch in js
let result=10/0;
try{
    if(result==Infinity){
        throw new Error("Division by zero is not allowed");
    }
}
catch(error){
    console.error(error.message);
}
finally{
    console.log("Execution completed");
}   

// userdefined exception handling

function checkAge(age){
    if(age<18){
        throw new Error("Age must be 18 or above");
    }
    else{
        console.log("Age is valid");
    }           
}
try {
    checkAge(16);
} catch (error) {
    console.error(error.message);
}