var app = app || {};

app = {
	init : x=>{
		$.getScript(x+'/resources/js/router.js',()=>{
			$.extend(new Router(x));
			app.intro.onCreate();
		})
	}
};

app.intro = (x=>{
	var context, view, image;
	var onCreate=()=>{
		$content = $('#content');
		context = $.context();
		view = $.javascript() + '/view.js';
		setContentView();
	};
	var setContentView=()=>{
		$.getScript(view, ()=>{
			$content.html($(introView()));
			$('#btn-start').on('click', function(){
				app.nav.onCreate();
				app.residence.onCreate();
				app.footer.onCreate();
			});
		});
	};
	return {onCreate : onCreate};
})();

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
					if(!($('#a-res').parent('li').hasClass('active'))){
						$('#a-res').parent('li').addClass('active');
						$('#a-res').parent('li').siblings('li').removeClass('active');
					}
					app.residence.onCreate();
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
						.attr('data-toggle', 'tooltip')
						.attr('data-placement', 'bottom')
						.attr('title', '구현되지 않은 기능입니다'))
				.appendTo('#navbar');
			$('#a-sale[data-toggle]').tooltip();
			var loginedUser = sessionStorage.getItem('user');
			if(loginedUser == null){
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
			} else {
				$(createUL({id: '', clazz: 'nav navbar-nav navbar-right'}))
				.append($(createLI({id: 'li-login', clazz: ''}))
					.append($(createATag({id: 'a-mypage', clazz: '', val: '마이페이지'}))
						.on('click', e=>{
							e.preventDefault();
							app.login.mypage();
						})
					))
				.append($(createLI({id: 'li-join', clazz: ''}))
					.append($(createATag({id: 'a-logout', clazz: '', val: '로그아웃'})))
						.on('click', e=>{
							e.preventDefault();
							sessionStorage.removeItem('user');
							sessionStorage.removeItem('name');
							sessionStorage.removeItem('pw');
							sessionStorage.removeItem('phone');
							sessionStorage.removeItem('email');
							app.residence.onCreate();
							app.nav.onCreate();
						})
					)
				.appendTo('#navbar');
			}
			
		});
	};
	return {onCreate : onCreate};
})();

app.footer = (x=>{
	var context, view, image, footer;
	var onCreate=()=>{
		$footer = $('#footer');
		context = $.context();
		image = $.image();
		view = $.javascript() + '/view.js';
		setContentView();
	};
	var setContentView=()=>{
		$.getScript(view, ()=>{
			$footer.html(
				$(createDiv({id:'', clazz:'container-fluid'}))
					.attr('style', 'margin-top: 50px; background-color: #333; padding-top: 40px; padding-bottom: 10px;')
					.append($(createDiv({id:'', clazz:'container text-center'}))
						.attr('style', 'color: #fff')
						.append($(createPTag({id:'', clazz:'', val:'All material herein © 2005 – 2018 Agoda Company Pte. Ltd., All Rights Reserved.'}))
							.attr('style', 'line-height: 5px')
						)
						.append($(createPTag({id:'', clazz:'', val:'아고다는 온라인 여행 및 관련 서비스 분야의 세계적인 선도 기업인 Booking Holdings Inc.의 일부입니다.'})))
						.append($(createDiv({id:'', clazz:'footer-div-sns'}))
							.attr('style', 'margin-top: 50px')
							.append($(createUL({id:'', clazz:'list-inline'}))
								.attr('style', 'list-style: none;')
								.append($(createLI({id:'', clazz:''}))
									.append($(createATag({id:'', clazz:'', link:'#', val:''}))
										.attr('style', 'display: block; margin: 0 15px; width: 40px; height: 40px; background: #fff; transform: rotate(45deg)')
										.append($(createITag({id:'', clazz:'fa fa-facebook',val:''}))
											.attr('style', 'font-size: 30px; line-height: 40px; color: #333; transform: rotate(-45deg)')
										)
									)
								)
								.append($(createLI({id:'', clazz:''}))
										.append($(createATag({id:'', clazz:'', link:'#', val:''}))
												.attr('style', 'display: block; margin: 0 15px; width: 40px; height: 40px; background: #fff; transform: rotate(45deg)')
												.append($(createITag({id:'', clazz:'fa fa-twitter',val:''}))
														.attr('style', 'font-size: 30px; line-height: 40px; color: #333; transform: rotate(-45deg)')
												)
										)
								)
								.append($(createLI({id:'', clazz:''}))
										.append($(createATag({id:'', clazz:'', link:'#', val:''}))
												.attr('style', 'display: block; margin: 0 15px; width: 40px; height: 40px; background: #fff; transform: rotate(45deg)')
												.append($(createITag({id:'', clazz:'fa fa-google-plus',val:''}))
														.attr('style', 'font-size: 30px; line-height: 40px; color: #333; transform: rotate(-45deg)')
												)
										)
								)
								.append($(createLI({id:'', clazz:''}))
										.append($(createATag({id:'', clazz:'', link:'#', val:''}))
												.attr('style', 'display: block; margin: 0 15px; width: 40px; height: 40px; background: #fff; transform: rotate(45deg)')
												.append($(createITag({id:'', clazz:'fa fa-linkedin',val:''}))
														.attr('style', 'font-size: 30px; line-height: 40px; color: #333; transform: rotate(-45deg)')
												)
										)
								)
								.append($(createLI({id:'', clazz:''}))
										.append($(createATag({id:'', clazz:'', link:'#', val:''}))
												.attr('style', 'display: block; margin: 0 15px; width: 40px; height: 40px; background: #fff; transform: rotate(45deg)')
												.append($(createITag({id:'', clazz:'fa fa-instagram',val:''}))
														.attr('style', 'font-size: 30px; line-height: 40px; color: #333; transform: rotate(-45deg)')
												)
										)
								)
							)
						)
						.append($(createPTag({id:'', clazz:'', val:'HK-AGWEB-2A03'})).attr('style', 'margin-top: 50px'))
					)
					.appendTo($content));
		});
	};
	return {onCreate : onCreate};
})();