$(function () {
    $(".add-item").click(function () {
        $(".person-info").addClass("hide");
        $(".form").addClass("show");
    })
    var personname = [];
    var personemail = [];
    var personlandline = [];
    var personwebsite = [];
    var personaddress = [];
    var personmobile = [];
    $(".edit").click(function () {
        var person = $(".person-name").html();
        $(".form").addClass("show");
        $(".person-info").addClass("hide");
        $(".form-submit-button").addClass("hide");
        $(".form-edit-submit-button").removeClass("hide");
        $(".form-edit-submit-button").addClass("show");
        if (person == personname[0]) {
            $(".form-edit-submit-button").click(function () {
                var name = $(".input-name").val();
                var email = $(".input-email").val();
                var mobile = $(".input-mobile").val();
                var landline = $(".input-landline").val();
                var website = $(".input-website").val();
                var address = $(".input-address").val();
                personname[0] = name;
                personemail[0] = email;
                personlandline[0] = landline;
                personwebsite[0] = website;
                personaddress[0] = address;
                personmobile[0] = mobile;
                $(".person-name").html(personname[0]);
                $(".person-email").html(personemail[0]);
                $(".phone-number").html(" +91 " + personmobile[0]);
                $(".landline-number").html(" 0 " + personlandline[0]);
                $(".person-website").html(personwebsite[0]);
                $("person-address").html(personaddress[0]);
                $(".first-person-name").html(name);
                $(".first-person-email").html(email);
                $(".first-person-number").html(mobile);
                $(".form")[0].reset();
                $(".form").removeClass("show");
                $(".person-info").removeClass("hide");

            })
        }
         else if (person == personname[1]) {
            $(".form-edit-submit-button").click(function () {
                var name = $(".input-name").val();
                var email = $(".input-email").val();
                var mobile = $(".input-mobile").val();
                var landline = $(".input-landline").val();
                var website = $(".input-website").val();
                var address = $(".input-address").val();
                personname[1] = name;
                personemail[1] = email;
                personlandline[1] = landline;
                personwebsite[1] = website;
                personaddress[1] = address;
                personmobile[1] = mobile;
                $(".person-name").html(personname[1]);
                $(".person-email").html(personemail[1]);
                $(".phone-number").html(" +91 " + personmobile[1]);
                $(".landline-number").html(" 0 " + personlandline[1]);
                $(".person-website").html(personwebsite[1]);
                $("person-address").html(personaddress[1]);
                $(".second-person-name").html(name);
                $(".second-person-email").html(email);
                $(".second-person-number").html(mobile);
                $(".form")[0].reset();
                $(".form").removeClass("show");
                $(".person-info").removeClass("hide");

            })
        }
        else if (person == personname[2]) {
            $(".form-edit-submit-button").click(function () {
                var name = $(".input-name").val();
                var email = $(".input-email").val();
                var mobile = $(".input-mobile").val();
                var landline = $(".input-landline").val();
                var website = $(".input-website").val();
                var address = $(".input-address").val();
                personname[2] = name;
                personemail[2] = email;
                personlandline[2] = landline;
                personwebsite[2] = website;
                personaddress[2] = address;
                personmobile[2] = mobile;
                $(".person-name").html(personname[2]);
                $(".person-email").html(personemail[2]);
                $(".phone-number").html(" +91 " + personmobile[2]);
                $(".landline-number").html(" 0 " + personlandline[2]);
                $(".person-website").html(personwebsite[2]);
                $("person-address").html(personaddress[2]);
                $(".third-person-name").html(name);
                $(".third-person-email").html(email);
                $(".third-person-number").html(mobile);
                $(".form")[0].reset();
                $(".form").removeClass("show");
                $(".person-info").removeClass("hide");

            })
        }
        else {
            $(".form-edit-submit-button").click(function () {
                var name = $(".input-name").val();
                var email = $(".input-email").val();
                var mobile = $(".input-mobile").val();
                var landline = $(".input-landline").val();
                var website = $(".input-website").val();
                var address = $(".input-address").val();
                personname[3] = name;
                personemail[3] = email;
                personlandline[3] = landline;
                personwebsite[3] = website;
                personaddress[3] = address;
                personmobile[3] = mobile;
                $(".person-name").html(personname[3]);
                $(".person-email").html(personemail[3]);
                $(".phone-number").html(" +91 " + personmobile[3]);
                $(".landline-number").html(" 0 " + personlandline[3]);
                $(".person-website").html(personwebsite[3]);
                $("person-address").html(personaddress[3]);
                $(".fourth-person-name").html(name);
                $(".fourth-person-email").html(email);
                $(".fourth-person-number").html(mobile);
                $(".form")[0].reset();
                $(".form").removeClass("show");
                $(".person-info").removeClass("hide");

            })
        }
    })

    $(".form-submit-button").click(function () {
        var name = $(".input-name").val();
        var email = $(".input-email").val();
        var mobile = $(".input-mobile").val();
        var landline = $(".input-landline").val();
        var website = $(".input-website").val();
        var address = $(".input-address").val();
        var firstName = $(".first-person-name").html();
        var secondName = $(".second-person-name").html();
        var thirdName = $(".third-person-name").html();
        //var forthName = $(".forth-person-name").html();
        if (firstName.length == 0){
            $(".first-person").addClass("border");
            personname[0] = name;
            personemail[0] = email;
            personlandline[0] = landline;
            personwebsite[0] = website;
            personaddress[0] = address;
            personmobile[0] = mobile;
            $(".first-person-name").html(name);
            $(".first-person-email").html(email);
            $(".first-person-number").html(mobile);
            $(".form")[0].reset();
            $(".form").removeClass("show");
            $(".person-info").removeClass("hide");
        }
        else if (secondName.length == 0) {
            $(".second-person").addClass("boundary");
            personname[1] = name;
            personemail[1] = email;
            personlandline[1] = landline;
            personwebsite[1] = website;
            personaddress[1] = address;
            personmobile[1] = mobile;
            $(".second-person-name").html(name)
            $(".second-person-email").html(email);
            $(".second-person-number").html(mobile);
            $(".form")[0].reset();
            $(".form").removeClass("show");
            $(".person-info").removeClass("hide");
        }
        else if (thirdName.length == 0) {
            $(".third-person").addClass("boundary");
            personname[2] = name;
            personemail[2] = email;
            personlandline[2] = landline;
            personwebsite[2] = website;
            personaddress[2] = address;
            personmobile[2] = mobile;
            $(".third-person-name").html(name);
            $(".third-person-email").html(email);
            $(".third-person-number").html(mobile);
            $(".form")[0].reset();
            $(".form").removeClass("show");
            $(".person-info").removeClass("hide");
        }
        else {
            $(".fourth-person").addClass("boundary");
            personname[3] = name;
            personemail[3] = email;
            personlandline[3] = landline;
            personwebsite[3] = website;
            personaddress[3] = address;
            personmobile[3] = mobile;
            $(".fourth-person-name").html(name);
            $(".fourth-person-email").html(email);
            $(".fourth-person-number").html(mobile);
            $(".form")[0].reset();
            $(".form").removeClass("show");
            $(".person-info").removeClass("hide");
        }
    })
    $(".first-person").click(function () {
        $(".first-person").addClass("blue");
        $(".second-person").removeClass("blue");
        $(".third-person").removeClass("blue");
        $(".fourth-person").removeClass("blue");
        $(".person-name").html(personname[0]);
        $(".person-email").html(personemail[0]);
        $(".phone-number").html(" +91 " + personmobile[0]);
        $(".landline-number").html(" 0 " + personlandline[0]);
        $(".person-website").html(personwebsite[0]);
        $(".person-address").html(personaddress[0]);
    })
    $(".second-person").click(function () {
        $(".first-person").removeClass("blue");
        $(".second-person").addClass("blue");
        $(".third-person").removeClass("blue");
        $(".fourth-person").removeClass("blue");
        $(".person-name").html(personname[1]);
        $(".person-email").html(personemail[1]);
        $(".phone-number").html(" +91 " + personmobile[1]);
        $(".landline-number").html(" 0 " + personlandline[1]);
        $(".person-website").html(personwebsite[1]);
        $(".person-address").html(personaddress[1]);

    })
    $(".third-person").click(function () {
        $(".first-person").removeClass("blue");
        $(".second-person").removeClass("blue");
        $(".third-person").addClass("blue");
        $(".fourth-person").removeClass("blue");
        $(".person-name").html(personname[2]);
        $(".person-email").html(personemail[2]);
        $(".phone-number").html(" +91 " + personmobile[2]);
        $(".landline-number").html(" 0 " + personlandline[2]);
        $(".person-website").html(personwebsite[2]);
        $(".person-address").html(personaddress[2]);

    })
    $(".fourth-person").click(function () {
        $(".first-person").removeClass("blue");
        $(".second-person").removeClass("blue");
        $(".third-person").removeClass("blue");
        $(".fourth-person").addClass("blue");
        $(".person-name").html(personname[3]);
        $(".person-email").html(personemail[3]);
        $(".phone-number").html(" +91 " + personmobile[3]);
        $(".landline-number").html(" 0 " + personlandline[3]);
        $(".person-website").html(personwebsite[3]);
        $(".person-address").html(personaddress[3]);
    })
    


})

































