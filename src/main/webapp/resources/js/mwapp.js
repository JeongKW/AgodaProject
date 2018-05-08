
app.flightPayment=(()=>{
	var context, view;
	var onCreate=x=>{
		$content = $('#content');
		context =$.context();
		view = $.javascript()+'/mwview.js';
		setContentView(x);
	};
	var setContentView=x=>{
		$.getScript(view, ()=>{
			$content.html(createBookingPage(x));
		});
	}
	return {onCreate : onCreate};
})();

app.flight=(()=>{
	var context, view;
	var onCreate=()=>{
		$content = $('#content');
		context =$.context();
		view = $.javascript()+'/mwview.js';
		setContentView();
	};
	var setContentView=()=>{//
		$.getScript(view, ()=>{
			var date = new Date();
			var  departureTime = moment().format("YYYY-MM-DD");
			var arrivalTime =  moment().add(6, 'days').format("YYYY-MM-DD");
			/*메인 페이지 중단 (항공권, 숙소 탭)*/
			$content.html(createDiv({id : 'div-flight' , clazz : ''}));
			$(createDiv({id:'div-background',clazz:''})).appendTo('#div-flight')
			.attr('style', 'position : relative')
			$('#div-background').append(createImg({id : 'flight-img', 
				src : 'https://a1.r9cdn.net/dimg/phoenix-images/v3/agoda-flights-fd.jpg', clazz : '', alt : 'agoda'}));
			//$(createNav({id : 'nav-option', clazz : 'navbar navbar-default'})).appendTo('#div-background');
			$('#flight-img').attr('style', 'width : 100%; z-index : -1; height : auto; min-height : 557px; object-fit : cover;')
			
			$(createDiv({id : 'nav-option-div', clazz : ''})).appendTo('#div-background');
			$('#nav-option-div')
			.attr('style', 'width : 100%; margin-bottom : 0; position : absolute; top : 30%; left : 10%;')
			.append(createUL({id : 'nav-option-ul', clazz : 'nav nav-tabs'}))
			.append(createDiv({id : 'tab-contents-div', clazz : 'tab-content'}));
			
			$('#nav-option-ul')
			.attr('style', 'text-align:center; border-bottom: 0px;')
			.append(createLI({ id : 'hotels-li', clazz : ''}))
			.append(createLI({ id : 'tikets-li', clazz : 'active'}));
			$(createATag({id : 'a-hotels', link : '#hetels' , clazz : '', val : '숙소'}))
			.attr('data-toggle', 'tab')
			.attr('style', 'background-color : #252222; color : #fff;')
			.appendTo('#hotels-li');
			$(createATag({id : 'a-tikets', link : '#tikets' , clazz : '', val : '항공권'}))
			.attr('data-toggle', 'tab').appendTo('#tikets-li');
			
			$('#nav-option-div').append(createDiv({id : 'nav-menu-div', clazz : 'tab-content'}));
			
			$('#nav-menu-div')
			.attr('style', 'text-align : center; min-height : 150px; position : relative; background-color : white; opacity : 0.8; margin-right : 20%;')
			.append(createDiv({id : 'home', clazz : 'tab-pane-fade'}))
			.append(createDiv({id : 'menu1', clazz : 'tab-pane fade in active'}));
			$('#menu1')
			.append(createDiv({id : 'button-wrapper-div', clazz : ''}))
			.append(createDiv({id : 'input-wrapper-div', clazz : ''}))
			$('#button-wrapper-div').attr('style', 'width : 100%; height : 45px;')
			$(createDiv({id : 'button-div', clazz : ''})).appendTo('#button-wrapper-div')
			$(createDiv({id : 'wrapper-div', clazz : ''})).appendTo('#input-wrapper-div');
			$('#input-wrapper-div').attr('style', 'width : 100%; height : 45px;')
			
			$('#button-div').attr('style', 'float : left;')
			.append(createBtn({id : 'round-trip-btn', clazz : 'btn btn-sm', val : '왕복', type : ''}))
			.append(createBtn({id : 'one-way-btn', clazz : 'btn btn-sm', val : '편도', type : ''}))
			.append(createBtn({id : 'many-ways-btn', clazz : 'btn btn-sm', val : '다구간', type : ''}));
			$('#round-trip-btn').attr('style', 'margin : 5px; display: inline-block; vertical-align: middle;')
			$('#one-way-btn').attr('style', 'margin : 5px; display: inline-block; vertical-align: middle;')
			$('#many-ways-btn').attr('style', 'margin : 5px; display: inline-block; vertical-align: middle;')
			
			$('#wrapper-div').append(createDiv({id : 'wrapper-row-div', clazz : 'row-fixed'}));
			$('#wrapper-div').attr('style', 'width : 100%; height : 45px;')
			$('#wrapper-row-div').attr('style', 'position : absolute; padding: 15px;')
			.append(createDiv({id : 'wrapper-col1-div', clazz : 'col-sm-2'}))
			.append(createDiv({id : 'wrapper-col2-div', clazz : 'col-sm-2'}))
			.append($(createDiv({id : 'wrapper-col3-div', clazz : 'col-sm-3'})))
			.append(createDiv({id : 'wrapper-col4-div', clazz : 'col-sm-3'}))
			.append(createDiv({id : 'wrapper-col5-div', clazz : 'col-sm-1'}));
			
/*			$('#wrapper-div').append(createDiv({id : 'wrapper-container-div', clazz : ''}));
			$('#wrapper-div').attr('style', 'width : 100%; height : 45px;')
			$('#wrapper-container-div').append(createDiv({id : 'wrapper-row-div', clazz : 'row-fixed'}));
			$('#wrapper-row-div').attr('style', 'position : absolute; padding: 15px;')
			
*/		
			
			$('#wrapper-col1-div')
			.attr('style', 'padding-right : 0px; width : 20%')
			.append(createDiv({id : 'wrapper-fromCity-div', clazz : 'input-group'}));
			$('#wrapper-fromCity-div')
			.append(createInput({id : 'input-find-fromcity', clazz : 'form-control', type : 'text', value : '', placeholder:'출발 도시'}))
			.append(createDiv({id : 'wrapper-fromcity-btn-div', clazz : 'input-group-btn'}));
			$(createBtn({id : 'changecity-btn', clazz : 'btn btn-default', type : 'submit', val : ''})).appendTo('#wrapper-fromcity-btn-div');
			$(createITag({id : '', clazz : 'glyphicon glyphicon-transfer', val : ''})).appendTo('#changecity-btn');
			$('#changecity-btn').on('click', ()=>{
				var fromcity = $('#input-find-fromcity').val();
				var tocity = $('#input-find-tocity').val();
				$('#input-find-fromcity').val(tocity);
				$('#input-find-tocity').val(fromcity);
			});
			
			
			$('#wrapper-col2-div')
			.attr('style', 'padding-right : 0px; width : 20%')
			.append(createDiv({id : 'wrapper-toCity-div', clazz : 'form-group'}));
			$('#wrapper-toCity-div')
			.append(createInput({id : 'input-find-tocity', clazz : 'form-control', type : 'text', value : ''}))
			.append(createDiv({id : 'wrapper-tocity-btn-div', clazz : 'input-group-btn'}));
			$('#input-find-fromcity').attr('placeholde0r','출발 도시').attr('value', '서울');
			$('#input-find-tocity').attr('placeholder','도착 도시').attr('value', '오사카');
			
			$('#wrapper-col3-div')
			.attr('style', 'padding-right : 0px; width : 20%')
			.append($(createDiv({id : 'air-fromDate-div', clazz : 'input-group date'}))
					.append($(createInput({id : 'fromDate-input', type : 'text', clazz : 'form-control date', value : '' ,placeholder : ''}))
							.attr('name', 'getdate'))
					.append(createSpan2({ id : 'fromDate-addon-span', clazz : 'input-group-addon date',
						val : createSpan2({id : '', clazz : 'glyphicon glyphicon-calendar', val : ''})}))
				);
			
			
			$('#air-fromDate-div .date').daterangepicker({
				"locale": {
	                          "format": "YYYY-MM-DD",
	                          "separator": " / ",
	                          "applyLabel": "적용",
	                          "cancelLabel": "취소",
	                          "fromLabel": "From",
	                          "toLabel": "To",
	                          "customRangeLabel": "Custom",
	                          "weekLabel": "W",
	                          "daysOfWeek": ["일", "월", "화", "수", "목", "금", "토"],
	                          "monthNames": ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
	                          "firstDay": 1
	                      },
	                      minDate: new Date(),
	                      startDate : new Date(),
	                      endDate : moment().add(6, 'days'),
	                      "opens": "right",
	                      "dateLimit":{
                        	  "days" : 365
                          },
	                      "timePicker": true,
			}, 
			function(start, end, label) {
			  console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
			  departureTime =  start.format('YYYY-MM-DD');
			  arrivalTime = end.format('YYYY-MM-DD');
			});
			$('.daterangepicker').attr('style', 'top : 53%; left : 43%;');
			
			
			
			$('#wrapper-col4-div')
			.attr('style', 'padding-right : 0px;')
			.append($(createDiv({id : '', clazz : 'input-group spinner'}))
					.attr('style', '')
					.append($(createSpan({id : '', clazz : 'input-group-btn span-minus', val : ''}))
							.append($(createBtn({id : '', clazz : 'btn btn-default', val : ''}))
									.append($(createITag({id : '', clazz : 'fa fa-minus', val : ''})))
									.attr('style', '')
									.on('click', ()=>{
										if(parseInt($('.spinner #air-rbooking-count').text(),10)!=1){
										     $('.spinner #air-rbooking-count').text(parseInt($('.spinner #air-rbooking-count').text(), 10)-1);
						                        $('#air-rbooking-count').text($('.spinner #air-rbooking-count').text())                        
										}
									})
									)
							)
							.append($(createSpan({id:'', clazz : 'input-group-addon', val : '성인'}))
									.attr('style','width : 0;background-color:#fff; border-right:0px; border-left: 0px; font-size: 16px; font-weight: bold')
									)
									.append($(createSpan({id : 'air-rbooking-count', clazz : 'input-group-addon', val : '1'}))
											.attr('style','width : 0; background-color: #fff; border-left: 0px; padding-left: 0px; font-size: 16px; font-weight: bold; min-width: 32px')
											)
											/*.append($(createSpan({id : '', clazz : 'input-group-addon', val : '명'}))
													.attr('style','width : 0; background-color: #fff; border-left: 0px; padding-left: 0px; font-size: 16px; font-weight: bold; min-width: 32px')
													)*/
													.append($(createSpan({ id : '', clazz :'input-group-btn span-plus', val : ''}))
															.append($(createBtn({id : '', clazz : 'btn btn-default', val : ''}))
																.attr('style','width : ')
																.append($(createITag({id: '', clazz : 'fa fa-plus', val:''})))
																.attr('style', '')
																.on('click', ()=>{
																	   $('.spinner #air-rbooking-count').text(parseInt($('.spinner #air-rbooking-count').text(), 10)+1);
												                        $('#air-rbooking-count').text($('.spinner #air-rbooking-count').text())
																	})
																)
														)
					);
			//input-group-btn span-minus
				
			$('#class-btn').attr('style', 'width : 100%; height : 34px;');
			
			$('#wrapper-col5-div')
			.attr('style', 'padding-right : 0px; width : 10%')
			.append(createBtn({id : 'flight-search-btn', clazz : 'btn btn-primary', val : '검색'}));
			$('#flight-search-btn')
			.attr('style', 'width : 100%;')
			.on('click', e=>{
				e.preventDefault();
				alert('sss');
				switch ($('#input-find-fromcity').val()) {
				case "서울":
					fromCity = "seoul"
					break;
				case "오사카":
					fromCity = "osaka"
					break;

				default:
					break;
				}
			 // $('#input-find-tocity').val()
				
				var json ={
					 departure : $('#input-find-fromcity').val(),
					 arrival : $('#input-find-tocity').val(),
					 bookcount : $('#air-rbooking-count').text(),
					 departureTime : departureTime,
					 arrivalTime : arrivalTime 
				}
				$.ajax({
					url : context+'/flight/search',
					method : 'POST',
					data : JSON.stringify(json),
					dataType : 'json',
					contentType : 'application/json',
					success : x =>{
							var json ={
									list : x.list,
									fromCity : fromCity,
									departure : $('#input-find-fromcity').val(),
									arrival : $('#input-find-tocity').val(),
									departureTime : departureTime,
									arrivalTime : arrivalTime,
									departureCount :x.departure ,
									arrivalCount :  x. arrvial,
									bookCount : $('#air-rbooking-count').text(),
								};
							console.log(json.list);
						app.flightDetail.onCreate(json);
					},
					error : (x, h, m) =>{
						alert('망함 x='+x+', h='+h+', m='+m);
					}
					});
			});
			
			
			
			$(createDiv({id : 'footer-flight', clazz : ''})).appendTo($content);
			
			
		});
	}

	
	return {onCreate:onCreate};
})();
app.flightDetail=(()=>{
	var context, view;
	var onCreate=x=>{
		$content = $('#content');
		context =$.context();
		view = $.javascript()+'/mwview.js';
		setContentView(x);
	};
	var setContentView=x=>{
		$.getScript(view, ()=>{
			var  departureTime = moment().format("YYYY-MM-DD");
			var arrivalTime =  moment().add(6, 'days').format("YYYY-MM-DD");
			$content.html(createDiv({ id : 'air-wrapper-div', clazz : ''}));
			$('#air-wrapper-div')
			.attr('style', 'background-color : #f1f1f1; position : absolute; width : 100%; ')
			.append($(createDiv({ id : '', clazz : ''}))
					.attr('style', 'width : 100%; padding : 20px; background : #515b62;')
					.append(createSerahNav(x))
					)
			.append(createDiv({id : 'air-leftcolumn-div', clazz : 'leftcolumn'}))
			.append(createDiv({id : 'air-midcolumn-div', clazz : 'midcolumn'}))
			.append(createDiv({id : 'air-rightcolumn-div', clazz : 'rightcolumn'}));
			$('.change').on('click', ()=>{
				var departure = $('.departure').val();
				var arrival = $('.arrival').val();
				$('.departure').val(arrival);
				$('.arrival').val(departure);
			})
			
			$('.flight-minus').on('click',()=>{
				if(parseInt($('.flight-count').val(),10)!=1){
				     $('.flight-count').val((parseInt($('.flight-count').val(), 10)-1));
	                   $('.flight-count').val(($('.flight-count').val()));                        
				}
			});
			
			$('.flight-plus').on('click',()=>{
				     $('.flight-count').val((parseInt($('.flight-count').val(), 10)+1));
	                   $('.flight-count').val(($('.flight-count').val()));                        
			});
			
			
			$('#fromDate .data').daterangepicker({
				"locale": {
                    "format": "YYYY-MM-DD",
                    "separator": " / ",
                    "applyLabel": "적용",
                    "cancelLabel": "취소",
                    "fromLabel": "From",
                    "toLabel": "To",
                    "customRangeLabel": "Custom",
                    "weekLabel": "W",
                    "daysOfWeek": ["일", "월", "화", "수", "목", "금", "토"],
                    "monthNames": ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
                    "firstDay": 1
                },
                minDate: new Date(),
                startDate : x.departureTime,
                endDate : x.arrivalTime,
                "opens": "right",
                "dateLimit":{
              	  "days" : 365
                },
                "timePicker": true,
			}, 
			function(start, end, label) {
				console.log(x.departureTime);
				console.log(x.arrivalTime);
			  console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
			  departureTime =  start.format('YYYY-MM-DD');
			  arrivalTime = end.format('YYYY-MM-DD');
			});
			
			
			$('.daterangepicker').attr('style', 'top : 17%; left : 37%;');
			
			$('#flight-research-btn').on('click',(x)=>{
				 var json ={
				 departure :  $('.departure').val(),
				 arrival :  $('.arrival').val(),
				 bookCount : $('.flight-count').val(),
				 departureTime : departureTime,
				 arrivalTime : arrivalTime 
			}
			$.ajax({
				url : context+'/flight/research',
				method : 'POST',
				data : JSON.stringify(json),
				dataType : 'json',
				contentType : 'application/json',
				success : x =>{
						
						var json ={
								list : x.list,
								fromCity : fromCity,
								 departure :  $('.departure').val(),
								 arrival :  $('.arrival').val(),
								departureTime : departureTime,
								arrivalTime : arrivalTime,
								departureCount :x.departure ,
								arrivalCount :  x. arrvial,
								bookCount : $('.flight-count').val()
							};
						console.log(json.list);
					app.flightDetail.onCreate(json);
				},
				error : (x, h, m) =>{
					alert('망함 x='+x+', h='+h+', m='+m);
				}
				});
			})
			
			
			$('#air-leftcolumn-div')
			.attr('style', 'margin-top : 20px;')
			.append(createDiv({ id : '', clazz : ''}))
			.append(createDiv({ id : 'air-leftbanner-div', clazz : 'container'}));
			
			
			$('#air-leftbanner-div')
			.attr('style', 'width : 100%; background : #fff; box-shadow: 0 3px 12px 1px rgba(0,0,0,0.26);')
			.append(createDiv({id : 'air-leftcontainer-div', clazz : ''}))
			.append(createDiv({id : 'air-time-div', clazz : ''}));
			
			$('#air-time-div')
			.attr('style', 'border-top : 1px solid #c5c5c7')
			.append(createDiv({id : 'air-aroundtime-div', clazz : ''}));
			
			$('#air-aroundtime-div').attr('style', 'margin-top : 20px;')
			.append(createSpan({id : 'air-span', clazz : '', val : '시간대'}))
			$('#air-span').attr('style', 'font-weight : 900;')
			
			$('#air-leftcontainer-div')
			.attr('style', 'width : 100%; margin-bottom : 20px;')
			.append(createDiv({id : 'air-leftform-div', clazz : ''}));
			
			$('#air-leftform-div')
			.attr('style', 'width : 100%; padding-top : 15px;')
			.append('<span id = "air-oderby-pt">정렬</span>')
			.append(createDiv({id : 'air-leftorderby-div', clazz : 'dropdown'}));
			
			$('#air-oderby-pt').attr('style', 'font-weight: 900;');
			
			$('#air-leftorderby-div')
			.attr('style', 'width : 100%; text-align : center;')
			.append(createBtn({ id : 'air-leftdrop-btn', clazz : 'btn btn-default dropdown-toggle', val : ''
				+ createSpan({ id : 'caret-span', clazz : 'caret', val :''})}))
			.append(createUL({ id : 'air-leftdrop-ul', clazz : 'dropdown-menu'}));
			//'<ul id="'+x.id+'" class="'+x.clazz+'"></ul>';
			$('#air-leftdrop-btn')
			.attr('style', 'border-radius : 0; width : 100%;')
			.attr('data-toggle', 'dropdown')
			.text('아고다 추천');
			$('#air-leftdrop-ul')
			.append($(createLI({ id : '', clazz : 'li-sort-menu'}))
					.append($(createATag({ id : '', clazz : 'a-sort-menu', val : '아고다 추천'})))
					)
			.append($(createLI({ id : '', clazz : 'li-sort-menu'}))
					.append($(createATag({ id : '', clazz : 'a-sort-menu', val : '최저가순'})))
					)
			.append($(createLI({ id : '', clazz : 'li-sort-menu'}))
					.append($(createATag({ id : '', clazz : 'a-sort-menu', val : '최고가순'})))
					)
			.append($(createLI({ id : '', clazz : 'li-sort-menu'}))
					.append($(createATag({ id : '', clazz : 'a-sort-menu', val : '최단시간순'})))
					)
			.append($(createLI({ id : '', clazz : 'li-sort-menu'}))
					.append($(createATag({ id : '', clazz : 'a-sort-menu', val : '최장시간순'})))
					);
			
			$('#air-leftorderby-div .dropdown-menu .li-sort-menu').on('click', function() {
				alert($(this).text());
				console.log(this);
				$('#air-leftdrop-btn').text($(this).text());
				var json ={
						 departure : x.departure,
						 arrival : x.arrival,
						 bookCount : x.bookCount,
						 departureTime : x.departureTime,
						 arrivalTime : x.arrivalTime,
						 sort : $(this).text()
					}
					$.ajax({
						url : context+'/flight/sort',
						method : 'POST',
						data : JSON.stringify(json),
						dataType : 'json',
						contentType : 'application/json',
						success : x =>{
								var json ={
										list : x.list,
										fromCity : fromCity,
										departure : $('#input-find-fromcity').val(),
										arrival : $('#input-find-tocity').val(),
										departureTime : departureTime,
										arrivalTime : arrivalTime,
										departureCount :x.departure ,
										arrivalCount :  x. arrvial,
										bookCount : $('#air-rbooking-count').text(),
									};
							app.flightDetail.onCreate(json);
						},
						error : (x, h, m) =>{
							alert('망함 x='+x+', h='+h+', m='+m);
						}
						});
			})
			
			$('#air-a-long').attr('href', '#');
			
			//'<a id="'+x.id+'" class="'+x.clazz+'" href="#">'+x.val+'</a>';
			//'<li id="'+x.id+'" class="'+x.clazz+'"></li>';
			//'<button id="'+ x.id +'" class="'+ x.clazz +'">'+ x.val +'</button>';
			//'<span class="'+x.clazz+'">'+x.val+'</span>';
				
			$('#air-rightcolumn-div')
			.attr('style', 'margin-top : 20px;')
			.append(createDiv({ id : 'air-rightbanner-div', clazz : ''}));
			
			
			$('#air-rightbanner-div')
			.attr('style', 'background : #fff; box-shadow: 0 3px 12px 1pxrgba(0,0,0,0.26);')
			.append('Some text about me in culpa qui officia deserunt mollit anim..');
			
			
			
			
			$('#air-midcolumn-div')
			.attr('style', 'margin-top : 20px;')
			.append($(createList(x)));
			$('#air-midcolumn-div .list-wrapper').hover(function(){
				$(this).attr('style', 'box-shadow : 0 3px 12px 1px rgba(0,0,0,0.26); cursor : pointer; margin-bottom : 10px;')
			}, function() {
				$(this).attr('style', 'margin-bottom : 10px;')
			});
			$('#air-midcolumn-div .list-wrapper').on('click', function(){
				$(this).attr('style', 'box-shadow : 0 3px 12px 1px rgba(0,0,0,0.26); margin-bottom : 10px;');
			});
			$('#air-midcolumn-div .section-wrapper').on('click', function(){
				$(this).next().slideToggle();
			});
			
			$('.pay-button-div ').on('click', '.btn',function(){
				var div = $(this).parent().parent().parent().parent().parent();
				var tr1 = div.children('.toggles').children().children().children(3).children('.flightRow1').children().children().children();
				var tr2 = div.children('.toggles').children().children().children(5).children().children('.flightRow2').children().children().children();
				var td1 = tr1.children();
				var td2 = tr2.children();
				var td1Arr = new Array();
				var td2Arr = new Array();
				td1.each(function(i){	
					td1Arr.push(td1.eq(i).text());
				});
				td2.each(function(i){	
					td2Arr.push(td2.eq(i).text());
				});

				var json = {
					fromDate : td1Arr[0],
					fromDptTime : td1Arr[1].split('-')[0],
					fromArvTime : td1Arr[1].split('-')[1],
					fromTime : td1Arr[2],
					fromPrice : td1Arr[3],
					fromCity : td1Arr[6].split('-')[0],
					fromCode : td1Arr[11],
					backDate : td2Arr[0],
					backDptTime : td2Arr[1].split('-')[0],
					backArvTime : td2Arr[1].split('-')[1],
					backTime : td2Arr[2],
					backPrice : td2Arr[3],
					backCity : td2Arr[6].split('-')[0],
					backCode : td2Arr[11],
					bookCount : $('.flight-count').val()
				
				}
				console.log(json.fromCity);
				app.flightPayment.onCreate(json);
			});
			 
			
		});
	}
	return {onCreate:onCreate};
})();