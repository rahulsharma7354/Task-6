$(function () {

    //------------------function to display form when add is clicked---------------------//
  
    $(".add-item").click(function () {
        $(".person-info").addClass("hide");
        $(".form").addClass("show");
    })
    sectionData();

    //---------------------function to display complete information when clicked ------------------//

    function bodyinfo( index) {
        if(index==null){
            alert("Please Select the Person to display data");
        }
        $(".person-name").html(Record[index].name);
        $(".person-email").html(Record[index].email);
        $(".phone-number").html(" +91 " + Record[index].number);
        $(".landline-number").html(" 0 " + Record[index].landline);
        $(".person-website").html(Record[index].website);
        $(".person-address").html(Record[index].address);
    }

    //----------function to delete the enteries-----------------------//
    
    $('.delete').click(function () {
        Record.splice(updateindex,1);
        localStorage.setItem("users", JSON.stringify(Record));
        sectionData();
        location.reload();
    })

   // -----------------function sets the forms values when clicked on edit --------//

    function setFormValue(index){
        $(".input-name").val(Record[index].name);
        $(".input-email").val(Record[index].email);
        $(".input-mobile").val(Record[index].number);
        $(".input-landline").val(Record[index].landline);
        $(".input-website").val(Record[index].website);
        $(".input-address").val(Record[index].address);
    }

    //---------------event triggered when edit is clicked-------------------------//

    $(".edit").click( function () {
        var index = window.updateindex;
        $(".form-submit-button").addClass("hide");
        $(".form-edit-button").removeClass("hide");
        $(".form-edit-button").addClass("show");
        setFormValue(index);
        $(".person-info").addClass("hide");
        $(".form").addClass("show");
        })
        $(".form-edit-button").click(function () {
            var editname = $(".input-name").val();
            var editemail=  $(".input-email").val();
            var editmobile= $(".input-mobile").val();
            var editlandline = $(".input-landline").val();
            var editwebsite = $(".input-website").val()
            var editaddress = $(".input-address").val()
            var index = window.updateindex;
            Record[index]={
                   "name":editname,
                   "email":editemail,
                   "number":editmobile,
                   "landline":editlandline,
                   "website":editwebsite,
                   "address":editaddress,
            }
            localStorage.setItem("users", JSON.stringify(Record));
            sectionData();
            bodyinfo(index);
            $(".person-info").removeClass("hide");
            $(".form").removeClass("show");
            location.reload();
        })

    //-----------function to trigger index of last click --------------------//

    $('.first-person-name').click(function(){
        var i =  $('.first-person-name').index(this);
        bodyinfo(i);
        window.updateindex=i;
    });

    //-----------function to locate data on side section-----------------//
    
    function sectionData() {
        Record = JSON.parse(localStorage.getItem('users'));
        $("#firstPerson").html('');
        main="";
        for (let n in Record) {
            var str = '<div class ="boundary">';
            str += '<h1 class="first-person-name input ">' + Record[n].name + '</h1>';
            str += '<p class="first-person-email ">' + Record[n].email + '</p>';
            str += '<p class="first-person-number">' + Record[n].number + '</p>';
            str += '</div>'
            main+=str;
            $("#firstPerson").html(main);
        }
    }

    //----------function to store values in array--------------------//

    function storeData() {
        let user_records = new Array();
        user_records = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []        
            user_records.push({
                "name": window.inputname,
                "email": window.inputemail,
                "number": window.inputmobile,
                "landline":window.inputlandline,
                "website":window.inputwebsite,
                "address":window.inputaddress
            })
            localStorage.setItem("users", JSON.stringify(user_records));
            sectionData();
            $(".form")[0].reset();
            $(".form").removeClass("show");
            $(".person-info").removeClass("hide");             
    }

    //----function called on cancel button click -------------//

    $(".cancle").click(function () {
        $(".form")[0].reset()
        $(".form").removeClass("show");
        $(".person-info").removeClass("hide"); 
      })

    //--------------function to validate form -----------------//

      $(".form-submit-button").click(function validateForm(){
        window.inputname = $(".input-name").val();
        window.inputemail = $(".input-email").val();
        window.inputmobile = $(".input-mobile").val();
        window.inputlandline = $(".input-landline").val();
        window.inputwebsite = $(".input-website").val();
        window.inputaddress = $(".input-landline").val();
        var res=true;
        if(inputname.length==0){
            $(".name-feild-required").removeClass("hide");
            res=false;
        }
        if(inputemail.length==0){
            $(".email-feild-required").removeClass("hide");
            res=false;
        }
        if(inputmobile.length==0){
            $(".mobile-feild-required").removeClass("hide");
            res=false;
        }
        if(inputlandline.length==0){
            $(".landline-feild-required").removeClass("hide");
            res=false;
        }
        if(inputwebsite.length==0){
            $(".website-feild-required").removeClass("hide");
            res=false;
        }
        if(inputaddress.length==0){
            $(".address-feild-required").removeClass("hide");
            res=false;
        }
        if(res==true){
            storeData();
            location.reload();
        }else{
            return res;
        }
      })
})