app.flight=(()=>{
	var context, view;
	var onCreate=()=>{
		$content = $('#content');
		context =$.context();
		view = $.javascript()+'/mwview.js';
		setContentView();
	};
	var setContentView=()=>{
		$.getScript(view, ()=>{
			/*메인 페이지 중단 (항공권, 숙소 탭)*/
			$content.html(createDiv({id : 'div-flight' , clazz : ''}));
			$(createDiv({id:'div-background',clazz:''})).appendTo('#div-flight')
			.attr('style', 'position : relative')
			$('#div-background').append(createImg({id : 'flight-img', 
				src : 'https://a1.r9cdn.net/dimg/phoenix-images/v3/agoda-flights-fd.jpg', clazz : '', alt : 'agoda'}));
			//$(createNav({id : 'nav-option', clazz : 'navbar navbar-default'})).appendTo('#div-background');
			$(createDiv({id : 'nav-option-div', clazz : ''})).appendTo('#div-background');
			$('#nav-option-div').append(createUL({id : 'nav-option-ul', clazz : 'nav nav-tabs'}))
			.append(createDiv({id : 'tab-contents-div', clazz : 'tab-content'}));
			
			$('#nav-option-ul').append(createLI({ id : 'hotels-li', clazz : ''}))
			.append(createLI({ id : 'tikets-li', clazz : 'active'}));
			$(createATag({id : 'a-hotels', link : '#hetels' , clazz : '', val : '숙소'}))
			.attr('data-toggle', 'tab').appendTo('#hotels-li');
			$(createATag({id : 'a-tikets', link : '#tikets' , clazz : '', val : '항공권'}))
			.attr('data-toggle', 'tab').appendTo('#tikets-li');
			
			$('#nav-option-div').append(createDiv({id : 'nav-menu-div', clazz : 'tab-content'}));
			
			$('#nav-menu-div').append(createDiv({id : 'home', clazz : 'tab-pane-fade'}))
			.append(createDiv({id : 'menu1', clazz : 'tab-pane fade in active'}));
			$('#menu1').append(createDiv({id : 'button-wrapper-div', clazz : ''}))
			.append(createDiv({id : 'input-wrapper-div', clazz : ''}))
			$(createDiv({id : 'button-div', clazz : ''})).appendTo('#button-wrapper-div')
			$(createDiv({id : 'wrapper-div', clazz : ''})).appendTo('#input-wrapper-div');
			$('#button-div').append(createBtn({id : 'round-trip-btn', clazz : 'btn btn-sm', val : '왕복', type : ''}))
			.append(createBtn({id : 'one-way-btn', clazz : 'btn btn-sm', val : '편도', type : ''}))
			.append(createBtn({id : 'many-ways-btn', clazz : 'btn btn-sm', val : '다구간', type : ''}));
			$('#wrapper-div').append(createDiv({id : 'wrapper-container-div', clazz : 'container'}));
			$('#wrapper-container-div').append(createDiv({id : 'wrapper-row-div', clazz : 'row-fixed'}));
			$('#wrapper-row-div').append(createDiv({id : 'wrapper-col1-div', clazz : 'col-sm-2'}))
			.append(createDiv({id : 'wrapper-col2-div', clazz : 'col-sm-2'}))
			.append(createDiv({id : 'wrapper-col3-div', clazz : 'col-sm-2'}))
			.append(createDiv({id : 'wrapper-col4-div', clazz : 'col-sm-2'}))
			.append(createDiv({id : 'wrapper-col5-div', clazz : 'col-sm-2'}))
			.append(createDiv({id : 'wrapper-col6-div', clazz : 'col-sm-2'}));
			
			$('#wrapper-col1-div').append(createDiv({id : 'wrapper-fromCity-div', clazz : 'input-group'}));
			$('#wrapper-fromCity-div')
			.append(createInput({id : 'input-find-fromcity', clazz : 'form-control', type : 'text', val : '', ph:'출발 도시'}))
			.append(createDiv({id : 'wrapper-fromcity-btn-div', clazz : 'input-group-btn'}));
			$(createBtn({id : 'changecity-btn', clazz : 'btn btn-default', type : 'submit', val : ''})).appendTo('#wrapper-fromcity-btn-div');
			$(createITag({id : '', clazz : 'glyphicon glyphicon-transfer'})).appendTo('#changecity-btn');
			$('#changecity-btn').on('click', ()=>{
				var fromcity = $('#input-find-tocity').val();
				var tocity = $('#input-find-fromcity').val();
				alert( fromcity + tocity);
				$('#input-find-fromcity').attr('value', fromcity);
				$('#input-find-tocity').attr('value', tocity);
			});
			
			
			$('#wrapper-col2-div').append(createDiv({id : 'wrapper-toCity-div', clazz : 'form-group'}));
			$('#wrapper-toCity-div')
			.append(createInput({id : 'input-find-tocity', clazz : 'form-control', type : 'text', val : '', ph:'도착 도시'}))
			.append(createDiv({id : 'wrapper-tocity-btn-div', clazz : 'input-group-btn'}));
			
			$(createDiv({id : 'fromDate', clazz : 'input-group date'})).attr('data-data-format','mm-dd-yyyy')
			.appendTo('#wrapper-col3-div');
			$('#fromDate').append(createInput({id : 'fromDate-input', type : 'text', clazz : 'form-control', val : '' ,ph : ''}))
			.append(createSpan({ id : 'fromDate-addon-span', clazz : 'input-group-addon',
				val : createSpan({id : '', clazz : 'glyphicon glyphicon-calendar', val : ''})}));
			
			$(createDiv({id : 'toDate', clazz : 'input-group date'})).attr('data-data-format','mm-dd-yyyy')
			.appendTo('#wrapper-col4-div');
			$('#toDate').append(createInput({id : 'toDate-input', type : 'text', clazz : 'form-control', val : '' ,ph : ''}))
			.append(createSpan({clazz : 'input-group-addon',
				val : createSpan({clazz : 'glyphicon glyphicon-calendar', val : ''})}));
			
			$(createBtn({id : 'class-btn', clazz : 'btn btn-default dropdown-toggle',
				val : '' + createSpan({clazz : 'caret',  
					val : createDiv({id : 'test-div', clazz : 'dropdown-content'})
					})
				})).appendTo('#wrapper-col5-div');
			
				
			$('#class-btn').attr('style', 'width : 100px; height : 34px;');
			
			$('#test-div').append(createDiv({id : 'test2-div', clazz : ''})).append(createDiv({id : 'test3-div', clazz : ''}))
			
			
			
			$(createBtn({id : '', clazz : 'btn btn-primary', val : '검색'})).appendTo('#wrapper-col6-div');
			
			$(createDiv({id : 'footer-flight', clazz : ''})).appendTo($content);
			
			
		});
	}
	
	return {onCreate:onCreate};
})();