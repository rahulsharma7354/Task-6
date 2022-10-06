$(function () {
    $(".form-submit-button").click(function () {
        var name = $(".input-name").val();
        var email = $(".input-email").val();
        var mobile = $(".input-mobile").val();
        var landline = $(".input-landline").val();
        var website = $(".input-website").val();
        var address = $(".input-address").val();
        var firstName = $(".first-person-name").val();
        var secondName = $(".second-person-name").val();
        var thirdName=$(".third-person-name").val(); 
        var forthName=$(".forth-person-name").val();
        localStorage.setItem('Name' , name);
        localStorage.setItem('Email' , email);
        localStorage.setItem('Phone' , mobile);
        localStorage.setItem('Landline' , landline);
        localStorage.setItem('Website', website); 
        if (firstName.length == 0) {
            alert("first");
            $(".first-person.name").val(name);
            $(".first-person.email").val(email);
            $(".first-person.phone").val(mobile);
        }
        if (secondName.length == 0) {
            alert("second");
            $(".second-person.name").val(name)
            $(".second-person.email").val(email);
            $(".second-person.phone").val(mobile);
        }
        if (thirdName.length == 0) {
            $(".third-person.name").val(name);
            $(".third-person.email").val(email);
            $(".third-person.phone").val(mobile);
        }
        if (forthName.length == 0) {
            $(".forth-person.name").val(name);
            $(".forth-person.email").val(email);
            $(".forth-person.phone").val(mobile);
        }
    })
    $(".add-item").click(function(){
        alert("clicked");
    })
});

