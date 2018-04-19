app.flightDtail=(()=>{
	var context, view;
	var onCreate=()=>{
		$content = $('#content');
		context =$.context();
		view = $.javascript()+'/mwview.js';
		setContentView();
	};
	var setContentView=()=>{
		$.getScript(view, ()=>{
			$content.html(createDiv({ id : 'air-wrapper-div', clazz : ''}));
			$('#air-wrapper-div')
			.attr('style', 'background-color : #f1f1f1; height : 900px;')
			.append(createDiv({id : 'air-leftcolumn-div', clazz : 'leftcolumn'}))
			.append(createDiv({id : 'air-midcolumn-div', clazz : 'midcolumn'}))
			.append(createDiv({id : 'air-rightcolumn-div', clazz : 'rightcolumn'}));
			
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
			.append(createSpan({id : 'air-span', clazz : ''}))
			
			$('#air-leftcontainer-div')
			.attr('style', 'width : 100%; margin-bottom : 20px;')
			.append(createDiv({id : 'air-leftform-div', clazz : ''}));
			
			$('#air-leftform-div')
			.attr('style', 'width : 100%; padding-top : 15px;')
			.append('<span id = "air-oderby-pt">정렬</span>')
			.append(createDiv({id : 'air-leftorderby-div', clazz : 'dropdown'}));
			
			$('#air-oderby-pt').attr('style', 'font-weight: 900;')
			
			$('#air-leftorderby-div')
			.attr('style', 'width : 100%; text-align : center;')
			.append(createBtn({ id : 'air-leftdrop-btn', clazz : 'btn btn-default dropdown-toggle', val : ''
				+ createSpan({ id : 'caret-span', clazz : 'caret', val :''})}))
			.append(createUL({ id : 'air-leftdrop-ul', clazz : 'dropdown-menu'}));
			//'<ul id="'+x.id+'" class="'+x.clazz+'"></ul>';
			$('#air-leftdrop-btn')
			.attr('style', 'border-radius : 0; width : 100%;')
			.attr('data-toggle', 'dropdown')
			.text('추천')
			$('#air-leftdrop-ul')
			.append(createLI({ id : 'air-rec-li', clazz : ''}))
			.append(createLI({ id : 'air-row-li', clazz : ''}))
			.append(createLI({ id : 'air-high-li', clazz : ''}))
			.append(createLI({ id : 'air-short-li', clazz : ''}))
			.append(createLI({ id : 'air-long-li', clazz : ''}));
			
			$('#air-rec-li').append(createATag({ id : 'air-a-rec', clazz : '', val : '추천'}))
			.on('click', ()=>{
				$('#air-leftdrop-btn').text('추천');
			});
			$('#air-a-rec').attr('href', '#');
			$('#air-row-li').append(createATag({ id : 'air-a-row', clazz : '', val : '최저가순'}))
			.on('click', ()=>{
				$('#air-leftdrop-btn').text('최저가순');
			});
			$('#air-a-row').attr('href', '#');
			$('#air-high-li').append(createATag({ id : 'air-a-high', clazz : '', val : '최고가순'}))
			.on('click', ()=>{
				$('#air-leftdrop-btn').text('최고가순');
			});
			$('#air-a-high').attr('href', '#');
			
			$('#air-short-li').append(createATag({ id : 'air-a-short', clazz : '', val : '최단시간순'}))
			.on('click', ()=>{
				$('#air-leftdrop-btn').text('최단시간순');
			});
			$('#air-a-short').attr('href', '#');
			$('#air-long-li').append(createATag({ id : 'air-a-long', clazz : '', val : '최장시간순'}))
			.on('click', ()=>{
				$('#air-leftdrop-btn').text('최장시간순');
			});
			
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
			.attr('style', 'margin-top : 20px; background : #fff; position : relative;')
			.append(createDiv({id : 'air-midwrapper-div', clazz : ''}));
			$('#air-midwrapper-div')
			.attr('style', 'box-shadow: 0 3px 12px 1px rgba(0,0,0,0.26);' )
			.append(createSection({ id : 'air-midcolumn-section', clazz : ''}));
			
			$('#air-midwrapper-div')
			.append(createDiv({id : 'air-schedule-detail-div', clazz : ''}));
			
			$('#air-schedule-detail-div')
			.attr('style', 'border-top: 1px solid #e4e5ea; height : 400px; width : 100%; background-color: #f1f1f1; display : none;')
			.append(createDiv({id : 'air-detailwrapper-div', clazz : ''}));
			$('#air-detailwrapper-div').attr('style', 'margin-top : 20px;');
			
			
			$('#air-midcolumn-section').on('click', e=>{
				e.preventDefault();
				$('#air-schedule-detail-div').slideToggle("slow");
			});
			$('#air-midcolumn-section')
			.attr('style', 'min-height : 200px;')
			.append(createDiv({ id : 'air-infowrapper-div', clazz : ''}));
			
			$('#air-infowrapper-div')
			.attr('style', 'float :left; min-height : 200px; padding : 20px; border-right: 1px solid #e4e5ea; width : 80%')
			.append(createDiv({ id : 'air-flightInfo-div', clazz : ''}))
			.append(createDiv({ id : 'air-pricecheck-div', clazz : ''}));
			
			$('#air-flightInfo-div')
			.attr('style','height : 60px;')
			.append(createDiv({ id : 'air-fromlogosm-div', clazz : ''}))
			.append(createDiv({ id : 'air-fromstart-div', clazz : ''}))
			.append(createDiv({ id : 'air-frombar-div', clazz : ''}))
			.append(createDiv({ id : 'air-fromarrival-div', clazz : ''}))
			.append(createDiv({ id : 'air-fromtime-div', clazz : ''}));
			
			$('#air-fromlogosm-div')
			.attr('style', 'float : left;')
			.append(createImg({id : 'air-fromlogo-img', src : 'https://a1.r9cdn.net/rimg/provider-logos/airlines/v/ZE.png?crop=false&width=108&height=92&fallback=default1.png&_v=7680ca6f4486e71450343d0d72d58ce225845fba', alt : '이스타 항공'}))
			$('#air-fromlogo-img').attr('style', 'width : 25px;');
		
			$('#air-fromstart-div')
			.attr('style', 'float : left; margin-left : 10%;')
			.append(createPTag({val : '17 : 05'}))
			.append(createPTag({val : 'ICN'}));
			
			$('#air-frombar-div')
			.attr('style', 'width : 80px; float : left; margin-left : 5%; margin-top : 10px; border-top : 2px solid #e4e5ea;')
			
			$('#air-fromarrival-div')
			.attr('style', 'float : left; margin-left : 5%;')
			.append(createPTag({val : '17 : 05'}))
			.append(createPTag({val : 'ICN'}));
			
			$('#air-fromtime-div')
			.attr('style', 'float : left; margin-left : 10%;')
			.append(createPTag({val : '2시간 10분'}));
			
			
			$('#air-pricecheck-div')
			.attr('style','height : 60px;')
			.append(createDiv({ id : 'air-tologosm-div', clazz : ''}))
			.append(createDiv({ id : 'air-tostart-div', clazz : ''}))
			.append(createDiv({ id : 'air-tobar-div', clazz : ''}))
			.append(createDiv({ id : 'air-toarrival-div', clazz : ''}))
			.append(createDiv({ id : 'air-totime-div', clazz : ''}));
			
			$('#air-tologosm-div')
			.attr('style', 'float : left;')
			.append(createImg({id : 'air-tologo-img', src : 'https://a1.r9cdn.net/rimg/provider-logos/airlines/v/ZE.png?crop=false&width=108&height=92&fallback=default1.png&_v=7680ca6f4486e71450343d0d72d58ce225845fba', alt : '이스타 항공'}))
			$('#air-tologo-img').attr('style', 'width : 25px;');
		
			$('#air-tostart-div')
			.attr('style', 'float : left; margin-left : 10%;')
			.append(createPTag({val : '17 : 05'}))
			.append(createPTag({val : 'ICN'}));
			
			$('#air-tobar-div')
			.attr('style', 'width : 80px; float : left; margin-left : 5%; margin-top : 10px; border-top : 2px solid #e4e5ea;')
			
			$('#air-toarrival-div')
			.attr('style', 'float : left; margin-left : 5%;')
			.append(createPTag({val : '17 : 05'}))
			.append(createPTag({val : 'ICN'}));
			
			$('#air-totime-div')
			.attr('style', 'float : left; margin-left : 10%;')
			.append(createPTag({val : '2시간 10분'}));
		})
	}
	return {onCreate:onCreate};
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
			
			$('#wrapper-div').append(createDiv({id : 'wrapper-container-div', clazz : ''}));
			$('#wrapper-div').attr('style', 'width : 100%; height : 45px;')
			
			
			$('#wrapper-container-div').append(createDiv({id : 'wrapper-row-div', clazz : 'row-fixed'}));
			$('#wrapper-row-div').attr('style', 'position : absolute; padding: 15px;')
			.append(createDiv({id : 'wrapper-col1-div', clazz : 'col-sm-2'}))
			.append(createDiv({id : 'wrapper-col2-div', clazz : 'col-sm-2'}))
			.append(createDiv({id : 'wrapper-col3-div', clazz : 'col-sm-3'}))
			.append(createDiv({id : 'wrapper-col4-div', clazz : 'col-sm-2'}))
			.append(createDiv({id : 'wrapper-col5-div', clazz : 'col-sm-1'}));
			
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
			$('#input-find-fromcity').attr('placeholder','출발 도시');
			$('#input-find-tocity').attr('placeholder','도착 도시');
			
			$('#wrapper-col3-div')
			.attr('style', 'padding-right : 0px; width : 20%')
			.append($(createDiv({id : 'air-fromDate-div', clazz : 'input-group date'})));
			
			$('#air-fromDate-div').append($(createInput({id : 'fromDate-input', type : 'text', clazz : 'form-control', value : '' ,placeholder : ''})))
			.append(createSpan2({ id : 'fromDate-addon-span', clazz : 'input-group-addon',
				val : createSpan2({id : '', clazz : 'glyphicon glyphicon-calendar', val : ''})}));
		
			$('#air-fromDate-div').daterangepicker({
			    "startDate": "04/12/2018",
			    "endDate": "04/18/2018"
			}, function(start, end, label) {
			  console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
			});
		
//			$(createDiv({id : 'toDate', clazz : 'input-group date'})).attr('data-data-format','mm-dd-yyyy')
//			.appendTo('#wrapper-col4-div');
//			$('#toDate').append(createInput({id : 'toDate-input', type : 'text', clazz : 'form-control', value : '' ,placeholder : ''}))
//			.append(createSpan({clazz : 'input-group-addon',
//				val : createSpan({clazz : 'glyphicon glyphicon-calendar', val : ''})}));
			
			
			
			$('#wrapper-col4-div')
			.attr('style', 'padding-right : 0px; width : 20%')
			.append(createBtn({id : 'class-btn', clazz : 'btn btn-default dropdown-toggle',
				val : '' + createSpan({clazz : 'caret',  
					val : createDiv({id : 'test-div', clazz : 'dropdown-content'})
					})
				}));
			
				
			$('#class-btn').attr('style', 'width : 100%; height : 34px;');
			
			$('#test-div').append(createDiv({id : 'test2-div', clazz : ''})).append(createDiv({id : 'test3-div', clazz : ''}))
			
			
			
			$('#wrapper-col5-div')
			.attr('style', 'padding-right : 0px; width : 10%')
			.append(createBtn({id : 'flight-search-btn', clazz : 'btn btn-primary', val : '검색'}));
			$('#flight-search-btn')
			.attr('style', 'width : 100%;')
			.on('click', ()=>{
				app.flightDtail.onCreate();
			});
			
			
			
			$(createDiv({id : 'footer-flight', clazz : ''})).appendTo($content);
			
			
		});
	}

	
	return {onCreate:onCreate};
})();