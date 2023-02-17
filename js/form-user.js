document.addEventListener('DataPageReady', function (event) {
	$( 'input[name$="RecordPhone"]' ).mask( '999-999-9999' );
	$( 'input[name$="RecordZip"]' ).mask( '99999' );
});