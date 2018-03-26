$(document).ready(function(){
	//removes error class when password and username is entered
	$('#pass').blur(function(){
         	if(!$('#pass').val().length==0){
         		$('#pass').removeClass('borderError');
         		$('.error').hide();
         	 //$("#pass").remove('<span class="error">Please enter Password</span>');

         	}
         	if(!$('#user').val().length==0){
         		$('#user').removeClass('borderError');
         		$('.UserError').hide();
         	}

         });
	//Checks if Username has been entered.
	$('form').submit(function(event){
         if(!$('#user').val().length ){
         	$("#user").addClass('borderError');
         	$("#user").before('<span class="UserError">Please enter Username</span>');
         	//event.preventDefault();
         	if(!$('#pass').val().length){
         	 $('#pass').addClass('borderError');
         	 $("#pass").before('<span class="error">Please enter Password</span>');
         	 event.preventDefault();
            
             
         }
         	}

         else {
         	    //modal pops up and timeout at 1 second
         		event.preventDefault();
         	$('#example').modal('show');       
         	setTimeout(function(){
         		window.location.href="index.html";
         	},2000);
         }
         	
         
         
         //stores username in variable
        
        
         	var name = $('#user').val();
     
        
	
});
	//window.location.href="index.html";
	$('#attendance').click(function(){
       window.location.href="attendance.html";
	});
	
	//qr

	/*$('.generate-qr-code').on('click', function(){

// Clear Previous QR Code
$('#qrcode').empty();

// Set Size to Match User Input
$('#qrcode').css({
'width' : $('.qr-size').val(),
'height' : $('.qr-size').val()
})

// Generate and Output QR Code
$('#qrcode').qrcode({width: $('.qr-size').val(),height: $('.qr-size').val(),text: $('.qr-url').val()});

});*/

/* Qr code generator for the attendance */

(function () {
    'use strict';

    var jq = window.jQuery;
    var guiValuePairs = [
        ['size', 'px'],
        ['minversion', ''],
        ['quiet', ' modules'],
        ['radius', '%'],
        ['msize', '%'],
        ['mposx', '%'],
        ['mposy', '%']
    ];

    function updateGui() {
        jq.each(guiValuePairs, function (idx, pair) {
            var $label = jq('label[for="' + pair[0] + '"]');
            $label.text($label.text().replace(/:.*/, ': ' + jq('#' + pair[0]).val() + pair[1]));
        });
    }

    function updateQrCode() {
        var options = {
            render: jq('#render').val(),
            ecLevel:"H",// jq('#eclevel').val(),
            minVersion: 5, //parseInt(jq('#minversion').val(), 10),

            fill: jq('#fill').val(),
            background: jq('#background').val(),
            // fill: jq('#img-buffer')[0],

            text: jq('#text').val(),
            size: parseInt(jq('#size').val(), 10),
            radius:0, // parseInt(jq('#radius').val(), 10) * 0.01,
            quiet: 3, //parseInt(jq('#quiet').val(), 10),

            mode:2, //parseInt(jq('#mode').val(), 10),

            mSize: 12 *0.01, //parseInt(jq('#msize').val(), 10) * 0.01,
            mPosX:50 * 0.01, // parseInt(jq('#mposx').val(), 10) * 0.01,
            mPosY:50 *0.01,// parseInt(jq('#mposy').val(), 10) * 0.01,

            label: jq('#label').val(),
            fontname: jq('#font').val(),
            fontcolor: jq('#fontcolor').val(),

            image: jq('#img-buffer')[0]
        };

        jq('#container').empty().qrcode(options);
    }

    function update() {
        updateGui();
        updateQrCode();
    }

    function onImageInput() {
        var input = jq('#image')[0];
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (event) {
                jq('#img-buffer').attr('src', event.target.result);
                jq('#mode').val('4');
                setTimeout(update, 250);
            };
            reader.readAsDataURL(input.files[0]);
        }
    }

    function download() {
        jq('#download').attr('href', jq('#container canvas')[0].toDataURL('image/png'));
    }

    function init() {
        jq('#download').on('click', download);
        jq('#image').on('change', onImageInput);
        jq('input, textarea, select').on('input change', update);
        jq(window).load(update);
        update();
    }

    jq(init);
}());
/*End of qr generator js*/

/*printer */
$('#print').click(function(){
      $('#attend').show();
       window.print();
});

/*$.ajax({
	type:"get",
	url : "attend.xml",
	dataType: "xml",
	success : function(xml) {
		// body..ech.
		echo("goood");
	}


});*/

});