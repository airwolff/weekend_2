$( document )
	.ready( function () {


		$.ajax( {
				type: 'GET',
				url: '/data',
				success: function ( data ) {
						console.log( 'GET/data returns ', data );

						var i = 0;
						var backInt = null;
						var aheadInt = null;

						$( '#prev' )
							.on( 'click', backward );

						$( '#next' )
							.on( 'click', forward );

						info( data[ i ] );

						function info( data ) {
							$( '#name' )
								.text( data.name );
							$( '#userName' )
								.text( data.githubUserName );
							$( '#shout' )
								.text( data.shoutout );
							// $( '.text' )
							// 	.fadeIn( 'fast' );
						} // end function info



						function forward() {
							if ( i === data.length - 1 ) {
								i = 0;
								info( data[ i ] );
								i++;
								fastFoward()
							} else {
								i++;
								info( data[ i ] );
								fastFoward();
							}
						} // end function forward


						function backward() {
							if ( i === 0 ) {
								i = data.length - 1;
								info( data[ i ] );
								rewind()
							} else {
								i--;
								info( data[ i ] );
								rewind()
							}
						} // end function backward

						function rewind() {
							if ( backInt ) {
								clearInterval( backInt );
								clearInterval( aheadInt );
								// $( '.text' )
								// 	.fadeOut( 'slow' );
							}
							backInt = setInterval( backward, 9000 );
						} // end function rewind

						function fastFoward() {
							if ( aheadInt ) {
								clearInterval( aheadInt );
								clearInterval( backInt );
								// $( '.text' )
								// 	.fadeOut( 'slow' );
							}
							aheadInt = setInterval( forward, 9000 );
						}
					} // end function fastFoward

			} ) // end function success

	} ); // end ajax

// end ready function
