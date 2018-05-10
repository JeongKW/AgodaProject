app.login = (()=>{
	var context, view;
	var onCreate =()=>{
	    $content = $('#content');
	    context = $.context();
	    view = $.javascript()+'/yjview.js';
	    setContentView();
	};
	/*로그인 */
	var setContentView=()=>{
        $.getScript(view, ()=>{
        	$(createDiv({id:'mem-login-div',clazz:''})).appendTo($content);
        	$('#mem-login-div').html($(createDiv({id:'login-modal',clazz:'modal fade'}))
        			.attr('role','dialog')
                    .append($(createDiv({id:'',clazz:'modal-dialog modal-lg'}))
                    .append($(createDiv({id:'',clazz:'modal-content'}))
                    .append($(createDiv({id:'login-modal-header',clazz:'modal-header'}))
                    .append($(createBtn({id:'',clazz:'close',val:'&times;'}))
                    		.attr('aria-label','Close')
                    		.attr('data-dismiss','modal'))))));
                $(createDiv({id:'login-col-sm-6',clazz:'col-sm-6'}))
                    .attr('style', 'margin-top: 8%')
                    .appendTo('#login-modal-header')
                    .append($(createDiv({id:'',clazz:''}))
                    .append($(createHTag({num: '3',val:'클릭 한 번으로 간편 로그인하기'}))
                    		.attr('align', 'center')))
                    .append($(createHTag({num: '5', val:'아고다 비밀번호를 기억하기 힘들다면 <br>지금 페이스북 계정으로 간편하게 로그인하세요!'}))
                    		.attr('align', 'center')
                    .append($(createDiv({id:'',clazz:'modal-body'}))
                    .append($(createDiv({id:'',clazz:''}))
                    		.attr('style', '15px 20px 10px 15px')
                    .append($(createBtn({id:'',clazz:'btn btn-primary btn-block',val:'페이스북으로 계속하기'}))
                    .prepend($(createImg({src:'https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/aMltqKRlCHD.png'})))))));
                $(createForm({id:'login-form',clazz:'css-login-form',action:'',method:'post'}))
                    .attr('style', 'margin: 15px 20px 20px 30px')
                    .appendTo('#login-col-sm-6')
                    .append($(createDiv({id:'',clazz:''})).attr('style', 'margin-bottom: 20px')
                    .append($(createLabel({val:'아이디'})))
                    .append($(createInput({type:'text',id:'id',clazz:'form-control',placeholder:''}))))
                    .append($(createDiv({id:'mem-password-div',clazz:''}))
                    .append($(createLabel({val:'비밀번호'})))
                    .append($(createInput({type:'password',id:'pw',clazz:'form-control',placeholder:''}))));
                $(createATag({id:'mem-find-password', val:'비밀번호를 잊으셨나요?'}))
                	.appendTo('#mem-password-div')
                		.on('click', e =>{
                			$('.close').trigger('click')
                			app.pass.onCreate();
                		});
                $(createDiv({id:'login-div-btn',clazz:''}))
                    .attr('style', 'margin: 15px 20px 20px 30px')
                    .appendTo('#login-col-sm-6');
                $(createBtn({id:'btn-login', clazz: 'btn btn-default btn-block', val: '로그인'}))
                    .on('click', e=>{
                        e.preventDefault();
                        var id = $('#id').val();
                        var json = {
                            id : id,
                            pw : $('#pw').val()
                        }
                        $.ajax({
                            url : context+'/member/'+id+'/login',
                            method : 'POST',
                            data : JSON.stringify(json),
                            dataType : 'json',
                            contentType : 'application/json',
                            success : x=>{
                                    if(x.user !== null){
                                    	if(x.user.id === "admin"){
                                    		app.admin.onCreate(x);
                                    	} else {
                                    			sessionStorage.setItem('user', x.user.id);
                                    			sessionStorage.setItem('name', x.user.name);
                                    			sessionStorage.setItem('pw', x.user.pw);
                                    			sessionStorage.setItem('phone', x.user.phone);
                                    			sessionStorage.setItem('email', x.user.email);
                                    			console.log(sessionStorage.getItem('name'));
                                    			$('.close').trigger('click');
                                    			$('.navbar-right').empty();
                                    			$('.navbar-right').append($(createLI({id: '', clazz: ''}))
                                    				.append($(createATag({id:'', clazz:'',val: '마이페이지'}))
                                    						.on('click',e=>{
                                    						e.preventDefault();
                                    						mypage();
                                    						})
                                    				)).append($(createLI({id:'',clazz:''}))
                                    				  .append($(createATag({id:'',clazz:'',val:'로그아웃'}))
                                    						  .on('click',e=>{
                                    								sessionStorage.removeItem('user');
                                    								sessionStorage.removeItem('name');
                                    								sessionStorage.removeItem('pw');
                                    								sessionStorage.removeItem('phone');
                                    								sessionStorage.removeItem('email');
                                    							  app.residence.onCreate();
                                    							  app.nav.onCreate();
                                    						  })));
                                    	}
                                    } else {
                                    	alert('로그인실패');
                                    }
                            },
                            error : ()=>{
                                alert('아이디 또는 비밀번호를 확인 해 주세요.');
                            }
                        });
                    })
                    .attr('style','background-color: #58ACFA; color: #FFFFFF ;font-size: 16px')
                    .appendTo($('#login-div-btn'));
                $(createDiv({id:'',clazz:'modal-footer'}))
                    .appendTo('#login-col-sm-6')
                    .append($(createDiv({id:'',clazz:''}))
                    		.attr('style', 'margin: 15px 10px 5px 15px')
                    .append($(createDiv({id:'',clazz:''}))
                    		.attr('style', 'margin: 15px 10px 10px 15px')
                    .append($(createHTag({num: '5', val:'아직 아고다 회원이 아니신가요?'}))
                    		.attr('align', 'center')))
                    .append(createBtn({id:'',clazz:'btn btn-default btn-block',val:'회원가입'}))
                    		.on('click',e=>{
                    			$('.close').trigger('click')
                    			app.join.onCreate();
                    		}));
                $(createDiv({id:'',clazz:'col-sm-5'}))
                    .appendTo('#login-modal-header')
                    .append($(createDiv({id:'',clazz:''}))
                    		.attr('style','background:#e6f7ff;')
                    .attr('style', 'width: 127%; height: 537px')
                    .append($(createImg({id: '', clazz: 'center-block', src:'https://cdn6.agoda.net/images/desktop/login/illustration-deals-social.svg'}))
                    		.attr('style', 'margin-top: 40%'))
                    .append($(createDiv({id:'',clazz:''}))
                    .append($(createHTag({num: '4', val:'[최대 30% OFF] 회원 특가 상품! <br>  회원 가입하는 순간 가격이 내려갑니다.'}))
                    		.attr('align', 'center'))))
           $(function(){
        	   $('#login-modal').modal();
           		});
        	});
        };
        var mypage=x=>{
			$content.html($(createDiv({id:'mem-mypage-div', clazz : ''})));
			$('#mem-mypage-div')
			.append(createDiv({id:'mem-mypage-left', clazz :'col-sm-2'}))
			.append(createDiv({id:'mem-mypage-main', clazz :'col-sm-9'}));
			
			$('#mem-mypage-left').append($(createDiv({id:'',clazz:''})))
			.attr('style','min-height: 500px; padding: 0px;margin-top: 5%;')
			.append($(createUL({id:'mem-mypage-ul',clazz:''}))
				.append($(createLI({id:'',clazz:''}))
				.attr('style','list-style-type : none')
					.append($(createATag({id:'ididididid',clazz:'',val:''}))
					.attr('href','#')
					.attr('active','background-color: #ebebeb;')		
					.attr('style','text-decoration: none;')
					.append($(createGlyphicon({clazz:'glyphicon glyphicon-user',val:''}))
					.attr('style','color:#5f5b5b;font-size: 17px;'))
					.append($(createSpan({clazz:'',val:'회원 정보'}))
						.attr('id','mem-mypage-info')
						.attr('style','color:#5f5b5b;font-size: 17px;')))));
			
			$('#mem-mypage-left').append($(createDiv({id:'',clazz:''})))
			.attr('style','min-height: 500px; padding: 0px;margin-top: 5%;')
			.append($(createUL({id:'',clazz:''}))
				.append($(createLI({id:'',clazz:''}))
				.attr('style','list-style-type : none')
				.append($(createATag({id:'mem-bo-atag',clazz:'',val:''}))	
				.attr('active','background-color: #ebebeb;')		
				.attr('style','text-decoration: none;')
				.attr('href','#')
				.append($(createGlyphicon({clazz:'glyphicon glyphicon-credit-card',val:''}))
				.attr('style','color:#5f5b5b;font-size: 17px;'))
				.append($(createSpan({clazz:'',val:'게시판'}))
				.attr('style','color:#5f5b5b;font-size: 17px;')))))
				;

			$('#mem-mypage-left').append($(createDiv({id:'',clazz:''})))
			.attr('style','min-height: 500px; padding: 0px;margin-top: 5%;')
			.append($(createUL({id:'mem-resi-ul',clazz:''}))
				.append($(createLI({id:'',clazz:''}))
				.attr('style','list-style-type : none')
				.append($(createATag({id:'mem-reser-atag',clazz:'',val:''}))
				.attr('href','#')
				.attr('style','text-decoration: none;')		
				.attr('active','background-color: #ebebeb;')		
				.append($(createGlyphicon({clazz:'glyphicon glyphicon-list-alt',val:''}))
				.attr('style','color:#5f5b5b;font-size: 17px;'))
				.append($(createSpan({clazz:'',val:'예약 관리'}))
				.attr('style','color:#5f5b5b;font-size: 17px;')))))
				;
			
			$('#ididididid').on('click',e=>{
			    e.preventDefault();
				$('#mem-mypage-main').html($(createDiv({id:'',clazz:''})))
				.attr('style','margin-bottom: 5%;background-color: #f5f5f542;min-height: 500px;margin-top: 1%;')
				.append($(createHTag({num:'2',val:'회원 정보'})))
				.append($(createDiv({id:'',clazz:'shadow-lg p-4 mb-4 bg-white'}))
				.attr('style','margin-top: 3%;height: 103px;padding: 24px 20px;background-image:linear-gradient(90deg,#f5f5f5,#eee);margin-right:30%;')
					.append($(createDiv({id:'',clazz:''}))
							.append($(createGlyphicon({clazz:'glyphicon glyphicon-user',val:''}))
							.attr('style','font-size: 50px;')))
					.append($(createDiv({id:'',clazz:''}))
							.append($(createHTag({num:'4',val:'이름'}))
							.attr('style','margin-left: 10%;margin-top: -45px;padding: 0;line-height: 2.04;'))
							.append($(createHTag({num:'3',val:sessionStorage.getItem('name')}))
							.attr('style','margin-top: -6.5%;margin-left: 17%;padding: 0;font-weight: 700;line-height: 2.04;'))));
				$(createDiv({id:'mem-mypage-div-email',clazz:''}))
				.appendTo('#mem-mypage-main')
				.append(createDiv({id:'',clazz:''}))
				.attr('style','margin-top: 3%;height: 200px;padding: 24px 20px;background-image:linear-gradient(90deg,#f5f5f5,#eee);margin-right:30%;')
					.append($(createDiv({id:'',clazz:''}))
							.append($(createHTag({num:'4',val:'이메일'})))
							.append($(createHTag({num:'3',val:sessionStorage.getItem('email')}))
									.attr('style','font-weight: 700;')))
					.append($(createDiv({id:'',clazz:''}))
							.append($(createBtn({id:'',clazz:'btn btn-outline-info',val:'변경하기'}))
									.attr('style','margin-top: 2%;')
									.on('click',e=>{
										$('#mem-mypage-div-email').empty();
										$(createDiv({id:'',clazz:''}))
										.appendTo('#mem-mypage-div-email')
										.append($(createHTag({num:'3',val:'변경 이메일 인증'})))
										.append($(createHTag({num:'6',val:'@ 포함하여 작성해 주세요.'})))
										.append($(createInput({type:'email',id:'',clazz:'form-control',placeholder:''}))
												.attr('style','width: 50%;'))
										.append($(createBtn({id:'',clazz:'btn btn-outline-info',val:'인증 메일 발송'}))
												.attr('style','margin-right:2%;margin-top: 2%;'))
												.on('click',e=>{
													
												})
										.append($(createBtn({id:'',clazz:'btn btn-outline-info',val:'취소'}))
												.attr('style','margin-top: 2%;'))
												.on('click',e=>{
													$('#ididididid').trigger('click');
												})
											})));
				$(createDiv({id:'mem-mypage-div-email',clazz:''}))
				.appendTo('#mem-mypage-main')
				.append(createDiv({id:'',clazz:''}))
				.attr('style','margin-top: 3%;height: 240px;padding: 24px 20px;background-image:linear-gradient(90deg,#f5f5f5,#eee);margin-right:30%;')
						.append($(createHTag({num:'4',val:'국가번호'})))
						.append($(createSelect({id:'',clazz:'form-control'}))
								.attr('style','width: 50%;')
						.append($(createOption({
				    	    list:['대한민국(+82)','가봉 (+241)','가이아나 (+592)','네덜란드(+31)','대만(+886)','덴마크(+45)','독일(+49)','룩셈부르크(+352)','마카오(+853)','멕시코(+52)','모잠비크(+258)','몰디브(+960)','몽골(+976)','버진아일랜드 (미국령) (+1340)','부탄 (+975)','북한 (+850)','브라질(+55)','스웨덴(+46)','포르투갈(+351)']
					    }))))
					    .append($(createHTag({num:'4',val:'전화번호'}))
					    		.attr('style','margin-top: 3%;'))
					    .append($(createDiv({id:'',clazz:''}))
					    .append($(createInput({type:'text',id:'',clazz:'form-control',placeholder: sessionStorage.getItem('phone')}))
					    		.attr('style','width: 50%;'))
					    		);
				$(createDiv({id:'mem-mypage-div-pass',clazz:''}))
				.appendTo('#mem-mypage-main')
				.append(createDiv({id:'',clazz:''}))
				.attr('style','margin-top: 3%;height: 400px;padding: 24px 20px;background-image:linear-gradient(90deg,#f5f5f5,#eee);margin-right:30%;')
					.append($(createHTag({num:'3',val:'비밀번호 변경'})))
								$(createForm({id:'mem-mypage-form',clazz:'css-login-form',action:'',method:'post'}))
								.appendTo('#mem-mypage-div-pass');
								$(createDiv({id:'',clazz:''})).appendTo('#mem-mypage-form')
								.append($(createHTag({num:'4',val:'현재 비밀번호'}))
										.attr('style','margin-top: 4%;'))
								.append($(createInput({type:'password',id:'mem-mypage-now-pass',clazz:'form-control',placeholder:''}))
										.attr('style','width: 50%;'));
								$(createDiv({id:'',clazz:''})).appendTo('#mem-mypage-form')
								.append($(createHTag({num:'4',val:'새 비밀번호'}))
										.attr('style','margin-top: 3%;width: 50%;'))
								.append($(createInput({type:'password',id:'mem-mypage-new-pass',clazz:'form-control',placeholder:''}))
										.attr('style','width: 50%;'));
								$(createDiv({id:'',clazz:''})).appendTo('#mem-mypage-form')
								.append($(createHTag({num:'4',val:'새 비밀번호 확인'}))
										.attr('style','margin-top: 3%;width: 50%;'))
								.append($(createInput({type:'password',id:'mem-mypage-new-pass-check',clazz:'form-control',placeholder:''}))
										.attr('style','width: 50%;'));
								$(createDiv({id:'',clazz:''})).appendTo('#mem-mypage-form')
								.append($(createBtn({id:'mem-mypage-pass-con',clazz:'btn btn-outline-info',val:'확인'}))
										.attr('style','margin-top: 2%;')
										.on('click',e=>{
											console.log(sessionStorage.getItem('pw'));
											 if($('#mem-mypage-now-pass').val() == sessionStorage.getItem('pw')){
												 if($('#mem-mypage-new-pass').val() == $('#mem-mypage-new-pass-check').val()){
													 var jason = {
										                 id : sessionStorage.getItem('user'),
										                 pw : $('#mem-mypage-new-pass').val()
										                        };
														 $.ajax({
															 	url : context+'/member/mypage',
									                            method : 'POST',
									                            data : JSON.stringify(jason),
									                            dataType : 'json',
									                            contentType : 'application/json',
									                            success : x =>{
									                            	alert('비밀번호 변경에 성공하셨습니다.');
									                            	$('#mem-mypage-now-pass').val('');
									                            	$('#mem-mypage-new-pass').val('');
									                            	$('#mem-mypage-new-pass-check').val('');
									                            },
									                            error:function(request,status,error){
									                                alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
									                            }
														 });
												 }else{
													 alert('비밀번호가 틀립니다.');
												 }
											 }else{
												 alert('비밀번호를 확인해 주세요.');
											 }
										}))
										$(createDiv({id:'',clazz:''}))
										.appendTo('#mem-mypage-main')
										.append(createDiv({id:'',clazz:''}))
										.attr('style','margin-bottom: 10%;margin-top: 3%;height: 190px;padding: 24px 20px;background-image:linear-gradient(90deg,#f5f5f5,#eee);margin-right:30%;')
										.append($(createHTag({num:'3',val:'아고다 탈퇴하기'})))
										.append($(createHTag({num:'5',val:'정말로 아고다 회원을  탈퇴하시겠습니까?'})))
										.append($(createBtn({id:'',clazz:'btn btn-outline-info',val:'탈퇴하기'}))
												.attr('style','margin-top: 2%;')
												.on('click',e=>{
													alert('탈퇴하시겠습니까?');
													$.ajax({
														url: context+'/member/withdrawal/'+sessionStorage.getItem('id'),
														method: 'GET',
													    contentType : 'application/json',
													    success : x=>{
													    	alert('회원에 탈퇴하셨습니다.');
													    	  app.residence.onCreate();
                                							  app.nav.onCreate();
													    }
													})
												}));
			});
			$('#mem-bo-atag').on('click',e=>{
				app.board.onCreate();
			});
			$('#mem-reser-atag')				.on('click',e=>{

	        	$('#mem-mypage-main').empty();
				$.getJSON(context+'/mypage/reservation/'+sessionStorage.getItem('user'), d=>{
					console.log(d.fCheck);
						if(d.rCheck==0){
							$('#mem-mypage-main').html($(createDiv({id:'mem-reservation-div',clazz:''}))
									.attr('style','margin-top: 6%;'));
							$(createDiv({id:'mem-res-residence',clazz:''}))
							.appendTo('#mem-reservation-div')
							.append($(createText({clazz:'',val:'숙소 예약 내역'}))
									.attr('style','font-size: 25px;font-weight: bold;'));
							$(createDiv({id:'',clazz:''}))
							.appendTo('#mem-res-residence')
							.append(createDiv({id:'',clazz:''}))
									.attr('style','width: 65em;height: 25em;padding: 10px; margin-top: 15px;box-shadow: 2px 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);')
							.append($(createDiv({id:'',clazz:''}))
							.append($(createImg({src:'https://cdn6.agoda.net/images/MMB-855/default/illustration-property.png',clazz:''}))
									.attr('style','margin-right: 50%;margin-left: 35%;margin-top: 2%;'))
							.append($(createText({clazz:'',val:'예약 내역이 없습니다.'}))
									.attr('style','font-size: 2em; margin-left: 35%;margin-right: 34%;'))
							.append($(createBtn({id:'',clazz:'btn btn-primary',val:'숙소 검색 하러가기'}))
									.attr('style','margin-top: 2%;margin-left: 42%;')
									.on('click',e=>{
										app.residence.onCreate();
									})
							));
						}else{
							console.log(d.rSuccess);
							console.log(d.rCheck);
							$('#mem-mypage-main').html($(createDiv({id:'mem-reservation-div',clazz:''}))
									.attr('style','margin-top: 6%;'));
							$(createDiv({id:'mem-res-residence',clazz:''}))
							.appendTo('#mem-reservation-div')
							.append($(createText({clazz:'',val:'숙소 예약 내역'}))
									.attr('style','font-size: 20px;font-weight: bold;'));
							for(var i =0 ;i<d.rCheck;i++){
							$(createDiv({id:'',clazz:''}))
							.appendTo('#mem-res-residence')
							.append(createDiv({id:'',clazz:''}))
									.attr('style','width: 65em;height: 17em;padding: 10px; margin-top: 15px;box-shadow: 2px 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);')
							.append($(createDiv({id:'',clazz:'row'}))
								.append($(createDiv({id:'', clazz:'col-sm-4'}))
									.append($(createImg({src: 'https://goo.gl/uP8GfV', clazz:''}))
										.attr('style', 'max-width: 100%;height: 15em;')
									)
								)
								.append($(createDiv({id:'', clazz:'col-sm-3 text-center'}))
										.attr('style','margin-top: 3%;')
										.append($(createSpan({val: '체크인'}))
												.attr('style','font-size: 20px;'))
										.append('<br/>')
										.append('<span style="font-size: 50px; font-weight: bold;">'+dateChange(d.rSuccess[i].checkIn.substring(8, 10))+'</span>&nbsp;&nbsp;')
										.append('<span style="font-size: 18px;"><p>'+getDay(d.rSuccess[i].checkIn)+'</p>'
												+dateChange(d.rSuccess[i].checkIn.substring(5, 7))+'월 '+d.rSuccess[i].checkIn.substring(0, 4)+'</span>&nbsp;')
								)
								.append($(createDiv({id:'', clazz:'col-sm-1 text-center'}))
								.append('<span class="fa fa-arrow-right" style="font-size: 34px; margin-top: 80px;"></span>'))
								.append($(createDiv({id:'', clazz:'col-sm-3 text-center'}))
										.attr('style','margin-top: 3%;')
										.append($(createSpan({val: '체크아웃'}))
												.attr('style','font-size: 20px;'))
										.append('<br/>')
										.append('<span style="font-size: 50px; font-weight: bold;">'+dateChange(d.rSuccess[i].checkOut.substring(8, 10))+'</span>&nbsp;&nbsp;')
										.append('<span style="font-size: 18px;"><p>'+getDay(d.rSuccess[i].checkIn)+'</p>'
												+dateChange(d.rSuccess[i].checkIn.substring(5, 7))+'월 '+d.rSuccess[i].checkIn.substring(0, 4)+'</span>&nbsp;')
									)
									
								);
							}
						}
						
						function dateChange(x){
							var result;
							if(x < 10) {
								result = x.substring(1,2);
							} else {
								result = x;
							}
							return result;
						}
						function getDay(x){
							var week = new Array('일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일');
							var day = new Date(x).getDay();
							var dayLabel = week[day];
							return dayLabel;
						}
						if(d.fSuccess==0){
							$(createDiv({id:'mem-res-flight',clazz:''}))
							.attr('style','margin-top: 5%;')
							.appendTo('#mem-reservation-div')
							.append($(createText({clazz:'',val:'항공 예약 내역'}))
									.attr('style','font-size: 25px;font-weight: bold;'));
							$(createDiv({id:'',clazz:''}))
							.appendTo('#mem-res-flight')
							.append(createDiv({id:'',clazz:''}))
							.attr('style','margin-bottom: 10%;width: 65em;height: 25em;padding: 10px; margin-top: 15px;box-shadow: 2px 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);')
							.append($(createDiv({id:'',clazz:''}))
							.append($(createImg({src:'https://cdn6.agoda.net/images/MMB-855/default/illustration-property.png',clazz:''}))
									.attr('style','margin-right: 50%;margin-left: 35%;margin-top: 2%;'))
							.append($(createText({clazz:'',val:'예약 내역이 없습니다.'}))
									.attr('style','font-size: 2em; margin-left: 35%;margin-right: 34%;'))
							.append($(createBtn({id:'',clazz:'btn btn-primary',val:'항공 검색 하러가기'}))
									.attr('style','margin-top: 2%;margin-left: 42%;')
									.on('click',e=>{
										app.flight.onCreate();
									})
							));	
						}else{
							console.log(d.fSuccess);
							console.log(d.fCheck);
							$(createDiv({id:'mem-res-flight',clazz:''}))
							.attr('style','margin-top: 8%;')
							.appendTo('#mem-reservation-div')
							.append($(createText({clazz:'',val:'항공 예약 내역'}))
									.attr('style','font-size: 20px;font-weight: bold;'));
							for(var i =0 ;i<d.fCheck;i++){
							$(createDiv({id:'',clazz:''}))
							.appendTo('#mem-res-flight')
							.append(createDiv({id:'',clazz:''}))
							.attr('style','width: 65em;height: 17em;padding: 10px; margin-top: 15px;box-shadow: 2px 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);')
							.append($(createDiv({id:'',clazz:'row'}))
								.append($(createDiv({id:'',clazz:'col-sm-4'}))
									.append($(createImg({src:'https://a1.r9cdn.net/dimg/phoenix-images/v3/agoda-flights-fd.jpg',clazz:''}))
										.attr('style','max-width:100%;height: 15em;')
										)
								)
								.append($(createDiv({id:'',clazz:'col-sm-3 text-center'}))
										.attr('style','margin-top:4%')
										.append($(createSpan({val:'출발지'}))
												.attr('style','font-size: 20px;'))
										.append('<br/>')
										.append($(createSpan({val:d.fSuccess[i].fromLocation}))
												.attr('style','font-size: 3em;'))
										.append('<br/>')
										.append($(createSpan({val:'출발 시간'}))
											.attr('style','font-size: 20px;'))
										.append('<br/>')
										.append($(createSpan({val:d.fSuccess[i].departureTime}))
												.attr('style','font-size: 19px;')))
								.append($(createDiv({id:'', clazz:'col-sm-1 text-center'}))
								.append('<span class="fa fa-arrow-right" style="font-size: 34px; margin-top: 80px;"></span>'))
								.append($(createDiv({id:'',clazz:'col-sm-3 text-center'}))
										.attr('style','margin-top:4%')
										.append($(createSpan({val:'도착지'}))
												.attr('style','font-size: 20px;'))
										.append('<br/>')
										.append($(createSpan({val:d.fSuccess[i].toLocation}))
												.attr('style','font-size: 3em;'))
										.append('<br/>')
										.append($(createSpan({val:'도착 시간'}))
										.attr('style','font-size: 20px;'))
										.append('<br/>')
										.append($(createSpan({val:d.fSuccess[i].arrivalTime}))
												.attr('style','font-size: 19px;')))	
				
									);
						}
					}
			});
		});
			$('#ididididid').trigger('click');
        };

        return {onCreate : onCreate,mypage:mypage};
})();

