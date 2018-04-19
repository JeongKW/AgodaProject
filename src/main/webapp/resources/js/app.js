var app = app || {};

app = {
	init : x=>{
		$.getScript(x+'/resources/js/router.js',()=>{
			$.extend(new router(x));
			app.nav.onCreate();
			app.residence.onCreate();
		})
	}
};

app.nav = (x=>{
	var context, view, image;
	var onCreate=()=>{
		$nav = $('#nav');
		context = $.context();
		image = $.image();
		view = $.javascript() + '/view.js';
		setContentView();
	};
	var setContentView=()=>{
		$.getScript(view, ()=>{
			$nav.html(
				$(createDiv({id: '', clazz: 'navbar-inverse'}))
					.append($(createDiv({id: '', clazz: 'container-fluid'}))
						.append($(createDiv({id: 'nav-header', clazz: 'navbar-header'})))
					.append($(createDiv({id: 'navbar', clazz: 'navbar-collapse collapse'}))))
			);
			$(createBtn({id: '', clazz: 'navbar-toggle collapsed', val: ''}))
				.attr('data-toggle', 'collapse')
				.attr('data-target', '#navbar')
				.attr('aria-expanded', 'false')
				.attr('aria-controls', 'navbar')
				.append($(createSpan({clazz: 'sr-only', val: 'Toggle navigation'})))
				.append($(createSpan({clazz: 'icon-bar', val: ''})))
				.append($(createSpan({clazz: 'icon-bar', val: ''})))
				.append($(createSpan({clazz: 'icon-bar', val: ''})))
				.appendTo('#nav-header');
			$(createATag({id: '', clazz: 'navbar-brand', val: createImg({id: '', clazz: '', src: image+'/agada.jpg', alt: 'agada_logo'})}))
				.on('click', e=>{
					e.preventDefault();
				})
				.attr('style', 'padding:10px 15px 15px 15px')
				.appendTo('#nav-header');
			$(createUL({id: '', clazz: 'nav navbar-nav navbar'}))
				.append($(createLI({id: 'li-res', clazz: 'active'}))
					.append($(createATag({id: 'a-res', clazz: '', val: '숙소'})))
						.on('click', e=>{
							e.preventDefault();
							if(!($('#a-res').parent('li').hasClass('active'))){
								$('#a-res').parent('li').addClass('active');
								$('#a-res').parent('li').siblings('li').removeClass('active');
							}
							app.residence.onCreate();
						})
					)
				.append($(createLI({id: 'li-flight', clazz: ''}))
					.append($(createATag({id: 'a-flight', clazz: '', val: '항공'})))
						.on('click', e=>{
							e.preventDefault();
							if(!($('#a-flight').parent('li').hasClass('active'))){
								$('#a-flight').parent('li').addClass('active');
								$('#a-flight').parent('li').siblings('li').removeClass('active');
							}
							app.flight.onCreate();
						})						
					)
				.append($(createLI({id: 'li-sale', clazz: ''}))
					.append($(createATag({id: 'a-sale', clazz: '', val: '특별세일'})))
						.on('click', e=>{
							e.preventDefault();
						})
					)
				.appendTo('#navbar');
			$(createUL({id: '', clazz: 'nav navbar-nav navbar-right'}))
				.append($(createLI({id: 'li-login', clazz: ''}))
					.append($(createATag({id: 'a-login', clazz: '', val: '로그인'}))
						.on('click', e=>{
							e.preventDefault();
							app.login.onCreate();
						})
					))
				.append($(createLI({id: 'li-join', clazz: ''}))
					.append($(createATag({id: 'a-join', clazz: '', val: '회원가입'})))
						.on('click', e=>{
							e.preventDefault();
							app.join.onCreate();
						})
					)
				.appendTo('#navbar');
		});
	};
	return {onCreate : onCreate};
})();