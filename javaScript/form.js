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
        var forthName = $(".forth-person-name").html();
        if (firstName.length == 0) {
            personname[0] = name;
            personemail[0] = email;
            personlandline[0] = landline;
            personwebsite[0] = website;
            personaddress[0] = address;
            $(".first-person-name").html(name);
            $(".first-person-email").html(email);
            $(".first-person-number").html(mobile);
            $(".form")[0].reset();
        }
        else if (secondName.length == 0) {
            personname[1] = name;
            personemail[1] = email;
            personlandline[1] = landline;
            personwebsite[1] = website;
            personaddress[1] = address;
            $(".second-person-name").html(name)
            $(".second-person-email").html(email);
            $(".second-person-number").html(mobile);
            $(".form")[0].reset();
        }
        else if (thirdName.length == 0) {
            personname[2] = name;
            personemail[2] = email;
            personlandline[2] = landline;
            personwebsite[2] = website;
            personaddress[2] = address;
            $(".third-person-name").html(name);
            $(".third-person-email").html(email);
            $(".third-person-number").html(mobile);
            $(".form")[0].reset();
        }
        else {
            personname[3] = name;
            personemail[3] = email;
            personlandline[3] = landline;
            personwebsite[3] = website;
            personaddress[3] = address;
            $(".fourth-person-name").html(name);
            $(".fourth-person-email").html(email);
            $(".fourth-person-number").html(mobile);
            $(".form")[0].reset();
            $(".form").removeClass("show");
            $(".person-info").removeClass("hide");
        }
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