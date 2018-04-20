//Common Tag for Dynamic
var test=()=>{
	return '<div class="container">'
	+'    <div class="row">    '
	+'        <div class="col-xs-8 col-xs-offset-2">'
	+'	        <div class="input-group">'
	+'                <div class="input-group-btn search-panel">'
	+'                    <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">'
	+'                      <span id="search_concept">검색필드</span> <span class="caret"></span>'
	+'                    </button>'
	+'                    <ul class="dropdown-menu" role="menu">'
	+'                      <li><a href="#">아이디</a></li>'
	+'                      <li><a href="#">이름</a></li>'
	+'                      <li><a href="#">이메일</a></li>'
	+'                      <li><a href="#">핸드폰</a></li>'
	+'                    </ul>'
	+'                </div>'
	+'                <input type="hidden" name="search_param" value="all" id="search_param">         '
	+'                <input type="text" class="form-control" name="x" placeholder="검색할 내용 입력">'
	+'                <span id="span-btn" class="input-group-btn">'
	+'                </span>'
	+'            </div>'
	+'        </div>'
	+' 		  <div class="col-xs-2">'
	+'			 <button id="btn-member-add" class="btn btn-primary">추가</button>'
	+'		  </div>'
	+'  </div>'
	+'</div>';
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
	var seq = 1;
	$.each(x.list, (i, j)=> {
		t += '<tr id="a-'+ seq +'">' + createTd2({list : j})+'</tr>';
		seq++;
	});
	return t;
};
var createTd2=x=>{
	var t = '';
	$.each(x.list, (i, j)=>{
		if(i !== 'pw'){
			t += '<td>'+ j +'</td>';
		}
	});
	t += '<td>'+ createBtn({id: 'admin-modify', clazz: 'btn btn-success btn-xs', val: '수정'}) + createBtn({id: 'admin-delete', clazz: 'btn btn-danger btn-xs', val: '삭제'}) + '</td>';
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
	return '<button type ="button" id="'+ x.id +'" class="'+ x.clazz +'">'+ x.val +'</button>';
};
var createForm=x=>{
	return '<form id="'+ x.id +'" class="'+ x.clazz +'" action="'+ x.action +'" method="'+ x.method +'"></form>';
};
var createDiv=x=>{
	return '<div id="'+ x.id +'" class="'+ x.clazz +'"></div>';
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