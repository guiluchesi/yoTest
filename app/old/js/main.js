$('#shovel').on('mouseover', function(){
	$('#paEsquerda').css('animation', 'movepaLeft 1s forwards');
	$('#paDireita').css('animation', 'movepaRight 1s forwards');
});

$('#shovel').on('mouseleave', function(){
	$('#paEsquerda').css('animation', 'movepaLeftBack 1s forwards');
	$('#paDireita').css('animation', 'movepaRightBack 1s forwards');
});