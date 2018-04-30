app.admin = (()=>{
	var context, view, history, detailHistory;
	var onCreate =()=>{
		$content = $('#content');
		context = $.context();
		history = '';
		detailHistory = '';
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
				sessionStorage.setItem('initHistory', JSON.stringify(d.users));
				$content.html(($(createDiv({id: 'div-header', clazz: 'container'})).append($(createHTag({num : '3', val: '회원 리스트'})).attr('class', 'page-header'))));
				$(test()).appendTo('#div-header');
				$(createForm({id: 'search-form', clazz: '', action: '', method: ''})).prependTo('#div-row');
				$(searchBox()).appendTo('#search-form');
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
	                                	sessionStorage.setItem('searchHistory', JSON.stringify(x.search));
	                                	console.log(sessionStorage.getItem('searchHistory'));
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
                                    $(function(){
                                    	eventfunc();
                                    });
                                    if(d.pageNum === 13){
                                    	detailHistory = sessionStorage.getItem('initHistory');
                                    } else if(d.pageNum > 13){
                                    	detailHistory += JSON.stringify(x.users);
                                    	console.log(detailHistory);
                                    	alert('히스토리 추가');
                                    }
                                    sessionStorage.setItem('detailHistory', detailHistory);
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
			                                app.admin.member(1);
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
				
				var eventfunc = function(){
					$(function(){
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
				                                if(JSON.parse(history).length === 12){
				                                	member(1);
				                                } else {
				                                	tableCreate(JSON.parse(history));
				                                }
				                                eventfunc();
				                            },
				                            error : (x, h, m)=>{                            	
				                                alert('추가에서 에러 발생 x='+x+', h='+h+', m='+m);
				                            }
										});
									});
								},
								close: function(){
									$('modify-form').remove();
									history = sessionStorage.getItem('searchHistory');
									if(JSON.parse(history).length === 12){
										alert('디폴트');
	                                	member(1);
	                                } else {
	                                	alert('히스토리');
	                                	tableCreate(JSON.parse(history));
	                                }
									eventfunc();
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
											dataType : 'json',
											contentType : 'application/json',
											success : x=>{
												$.magnificPopup.close();
												history = historyAdd();
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
										$('#delete-form').remove();
										member(1);
									});
								},
								close: function(){
									member(1);
									$('#delete-form').remove();
								}
							}
						});
					});
				});
			};
			eventfunc();
		});
		});
	};

	var board=x=>{
		$.getJSON(context+'/adminjk/board/'+x, d=>{
			$content.empty();
			$content.html($(createDiv({id: 'board-div', clazz: 'container'})).append($(createBtn({id: 'back-btn', clazz: '', val: '버튼'}))
					.on('click', function(){
						window.history.back();
					})));
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
		$content.empty();
		$content.html($(createDiv({id: 'stat-body', clazz: 'container'})).attr('style', 'overflow: hidden'));
		$('#stat-body').append($(createDiv({id: 'chart-div', clazz: 'container'})).attr('style', 'float: left; position: absolute'));
		$('#stat-body').append($(createDiv({id: 'chart-div2', clazz: 'container'})).attr('style', 'float: left; position: absolute'));
		$('#stat-body').append($(createDiv({id: 'chart-div3', clazz: 'container'})).attr('style', 'float: left; position: absolute'));
		google.charts.load('current', {'packages':['corechart']});
		donutChart();
		barChart();
		$(function(){
			setInterval(function(){
				donutChart();
			}, 10000);
		});
	};
	
	var historyAdd=()=>{
		return !(sessionStorage.getItem('searchHistory') === null) ? 
				sessionStorage.getItem('searchHistory')
				: (!(sessionStorage.getItem('detailHistory') === null) ? 
					sessionStorage.getItem('detailHistory') : sessionStorage.getItem('initHistory'));
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
	};
	var donutChart = function(){
		$.ajax({
	        url: context+'/adminjk/statistics/board',
	        type: 'post',
	        dataType: 'json',
	        contentType: 'application/json',
	        async: false,
	        success: function(lists) {
	            google.charts.setOnLoadCallback(drawChart);
	            function drawChart() {
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
	                        title: "게시글이 5개 이상인 아이디",
	                        is3D: true,
	                        width: 1200,
	                        height: 700
	                };
	                var chart = new google.visualization.PieChart(document.getElementById('chart-div'));
	                chart.draw(view, options);
	            }
	        }
	    });
	};
	
	var barChart = function() {
		google.charts.setOnLoadCallback(drawBarChart);
        function drawBarChart(){
        	var data = new google.visualization.DataTable();
            data.addColumn('string', 'Topping');
            data.addColumn('number', 'Slices');
            data.addRows([
              ['Mushrooms', 3],
              ['Onions', 1],
              ['Olives', 1],
              ['Zucchini', 1],
              ['Pepperoni', 2]
            ]);

            var barchart_options = {title:'Barchart: How Much Pizza I Ate Last Night',
                           width: 1200,
                           height: 700,
                           legend: 'none'};
            var barchart = new google.visualization.BarChart(document.getElementById('chart-div2'));
            barchart.draw(data, barchart_options);
        }
      };
      
	return {
		onCreate : onCreate,
		member : member,
		donutChart : donutChart
		};
})();