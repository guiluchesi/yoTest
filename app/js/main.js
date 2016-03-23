$('#face').on('mouseover', function(){
	$('#presentation').hide();
	$('.ballon').show();
});

$('#face').on('mouseleave', function(){
	$('#presentation').show();
	$('.ballon').hide();
});

$('.ballon').on('mouseover', function(){
	$(this).show();
	$('#presentation').hide();
});

$('.ballon').on('mouseleave', function(){
	$(this).hide();
	$('#presentation').show();
});