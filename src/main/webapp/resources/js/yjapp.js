app.member = (()=>{
	var context, view;
	var onCreate =()=>{
	    $login = $('#login');
	    $content = $('#content');
	    context = $.context();
	    view = $.javascript()+'/yjview.js';
	    setContentView();
	};
	var setContentView=()=>{
        $.getScript(view, ()=>{
            $login.html($(createDiv({id:'myModal',clazz:'modal fade'}))
                .attr('role','dialog')
                    .append($(createDiv({id:'',clazz:'modal-dialog modal-lg'}))
                            .append($(createDiv({id:'',clazz:'modal-content'}))
                                    .append($(createDiv({id:'login-modal-header',clazz:'modal-header'}))
                                            .append($(createBtn({id:'',clazz:'close',val:'&times;'})))))));
            $(createDiv({id:'login-col-sm-6',clazz:'col-sm-6'}))
                .appendTo('#login-modal-header')
                    .append($(createDiv({id:'',clazz:''}))
                        .append($(createHTag({num: '3',val:'클릭 한 번으로 간편 로그인하기'})).attr('align', 'center')))
                            .append($(createHTag({num: '5', val:'아고다 비밀번호를 기억하기 힘들다면 <br>지금 페이스북 계정으로 간편하게 로그인하세요!'})).attr('align', 'center')
                                    .append($(createDiv({id:'',clazz:'modal-body'}))
                                        .append($(createDiv({id:'',clazz:'facebook-btn'}))
                                        	.attr('style', '15px 20px 10px 15px')
                                            .append($(createBtn({id:'',clazz:'btn btn-primary btn-block',val:'페이스북으로 계속하기'}))
                                                .prepend($(createImg({src:'https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/aMltqKRlCHD.png'})))))));
            $(createForm({id:'login-form',clazz:'css-login-form',action:'',method:'post'}))
            	.attr('style', 'margin: 15px 20px 20px 30px')
                .appendTo('#login-col-sm-6')
                    .append($(createDiv({id:'',clazz:'css-id-form'}))
                    	.attr('style', 'margin-bottom: 20px')
                        .append($(createLabel({val:'아이디'})))
                            .append($(createInput({type:'text',id:'id',clazz:'form-control',placeholder:''}))))
                                .append($(createDiv({id:'',clazz:''}))
                                    .append($(createLabel({val:'비밀번호'})))
                                        .append($(createInput({type:'text',id:'pw',clazz:'form-control',placeholder:''})))
                                            .append($(createATag({id:'', val:'비밀번호를 잊으셨나요?'}))));
            $(createDiv({id:'login-div-btn',clazz:'css-login-form'}))
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
                            if(x.success == 1){
                                var json = {
                                        id : x.user.id,
                                        pass : x.user.pass,
                                        ssn : x.user.ssn,
                                        name : x.user.name,
                                        phone : x.user.phone,
                                        email : x.user.email
                                }
                            }
                        },
                        error : (x, h, m)=>{
                            alert('로그인에서 에러 발생 x='+x+', h='+h+', m='+m);
                        }
                    });
                })
                .appendTo($('#login-div-btn'));
            $(createDiv({id:'',clazz:'modal-footer'}))
                .appendTo('#login-col-sm-6')
                    .append($(createDiv({id:'',clazz:'css-login-footer'}))
                    	.attr('style', 'margin: 15px 10px 5px 15px')
                        .append($(createDiv({id:'',clazz:'css-login-htag'}))
                        	.attr('style', 'margin: 15px 10px 10px 15px')
                            .append($(createHTag({num: '5', val:'아직 아고다 회원이 아니신가요?'})).attr('align', 'center')))
                                    .append(createBtn({id:'',clazz:'btn btn-default btn-block',val:'회원가입'})));
            $(createDiv({id:'',clazz:'col-sm-5'}))
                    .appendTo('#login-modal-header')
                        .append($(createDiv({id:'',clazz:'css-img'})).attr('style','background:#e6f7ff;')
                        	.attr('style', 'width: 127%; height: 537px')
                            .append($(createImg({id: '', clazz: '', src:'https://cdn6.agoda.net/images/desktop/login/illustration-deals-social.svg'})).attr('style',''))
                                .append($(createDiv({id:'',clazz:''})))
                                .append($(createHTag({num: '4', val:'[최대 30% OFF] 회원 특가 상품! <br>  회원 가입하는 순간 가격이 내려갑니다.'})).attr('align', 'center')))
        });
    };
	return {onCreate : onCreate};
})();