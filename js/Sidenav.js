export function OpenNav(){
  


    if($(".nav-side").css("left") === "0px"){
       
        $(".nav-side").animate({"left": - $(".nav-side").outerWidth(true)}, 500)
        $(".nav-bar").animate({"left": "0px"}, 500)
        $(".nav-menu").html('<i class="fa-solid fa-bars text-black fa-2x "></i>')
        $(".menu-li").animate({"paddingTop":"250px","opacity":"0"},1000)
      
    }else{
        $(".nav-side").animate({"left": 0}, 500)
        $(".nav-bar").animate({"left": $(".nav-side").outerWidth(true)}, 500)
        $(".nav-menu").html('<i class="fa-solid fa-xmark text-black fa-2x"></i>')
        $(".menu-li").animate({"paddingTop":"25px","opacity":"1"},1000)
       
    }


}