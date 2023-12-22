$(document).ready(function(){

    // Check Internet Connected
    const isOnline = window.navigator.onLine

    const toastLiveExample = $('#liveToast')
    const toastBootstrap = new bootstrap.Toast(toastLiveExample[0])

    if (!isOnline) { toastBootstrap.show() }


    // Scroll Nav
    $(document).on("scroll", function() {
        if(window.scrollY > 400) {
            $(".navbar").addClass("shadow")
        }
        else {
            $(".navbar").removeClass("shadow")
        }
    })
  

    // Simple Login Validation
    $(".form-login").submit(function(e) {
        e.preventDefault()
        let email =  $("#inputEmail").val()
        let password =  $("#inputPassword").val()

        if(email.length == 0 && password.length == 0) {
            $(".alert > .text").text("ISI EMAIL DAN PASWORDNYA!!")
            $(".alert").removeClass("visually-hidden")
            $(".alert").addClass("alert-danger")
        }
        else if(email.length == 0 || password.length == 0) {
            $(".alert > .text").text("ISI EMAIL ATAU PASWORDNYA!!")
            $(".alert").removeClass("visually-hidden")
            $(".alert").addClass("alert-danger")
        }
        else {
            $(".alert > .text").text("MANTAP SELAMAT LOGIN")
            $(".alert").removeClass("visually-hidden alert-danger")
            $(".alert").addClass("alert-success")
        }
    })

     // Simple Join Validation
     $(".form-join").submit(function(e) {
        e.preventDefault()
        let username =  $("#inputUsername").val()
        let email =  $("#inputEmail").val()
        let password =  $("#inputPassword").val()

        if(username.length == 0 && email.length == 0 && password.length == 0) {
            $(".alert > .text").text("ISI USERNAME, EMAIL DAN PASWORDNYA!!")
            $(".alert").removeClass("visually-hidden")
            $(".alert").addClass("alert-danger")
        }
        else if(username.length == 0 || email.length == 0 || password.length == 0) {
            $(".alert > .text").text("ISI USERNAME, EMAIL ATAU PASWORDNYA!!")
            $(".alert").removeClass("visually-hidden")
            $(".alert").addClass("alert-danger")
        }
        else if(password.length < 8) {
            $(".form-join > .fyi").removeClass("visually-hidden")
            $(".form-join > .fyi").text("* at least 8 characters")
        }
        else if(!/\d/.test(password)) {
            $(".form-join > .fyi").removeClass("visually-hidden")
            $(".form-join > .fyi").text("must contain number")
        }
        else {
            $(".alert > .text").text("MANTAP SELAMAT BERGABUNG")
            $(".alert").removeClass("visually-hidden alert-danger")
            $(".alert").addClass("alert-success")
            $(".form-join > .fyi").addClass("visually-hidden")
        }
    })
});