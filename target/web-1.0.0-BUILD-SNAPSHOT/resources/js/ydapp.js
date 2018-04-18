app.residence = (()=>{
	var context, view, image;
	var onCreate =()=>{
		$content = $('#content');
		context = $.context();
		view = $.javascript() + '/ydview.js';
		image = $.image();
		setContentView();
	};
	var setContentView =()=>{
		$.getScript(view, ()=>{
			$content.html($(residence(image)));
			$(function(){
				/*Filp function*/
				$('.flip').click(function(){
					console.log('click');
			    	$(this).find('.thumbnail').toggleClass('flipped');
				});

				/*magnificPopup*/
				$('#img-youtube').magnificPopup({
					items: {
						src : 'http://www.youtube.com/watch?v=7HKoqNJtMTQ'
					},
					type : 'iframe',
					iframe: {
						markup: '<div class="mfp-iframe-scaler">'
									+'<div class="mfp-close"></div>'
									+'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'
								+'</div>',
						patterns: {
							youtube: {
								index: 'youtube.com/',
								id: 'v=',
								src: '//www.youtube.com/embed/%id%?autoplay=1'
							}
						},
						srcAction: 'iframe_src',
					}
				});

				$('#a-intro').click(function(e){
					e.preventDefault();
					$('#div-intro').slideToggle("slow");
				});

				$('#li-resi-main-1 > a').css({'border-radius' :'0px'});
				$('#main-li-2 > a').css({'background-color' :'#333', 'color' : '#000', 'opacity' : '0.8'});
				$('#main-li-1').click(function(){
					$(this).data('clicked', true);
					if($(this).data('clicked')) {
						$('#main-li-1 > a').addClass('active').css({'background-color' :'#000', 'color' : '#fff', 'border' : '0px', 'opacity' : '1'});
						$('#main-li-2 > a').css({'background-color' :'#fff', 'color' : '#333', 'opacity' : '0.8'});
					}
				})
				$('#main-li-2').click(function(){
					$(this).data('clicked', true);
					if($(this).data('clicked')) {
						$('#main-li-2 > a').addClass('active').css({'background-color' :'#000', 'color' : '#fff', 'border' : '0px', 'opacity' : '1'});
						$('#main-li-1 > a').css({'background-color' :'#fff', 'color' : '#333', 'opacity' : '0.8'});
					} 
				})
			});
			$(function(){
				$('#img-youtube').css({'cursor':'pointer'});
				$('div.card .div-card-photo').hover(function(){
					$(this).css('box-shadow', '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)');
				}, function(){
					$(this).css('box-shadow', '');
				});
				$('#res-content div img').hover(function(){
					$(this).css({'filter':'brightness(40%)', 'cursor':'pointer'});
				}, function(){
					$(this).css({'filter':'brightness(70%)', 'cursor':'pointer'});
				});
				$('#res-content div div p').hover(function(){
					$(this).css('cursor', 'pointer').parent('div').siblings('img').css({'filter':'brightness(40%)', 'cursor':'pointer'});
				}, function(){
					$(this).css('cursor', 'pointer').parent('div').siblings('img').css({'filter':'brightness(70%)', 'cursor':'pointer'});
				});
			});
		});
	};
	
	return {onCreate : onCreate};
})();