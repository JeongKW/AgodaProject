//Common Tag for Dynamic
var createATag=x=>{
	return '<a id="'+x.id+'" class="'+x.clazz+'" href="'+x.link+'">'+x.val+'</a>';
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
var createAutoLI=x=>{
	var li = '<div>';
	$.each(x.list, (i, j)=>{
		 li += '<li class="" style="margin-top: 20px">'
			 +'<a href="#">'
				+'<div style="min-height: 250px; border: 3px solid purple; margin-top: 10px;">'
					+'<div class="col-sm-4" style="padding-left: 0px">'
						+'<img src="https://goo.gl/rvz1Vu" style="max-width: 100%" />'
					+'</div>'
					+'<div class="col-sm-5" style="padding-left: 0px">'
						+'<ul style="list-style-type: none; padding-left: 0px">'
							+'<li style="font-size: 20px">'
								+'<h2>'+j.name+'</h2>'
							+'</li>'
							+'<li id="resi-star-list" style="font-size: 30px">'
								for(var s=1; s<=5; s++){
									console.log(j.starRating);
									if(s <= j.starRating){
										li+= '<span class="fa fa-star checked-resi-star"></span>'
									} else {
										li+= '<span class="fa fa-star"></span>'
									}
								}
							li +='</li>'
							+'<li style="font-size: 20px">'
								+'<p style="color: red">12시간 전 예약됨</p>'
							+'</li>'
						+'</ul>'
					+'</div>'
					+'<div class="col-sm-3" style="background-color: #e9e9e9; min-height: 243px;">'
					+'</div>'
				+'</div>'
			+'</a></li>';
	})
	li += "</div>"
	return li;
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
var createImg=x=>{
	return '<img id="'+x.id+'" class="'+x.clazz+'" src="'+x.src+'" alt="'+x.alt+'" />'
};
var createPTag=x=>{
	return'<p id="'+x.id+'" class="'+x.clazz+'">'+x.val+'</p>'
};
var createSpan=x=>{
	return'<span id="'+x.id+'" class="'+x.clazz+'">'+x.val+'</span>'
};
var createHr=x=>{
	return '<hr/>'
}
var createITag=x=>{
	return '<i id="'+x.id+'", class="'+x.clazz+'">'+x.val+'</i>'
}