// if (firstName.length == 0) {
//     personname[0] = name;
//     personemail[0] = email;
//     personlandline[0] = landline;
//     personwebsite[0] = website;
//     personaddress[0] = address;
//     alert[personname[0]];
//     $(".first-person-name").html(name);
//     $(".first-person-email").html(email);
//     $(".first-person-number").html(mobile);
// }
// else if (secondName.length == 0) {
//     personname[1] = name;
//     personemail[1] = email;
//     personlandline[1] = landline;
//     personwebsite[1] = website;
//     personaddress[1] = address;
//     $(".second-person-name").html(name)
//     $(".second-person-email").html(email);
//     $(".second-person-number").html(mobile);
// }
// else if (thirdName.length == 0) {
//     personname[2] = name;
//     personemail[2] = email;
//     personlandline[2] = landline;
//     personwebsite[2] = website;
//     personaddress[2] = address;
//     $(".third-person-name").html(name);
//     $(".third-person-email").html(email);
//     $(".third-person-number").html(mobile);
// }
// else {
//     personname[3] = name;
//     personemail[3] = email;
//     personlandline[3] = landline;
//     personwebsite[3] = website;
//     personaddress[3] = address;
//     $(".fourth-person-name").html(name);
//     $(".fourth-person-email").html(email);
//     $(".fourth-person-number").html(mobile);
// }