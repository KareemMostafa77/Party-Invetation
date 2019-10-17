// To Set hight Of WebSie Automaic for window of user device
$("header").height($(window).outerHeight(true));



$(".sideMenu_btn").click(function(){
    let x = $(".sideMenu").innerWidth()+"px";
    $(".sideMenu").show(1000).css("position","fixed");
    $(".layout").animate( {width:'-='+x,left:x},1000);
    $(".sideMenu_btn").slideUp(1000);
    
    
    
});

$(".esc-btn").click(function(){
    
    $(".sideMenu").hide(1000);
    $(".layout").animate( {width:'100%',left:0},1000);
    $(".sideMenu_btn").slideDown(1000);
    
});

// for scrolling on sections 

$("a[href='#home']").click(function(){
    
    let homeOffset = $("#home").offset().top;
    $("body,html").animate({scrollTop:homeOffset},1000);
    $(".layout").animate( {width:'100%',left:0},1000);
    $(".sideMenu").hide(1000);
    $(".sideMenu_btn").slideDown(1000);
})

$("a[href='#details']").click(function(){
    
    let homeOffset = $("#details").offset().top;
    $("body,html").animate({scrollTop:homeOffset},1000);
    $(".layout").animate( {width:'100%',left:0},1000);
    $(".sideMenu").hide(1000);
    $(".sideMenu_btn").slideDown(1000);
})

$("a[href='#duration']").click(function(){
    
    let homeOffset = $("#duration").offset().top;
    $("body,html").animate({scrollTop:homeOffset},1000);
    $(".layout").animate( {width:'100%',left:0},1000);
    $(".sideMenu").hide(1000);
    $(".sideMenu_btn").slideDown(1000);
})

$("a[href='#contact']").click(function(){
    
    let homeOffset = $("#contact").offset().top;
    $("body,html").animate({scrollTop:homeOffset},1000);
    $(".layout").animate( {width:'100%',left:0},1000);
    $(".sideMenu").hide(1000);
    $(".sideMenu_btn").slideDown(1000);
})

// End Js OF Header

$(".s2-info h3").click(function(){
    $(this).next().slideToggle(1000);
    $(".s2-info p") .not($(this).next()).slideUp(1000);
});

// End Of Section 2 

function countDown(){
    
    let now = new Date();
    let partyDate = new Date(2020,1,1);
    
    let time = now.getTime();
    let partyTime = partyDate.getTime();
    
    let remTime = partyTime - time;
    
    let s = Math.floor(remTime/1000);
    let m = Math.floor(s/60);
    let h = Math.floor(m/60);
    var d = Math.floor(h/24)-30;
    
    h %= 24;
    m %= 60;
    s %= 60;
    
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s; 
    
    $(".days").html("<h2>"+d+"</h2> <h5>Days</h5> ");
    $(".hours").html("<h2>"+h+"</h2> <h5>Hours</h5> ");
    $(".Mins").html("<h2>"+m+"</h2> <h5>Mintues</h5> ");
    $(".secs").html("<h2>"+s+"</h2> <h5>Seconds</h5> ");
    
    setTimeout(countDown, 1000);
}

countDown();

// End Of Section 3

// to show number of remaining letters on message

$(function(){
    
    $(".charNum").text(100);
    let max=100;
    $(".ta").keyup(function(){
        
        let remLength=max-$(this).val().length;
        
        if(remLength<=0)
            $(".charNum").text("your available character finished");
        else
            $(".charNum").text(remLength);
        
    })
})

