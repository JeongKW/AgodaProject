app.residenceSpec =(()=>{
	var context, view, image;
	var onCreate =()=>{
		$content = $('#content');
		context = $.context();
		view = $.javascript() + '/ydview.js';
		image = $.image();
		setContentView();
	}
	var setContentView =()=>{
		$.getScript(view, ()=>{
			$content.html($(createDiv({id : 'resi-div-filter', clazz : 'container filter'})));
			
			$(createDiv({id:'', clazz:'col-sm-3'})).attr('style', 'border: 1px solid gray; min-height: 130px; padding: 10px')
			.appendTo('#resi-div-filter').append($(createSpan({clazz:'', val:'요금 범위'})));				
			$(createDiv({id:'', clazz:'col-sm-3'})).attr('style', 'border: 1px solid gray; min-height: 130px; padding: 10px')
			.appendTo('#resi-div-filter').append($(createSpan({clazz:'', val:'요금 범위'})));
			$(createDiv({id:'', clazz:'col-sm-3'})).attr('style', 'border: 1px solid gray; min-height: 130px; padding: 10px')
			.appendTo('#resi-div-filter').append($(createSpan({clazz:'', val:'요금 범위'})));
			$(createDiv({id:'', clazz:'col-sm-3'})).attr('style', 'border: 1px solid gray; min-height: 130px; padding: 10px')
			.appendTo('#resi-div-filter').append($(createSpan({clazz:'', val:'요금 범위'})));
			
			$(createDiv({id:'', clazz:'container'})).attr('style', 'margin-top: 30px')
			.append($(createUL({id:'', clazz: 'nav nav-pills'}))
				.append($(createLI({id:'', clazz:'active'}))
					.append($(createATag({id:'', clazz:'', link:'#resi-tab-content-total', val:'전체숙소'}))
						.attr('data-toggle', 'tab')
						.attr('style', 'border-radius: 0px;')
					)
				)
				.append($(createLI({id:'', clazz:''}))
					.append($(createATag({id:'', clazz:'', link:'#resi-tab-content-hotel', val:'호텔'}))
						.attr('data-toggle', 'tab')
						.attr('style', 'border-radius: 0px;')
					)
				)
				.append($(createLI({id:'', clazz:''}))
					.append($(createATag({id:'', clazz:'', link:'#resi-tab-content-privateHouse', val:'프라이빗 하우스'}))
						.attr('data-toggle', 'tab')
						.attr('style', 'border-radius: 0px;')
					)
				)
			)
			.append($(createDiv({id:'#resi-tab-content', clazz: 'tab-content'}))
				.append($(createDiv({id: 'resi-tab-content-total', clazz: 'tab-pane in active'}))
				)
				.append($(createDiv({id: 'resi-tab-content-hotel', clazz: 'tab-pane'}))
				)
				.append($(createDiv({id: 'resi-tab-content-privateHouse', clazz: 'tab-pane'}))
				)
			)
			.appendTo($content);
			
			$(createDiv({id:'', clazz:'container resi-spec-total'}))
			.attr('style', 'margin-top: 30px')
			.appendTo('#resi-tab-content-total');
			$(createDiv({id:'', clazz:'container resi-spec-hotel'}))
			.attr('style', 'margin-top: 30px')
			.appendTo('#resi-tab-content-hotel');
			$(createDiv({id:'', clazz:'container resi-spec-privateHouse'}))
			.attr('style', 'margin-top: 30px')
			.appendTo('#resi-tab-content-privateHouse');

			/*사이드바 구현*/
			$(createDiv({id:'resi-sidebar-col', clazz:'col-sm-3'})).attr('style', 'min-height: 500px; padding: 0px')
			.appendTo('.resi-spec-total');
				$(createDiv({id:'', clazz:'resi-searchLocation'})).appendTo('#resi-sidebar-col');
					$(createImg({id:'', clazz:'', src: 'https://goo.gl/P9XPJj', alt: ''}))
					.attr('style', 'max-width: 100%; max-height: 100%; position: relative')
					.appendTo('.resi-searchLocation');
						$(createPTag({id: '', clazz: '', val: '숙소 위치 확인'}))	
						.attr('style', 'position: absolute; top: 15%; left: 50%; transform: translate(-65%, -70%); font-weight: bold;')
						.appendTo('.resi-searchLocation');
							
					$('.resi-searchLocation').magnificPopup({
						items: {
							src : 'https://maps.google.com/maps?q=221B+Baker+Street,+London,+United+Kingdom&hl=en&t=v&hnear=221B+Baker+St,+London+NW1+6XE,+United+Kingdom'
						},
						type : 'iframe',
						iframe: {
							markup: '<div class="mfp-iframe-scaler">'
										+'<div class="mfp-close"></div>'
										+'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'
									+'</div>',
							patterns: {
								gmaps: {
									index: '//maps.google.',
									src: '%id%&output=embed'
								}
							},
							srcAction: 'iframe_src',
						}
					});
		
					$(createDiv({id: '', clazz: 'resi-filters-list'}))
					.attr('style', 'margin-top: 20px')
					.appendTo('#resi-sidebar-col');
						$(createUL({id:'', clazz: 'ul-resi-sidebar-type'}))
						.attr('style', 'padding-left: 10px; margin-bottom: 0px')
						.appendTo('.resi-filters-list');
							$(createLI({id:'', clazz: 'li-resi-sidebar-type'}))
							.attr('style', 'list-style-type: none;')
							.appendTo('.ul-resi-sidebar-type');
								$(createDiv({id:'', clazz:'resi-filter-menu-type'}))
								.appendTo('.li-resi-sidebar-type');
									$(createSpan({id:'', clazz: '', val:'숙소 분류'}))
									.attr('style', 'font-size: 16px; font-weight: bold')
									.appendTo('.resi-filter-menu-type');
								$(createDiv({id:'', clazz:'resi-filter-item-type'}))
									.appendTo('.li-resi-sidebar-type');
									$(createUL({id:'', clazz:'ul-resi-filter-item-type'}))
									.attr('style', 'padding: 10px; line-height: 30px')
									.appendTo('.resi-filter-item-type');
										$(createLI({id:'', clazz: 'li-resi-filter-item-type-1'}))
										.attr('style', 'list-style-type: none')
										.appendTo('.ul-resi-filter-item-type');
											$(createInput({type: 'radio', id:'', clazz: '', placeholder: ''}))
											.attr('name', 'type')
											.appendTo('.li-resi-filter-item-type-1');
											$(createSpan({id: '', clazz: '', val: '알뜰/저가형 숙소'}))
											.appendTo('.li-resi-filter-item-type-1');
										$(createLI({id:'', clazz: 'li-resi-filter-item-type-2'}))
											.attr('style', 'list-style-type: none')
											.appendTo('.ul-resi-filter-item-type');
											$(createInput({type: 'radio', id:'', clazz: '', placeholder: ''}))
											.attr('name', 'type')
											.appendTo('.li-resi-filter-item-type-2');
											$(createSpan({id: '', clazz: '', val: '럭셔리/고가형 숙소'}))
											.appendTo('.li-resi-filter-item-type-2');
											
						$(createHr())
							.attr('style', 'margin-top: 5px; margin-right: 20px; margin-bottom: 5px')
							.appendTo('.resi-filters-list');		
						
						$(createUL({id:'', clazz: 'ul-resi-sidebar-location'}))
						.attr('style', 'padding: 10px')
						.appendTo('.resi-filters-list');
							$(createLI({id:'', clazz: 'li-resi-sidebar-location'}))
								.attr('style', 'list-style-type: none;')
								.appendTo('.ul-resi-sidebar-location');
								$(createDiv({id:'', clazz:'resi-filter-menu-location'}))
									.appendTo('.li-resi-sidebar-location');
									$(createSpan({id:'', clazz: '', val:'인기 검색 조건-[홍콩]편'}))
										.attr('style', 'font-size: 16px; font-weight: bold')
										.appendTo('.resi-filter-menu-location');
								$(createDiv({id:'', clazz:'resi-filter-item-location'}))
									.appendTo('.li-resi-sidebar-location');
									$(createUL({id:'', clazz:'ul-resi-filter-item-location'}))
										.attr('style', 'padding: 10px; line-height: 30px')
										.appendTo('.resi-filter-item-location');
										$(createLI({id:'', clazz: 'li-resi-filter-item-location-1'}))
											.attr('style', 'list-style-type: none')
											.appendTo('.ul-resi-filter-item-location');
											$(createInput({type: 'radio', id:'', clazz: '', placeholder: ''}))
												.attr('name', 'type')
												.appendTo('.li-resi-filter-item-location-1');
											$(createSpan({id: '', clazz: '', val: '침사추이 지역'}))
												.appendTo('.li-resi-filter-item-location-1');
										$(createLI({id:'', clazz: 'li-resi-filter-item-location-2'}))
											.attr('style', 'list-style-type: none')
											.appendTo('.ul-resi-filter-item-location');
											$(createInput({type: 'radio', id:'', clazz: '', placeholder: ''}))
												.attr('name', 'type')
												.appendTo('.li-resi-filter-item-location-2');
											$(createSpan({id: '', clazz: '', val: '몽콕지역'}))
												.appendTo('.li-resi-filter-item-location-2');											
										$(createLI({id:'', clazz: 'li-resi-filter-item-location-3'}))
											.attr('style', 'list-style-type: none')
											.appendTo('.ul-resi-filter-item-location');
											$(createInput({type: 'radio', id:'', clazz: '', placeholder: ''}))
												.attr('name', 'type')
												.appendTo('.li-resi-filter-item-location-3');
											$(createSpan({id: '', clazz: '', val: '인터넷'}))
												.appendTo('.li-resi-filter-item-location-3');												

						$(createHr())
							.attr('style', 'margin-top: 5px; margin-right: 20px; margin-bottom: 5px')
							.appendTo('.resi-filters-list');		
						
						$(createUL({id:'', clazz: 'ul-resi-sidebar-service'}))
						.attr('style', 'padding: 10px')
						.appendTo('.resi-filters-list');
							$(createLI({id:'', clazz: 'li-resi-sidebar-service'}))
								.attr('style', 'list-style-type: none;')
								.appendTo('.ul-resi-sidebar-service');
								$(createDiv({id:'', clazz:'resi-filter-menu-service'}))
									.appendTo('.li-resi-sidebar-service');
									$(createSpan({id:'', clazz: '', val:'이용 가능 서비스/옵션'}))
										.attr('style', 'font-size: 16px; font-weight: bold')
										.appendTo('.resi-filter-menu-service');
								$(createDiv({id:'', clazz:'resi-filter-item-service'}))
									.appendTo('.li-resi-sidebar-service');
									$(createUL({id:'', clazz:'ul-resi-filter-item-service'}))
										.attr('style', 'padding: 10px; line-height: 30px')
										.appendTo('.resi-filter-item-service');
										$(createLI({id:'', clazz: 'li-resi-filter-item-service-1'}))
											.attr('style', 'list-style-type: none')
											.appendTo('.ul-resi-filter-item-service');
											$(createInput({type: 'radio', id:'', clazz: '', placeholder: ''}))
												.attr('name', 'type')
												.appendTo('.li-resi-filter-item-service-1');
											$(createSpan({id: '', clazz: '', val: '조식포함'}))
												.appendTo('.li-resi-filter-item-service-1');
										$(createLI({id:'', clazz: 'li-resi-filter-item-service-2'}))
											.attr('style', 'list-style-type: none')
											.appendTo('.ul-resi-filter-item-service');
											$(createInput({type: 'radio', id:'', clazz: '', placeholder: ''}))
												.attr('name', 'type')
												.appendTo('.li-resi-filter-item-service-2');
											$(createSpan({id: '', clazz: '', val: '레이트 체크아웃'}))
												.appendTo('.li-resi-filter-item-service-2');		
											
						$(createHr())
						.attr('style', 'margin-top: 5px; margin-right: 20px; margin-bottom: 5px')
						.appendTo('.resi-filters-list');			
						
			$(createDiv({id:'resi-main-col', clazz:'col-sm-9'})).attr('style', 'min-height: 500px')
			.appendTo('.resi-spec-total');
				$(createDiv({id: '', clazz: 'resi-header-sort-section'}))
				.attr('style', 'height: 50px')
				.appendTo('#resi-main-col');
					$(createDiv({id: '', clazz: 'resi-header-sort-section_left-col'}))
					.attr('style', 'display: inline-block')
					.appendTo('.resi-header-sort-section');
						$(createDiv({id: '', clazz: 'left-col-container'}))
						.appendTo('.resi-header-sort-section_left-col');
							$(createUL({id:'', clazz:'list-inline li-left-col-container'}))
							.attr('style', 'cursor: pointer; padding: 10px')
							.append($(createLI({id:'', clazz:''})).append($(createSpan({id:'', clazz:'', val:'[인기지역]'}))))
							.append($(createLI({id:'', clazz:''})).append($(createSpan({id:'', clazz:'', val:'침사추이'}))))
							.append($(createLI({id:'', clazz:''})).append($(createSpan({id:'', clazz:'', val:'몽콕'}))))
							.append($(createLI({id:'', clazz:''})).append($(createSpan({id:'', clazz:'', val:'코즈웨이베이'}))))
							.appendTo('.left-col-container');
					
					$(createDiv({id: 'resi-dropdown', clazz: 'dropdown'}))
					.attr('style', 'display: inline-block; float: right; padding-top: 5px')
					.appendTo('.resi-header-sort-section')
						$(createBtn({id:'resiMenu', clazz:'btn btn-primary dropdown-toggle', val: '아고다 추천'}))
						.attr('data-toggle', 'dropdown').attr('aria-haspopup', 'true').attr('aria-expanded', 'false')
						.append($(createSpan({id:'', clazz:'caret', val:''})))
						.appendTo('#resi-dropdown');
							$(createUL({id:'', clazz:'dropdown-menu dropdown-menu-right'}))
							.attr('aria-labelledby', 'resiMenu').attr('style', 'width: 300px')
							.append($(createLI({id:'', clazz:''})).append($(createATag({id:'', clazz:'dropdown-item', link:'#', val:'아고다 추천'}))))
							.append($(createLI({id:'', clazz:'divider'})))
							.append($(createLI({id:'', clazz:''})).append($(createATag({id:'', clazz:'dropdown-item', link:'#', val:'요금(낮은 가격 순)'}))))
							.append($(createLI({id:'', clazz:'divider'})))
							.append($(createLI({id:'', clazz:''})).append($(createATag({id:'', clazz:'dropdown-item', link:'#', val:'요금(높은 가격 순)'}))))
							.append($(createLI({id:'', clazz:'divider'})))
							.append($(createLI({id:'', clazz:''})).append($(createATag({id:'', clazz:'dropdown-item', link:'#', val:'투숙객 평가'}))))
							.appendTo('#resi-dropdown');
					$(createDiv({id: '', clazz: ''}))
					.attr('style', 'display: inline-block; float: right; padding: 10px')
					.append($(createSpan({id:'', clazz:'', val: '정렬기준'})))
					.appendTo('.resi-header-sort-section')
			
				
				$(createDiv({id:'', clazz:'avilability-message'}))
				.attr('style', 'background-color: #e9e9e9')
				.appendTo('#resi-main-col');
					$(createDiv({id:'', clazz:'avilability-message-gauge'}))
					.attr('style', 'display: inline-block; padding: 10px 30px')
					.append($(createSpan({id:'', clazz:'', val: 'HELLO'})))
					.appendTo('.avilability-message');
					$(createDiv({id:'', clazz:'avilability-message-text'}))
					.attr('style', 'display: inline-block; padding: 10px 30px')
					.append($(createPTag({id:'', clazz:'', val: '고객님의 선택 날짜에 [ 홍콩 ]의 객실 수요 높음 - '}))
							.append($(createSpan({id:'', clazz:'', val: '객실의 63% 이상 이미 예약 완료!'})).attr('style', 'font-weight: bold')))
					.append($(createPTag({id:'', clazz:'', val: '가격이 오르기 전에 지금 바로 예약하세요.'})))
					.appendTo('.avilability-message');
					
			$(createUL({id:'', clazz:''}))
			.attr('style', 'list-style-type: none; margin-top: 40px; padding-left: 0px')
			.append($(createLI({id:'', clazz:''}))
				.attr('style', 'margin-top: 20px; border: 1px solid gray')
				.append($(createATag({id:'', clazz:'', link:'#', val:''}))
					.append($(createDiv({id:'', clazz:''}))
						.attr('style', 'min-height: 200px')
						.append($(createDiv({id:'', clazz:'col-sm-4'}))
							.attr('style', 'padding-left: 0px')
							.append($(createImg({id:'', clazz:'', src:'https://goo.gl/rvz1Vu', alt:''}))
								.attr('style', 'max-width: 100%')))
						.append($(createDiv({id:'', clazz:'col-sm-5'}))
							.append($(createUL({id:'', clazz:''}))
								.attr('style', 'list-style-type: none; padding-left: 0px')
								.append($(createLI({id:'',clazz:''}))
									.attr('style', 'font-size: 20px')
									.append($(createHTag({num:'5', val:'베스트웨스턴 호텔 하버뷰 (Best Western Hotel Harbour View)'}))))
								.append($(createLI({id:'',clazz:''}))
										.attr('style', 'font-size: 20px')
										.append($(createSpan({id:'', clazz:'fa fa-star checked-resi-star', val:''})))
										.append($(createSpan({id:'', clazz:'fa fa-star checked-resi-star', val:''})))
										.append($(createSpan({id:'', clazz:'fa fa-star checked-resi-star', val:''})))
										.append($(createSpan({id:'', clazz:'fa fa-star checked-resi-star', val:''})))
										.append($(createSpan({id:'', clazz:'fa fa-star', val:''})))										
								)
								.append($(createLI({id:'',clazz:''}))
									.append($(createPTag({id:'', clazz:'', val:'12시간 전 예약됨'}))
										.attr('style', 'color: red')
									)
								)	
							))
						.append($(createDiv({id:'', clazz:'col-sm-3'}))
							.attr('style', 'background-color: #e9e9e9; min-height: 200px;')
						)
			)))
			.appendTo('#resi-main-col')
					
		});
	};
	return {onCreate : onCreate};
})();

