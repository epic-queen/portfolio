var typed = new Typed(".text", {
    strings: ["Data Analytics" , "Artificial Intelligence"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});


const toTop = document.querySelector(".top");
window.addEventListener("scroll",() =>{
    if (window.pageYOffset > 100){
        toTop.classList.add("active");
    }
    else{
        toTop.classList.remove("active");
    }
})


        const scriptURL = 'https://script.google.com/macros/s/AKfycbwAz2e68ekLppmM874HvSBPgoPqlyUsszPt3GR9Xon5xvnzO6hIq07rqNooUvB0SvoQMw/exec'
        const form = document.forms['submit-to-google-sheet']
        const msg = document.getElementById("msg")
      
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                msg.innerHTML = "Message sent successfully"
                setTimeout(function(){
                    msg.innerHTML = ""
                },5000)
                form.reset()
            })
            .catch(error => console.error('Error!', error.message))
        })
             