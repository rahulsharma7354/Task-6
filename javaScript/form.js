$(function () {
    $(".add-item").click(function () {
        $(".person-info").addClass("hide");
        $(".form").addClass("show");
    })
    showData();
    function bodyinfo( i) {
        $(".person-name").html(userrecord[i].name);
        $(".person-email").html(userrecord[i].email);
        $(".phone-number").html(" +91 " + userrecord[i].mobile);
        $(".landline-number").html(" 0 " + userrecord[i].landline);
        $(".person-website").html(userrecord[i].website);
        $(".person-address").html(userrecord[i].address);
    }
    $('.delete').click(function () {
        userrecord.splice(updateindex,1);
        localStorage.setItem("users", JSON.stringify(userrecord));
        showData();
        location.reload();
    })

    $(".edit").click( function () {
        var i = window.updateindex;
        alert(i);
        $(".form-submit-button").addClass("hide");
        $(".form-edit-submit-button").removeClass("hide");
        $(".form-edit-submit-button").addClass("show");
        $(".input-name").val(userrecord[i].name);
        $(".input-email").val(userrecord[i].email);
        $(".input-mobile").val(userrecord[i].number);
        $(".input-landline").val(userrecord[i].landline);
        $(".input-website").val(userrecord[i].website);
        $(".input-address").val(userrecord[i].address);
        $(".person-info").addClass("hide");
        $(".form").addClass("show");
        })
        $(".form-edit-submit-button").click(function () {
            
            var editname = $(".input-name").val();
            var editemail= $(".input-email").val();
            var editmobile= $(".input-mobile").val();
            var editlandline = $(".input-landline").val();
            var editwebsite = $(".input-website").val();
            var editaddress = $(".input-address").val();
            var i = window.updateindex;
            userrecord[i]={
                   "name":editname,
                   "email":editemail,
                   "number":editmobile,
                   "landline":editlandline,
                   "website":editwebsite,
                   "address":editaddress,
            }
            localStorage.setItem("users", JSON.stringify(userrecord));
            showData();
            bodyinfo(i);
            $(".person-info").removeClass("hide");
            $(".form").removeClass("show");
            location.reload();
        })
    $('.first-person-name').click(function(){
        var i =  $('.first-person-name').index(this);
        bodyinfo(i);
        window.updateindex=i;
    });
    function showData() {
        userrecord = JSON.parse(localStorage.getItem('users'));
        $("#firstPerson").html('');
        main="";
        for (let n in userrecord) {
            var str = '<div class ="boundary">';
            str += '<h1 class="first-person-name input ">' + userrecord[n].name + '</h1>';
            str += '<p class="first-person-email ">' + userrecord[n].email + '</p>';
            str += '<p class="first-person-number">' + userrecord[n].number + '</p>';
            str += '</div>'
            main+=str;
            $("#firstPerson").html(main);
        }
    }
    function confirmed() {
        var name = $(".input-name").val();
        var email= $(".input-email").val();
        var mobile= $(".input-mobile").val();
        var landline = $(".input-landline").val();
        var website = $(".input-website").val();
        var address = $(".input-address").val();
        let user_records = new Array();
        user_records = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []
        
            user_records.push({
                "name": name,
                "email": email,
                "number": mobile,
                "landline":landline,
                "website":website,
                "address":address
            })
            localStorage.setItem("users", JSON.stringify(user_records));
            showData();
            $(".form")[0].reset();
            $(".form").removeClass("show");
            $(".person-info").removeClass("hide"); 
              
    }
      $(".form-submit-button").click(function validateForm(){
        var name = $(".input-name").val();
        var email = $(".input-email").val();
        var mobile = $(".input-mobile").val();
        var landline = $(".input-landline").val();
        var website = $(".input-website").val();
        var address = $(".input-address").val();
        var res=true;

        hideAllRequiredErrors();
        {
            $(".email-feild-required").addClass("hide");
            $(".mobile-feild-required").addClass("hide");
            $(".landline-feild-required").addClass("hide");
            $(".website-feild-required").addClass("hide");
            $(".address-feild-required").addClass("hide");
            $(".name-feild-required").addClass("hide");
        }
        if(name.length==0){
            
            
            res=false;
        }
        checkIfValid(name, ".name-feild-required")

        if(email.length==0){
            $(".email-feild-required").removeClass("hide");
            $(".name-feild-required").addClass("hide");
            $(".mobile-feild-required").addClass("hide");
            $(".landline-feild-required").addClass("hide");
            $(".website-feild-required").addClass("hide");
            $(".address-feild-required").addClass("hide");
            res=false;
        }
        else if(mobile.length==0){
            $(".mobile-feild-required").removeClass("hide");
            $(".email-feild-required").addClass("hide");
            $(".name-feild-required").addClass("hide");
            $(".landline-feild-required").addClass("hide");
            $(".website-feild-required").addClass("hide");
            $(".address-feild-required").addClass("hide");
            res=false;
        }
        else if(landline.length==0){
            $(".mobile-feild-required").addClass("hide");
            $(".email-feild-required").addClass("hide");
            $(".name-feild-required").addClass("hide");
            $(".website-feild-required").addClass("hide");
            $(".address-feild-required").addClass("hide");
            $(".landline-feild-required").removeClass("hide");
            res=false;
        }
        else if(website.length==0){
            $(".mobile-feild-required").addClass("hide");
            $(".email-feild-required").addClass("hide");
            $(".name-feild-required").addClass("hide");
            $(".address-feild-required").addClass("hide");
            $(".landline-feild-required").addClass("hide");
            $(".website-feild-required").removeClass("hide");
            res=false;
        }
        else if(address.length==0){
            $(".mobile-feild-required").addClass("hide");
            $(".email-feild-required").addClass("hide");
            $(".name-feild-required").addClass("hide");
            $(".website-feild-required").addClass("hide");
            $(".landline-feild-required").addClass("hide");
            $(".address-feild-required").removeClass("hide");
            res=false;
        }
        if(res==true){
            $(".mobile-feild-required").addClass("hide");
            $(".email-feild-required").addClass("hide");
            $(".name-feild-required").addClass("hide");
            $(".website-feild-required").addClass("hide");
            $(".landline-feild-required").addClass("hide");
            $(".address-feild-required").addClass("hide");
            confirmed();
            location.reload();
        }else{
            return res;
        }
      })
})