app.residence = (()=>{
	var context, view, image;
	var onCreate =()=>{
		$content = $('#content');
		context = $.context();
		view = $.javascript() + '/ydview.js';
		image = $.image();
		setContentView();
	};
	var setContentView =()=>{
		$.getScript(view, ()=>{
			$content.html($(createDiv({id : 'div-resi-main-search', clazz : 'container-fluid'}))
				.attr('style', 'height: 450px; padding: 0px; position: relative;'));		
			
			$(createImg({id:'img-resi-main', clazz:'', src:'https://goo.gl/XRqXDA', alt:''}))
			.attr('style', 'width: 100%; max-height: 100%; position: relative; z-index: -1')
			.appendTo('#div-resi-main-search');
			
			$(createHTag({num:'2', val:'내 여행의 베이스캠프, [ 호텔 ] 예약'}))
			.attr('style', 'position: absolute; top: 15%; left: 50%; transform: translate(-50%, -15%); color: white; font-weight: bold;')
			.appendTo('#div-resi-main-search');
			$(createPTag({id:'', clazz:'', val:'전 세계 1,950,000개 이상의 다양한 숙소 특가 할인'}))
			.attr('style', 'position: absolute; top: 30%; left: 50%; transform: translate(-50%, -30%); color: white; font-size: 18px')
			.appendTo('#div-resi-main-search');
			$(createDiv({id:'', clazz:'container'}))
			.attr('style', 'position: absolute; top: 70%; left: 50%; transform: translate(-50%, -70%);')
			.append($(createUL({id:'', clazz:'nav nav-pills'}))
				.append($(createLI({id:'li-resi-main-1',clazz:'active'}))
					.attr('style', 'width: 200px')
					.append($(createATag({id:'', clazz:'', link:'#hotel', val:'Hotel'}))
						.attr('data-toggle', 'tab')
						.attr('style', 'border-radius: 0px; text-align: center; font-size: 20px; font-weight: bold')
					)
				)
				.append($(createLI({id:'li-resi-main-2',clazz:''}))
					.attr('style', 'width: 200px')
					.append($(createATag({id:'', clazz:'', link:'#privateHouse', val:'Private House'}))
						.attr('data-toggle', 'tab')
						.attr('style', 'border-radius: 0px; text-align: center; font-size: 20px; font-weight: bold')
					)
				)
			)
			.append($(createDiv({id:'', clazz:'tab-content'}))
				.attr('style', 'border: 20px solid rgba(255,255,255,.5)')
				.append($(createDiv({id:'hotel', clazz:'tab-pane in active'}))
					.attr('style', 'background: white; height: 100px; padding: 20px; background-color: #fff')
					.append($(createDiv({id:'', clazz:'row'}))
						.append($(createDiv({id:'', clazz:'col-sm-4'}))
							.append($(createDiv({id:'', clazz:'input-group'}))
								.append($(createInput({id:'', clazz:'form-control input-lg', type:'text', placeholder:'Search...'}))
									.attr('style', 'height: 60px')
								)
								.append($(createDiv({id:'', clazz:'input-group-btn'}))
									.append($(createBtn({id:'', clazz:'btn btn-default input-lg', val:''}))
										.attr('style', 'height: 60px')
										.attr('type', 'submit')
										.append($(createSpan({id:'', clazz:'glyphicon glyphicon-search', val:''})))
									)
								)
							)							
						)
						.append($(createDiv({id:'', clazz:'col-sm-2'}))
							.append($(createDiv({id:'fromDate', clazz:'input-group date'}))
									.attr('data-data-format', '"mm-dd-yyyy"')
									.append($(createInput({id:'', clazz:'form-control input-lg', type:'text', placeholder:''}))
											.attr('style', 'height: 60px')
											.attr('name', 'daterange')
								)
								.append($(createSpan({id:'', clazz:'input-group-addon input-lg', val:''}))
										.attr('style', 'height: 60px')
										.append($(createSpan({id:'', clazz:'glyphicon glyphicon-calendar', val:''})))
								)
							)
						)
						.append($(createDiv({id:'', clazz:'col-sm-2'}))
							.append($(createDiv({id:'toDate', clazz:'input-group date'}))
								.attr('data-data-format', '"mm-dd-yyyy"')
								.append($(createInput({id:'', clazz:'form-control input-lg', type:'text', placeholder:''}))
									.attr('style', 'height: 60px')
									.attr('name', 'daterange')
								)
								.append($(createSpan({id:'', clazz:'input-group-addon input-lg', val:''}))
									.attr('style', 'height: 60px')
									.append($(createSpan({id:'', clazz:'glyphicon glyphicon-calendar', val:''})))
								)
							)
						)
						.append($(createDiv({id:'', clazz:'col-sm-2'}))
							.append($(createInput({id:'', clazz:'form-control input-lg', type:'text', placeholder:'인원수'}))
								.attr('style', 'height: 60px')
							)
						)
						.append($(createDiv({id:'', clazz:'col-sm-2'}))
							.append($(createBtn({id:'btn-move-resi-spec', clazz:'btn input-lg', val:'요금 검색하기'}))
								.attr('style', 'background-color: #333; color: #fff; height:60px; float: right')
								.on('click', x=>{			
									app.residenceSpec.onCreate();
								})
							)
						)
					)
				)
				.append($(createDiv({id:'privateHouse', clazz:'tab-pane fade'}))
					.attr('style', 'background: white; height: 100px; padding: 20px')
					.append($(createDiv({id:'', clazz:'row'}))
						.append($(createDiv({id:'', clazz:'col-sm-4'}))
							.append($(createDiv({id:'', clazz:'input-group'}))
								.append($(createInput({id:'', clazz:'form-control input-lg', type:'text', placeholder:'Search...'})))
								.append($(createDiv({id:'', clazz:'input-group-btn'}))
									.append($(createBtn({id:'', clazz:'btn btn-default input-lg', val:''}))
										.append($(createSpan({id:'', clazz:'glyphicon glyphicon-search', val:''})))
										.attr('type', 'submit')
									)
								)
							)							
						)
						.append($(createDiv({id:'', clazz:'col-sm-2'}))
							.append($(createDiv({id:'fromDate', clazz:'input-group date'}))
									.attr('data-data-format', '"mm-dd-yyyy"')
									.append($(createInput({id:'', clazz:'form-control input-lg', type:'text', placeholder:''}))
									.attr('name', 'daterange')
								)
								.append($(createSpan({id:'', clazz:'input-group-addon input-lg', val:''}))
										.append($(createSpan({id:'', clazz:'glyphicon glyphicon-calendar', val:''})))
								)
							)
						)
						.append($(createDiv({id:'', clazz:'col-sm-2'}))
							.append($(createDiv({id:'toDate', clazz:'input-group date'}))
								.attr('data-data-format', '"mm-dd-yyyy"')
								.append($(createInput({id:'', clazz:'form-control input-lg', type:'text', placeholder:''}))
									.attr('name', 'daterange')
								)
								.append($(createSpan({id:'', clazz:'input-group-addon input-lg', val:''}))
									.append($(createSpan({id:'', clazz:'glyphicon glyphicon-calendar', val:''})))
								)
							)
						)
						.append($(createDiv({id:'', clazz:'col-sm-2'}))
							.append($(createInput({id:'', clazz:'form-control input-lg', type:'text', placeholder:'인원수'})))
						)
						.append($(createDiv({id:'', clazz:'col-sm-2'}))
							.append($(createBtn({id:'btn-move-resi-spec', clazz:'btn input-lg', val:'요금 검색하기'}))
								.attr('style', 'background-color: #333; color: #fff; float: right')
								.on('click', x=>{			
									app.residenceSpec.onCreate();
								})
							)
						)
					)
				)
			)
			.appendTo('#div-resi-main-search');
			
			$(createDiv({id:'', clazz:'container-fluid'}))
			.append($(createDiv({id:'', clazz:'container'})).attr('style', 'margin-top: 50px; margin-bottom: 50px')
				.append($(createDiv({id:'', clazz:'row'}))
					.append($(createDiv({id:'', clazz:'card col-sm-3'}))
						.append($(createDiv({id:'', clazz:'div-resi-card-photo'}))
							.attr('style', 'border: 1px solid gray; padding: 5px; min-height: 350px;')
							.append($(createImg({id:'', clazz:'resi-card-img-top', src:'https://goo.gl/uP8GfV', alt:''}))
								.attr('style', 'max-width: 100%; max-height: 250px')
							)
							.append($(createDiv({id:'', clazz:'card-body'}))
								.append($(createHTag({num:'5', val:'Agada Hotel'})))
								.append($(createPTag({id:'', clazz:'', val:'special'})))
								.append($(createHr()))
								.append($(createPTag({id:'', clazz:'', val:'coupon'})))
							)
						)
					)
					.append($(createDiv({id:'', clazz:'card col-sm-3'}))
						.append($(createDiv({id:'', clazz:'div-resi-card-photo'}))
							.attr('style', 'border: 1px solid gray; padding: 5px; min-height: 350px;')
							.append($(createImg({id:'', clazz:'resi-card-img-top', src:'https://goo.gl/uP8GfV', alt:''}))
								.attr('style', 'max-width: 100%; max-height: 250px')
							)
							.append($(createDiv({id:'', clazz:'card-body'}))
								.append($(createHTag({num:'5', val:'Agada Hotel'})))
								.append($(createPTag({id:'', clazz:'', val:'special'})))
								.append($(createHr()))
								.append($(createPTag({id:'', clazz:'', val:'coupon'})))
							)
						)
					)
					.append($(createDiv({id:'', clazz:'card col-sm-3'}))
						.append($(createDiv({id:'', clazz:'div-resi-card-photo'}))
							.attr('style', 'border: 1px solid gray; padding: 5px; min-height: 350px;')
							.append($(createImg({id:'', clazz:'resi-card-img-top', src:'https://goo.gl/uP8GfV', alt:''}))
								.attr('style', 'max-width: 100%; max-height: 250px')
							)
							.append($(createDiv({id:'', clazz:'card-body'}))
								.append($(createHTag({num:'5', val:'Agada Hotel'})))
								.append($(createPTag({id:'', clazz:'', val:'special'})))
								.append($(createHr()))
								.append($(createPTag({id:'', clazz:'', val:'coupon'})))
							)
						)
					)
					.append($(createDiv({id:'', clazz:'card col-sm-3'}))
						.append($(createDiv({id:'', clazz:'div-resi-card-photo'}))
							.attr('style', 'border: 1px solid gray; padding: 5px; min-height: 350px;')
							.append($(createDiv({id:'', clazz:'card-body text-center'}))
								.append($(createHTag({num:'1', val:'Something new?'}))
									.attr('style', 'margin-top: 50px')
								)
								.append($(createBtn({id:'', clazz:'btn btn-primary', val:'베스트 특가 상품 더보기...'}))
									.attr('style', 'margin-bottom: -250px')
								)
							)
						)
					)
				)
			)
			.appendTo($content);
			
			$(createDiv({id:'', clazz:'container-fluid'}))
			.attr('style', 'background-color: #e9e9e9')
			.append($(createDiv({id:'', clazz:'container text-center'}))
				.attr('style', 'margin-top: 50px; margin-bottom: 50px; padding-left: 70px; padding-right: 70px')
				.append($(createHTag({num:'2', val:'더 빠르고 스마트한 예약, 바로 \'아고다\'에서!'})))
				.append($(createPTag({id:'', clazz:'', val:'여행에 대한 열정으로 아고다는 고객님들께 전 세계 호텔, 리조트, 프라이빗 하우스, 휴가용 숙소 렌탈 등 다양한 숙소의 베스트 가격을 제공하기 위해 열심히 노력하고 있습니다. 아고다의 많고 다양한 숙소를 기점으로 하는 탐험 여행, 배낭 여행, 신혼여행 및 가족 휴가 여행에 대한 완벽한 계획을 세워보세요. 아고다가 함께 합니다!'}))
					.attr('style', 'font-size: 17px')
				)
				.append($(createPTag({id:'', clazz:'', val:''}))
					.append($(createATag({id:'a-resi-intro', clazz:'', link:'#', val:'왜 아고다를 선택해야 하나요?'}))
						.attr('style', 'font-size: 15px; font-weight: bold;')
						.on('click', (e)=>{
							e.preventDefault();
							$('#div-resi-intro').slideToggle("slow");
						})
					)
				)
			)
			.append($(createDiv({id:'div-resi-intro', clazz:''}))
				.attr('style', 'display: none;')
				.append($(createDiv({id:'', clazz:'container'}))
					.append($(createDiv({id:'', clazz:'row'}))
						.append($(createDiv({id:'', clazz:'col-sm-3 col-sm-offset-1'}))
							.append($(createDiv({id:'', clazz:'flip'}))
								.append($(createDiv({id:'resi-card-1', clazz:'thumbnail'}))
									.attr('style', 'min-height: 400px; padding: 20px; margin-top: 50px')
									.append($(createDiv({id:'', clazz:'face front'}))
										.append($(createDiv({id:'', clazz:'resi-card-img'}))
											.attr('style', 'position: relative; display: inline-block; overflow: hidden; padding: 1px')
											.append($(createImg({id:'', clazz:'resi-card-img-top', src:'https://goo.gl/uP8GfV', alt:''}))
												.attr('style', 'max-width: 100%; max-height: 250px')
											)
										)
										.append($(createHTag({num:'4', val:'150만건 이상의 이용후기'}))
											.attr('style', 'font-weight: bold')
										)
										.append($(createPTag({id:'', clazz:'', val:'아고다 여행 커뮤니티의 솔직한 이용후기를 참고해 완벽한 여행을 위한 최적의 숙소를 찾아 보세요.'}))
										)
									)
									.append($(createDiv({id:'', clazz:'face back'}))
										.append($(createInput({id:'', clazz:'form-control', type:'text', placeholder:''}))
											.attr('value', 'ADKGDUI294')
										)
										.append($(createBtn({id:'', clazz:'form-control', val:'복사하기'}))
											.attr('style', 'margin-top: 20px')
										)
										.append($(createPTag({id:'', clazz:'', val:'예약 시 할인 코드를 입력할 수 있는 숙소 예약(예약일 기준: 2018년 4월 3일~2018년 5월 31일)에 한해 유효함.'}))
												.attr('style', 'margin-top: 20px; font-size: 12px')
										)
										.append($(createHr())
											.attr('style', 'border: 2px solid gray')
										)
										.append($(createBtn({id:'', clazz:'btn btn-primary form-control', val:'숙소 검색하기'}))
										)
									)
								)
								.on('click', x=>{
									console.log('resi-card-1 click');
									$('#resi-card-1').toggleClass('flipped')
								})
							)
						)
						/*두번째 카드*/
						.append($(createDiv({id:'', clazz:'col-sm-4'}))
							.append($(createDiv({id:'', clazz:'flip'}))
								.append($(createDiv({id:'resi-card-2', clazz:'thumbnail'}))
									.attr('style', 'min-height: 400px; padding: 20px;')
									.append($(createDiv({id:'', clazz:'face front'}))
										.append($(createDiv({id:'', clazz:'resi-card-img'}))
											.attr('style', 'position: relative; display: inline-block; overflow: hidden; padding: 1px')
											.append($(createImg({id:'', clazz:'resi-card-img-top', src:'https://goo.gl/uP8GfV', alt:''}))
												.attr('style', 'max-width: 100%; max-height: 250px')
											)
										)
										.append($(createHTag({num:'4', val:'아고다 보장제'}))
											.attr('style', 'font-weight: bold')
										)
										.append($(createPTag({id:'', clazz:'', val:'아고다는 베스트 가격 제공을 위해 열심히 노력하고 있습니다. 더 낮은 가격을 발견한 경우 차액을 되돌려 드립니다.'}))
										)
									)
									.append($(createDiv({id:'', clazz:'face back'}))
										.append($(createInput({id:'', clazz:'form-control', type:'text', placeholder:''}))
											.attr('value', 'ADKGDUI294')
										)
										.append($(createBtn({id:'', clazz:'form-control', val:'복사하기'}))
											.attr('style', 'margin-top: 20px')
										)
										.append($(createPTag({id:'', clazz:'', val:'예약 시 할인 코드를 입력할 수 있는 숙소 예약(예약일 기준: 2018년 4월 3일~2018년 5월 31일)에 한해 유효함.'}))
											.attr('style', 'margin-top: 20px; font-size: 12px')
										)
										.append($(createHr())
											.attr('style', 'border: 2px solid gray')
										)
										.append($(createBtn({id:'', clazz:'btn btn-primary form-control', val:'숙소 검색하기'}))
										)
									)
								)
								.on('click', x=>{
									console.log('resi-card-2 click');
									$('#resi-card-2').toggleClass('flipped')
								})
							)
						)
						/*세번째 카드*/
						.append($(createDiv({id:'', clazz:'col-sm-3'}))
							.append($(createDiv({id:'', clazz:'flip'}))
								.append($(createDiv({id:'resi-card-3', clazz:'thumbnail'}))
									.attr('style', 'min-height: 400px; padding: 20px; margin-top: 50px')
									.append($(createDiv({id:'', clazz:'face front'}))
										.append($(createDiv({id:'', clazz:'resi-card-img'}))
											.attr('style', 'position: relative; display: inline-block; overflow: hidden; padding: 1px')
											.append($(createImg({id:'', clazz:'resi-card-img-top', src:'https://goo.gl/uP8GfV', alt:''}))
												.attr('style', 'max-width: 100%; max-height: 250px')
											)
										)
										.append($(createHTag({num:'4', val:'연중무휴 24시간 고객센터'}))
											.attr('style', 'font-weight: bold')
										)
										.append($(createPTag({id:'', clazz:'', val:'연중무휴 24시간 고객 지원 서비스를 17개 언어로 이용할 수 있습니다.'}))
										)
									)
									.append($(createDiv({id:'', clazz:'face back'}))
										.append($(createInput({id:'', clazz:'form-control', type:'text', placeholder:''}))
											.attr('value', 'ADKGDUI294')
										)
										.append($(createBtn({id:'', clazz:'form-control', val:'복사하기'}))
											.attr('style', 'margin-top: 20px')
										)
										.append($(createPTag({id:'', clazz:'', val:'예약 시 할인 코드를 입력할 수 있는 숙소 예약(예약일 기준: 2018년 4월 3일~2018년 5월 31일)에 한해 유효함.'}))
											.attr('style', 'margin-top: 20px; font-size: 12px')
										)
										.append($(createHr())
											.attr('style', 'border: 2px solid gray')
										)
										.append($(createBtn({id:'', clazz:'btn btn-primary form-control', val:'숙소 검색하기'}))
										)
									)
								)
								.on('click', x=>{
									console.log('resi-card-3 click');
									$('#resi-card-3').toggleClass('flipped')
								})
							)
						)
					)
				)
				.append($(createDiv({id:'', clazz:'container'})).attr('style', 'margin-top: 50px')
					.append($(createDiv({id:'', clazz:'row'}))
						.append($(createDiv({id:'', clazz:'col-md-6 col-md-offset-3'})).attr('style', 'border: 1px solid #333'))	
					)
					.append($(createDiv({id:'resiCarousel', clazz:'carousel slide text-center'}))
						.attr('data-ride', 'carousel')
						.attr('style', 'padding: 50px 170px; min-height: 200px;')
						.append($(createUL({id:'', clazz:'carousel-indicators'}))
							.attr('style', 'bottom: 0px; margin-top: 30px')
							.append($(createLI({id:'', clazz:'active'}))
								.attr('data-target', '#resiCarousel')
								.attr('data-slide-to', '0')
							)
							.append($(createLI({id:'', clazz:''}))
								.attr('data-target', '#resiCarousel')
								.attr('data-slide-to', '1')
							)
							.append($(createLI({id:'', clazz:''}))
								.attr('data-target', '#resiCarousel')
								.attr('data-slide-to', '2')
							)
						)
						.append($(createDiv({id:'', clazz:'carousel-inner'}))
							.attr('role', 'listbox')
							.append($(createDiv({id:'', clazz:'item active'}))
								.append($(createPTag({id:'', clazz:'', val:'아고다는 전 세계적으로 많고 다양한 숙소 옵션과 가장 낮은 가격을 끊임없이 찾아냅니다.'}))
									.attr('style', 'font-size: 20px; font-weight: bold')
								)
							)
							.append($(createDiv({id:'', clazz:'item'}))
								.append($(createPTag({id:'', clazz:'', val:'아고다는 아시아 지역의 호텔과 게스트하우스에 있어 가장 주요한 숙소 웹사이트로 아주 방대한 객실 상품을 보유하고 있으며 베스트 요금을 제공합니다.'}))
									.attr('style', 'font-size: 20px; font-weight: bold')
								)
							)
							.append($(createDiv({id:'', clazz:'item'}))
								.append($(createPTag({id:'', clazz:'', val:'아고다는 아시아 지역의 호텔과 게스트하우스에 있어 가장 주요한 숙소 웹사이트로 아주 방대한 객실 상품을 보유하고 있으며 베스트 요금을 제공합니다.'}))
									.attr('style', 'font-size: 20px; font-weight: bold')
								)
							)
						)
						.append($(createATag({id:'', clazz:'carousel-control left', link:'#resiCarousel', val:''}))
							.attr('data-slide', 'prev')
							.attr('style', 'background-image: none;')
							.append($(createSpan({id:'', clazz:'glyphicon glyphicon-chevron-left', val:''}))
								.attr('style', 'color: #333')
							)
						)
						.append($(createATag({id:'', clazz:'carousel-control right', link:'#resiCarousel', val:''}))
							.attr('data-slide', 'next')
							.attr('style', 'background-image: none;')
							.append($(createSpan({id:'', clazz:'glyphicon glyphicon-chevron-right', val:''}))
								.attr('style', 'color: #333')
							)
						)
					)
					.append($(createDiv({id:'', clazz:'row'}))
						.attr('style', 'margin-top: 30px')
						.append($(createDiv({id:'', clazz:'col-md-6 col-md-offset-3'})).attr('style', 'border: 1px solid #333'))	
					)
				)
			)
			.appendTo($content)
			
			$(createDiv({id:'', clazz:'container text-center'}))
			.attr('style', 'margin-top: 50px; margin-bottom: 50px; position: relative')
			.append($(createImg({id:'', clazz:'', src:'https://goo.gl/pMKvTN', alt:''}))
				.attr('style', 'width: 100%; max-height: 400px; filter: brightness(50%); cursor: pointer')
				.magnificPopup({
					items: {
						src : 'http://www.youtube.com/watch?v=7HKoqNJtMTQ'
					},
					type : 'iframe',
					iframe: {
						markup: '<div class="mfp-iframe-scaler">'
									+'<div class="mfp-close"></div>'
									+'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'
								+'</div>',
						patterns: {
							youtube: {
								index: 'youtube.com/',
								id: 'v=',
								src: '//www.youtube.com/embed/%id%?autoplay=1'
							}
						},
						srcAction: 'iframe_src',
					}
				})
				.hover(()=>{
					$('#a-resi-youtube').attr('style', 'width:100px; height: 100px; border-radius: 50%; position: absolute; color: red; top: 50%; left: 50%; transform: translate(-50%, -50%); border: 5px solid red;')
				}, ()=>{
					$('#a-resi-youtube').attr('style', 'width:100px; height: 100px; border-radius: 50%; position: absolute; color: white; top: 50%; left: 50%; transform: translate(-50%, -50%); border: 5px solid white;')
				})
			)
			.append($(createATag({id:'a-resi-youtube', clazz:'', link:'#', val:''}))
				.attr('style', 'width:100px; height: 100px; border-radius: 50%; position: absolute; color: white; top: 50%; left: 50%; transform: translate(-50%, -50%); border: 5px solid white;')
				.append($(createSpan({id:'', clazz:'glyphicon glyphicon-play', val:''}))
					.attr('style', 'font-size: 50px; top: 50%; left: 10%; transform: translate(-10%, -50%)')
				)
				.magnificPopup({
					items: {
						src : 'http://www.youtube.com/watch?v=7HKoqNJtMTQ'
					},
					type : 'iframe',
					iframe: {
						markup: '<div class="mfp-iframe-scaler">'
									+'<div class="mfp-close"></div>'
									+'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'
								+'</div>',
						patterns: {
							youtube: {
								index: 'youtube.com/',
								id: 'v=',
								src: '//www.youtube.com/embed/%id%?autoplay=1'
							}
						},
						srcAction: 'iframe_src',
					}
				})
				.hover(()=>{
					$('#a-resi-youtube').attr('style', 'cursor: pointer; width:100px; height: 100px; border-radius: 50%; position: absolute; color: red; top: 50%; left: 50%; transform: translate(-50%, -50%); border: 5px solid red;')
				}, ()=>{
					$('#a-resi-youtube').attr('style', 'cursor: pointer; width:100px; height: 100px; border-radius: 50%; position: absolute; color: white; top: 50%; left: 50%; transform: translate(-50%, -50%); border: 5px solid white;')
				})
			)
			.appendTo($content)
			
			$(createDiv({id:'', clazz:'container text-center'}))
			.append($(createHTag({num:'3', val:'한국인이 사랑하는 여행지'})))
			.appendTo($content)
			
			/*그리드 구현*/
			$(createDiv({id:'resi-content', clazz:'container'}))
			.attr('style', 'margin-top: 30px')
			.append($(createDiv({id:'', clazz:'resi-content-one'}))
				.attr('style', 'position: relative;')
				.append($(createDiv({id:'', clazz:''}))
					.attr('style', 'z-index: 100; position: absolute; color: white; top: 50%; left: 50%; transform: translate(-50%, -50%); line-height: 40px')
					.append($(createPTag({id:'', clazz:'', val:'NewYork'}))
						.attr('style', 'font-size: 40px; font-weight: bold; margin-bottom: 0px; cursor: pointer')
					)
					.append($(createPTag({id:'', clazz:'', val:'뉴욕'}))
						.attr('style', 'font-size: 20px; font-weight: bold; margin-bottom: 0px; cursor: pointer')
					)
				)
				.append($(createImg({id:'', clazz:'', src:'https://goo.gl/bRFns2', alt:''}))
					.attr('style','max-width: 100%; min-height: 100%; display: block;')
				)
			)
			.append($(createDiv({id:'', clazz:'resi-content-two'}))
				.attr('style', 'position: relative;')
				.append($(createDiv({id:'', clazz:''}))
					.attr('style', 'z-index: 100; position: absolute; color: white; top: 50%; left: 50%; transform: translate(-50%, -50%); line-height: 40px')
					.append($(createPTag({id:'', clazz:'', val:'Barcelona'}))
						.attr('style', 'font-size: 40px; font-weight: bold; margin-bottom: 0px; cursor: pointer')
					)
					.append($(createPTag({id:'', clazz:'', val:'스페인'}))
						.attr('style', 'font-size: 20px; font-weight: bold; margin-bottom: 0px; cursor: pointer')
					)
				)
				.append($(createImg({id:'', clazz:'', src:'https://goo.gl/3gTgSk', alt:''}))
					.attr('style','max-width: 100%; min-height: 100%; display: block;')
				)
			)
			.append($(createDiv({id:'', clazz:'resi-content-three'}))
				.attr('style', 'position: relative;')
				.append($(createDiv({id:'', clazz:''}))
					.attr('style', 'z-index: 100; position: absolute; color: white; top: 50%; left: 50%; transform: translate(-50%, -50%); line-height: 40px')
					.append($(createPTag({id:'', clazz:'', val:'Dubrovnik'}))
						.attr('style', 'font-size: 40px; font-weight: bold; margin-bottom: 0px; cursor: pointer')
					)
					.append($(createPTag({id:'', clazz:'', val:'크로아티아'}))
						.attr('style', 'font-size: 20px; font-weight: bold; margin-bottom: 0px; cursor: pointer')
					)
				)
				.append($(createImg({id:'', clazz:'', src:'https://goo.gl/6mX6U8', alt:''}))
					.attr('style','max-width: 100%; min-height: 100%; display: block;')
				)
			)
			.append($(createDiv({id:'', clazz:'resi-content-four'}))
				.attr('style', 'position: relative;')
				.append($(createDiv({id:'', clazz:''}))
					.attr('style', 'z-index: 100; position: absolute; color: white; top: 50%; left: 50%; transform: translate(-50%, -50%); line-height: 40px')
					.append($(createPTag({id:'', clazz:'', val:'ToKyo'}))
						.attr('style', 'font-size: 40px; font-weight: bold; margin-bottom: 0px; cursor: pointer')
					)
					.append($(createPTag({id:'', clazz:'', val:'일본'}))
						.attr('style', 'font-size: 20px; font-weight: bold; margin-bottom: 0px; cursor: pointer')
					)
				)
				.append($(createImg({id:'', clazz:'', src:'https://goo.gl/HJJ1sM', alt:''}))
					.attr('style','max-width: 100%; min-height: 100%; display: block;')
				)
			)
			.append($(createDiv({id:'', clazz:'resi-content-five'}))
				.attr('style', 'position: relative;')
				.append($(createDiv({id:'', clazz:''}))
					.attr('style', 'z-index: 100; position: absolute; color: white; top: 50%; left: 50%; transform: translate(-50%, -50%); line-height: 40px')
					.append($(createPTag({id:'', clazz:'', val:'DaNang'}))
						.attr('style', 'font-size: 40px; font-weight: bold; margin-bottom: 0px; cursor: pointer')
					)
					.append($(createPTag({id:'', clazz:'', val:'베트남'}))
						.attr('style', 'font-size: 20px; font-weight: bold; margin-bottom: 0px; cursor: pointer')
					)
				)
				.append($(createImg({id:'', clazz:'', src:'https://goo.gl/ByHX2w', alt:''}))
					.attr('style','max-width: 100%; min-height: 100%; display: block;')
				)
			)
			.append($(createDiv({id:'', clazz:'resi-content-six'}))
				.attr('style', 'position: relative;')
				.append($(createDiv({id:'', clazz:''}))
					.attr('style', 'z-index: 100; position: absolute; color: white; top: 50%; left: 50%; transform: translate(-50%, -50%); line-height: 40px')
					.append($(createPTag({id:'', clazz:'', val:'MarinaBay'}))
						.attr('style', 'font-size: 40px; font-weight: bold; margin-bottom: 0px; cursor: pointer')
					)
					.append($(createPTag({id:'', clazz:'', val:'싱가폴'}))
						.attr('style', 'font-size: 20px; font-weight: bold; margin-bottom: 0px; cursor: pointer')
					)
				)
				.append($(createImg({id:'', clazz:'', src:'https://goo.gl/XubuoF', alt:''}))
					.attr('style','max-width: 100%; min-height: 100%; display: block;')
				)
			)
			.appendTo($content)
			
			$(function(){
				$('#resi-content div img').hover(()=>{
					$('#resi-content div img').attr('style', 'max-width:100%; min-height:100%; display: block; cursor:pointer; filter:brightness(40%)');
				},()=>{
					$('#resi-content div img').attr('style', 'max-width:100%; min-height:100%; display: block; cursor:pointer; filter:brightness(70%)');
				})
				
				
				$('#resi-content div div p').hover(()=>{
					$(this).parent('div').siblings('img')
					.attr('style', 'max-width:100%; min-height:100%; cursor:pointer; filter:brightness(40%)');
				}, ()=>{
					$(this).parent('div').siblings('img')
					.attr('style', 'max-width:100%; min-height:100%; cursor:pointer; filter:brightness(70%)');
				});
				

				
				$('div.card .div-card-photo').hover(function(){
					$(this).css('box-shadow', '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)');
				}, function(){
					$(this).css('box-shadow', '');
				});
			
			});
		});
	};
	return {onCreate : onCreate};
})();