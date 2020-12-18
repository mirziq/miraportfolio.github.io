//Portfolio filter

const filterContainer = document.querySelector(".portfolio-filter"),
      filterBtns = filterContainer.children,
      totalFilterBtn = filterBtns.length,
      portfolioItems = document.querySelectorAll(".portfolio-item"),
      totalPortfolioItem = portfolioItems.length;

      for(let i=0; i<totalFilterBtn; i++){
            filterBtns[i].addEventListener("click", function(){
            filterContainer.querySelector(".active").classList.remove("active");
            this.classList.add("active");

            const filterValue = this.getAttribute("data-filter");
            for(let k=0; k<totalPortfolioItem; k++){
                if(filterValue === portfolioItems[k].getAttribute("data-category")){
                    portfolioItems[k].classList.remove("hide");
                    portfolioItems[k].classList.add("show");
                }
                else{
                    portfolioItems[k].classList.remove("show");
                    portfolioItems[k].classList.add("hide");
                }
                if(filterValue === "all"){
                    portfolioItems[k].classList.remove("hide");
                    portfolioItems[k].classList.add("show");
                }
            }
          })
      }

function validation(){
    /*var name = document.forms["form"]["fname"].value;
    var email = document.forms["form"]["email"].value;
    var sub = document.forms["form"]["sub"].value;
    var msg = document.forms["form"]["msg"].value;*/

    if(document.form.name.value == "" ) {
        alert( "Please provide your name!" );
        document.form.name.focus() ;
        return false;
    }
    if(document.form.email.value == "" ) {
        alert( "Please provide your email!" );
        document.form.email.focus() ;
        return false;
    }
    if(document.form.sub.value == "" ) {
        alert( "Please provide your subject!" );
        document.form.sub.focus() ;
        return false;
    }
    if(document.form.msg.value == "" ) {
        alert( "Please provide your message!" );
        document.form.msg.focus() ;
        return false;
    }
    alert("Thank you for your message! I'll respond as soon as possible");
    return( true );
    
    
}