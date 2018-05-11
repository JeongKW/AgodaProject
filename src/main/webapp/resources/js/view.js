// Common Tag for Dynamic
var introView=x=>{
	return '<div class="container-fluid" style="background: #333; padding-top: 20px; padding-bottom: 20px;">'
	+'<div class="row">'
	+'<div class="col-sm-3 text-center" style="color: #fff">'
		+'<div class="" style="display: inline-block; width: 250px; height: 250px; border: 10px solid #fff; border-radius: 50%;">'
			+'<span id="air" class="fa fa-plane" style="font-size: 200px; transform: rotate(-45deg); '
			+'position: relative; top: 13%; left: 3%;"></span>'
		+'</div>'
		+'<div style="font-size: 40px; font-weight: bold; margin-top: 20px; color: gold;">Flight</div>'
	+'</div>'
	+'<div class="col-sm-6 text-center" style="color: #fff">'
		+'<p style="font-size: 60px; font-weight: bold; margin-top: 20px">Agoda Project</p><br>'
		+'<p style="text-align: left; font-size: 28px;"> 개발환경 : Spring(Mybatis, Lombok), MariaDB</p>'
		+'<p style="text-align: left; font-size: 28px;"> 프로그래밍 언어 : JAVA, JSP, JavaScript</p>'
		+'<button id="btn-start" class="btn btn-success btn-lg" style="margin-top: 30px; font-weight: bold; font-size: 24px;">'
			+'Started In Agoda'
		+'</button>'
	+'</div>'
	+'<div class="col-sm-3 text-center" style="color: #fff">'
		+'<div class="" style="display: inline-block; width: 250px; height: 250px; border: 10px solid #fff; border-radius: 50%;">'
			+'<span id="air" class="fa fa-building" style="font-size: 100px; position: relative; top: 13%; left: -15%;"></span>'
			+'<span id="air" class="fa fa-home" style="font-size: 130px;position: absolute; top: 30%; left: 44%;"></span>'
		+'</div>	'
		+'<div style="font-size: 40px; font-weight: bold; margin-top: 20px; color: gold;">Hotel</div>'
	+'</div>'
+'</div>'
+'</div>'
+'<div class="container-fluid" style="padding-top: 20px;">'
+'<div class="container text-center">'
	+'<div class="row">'
		+'<div class="col-sm-4">'
			+'<div class="thumbnail" style="padding: 25px; min-height: 400px; box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">'
				+'<div style="border-top: 5px solid #333; border-bottom: 5px solid #333; margin-bottom: 20px;">		'
					+'<p style="font-size: 28px; font-weight: bold; padding: 5px; margin: 0px;">'
						+'<span class="fa fa-check" style="color: #5CB85C;"></span>&nbsp;Summary'
					+'</p>'
				+'</div>'
				+'<div class="text-left" style="font-size: 16px; line-height: 20px;">'
					+'<p><b>숙소</b> : 숙소검색(날짜, 인원, 정렬기능)<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;숙소 예약 및 결제</p>'
					+'<p><b>항공</b> : 항공검색(날짜, 인원)<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;항공 예약 및 결제</p>'
					+'<p><b>회원</b> : 로그인, 회원가입(중복확인)<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;My Page(비번 변경, 탈퇴, 예약관리)<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Q&A(게시판)</p>'
					+'<p><b>관리자</b> : 회원관리(CRUD, 히스토리)<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;게시판관리(수정, 삭제, 휠스크롤)<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;통계(원형그래프, 막대그래프)</p>'
				+'</div>'
			+'</div>'
		+'</div>'
		+'<div class="col-sm-4">'
			+'<div class="thumbnail" style="padding: 25px; min-height: 400px; box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">'
				+'<div style="border-top: 5px solid #333; border-bottom: 5px solid #333; margin-bottom: 20px;">		'
					+'<p style="font-size: 28px; font-weight: bold; padding: 5px; margin: 0px;">'
						+'<span class="fa fa-check" style="color: #5CB85C;"></span>&nbsp;Project Members'
					+'</p>'
				+'</div>'
				+'<div style="margin-top: 20px;">'
					+'<img src="'+$.image()+'/agada.jpg" style="width: 180px;">'
				+'</div>'
				+'<div class="text-left" style="margin-top: 30px; margin-bottom: 20px; padding-left: 20px; font-size: 20px;">'
					+'<div class="row" style="margin-top: 10px;">'
						+'<div class="col-sm-2" style="padding: 0px;">팀장</div>'
						+'<div class="col-sm-3" style="padding: 0px;">정광우</div>'
						+'<div class="col-sm-7" style="padding: 0px;">관리자</div>'
					+'</div>'
					+'<div class="row" style="margin-top: 10px;">'
						+'<div class="col-sm-2" style="padding: 0px;">팀원</div>'
						+'<div class="col-sm-3" style="padding: 0px;">구민우</div>'
						+'<div class="col-sm-7" style="padding: 0px;">항공</div>'
					+'</div>'
					+'<div class="row" style="margin-top: 10px;">'
						+'<div class="col-sm-2" style="padding: 0px;"></div>'
						+'<div class="col-sm-3" style="padding: 0px;">김용대</div>'
						+'<div class="col-sm-7" style="padding: 0px;">숙소</div>'
					+'</div>'
					+'<div class="row" style="margin-top: 10px;">'
						+'<div class="col-sm-2" style="padding: 0px;"></div>'
						+'<div class="col-sm-3" style="padding: 0px;">이유진</div>'
						+'<div class="col-sm-7" style="padding: 0px;">회원관리</div>'
					+'</div>'
				+'</div>'
			+'</div>'
		+'</div>'
		+'<div class="col-sm-4">'
			+'<div class="thumbnail" style="padding: 25px; min-height: 400px; box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">'
				+'<div style="border-top: 5px solid #333; border-bottom: 5px solid #333; margin-bottom: 20px;">		'
					+'<p style="font-size: 28px; font-weight: bold; padding: 5px; margin: 0px;">'
						+'<span class="fa fa-check" style="color: #5CB85C;"></span>&nbsp;Our Technique'
					+'</p>'
				+'</div>'
				+'<div class="text-left" style="font-size: 18px; line-height: 30px">'
					+'<p>A&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : &nbsp;&nbsp;JQuery</p>'
					+'<p>A-1&nbsp;&nbsp; : &nbsp;&nbsp;Ajax</p>'
					+'<p>A-2&nbsp;&nbsp; : &nbsp;&nbsp;MagnificPopup</p>'
					+'<p>B&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : &nbsp;&nbsp;RESTful</p>'
					+'<p>C&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : &nbsp;&nbsp;Bootstrap</p>'
				+'</div>'
			+'</div>'
		+'</div>'
	+'</div>'
+'</div>'
+'</div>';
};
var createATag=x=>{
	return '<a id="'+x.id+'" class="'+x.clazz+'" href="#">'+x.val+'</a>';
};
var createITag=x=>{
	return '<i id="'+x.id+'" class="'+x.clazz+'"></i>';
};
var createGlyphicon=x=>{
	return '<span class="glyphicon ' +x.clazz+'" aria-hidden="true">&nbsp;'+x.val+'</span>'
};
var createSpan=x=>{
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

var createUL=x=>{
	return '<ul id="'+x.id+'" class="'+x.clazz+'"></ul>';
	}
var createLI=x=>{
	return '<li id="'+x.id+'" class="'+x.clazz+'"></li>';
}
var createInput=x=>{
	return '<input type="'+x.type+'" id="'+x.id+'"class="'+x.clazz+'" value="'+x.value+'">';
}
var createBtn=x=>{
	return '<button id="'+ x.id +'" class="'+ x.clazz +'">'+ x.val +'</button>';
};
var createForm=x=>{
	return '<form id="'+ x.id +'" class="'+ x.clazz + '" action="'+ x.action +'" method="'+ x.method +'"></form>';
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