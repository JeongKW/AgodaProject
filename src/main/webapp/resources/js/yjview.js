//aa
var login=()=>{
	return '<div class="modal fade" id="myModal" role="dialog">'
	   +'<div class="modal-dialog modal-lg">'
	     +'<div class="modal-content">'
	+''
	       +'<div class="modal-header">'
	         +'<button type="button" class="close" data-dismiss="modal">&times;</button>'
	           +'<div class="col-sm-6">'
	            +'<div><h3 align="center">클릭 한 번으로 간편 로그인하기</h3></div>'
	            +'<h5 align="center">아고다 비밀번호를 기억하기 힘들다면 <br>지금 페이스북 계정으로 간편하게 로그인하세요!</h5>'
	+'<form method="post">           '
	       +'<div class="modal-body">'
	           +'<div class="div">'
	              +'<button class="btn btn-primary btn-block"><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/aMltqKRlCHD.png">페이스북으로 계속하기</button>'
	           +'</div>'
	           +'<div class="loginDiv">'
	             +'<label>아이디</label>'
	             +'<input id="id" type="text" class="form-control" name="" >'
	           +'</div>'
	           +'<div class="loginDiv">'
	             +'<label>비밀번호</label>'
	             +'<input id="pw" type="text" class="form-control" name="" >'
	           +'<div>비밀번호를 잊으셨나요?</div>'
	           +'</div> '
	          +'<div id="div-login" class="loginDiv">'
	          +'</div>  '
	          +'</div>'
	          +'</form>           '
	       +'<div class="modal-footer">'
	           +'<div class="loginDiv">'
	             +'<h6>아직 아고다 회원이 아니신가요?</h6>'
	             +'<button class="btn btn-default btn-block">회원가입</button>'
	           +'</div>'
	       +'</div>'
	     +'</div>'
	      +'<div class="col-sm-5" style="background:#e6f7ff;">'
	       +'<div><img src="https://cdn6.agoda.net/images/desktop/login/illustration-deals-social.svg"></div>'
	       +'<div>[최대 30% OFF] 회원 특가 상품! <br>회원 가입하는 순간, 가격이 내려갑니다.</div>'
	   +'</div>'
	   +'</div>'
	 +'</div>'
	+'</div>'
	 +'</div>';
};

// Common Tag for Dynamic
var createATag=x=>{
	return '<a id="'+x.id+'" href="#">'+x.val+'</a>';
};
var createGlyphicon=x=>{
	return '<span class="glyphicon ' +x.clazz+'" aria-hidden="true">&nbsp;'+x.val+'</span>'
};
var createText=x=>{
	return '<span class="'+x.clazz+'">'+x.val+'</span>';
};
var createHTag=x=>{
	return '<h'+x.num+'>'+x.val+'</h'+x.num+'>';
};
var createTab=x=>{
	return '<table id="'+x.id+'" class="table table-'+x.clazz+'"></table>';
};
var createThead=x=>{
	return '<thead>'+x+'</thead>';
};
var createTbody=x=>{
	return '<tbody>'+x+'</tbody>';
};
var createTh=x=>{
	var t = '<tr>';
	$.each(x.list, (i, j)=>{
		t += '<th>'+j+'</th>';
	});
	t += '</tr>';
	return t;
};
var createTr=x=>{
	var t = '';
	$.each(x.list, (i, j)=> {
		t += '<tr>'+createTd({seq : j.bbsSeq, list : j})+'</tr>';
	});
	return t;
};
var createTd=x=>{
	var t = '';
	var seq = x.seq;
	$.each(x.list, (i, j)=>{
		if(i !== 'content'){
			if(i === 'title'){
				t += '<td><a id="a-'+seq+'">'+j+'</a></td>';
			} else {
				t += '<td>'+j+'</td>';
			}
		}
	});
	return t;
};
var createUL=x=>{
	return '<ul id="'+x.id+'" class="'+x.clazz+'"></ul>';
	}
var createLI=x=>{
	return '<li id="'+x.id+'" class="'+x.clazz+'"></li>';
}
var createInput=x=>{
	return '<input type="'+x.type+'" id="'+x.id+'"class="'+x.clazz
      +' "value="'+x.placeholder+'">';
}
var createBtn=x=>{
	return '<button id="'+ x.id +'" class="'+ x.clazz +'">'+ x.val +'</button>';
};
var createForm=x=>{
	return '<form id="'+ x.id +'" class="'+ x.clazz +
		'action="'+ x.action +'" method="'+ x.method +'"></form>';
};
var createDiv=x=>{
	return '<div id="'+ x.id +'" class="'+ x.clazz +'"></div>';
};