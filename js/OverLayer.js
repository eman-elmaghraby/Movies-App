export function OverLayer(event){
    let $overView = $(event.currentTarget);
    let $overLayer = $overView.find(".over-layer");
    if( $overLayer.css("display") == "none"){
        $overLayer.fadeIn(500);
       $overView.find( $(".title").animate({"top": "10px", "left" : "0px"},500))
       $overView.find(  $(".rate").animate({"bottom": "0px", "left" : "0px"},500))
    
    }else{
        $overLayer.fadeOut(500);
        $overView.find($(".title").animate({"left": "-210px", "top" : "-100px"},500))
        $overView.find( $(".rate").animate({"bottom": "-210px", "left" : "-100px"},500))

    }
 
}