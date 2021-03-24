function SayHello(){
    let current_value = document.getElementById("textarea_1").value; 
    let new_value = "Hello world!" + "\n" + current_value;
    document.getElementById("textarea_1").innerHTML = new_value;
}