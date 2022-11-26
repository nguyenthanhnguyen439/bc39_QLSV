// Hien thi button
$( function() {
    $( "#datepicker" ).datepicker({
        showOn: "button",
        buttonImage: "img/calendar-icon.png",
        buttonImageOnly: true,
        buttonText: "Select date",
        dateFormat: "dd/mm/yy"
        // dateFormat: "mm/dd/yy"

    });
} );

// Lay ngay mac dinh
$( document ).ready(function() {
    var d = new Date();

    var month = d.getMonth()+1;
    var day = d.getDate();

    //Định dang mm/dd/yy
    // var output = ((''+month).length<2 ? '0' : '') + month  + '/' +
    // ((''+day).length<2 ? '0' : '') + day + '/' +
    // d.getFullYear();

    //Định dang dd/mm/yy
    var output =  ((''+day).length<2 ? '0' : '') + day + '/' + ((''+month).length<2 ? '0' : '') + month + '/' + 
     + d.getFullYear();
    $('#datepicker').val(output);   
});