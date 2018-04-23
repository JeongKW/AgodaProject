
app.login = (()=>{
	var context, view;
	var onCreate =()=>{
	    $content = $('#content');
	    context = $.context();
	    view = $.javascript()+'/yjview.js';
	    setContentView();
	};
	/*로그인*/
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
                                alert('로그인 성공여부: '+x.success);
                                    var json = {
                                            id : x.user.id,
                                            pass : x.user.pass,
                                            ssn : x.user.ssn,
                                            name : x.user.name,
                                            phone : x.user.phone,
                                            email : x.user.email
                                    }
                            },
                            error : (x, h, m)=>{                            	
                                alert('로그인에서 에러 발생 x='+x+', h='+h+', m='+m);
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
                    .append(createBtn({id:'',clazz:'btn btn-default btn-block',val:'회원가입'})));
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
        return {onCreate : onCreate};
})();
/*회원가입*/
app.join = (()=>{
	var context, view;
	var onCreate =()=>{
	    $content = $('#content');
	    context = $.context();
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
                  	  .attr('style', 'margin-top: 8%')
                  	  .appendTo('#join-modal-header')
                  	  .append($(createDiv({id:'',clazz:''}))
                      .append($(createHTag({num:'3',val:'회원가입'}))
                    		  .attr('align','center')))
                  	  .append($(createDiv({id:'',clazz:'modal-body'}))
                  	  .append($(createDiv({id:'',clazz:''}))
      			      .append($(createBtn({id:'',clazz:'btn btn-primary btn-block',val:'페이스북으로 가입하기'}))
      			      .prepend($(createImg({src:'https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/aMltqKRlCHD.png'}))))));
                  $(createForm({id:'join-form',clazz:'',action:'post'}))
                  	  .attr('style', 'margin: 15px 20px 20px 30px')
      				  .appendTo('#join-col-sm-6')
      				  .append($(createDiv({id:'',clazz:''}))
      				  .append($(createLabel({val:'아이디*'})))
      				  .append($(createInput({type:'text',id:'id',clazz:'form-control',placeholder:''}))))
      			      .append($(createDiv({id:'',clazz:''}))
      			      .append($(createLabel({val:'비밀번호*'})))
      			      .append($(createInput({type:'password',id:'pw',clazz:'form-control',placeholder:''}))))
      			      .append($(createDiv({id:'',clazz:''}))
      			      .append($(createLabel({val:'비밀번호 재 확인*'})))
      			      .append($(createInput({type:'password',id:'',clazz:'form-control',placeholder:''}))))
      			      .append($(createDiv({id:'',clazz:''}))
      			      .append($(createLabel({val:'이름*'})))
      			      .append($(createInput({type:'text',id:'name',clazz:'form-control',placeholder:''}))))
      			      .append($(createDiv({id:'',clazz:''}))
      			      .append($(createLabel({val:'핸드폰 번호*'})))
      			      .append($(createInput({type:'text',id:'phone',clazz:'form-control',placeholder:''}))))
      			      .append($(createDiv({id:'join-email-div',clazz:''}))
      			      .append($(createLabel({val:'이메일*'})))
      			      .append($(createInput({type:'text',id:'email',clazz:'form-control',placeholder:''}))));
                  $(createBtn({id:'btn-auth',clazz:'',val:'인증 메일 전송'}))
                  	  .appendTo('#join-email-div');
                  $(createInput({type:'checkbox',id:'email-checkbox',clazz:'',placeholder:''}))
                   	  .appendTo('#join-email-div')
                   	  .append($(createHTag({})));
                  $(createBtn({id:'btn-join', clazz: 'btn btn-default btn-block', val: '회원가입'}))
                  .attr('style','background-color: #58ACFA; color: #FFFFFF ;font-size: 16px;ma')
                  .on('click', e=>{
                	  e.preventDefault();
                	  var json = {
                              id : $('#id').val(),
                              pw : $('#password').val(),
                              name: $('#password').val(),
                              phone: $('#phone').val(),
                              email: $('#email').val(),
                          }
                	  $.ajax({
                		  url : context+'/member/join',
                          method : 'POST',
                          data : JSON.stringify(json),
                          dataType : 'json',
                          contentType : 'application/json',
                  		  success : x =>{
        					alert('가입 버튼 클릭 ');
        					
        				},
        				error : ()=>{
        					alert('실패하셨습니다');
        				}
  			            	
                	  });
                	  
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
                  		.attr('style','background-color: #58ACFA; color: #FFFFFF ;font-size: 16px;ma')
                  .on('click', e=>{
                	  e.preventDefault();
                	//  var email = $('#email').val();
                	  var json = {
                			  email : $('#email').val()
                          }
                	  alert('입력한 이메일 : '+ json);
                      $.ajax({
                          url : '',
                          method : 'POST',
                          data : JSON.stringify(json),
                          dataType : 'json',
                          contentType : '',
                          success : x=>{
                              alert('로그인 성공여부: '+x.success);
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