//.........................................update and delete...........................//
// $(".edit").click( function () {
        //     $(".form-submit-button").addClass("hide");
        //     $(".form-edit-submit-button").removeClass("hide");
        //     $(".form-edit-submit-button").addClass("show");
        //     $(".input-name").val(userrecord[i].name);
        //     $(".input-email").val(userrecord[i].email);
        //     $(".input-mobile").val(userrecord[i].number);
        //     $(".input-landline").val(userrecord[i].landline);
        //     $(".input-website").val(userrecord[i].website);
        //     $(".input-address").val(userrecord[i].address);
        //     $(".person-info").addClass("hide");
        //     $(".form").addClass("show");
            // $(".form-edit-submit-button").click(function () {
            //     var editname = $(".input-name").val();
            //     var editemail= $(".input-email").val();
            //     var editmobile= $(".input-mobile").val();
            //     var editlandline = $(".input-landline").val();
            //     var editwebsite = $(".input-website").val();
            //     var editaddress = $(".input-address").val();
            //     userrecord[i]={
            //            "name":editname,
            //            "email":editemail,
            //            "number":editmobile,
            //            "landline":editlandline,
            //            "website":editwebsite,
            //            "address":editaddress,
            //     }
            //     localStorage.setItem("users", JSON.stringify(userrecord));
            //     showData();
            //     bodyinfo(i);
            //     $(".person-info").removeClass("hide");
            //     $(".form").removeClass("show");
            // })
            
  //      })
//Display in Body(JavaScript)
  // var wpEdits = document.querySelectorAll(".first-person-name");
    // for (let i = 0; i < wpEdits.length; i++)
    //     wpEdits[i].addEventListener("click", showID);

    // function showID(evt) {
    //     for (let i = 0; i < wpEdits.length; i++)
    //         if (wpEdits[i] == evt.target){
    //             $(".person-name").html(userrecord[i].name);
    //             $(".person-email").html(userrecord[i].email);
    //             $(".phone-number").html(" +91 " + userrecord[i].mobile);
    //             $(".landline-number").html(" 0 " + userrecord[i].landline);
    //             $(".person-website").html(userrecord[i].website);
    //             $(".person-address").html(userrecord[i].address);
    //             alert(i);
    //         }
    // }
    //-----------------------------*****************----------------------
    