app.board =(()=>{
	var context, view;
	var onCreate =()=>{
	    $content = $('#content');
	    context = $.context();
	    view = $.javascript()+'/yjview.js';
	    setContentView();
	};
	var setContentView=()=>{
		list(1);
	};
	var list = x =>{
		$.getJSON(context+'/board/'+x, d=>{
			$.getScript(view,()=>{
				$('#mem-mypage-main').html($(createDiv({id:'bbs-list-div1',clazz:''})));
		    	$('#bbs-list-div1').html($(createDiv({id:'bbs-list-div2',clazz:''}))
		    		 .attr('style','margin-left: 5%;margin-right: 5%;'));

		    	$(createDiv({id:'',clazz:''}))
		    		.attr('style','margin-left:15px;')
				.appendTo('#bbs-list-div1')
				.append($(createBtn({id:'bbs-write-btn',clazz:'btn btn-outline-info',val:'글쓰기'}))
					.attr('style','margin-left: 94%;margin-bottom: 2%;')
					.on('click',()=>{
						write();
					}));
		    	$(createDiv({id:'bbs-list-div3',clazz:'grid-list'}))
		    	.attr('style','margin-left: 5%;')
		    	.appendTo('#bbs-list-div1')
		    	.append($(createP({
		    		i:'i++',
		    		list: ['NO','제목','작성일','작성자','조회']}))
		    		.attr('style', 'border-bottom: 1px solid #e9e9e9;color:#969494;'));
				$(createP2({i:'',list: d.list, seq:d.seqList}))
				.attr('id','bbs-search-list')
				.attr('style','margin-top: 10px;font-size: 16px;')
			    .appendTo('#bbs-list-div3');
				
				$('.bbs-detail-class p').on('click', function(){
					console.log($(this).attr('value'));
					var seq = $(this).attr('value');
					var jason={
			                 seq : $(this).attr('value')
			         };
					$.ajax({
						url:context+'/board/post/'+seq,
						method: 'POST',
						data : JSON.stringify(jason),
						dataType : 'json',
						contentType : 'application/json',
						success : x=>{
							var bid = x.board.id
							var json = {
								board : bid	
							};
							detail(x);
						}
					});
				});
				pagenation(d);
				$(createForm({id:'',clazz:'',action:'',method:''}))
		    	.appendTo('#bbs-list-div1')
		    	.attr('style','margin-bottom: 17%;margin-top: 8%;text-align: center;')
		    	.append($(createSelect({id:'bbs-search-select',clazz:'col-xs-6 form-control'}))
		    			.attr('name','filter')
				    	 .attr('style','margin-left: 25%;width: 10%;')
		    	.append($(createOption1({
		    			i:'i++',
		    	    	list:['작성자','제목','내용']
		    	 }))))
		    	.append($(createInput({type:'text',id:'bbs-search-input',clazz:'col-xs-3 form-control',placeholder:''}))
		    		.attr('style','margin-left: 2px;line-height:29px; width: 25%;'))
		    	.append($(createBtn({id:'',clazz:'col-xs-1 btn btn-outline-info',val:'검색'}))
		    			.attr('style','margin-left: 2px;width: 6%;')
		    			.on('click',e=>{
		    				e.preventDefault();
		    				var data = $('#bbs-search-input').val();
		    				var filter = $('#bbs-search-select').val();
		    				$.ajax({
		    					url:context+'/member/board/search/'+filter+'/'+data,
		    					method : 'GET',
	                            dataType : 'json',
	                            contentType : 'application/json',
	                            success : x=>{
	                            	if(x.search ==''){
	                            		alert('검색 결과가 없습니다.');
	                            		$('#bbs-search-input').val('');
	                            	}else{
	                            	$('#bbs-list-div3').empty();
	                            	$('#bbs-list-div3').append($(createP({
	                		    		i:'i++',
	                		    		list: ['NO','제목','작성일','작성자','조회']}))
	                		    		.attr('style', 'border-bottom: 1px solid #e9e9e9;color:#969494;'));
	                				$(createP2({i:'',list: x.search, seq:d.seqList}))
	                				.attr('id','bbs-search-list')
	                				.attr('style','margin-top: 10px;font-size: 16px;')
	                			    .appendTo('#bbs-list-div3');

	                				$('.bbs-detail-class p').on('click', function(){
	                					console.log($(this).attr('value'));
	                					var seq = $(this).attr('value');
	                					var jason={
	                			                 seq : $(this).attr('value')
	                			         };
	                					$.ajax({
	                						url:context+'/board/post/'+seq,
	                						method: 'POST',
	                						data : JSON.stringify(jason),
	                						dataType : 'json',
	                						contentType : 'application/json',
	                						success : x=>{
	                							var bid = x.board.id
	                							var json = {
	                								board : bid	
	                							};
	                							detail(x);
	                						}
	                					});
	                				});
	                            }
	                            }
		    				});
		    			}));
			});
		});
	};
		var write =()=>{
			$('#mem-mypage-main').html($(createDiv({id:'bbs-write-div1',clazz:''}))
				.attr('style','margin-right: 20%;'));
			$('#bbs-write-div1').html($(createDiv({id:'bbs-write-div2',clazz:''}))
		    	.attr('style','margin-left: 5%;margin-right: 5%;'))
		    .append($(createDiv({id:'bbs-write-div3',clazz:'grid-write'})));
			$(createDiv({id:'bbs-div-qna',clazz:''}))
			.appendTo('#bbs-write-div3')
			.append($(createHTag({num:'2',val:'게시판'})));
			$(createForm({id:'bbs-write-form-1',clazz:'',action:'',method:''}))
			.appendTo('#bbs-write-div3');
			$(createDiv({id:'',clazz:''}))
			.attr('style','margin-top: 3%;')
			.appendTo('#bbs-write-form-1')
			.append($(createLabel({val:'제목'}))
					.attr('style','font-size: 20px;'))
			.append($(createWInput({type:'text',id:'bbs-title-input',clazz:'',placeholder:''}))
			.attr('style','margin-left: 10px;border: none;width: 80%;height: 30px;font-size: 17px;'));
			$(createHrTag({id:''}))
			.attr('style','color:#272727;margin-top: 2%;')
			.appendTo('#bbs-write-form-1');
			$(createDiv({id:'',clazz:''}))
			.appendTo('#bbs-write-form-1')
			.attr('style','margin-bottom: 20px;')
			.append($(createLabel({val:'내용'}))
					.attr('style','font-size: 20px;'))
			.append($(createTextarea({clazz:'textarea',id:'bbs-content-input',val:''}))
					.attr('style','height: 400px;font-size: 17px;'));
			$(createDiv({id:'bbs-write-div4',clazz:''}))
			.appendTo('#bbs-write-form-1')
			.attr('style','margin-left:auto;');
			$(createBtn({id:'bbs-regi-btn',clazz:'btn btn-outline-info',val:'등록'}))
			.appendTo('#bbs-write-form-1')
				.attr('style','background: #272727;color: #ffffff;border: 1px solid #272727;border-radius: 8px;font-size: 15px;')
			.on('click', e=>{
				if($('#join-phone').val() ===''){
	          		  alert('제목을 입력 해 주세요.');
	          		  $('#bbs-title-input').focus();
	          		  return false;
	          		  }
	          	  if($('#bbs-content-input').val() ===''){
	          		  alert('내용을 입력 해 주세요.');
	          		  $('#join-email').focus();
	          		  return false;
	          		  }
				var jason ={
						title : $('#bbs-title-input').val(),
						content : $('#bbs-content-input').val()
				};
				$.ajax({
					url: context+'/board/post/article/'+sessionStorage.getItem('user'),
					data : JSON.stringify(jason),
					dataType : 'json',
					contentType: 'application/json',
					method: 'POST',
					success : x=>{
						alert('글 등록에 섲공하셨습니다.');
						app.board.onCreate();
					},
					error : x=>{
						alert('글 등록에 실패하셨습니다.');
					}
				});
			});
			$(createBtn({id:'bbs-cancle-btn',clazz:'btn btn-outline-info',val:'취소'}))
			.appendTo('#bbs-write-form-1')
				.attr('style','margin-left:10px;background:#7d7d7d;color: #ffffff;border: 1px solid #858585; border-radius: 8px;font-size: 15px;')
			.on('click', e=>{
			     onCreate();
			 });
	};
	var pagenation=d=>{
		$(createDiv({id:'bbs-pag-div',clazz:''}))
		.appendTo('#bbs-list-div1');
		$(createUL({id :'bbs-ul', clazz :''}))
		.attr('style','list-style:none;margin-left: 40%;margin-top: 5%;')
		.appendTo('#bbs-pag-div');
		var t = '';
		if(d.prevBlock){
			t+='<li style="float: left;margin-left: 10px;">'
			+'	<a active style="text-decoration:none;color: black; cursor:Hand; " href="#" aria-label="Previous" onclick="app.board.list('+(d.pageStart-1)+'); return false;">'
			+'		<span aria-hidden="true">&laquo;</span>'
			+'	</a>'
			+'</li> ';
		}
		for(var i = d.pageStart; i<=d.pageEnd; i++){
			if(i===d.pageNum1){
				t+='<li style="float: left;margin-left: 10px;">'
				+'	<a style="text-decoration:none;color: black; cursor:Hand;color: red;" href="#" onclick="app.board.list('+i+'); return false;">'+i+'</a></li>';
			}else{
				t+='<li style="float: left;margin-left: 10px;">'
				+'	<a style="text-decoration:none;color: black; cursor:Hand;" href="#" onclick="app.board.list('+i+'); return false;">'+i+'</a></li>';
			}
		}
		if(d.nextBlock){
			t+=  '<li style="float: left;margin-left: 10px;">'
				+'	<a style="text-decoration:none;color: black; cursor:Hand;" href="#" aria-label="Next" onclick="app.board.list('+(d.pageEnd+1)+'); return true;">'
				+'		<span aria-hidden="true">&raquo;</span>'
				+'	</a>'
				+'</li> ';
		}
		$('#bbs-ul').append(t);
		
	};
	var detail =x=>{
		$('#mem-mypage-main').html($(createDiv({id:'bbs-detail-div1',clazz:''})));
		$(createDiv({id:'',clazz:''}))
		.appendTo('#bbs-detail-div1');
		$(createDiv({id:'',clazz:'grid-detail'}))
		.attr('style','margin-top: 70px')
		.appendTo('#bbs-detail-div1')
		.append($(createText({clazz:'',val:'제목'})))
		.append($(createText({clazz:'',val:x.board.title}))
				.attr('style','font-size: 17px;'));
		$(createHrTag({id:''}))
		.attr('style','color:#272727;margin-top: 2%;')
		.appendTo('#bbs-detail-div1');
		$(createDiv({id:'',clazz:'grid-detail'}))
		.attr('style','margin-top: 20px')
		.appendTo('#bbs-detail-div1')
		.append($(createText({clazz:'',val:'작성자'})))
		.append($(createText({clazz:'',val:x.board.id}))
		.attr('id','bbs-createText-id')
		.attr('style','font-size: 17px;'));
		$(createHrTag({id:''}))
		.attr('style','color:#272727;margin-top: 2%;')
		.appendTo('#bbs-detail-div1');
		$(createDiv({id:'',clazz:''}))
		.attr('style','margin-top: 20px')
		.appendTo('#bbs-detail-div1')
		.append($(createText({clazz:'',val:'내용'})));
		$(createDiv({id:'',clazz:''}))
		.appendTo('#bbs-detail-div1')
		.append($(createHrTag({id:''}))
		.attr('style','height:20em;')
		.append($(createText({clazz:'',val:x.board.content}))
				.attr('style','font-size: 17px;')));
		$(createDiv({id:'bbs-detail-div3',clazz:''}))
		.appendTo('#bbs-detail-div1')
		.attr('style','margin-left:auto;');
		$(createBtn({id:'',clazz:'btn btn-outline-info',val:'목록'}))
		.appendTo('#bbs-detail-div3')
			.attr('style','background: #272727;color: #ffffff;border: 1px solid #272727;border-radius: 8px;font-size: 15px;margin-left: 80%;')
			.on('click',e=>{
				e.preventDefault();
				onCreate();
			});
		//세션 아이디
		if(x.board.id == sessionStorage.getItem('user')){
			$(createBtn({id:'',clazz:'btn btn-outline-info',val:'수정'}))
			.appendTo('#bbs-detail-div3')
				.attr('style','background: #272727;color: #ffffff;border: 1px solid #272727;border-radius: 8px;font-size: 15px;margin-left: 1%;')
				.on('click',()=>{
					update(x);
				});
			$(createBtn({id:'',clazz:'btn btn-outline-info',val:'삭제'}))
			.appendTo('#bbs-detail-div3')
				.attr('style','background: #272727;color: #ffffff;border: 1px solid #272727;border-radius: 8px;font-size: 15px;margin-left: 1%;')
				.on('click',()=>{
						$.ajax({
							url: context+'/board/delete/article/'+x.board.bbsSeq,
							method : 'GET',
							dataType : 'json',
							contentType : 'application/json',
							success : x=>{
								alert('삭제 성공하셨슨니다.');
								onCreate();
							},
							error : ()=>{
								alert('권한이 없습니다.');
							}
						});	
				});
		}

	};
	var update =x=>{
		$('#mem-mypage-main').html($(createDiv({id:'bbs-update-div1',clazz:''})));
		$(createDiv({id:'',clazz:''}))
		.appendTo('#bbs-update-div1')
		.append($(createHTag({num:'2',val:'게시판'})));
		$(createDiv({id:'',clazz:'grid-detail'}))
		.attr('style','margin-top: 100px')
		.appendTo('#bbs-update-div1')
		.append($(createText({clazz:'',val:'제목'})))
		.append($(createInput({type:'text',id:'bbs-title-update-input',clazz:'',placeholder:''}))
		.attr('value',x.board.title)
		.attr('style','border: none;width: 80%;height: 100%;font-size: 17px;'));
		$(createHrTag({id:''}))
		.attr('style','color:#272727;margin-top: 2%;')
		.appendTo('#bbs-update-div1');
		$(createDiv({id:'',clazz:'grid-detail'}))
		.attr('style','margin-top: 20px')
		.appendTo('#bbs-update-div1')
		.append($(createText({clazz:'',val:'작성자'})))
		.append($(createText({clazz:'',val:x.board.id}))
				.attr('style','font-size: 17px;'));
		$(createHrTag({id:''}))
		.attr('style','color:#272727;margin-top: 2%;')
		.appendTo('#bbs-update-div1');
		$(createDiv({id:'',clazz:''}))
		.attr('style','margin-top: 20px')
		.appendTo('#bbs-update-div1')
		.append($(createText({clazz:'',val:'내용'})));
		$(createDiv({id:'',clazz:''}))
		.appendTo('#bbs-update-div1')
		.append($(createHrTag({id:''}))
		.attr('style','height:20em;')
		.append($(createTextarea({clazz:'update-textarea',id:'bbs-content-update-input',val:x.board.content}))
				.attr('style','font-size: 17px;')));
		
		$(createDiv({id:'bbs-update-div3',clazz:''}))
		.appendTo('#bbs-update-div1')
		.attr('style','margin-left:auto;');
		
		$(createBtn({id:'',clazz:'',val:'완료'}))
		.appendTo('#bbs-update-div3')
			.attr('style','margin-bottom: 5%;margin-top: 2%;background: #272727;color: #ffffff;border: 1px solid #272727;border-radius: 8px;font-size: 15px;margin-left: 80%;')
			.on('click',()=>{
				var jason ={
						title : $('#bbs-title-update-input').val(),
						content : $('#bbs-content-update-input').val()
				};
				$.ajax({
					url:context+'/board/update/article/'+x.board.bbsSeq,
					method:'POST',
					data : JSON.stringify(jason),
					dataType:'json',
					contentType:'application/json',
					success : x=>{
						onCreate();
					},
					error : ()=>{
						alert('업데이트 실패');
					}
				});
			});
		$(createBtn({id:'',clazz:'',val:'취소'}))
		.appendTo('#bbs-update-div3')
			.attr('style','margin-bottom: 5%;margin-top: 2%;background: #272727;color: #ffffff;border: 1px solid #272727;border-radius: 8px;font-size: 15px;margin-left: 1%;')
			.on('click',x=>{
				onCreate();
			});
	};
	return{onCreate:onCreate,list:list};
})();
/*회원가입*/
app.join = (()=>{
	var context, view, flag;
	var onCreate =()=>{
	    $content = $('#content');
	    context = $.context();
	    flag = false;
	    view = $.javascript()+'/yjview.js';
	    setContentView();
	};
	var setContentView=()=>{
        $.getScript(view, ()=>{
        		$(createDiv({id:'mem-join-div',clazz:''}))
        		.appendTo($content);
        	  	$('#mem-join-div').html($(createDiv({id:'join-modal',clazz:'modal fade'}))
                      .attr('role','dialog')
                      .append($(createDiv({id:'',clazz:'modal-dialog modal-lg'}))
                      .append($(createDiv({id:'',clazz:'modal-content'}))
                      .append($(createDiv({id:'join-modal-header',clazz:'modal-header'}))
                      .append($(createBtn({id:'',clazz:'close',val:'&times;'}))
                    		  .attr('aria-label','Close')
                    		  .attr('data-dismiss','modal'))))));
                  $(createDiv({id:'join-col-sm-6',clazz:'col-sm-6'}))
                  	  .attr('style', 'margin-top: 2%')
                  	  .appendTo('#join-modal-header')
                  	  .append($(createDiv({id:'',clazz:''}))
                      .append($(createHTag({num:'3',val:'회원가입'}))
                    		  .attr('align','center')))
                  	  .append($(createDiv({id:'',clazz:'modal-body'}))
                  	  .append($(createDiv({id:'',clazz:''}))
      			      .append($(createBtn({id:'',clazz:'btn btn-primary btn-block',val:'페이스북으로 가입하기'}))
      			      .prepend($(createImg({src:'https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/aMltqKRlCHD.png'}))))));
                  $(createForm({id:'join-form',clazz:'',action:'post'}))
                  	  .attr('style', 'margin: 15px 20px 20px 15px')
      				  .appendTo('#join-col-sm-6')
      				  .append($(createDiv({id:'mem-join-div1',clazz:''}))
      						  .attr('style','margin-top: 2%;'))
      			  $(createDiv({id:'',clazz:''}))
      			  	  .appendTo('#mem-join-div1')
      				  .append($(createLabel({val:'아이디*'})))
      				  .append($(createInput({type:'text',id:'join-id',clazz:'form-control',placeholder:''})))
      				  .append($(createInput({type:'button',id:'mem-check-join-btn',clazz:'btn btn-outline-primary',placeholder:'중복확인'}))
      						  .attr('style','margin-top: 2%;')
      						.on('click', e=>{
    							  var id = $('#join-id').val();
    							  $.ajax({
    								url : context+'/member/idCheck/'+id,
    	                            method : 'GET',
    	                            dataType : 'json',
    	                            contentType : 'application/json',
    	                            success : x=>{
    	                            	if(x.checkId === 1){
    	                            		$('#join-id').val('');
    	                            		alert('이미 사용중인 아이디 입니다.');
    	                            	 }else if(id < "0" || id >"9" && id < "a" || id > "z"){
    	                            		 $('#join-id').val('');
    	                            		 alert("아이디는 특수문자 및 한글은 사용하실수 없습니다.");
    	                 					 return false;
    	                 				  }else{
    	                 					  flag = true;
    	                 					  alert('사용 가능한 아이디 입니다.');
    	                            	}
    	                            }
    							  });
    						  }))
    						  .append($(createInput({type:'hidden',id:'',clazz:'btn btn-outline-primary',placeholder:'중복확인'}))
    								  .attr('value','idUncheck')
    								  .attr('name','idOverlapCheck'));	  
      			  $(createDiv({id:'',clazz:''}))
      				  .appendTo('#mem-join-div1')  
      			      .append($(createDiv({id:'',clazz:''}))
      			    		 .attr('style','margin-top: 2%;')
      			      .append($(createLabel({val:'비밀번호*'})))
      			      .append($(createInput({type:'password',id:'join-pw',clazz:'form-control',placeholder:''}))))
      			      .append($(createDiv({id:'',clazz:''}))
      			    		 .attr('style','margin-top: 2%;')
      			      .append($(createLabel({val:'비밀번호 재 확인*'})))
      			      .append($(createInput({type:'password',id:'join-check-pw',clazz:'form-control',placeholder:''}))))
      			      .append($(createDiv({id:'',clazz:''}))
      			    		 .attr('style','margin-top: 2%;')
      			      .append($(createLabel({val:'이름*'})))
      			      .append($(createInput({type:'text',id:'join-name',clazz:'form-control',placeholder:''}))))
      			      .append($(createDiv({id:'',clazz:''}))
      			    		 .attr('style','margin-top: 2%;')
      			      .append($(createLabel({val:'핸드폰 번호*'})))
      			      .append($(createInput({type:'text',id:'join-phone',clazz:'form-control',placeholder:''}))))
      			      .append($(createDiv({id:'join-email-div',clazz:''}))
      			    		 .attr('style','margin-top: 2%;')
      			      .append($(createLabel({val:'이메일*'})))
      			      .append($(createInput({type:'email',id:'join-email',clazz:'form-control',placeholder:''}))));
                  $(createBtn({id:'btn-auth',clazz:'btn btn-outline-primary',val:'인증 메일 전송'}))
                  	  .appendTo('#join-email-div')
                  	  .attr('style','margin-top: 2%;');
                  $(createBtn({id:'btn-join', clazz: 'btn btn-default btn-block', val: '회원가입'}))
                  .attr('style','background-color: #58ACFA; color: #FFFFFF ;font-size: 16px;margin-top: 7%;')
                  .on('click', e=>{
                	  var id = $('#join-id').val();
                	  if(flag == false){
                		  alert('중복확인 버튼을 클릭 해 주세요.');
                		  $('#join-id').focus();
                	  }
                	  if($('#join-pw').val() != $('#join-check-pw').val()){
                		  $('#join-check-pw').val('');
                		  alert('비밀번호가 일치하지 않습니다.');
                		  }
                	  if($('#join-pw').val() ===''){
          				  alert('비밀번호를 입력하세요');
          				  $('#join-pw').focus();
          				 }
                	  if(id ===''){
          				  alert('아이디를 입력해주세요');
          				  $('#join-id').focus();
          			  }else if(id < "0" || id >"9" && id < "a" || id > "z"){
          					 alert("아이디는 특수문자 및 한글은 사용하실수 없습니다.");
          			  }
                	  if($('#join-name').val() ===''){
                		  alert('이름 입력해주세요');
                		  $('#join-name').focus();
                		  }
                	  if($('#join-phone').val() ===''){
                		  alert('핸드폰 번호를 입력해주세요');
                		  $('#join-phone').focus();
                		  }
                	  if($('#join-email').val() ===''){
                		  alert('이메일을 입력해주세요');
                		  $('#join-email').focus();
                		  }
                	  e.preventDefault();
                	  var json = {
                              id : $('#join-id').val(),
                              pw : $('#join-pw').val(),
                              name: $('#join-name').val(),
                              phone: $('#join-phone').val(),
                              email: $('#join-email').val(),
                          }
                	  if(flag = true){
                	  $.ajax({
                		  url : context+'/member/join',
                          method : 'POST',
                          data : JSON.stringify(json),
                          dataType : 'json',
                          contentType : 'application/json',
                  		  success : x =>{
        					$('.close').trigger('click')
        					alert("회원가입을 축하드립니다.");
        					app.nav.onCreate();
        				},
        				error : ()=>{
        					alert('실패하셨습니다');
        				}
                	  });
                  }else{
                	  alert('중복 확인 버튼을 클릭 해 주세요.');
                  }
                  })
                  	   .appendTo($('#join-form'))
                  	  
                  $(createHTag({num: '6', val:'계속 진행함으로써 이용 약관 및 개인정보 처리방침에 동의합니다.'}))
                  .attr('align', 'center')
                    .appendTo($('#join-form'));
                 
                  $(createDiv({id:'',clazz:'col-sm-5'}))
                      .appendTo('#join-modal-header')
                      .append($(createDiv({id:'',clazz:''}))
                    		  .attr('style','background:#e6f7ff;')
                    		  .attr('style', 'width: 127%; height: 537px')
                      .append($(createImg({id: '', clazz: 'center-block', src:'https://cdn6.agoda.net/images/desktop/login/illustration-deals-social.svg'}))
                    		  .attr('style', 'margin-top: 40%'))
                      .append($(createDiv({id:'',clazz:''}))
                      .append($(createHTag({num: '4', val:'[최대 30% OFF] 회원 특가 상품! <br>  회원 가입하는 순간 가격이 내려갑니다.'}))
                    		  .attr('align', 'center'))));
                  $(function(){
               	   $('#join-modal').modal();
                  		});
        });
    };
	return {onCreate : onCreate};
})();
/*비번찾기*/
app.pass = (()=>{
	var context, view;
	var onCreate =()=>{
	    $content = $('#content');
	    context = $.context();
	    view = $.javascript()+'/yjview.js';
	    setContentView();
	};
	var setContentView=()=>{
        $.getScript(view, ()=>{
        		$(createDiv({id:'mem-pass-div',clazz:''}))
        		.appendTo($content);
        	  	$('#mem-pass-div').html($(createDiv({id:'pass-modal',clazz:'modal fade'}))
                      .attr('role','dialog')
                      .append($(createDiv({id:'',clazz:'modal-dialog '}))
                      .append($(createDiv({id:'',clazz:'modal-content'}))
                      .append($(createDiv({id:'join-modal-header',clazz:'modal-header'}))
                      .append($(createBtn({id:'',clazz:'close',val:'&times;'}))
                    		  .attr('aria-label','Close')
                    		  .attr('data-dismiss','modal'))))));
                 
        	  	$(createDiv({id:'mem-pass-facebook',clazz:''}))
                  	  .attr('style', 'margin-top: 8%')
                  	  .appendTo('#join-modal-header')
                  	  .append($(createDiv({id:'',clazz:''}))
                      .append($(createHTag({num:'4',val:'아고다 비밀번호를 기억하기 힘들다면 <br>지금 페이스북 계정으로 간편하게 로그인하세요!'}))
                    		  .attr('align','center')))
                  	  .append($(createDiv({id:'',clazz:'modal-body'}))
                  	  .append($(createDiv({id:'',clazz:''}))
      			      .append($(createBtn({id:'',clazz:'btn btn-primary btn-block',val:'페이스북으로 계속하기'}))
      			    		  .attr('style','font-size: 16px')
      			      .prepend($(createImg({src:'https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/aMltqKRlCHD.png'}))))));
        		
        	  	$(createDiv({id:'mem-pass-email',clazz:''}))
        	  		 .attr('style', 'margin: 15px 20px 20px 30px')
        	  		 .appendTo('#mem-pass-facebook')
        	  		 .append($(createHTag({num:'5',val:'고객님의 이메일 주소를 입력해 주세요. <br> 비밀번호 재설정 링크를 보내드리도록 하겠습니다.'}))
        	  				 .attr('align', 'center'))
        	  		 .append($(createLabel({val:'이메일'})))
        	  		 .append($(createForm({id:'mem-pass-form',clazz:'',action:'post'}))
        	  				 .append($(createInput({type:'text',id:'email',clazz:'form-control',placeholder:''}))));
        	  	$(createBtn({id:'mem-pass-email-btn', clazz: 'btn btn-default btn-block', val: '확인'}))
                  		.attr('style','background-color: #58ACFA; color: #FFFFFF ;font-size: 16px;margin-top: 3%;')
                  .on('click', e=>{
                	  e.preventDefault();
                	  var json = {
                			  email : $('#email').val()
                          }
                      $.ajax({
                          url : '',
                          method : 'POST',
                          data : JSON.stringify(json),
                          dataType : 'json',
                          contentType : '',
                          success : x=>{
                                  var json = {
                                       
                                  }
                          },
                          error : ()=>{                            	
                              alert('');
                          }
                      });
                  })
                  	   .appendTo($('#mem-pass-email'))
                  $(function(){
               	   $('#pass-modal').modal();
                  		});
        });
    };
	return {onCreate : onCreate};
})();