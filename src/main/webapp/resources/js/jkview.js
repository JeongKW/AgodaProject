//Common Tag for Dynamicjquery
var deleteView=()=>{
	return '<h4>삭제하시겠습니까?</h4>'
	+ '<button id="btn-delete-member">삭제</button><button id="btn-cancel-member">취소</button>';
};

var createFieldSet=()=>{
	return '<h3>회원 추가</h3>' 
	+ '<fieldset style="border:0;">'
	+ '<ol>'
	+ '<li><label for="name">ID : &nbsp;</label><input id="input-id" type="text" placeholder="아이디"></li>'
	+ '<li><label for="name">Password : &nbsp;</label><input id="input-pw" type="password" placeholder="패스워드" required></li>'
	+ '<li><label for="name">이름 : &nbsp;</label><input id="input-name" type="text" placeholder="이름"></li>'
	+ '<li><label for="name">E-mail : &nbsp;</label><input id="input-email" type="email" placeholder="이메일"></li>'
	+ '<li><label for="name">핸드폰 : &nbsp;</label><input id="input-phone" type="text" placeholder="핸드폰"></li>'
	+ '</ol>'
	+ '</fieldset>'
	+ '<button id="btn-add-submit">확인</button>';
};

var createFieldSet2=()=>{
	return '<h3>회원 수정</h3>' 
	+ '<fieldset style="border:0;">'
	+ '<ol>'
	+ '<li><label for="name">ID : &nbsp;</label><input id="modify-id" type="text" placeholder="아이디" disabled></li>'
	+ '<li><label for="name">Password : &nbsp;</label><input id="modify-pw" type="password" placeholder="패스워드" required></li>'
	+ '<li><label for="name">이름 : &nbsp;</label><input id="modify-name" type="text" placeholder="이름" disabled></li>'
	+ '<li><label for="name">E-mail : &nbsp;</label><input id="modify-email" type="email" placeholder="이메일"></li>'
	+ '<li><label for="name">핸드폰 : &nbsp;</label><input id="modify-phone" type="text" placeholder="핸드폰"></li>'
	+ '</ol>'
	+ '</fieldset>'
	+ '<button id="btn-modify-submit">확인</button>';
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

var createSelect =x=>{
    return '<select id="'+x.id+'" class="'+x.clazz+'"> </select>'
};
var createOption =x=>{
    var temp = '';
    $.each(x.list,(i,j)=>{
        temp+='<option>'+j+'</option>'
    });
    return temp;
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