// var personname = [];
// var personemail = [];
// var personlandline = [];
// var personwebsite = [];
// var personaddress = [];
// var personmobile = [];
// class contact {
//     constructor(name, email , mobile , landline , website , address) {
//       this.name = name;
//       this.email = email;
//       this.mobile=mobile;
//       this.landline=landline;
//       this.website = website;
//       this.address = address;
//     }
//     name(){
//         return this.name;
//     }
//     email(){
//         return this.email;
//     }
//     mobile(){
//         return this.mobile;
//     }
//     landline(){
//         return this.landline;
//     }
//     website(){
//         return this.website;
//     }
//     address(){
//         return this.address;
//     }
//   }
// $(".edit").click(function () {
//     var person = $(".person-name").html();
//     $(".form").addClass("show");
//     $(".person-info").addClass("hide");
//     $(".form-submit-button").addClass("hide");
//     $(".form-edit-submit-button").removeClass("hide");
//     $(".form-edit-submit-button").addClass("show");
//     if (person == personname[0]){
//         $(".input-name").val(personname[0]);
//         $(".input-email").val(personemail[0]);
//         $(".input-mobile").val(personmobile[0]);
//         $(".input-landline").val(personlandline[0]);
//         $(".input-website").val(personwebsite[0]);
//         $(".input-address").val(personaddress[0]);
//         $(".form-edit-submit-button").click(function () {
//             var name = $(".input-name").val();
//             var email = $(".input-email").val();
//             var mobile = $(".input-mobile").val();
//             var landline = $(".input-landline").val();
//             var website = $(".input-website").val();
//             var address = $(".input-address").val();
//             personname[0] = name;
//             personemail[0]     = email;
//             personlandline[0] = landline;
//             personwebsite[0] = website;
//             personaddress[0] = address;
//             personmobile[0] = mobile;
//             $(".person-name").html(personname[0]);
//             $(".person-email").html(personemail[0]);
//             $(".phone-number").html(" +91 " + personmobile[0]);
//             $(".landline-number").html(" 0 " + personlandline[0]);
//             $(".person-website").html(personwebsite[0]);
//             $("person-address").html(personaddress[0]);
//             $(".first-person-name").html(personname[0]);
//             $(".first-person-email").html(personemail[0]);
//             $(".first-person-number").html(personmobile[0]);
//             $(".form")[0].reset();
//             $(".form").removeClass("show");
//             $(".person-info").removeClass("hide");

//         })
//     }
//      else if (person == personname[1]) {
//         $(".input-name").val(personname[1]);
//         $(".input-email").val(personemail[1]);
//         $(".input-mobile").val(personmobile[1]);
//         $(".input-landline").val(personlandline[1]);
//         $(".input-website").val(personwebsite[1]);
//         $(".input-address").val(personaddress[1]);
//         $(".form-edit-submit-button").click(function () {
//             var name = $(".input-name").val();
//             var email = $(".input-email").val();
//             var mobile = $(".input-mobile").val();
//             var landline = $(".input-landline").val();
//             var website = $(".input-website").val();
//             var address = $(".input-address").val();
//             personname[1] = name;
//             personemail[1] = email;
//             personlandline[1] = landline;
//             personwebsite[1] = website;
//             personaddress[1] = address;
//             personmobile[1] = mobile;
//             $(".person-name").html(personname[1]);
//             $(".person-email").html(personemail[1]);
//             $(".phone-number").html(" +91 " + personmobile[1]);
//             $(".landline-number").html(" 0 " + personlandline[1]);
//             $(".person-website").html(personwebsite[1]);
//             $("person-address").html(personaddress[1]);
//             $(".second-person-name").html(personname[1]);
//             $(".second-person-email").html(personemail[1]);
//             $(".second-person-number").html(personmobile[1]);
//             $(".form")[0].reset();
//             $(".form").removeClass("show");
//             $(".person-info").removeClass("hide");

//         })
//     }
//     else if (person == personname[2]) {
//         $(".input-name").val(personname[2]);
//         $(".input-email").val(personemail[2]);
//         $(".input-mobile").val(personmobile[2]);
//         $(".input-landline").val(personlandline[2]);
//         $(".input-website").val(personwebsite[2]);
//         $(".input-address").val(personaddress[2]);
//         $(".form-edit-submit-button").click(function () {
//             var name = $(".input-name").val();
//             var email = $(".input-email").val();
//             var mobile = $(".input-mobile").val();
//             var landline = $(".input-landline").val();
//             var website = $(".input-website").val();
//             var address = $(".input-address").val();
//             personname[2] = name;
//             personemail[2] = email;
//             personlandline[2] = landline;
//             personwebsite[2] = website;
//             personaddress[2] = address;
//             personmobile[2] = mobile;
//             $(".person-name").html(personname[2]);
//             $(".person-email").html(personemail[2]);
//             $(".phone-number").html(" +91 " + personmobile[2]);
//             $(".landline-number").html(" 0 " + personlandline[2]);
//             $(".person-website").html(personwebsite[2]);
//             $("person-address").html(personaddress[2]);
//             $(".third-person-name").html(personname[2]);
//             $(".third-person-email").html(personemail[2]);
//             $(".third-person-number").html(personmobile[2]);
//             $(".form")[0].reset();
//             $(".form").removeClass("show");
//             $(".person-info").removeClass("hide");

