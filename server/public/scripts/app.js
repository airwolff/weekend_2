$( document )
	.ready( function () {

		$.ajax( {
			type: "GET",
			url: "/data",
			success: function ( data ) {
				console.log( 'GET/data returns ', data );


				var i = 0;
				var divs = "<div id='name'></div>" +
					"<div id='userName'></div>" +
					"<div id='shout'></div>";

				$( "p" )
					.append( divs );

				function info( data[ i ] ) {
					$( "#name" )
						.text( "<p>" + this.name + "</p>" );
					$( "#userName" )
						.text( "<p>" + this.githubUserName + "</p>" );
					$( "#shout" )
						.text( "<p>" + this.shoutout + "</p>" );
					clearTimeout( timer );
					var timer = setTimeout( forward, 3000 );

				} // end function info
				function forward() {
					if ( data[ i ] > 17 ) {
						data[ i ] = 0;
						info( data[ i ] );
						i++;
					} else if ( data[ i ] >= 0 ) {
						i++;
						append( data[ i ] );

					}
				}

			} // end function success
		} ); // end ajax
	} ); // end ready function
