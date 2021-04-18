var k;
//using for loop for adding comments to individual review
for(k=1; k<5; k++){ 
    let com = ".cmnt" +k;
    let cma =".cmntadd" + k;
    let mng =".mng" + k;

$(com).click(function(){
    let foo = prompt('Please add your comment here');
    if (foo===null) return;
    if (foo!=""){   $(mng).css("display", "inline");
    $(cma).html("COMMENT:<br></br> " + foo);
    $(cma).css("background-color","rgb(211,211,211,0.2)");
     $(this).hide();}
}
    
)}
var i ;

//using for loop for opening text on click
for(i=1; i<5; i++){
    
let re= ".p" + i ;
let hid =".hidden" + i;
let sha =".shadow" + i;
let fin = "#fine" + i;
$(re).click(function(){

$(hid).show();
$(sha).hide();
$(fin).removeClass("fine")

})}





$(document).ready(function(){
    $('.menu-close').hide();

    $('.menu').click(function(){
        $('.menu-panel').toggleClass('show');
        $('.menu-background').toggleClass('show');
        $('.menu').hide();
        $('.menu-close').show();
    });
    $('.menu-close').click(function(){
        $('.menu-panel').removeClass('show');
        $('.menu-background').removeClass('show');
        $('.menu').show();
        $('.menu-close').hide();
    });
});