//         })
//     }
//     else {
//         $(".input-name").val(personname[3]);
//         $(".input-email").val(personemail[3]);
//         $(".input-mobile").val(personmobile[3]);
//         $(".input-landline").val(personlandline[3]);
//         $(".input-website").val(personwebsite[3]);
//         $(".input-address").val(personaddress[3]);
//         $(".form-edit-submit-button").click(function () {
//             var name = $(".input-name").val();
//             var email = $(".input-email").val();
//             var mobile = $(".input-mobile").val();
//             var landline = $(".input-landline").val();
//             var website = $(".input-website").val();
//             var address = $(".input-address").val();
//             personname[3] = name;
//             personemail[3] = email;
//             personlandline[3] = landline;
//             personwebsite[3] = website;
//             personaddress[3] = address;
//             personmobile[3] = mobile;
//             $(".person-name").html(personname[3]);
//             $(".person-email").html(personemail[3]);
//             $(".phone-number").html(" +91 " + personmobile[3]);
//             $(".landline-number").html(" 0 " + personlandline[3]);
//             $(".person-website").html(personwebsite[3]);
//             $("person-address").html(personaddress[3]);
//             $(".fourth-person-name").html(name);
//             $(".fourth-person-email").html(email);
//             $(".fourth-person-number").html(mobile);
//             $(".form")[0].reset();
//             $(".form").removeClass("show");
//             $(".person-info").removeClass("hide");
//         })
//     }
// })
// $(".form-submit-button").click(function validateForm() {
    
