$(document).ready(function () {

	var loc = window.location.href; // returns the full URL

	if (/register/.test(loc)) {
		$('#register').addClass('active');
	} else if (/vote/.test(loc)) {
		$('#vote').addClass('active');
	} else if (/results/.test(loc)) {
		$('#results').addClass('active');
	} else if (/admin/.test(loc)) {
		$('#admin').addClass('active');
	}

	var table_view_btn_flag = true;

	$('#table_view_btn').click(function () {
		if (table_view_btn_flag == true) {
			$('#voter_table').hide();
			$('#candidate_table').show();
			table_view_btn_flag = false
		} else {
			$('#voter_table').show();
			$('#candidate_table').hide();
			table_view_btn_flag = true
		}

	});

	$('#register_btn').click(function () {
		//$('#cam_col, #reg_col').hide();
		$('#reg_col').hide();
		$('#register_row').append(`<div class="col-md-12">
									<div class="jumbotron jumbotron-fluid">
										<div class="container">
											<h1 class="display-4 text-center">Registration Completed</h1>
											<p class="lead text-center">
											Please Wait...
											Downloading your QR Code...
											<div>
												<div class="lds-css ng-scope"><div style="width:100%;height:100%" class="lds-ellipsis"><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div></div>
												</div>
											</div>
											</p>
										</div>
									</div>
								</div>`);
	});
	// window.location = "http://localhost:3000/register/vote/";
});

var QR_Data;

var upload_qr = function (event) {
	$('.lds-spinner').hide();
	var reader = new FileReader();
	reader.onload = function () {
		var output = document.getElementById('qr_img');
		output.src = reader.result;
		QR_Data = reader.result;
		$('#upload_qr').hide();
		$('#submit_qr').show();
		alert("QR Code Uploaded");
	};
	reader.readAsDataURL(event.target.files[0]);
	$('#qr_img').hide();
	$('#submit_qr').hide();

	setTimeout(function () {
		addQRtoform();
	}, 1000)
};

var submit_qr_func = function (event) {
	$('#qr_img').hide();
	$('#submit_qr').hide();
	javascript:document.forms[0].submit();
	setTimeout(function () {
		addQRtoform();
	}, 1000)
}



function addQRtoform() {
	document.getElementsByName("qrdata")[0].setAttribute("value", QR_Data);
};