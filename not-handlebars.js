


var $content = $( '#content' ),
	$div  = $( '<div class="tab">탭 영역 입니다. </div>' ),
	$gnb = $( '<h1 > header 부분 영역입니다. </h1>' ),
	$input = $( '<input type="text" placeholder="텍스트" value="1" disalbed>' );
$content.append( $div ).append( $gnb ).prepend( $input );

var $content = $( '#content' ),
	$div  = $( '<div>' ).addClass('tab').html( '탭 영역입니다. ' ),
	$gnb = $( '<h1></h1>' ).html( ' header 부분 영역입니다. '),
	$input = $( '<input>' ).attr({
		"type" : "text",
		"placeholder" : "텍스트"
	}).val( "1" ).prop( 'disalbed', true );
$content.append( $div ).append( $gnb ).prepend( $input );


var $content = $( '#content' );
function makeTemplate ( $elem, dContent, gContent ) {
	var $div  = $( '<div>' ).addClass('tab').html( dContent ),
		$gnb = $( '<h1></h1>' ).html( gContent ),
		$input = $( '<input>' ).attr({
			"type" : "text",
			"placeholder" : "텍스트"
		}).val( "1" ).prop( 'disalbed', true );
	return $elem.append( $div ).append( $gnb ).prepend( $input );
};
makeTemplate( $content, '탭 영역입니다.', 'header 부분 영역입니다.' );