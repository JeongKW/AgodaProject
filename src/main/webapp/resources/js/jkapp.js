app.admin = (()=>{
	var context, view, img, history, detailHistory, donutfunc;
	var onCreate =x=>{
		$content = $('#content');
		context = $.context();
		history = '';
		img = $.image();
		donutfunc = function(){};
		$.cookie(x.user.id, 10);
		detailHistory = [];
		view = $.javascript() + '/jkview.js';
		setContentView();
	};
	var setContentView =()=>{
		$.getScript(view, ()=>{
			$content.empty();
			$footer.empty();
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
			$('.navbar-right').append($(createLI({id: '', clazz: ''}))
					.append($(createATag({id: 'admin-logout', val: '로그아웃'}))
						.on('click', e=>{
							e.preventDefault();
							$('.navbar-right').empty();
							if($.cookie('admin')){
								$.removeCookie('admin');
							}
							clearInterval(donutfunc);
							app.init(context);
						})));
			$('#a-residence').on('click', e=>{
				e.preventDefault();
				if(!($('#a-residence').parent('li').hasClass('active'))){
					$('#a-residence').parent('li').addClass('active');
					$('#a-residence').parent('li').siblings('li').removeClass('active');
				}
				residence(0);
			});
			$('#a-flight').on('click', e=>{
				e.preventDefault();
				flight(0);
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
				member(0);
			});
			$('#a-board').on('click', e=>{
				e.preventDefault();
				if(!($('#a-board').parent('li').hasClass('active'))){
					$('#a-board').parent('li').addClass('active');
					$('#a-board').parent('li').siblings('li').removeClass('active');
				}
				board(0);
			});
			$('#a-stat').on('click', e=>{
				e.preventDefault();
				if(!($('#a-stat').parent('li').hasClass('active'))){
					$('#a-stat').parent('li').addClass('active');
					$('#a-stat').parent('li').siblings('li').removeClass('active');
				}
				statistics(1);
			});
			if(!($('#a-member').parent('li').hasClass('active'))){
				$('#a-member').parent('li').addClass('active');
				$('#a-member').parent('li').siblings('li').removeClass('active');
			}
			member(0);
		});
	};
	var residence=x=>{
		clearInterval(donutfunc);
		$.post(context+'/adminjk/residence/'+x, d=>{
			$content.empty();
			var marginTop = ($(window).height() - 52 - 600);
			$content.html($(createImg({src: img + '/page_ready.jpg', clazz: 'img-rounded center-block'}))
				.attr('style', 'margin-top : ' + marginTop + 'px'));
		});
	};
	var flight=x=>{
		if(!($('#stat-body').is('div'))){
			clearInterval(donutfunc);
		}
		$content.empty();
		$content.html($(createDiv({id: 'map', clazz: 'container'})).attr('style', 'width: 700px; height: 700px'));
		var markers = [];
		$(function(){
			var initMap = function(){
				var location = [{lat: 22.3177343, lng: 114.1697933},
								{lat: 22.31944, lng: 114.17778},
								{lat: 22.3275003, lng: 114.1820670},
								{lat: 22.3280561, lng: 114.1608669},
								{lat: 22.3317876, lng: 114.1717674},
								{lat: 22.3107468, lng: 114.1661025}];
				var map = new google.maps.Map(document.getElementById('map'), {
					zoom: 14,
					center: location[0]
				});
				for(var i = 1; i < location.length; i++){
					var marker = new google.maps.Marker({
						position: location[i],
						map: map
					});
					markers.push(marker);
				}
				for(var i = 1; i < location.length; i++){
					markers[i].setMap(map);
				}
			};
			initMap();
		});
	};
	var member=x=>{
		clearInterval(donutfunc);
		$.post(context+'/adminjk/member/'+x, d=>{
			$.getScript(view, ()=>{
				$content.empty();
				sessionStorage.setItem('initHistory', JSON.stringify(d.users));
				$content.html(($(createDiv({id: 'div-header', clazz: 'container'})).append($(createHTag({num : '3', val: '회원 리스트'})).attr('class', 'page-header'))));
				$(test()).appendTo('#div-header');
				$(createForm({id: 'search-form', clazz: '', action: '', method: ''})).prependTo('#div-row');
				$(searchBox()).appendTo('#search-form');
				$(createForm({id: 'add-form', clazz: 'mfp-hide white-popup', action: '', method: 'post'}))
					.append($(createFieldSet()))
					.appendTo($content);
				$(createForm({id: 'modify-form', clazz: 'mfp-hide white-popup', action: '', method: 'post'}))
					.append($(createFieldSet2()))
					.appendTo($content);
				$(createForm({id: 'delete-form', clazz: 'mfp-hide white-popup', action: '', method: 'post'}))
					.append($(deleteView()))
					.appendTo($content);
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
	                                    eventfunc();
	                                	sessionStorage.setItem('searchHistory', JSON.stringify(x.search));
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
							method : 'post',
                            dataType : 'json',
                            contentType : 'application/json',
                            success : x=>{
                            	if(x.users.length){
                            		if(x.users.length < 12){
                            			$('#btn-detail').remove();
                            		}
                                    $(createTr2({list : x.users})).appendTo('#member-tab');
                                    $('#member-tab tbody tr td').addClass('text-center').attr('style','font-size:15px')
                                    $('.btn-success').off('click');
                                    $('.btn-danger').off('click');
                                   	eventfunc();
                                    if(d.pageNum === 12){
                                    	detailHistory = JSON.parse(sessionStorage.getItem('initHistory'));
                                    	console.log(JSON.stringify(detailHistory));
                                    	detailHistory = detailHistory.concat(x.users);
                                    	sessionStorage.setItem('detailHistory', JSON.stringify(detailHistory));
                                    } else if(d.pageNum > 13){
                                    	detailHistory = detailHistory.concat(x.users);
                                    	sessionStorage.setItem('detailHistory', JSON.stringify(detailHistory));
                                    	console.log(detailHistory);
                                    }
                                    d.pageNum = x.pageNum;
                            	}
                            },
                            error : (x, h, m)=>{                            	
                                alert('추가에서 에러 발생 x='+x+', h='+h+', m='+m);
                            }
						});
					});
				$('#member-tab thead tr th').addClass('text-center').attr('style','font-size:15px');
				$('#member-tab tbody tr td').addClass('text-center').attr('style','font-size:15px');
				$(function(){
					$('#btn-member-add').magnificPopup({
							items:{
								src: '#add-form',
								type: 'inline'
							},
							callbacks: {
								beforeOpen: function(){
												$('#btn-add-submit').on('click', e=>{
													e.preventDefault();
													$.ajax({
														url: context+'/adminjk/member/add',
														method : 'post',
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
														},
														error : (x, h, m)=>{        	
															alert('추가에서 에러 발생 x='+x+', h='+h+', m='+m);
														}
													});
												});
											},
								close: function(){
									member(0);
								}
							},
						});
				});
				
				var eventfunc = function(){
					$(function(){
						$('.btn-success').each(function(){
							$(this).click(function(){
								var selected = $(this);
								var id = selected.parent().siblings('td').eq(0).text();
								var name = selected.parent().siblings('td').eq(1).text();
								history = historyAdd() || history;
								$.magnificPopup.open({
									items:{
										src: '#modify-form',
										type: 'inline'
									},
									callbacks: {
										beforeOpen: function(){
											$('#modify-id').val(id);
											$('#modify-name').val(name);
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
						                            },
						                            error : (x, h, m)=>{                            	
						                                alert('추가에서 에러 발생 x='+x+', h='+h+', m='+m);
						                            }
												});
											});
										},
										close: function(){
											if(history.length === 12){
			                                	member(0);
			                                } else {
			                                	tableCreate(history);
			                                }
											$('.btn-success').off('click');
		                                    $('.btn-danger').off('click');
											eventfunc();
										}
									}
								});
							});
						});
						
						$('.btn-danger').each(function(){
							$('.btn-danger').click(function(){
								var selected = $(this);
								var id = selected.parent().siblings('td').eq(0).text();
								history = historyAdd() || history;
								$.magnificPopup.open({
									items:{
										src: '#delete-form',
										type: 'inline'
									},
									callbacks: {
										beforeOpen: function(){
											$('#btn-delete-member').on('click', e=>{
												e.preventDefault();
												$.ajax({
													url: context+'/adminjk/member/delete/'+id,
													method : 'POST',
													dataType : 'json',
													contentType : 'application/json',
													success : x=>{
														$.magnificPopup.close();
													},
													error : (x, h, m)=>{
														alert('추가에서 에러 발생 x='+x+', h='+h+', m='+m);
													}
												});
											});
											$('#btn-cancel-member').on('click', e=>{
												e.preventDefault();
												$.magnificPopup.close();
											});
										},
										close: function(){
											if(history.length === 12){
			                                	member(0);
			                                } else {
			                                	tableCreate(history);
			                                }
											$('.btn-success').off('click');
		                                    $('.btn-danger').off('click');
											eventfunc();
										}
									}
								});
							});
						});
					});
				};
				eventfunc();
			});
		});
	};

	var board=x=>{
		clearInterval(donutfunc);
		var i = 1;
		$content.empty();
		$content.html($(createDiv({id: 'board-admin-div', clazz: ''})));
		$content.append($(createForm({id: 'modify-bform', clazz: 'mfp-hide white-popup', action: '', method: 'get'}))
			.append($(modifyAdminBoard())));
		$content.append($(createForm({id: 'delete-bform', clazz: 'mfp-hide white-popup', action: '', method: 'get'}))
			.append($(deleteAdminBoard())));
		var boardfunc = function(){
			$(function(){
				$('.btn-success').each(function(){
					$(this).on('click', function(){
						var seq = $(this).parent().siblings('td').eq(0).text();
						$.ajax({
							url : context+'/adminjk/boardDetail/' + seq,
							dataType : 'json',
							contentType : 'application/json',
							success : x=>{
								var id = x.detail.id;
								$.magnificPopup.open({
									items:{
										src: '#modify-bform',
										type: 'inline'
									},
									callbacks: {
										beforeOpen: function(){
											$('#modify-bid').val(id);
											$('#modify-title').val(x.detail.title)
											$('#modify-content').val(x.detail.content)
											$('#btn-modify-bsubmit').on('click', e=>{
												e.preventDefault();
												var json = {
													title: $('#modify-title').val(),
													content : $('#modify-content').val()
												};
												$.ajax({
													url : context+'/adminjk/boardModify/' + id,
													data : JSON.stringify(json),
													method: 'post',
													dateType : 'json',
													contentType : 'application/json',
													success : x=>{
														$.magnificPopup.close();
													}
												});
											});
										},
										close: function(){
											board(0);
										}
									}
								});
							}
						});
					});
				});
				$('.btn-danger').each(function(){
					$(this).on('click', function(){
						var deleteSeq = $(this).parent().siblings('td').eq(0).text();
						$.magnificPopup.open({
							items:{
								src: '#delete-bform',
								type: 'inline'
							},
							callbacks: {
								beforeOpen: function(){
									$('#btn-delete-board').on('click', e=>{
										e.preventDefault();
										$.ajax({
											url: context+'/adminjk/boardDelete/'+deleteSeq,
											dataType : 'json',
											contentType : 'application/json',
											success : x=>{
												$.magnificPopup.close();
											},
											error : (x, h, m)=>{
												alert('추가에서 에러 발생 x='+x+', h='+h+', m='+m);
											}
										});
									});
									$('#btn-cancel-board').on('click', e=>{
										e.preventDefault();
										$.magnificPopup.close();
									});
								},
								close: function(){
									board(0);
								}
							}
						});
					});
				});
			});
		};
		var list = function(x){
			$.ajax({
				url: context+'/adminjk/board/'+x,
				method: 'get',
				dataType: 'json',
				contentType: 'application/json',
				success: x=>{
					if(!(x.board.length == 0)){
						var pageNum = x.pageNum;
						$('#board-admin-div').append($(createDiv({id: 'tab-' + i, clazz: 'test'})).append($(createDiv({id: '', clazz: 'container'})).attr('style', 'width: 1197px; height: 800px; position: relative')
								.append($(createTab({id: '', clazz: 'striped'}))
										.append($(createThead(createTh({list: ['글번호', '글제목', '작성일', '작성자', '수정/삭제']}))))
										.append($(createTbody(createTr3({list : x.board})))))));
						i++;
						$(function(){
							$('.test').each(function(){
								$(this).on("wheel", function (e) {
									e.preventDefault();
									if (!event) event = window.event;
									if (event.wheelDelta) {
										delta = event.wheelDelta / 120;
									} else if (event.detail) delta = -event.detail / 3;
									var moveTop = null;
									if (delta < 0) {
										if ($(this).next() != undefined) {
											moveTop = $(this).next().offset();
										}
									} else {
										if ($(this).prev() != undefined) {
											moveTop = $(this).prev().offset();
											if(moveTop.top == 52){
												moveTop.top = 0;
											}
										}
									}
									$("body, html").stop().animate({
										scrollTop: moveTop.top + 'px'
									}, {
										duration: 800, complete: function () {
										}
									});
								});
							});
						});
						$('.btn-success').off('click');
                        $('.btn-danger').off('click');
						boardfunc();
						if(!(x.board.length < 15)){
							list(pageNum);
						}
					}
				}
			});
		};
		list(x);
		$('.btn-success').off('click');
        $('.btn-danger').off('click');
		boardfunc();
	};
	var statistics=x=>{
		var chartSel = '';
		$content.empty();
		$content.html($(createDiv({id: 'stat-body', clazz: 'container'})));
		$('#stat-body').append($(createUL({id: '', clazz: 'nav nav-tabs'}))
			.attr('style', 'margin-top: 30px')
			.append($(createLI({id: 'li-stat-board', clazz: 'active'})))
			.append($(createLI({id: 'li-stat-linechart', clazz: ''})))
			.append($(createLI({id: 'li-stat-test', clazz: ''}))));
		$('#li-stat-board').append($(createATag({id: 'a-stat-board', val: '게시판통계'}))
			.on('click', function(){
				if(!($('#a-stat-board').parent('li').hasClass('active'))){
					$('#a-stat-board').parent('li').addClass('active');
					$('#a-stat-board').parent('li').siblings('li').removeClass('active');
				}
				$('#dashboard').attr('hidden', true);
				$('#board-chart-div').attr('hidden', false);
			}));
		$('#li-stat-linechart').append($(createATag({id: 'a-stat-linechart', val: '예약통계'}))
			.on('click', function(){
				if(!($('#a-stat-linechart').parent('li').hasClass('active'))){
					$('#a-stat-linechart').parent('li').addClass('active');
					$('#a-stat-linechart').parent('li').siblings('li').removeClass('active');
				}
				$('#board-chart-div').attr('hidden', true);
				$('#dashboard').attr('hidden', false);
			}));
		$('#stat-body').append($(createDiv({id: 'board-chart-div', clazz: 'container'}))
			.append($(createDiv({id: 'select-chart', clazz: ''})))
			.append($(createDiv({id: 'chart-div', clazz: ''})))
		);
		$('#select-chart').attr('style', 'margin-top: 30px')
			.append($(createDiv({id: '', clazz: 'row'}))
				.append($(createDiv({id: '', clazz: 'col-xs-2'}))
					.append($(createSelect({id: 'chart-sel', name: 'chart-sel', clazz: 'form-control'}))
						.append($(createOption({val : '', content : '그래프 선택'})))
						.append($(createOption({val : 'column', content : '막대그래프'})))
						.append($(createOption({val : 'pie', content : '원형그래프'})))
						.append($(createOption({val : 'test', content : '임시그래프'})))))
				.append($(createDiv({id: '', clazz: 'col-xs-1'}))
					.attr('style', 'padding-left: 0px')
					.append($(createBtn({id: 'btn-chart-sel', clazz: 'btn btn-primary', val: '선택'}))
					.on('click', function(){
						clearInterval(donutfunc);
						chartSel = $('select[name="chart-sel"]').val();
						donutChart(chartSel);
						donutfunc = setInterval(function(){donutChart(chartSel);}, 10000);
					}))));
		$('#stat-body').append($(createDiv({id: 'dashboard', clazz: 'container'})).attr('hidden', true));
		$('#dashboard').append($(createBtn({id: 'edit', clazz: 'btn btn-default', val: 'Edit Chart'})));
		$('#dashboard').append($(createDiv({id: 'chart-div2', clazz: 'container'})));
		$('#dashboard').append($(createDiv({id: 'control-div', clazz: 'container'})));
		google.charts.load('current', {'packages':['corechart', 'controls', 'charteditor']});
		googleChart();
	};
	
	var historyAdd=()=>{
		return !(sessionStorage.getItem('searchHistory') == null) ? 
				JSON.parse(sessionStorage.getItem('searchHistory'))
				: (!(sessionStorage.getItem('detailHistory') == null) ? 
					JSON.parse(sessionStorage.getItem('detailHistory')) : JSON.parse(sessionStorage.getItem('initHistory')));
	};
	
	var historyDelete=()=>{
		sessionStorage.removeItem('initHistory');
		sessionStorage.removeItem('searchHistory');
		sessionStorage.removeItem('detailHistory');
	};
	
	var tableCreate=x=>{
		$('#member-tab').empty();
    	$('#btn-detail').remove();
    	$('#member-tab')
    		.append($(createThead(createTh({list: ['아이디', '이름', '이메일', '핸드폰', '수정/삭제']}))))
    		.append($(createTbody(createTr2({list : x}))));
    	$('#member-tab thead tr th').addClass('text-center').attr('style','font-size:15px');
		$('#member-tab tbody tr td').addClass('text-center').attr('style','font-size:15px');
	};
	var donutChart = function(x){
		$.ajax({
	        url: context+'/adminjk/statistics/board',
	        type: 'post',
	        dataType: 'json',
	        contentType: 'application/json',
	        success: function(lists) {
	        	var drawChart = function(){};
	        	if(x == 'column'){
	        		drawChart = function() {
	        			var dataChart = [['아이디', '개수', {role : 'style'}]];
	        			var color = ['#dc3912', '#ff9900', '#109618', '#3366cc', '#990099'];
	        			if(lists.data.length != 0) {
	        				$.each(lists.data, function(i, item){
	        					dataChart.push([item.id, item.count*1, color[i]]);
	        				});
	        			} else {
	        				dataChart.push(['입력해주세요', 1]);
	        			}
	        			var data = google.visualization.arrayToDataTable(dataChart);
	        			var view = new google.visualization.DataView(data);
	        			var options = {
	        					title: "게시물 top 5",
	        					width: 1200,
	        					height: 700,
	        					bar: {groupWidth: '85%'},
	        			        legend: { position: 'none' },
	        			};
	        			var chart = new google.visualization.ColumnChart(document.getElementById('chart-div'));
	        			chart.draw(view, options);
	        		};
	        	} else if(x == 'pie'){
	        		drawChart = function() {
	        			var dataChart = [['id', 'Percentage']];
	        			if(lists.data.length != 0) {
	        				$.each(lists.data, function(i, item){
	        					dataChart.push([item.id, item.count*1.0]);
	        				});
	        			}else {
	        				dataChart.push(['입력해주세요', 1]);
	        			}
	        			var data = google.visualization.arrayToDataTable(dataChart);
	        			var view = new google.visualization.DataView(data);
	        			var options = {
	        					title: "게시물 top 5",
	        					is3D: true,
	        					width: 1200,
	        					height: 700
	        			};
	        			var chart = new google.visualization.PieChart(document.getElementById('chart-div'));
	        			chart.draw(view, options);
	        		};
	        	}
	        	google.charts.setOnLoadCallback(drawChart);
	        }
	    });
	};
	
     var googleChart = function(){
    	 google.charts.setOnLoadCallback(drawChart2);
         function drawChart2() {
             var data = new google.visualization.DataTable();
             data.addColumn('number', 'X');
             data.addColumn('number', 'Y1');
             data.addColumn('number', 'Y2');

             for (var i = 0; i < 100; i++) {
                 data.addRow([i, Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)]);
             }
             
             var dash = new google.visualization.Dashboard(document.getElementById('dashboard'));

             var control = new google.visualization.ControlWrapper({
                 controlType: 'ChartRangeFilter',
                 containerId: 'control-div',
                 options: {
                     filterColumnIndex: 0,
                     ui: {
                         chartOptions: {
                             height: 50,
                             width: 1000,
                             chartArea: {
                                 width: '80%'
                             }
                         },
                         chartView: {
                             columns: [0, 1]
                         }
                     }
                 }
             });
             var chart = new google.visualization.ChartWrapper({
                 chartType: 'LineChart',
                 containerId: 'chart-div2'
             });
             function setOptions (wrapper) {
                 // sets the options on the chart wrapper so that it draws correctly
                 wrapper.setOption('height', 700);
                 wrapper.setOption('width', 1000);
                 wrapper.setOption('chartArea.width', '80%');
                 // the chart editor automatically enables animations, which doesn't look right with the ChartRangeFilter
                 wrapper.setOption('animation.duration', 0);
             }
             setOptions(chart);
             document.getElementById('edit').onclick = function () {
                 var editor = new google.visualization.ChartEditor();
                 google.visualization.events.addListener(editor, 'ok', function () {
                     chart = editor.getChartWrapper();
                     setOptions(chart);
                     dash.bind([control], [chart]);
                     dash.draw(data);
                 });
                 editor.openDialog(chart);
             };
             dash.bind([control], [chart]);
             dash.draw(data);
         }
     };
	return {
		onCreate : onCreate
	};
})();