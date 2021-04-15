var k;
//using for loop for adding comments to individual review
for(k=1; k<5; k++){ 
    let com = ".cmnt" +k;
    let cma =".cmntadd" + k;

$(com).click(function(){
    let foo = prompt('Please add your comment here');
    if (foo===null) return;
    if (foo!=""){
    $(cma).html("COMMENT:<br></br> " + foo);
    
     $(this).hide();}

}
    
)}
var i ;

//using for loop for opening tet on click
for(i=1; i<5; i++){
    
let re= ".r" + i ;
let hid =".hidden" + i;
let sha =".shadow" + i;
let fin = "#fine" + i;
$(re).click(function(){

$(hid).show();
$(sha).hide();
$(fin).removeClass("fine")

})}
