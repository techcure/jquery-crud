
$(document).ready(function(){
  $("#search").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("tbody tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});

$(document).ready(function(){

      $("#submitBtn").click(function(){
        $("#updatetBtn").hide();
        
        $(".gender ").change(function(){
            var selValue = $("input[type='radio']:checked").val();
        });
            var name = $('#name').val();
            var course = $('select').val();
            var email = $('#email').val();
            var password = $('#pass').val();
            var cpassword = $('#repass').val();
            var genderid = $("input[type='radio']:checked").val();
            var phone = $('#phone').val();
            var address = $('#address').val();
            var agree = $('#agree').val();

            var agree = $("input[type=checkbox]:checked");

/*            if (name == '' || email == '' || password == '' || cpassword == '') {
                alert("Please fill all fields...!!!!!!");
            }
            if ((password.length) < 4) {
                alert("Password should be 4 character in length...!!!!!!");

            } 
            if (!(password).match(cpassword)) {
                alert("Your passwords don't match. Try again?");
                return false

            }
            if (phone.length<10) {
                alert("Enter 10 digits of contact numbers");
                return false
            }

            if ($("#infoTable tbody").length == 0) {
                $("#infoTable").append("<tbody></tbody>");
            }


            if(!$("#agree_checkbox").prop("checked")){

                alert("Please select the terms and conditions")
                return false
            }*/

            var count = $('#tbody_id').find('tr').length+1

            var rows=[];
            $('.table tbody tr').each(function(){
               var id=$(this).data('row_id');
               if( rows.indexOf(id) ==-1){
                   rows.push(id)
               }
            });

            var totalUnique= rows.length

            $("#infoTable tbody").append(
                "<tr id ='trid_"+ count +"' class = 'tr_class' data-name="+ $('#name').val() +" data-select="+ $('select').val() +" data-radio="+ $("input[type='radio']:checked").val() +" data-phone= "+ $('#phone').val() +" data-email="+ $('#email').val() +" data-address="+ $('#address').val() +" data-pass="+ $('#pass').val() +" data-repass="+ $('#repass').val() +">\
                <td id = 'count_"+ count +"'><input type='checkbox' id='Checkbox1' class='checkBoxClass' value='Checkbox1'></td>\
                <td id = 'count_"+ count +"'>"+ count +"</td>\
                <td id = 'name_"+ count +"'>"+ $('#name').val() +"</td>\
                <td id = 'select_"+ count +"'>"+ $('select').val() +"</td>\
                <td id = 'checked_"+ count +"'>"+ $("input[type='radio']:checked").val()+"</td>\
                <td id = 'phone_"+ count +"'>"+ $('#phone').val() +"</td>\
                <td id = 'email_"+ count +"'>"+ $('#email').val() +"</td>\
                <td id = 'address_"+ count +"'>"+ $('#address').val() +"</td>\
                <td id = 'pass_"+ count +"'>"+ $('#pass').val() +"</td>\
                <td id = 'repass_"+ count +"'>"+ $('#repass').val() +"</td>\
                <td><button type = 'button' id = 'updateBtn' class='btn btn-success btn-sm' onclick = 'edit.call(this)'>UPDATE</button></td>\
                <td><button type = 'button' id = 'deleteid' class='btn btn-danger btn-sm' onclick = 'del.call(this)'>DELETE</button></td>\
                </tr>"
            );
        });
    });

function del(){

            $(this).closest('tr').remove(); 
            $('.table tbody tr').each(function(i){
                $($(this).find('td')[1]).html(i+1);
            }); 
            if($('.table tbody tr').length==0){
                $('.table tbody').append('<tr class="empty_result"><td colspan="5">There is no data !</td></tr>');
            }
    }

function edit(){

            $("#myModal").modal('show');
            $("#submitBtn").hide();
            $("#updatetBtn").show();

            $('input:radio[name="gender"]').prop('checked', false);
            var idd = this.parentElement.parentElement.id;

            console.log(idd);
            $('#myModal').attr('data-row_id', idd);

            var name = this.parentElement.parentElement.dataset.name;
            var course = this.parentElement.parentElement.dataset.select;
            var email = this.parentElement.parentElement.dataset.email;
            var password = this.parentElement.parentElement.dataset.pass;
            var cpassword = this.parentElement.parentElement.dataset.repass;
            var genderid = this.parentElement.parentElement.dataset.radio;
            var phone = this.parentElement.parentElement.dataset.phone;
            var address = $("#address_" + this.parentElement.parentElement.id.split("_")[1]).text()

            $('select').val(course);
            $('input:radio[name="gender"][value="'+genderid+'"]').prop('checked', true);
            $("#name").val(name);
            $("#email").val(email);
            $("#pass").val(password);
            $("#repass").val(cpassword);
            $("#phone").val(phone);
            $("#address").val(address);
    }

function update(){

            $("#key").val();
            $("#name").val();
            $('select').val(); 
            $("#phone").val();
            $("#address").val();
            $("#email").val();
            $("#pass").val();
            $("#repass").val();

            trval = $('#myModal').attr('data-row_id');
            id_val = trval.split('_')[1];

            $("#"+trval).children('#name_'+id_val).text($("#name").val());
            $("#"+trval).children('#select_'+id_val).text($('select').val());
            $("#"+trval).children('#checked_'+id_val).text($("input[type='radio']:checked").val());
            $("#"+trval).children('#phone_'+id_val).text($("#phone").val());

            $("#"+trval).children('#address_'+id_val).text($("#address").val());

            $("#"+trval).children('#email_'+id_val).text($("#email").val());
            $("#"+trval).children('#pass_'+id_val).text($("#pass").val());
            $("#"+trval).children('#repass_'+id_val).text($("#repass").val());
    }

function openme(){
            $("#updatetBtn").hide();
            $("#submitBtn").show();
            $("#name").val("");
            $("#phone").val("");
            $('input:radio[name="gender"]').prop('checked', false);
            $("#address").val("");
            $("#email").val("");
            $("#pass").val("");
            $("#repass").val("");
    }

$(document).ready(function () {
            $("#_checkbox").click(function (){
            $(".checkBoxClass").prop('checked', $(this).prop('checked'));
            });
    });

function deleteall(){

            $("input[type=checkbox]:checked").closest("tr").remove();
            $('.table tbody tr').each(function(i){
            $($(this).find('td')[1]).html(i+1);
            });
            if($('.table tbody tr').length==0){
                $('.table tbody').append('<tr class="empty_result"><td colspan="5" class = "no_data">There is no data !</td></tr>');
            }
    }

$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();   
});

/* Code for for pagination*/

$(document).ready(function(){
            $('#infoTable').after('<div id="nav"></div>');
            var rowsShown = 4;
            var rowsTotal = $('#infoTable tbody tr').length;
            var numPages = rowsTotal/rowsShown;
            for(i = 0;i < numPages;i++) {
                var pageNum = i + 1;
                $('#nav').append('<a href="#" rel="'+i+'">'+pageNum+'</a> ');
            }
            $('#infoTable tbody tr').hide();
            $('#infoTable tbody tr').slice(0, rowsShown).show();
            $('#nav a:first').addClass('active');
            $('#nav a').bind('click', function(){

            $('#nav a').removeClass('active');
            $(this).addClass('active');
            var currPage = $(this).attr('rel');
            var startItem = currPage * rowsShown;
            var endItem = startItem + rowsShown;
            $('#infoTable tbody tr').css('opacity','0.0').hide().slice(startItem, endItem).
            css('display','table-row').animate({opacity:1}, 300);
    });
});

/*End pagination code*/

function sortTableByName(){
        var table=$('#infoTable');
        var tbody =$('#tbody_id');

        var all_tr = $('#infoTable tbody').children()
        var all_td = $('#infoTable tbody').children().children()

        var compare_rows = function (a,b){

/*
        var a_val = $('#infoTable tbody').find("tr").text().toLowerCase();
        var b_val = $('#infoTable tbody').find("tr").text().toLowerCase();*/
        
        var a_val = $('#infoTable tbody').find("#name_1").text().toLowerCase();
        var b_val = $('#infoTable tbody').find("#name_2").text().toLowerCase();

        if (a_val>b_val){
            return 1;
          }
        if (a_val<b_val){
            return -1;
          }
            return 0;
        };
        $('#infoTable .tr_class').sort(compare_rows).appendTo('#infoTable');
}

/*$(document).ready(function(){
  $("#clearBtn").click(function(){

    for(i=2;i<10;i++){ 
            $('input').val("");
            $('textarea').val("");
        }
  });
});*/
