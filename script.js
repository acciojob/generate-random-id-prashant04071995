
function makeid(){

var res ="";
var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyx0123456789"
for (var i=0;i<l;i++){
    res+=char_list.charAt(
        Math.floor(
            Math.random()*char_list.length
            )
        )
    
}

return res;

}

const l = prompt("Enter a number.");
alert(makeid(l));
