var colours= ['red', 'blue', 'yellow', 'lightgrey', 'darkorchid', 'black', 'orange', 'deeppink', 'green', 'purple', 'saddlebrown', 'lightseagreen', 'deepskyblue', 'firebrick', 'crimson']
var basket = $("#basket");
/*$("input").on(click,function(e){
    basket.append('<div class="balls" style="background-color: ' + colours[Math.floor(Math.random()*15)]+ '"></div>');
    i=i+1;
});
*/

$("button").click(function(e) {
    basket.append('<div class="balls" style="background-color: ' + colours[Math.floor(Math.random()*15)] + '"></div>');
});
