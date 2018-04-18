<<<<<<< HEAD
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
			$login.html($(login()));
			$(createBtn({id: 'btn-login', clazz: 'btn btn-default btn-block', val: '로그인'}))
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
				.appendTo($('#div-login'))
		});
	};
	
	var alogin=()=>{
		
	};
	return {onCreate : onCreate};
=======
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
			$login.html($(login()));
			$(createBtn({id: 'btn-login', clazz: 'btn btn-default btn-block', val: '로그인'}))
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
				.appendTo($('#div-login'))
		});
	};
	
	var alogin=()=>{
		
	};
	return {onCreate : onCreate};
>>>>>>> refs/heads/Youjin
})();