//     var name = $(".input-name").val();
//     var email = $(".input-email").val();
//     var mobile = $(".input-mobile").val();
//     var landline = $(".input-landline").val();
//     var website = $(".input-website").val();
//     var address = $(".input-address").val();
//     var firstName = $(".first-person-name").html();
//     var secondName = $(".second-person-name").html();
//     var thirdName = $(".third-person-name").html();
//     var forthName = $(".forth-person-name").html();
//     var res=true;
//     if(name.length==0){
//         $(".name-feild-required").removeClass("hide");
//         $(".email-feild-required").addClass("hide");
//         $(".mobile-feild-required").addClass("hide");
//         $(".landline-feild-required").addClass("hide");
//         $(".website-feild-required").addClass("hide");
//         $(".address-feild-required").addClass("hide");
//         res=false;
//     }
//     else if(email.length==0){
//         $(".email-feild-required").removeClass("hide");
//         $(".name-feild-required").addClass("hide");
//         $(".mobile-feild-required").addClass("hide");
//         $(".landline-feild-required").addClass("hide");
//         $(".website-feild-required").addClass("hide");
//         $(".address-feild-required").addClass("hide");
//         res=false;
//     }
//     else if(mobile.length==0){
//         $(".mobile-feild-required").removeClass("hide");
//         $(".email-feild-required").addClass("hide");
//         $(".name-feild-required").addClass("hide");
//         $(".landline-feild-required").addClass("hide");
//         $(".website-feild-required").addClass("hide");
//         $(".address-feild-required").addClass("hide");
//         res=false;
//     }
//     else if(landline.length==0){
//         $(".mobile-feild-required").addClass("hide");
//         $(".email-feild-required").addClass("hide");
//         $(".name-feild-required").addClass("hide");
//         $(".website-feild-required").addClass("hide");
//         $(".address-feild-required").addClass("hide");
//         $(".landline-feild-required").removeClass("hide");
//         res=false;
//     }
//     else if(website.length==0){
//         $(".mobile-feild-required").addClass("hide");
//         $(".email-feild-required").addClass("hide");
//         $(".name-feild-required").addClass("hide");
//         $(".address-feild-required").addClass("hide");
//         $(".landline-feild-required").addClass("hide");
//         $(".website-feild-required").removeClass("hide");
//         res=false;
//     }
//     else if(address.length==0){
//         $(".mobile-feild-required").addClass("hide");
//         $(".email-feild-required").addClass("hide");
//         $(".name-feild-required").addClass("hide");
//         $(".website-feild-required").addClass("hide");
//         $(".landline-feild-required").addClass("hide");
//         $(".address-feild-required").removeClass("hide");
//         res=false;
//     }
//     if(res==true){
//         $(".mobile-feild-required").addClass("hide");
//         $(".email-feild-required").addClass("hide");
//         $(".name-feild-required").addClass("hide");
//         $(".website-feild-required").addClass("hide");
//         $(".landline-feild-required").addClass("hide");
//         $(".address-feild-required").addClass("hide");
//     if (firstName.length == 0){
//         $(".first-person").addClass("border");
//         personname[0] = name;
//         personemail[0] = email;
//         personlandline[0] = landline;
//         personwebsite[0] = website;
//         personaddress[0] = address;
//         personmobile[0] = mobile;
//         $(".first-person-name").html(name);
//         $(".first-person-email").html(email);
//         $(".first-person-number").html(mobile);
//         $(".form")[0].reset();
//         $(".form").removeClass("show");
//         $(".person-info").removeClass("hide");
//     }
//     else if (secondName.length == 0) {
//         $(".second-person").addClass("boundary");
//         personname[1] = name;
//         personemail[1] = email;
//         personlandline[1] = landline;
//         personwebsite[1] = website;
//         personaddress[1] = address;
//         personmobile[1] = mobile;
//         $(".second-person-name").html(name)
//         $(".second-person-email").html(email);
//         $(".second-person-number").html(mobile);
//         $(".form")[0].reset();
//         $(".form").removeClass("show");
//         $(".person-info").removeClass("hide");
//     }
//     else if (thirdName.length == 0) {
//         $(".third-person").addClass("boundary");
//         personname[2] = name;
//         personemail[2] = email;
//         personlandline[2] = landline;
//         personwebsite[2] = website;
//         personaddress[2] = address;
//         personmobile[2] = mobile;
//         $(".third-person-name").html(name);
//         $(".third-person-email").html(email);
//         $(".third-person-number").html(mobile);
//         $(".form")[0].reset();
//         $(".form").removeClass("show");
//         $(".person-info").removeClass("hide");
//     }
//     else {
//         $(".fourth-person").addClass("boundary");
//         personname[3] = name;
//         personemail[3] = email;
//         personlandline[3] = landline;
//         personwebsite[3] = website;
//         personaddress[3] = address;
//         personmobile[3] = mobile;
//         $(".fourth-person-name").html(name);
//         $(".fourth-person-email").html(email);
//         $(".fourth-person-number").html(mobile);
//         $(".form")[0].reset();
//         $(".form").removeClass("show");
//         $(".person-info").removeClass("hide");
//     }
// }else{
//     return res;
// }
// })
// $(".first-person").click(function () {
//     $(".first-person").addClass("blue");
//     $(".second-person").removeClass("blue");
//     $(".third-person").removeClass("blue");
//     $(".fourth-person").removeClass("blue");
//     $(".person-name").html(personname[0]);
//     $(".person-email").html(personemail[0]);
//     $(".phone-number").html(" +91 " + personmobile[0]);
//     $(".landline-number").html(" 0 " + personlandline[0]);
//     $(".person-website").html(personwebsite[0]);
//     $(".person-address").html(personaddress[0]);
// })
// $(".second-person").click(function () {
//     $(".first-person").removeClass("blue");
//     $(".second-person").addClass("blue");
//     $(".third-person").removeClass("blue");
//     $(".fourth-person").removeClass("blue");
//     $(".person-name").html(personname[1]);
//     $(".person-email").html(personemail[1]);
//     $(".phone-number").html(" +91 " + personmobile[1]);
//     $(".landline-number").html(" 0 " + personlandline[1]);
//     $(".person-website").html(personwebsite[1]);
//     $(".person-address").html(personaddress[1]);

// })
// $(".third-person").click(function () {
//     $(".first-person").removeClass("blue");
//     $(".second-person").removeClass("blue");
//     $(".third-person").addClass("blue");
//     $(".fourth-person").removeClass("blue");
//     $(".person-name").html(personname[2]);
//     $(".person-email").html(personemail[2]);
//     $(".phone-number").html(" +91 " + personmobile[2]);
//     $(".landline-number").html(" 0 " + personlandline[2]);
//     $(".person-website").html(personwebsite[2]);
//     $(".person-address").html(personaddress[2]);

// })
// $(".fourth-person").click(function () {
//     $(".first-person").removeClass("blue");
//     $(".second-person").removeClass("blue");
//     $(".third-person").removeClass("blue");
//     $(".fourth-person").addClass("blue");
//     $(".person-name").html(personname[3]);
//     $(".person-email").html(personemail[3]);
//     $(".phone-number").html(" +91 " + personmobile[3]);
//     $(".landline-number").html(" 0 " + personlandline[3]);
//     $(".person-website").html(personwebsite[3]);
//     $(".person-address").html(personaddress[3]);
// })