export function UpIcon(){
    
$(window).scroll(()=>{
    if($(window).scrollTop() >$(".search").outerHeight(true)){
        $(".up-icon-container").fadeIn(200)
    }else{
        $(".up-icon-container").fadeOut(200)
    }
})
}