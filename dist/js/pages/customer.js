$(function () {

 loadcustomer();
    $("#txtId").focus();
    $("#tbl-customer").on('click','tbody tr td i',function () {
        if (confirm("Do You Wish To Delete This Customer..!")) {
            $(this).parents("tr").fadeOut(1000, function () {
                $(this).remove();
                showOrHideFooter();
            });
        }
    });
    showOrHideFooter();
});

function loadcustomer() {

    $("#tbl-customer tbody tr").remove();
    for (var i = 0; i < customers.length; i++) {
        var html = '<tr>' +
            '<td>' + customers[i].id + '</td>' +
            '<td>' + customers[i].name + '</td>' +
            '<td>' + customers[i].address + '</td>' +
            '<td>' +
            '<i class="fa fa-trash red"></i>' +
            '</td>' +
            '</tr>';
        $("#tbl-customer tbody").append(html);
    }

    $("#btnSubmit").click(function () {
        var cusId = $("#txtId").val();
        var cusName = $("#txtName").val();
        var cusAddress = $("#txtCustomerAddress").val();

        if (cusId.match("^C[0-9]+$") && cusName.match("^[A-Za-z]+$") && cusAddress.match("^[A-Za-z]+$")) {

            var html = '<tr>' +
                '<td>' + cusId + '</td>' +
                '<td>' + cusName + '</td>' +
                '<td>' + cusAddress + '</td>' +
                '<td>' +
                '<i class="fa fa-trash red"></i>' +
                '</td>' +
                '</tr>';
            $("#tbl-customer tbody").append(html);
            showOrHideFooter();
        } else {
            if (!cusId.match("^C[0-9]+$")) {
                $("#txtId").addClass("invalid");
                $("#txtId").select();
            }
            if (!cusName.match("^[A-Za-z]+$")) {
                $("#txtName").addClass("invalid");
                $("#txtName").select();
            }
            if (!cusAddress.match("^[A-Za-z]+$")) {
                $("#txtCustomerAddress").addClass("invalid");
                $("#txtCustomerAddress").select();
            }
        }
    });
}

$("#txtId,#txtName,#txtCustomerAddress").keyup(function () {
    $("#txtId,#txtName,#txtCustomerAddress").removeClass("invalid");
});

function showOrHideFooter(){
    console.log($("#tbl-customer tbody tr").length);
    if ($("#tbl-customer tbody tr").length > 0){
        $("#tbl-customer tfoot").hide();
    }else{
        $("#tbl-customer tfoot").show();
    }
}

