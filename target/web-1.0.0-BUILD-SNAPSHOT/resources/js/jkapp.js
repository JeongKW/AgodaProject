<<<<<<< HEAD
app.admin = (()=>{
	var context, view;
	var onCreate =()=>{
		$content = $('#content');
		context = $.context();
		view = $.javascript() + '/view.js';
		setContentView();
	};
	var setContentView =()=>{
		$.getScript(view, ()=>{
			$('#nav').html($(nav()));
			$content.html($(admin()));
			$('#menu-bar').attr('style', 'width: 15%; min-width: 15%; margin: 90px 20px 0 30px').siblings('div').attr('style', 'margin-top: 50px');
			$('.nav-sidebar').css('width', '250px');
			$('#menu-bar ul li').attr('style', 'width: 100%; background:#003040; background:linear-gradient(#080808, #555)');
			$('#menu-bar ul li a').attr('style', 'color: white; display: block; font-size: 13px; line-height: 35px; padding: 0 15px; text-decoration: none; transition: all 0.15s;');
			$('#a-residence').on('click', e=>{
				e.preventDefault();
				$('#accord-content').empty();
				$('#accord-content').html($(createHTag({num : '3', val: '숙소 리스트'})).attr('class', 'page-header'));
			});
			$('#a-flight').on('click', e=>{
				e.preventDefault();
				$('#accord-content').empty();
				$('#accord-content').html($(createHTag({num : '3', val: '항공 리스트'})).attr('class', 'page-header'));
			});
			$('#a-member').on('click', e=>{
				e.preventDefault();
				$('#accord-content').empty();
				$('#accord-content').html($(createHTag({num : '3', val: '회원 리스트'})).attr('class', 'page-header'));
			});
			$('#a-stat').on('click', e=>{
				e.preventDefault();
				$('#accord-content').empty();
				$('#accord-content').html($(createHTag({num : '3', val: '통계'})).attr('class', 'page-header'));
			});
		});
	};
	
	return {onCreate : onCreate};
=======
app.admin = (()=>{
	var context, view;
	var onCreate =()=>{
		$content = $('#content');
		context = $.context();
		view = $.javascript() + '/view.js';
		setContentView();
	};
	var setContentView =()=>{
		$.getScript(view, ()=>{
			$('#nav').html($(nav()));
			$content.html($(admin()));
			$('#menu-bar').attr('style', 'width: 15%; min-width: 15%; margin: 90px 20px 0 30px').siblings('div').attr('style', 'margin-top: 50px');
			$('.nav-sidebar').css('width', '250px');
			$('#menu-bar ul li').attr('style', 'width: 100%; background:#003040; background:linear-gradient(#080808, #555)');
			$('#menu-bar ul li a').attr('style', 'color: white; display: block; font-size: 13px; line-height: 35px; padding: 0 15px; text-decoration: none; transition: all 0.15s;');
			$('#a-residence').on('click', e=>{
				e.preventDefault();
				$('#accord-content').empty();
				$('#accord-content').html($(createHTag({num : '3', val: '숙소 리스트'})).attr('class', 'page-header'));
			});
			$('#a-flight').on('click', e=>{
				e.preventDefault();
				$('#accord-content').empty();
				$('#accord-content').html($(createHTag({num : '3', val: '항공 리스트'})).attr('class', 'page-header'));
			});
			$('#a-member').on('click', e=>{
				e.preventDefault();
				$('#accord-content').empty();
				$('#accord-content').html($(createHTag({num : '3', val: '회원 리스트'})).attr('class', 'page-header'));
			});
			$('#a-stat').on('click', e=>{
				e.preventDefault();
				$('#accord-content').empty();
				$('#accord-content').html($(createHTag({num : '3', val: '통계'})).attr('class', 'page-header'));
			});
		});
	};
	
	return {onCreate : onCreate};
>>>>>>> refs/heads/Yongdae
})();