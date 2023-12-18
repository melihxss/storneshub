window.addEventListener("DOMContentLoaded",(event)=>{
    var navbarMobile = function(){
        var nCollapsible = document.body.querySelector("#mainNavBar");
        if(!nCollapsible){
            return;
        }
        if (window.scrollY === 0) {
            nCollapsible.classList.remove("mainNavBarBg");
            
        } else {
            nCollapsible.classList.add("mainNavBarBg")
        }

    };
    navbarMobile();
    document.addEventListener("scroll",navbarMobile);
})

