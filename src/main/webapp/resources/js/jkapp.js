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
			$content.empty();
			$('.modal-backdrop').remove();
			$('.modal-open').removeClass();
			$('.navbar').empty();
			$('.navbar-right').empty();
			$('.navbar').append($(createLI({id: '', clazz: ''}))
							.append($(createATag({id: 'a-residence', val: '숙소통합관리'}))))
						.append($(createLI({id: '', clazz: ''}))
							.append($(createATag({id: 'a-flight', val: '항공통합관리'}))))
						.append($(createLI({id: '', clazz: ''}))
							.append($(createATag({id: 'a-member', val: '회원통합관리'}))))
						.append($(createLI({id: '', clazz: ''}))
							.append($(createATag({id: 'a-board', val: '게시판관리'}))))
						.append($(createLI({id: '', clazz: ''}))
							.append($(createATag({id: 'a-stat', val: '통계'}))));
			$('#a-residence').on('click', e=>{
				e.preventDefault();
				if(!($('#a-residence').parent('li').hasClass('active'))){
					$('#a-residence').parent('li').addClass('active');
					$('#a-residence').parent('li').siblings('li').removeClass('active');
				}
				residence(1);
			});
			$('#a-flight').on('click', e=>{
				e.preventDefault();
				flight(1);
				if(!($('#a-flight').parent('li').hasClass('active'))){
					$('#a-flight').parent('li').addClass('active');
					$('#a-flight').parent('li').siblings('li').removeClass('active');
				}
			});
			$('#a-member').on('click', e=>{
				e.preventDefault();
				if(!($('#a-member').parent('li').hasClass('active'))){
					$('#a-member').parent('li').addClass('active');
					$('#a-member').parent('li').siblings('li').removeClass('active');
				}
				member(1);
			});
			$('#a-board').on('click', e=>{
				e.preventDefault();
				if(!($('#a-board').parent('li').hasClass('active'))){
					$('#a-board').parent('li').addClass('active');
					$('#a-board').parent('li').siblings('li').removeClass('active');
				}
				board(1);
			});
			$('#a-stat').on('click', e=>{
				e.preventDefault();
				if(!($('#a-stat').parent('li').hasClass('active'))){
					$('#a-stat').parent('li').addClass('active');
					$('#a-stat').parent('li').siblings('li').removeClass('active');
				}
				statistics(1);
			});
		});
	};
	var residence=x=>{
		$.getJSON(context+'/adminjk/residence/'+x, d=>{
			$content.empty();
			$content.html($(createHTag({num : '3', val: '숙소 리스트'})).attr('class', 'page-header'));
		});
	};
	var flight=x=>{
		$.getJSON(context+'/adminjk/flight/'+x, d=>{
			$content.empty();
			$content.html($(createHTag({num : '3', val: '항공 리스트'})).attr('class', 'page-header'));
		});
	};
	var member=x=>{
		$.getJSON(context+'/adminjk/member/'+x, d=>{
			$.getScript(view, ()=>{
				$content.empty();
				$content.html(($(createDiv({id: 'div-header', clazz: 'container'})).append($(createHTag({num : '3', val: '회원 리스트'})).attr('class', 'page-header'))));
				$(createForm({id: 'search-form', clazz: '', action: '', method: ''})).appendTo('#div-header');
				$(test()).appendTo('#search-form');
				$(createBtn({id: 'btn-search', clazz: 'btn btn-default', val: createGlyphicon({clazz: 'glyphicon-search', val: ''})}))
					.on('click', e=>{
						e.preventDefault();
						var data = ($('#input-search').val() !== '') ? $('#input-search').val() : 'allboard';
						var filter = $('select[name="filter"]').val();
						if(data === 'allboard'){
							member(1);
						} else {
							$.ajax({
								url: context+'/adminjk/member/search/'+ filter +'/'+ data,
								method : 'GET',
	                            dataType : 'json',
	                            contentType : 'application/json',
	                            success : x=>{
	                                $.magnificPopup.close();
	                                $(function(){
	                                	$('#member-tab').empty();
	                                	$('#btn-detail').remove();
	                                	$('#member-tab')
	                                		.append($(createThead(createTh({list: ['아이디', '이름', '이메일', '핸드폰', '수정/삭제']}))))
	                                		.append($(createTbody(createTr2({list : x.search}))));
	                                	$(function(){
	                                    	eventfunc();
	                                    });
	                                });
	                            },
	                            error : (x, h, m)=>{                            	
	                                alert('추가에서 에러 발생 x='+x+', h='+h+', m='+m);
	                            }
							});
						}
					})
					.appendTo('#span-btn');
				$('.dropdown-menu').attr('style','min-width: 10px');
				$(createDiv({id: 'table-div', clazz: ''}))
					.attr('style', 'height: 600px; overflow-y: auto')
					.appendTo($content);
				$(createTab({id: 'member-tab', clazz: 'hover'}))
					.attr('style', 'width: 90%; margin-left: auto; margin-right: auto')
					.append($(createThead(createTh({list: ['아이디', '이름', '이메일', '핸드폰', '수정/삭제']}))))
					.append($(createTbody(createTr2({list : d.users}))))
					.appendTo('#table-div');
				$(createBtn({id: 'btn-detail', clazz: 'btn btn-primary center-block', val: '더보기'}))
					.appendTo('#table-div')
					.on('click', e=>{
						e.preventDefault();
						$.ajax({
							url: context+'/adminjk/member/'+ d.pageNum,
							method : 'GET',
                            dataType : 'json',
                            contentType : 'application/json',
                            success : x=>{
                            	if(x.users.length){
                            		if(x.users.length < 12){
                            			$('#btn-detail').remove();
                            		}
                                    $(createTr2({list : x.users})).appendTo('#member-tab');
                                    $('#member-tab tbody tr td').addClass('text-center').attr('style','font-size:15px')
                                    d.pageNum = x.pageNum;
                                    $(function(){
                                    	eventfunc();
                                    });
                            	}
                            },
                            error : (x, h, m)=>{                            	
                                alert('추가에서 에러 발생 x='+x+', h='+h+', m='+m);
                            }
						});
					});
				$('#member-tab thead tr th').addClass('text-center').attr('style','font-size:15px');
				$('#member-tab tbody tr td').addClass('text-center').attr('style','font-size:15px');
				
				var eventfunc = function(){
					$(function(){
						$('#btn-member-add').magnificPopup({
							items:{
								src: $(createForm({id: 'add-form', clazz: 'mfp-hide white-popup', action: '', method: 'post'}))
								.append($(createFieldSet()))
								.appendTo($content),
								type: 'inline'
							},
							open: function(){
								$('#btn-add-submit').on('click', e=>{
									e.preventDefault();
									$.ajax({
										url: context+'/adminjk/member/add',
										method : 'POST',
			                            data : JSON.stringify({
			                            	id: $('#input-id').val(),
			                            	pw: $('#input-pw').val(),
			                            	name: $('#input-name').val(),
			                            	email: $('#input-email').val(),
			                            	phone: $('#input-phone').val()
			                            }),
			                            dataType : 'json',
			                            contentType : 'application/json',
			                            success : x=>{
			                                $.magnificPopup.close();
			                                member(1);
			                            },
			                            error : (x, h, m)=>{                            	
			                                alert('추가에서 에러 발생 x='+x+', h='+h+', m='+m);
			                            }
									});
								});
							},
							close: function(){
								app.admin.member(1);
							}
						});
					});
					$('.btn-success').click(function(){
						var selected = $(this);
						var id = selected.parent().siblings('td').eq(0).text();
						var name = selected.parent().siblings('td').eq(1).text();
						$.magnificPopup.open({
							items:{
								src: $(createForm({id: 'modify-form', clazz: 'mfp-hide white-popup', action: '', method: 'post'}))
								.append($(createFieldSet2()))
								.appendTo($content),
								type: 'inline'
							},
							callbacks: {
								beforeOpen: function(){
									$('#modify-id').val(id).attr('disabled', true);
									$('#modify-name').val(name).attr('disabled', true);
									$('#btn-modify-submit').on('click', e=>{
										e.preventDefault();
										$.ajax({
											url: context+'/adminjk/member/update',
											method : 'POST',
				                            data : JSON.stringify({
				                            	id: $('#modify-id').val(),
				                            	pw: $('#modify-pw').val(),
				                            	name: $('#modify-name').val(),
				                            	email: $('#modify-email').val(),
				                            	phone: $('#modify-phone').val()
				                            }),
				                            dataType : 'json',
				                            contentType : 'application/json',
				                            success : x=>{
				                                $.magnificPopup.close();
				                                member(1);
				                            },
				                            error : (x, h, m)=>{                            	
				                                alert('추가에서 에러 발생 x='+x+', h='+h+', m='+m);
				                            }
										});
									});
								},
								close: function(){
									app.admin.member(1);
								}
							}
						});
					});

					$('.btn-danger').click(function(){
						var selected = $(this);
						var id = selected.parent().siblings('td').eq(0).text();
						$.magnificPopup.open({
							items:{
								src: $(createForm({id: 'delete-form', clazz: 'mfp-hide white-popup', action: '', method: 'post'}))
								.append($(deleteView()))
								.appendTo($content),
								type: 'inline'
							},
							callbacks: {
								beforeOpen: function(){
									$('#btn-delete-member').on('click', e=>{
										e.preventDefault();
										$.ajax({
											url: context+'/adminjk/member/delete/'+id,
											method : 'POST',
											data : JSON.stringify({
												id: $('#modify-id').val()
											}),
											dataType : 'json',
											contentType : 'application/json',
											success : x=>{
												$.magnificPopup.close();
												member(1);
											},
											error : (x, h, m)=>{
												alert('추가에서 에러 발생 x='+x+', h='+h+', m='+m);
											}
										});
									});
									$('#btn-cancel-member').on('click', e=>{
										e.preventDefault();
										$.magnificPopup.close();
										member(1);
									});
								},
								close: function(){
									member(1);
								}
							}
						});
					});
				};
				$(function(){
                	eventfunc();
                });
			});
		});
	};
	
	var board=x=>{
		$.getJSON(context+'/adminjk/board/'+x, d=>{
			$content.empty();
			$content.html();
		});
		$(window).scroll(function(){
			if(($(window).scrollTop()+$(window).height()) > $(document).height() - 400){
				for(var i = 0; i < 10; i++){
					($(createDiv({id: '', clazz: ''})).append('ajax 요청')).appendTo('#content');
				}
			}
		});
	};
	var statistics=x=>{
		$.getJSON(context+'/adminjk/statistics/'+x, d=>{
			$content.empty();
			$content.html($(createHTag({num : '3', val: '통계'})).attr('class', 'page-header'));
		});
	};
	
	return {
		onCreate : onCreate,
		member : member
		};
})();