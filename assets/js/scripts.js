$(function() {

/*--------------------------------------------------
Change Ajax Pages
---------------------------------------------------*/

	$(".ajax-link").live("click", function(){
		$this = $(this);
		var link = $this.attr('href');
		if( link != current_url && link != '#' ) { 
			$.ajax({
				url:link,
				processData:true, 
				dataType:'html', 
				success:function(data){
					document.title = $(data).filter('title').text(); 
					current_url = link;
					if (typeof history.pushState != 'undefined') history.pushState( data, 'Page', link );  
					var content_to_display = "#content-ajax";
					var current_container = $( content_to_display );
					var header_to_display = "#header-wrapper";
					var current_header = $( header_to_display );
					var footer_to_display = "#footer-content";
					var current_footer = $( footer_to_display );					
					
					delay = 0;					
					
					setTimeout(function(){						
						
						$(".clapat-mask").fadeIn(500);
						$("#clapatloader").delay(50).fadeIn(100);
						$('html, body').delay(600).animate({ scrollTop:  0  },50);						
						
						setTimeout(function(){
							
							current_container.html(' ');
							current_container.html( $(data).find( content_to_display ).html() );
							current_header.html(' ');
							current_header.html( $(data).find( header_to_display ).html() );
							current_footer.html(' ');
							current_footer.html( $(data).find( footer_to_display ).html() );
							$('body').waitForImages({
								finished: function() {
									openWebsite();
									_gaq.push(['_trackPageview'], '/'+current_url); 
								},										
								waitForAll: true
							});								
							
						},1100);
					},delay);
				}
			});
		}
		return false;
	});
})//End All