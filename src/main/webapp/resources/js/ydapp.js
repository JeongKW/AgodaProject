app.residenceReservation =(()=>{
	var context, view, image;
	var onCreate =x=>{
		$content = $('#content');
		context = $.context();
		view = $.javascript() + '/ydview.js';
		image = $.image();
		setContentView(x);
	};
	var setContentView =x=>{
			$.getScript(view, ()=>{
				console.log(x.headCount);
				$content.html($(createResiReserPage(x)));
				$(document).ready(function(){
					// Map options
					var options = {
							zoom: 9,
							center: {lat: 42.3601, lng: -71.0589}
					}
					// New map
					var map = new google.maps.Map(document.getElementById('resi-map'), options);
					// Add marker
					var marker = new google.maps.Marker({
						position: {lat:42.4668, lng:-70.9495},
						map: map							
					});
				})
				

				/*display 설정: 예약자와 투숙자가 다를 경우 클릭해서 투숙객 정보를 입력해 주세요.*/				
				$('#resi-reser-info-confirm').on('click', ()=>{
					$('input[id=resi-reser-info-confirm]').each(function(){
						if($(this).is(':checked')){
							$('#resi-reser-info-confirm-result').attr('style', 
							'background: #e9e9e9; padding: 20px; margin-top: 10px; display: block;');					
						} else {
							console.log('false');
							$('#resi-reser-info-confirm-result').attr('style', 'display: none;');											
						}
					})									
				})
				/*display 설정: 특별 요청 사항 입력하기*/
				$('#resi-reser-add-other-info').on('click', (e)=>{
					e.preventDefault()
					if($('#resi-reser-add-other-info-span').attr('class')==="fa fa-plus-circle") {						
						$('#resi-reser-add-other-info-span').attr('class', 'fa fa-minus-circle')
						$('#resi-reser-add-other-info-result')
						.attr('style', 'margin-top: 10px; background: #e9e9e9; width:100%; padding: 10px; display: block;')						
					} else {
						$('#resi-reser-add-other-info-span').attr('class', 'fa fa-plus-circle')
						$('#resi-reser-add-other-info-result')
						.attr('style', 'display: none;')
					}
				})
				// 예약정보 미 입력 시 알림창 띄우기
				function autoClosingAlert(selector, delay){
					var alert = $(selector).alert();
					alert.show();
					window.setTimeout(function(){alert.hide()}, delay)
				}
				
				$('.uploadButton').on('click', function(e){
					alert('click');
					e.preventDefault();
				})	
				
				$('#resi-reser-pay-btn').on('click', function(){					
					if($('#resi-reser-fristName').val()===""){
						$('#dangerMessage').text('영문 이름을 입력해 주세요.');
						autoClosingAlert('#dangerMessage', 2000);
						$(this).attr('data-toggle', '');
					} else if($('#resi-reser-lastName').val()===""){
						$('#dangerMessage').text('영문 성을 입력해 주세요.');
						autoClosingAlert('#dangerMessage', 2000);
						$(this).attr('data-toggle', '');
					} else if($('#resi-reser-email').val()===""){
						$('#dangerMessage').text('이메일 주소를 입력해 주세요.');
						autoClosingAlert('#dangerMessage', 2000);
						$(this).attr('data-toggle', '');
					} else if($('#resi-reser-phone').val()===""){
						$('#dangerMessage').text('전화번호를 입력해 주세요.');
						autoClosingAlert('#dangerMessage', 2000);
						$(this).attr('data-toggle', '');
					} else if($('#resi-card-select-option').val()==="미정"){
						$('#dangerMessage').text('카드를 선택해 주세요.');
						autoClosingAlert('#dangerMessage', 2000);
						$(this).attr('data-toggle', '');
					} else {
						var result = confirm('결제 하시겠습니까?');
						if(result) {
							var json = {
								ID : sessionStorage.getItem('user'),
								headCount : x.headCount,
								checkIn : x.checkIn,
								checkOut : x.checkOut,
								price : x.list.price,
								resCode : x.list.resCode
							};	
							$.ajax({
								url: context+'/resi/reservation',
								method: 'POST',
								data: JSON.stringify(json),
								datatype: 'json',
								contentType: 'application/json',
								success: x=>{
									console.log(x.resScheduleSeq);
									$('#resi-reservation_seq').text(x.resScheduleSeq);
									$('#resi-firstName-modal-span').text($('#resi-reser-fristName').val());
									$('#resi-lastName-modal-span').text($('#resi-reser-lastName').val());
									$('#resi-email-modal-span').text($('#resi-reser-email').val());
									$('#resi-phone-modal-span').text($('#resi-reser-phone').val());
									$('#resi-installment-select-modal-span').text($('#resi-installment-select-option').val());
									$('#resi-arrival-time-select-modal-span').text($('#resi-arrival-time-select-option').val());
									$(this).attr('data-toggle', 'modal');
								}, error: x=>{
									alert('에러');
								}
							})							
						} else {
							$(this).attr('data-toggle', '');
						}				
					};												
				});
				$('#resi-payment-modal-close-btn').on('click', function(){
					setTimeout(function(){app.residence.onCreate();}, 200)										
				})
				$('#resi-payment-modal-close-btn-times').on('click', function(){
					setTimeout(function(){app.residence.onCreate();}, 200)										
				})
				
				$('#resi-go-mypage-span').on('click', function(){
					$('#resi-payment-modal-close-btn').trigger('click');
					setTimeout(function(){app.login.mypage();}, 200)
				});
				$('#resi-go-print-span').on('click', function(){
					alert('인쇄중 입니다.');
				});
				// option change 값 담기
				$('#resi-card-select-option').on('change', function(){
					$('#resi-card-select-modal-span').text($(this).val());
				});
				$('#resi-installment-select-option').on('change', function(){
					$('#resi-installment-select-modal-span').text($(this).val());
				});
				$('#resi-arrival-time-select-option').on('change', function(){
					$('#resi-arrival-time-select-modal-span').text($(this).val());
				});
				
			});
	};
	return {onCreate : onCreate}
})();

