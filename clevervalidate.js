function validateAndChangeBorder(formId,attachClass,ExistingClass) {
	ifSuccess = true;
	$('.form-control').each(function() {
		if($(this).attr("req") == "true" && $(this).val() == "") {
			$(this).attr("style","border:1px solid rgb(238, 101, 101)")
			ifSuccess = false;
		} else {
			$(this).attr("style","border: 1px solid #ccc;");
		}
	});
	return ifSuccess;
}

function validateAndShowInDiv(formId,divId) {

}

function sendalert() {
alert();
}
