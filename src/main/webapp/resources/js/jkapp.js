app.admin = (()=>{
	var context, view;
	var onCreate =()=>{
		$content = $('#content');
		context = $.context();
		view = $.javascript() + '/jkview.js';
		setContentView();
	};
	var setContentView =()=>{
		$.getScript(view, ()=>{
			$('.modal-backdrop').remove();
			$('.navbar').empty();
			$('.navbar-right').empty();
			$content.html(
				$(createDiv({id: 'div-admin', clazz: 'container-fluid'}))
					.append($(createDiv({id: '', clazz: 'row'}))
						.append($(createDiv({id: 'menu-bar', clazz: 'col-sm-3 sidebar'}))
							.append($(createUL({id: '', clazz: 'nav nav-sidebar'}))
								.append($(createLI({id: '', clazz: ''}))
									.append($(createATag({id: 'a-residence', val: '숙소통합관리'}))))
								.append($(createLI({id: '', clazz: ''}))
									.append($(createATag({id: 'a-flight', val: '항공통합관리'}))))
								.append($(createLI({id: '', clazz: ''}))
									.append($(createATag({id: 'a-member', val: '회원통합관리'}))))
								.append($(createLI({id: '', clazz: ''}))
									.append($(createATag({id: 'a-board', val: '게시판관리'}))))
								.append($(createLI({id: '', clazz: ''}))
									.append($(createATag({id: 'a-stat', val: '통계'}))))))
						.append($(createDiv({id: 'accord-content', clazz: 'col-sm-9 main'}))))
			);
			$('#menu-bar').attr('style', 'width: 15%; min-width: 15%; margin: 50px 20px 0 30px').siblings('div').attr('style', 'margin-top: 10px');
			$('.nav-sidebar').css('width', '250px');
			$('#menu-bar ul li').attr('style', 'width: 100%; background:#003040; background:linear-gradient(#080808, #555)');
			$('#menu-bar ul li a').attr('style', 'color: white; display: block; font-size: 13px; line-height: 35px; padding: 0 15px; text-decoration: none; transition: all 0.15s;');
			$('#a-residence').on('click', e=>{
				e.preventDefault();
				residence(1);
			});
			$('#a-flight').on('click', e=>{
				e.preventDefault();
				flight(1);
			});
			$('#a-member').on('click', e=>{
				e.preventDefault();
				member(1);
			});
			$('#a-board').on('click', e=>{
				e.preventDefault();
				board(1);
			});
			$('#a-stat').on('click', e=>{
				e.preventDefault();
				statistics(1);
			});
		});
	};
	var residence=x=>{
		$.getJSON(context+'/adminjk/residence/'+x, d=>{
			$('#accord-content').empty();
			$('#accord-content').html($(createHTag({num : '3', val: '숙소 리스트'})).attr('class', 'page-header'));
		});
	};
	var flight=x=>{
		$.getJSON(context+'/adminjk/flight/'+x, d=>{
			$('#accord-content').empty();
			$('#accord-content').html($(createHTag({num : '3', val: '항공 리스트'})).attr('class', 'page-header'));
		});
	};
	var member=x=>{
		$.getJSON(context+'/adminjk/member/'+x, d=>{
			$.getScript(view, ()=>{
				$('#accord-content').empty();
				$('#accord-content').html($(createHTag({num : '3', val: '회원 리스트'})).attr('class', 'page-header'));
				$(test()).appendTo('#accord-content');
				$(createBtn({id: 'btn-search', clazz: 'btn btn-default', val: createGlyphicon({clazz: 'glyphicon-search', val: ''})})).appendTo('#span-btn');
				$('.dropdown-menu').attr('style','min-width: 10px');
				$(createTab({id: 'member-tab', clazz: 'hover'}))
					.append($(createThead(createTh({list: ['아이디', '이름', '이메일', '핸드폰', '수정/삭제']}))))
					.append($(createTbody(createTr2({list : d.users}))))
					.appendTo($('#accord-content'));
				$('#member-tab thead tr th').addClass('text-center');
				$('#member-tab tbody tr td').addClass('text-center');
				$(function(){
					$('#member-tab tbody tr td button').on('click', function(){
						var selected = $(this);
						if(selected.text() === '수정'){
							var id = selected.parent().siblings('td').eq(0).text();
							alert(id + '수정');
						} else {
							var id = selected.parent().siblings('td').eq(0).text();
							alert(id + '삭제');
						}
					});
				});
			});
		});
	};
	var board=x=>{
		$.getJSON(context+'/adminjk/board/'+x, d=>{
			$('#accord-content').empty();
			$('#accord-content').html($(createHTag({num : '3', val: '게시판 리스트'})).attr('class', 'page-header'));
		});
	};
	var statistics=x=>{
		$.getJSON(context+'/adminjk/statistics/'+x, d=>{
			$('#accord-content').empty();
			$('#accord-content').html($(createHTag({num : '3', val: '통계'})).attr('class', 'page-header'));
		});
	};
	
	return {onCreate : onCreate};
})();