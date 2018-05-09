var modifyAdminBoard=()=>{
	return '<h3>게시판 수정</h3>' 
	+ '<fieldset style="border:0;">'
	+ '<ul>'
	+ '<li><label for="name">ID</label><br><input id="modify-bid" class="form-control" style="width: 320px" type="text" disabled></li>'
	+ '<li><label for="name">Title</label><br><input id="modify-title" class="form-control" style="width: 320px" type="text"></li>'
	+ '<li><label for="name">Content</label><br><textarea style="width: 400px; height: 300px" id="modify-content" class="form-control" row="6" cols="50"></textarea></li>'
	+ '</ul>'
	+ '</fieldset>'
	+ '<button class="btn btn-primary center-block" id="btn-modify-bsubmit">확인</button>';
};

var deleteView=()=>{
	return '<h4>삭제하시겠습니까?</h4>'
	+ '<button id="btn-delete-member">삭제</button><button id="btn-cancel-member">취소</button>';
};

var createFieldSet=()=>{
	return '<h4>회원 추가</h4>'
	+ '<fieldset style="border:0;">'
	+ '<ul>'
	+ '<li><label for="name">ID</label><br><input id="input-id" style="width: 324px"  class="form-control" type="text" placeholder="아이디"></li>'
	+ '<li><label for="name">Password</label><br><input id="input-pw" style="width: 324px"  class="form-control" type="password" placeholder="패스워드" required></li>'
	+ '<li><label for="name">이름</label><br><input id="input-name" style="width: 324px"  class="form-control" type="text" placeholder="이름"></li>'
	+ '<li><label for="name">E-mail</label><br><input id="input-email" style="width: 324px"  class="form-control" type="email" placeholder="이메일"></li>'
	+ '<li><label for="name">핸드폰</label><br><input id="input-phone" style="width: 324px"  class="form-control" type="text" placeholder="핸드폰"></li>'
	+ '</ul>'
	+ '</fieldset>'
	+ '<button id="btn-add-submit" class="btn btn-primary center-block">확인</button>';
};

var createFieldSet2=()=>{
	return '<h4>회원 수정</h4>' 
	+ '<fieldset style="border:0;">'
	+ '<ul>'
	+ '<li><label for="name">ID</label><br><input id="modify-id" class="form-control" style="width: 324px" type="text" placeholder="아이디" disabled></li>'
	+ '<li><label for="name">Password</label><br><input id="modify-pw" class="form-control" style="width: 324px"  type="password" placeholder="패스워드"></li>'
	+ '<li><label for="name">이름</label><br><input id="modify-name" class="form-control" style="width: 324px"  type="text" placeholder="이름" disabled></li>'
	+ '<li><label for="name">E-mail</label><br><input id="modify-email" class="form-control" style="width: 324px"  type="email" placeholder="이메일"></li>'
	+ '<li><label for="name">핸드폰</label><br><input id="modify-phone" class="form-control" style="width: 324px"  type="text" placeholder="핸드폰"></li>'
	+ '</ul>'
	+ '</fieldset>'
	+ '<button id="btn-modify-submit" class="btn btn-primary center-block">확인</button>';
};

var test=()=>{
	return '<div class="container">'
	+'    <div id="div-row" class="row">'
	+' 		  <div class="col-xs-2">'
	+'			 <button id="btn-member-add" class="btn btn-primary">추가</button>'
	+'		  </div>'
	+'  </div>'
	+'</div>';
};

var searchBox=()=>{
	return '<div class="col-xs-2"><select class="form-control" name="filter"><option value="i">아이디</option><option value="n">이름</option><option value="e">이메일</option><option value="p">핸드폰</option></select></div>'
	+'        <div class="col-xs-4">'
	+'	        <div class="input-group">'
	+'                <input type="hidden" name="search_param" value="all" id="search_param">         '
	+'                <input id="input-search" type="text" class="form-control" placeholder="검색할 내용 입력">'
	+'                <span id="span-btn" class="input-group-btn">'
	+'                </span>'
	+'            </div>'
	+'        </div>';
};

var createSelect=x=>{
    return '<select id="'+x.id+'" name="'+ x.name +'" class="'+x.clazz+'"> </select>'
};
var createOption=x=>{
    return '<option value="'+ x.val +'">'+x.content+'</option>';
};
var createATag=x=>{
	return '<a id="'+x.id+'" href="#">'+x.val+'</a>';
};
var createGlyphicon=x=>{
	return '<span class="glyphicon ' +x.clazz+'" aria-hidden="true">'+x.val+'</span>'
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
var createTab2=x=>{
	return '<table id="'+x.id+'" class="table '+x.clazz+'"></table>';
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
var createTr2=x=>{
	var t = '';
	$.each(x.list, (i, j)=> {
		t += '<tr>' + createTd2({list : j})+'</tr>';
	});
	return t;
};
var createTr3=x=>{
	var t = '';
	$.each(x.list, (i, j)=> {
		t += '<tr>' + createTd3({list : j})+'</tr>';
	});
	return t;
};

var createTd3=x=>{
	var t = '';
	$.each(x.list, (i, j)=>{
		if(i !== 'content' && i !== 'viewCount'){
			t += '<td>'+ j +'</td>';
		}
	});
	t += '<td>'+ createBtn({id: '', clazz: 'btn btn-success btn-sm', val: '수정'}) + '&nbsp' + createBtn({id: '', clazz: 'btn btn-danger btn-sm', val: '삭제'}) + '</td>';
	return t;
};
var createTd2=x=>{
	var t = '';
	$.each(x.list, (i, j)=>{
		if(i !== 'pw'){
			t += '<td>'+ j +'</td>';
		}
	});
	t += '<td>'+ createBtn({id: '', clazz: 'btn btn-success btn-sm', val: '수정'}) + '&nbsp' + createBtn({id: '', clazz: 'btn btn-danger btn-sm', val: '삭제'}) + '</td>';
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
		'" action="'+ x.action +'" method="'+ x.method +'"></form>';
};
var createDiv=x=>{
	return '<div id="'+ x.id +'" class="'+ x.clazz +'"></div>';
}
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
var createImg=x=>{
	return '<img src="'+x.src+'" class="'+x.clazz+'">';
};
var createLabel=x=>{
	return '<label>'+x.val+'</label>';
};
var createSpan=x=>{
	return '<span>'+x.val+'</span>';
};