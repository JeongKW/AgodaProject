// Common Tag for Dynamic

/*여기부터 추가했어요*/
var createSelect =x=>{
	return '<select id="'+x.id+'" class="'+x.clazz+'"> </select>';
};
var createOption =x=>{
	var temp = '';
	$.each(x.list,(i,j)=>{
		temp+='<option>'+j+'</option>'
	});
	return temp;
};
var createOption1 =x=>{
	var temp = '';
	$.each(x.list,(i,j)=>{
		temp+='<option value="'+i+'">'+j+'</option>'
	});
	return temp;
};
/*게시판 추가*/
var createWInput=x=>{
	return '<input type="'+x.type+'" id="'+x.id+'"class="'+x.clazz
      +' "value="'+x.placeholder+'" required>';
};
var createHrTag=x=>{
	return '<hr id="'+x.id+'"></hr>';
};
var createTextarea=x=>{
	return '<textarea class="'+x.clazz+'" id="'+x.id+'" name="" cols="100" rows="13" >'+x.val+'</textarea>';
};
var createPTag=x=>{
	return'<p id="'+x.id+'" class="'+x.clazz+'">'+x.val+'</p>'
};
var createP=x=>{
	var temp = '';
	$.each(x.list,(i,j)=>{
		temp+='<p id="p_'+i+'">'+j+'</p>';
	});
	return temp;
};
var createP2=x=>{
	var temp = '';
	$.each(x.list,(i,j)=>{
		var t = x.seq[i];
	/*	alert('seq : '+t);*/
		$.each(j, (i,j)=>{
			if(!(i === 'content')){
				if(i==='title'){
					temp+='<div class="bbs-detail-class"><a href="#" style="text-decoration:none;color: black;"><p id="p_'+i+'" value="'+t+'">'+j+'</p></a></div>';
				}else{
					temp+='<div><p id="p_'+i+'">'+j+'</p></div>';
				}
			}
		});
		
	});
	
	return temp;
};
/*여기까지 추가했어요*/

var createATag=x=>{
	return '<a id="'+x.id+'" href="#">'+x.val+'</a>';
};
var createGlyphicon=x=>{
	return '<span class="glyphicon ' +x.clazz+'" aria-hidden="true">&nbsp;'+x.val+'</span>'
};
var createText=x=>{
	return '<span class="'+x.clazz+'">'+x.val+'</span>';
};
var createTab=x=>{
	return '<table id="'+x.id+'" class="table table-'+x.clazz+'"></table>';
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
};
var createDiv=x=>{
	return '<div id="'+ x.id +'" class="'+ x.clazz +'"></div>';
};
var createATag=x=>{
	return '<a id="'+x.id+'" href="#">'+x.val+'</a>';
};
var createText=x=>{
	return '<span class="'+x.clazz+'">'+x.val+'</span>';
};
var createHTag=x=>{
	return '<h'+x.num+'>'+x.val+'</h'+x.num+'>';
};
var createThead=x=>{
	return '<thead>'+x+'</thead>';
};
var createTbody=x=>{
	return '<tbody>'+x+'</tbody>';
};
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
