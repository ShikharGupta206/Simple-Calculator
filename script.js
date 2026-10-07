let out=document.getElementById("display");

function addValue(value){
    if(out.value=="0"){
        out.value=value;

    }
    else{
        out.value+=value;
    }

}
function clearDisplay(){
    out.value=0;
}

function deleteLast(){
       out.value = out.value.slice(0, -1);

    if (out.value === "") {
        out.value = "0";
    }
}


function calculate() {
    try {
        out.value = eval(out.value);
    } catch (error) {
        out.value = "Error";
    }
}