app.residenceSpec =(()=>{	
	var context, view, image;
	var onCreate =x=>{
		$content = $('#content');
		context = $.context();
		view = $.javascript() + '/ydview.js';
		image = $.image();
		setContentView(x);
	}
	var setContentView =x=>{
		$.getScript(view, ()=>{
			$content.html($(createDiv({id:'resi-sticky-search-nav', clazz:'container-fluid'}))
				.attr('style', 'background: #e9e9e9; height: 60px; box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.19);')				
			)
			$("body").scrollTop(0);			
			$(createDiv({id:'', clazz:'container'}))
			.attr('style', 'padding: 0px; padding-top:13px')			
			.append($(createSerahNav(x)))
			.appendTo('#resi-sticky-search-nav')
			
			$('#resi-search-nav-daterange').daterangepicker();
					
			$('#resi-search-nav-minus').on('click', ()=>{
				console.log('minus click!');
				if(parseInt($('#resi-spec-count').text(), 10)!=1){
					$('#resi-spec-count').text(parseInt($('#resi-spec-count').text(), 10)-1);
					$('#resi-spec-count').text($('#resi-spec-count').text())												
				}
			})
			$('#resi-search-nav-plus').on('click', ()=>{
				console.log('plus click!');
				$('#resi-spec-count').text(parseInt($('#resi-spec-count').text(), 10)+1);
				$('#resi-spec-count').text($('#resi-spec-count').text());
			})
			
			$(createDiv({id:'resi-div-filter', clazz:'container filter'}))
			.attr('style', 'padding: 0px;'
				+'box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);')
			.appendTo($content)
					
			$(createDiv({id:'', clazz:'col-sm-3'}))
			.attr('style', 'border-right: 1px solid gray; height: 140px; padding: 10px')
			.append($(createSpan({id:'', clazz:'', val:'요금 범위'}))
				.attr('style', 'font-size: 15px; font-weight: bold; padding-left: 10px')		
			)
			.append($(createDiv({id:'', clazz:''}))
				.attr('style', 'margin-top: 10px; padding-left: 10px')		
				.append($(createSpan({id:'resi-price-range-output', clazz:'', val:''}))
					.attr('style', 'font-size: 15px')	
				)
				.append('<br/><br/><br/>')
				.append('<div id="resi-slider"></div>')
				.append('<div id="resi-slider2"></div>')
			)
			.appendTo('#resi-div-filter');
			var price1;
			var price2;
			$(function(){
				var resultSpan = $('#resi-price-range-output');
				var divSlider = $('#resi-slider');
				$('#resi-slider').slider({
					range : true,
					min: 0,
					max:  320000,
					step: 10000,
					values: [0,  320000],
					slide : function(e, ui){
						resultSpan.html(''
								+ui.values[0]
								+' ~ '
								+ui.values[1]);						
					},
					change: function(e, ui){
						console.log(ui.values[0]);
						console.log(ui.values[1]);
						price1 = ui.values[0];
						price2 = ui.values[1];
						var json = {
								price1 : price1,
								price2 : price2,
								WhereKeyword : 'price',
								Table1 : 'residence',
								Table2 : 'facility',
								Orderby : 'price',
								headCount: x.headCount,
								listCount : $('#resi-loadMore-btn').attr('value')
						}
						$.ajax({
							url: context+'/resi/search/filter',
							method: 'POST',
							data: JSON.stringify(json),
							datatype: 'json',
							contentType: 'application/json',
							success: x=>{
								console.log('정렬된 결과 수: '+x.sortCount)
								console.log('넘어온 인원 수: '+x.headCount)
								$('#resi-loadMore-btn').attr('name', 'price');											
								if(x.sortCount > $('#resi-loadMore-btn').attr('value')){
									$('#resi-loadMore-btn').show();											
								} else {
									$('#resi-loadMore-btn').hide();		
								}
								var list = x.success;
								var headCount = x.headCount;
								$('#resi-lists').empty();
								$('#resi-lists').append($(createAutoLI({list: list, headCount: headCount})))
							}, error: x=>{
								alert('에러');
							}
						})
					}
				});
				resultSpan.html(''+divSlider.slider('values', 0) + ' ~ ' + divSlider.slider('values', 1));
			})

			$(createDiv({id:'resi-starRating-div', clazz:'col-sm-3'}))
			.attr('style', 'border-right: 1px solid gray; height: 140px; padding: 10px 0px;')
			.append($(createSpan({id:'', clazz:'', val:'숙소 성급'}))
				.attr('style', 'font-size: 15px; font-weight: bold; padding-left: 10px')
			)
			.append($(createATag({id:'resi-starRating-option-cancel', clazz:'', link:'', val:'선택해제'}))
					.attr('style', 'font-size: 12px; float: right; padding-right: 10px; color: blue')
					.on('click', function(e){
						e.preventDefault();
						/*스타레이팅 체크박스 선택해제*/
						$('input[name=starRating_checkbox]:checked').each(function(){
							$(this).trigger('click');
						})
						$(this).hide();
					})					
			)
			.append($(createDiv({id:'', clazz:''}))
					.attr('style', 'margin-top: 10px')
					.append($(createLabel({id:'', clazz:'checkboxContainer'}))
							.append($(createInput({id:'', clazz:'', type:'checkbox', placeholder:'starRating5'}))
								.attr('name', 'starRating_checkbox')
							)
							.append($(createSpan({id:'', clazz:'checkmark', val:''})))
							.append('&nbsp;&nbsp<span class="fa fa-star checked-resi-star"></span>'
									+'&nbsp;<span class="fa fa-star checked-resi-star"></span>'
									+'&nbsp;<span class="fa fa-star checked-resi-star"></span>'
									+'&nbsp;<span class="fa fa-star checked-resi-star"></span>'
									+'&nbsp;<span class="fa fa-star checked-resi-star"></span>'
									+'&nbsp;&nbsp;('+x.starRatingList[4].count+')')
					)							
					.append($(createLabel({id:'', clazz:'checkboxContainer'}))
							.append($(createInput({id:'', clazz:'', type:'checkbox', placeholder:'starRating4'}))
								.attr('name', 'starRating_checkbox')		
							)
							.append($(createSpan({id:'', clazz:'checkmark', val:''})))
							.append('&nbsp;&nbsp<span class="fa fa-star checked-resi-star"></span>'
									+'&nbsp;<span class="fa fa-star checked-resi-star"></span>'
									+'&nbsp;<span class="fa fa-star checked-resi-star"></span>'
									+'&nbsp;<span class="fa fa-star checked-resi-star"></span>'
									+'&nbsp;&nbsp;('+x.starRatingList[3].count+')')
					)
					.append($(createLabel({id:'', clazz:'checkboxContainer'}))
							.append($(createInput({id:'', clazz:'', type:'checkbox', placeholder:'starRating3'}))
								.attr('name', 'starRating_checkbox')			
							)
							.append($(createSpan({id:'', clazz:'checkmark', val:''})))
							.append('&nbsp;&nbsp<span class="fa fa-star checked-resi-star"></span>'
									+'&nbsp;<span class="fa fa-star checked-resi-star"></span>'
									+'&nbsp;<span class="fa fa-star checked-resi-star"></span>'
									+'&nbsp;&nbsp;('+x.starRatingList[2].count+')')
					)
					.append($(createDiv({id:'resi-star-dropdown', clazz:''}))
						.attr('style', 'display: none')
						.append($(createLabel({id:'', clazz:'checkboxContainer'}))
								.append($(createInput({id:'', clazz:'', type:'checkbox', placeholder:'starRating2'}))
									.attr('name', 'starRating_checkbox')			
								)
								.append($(createSpan({id:'', clazz:'checkmark', val:''})))
								.append('&nbsp;&nbsp<span class="fa fa-star checked-resi-star"></span>'
										+'&nbsp;<span class="fa fa-star checked-resi-star"></span>'
										+'&nbsp;&nbsp;('+x.starRatingList[1].count+')')
						)
						.append($(createLabel({id:'', clazz:'checkboxContainer'}))
								.append($(createInput({id:'', clazz:'', type:'checkbox', placeholder:'starRating1'}))
									.attr('name', 'starRating_checkbox')			
								)
								.append($(createSpan({id:'', clazz:'checkmark', val:''})))
								.append('&nbsp;&nbsp<span class="fa fa-star checked-resi-star"></span>'
										+'&nbsp;&nbsp;('+x.starRatingList[0].count+')')
						)
						.append($(createLabel({id:'', clazz:'checkboxContainer'}))
								.append($(createInput({id:'resi-none-starRating', clazz:'', type:'checkbox', placeholder:'starRating0'}))
									.attr('name', 'starRating_checkbox')			
								)
								.append($(createSpan({id:'', clazz:'checkmark', val:''})))
								.append('&nbsp;&nbsp<span>성급 없음</span>')
						)		
					)
					.append($(createDiv({id:'resi-star-dropdown-arrow', clazz:''}))
						.append($(createDiv({id:'', clazz:'text-center'}))
							.append($(createSpan({id:'', clazz:'fa fa-sort-down', val:''})))
						)
					)				
			)
			.hover(function(){
				$(this).attr('style', 'border-right: 1px solid red; height: 140px; padding: 10px 0px;')
				$('#resi-star-dropdown-arrow').attr('style', 'display: none;')
				$('#resi-star-dropdown').attr('style', 'background: #fff; display: block;')
				$('#resi-starRating-div').attr('style', 'border-right: 1px solid gray; height: 140px; padding: 10px 0px;')
			}, function(){
				$(this).attr('style', 'border-right: 1px solid gray; height: 140px; padding: 10px 0px; overflow: hidden;')
				$('#resi-star-dropdown-arrow').attr('style', 'display: block;')
				$('#resi-star-dropdown').attr('style', 'display: none;')

			})			
			.appendTo('#resi-div-filter');
			
			
			$(createDiv({id:'', clazz:'col-sm-3'}))
			.attr('style', 'border-right: 1px solid gray; height: 140px; padding: 10px')
			.append($(createSpan({clazz:'', val:'숙소 위치 평가 점수'}))
				.attr('style', 'font-size: 15px; font-weight: bold')	
			)
			.append($(createATag({id:'resi-ratingScore-option-cancel', clazz:'', link:'', val:'선택해제'}))
				.attr('style', 'font-size: 12px; float: right; padding-right: 10px; color: blue')
				.on('click', function(e){
					e.preventDefault();
					/*평점 라디오 버튼 선택해제*/
					$('input[name=ratingScore_checkbox]:checked').each(function(){
						$(this).trigger('click');
					})
					$(this).hide();
				})					
			)
			.append($(createDiv({id:'', clazz:''}))
				.attr('style', 'margin-top: 10px')
				.append($(createDiv({id:'', clazz:''}))					
					.attr('style', 'padding-left: 10px')
					.append($(createInput({id:'', clazz:'', type:'checkbox', placeholder:'9'}))
					.attr('name', 'ratingScore_checkbox')		
					)
					.append('<span><strong>  9+</strong>  최고의 위치</span>')
				)			
				.append($(createDiv({id:'', clazz:''}))
					.attr('style', 'padding-left: 10px')
					.append($(createInput({id:'', clazz:'', type:'checkbox', placeholder:'8'}))
						.attr('name', 'ratingScore_checkbox')		
					)
					.append('<span><strong>  8+</strong>  우수한 위치</span>')
				)			
				.append($(createDiv({id:'', clazz:''}))
					.attr('style', 'padding-left: 10px')
					.append($(createInput({id:'', clazz:'', type:'checkbox', placeholder:'7'}))
						.attr('name', 'ratingScore_checkbox')		
					)
					.append('<span><strong>  7+</strong>  아주 좋은 위치</span>')
				)			
			)
			.appendTo('#resi-div-filter');
			
			$(document).ready(function(){
				/*선택 해제 숨기기*/
				$('#resi-starRating-option-cancel').hide();
				$('#resi-ratingScore-option-cancel').hide();
			})
			
			$(createDiv({id:'', clazz:'col-sm-3'}))
			.attr('style', 'height: 140px; padding: 10px')
			.append($(createSpan({clazz:'', val:'《딱! 맞춤》 검색 조건 입력'}))
				.attr('style', 'font-size: 15px; font-weight: bold')
			)
			.append($(createInput({id:'', clazz:'form-control', type:'', placeholder:'숙소명/숙소/종류/지역/편의시설'}))
				.attr('style', 'margin-top: 10px')
			)
			.appendTo('#resi-div-filter');

			
			$(createDiv({id:'', clazz:'container resi-spec-total'}))
			.attr('style', 'margin-top: 70px; padding: 0px;')
			.appendTo($content);

			/*사이드바 구현*/
			$(createDiv({id:'resi-sidebar-col', clazz:'col-sm-3'}))
			.attr('style', 'min-height: 500px; padding: 0px; padding-right: 20px;')
			.appendTo('.resi-spec-total');
				
				$(createDiv({id:'resi-sidebar-col-div', clazz:''}))
				.attr('style', 'padding: 10px;'
					+'box-shadow: 2px 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);')
				.appendTo('#resi-sidebar-col');
				
				$(createDiv({id:'', clazz:'resi-searchLocation'}))
				.attr('data-toggle', 'modal')
				.attr('data-target', '#resiMapModal')
				.attr('style', 'cursor: pointer')
				.on('click', ()=>{
					$(createDiv({id:'resi-map-div',clazz:''})).appendTo($content);
					$('#resi-map-div').html(
						$(createDiv({id:'resiMapModal', clazz:'modal fade'}))
						.attr('role', 'dialog')
						.append($(createDiv({id:'', clazz:'modal-dialog modal-lg'}))
							.append($(createDiv({id:'', clazz:'modal-content'}))
								.append($(createDiv({id:'', clazz:'modal-header'}))
									.attr('style', '')
									.append($(createBtn({id:'', clazz:'close', val:'&times;'}))
										.attr('data-dismiss', 'modal')
										.attr('style', 'font-size: 50px; font-weight: bold;')
										.hover(function(){
											$(this).attr('style', 'font-size: 50px; font-weight: bold; color: red;')
										}, function(){
											$(this).attr('style', 'font-size: 50px; font-weight: bold;')
										})
									)
									.append($(createHTag({num:'4', val:'오시는 길'}))
										.attr('style', 'font-size: 30px; font-weight: bold;')
									)
								)
								.append($(createDiv({id:'', clazz:'modal-body'}))
									.append($(createDiv({id:'map', clazz:''}))
										.attr('style', 'width: 100%; height: 400px;')											
									)	
								)	
								.append($(createDiv({id:'', clazz:'modal-footer'}))
									.append($(createPTag({id:'', clazz:'', val:'감사합니다. 빨리오셔요~!'}))
										.attr('style', 'font-size: 20px; font-weight: bold;')
									)	
								)	
							)
						)	
						.on('show.bs.modal', function(event){
							initialize()
						})
					)
				})
				.appendTo('#resi-sidebar-col-div');
				
				function initialize(){
					var chicago = {lat: 41.85, lng: -87.65};
			        var indianapolis = {lat: 39.79, lng: -86.14};
					
					var map = new google.maps.Map(document.getElementById('map'), {
						zoom: 20,
						center: chicago
					});
					
					var directionsDisplay = new google.maps.DirectionsRenderer({
						map: map
					});
			
					var request = {
						destination: indianapolis,
						origin: chicago,
						travelMode: 'DRIVING'
					}
					var directionsService = new google.maps.DirectionsService();
					directionsService.route(request, function(response, status){
						if(status == 'OK'){
							directionsDisplay.setDirections(response);
						}
					})
				}
				/*google.maps.event.addDomListener(window, "load", initialize);*/
				
					$(createImg({id:'', clazz:'', src: 'https://goo.gl/P9XPJj', alt: ''}))
					.attr('style', 'max-width: 100%; max-height: 100%; position: relative; border: 1px solid gray')
					.appendTo('.resi-searchLocation');
						$(createPTag({id: 'resi-sidebar-loc-ptag', clazz: '', val: '숙소 위치 확인'}))	
						.attr('style', 'position: absolute; top: 15%; left: 50%; transform: translate(-65%, -70%); font-weight: bold;')
						.appendTo('.resi-searchLocation');
					
					$(createDiv({id: 'resi-sidebar-btn', clazz: 'card btn-success text-center'}))
					.attr('style', 'padding: 10px; margin-top: 20px; cursor: pointer; display: none;')
					.append($(createSpan({id:'', clazz:'', val:'결과 내 재 검색'}))
						.attr('style', 'font-size: 20px; font-weight: bold;')
					)
					.on('click', ()=>{
						$('html').stop().animate({scrollTop: 0}, 200);
					})
					.appendTo('#resi-sidebar-col-div');	
						
					$(createDiv({id: '', clazz: 'resi-filters-list'}))
					.attr('style', 'margin-top: 20px')
					.appendTo('#resi-sidebar-col-div');
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
											
/*										$(createLabel({id:'', clazz:'checkboxContainer'}))
										.append($(createInput({type: 'checkbox', id:'', clazz: 'resi-option', placeholder: ''}))
											.attr('value', 'breakfast'))
										.append($(createSpan({id: '', clazz: 'checkmark', val: ''})))
										.append($(createSpan({id: '', clazz: '', val: '조식 포함'}))
											.attr('style', 'font-size: 16px')
										)
										.appendTo('.li-resi-filter-item-service-1')*/
										
											$(createInput({type: 'checkbox', id:'', clazz: 'resi-option', placeholder: ''}))
												.attr('value', 'breakfast')
												.appendTo('.li-resi-filter-item-service-1');
											$(createSpan({id: '', clazz: '', val: '조식 포함'}))
												.appendTo('.li-resi-filter-item-service-1');
										
											$(createLI({id:'', clazz: 'li-resi-filter-item-service-2'}))
											.attr('style', 'list-style-type: none')
											.appendTo('.ul-resi-filter-item-service');
											$(createInput({type: 'checkbox', id:'', clazz: '', placeholder: ''}))
												.attr('value', 'late-checkOut')
												.appendTo('.li-resi-filter-item-service-2');
											$(createSpan({id: '', clazz: '', val: '레이트 체크아웃'}))
												.appendTo('.li-resi-filter-item-service-2');			
											
						$('input[type=radio]').attr('disabled', 'true');
						$('#resi-none-starRating').attr('disabled', 'true');
						
						$('input[type=checkbox]').on('click', function(){							
							var DATA = "";
							var value;
							var multiData;
							var WhereKeyword, data4, data5;
							/*평점 체크박스 라디오 기능 구현*/
							if($(this).attr('name') === "ratingScore_checkbox"){
								if($(this).prop('checked')){
									console.log('뜨루야!');
									$('input[name=ratingScore_checkbox]').prop('checked', false);
									$(this).prop('checked', true);
									value = $(this).val();
								}
							}
							
							/*체크박스 값 DATA에 저장(평점 제외)*/
							$('input[type=checkbox]:checked').each(function(){
								console.log('입력된 값: '+$(this).val());									
								if($(this).is(':checked')) {
									DATA += $(this).val()+"/";									
								}									
							})
							
							if($('input[name=starRating_checkbox]').is(':checked')){
								$('#resi-starRating-option-cancel').show();					
							} else {
								$('#resi-starRating-option-cancel').hide();								
							}							
							
							if($('input[name=ratingScore_checkbox]').is(':checked')){
								$('#resi-ratingScore-option-cancel').show();			
							} else {
								$('#resi-ratingScore-option-cancel').hide();								
							}							
							
							var splitDATA = DATA.split("/");
							console.log(splitDATA);
							if(splitDATA.length==1) {
								if(value === "price"){
									WhereKeyword = value;
									data4 = price1;
									data5 = price2;
								} else if(value==9 || value==8 || value==7){
									WhereKeyword = 'ratingScore';
									data4 = value;
								} else {
									WhereKeyword = 'null';									
								}
							} else if(splitDATA.length==2){
								value = splitDATA[0];
								if(value==="breakfast"){
									data4 = 'breakfast';
									data5 = 'true';
									WhereKeyword = value;
								} else if(value==9 || value==8 || value==7){
									WhereKeyword = 'ratingScore';
									data4 = value;
								}else if(value==="starRating5" || value==="starRating4" || value==="starRating3" ||
										value==="starRating2" || value==="starRating1" || value==="starRating0"){
									var str = value;
									var str1 = str.substring(0, 10);
									var str2 = str.substring(10, 11);
									data4 = str1;
									data5 = str2;
									WhereKeyword = str1;
								}
							} else {
								WhereKeyword = 'multiOption';
								multiData = DATA;									
							}										
							console.log('WhereKeyword: '+WhereKeyword);
							var json = {
									WhereKeyword : WhereKeyword,
									Table1 : 'residence',
									Table2 : 'facility',
									Orderby : 'starRating DESC',
									data4 : data4,
									data5 : data5,
									multiData: multiData,
									headCount : x.headCount,
									listCount : $('#resi-loadMore-btn').attr('value')
							};
							
							$.ajax({
								url: context+'/resi/search/filter',
								method : 'POST',
								data : JSON.stringify(json),
								datatype : 'json',
								contentType : 'application/json',
								success : x=>{
									console.log('정렬된 결과 수: '+x.sortCount)
									if(x.sortCount > $('#resi-loadMore-btn').attr('value')){
										$('#resi-loadMore-btn').show();											
									} else {
										$('#resi-loadMore-btn').hide();		
									}
									var list = x.success;
									var headCount = x.headCount;
									$('#resi-lists').empty();
									$('#resi-lists').append($(createAutoLI({list: list, headCount: headCount})))
								}, error : x=>{
									alert('에러');
								}
							})

						})
					
																	
						$(createHr())
						.attr('style', 'margin-top: 5px; margin-right: 20px; margin-bottom: 5px')
						.appendTo('.resi-filters-list');			
						
			$(createDiv({id:'resi-main-col', clazz:'col-sm-9'})).attr('style', 'min-height: 500px; padding-right: 0px')
			.appendTo('.resi-spec-total');
				$(createDiv({id: '', clazz: 'resi-header-sort-section'}))
				.attr('style', 'height: 70px; padding: 10px; border-left: 7px solid red;'
					+'box-shadow: 2px 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);')
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
							$(createUL({id:'resi-sort-ul', clazz:'dropdown-menu dropdown-menu-right'}))
							.attr('aria-labelledby', 'resiMenu').attr('style', 'width: 300px')
							.append($(createLI({id:'', clazz:''})).append($(createATag({id:'', clazz:'dropdown-item', link:'#', val:'아고다 추천'}))
								.attr('value', 'starRating DESC')))
							.append($(createLI({id:'', clazz:'divider'})))
							.append($(createLI({id:'', clazz:''})).append($(createATag({id:'', clazz:'dropdown-item', link:'#', val:'요금(낮은 가격 순)'}))
								.attr('value', 'price')))
							.append($(createLI({id:'', clazz:'divider'})))
							.append($(createLI({id:'', clazz:''})).append($(createATag({id:'', clazz:'dropdown-item', link:'#', val:'요금(높은 가격 순)'}))
								.attr('value', 'price DESC')))
							.append($(createLI({id:'', clazz:'divider'})))
							.append($(createLI({id:'', clazz:''})).append($(createATag({id:'', clazz:'dropdown-item', link:'#', val:'투숙객 평가(높은 평가 순)'}))
								.attr('value', 'ratingScore DESC')))
							.append($(createLI({id:'', clazz:'divider'})))
							.append($(createLI({id:'', clazz:''})).append($(createATag({id:'', clazz:'dropdown-item', link:'#', val:'투숙객 평가(낮은 평가 순)'}))
								.attr('value', 'ratingScore')))
							.appendTo('#resi-dropdown');
					
					$('#resi-sort-ul li a').on('click', function(e){
						e.preventDefault();
						var DATA = "";
						var value;
						var multiData;
						var WhereKeyword, data4, data5;
						/* 체크박스 값 가져오기 */
						$('input[type=checkbox]:checked').each(function(){
							console.log('입력된 값: '+$(this).val());	
							if($(this).is(':checked')) {
								DATA += $(this).val()+"/";									
							}
						})
						var splitDATA = DATA.split("/");
						console.log(splitDATA.length);
						/* 체크박스 값 1 or N 으로 value값 구분 */
						if(splitDATA.length==1 || splitDATA.length==2){
							value = splitDATA[0];
							if(value==="breakfast"){
								data4 = 'breakfast';
								data5 = 'true';
								WhereKeyword = value;
							} else if(value==="starRating5" || value==="starRating4" || value==="starRating3" ||
									value==="starRating2" || value==="starRating1" || value==="starRating0"){
								var str = value;
								var str1 = str.substring(0, 10);
								var str2 = str.substring(10, 11);
								data4 = str1;
								data5 = str2;
								WhereKeyword = str1;
							} else {
								WhereKeyword = 'null';									
							}
						} else {
							console.log('else');
							WhereKeyword = 'multiOption';
							multiData = DATA;
						}	
						console.log(WhereKeyword);
						console.log($(this).attr('value'));
						var json = {
								Orderby: $(this).attr('value'),
								headCount : x.headCount,
								Table1 : 'residence',
								Table2 : 'facility',
								WhereKeyword : WhereKeyword,
								data4 : data4,
								data5 : data5,
								multiData : multiData,
								listCount : $('#resi-loadMore-btn').attr('value')
						};
						$.ajax({
							url : context+'/resi/search/filter',
							method: 'POST',
							data: JSON.stringify(json),
							datatype: 'json',
							contentType : 'application/json',
							success: x=>{
								if(x.sortCount > $('#resi-loadMore-btn').attr('value')){
									$('#resi-loadMore-btn').show();											
								} else {
									$('#resi-loadMore-btn').hide();		
								}
								var list = x.success;
								var headCount = x.headCount;
								$('#resi-lists').empty();
								$('#resi-lists').append($(createAutoLI({list: list, headCount: headCount})))
							}, error: x=>{
									alert('에러');
							}
						});
					})
					
					$(createDiv({id: '', clazz: ''}))
					.attr('style', 'display: inline-block; float: right; padding: 10px')
					.append($(createSpan({id:'', clazz:'', val: '정렬기준'})))
					.appendTo('.resi-header-sort-section')			
				
				$(createDiv({id:'', clazz:'avilability-message'}))
				.attr('style', 'margin-top: 20px; background-color: #e9e9e9; border-left: 7px solid green;'
					+'box-shadow: 2px 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);')
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
				
				$(createDiv({id:'', clazz:'row'}))
				.attr('style', 'margin-top: 20px')
				.append($(createDiv({id:'', clazz:'col-sm-3 col-sm-offset-9'}))
					.attr('style', 'padding-right: 15px')
					.append($(createSelect({id:'resi-loadMore-count-select', clazz:'form-control'}))
						.append($(createOption({id:'', clazz:'', val:'3', txt: '3개 더보기'})))
						.append($(createOption({id:'', clazz:'', val:'4', txt: '4개 더보기'})))
						.append($(createOption({id:'', clazz:'', val:'5', txt: '5개 더보기'})))
					)					
				)
				.appendTo('#resi-main-col');
				
				$('#resi-loadMore-count-select').change(function(){
					$('#resi-loadMore-btn').attr('value', $(this).val());
					var DATA = "";
					var value;
					var multiData;
					var WhereKeyword, data4, data5;
					/* 체크박스 값 가져오기 */
					$('input[type=checkbox]:checked').each(function(){
						console.log('입력된 값: '+$(this).val());	
						if($(this).is(':checked')) {
							DATA += $(this).val()+"/";									
						}
					})
					var splitDATA = DATA.split("/");
					console.log(splitDATA.length);
					/* 체크박스 값 1 or N 으로 value값 구분 */
					if(splitDATA.length==1 || splitDATA.length==2){
						value = splitDATA[0];
						if(value==="breakfast"){
							data4 = 'breakfast';
							data5 = 'true';
							WhereKeyword = value;
						} else if(value==="starRating5" || value==="starRating4" || value==="starRating3" ||
								value==="starRating2" || value==="starRating1" || value==="starRating0"){
							var str = value;
							var str1 = str.substring(0, 10);
							var str2 = str.substring(10, 11);
							data4 = str1;
							data5 = str2;
							WhereKeyword = str1;
						} else {
							WhereKeyword = 'null';									
						}
					} else {
						console.log('else');
						WhereKeyword = 'multiOption';
						multiData = DATA;
					}	
					console.log(WhereKeyword);
					var json = {
							headCount : x.headCount,
							listCount : $(this).val(),
							Table1 : 'residence',
							Table2 : 'facility',
							Orderby : 'starRating DESC',
							WhereKeyword : WhereKeyword,
							data4 : data4,
							data5 : data5,
							multiData : multiData
					}
					$.ajax({
						url : context+'/resi/search/filter',
						method: 'POST',
						data: JSON.stringify(json),
						datatype: 'json',
						contentType : 'application/json',
						success: x=>{
							console.log(x.sortCount)
							if(x.sortCount > $('#resi-loadMore-btn').attr('value')){
								$('#resi-loadMore-btn').show();											
							} else {
								$('#resi-loadMore-btn').hide();		
							}
							var list = x.success;
							var headCount = x.headCount;
							$('#resi-lists').empty();
							$('#resi-lists').append($(createAutoLI({list: list, headCount: headCount})));
						}, error: x=>{
								alert('에러');
						}
					})					
				})

				$(createDiv({id:'resi-lists-div', clazz:''}))
				.append($(createUL({id:'resi-lists', clazz:''}))
					.attr('style', 'list-style-type: none; margin-top: 20px; padding-left: 0px')
					.append($(createAutoLI({list: x.list, headCount: x.headCount})))
				)
				.append($(createDiv({id:'resi-loadMore-div', clazz:'text-center'}))
					.append($(createBtn({id:'resi-loadMore-btn', clazz:'btn btn-primary', val:'Load More'}))
						.attr('value', '3')
						.attr('style', 'font-size: 20px; font-weight: bold; margin-top: 20px; margin-bottom: 50px')
						.on('click', e=>{							
							e.preventDefault();
							var DATA = "";
							var value;
							var multiData;
							var WhereKeyword, data4, data5;
							
							/* 버튼 값 저장*/
							value = $('#resi-loadMore-btn').attr('name');
							console.log('name: '+value);
							/* 체크박스 값 가져오기 */
							$('input[type=checkbox]:checked').each(function(){
								console.log('입력된 값: '+$(this).val());	
								if($(this).is(':checked')) {
									DATA += $(this).val()+"/";									
								} 
							})
							var splitDATA = DATA.split("/");
							if(splitDATA.length==1) {
								if(value === "price"){
									WhereKeyword = value;
									data4 = price1;
									data5 = price2;
								} else {
									WhereKeyword = 'null';									
								}
							} else if(splitDATA.length==2){
								value = splitDATA[0];
								if(value==="breakfast"){
									data4 = 'breakfast';
									data5 = 'true';
									WhereKeyword = value;
								} else if(value==="starRating5" || value==="starRating4" || value==="starRating3" ||
										value==="starRating2" || value==="starRating1" || value==="starRating0"){
									var str = value;
									var str1 = str.substring(0, 10);
									var str2 = str.substring(10, 11);
									data4 = str1;
									data5 = str2;
									WhereKeyword = str1;
								}
							} else {
								WhereKeyword = 'multiOption';
								multiData = DATA;									
							}								
							console.log(WhereKeyword);
							var json = {
								headCount : x.headCount,
								listCount : $('#resi-loadMore-btn').attr('value'),
								Wherekeyword : WhereKeyword,
								multiData : multiData,
								data4: data4,
								data5: data5
							};
							$.ajax({
								url : context+'/resi/loadMore',
								method : 'POST',
								data : JSON.stringify(json),
								dataType : 'json',
								contentType : 'application/json',
								success : x=> {
									console.log(x.totalCount)
									console.log($('#resi-loadMore-btn').attr('value'))
									if(x.totalCount > $('#resi-loadMore-btn').attr('value')){
										$('#resi-loadMore-btn').show();											
									} else {
										$('#resi-loadMore-btn').hide();		
									}
									var list = x.success;
									var endRow = x.endRow;
									var headCount = x.headCount;
									var totalCount = x.totalCount;
									$('#resi-lists').empty();
									$(createAutoLI({list: list, headCount: headCount})).appendTo('#resi-lists')						
									if(endRow == totalCount) {
										$('#resi-loadMore-btn').hide();
									};
									var listName = $('#resi-loadMore-btn').attr('value');
									console.log(listName);
									$("#resi-lists-li-"+listName).before(											
										$(createLI({id:'', clazz:'', val:''}))
										.attr('style', 'margin-top: 20px; border-left: 7px solid green;')
										.append($(createDiv({id:'', clazz:''}))
											.attr('style', 'min-height: 100px; padding: 10px; margin-top: 10px; background: rgba(255, 255, 0, 0.2)')
											.append('<h3>[최대 30% OFF] 회원 특가 상품을 만나 보세요!</h3>'
												+'<p>로그인하는 순간, 가격이 내려갑니다.</p>')
										)				
									);
								}, error : (x, h, m)=>{
									alert('컨트롤러 에러 발생 x='+x+', h='+h+', m='+m);
								}
							})
						})
					)
					.append($(createBtn({id:'resi-toTheTop-btn', clazz:'btn btn-default', val:''}))
						.attr('style', 'font-size: 20px; font-weight: bold; margin-top: 20px; margin-bottom: 50px;'
								+'border-radius: 50%; float: right')
						.append($(createITag({id:'', clazz:'fa fa-arrow-up', val:''})))
						.on('click', ()=>{
							$('html').stop().animate({scrollTop: 0}, 10)
						})
						.hover(function(){
							$(this).attr('style', 'font-size: 20px; font-weight: bold; margin-top: 20px; margin-bottom: 50px;'
								+'border-radius: 50%; float: right; background: #EE595D; color: #fff; border-color: #EE595D')
						},function(){
							$(this).attr('style', 'font-size: 20px; font-weight: bold; margin-top: 20px; margin-bottom: 50px;'
								+'border-radius: 50%; float: right')
						})
					)
				)
				.appendTo('#resi-main-col');											
				
				$(document).on('click', '#resi-move-reservation-btn', function (e){
					e.preventDefault();					
					$(document).scrollTop(0);
					console.log(sessionStorage.getItem('user'));
					if(sessionStorage.getItem('user') === null) {
						alert('로그인 하세요!');
						$('#a-login').trigger('click');
					} else {						
						var json = {
								checkIn: x.checkIn,
								checkOut: x.checkOut,
								headCount: x.headCount,
								resCode: $(this).parents("li").attr('name')
						}
						$.ajax({
							url: context+'/resi/reser/'+$(this).parents("li").attr('name'),
							method: 'POST',
							data: JSON.stringify(json),
							datatype: 'json',
							contentType: 'application/json',
							success: x=>{
								var json = {
										checkIn: x.checkIn,
										checkOut: x.checkOut,
										headCount: x.headCount,
										list: x.success
								}
								app.residenceReservation.onCreate(json)
							}, error: x=>{
								alert('에러')
							}
						});	
					}
				});	
				
				$(document).on('click', '.resi-lists-li-div', function (e){
					e.preventDefault();
					$.post(context+'/resi/viewNum/'+$(this).parents("li").attr('name'), ()=>{						
					})	
				});	
				
				$(window).scroll(function(){
					if($(this).scrollTop()>100){
						$('#resi-sticky-search-nav').attr('style', 'background: #333; height: 60px; opcacity: 1; '
							+'position: fixed; top:0; left:0; width:100%; z-index: 1000;'
							+'box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.19);');
					} else {						
						$('#resi-sticky-search-nav').attr('style', 'background: #e9e9e9; height: 60px;'
							+' box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.19);');
					}
					
					if($(this).scrollTop()>700){
						$('#resi-sidebar-col-div').attr('style', 'position: fixed; top: 15%; padding:10px;'
							+' box-shadow: 2px 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);');
						$('#resi-sidebar-loc-ptag')
						.attr('style', 'position: absolute; top: 40%; left: 50%; transform: translate(-50%, -30%); font-weight: bold;')
						$('.resi-filters-list').attr('style', 'display: none;')
						$('#resi-sidebar-btn').attr('style', 'padding: 10px; margin-top: 20px; cursor: pointer; display: block;')
					} else {
						$('#resi-sidebar-col-div').attr('style', 'padding:10px;'
							+' box-shadow: 2px 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);');
						$('#resi-sidebar-loc-ptag')
						.attr('style', 'position: absolute; top: 15%; left: 50%; transform: translate(-65%, -70%); font-weight: bold;')
						$('.resi-filters-list').attr('style', 'margin-top: 20px; display: block;')
						$('#resi-sidebar-btn').attr('style', 'display: none;')
					}
										
				})
				
				$('.openscenter').attr('style', 'left: 50%; transform: translate(-50%, 0%)');				
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
			var checkIn = moment().format("YYYY-MM-DD");
			var checkOut = moment().add(6, 'days').format("YYYY-MM-DD");
			$(document).scrollTop(0);
			$content.html($(createDiv({id : 'div-resi-main-search', clazz : 'container-fluid text-center'}))
				.attr('style', 'height: 450px; padding: 0px; position: relative;'));
			
			$(createImg({id:'resi-main-img1', clazz:'', src:'https://goo.gl/XRqXDA', alt:''}))
			.attr('style', 'width: 100%; max-height: 100%; position: relative;')
			.appendTo('#div-resi-main-search');
						
			$(createHTag({num:'2', val:'내 여행의 베이스캠프, [ 호텔 ] 예약'}))
			.attr('id', 'resi-main-hotel-htag')
			.attr('style', 'position: absolute; top: 10%; left: 50%; transform: translate(-50%, -15%); color: white; font-weight: bold; width: 100%')
			.appendTo('#div-resi-main-search');
			$(createPTag({id:'resi-main-hotel-ptag', clazz:'', val:'전 세계 1,950,000개 이상의 다양한 숙소 특가 할인'}))
			.attr('style', 'position: absolute; top: 25%; left: 50%; transform: translate(-50%, -30%); color: white; font-size: 18px; width: 100%')
			.appendTo('#div-resi-main-search');
			$(createDiv({id:'', clazz:'container text-center'}))
			.attr('style', 'position: absolute; top: 70%; left: 50%; transform: translate(-50%, -70%);')
			.append($(createUL({id:'', clazz:'nav nav-pills'}))
				.append($(createLI({id:'li-resi-main-1',clazz:'active'}))
					.attr('style', 'width: 200px')
					.append($(createATag({id:'', clazz:'', link:'#hotel', val:'Hotel'}))
						.attr('data-toggle', 'tab')
						.attr('style', 'border-radius: 0px; text-align: center; font-size: 20px; font-weight: bold')
						.on('click', ()=>{
							$('#resi-main-img1').attr('src', 'https://goo.gl/XRqXDA');
							$('#resi-main-hotel-htag').text('내 여행의 베이스캠프, [ 호텔 ] 예약');
							$('#resi-main-hotel-ptag').text('전 세계 1,950,000개 이상의 다양한 숙소 특가 할인');
						})
					)
				)
				.append($(createLI({id:'li-resi-main-2',clazz:''}))
					.attr('style', 'width: 200px')
					.append($(createATag({id:'', clazz:'', link:'#privateHouse', val:'Private House'}))
						.attr('data-toggle', 'tab')
						.attr('style', 'border-radius: 0px; text-align: center; font-size: 20px; font-weight: bold')
						.on('click', ()=>{
							console.log('entry!!')
							$('#resi-main-img1').attr('src', 'https://goo.gl/RXVz3g');
							$('#resi-main-hotel-htag').text('내 여행의 베이스캠프, [ 프라이빗 하우스 ] 예약');
							$('#resi-main-hotel-ptag').text('프라이빗 하우스나 아파트먼트에서 더 넓은 공간, 가치 및 현지 분위기를 즐겨보세요!');
						})
					)
				)
			)
			.append($(createDiv({id:'', clazz:'tab-content'}))
				.attr('style', 'border: 20px solid rgba(255,255,255,.5)')
				.append($(createDiv({id:'hotel', clazz:'tab-pane in active'}))
					.attr('style', 'background: white; height: 100px; padding: 20px; background-color: #fff; padding-left: 35px')
					.append($(createDiv({id:'', clazz:'row'}))
						.append($(createDiv({id:'', clazz:'col-sm-4'}))
							.attr('style', 'padding-left: 0px')
							.append($(createDiv({id:'', clazz:'input-group dropdown'}))
								.append($(createInput({id:'resi-input-filter', clazz:'form-control input-lg', type:'text', placeholder:''}))
									.attr('data-toggle', 'dropdown')
									.attr('placeholder', 'Search...')
									.attr('style', 'height: 60px; border-radius: 0px; border: 2px solid #333')
									.focus(function(){
										console.log($(this).val());
										if($(this).val() === '') {
											$('.resi-search-list-li')
											.attr('style', 'font-size: 20px; font-weight: bold; display: block');
										}								
									})
									.blur(function(){
										if($(this).val() === '') {
											$(this).val('');
										}
									})
								)
								.append($(createDiv({id:'resi-input-result', clazz:''})))
								.append($(createDiv({id:'', clazz:'input-group-btn'}))
									.append($(createBtn({id:'resi-filter-btn', clazz:'btn btn-default input-lg', val:''}))
										.attr('style', 'height: 60px; background-color: #333; border-radius: 0px; border: 2px solid #333')
										.attr('type', 'submit')
										.attr('data-toggle', 'dropdown')
										.append($(createSpan({id:'', clazz:'glyphicon glyphicon-search', val:''}))
											.attr('style', 'font-size: 20px; color: #fff')
										)
									)
								)
								.append($(createUL({id:'resi-search-list-ul', clazz:'dropdown-menu'}))
									.attr('style', 'padding: 0px; width: 100%; border; 0px')
									.append($(createLI({id:'', clazz:'resi-search-list-li'}))
										.append($(createATag({id:'', clazz:'', link:'#', val:'HongKong'}))
											.attr('style', 'font-size: 20px; font-weight: bold')
										)
									)
									.append($(createLI({id:'', clazz:''}))
											.append($(createATag({id:'', clazz:'resi-search-list-li', link:'#', val:'NewYork'}))
												.attr('style', 'font-size: 20px; font-weight: bold')
											)
									)
									.append($(createLI({id:'', clazz:'resi-search-list-li'}))
											.append($(createATag({id:'', clazz:'', link:'#', val:'Singapore'}))
												.attr('style', 'font-size: 20px; font-weight: bold')		
											)
									)
								)
							)							
						)
						.append($(createDiv({id:'', clazz:'col-sm-4'}))
							.attr('style', 'padding-left: 0px')
							.append($(createDiv({id:'', clazz:'input-group'}))
								.attr('data-data-format', '"mm-dd-yyyy"')
								.append($(createInput({id:'input-resi-date', clazz:'form-control input-lg', type:'text', placeholder:''}))
									.attr('style', 'height: 60px; border-radius: 0px; border: 2px solid #333')
									.attr('name', 'daterange')
									.daterangepicker({
										"locale": {
									        "format": "YYYY-MM-DD",
									        "separator": " - ",
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
									    minDate : new Date(),
									    endDate : moment().add(6, 'days'),
									    "opens": "center",
									    "timePicker": true,
									}, function(start, end, label){
										checkIn = start.format('YYYY-MM-DD');
										checkOut = end.format('YYYY-MM-DD');										
									})
								)
								.append($(createSpan({id:'', clazz:'input-group-addon input-lg', val:''}))
									.attr('style', 'height: 60px;cursor:pointer; background-color: #333; border-radius: 0px; border: 2px solid #333')
									.on('click', ()=>{
										$('#input-resi-date').trigger('click')
									})
									.append($(createSpan({id:'', clazz:'glyphicon glyphicon-calendar', val:''}))
										.attr('style', 'color: #fff')
									)
								)
							)
						)
						.append($(createDiv({id:'', clazz:'col-sm-2'}))
							.attr('style', 'padding-left: 0px')
							.append($(createDiv({id:'', clazz:'input-group'}))
								.attr('style', 'height: 60px; border-radius: 0px; border: 2px solid #333')	
								.append($(createSpan({id:'', clazz:'input-group-addon', val:''}))
									.attr('style', 'cursor: pointer; border-radius: 0px; background-color: #333; color: #fff')
									.append($(createSpan({id:'', clazz:'glyphicon glyphicon-minus', val:''})))
									.on('click', ()=>{
										if(parseInt($('#resi-count').text(), 10)!=1){
											$('#resi-count').text(parseInt($('#resi-count').text(), 10)-1);
											$('#resi-count').text($('#resi-count').text())												
										}
									})
								)
								.append($(createSpan({id:'', clazz:'input-group-addon', val:''}))
									.attr('style', 'background: #fff')
									.append($(createSpan({id:'', clazz:'', val:'성인: '})).attr('style', 'font-size: 15px; font-weight:bold; color: #333'))
									.append($(createSpan({id:'resi-count', clazz:'', val:'1'})).attr('style', 'font-size: 15px; font-weight:bold; color: #333'))										
								)
								.append($(createSpan({id:'', clazz:'input-group-addon', val:''}))
									.attr('style', 'cursor: pointer; border-radius: 0px; background-color: #333; color: #fff')
									.append($(createSpan({id:'', clazz:'glyphicon glyphicon-plus', val:''})))
									.on('click', ()=>{
										$('#resi-count').text(parseInt($('#resi-count').text(), 10)+1);
										$('#resi-count').text($('#resi-count').text());
									})
								)
							)				
						)
						.append($(createDiv({id:'', clazz:'col-sm-2'}))
							.attr('style', 'padding-left: 0px')
							.append($(createBtn({id:'btn-move-resi-spec', clazz:'form-control', val:'요금 검색하기'}))
								.attr('style', 'background-color: #333; color: #fff; height:60px; border-radius: 0px; font-size: 15px; font-weight: bold')
								.on('click', (e)=>{
									e.preventDefault();
									if($('#resi-input-filter').val() === '') {
										alert("검색어를 입력해 주세요.");
									} else {
										var json = {
												searchWord: $('#resi-input-filter').val(),
												headCount: $('#resi-count').text(),
												checkIn : checkIn,
												checkOut : checkOut,
												Table1 : 'residence',
												Table2 : 'facility',
												Orderby : 'starRating DESC',
												WhereKeyword : 'null',
												listCount : 3
										}
										$.ajax({
											url: context+'/resi/search/filter',
											method: 'POST',
											data : JSON.stringify(json),
											dataType : 'json',
											contentType : 'application/json',
											success : x=> {
												var json = {
														checkIn : checkIn,
														checkOut : checkOut,
														count : x.count,
														list : x.success,
														headCount : x.headCount,
														searchWord : x.searchWord,
														starRatingList: x.starRatingList
												}
												app.residenceSpec.onCreate(json);
											}, error : (x, h, m)=>{
												alert('컨트롤러 에러 발생 x='+x+', h='+h+', m='+m);
											}
										})																			
									}									
								})
							)
						)
					)
				)
			)
			.appendTo('#div-resi-main-search');	
			
			/* Auto Complete 구현*/
			$('#resi-input-filter').autocomplete({
				source: function(request, response) {
					$.ajax({
						url: context+'/resi/searchKeyword',
						method: 'GET',
						data: {keyword: request.term},
						dataType: 'json',
						success: x=>{
							var data = x.success;
							response(
								$.map(data, function(item){
									console.log(item.name);
									return{
										value: item.name
									}
								})
							)
						}, error: x=>{
							alert('에러');
						}
					})
				},
				minLength: 1,
				select: function(event, ui) {						
					$('#resi-input-filter').val($(this).val());
					$('#input-resi-date').trigger('click');	
		        },
				appendTo: $('#resi-search-list-ul')
			})
			
			/*드랍다운 선택시 값 넣기*/
			$('.resi-search-list-li, #resi-filter-btn').on('click', function(e){
				e.preventDefault();
				$('#resi-input-filter').val($(this).text());
				$('#input-resi-date').trigger('click');	
			})
			
			/* 검색시 드랍다운 제거 구현*/
			$('#resi-input-filter').keydown(function(){
				$('.resi-search-list-li').attr('style', 'display: none;');
			})
			
			/* daterangepicker 위치 구현*/
			$('.openscenter').attr('style', 'top: 53%; left: 50%; transform: translate(-50%, 0%)');

			/*서치 드랍다운 메뉴 Hover 적용*/
			$('#resi-search-list-ul li a').hover(function(){
				$(this).attr('style', 'font-size: 20px; font-weight: bold; background: #0283DF; color: #fff;')
			}, function(){
				$(this).attr('style', 'font-size: 20px; font-weight: bold;')
			})
									
			
			$(createDiv({id:'', clazz:'container-fluid'}))
			.append($(createDiv({id:'', clazz:'container'})).attr('style', 'margin-top: 50px; margin-bottom: 50px')
				.append($(createDiv({id:'', clazz:'row'}))
					.append($(createDiv({id:'', clazz:'flipCard'}))
						.append($(createDiv({id:'', clazz:'col-sm-3'}))	
							.append($(createDiv({id:'', clazz:'card'}))
								.append($(createDiv({id:'', clazz:'face front'}))
									.append($(createDiv({id:'', clazz:'div-resi-card-photo'}))
										.attr('style', 'border: 1px solid gray; padding: 5px; min-height: 350px;')
										.append($(createImg({id:'', clazz:'resi-card-img', src:'https://goo.gl/uP8GfV', alt:''}))
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
								.append($(createDiv({id:'', clazz:'face back'}))
									.append($(createDiv({id:'', clazz:'div-resi-card-photo'}))
										.attr('style', 'border: 1px solid gray; padding: 5px; min-height: 350px;')
										.append($(createInput({id:'resi-input-CouponNum', clazz:'form-control', link:'#', val:'ADKGDUI294'})))
										.append($(createBtn({id:'resi-btn-copy', clazz:'form-control', val:'복사하기'})))
										.append($(createPTag({id:'', clazz:'', val:'예약 시 할인 코드를 입력할 수 있는 숙소 예약(예약일 기준: 2018년 4월 3일~2018년 5월 31일)에 한해 유효함.'}))
											.attr('style', 'margin-top: 20px; font-size: 12px')
										)
										.append($(createHr()))
										.append($(createBtn({id:'resi-find', clazz:'btn btn-primary form-control', val:'숙소 검색하기'})))
									)	
								)
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
									.attr('style', 'margin-bottom: -250px; width: 100%')
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
							)
						)
						.append($(createDiv({id:'', clazz:'col-sm-4'}))
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
							)							
						)
						.append($(createDiv({id:'', clazz:'col-sm-3'}))
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
					$('#a-resi-youtube').attr('style', 'transform: scale(1.5); width:100px; height: 100px; border-radius: 50%; position: absolute; color: red; top: 50%; left: 70%; transform: translate(-10%, -50%); border: 5px solid red;')
				}, ()=>{
					$('#a-resi-youtube').attr('style', 'width:100px; height: 100px; border-radius: 50%; position: absolute; color: white; top: 50%; left: 70%; transform: translate(-10%, -50%); border: 5px solid white;')
				})
			)
			.append($(createDiv({id:'', clazz:''}))
				.attr('style', 'position: absolute; top: 50%; left: 30%; transform: translate(-50%, -50%); text-align: left; width: 35%')
				.append($(createPTag({id:'', clazz:'', val:'아고다에서'}))
					.attr('style', 'color: white; font-size: 30px; font-weight: bold')
				)
				.append($(createPTag({id:'', clazz:'', val:'객실밖의 세계를 만나다'}))
					.attr('style', 'color: white; font-size: 30px; font-weight: bold')
				)
				.append($(createPTag({id:'', clazz:'', val:'그냥 객실이 아닙니다. 나만의 독특한 여행을 위한 \'베이스캠프\'입니다. 아고다의 쉽고 간편한 검색과 유용한 필터 기능을 통해 어떠한 여행에서도 적합한 숙소를 찾을 수 있습니다. 나만의 베이스캠프를 선택해 탐험을 시작하세요!'}))
					.attr('style', 'color: white')
				)		
			)
			.append($(createATag({id:'a-resi-youtube', clazz:'', link:'#', val:''}))
				.attr('style', 'width:100px; height: 100px; border-radius: 50%; position: absolute; color: white; top: 50%; left: 70%; transform: translate(-10%, -50%); border: 5px solid white;')
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
					$('#a-resi-youtube').attr('style', 'cursor: pointer; width:100px; height: 100px; border-radius: 50%; position: absolute; color: red; top: 50%; left: 70%; transform: translate(-10%, -50%); border: 5px solid red;')
				}, ()=>{
					$('#a-resi-youtube').attr('style', 'cursor: pointer; width:100px; height: 100px; border-radius: 50%; position: absolute; color: white; top: 50%; left: 70%; transform: translate(-10%, -50%); border: 5px solid white;')
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
				
				$('.flipCard').click(function(){
					console.log('click');
			    	$(this).find('.card').toggleClass('flipped');
				});
				$('#resi-input-CouponNum, #resi-find, #resi-btn-copy').on('click', function(){
					$(this).parent('div').parent('div').parent('div').toggleClass('flipped');
				})
				
				$('#resi-content div img').hover(function(){
					$(this).attr('style', 'max-width:100%; min-height:100%; display: block; cursor:pointer; filter:brightness(40%)');
				}, function(){
					$(this).attr('style', 'max-width:100%; min-height:100%; display: block; cursor:pointer; filter:brightness(70%)');
				})
				
				
				$('#resi-content div div p').hover(function(){
					$(this).parent('div').siblings('img')
					.attr('style', 'max-width:100%; min-height:100%; cursor:pointer; filter:brightness(40%)');
				}, function(){
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