$('document').ready(()=>{

    $(window).scroll(()=>{
        // console.log(this.pageYOffset+"  "+this.innerHeight)
        if(this.pageYOffset>this.innerHeight)
        {
            $(".navb").addClass('top')
        }
        else
            $(".navb").removeClass('top')
            // console.log(window)
    })

    $(window).scroll(()=>{
        const tal=$(document).height()-window.innerHeight//gives webpage height
         const percentageCovered=(this.pageYOffset/tal)*100
        // console.log(this.pageYOffset+" "+tal+"  "+percentageCovered)
        $(".slider").css("width",percentageCovered+"vw")
    })







}
)