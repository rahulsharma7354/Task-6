$(function () {

    //------------------function to display form when add is clicked---------------------//

    $(".add-item").click(function () {
        $(".person-details").addClass("hide");
        $(".contact-form").addClass("show");
    })

    displayContact();

    //---------------------function to display complete information when clicked ------------------//

    function contactDetails(index) {
        if (index != null) {
            $(".person-name").html(Record[index].name);
            $(".person-email").html(Record[index].email);
            $(".phone-number").html(" +91 " + Record[index].number);
            $(".landline-number").html(" 0 " + Record[index].landline);
            $(".person-website").html(Record[index].website);
            $(".person-address").html(Record[index].address);  
        }else{
            alert("Please Select the Person to display data");
        }
        
    }

    //----------function to delete the enteries-----------------------//

    $('.delete').click(function () {
        Record.splice(updateindex, 1);
        localStorage.setItem("users", JSON.stringify(Record));
        displayContact();
        location.reload();
    })

    // -----------------function sets the forms values when clicked on edit --------//

    function setFormValue(index) {
        $(".input-name").val(Record[index].name);
        $(".input-email").val(Record[index].email);
        $(".input-mobile").val(Record[index].number);
        $(".input-landline").val(Record[index].landline);
        $(".input-website").val(Record[index].website);
        $(".input-address").val(Record[index].address);
    }

    //---------------event triggered when edit is clicked-------------------------//

    $(".edit").click(function () {
        var index = window.updateindex;
        $(".form-submit-button").addClass("hide");
        $(".form-edit-button").removeClass("hide");
        $(".form-edit-button").addClass("show");
        setFormValue(index);
        $(".person-details").addClass("hide");
        $(".contact-form").addClass("show");
    })
    $(".form-edit-button").click(function () {
        var editname = $(".input-name").val();
        var editemail = $(".input-email").val();
        var editmobile = $(".input-mobile").val();
        var editlandline = $(".input-landline").val();
        var editwebsite = $(".input-website").val();
        var editaddress = $(".input-address").val();
        var index = window.updateindex;
        Record[index] = {
            "name": editname,
            "email": editemail,
            "number": editmobile,
            "landline": editlandline,
            "website": editwebsite,
            "address": editaddress,
        }
        localStorage.setItem("users", JSON.stringify(Record));
        displayContact();
        contactDetails(index);
        $(".person-details").removeClass("hide");
        $(".contact-form").removeClass("show");
        location.reload();
    })
    
    //-------------------To check contacts are present or not ---------------------//
    
    var checkEmpty = $(".first-person").text();
    if(checkEmpty==""){
        $('.no-contacts-heading').removeClass("hide");
        $('.contacts').addClass("hide");
        $('.icons').addClass("hide"); 
    }else{
        $('.no-contacts-heading').addClass("hide");
        $('.contacts').removeClass("hide");
        $('.icons').removeClass("hide");
    }

    //-----------function to trigger index of last click --------------------//

    $('.first-person-name').click(function () {
        var index = $('.first-person-name').index(this);
        contactDetails(index);
        window.updateindex = index;
    });

    //-----------function to locate data on side section-----------------//

    function displayContact() {
        Record = JSON.parse(localStorage.getItem('users'));
        $("#firstPerson").html('');
        
        main = "";
        for (let n in Record) {
            var str = '<div class ="boundary">';
            str += '<h1 class="first-person-name input ">' + Record[n].name + '</h1>';
            str += '<p class="first-person-email ">' + Record[n].email + '</p>';
            str += '<p class="first-person-number">' + Record[n].number + '</p>';
            str += '</div>'
            main += str;
            $("#firstPerson").html(main);
            $('.first-person').addClass('show');
        }

    }

    //----------function to store values in array--------------------//

    function saveContacts() {
        let user_records = new Array();
        user_records = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []
        user_records.push({
            "name": window.inputname,
            "email": window.inputemail,
            "number": window.inputmobile,
            "landline": window.inputlandline,
            "website": window.inputwebsite,
            "address": window.inputaddress
        })
        localStorage.setItem("users", JSON.stringify(user_records));
        displayContact();
        $(".contact-form")[0].reset();
        $(".contact-form").removeClass("show");
        $(".person-details").removeClass("hide");
    }

    //----function called on cancel button click -------------//
    
    function toggleRequiredFeild(){
        $('.invalid-url').addClass("hide");
        $(".name-feild-required").addClass("hide");
        $(".input-name").removeClass("border-color");
        $(".email-feild-required").addClass("hide");
        $(".input-email").removeClass("border-color");
        $(".mobile-feild-required").addClass("hide");
        $(".input-mobile").removeClass("border-color");
        $(".landline-feild-required").addClass("hide");
        $(".input-landline").removeClass("border-color");
        $(".website-feild-required").addClass("hide");
        $(".input-website").removeClass("border-color");
        $(".address-feild-required").addClass("hide");
        $(".input-address").removeClass("border-color");
    }
    $(".cancle-form-btn").click(function () {
        $(".contact-form")[0].reset();
        toggleRequiredFeild();
        $(".contact-form").removeClass("show");
        $(".person-details").removeClass("hide");
    })

    //--------------function to validate form -----------------//
    
    $(".form-submit-button").click(function validateForm() {
        window.inputname = $(".input-name").val();
        window.inputemail = $(".input-email").val();
        window.inputmobile = $(".input-mobile").val();
        window.inputlandline = $(".input-landline").val();
        window.inputwebsite = $(".input-website").val();
        window.inputaddress = $(".input-landline").val();
        var res = true;
        if (inputname.length == 0) {
            $(".name-feild-required").removeClass("hide");
            $(".input-name").addClass("border-color");
            res = false;
        }
        if (inputemail.length == 0) {
            $(".email-feild-required").removeClass("hide");
            $(".input-email").addClass("border-color");
            res = false;
        }
        if (inputmobile.length == 0) {
            $(".mobile-feild-required").removeClass("hide");
            $(".input-mobile").addClass("border-color");
            res = false;
        }
        if (inputlandline.length == 0) {
            $(".landline-feild-required").removeClass("hide");
            $(".input-landline").addClass("border-color");
            res = false;
        }

        if (!(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/|www\.)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(inputwebsite))) {
            res=false;
        }

        if (inputwebsite.length == 0) {
            $(".website-feild-required").removeClass("hide");
            $(".input-website").addClass("border-color");
            res = false;
        }
        if (inputaddress.length == 0) {
            $(".address-feild-required").removeClass("hide");
            $(".input-address").addClass("border-color");
            res = false;
        }
        if (res == true) {
            saveContacts();
            location.reload();
        } else {
            $('.invalid-url').removeClass("hide");
            $(".input-website").addClass("border-color");
            return res;
        }
    })
})