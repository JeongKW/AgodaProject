//Common Tag for Dynamic
var createSelect=x=>{
	return '<select id="'+x.id+'" class="'+x.clazz+'"></select>'
}
var createOption =x=>{
	return '<option id="'+x.id+'" class="'+x.clazz+'" value="'+x.val+'">'+x.txt+'</option>'
}
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
	var headCount = x.headCount;
	var li = '<div>';
	$.each(x.list, (i, j)=>{
		 li += '<li id="resi-lists-li-'+i+'" class="resi-lists-li" name="'+j.resCode+'" style="margin-top: 20px">'
				+'<div class="resi-lists-li-div" style="min-height: 250px; margin-top: 10px; border-top: 10px solid rgba(255, 0, 0, 0.2);'
				+'box-shadow: 2px 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">'
					+'<div class="col-sm-4" style="padding-left: 0px">'
						+'<img src="https://goo.gl/rvz1Vu" style="max-width: 100%" />'
					+'</div>'
					+'<div class="col-sm-4" style="padding-left: 0px">'
						+'<ul style="list-style-type: none; padding-left: 0px">'
							+'<li style="font-size: 20px">'
								+'<h2>'+j.name+'</h2>'
							+'</li>'
							+'<li id="resi-star-list" style="font-size: 30px">'
								for(var s=1; s<=5; s++){
									if(s <= j.starRating){
										li+= '<span class="fa fa-star checked-resi-star"></span>'
									}
								}
							li +='</li>'
							+'<li style="font-size: 20px">'
							+'<p style="color: red">12시간 전 예약됨</p>'
							+'</li>'
							+'<li >'
								+'<div class="row">'
									+'<div class="col-sm-5">'
										+'<p style="padding: 5px 10px;  background: #63C355; color: #fff; font-weight: bold;">이용가능</p>'							
									+'</div>'	
									+'<div class="col-sm-7" style="padding-left: 0px">'
										+'<p style="padding: 5px; font-size: 15px; font-weight: bold; color: #333">'
										+'<i class="fa fa-coffee" style="font-size: 15px ; color: #333"></i>'
											+addBreakFast(j.breakfast)
										+'</p>'							
									+'</div>'	
								+'</div>'	
							+'</li>'
						+'</ul>'
					+'</div>'
					+'<div class="col-sm-4">'
						+'<div class="text-right" style="margin-top: 20px;">'
							+'<span class="badge" style="background: lightblue; color: #333; font-size: 12px">총 '+j.viewNum+'건의 조회수</span>&nbsp;&nbsp;&nbsp;'
							+'<span><a style="font-size: 20px; background: #333; color: #fff;'
								+'padding: 10px; text-decoration: none;">'+j.ratingScore+'</a></span>'
						+'</div>'
						+'<button id="resi-move-reservation-btn" class="btn btn-danger" style="margin-top: 20px; float: right; font-weight: bold; ">지금 예약하기</button>'
						+'<div style="margin-top: 70px; text-align: right">'
							+'<span style="font-size:12px; color: #333;">'
							+ '1박당 요금: <i class="fa fa-krw" style="font-size:10px; color: #333;"></i>'
							+ addComma(j.price)
							+'</span>'
						+'</div>'
						+'<div style="margin-top: 10px; text-align: right">'
							+'<span style="font-size:12px; color: #333;">'
							+ '총 ' +headCount+'명 숙박 시 금액'
							+'</span>'
						+'</div>'
						+'<div style="margin-top: 2px; text-align: right">'					
							+'<i class="fa fa-krw" style="font-size:20px; color: #333;"></i>'
							+'<span style="font-size:25px; color: #EE595D;">'
							+ addComma(j.price * headCount)
							+'</span>'
						+'</div>'
					+'</div>'
				+'</div>'
			+'</li>';
	})
	li += "</div>"
	function addBreakFast(str){
		var result;
		if(str == "true") {
			result = ' 조식 포함'
		} else {
			result = ' 조식 미포함'
		}
		return result;
	}
	function addComma(num) {
		var len, point, str;
		num = num + "";
		point = num.length % 3;
		len = num.length;
		str = num.substring(0, point);
		while(point < len) {
			if(str != "") {
				str += ",";
			}
			str += num.substring(point, point +3);
			point += 3;
		}
		return str;
	}
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
var createLabel=x=>{
	return '<label id="'+x.id+'" class="'+x.clazz+'"></label>';
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

var createResiReserPage=x=>{
	var page;
	page = '<div class="container" style="margin-top: 20px; margin-bottom: 200px;">'
		+'<div class="row">'
		+'<div class="col-sm-8">'
			+'<div class="card" style="border-left: 7px solid red; padding: 10px;'
			+'box-shadow: 2px 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">'
				+'<p>지금 예약하세요! 본 객실 및 요금은 한정 특가 상품입니다!</p>'
				+'<p>*체크인까지 단 9일* 요금이 인상될 수 있으니 지금 바로 예약하세요!</p>'
			+'</div>'
			+'<div class="card" style="margin-top: 15px; padding: 20px; border-top: 7px solid #333;'
			+'box-shadow: 2px 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">'
				+'<h4 style="font-weight: bold">고객님의 정보를 입력해 주세요.</h4>'
				+'<div class="row">'
					+'<div class="col-sm-6">'
						+'<p>영문 이름(Fisrt Name)</p>'
						+'<input id="resi-reser-fristName" type="text" name="" class="form-control" value="YONGDAE">'
					+'</div>'
					+'<div class="col-sm-6">'
						+'<p>영문 성(Last Name)</p>'
						+'<input id="resi-reser-lastName" type="text" name="" class="form-control" value="KIM">'
					+'</div>'
				+'</div>'
				+'<div class="row" style="margin-top: 20px">'
					+'<div class="col-sm-12">'
						+'<p>이메일(eamil)</p>'
						+'<input id="resi-reser-email" type="text" name="" class="form-control" value="anti2110@naver.com">'
					+'</div>'
				+'</div>'
				+'<div class="row" style="margin-top: 20px">'
					+'<div class="col-sm-6">'
						+'<p>휴대 전화 번호</p>'
						+'<input id="resi-reser-phone" type="text" name="" class="form-control" value="010-3453-4435">'
					+'</div>'
					+'<div class="col-sm-6">'
						+'<p>거주 국가</p>'
						+'<select class="custom-select form-control" id="resi-reser-country">'
							+'<option>대한민국</option>'
							+'<option>미국</option>'
							+'<option>중국</option>'
							+'<option>스페인</option>'
						+'</select>'
					+'</div>'
				+'</div>'
				+'<div class="" style="margin-top: 20px">'
					+'<input id="resi-reser-info-confirm" type="checkbox" name="">&nbsp;&nbsp;'
					+'<label for="resi-reser-info-confirm"> 예약자와 투숙자가 다를 경우 클릭해서 투숙객 정보를 입력해 주세요.</label>'
				+'</div>'
				+'<div id="resi-reser-info-confirm-result" class="" style="background: #e9e9e9; padding: 20px; margin-top: 10px; display: none;">'
					+'<div class="row">'
						+'<div class="col-sm-6">'
							+'<p>영문 이름(Fisrt Name)</p>'
							+'<input id="resi-reser-fristName-other" type="text" name="" class="form-control">'
						+'</div>'
						+'<div class="col-sm-6">'
							+'<p>영문 성(Last Name)</p>'
							+'<input id="resi-reser-lastName-other" type="text" name="" class="form-control">'
						+'</div>'
					+'</div>'
					+'<div class="row" style="margin-top: 20px">'
						+'<div class="col-sm-6">'
						+'<p>거주 국가</p>'
							+'<select class="custom-select form-control">'
								+'<option selected>대한민국</option>'
								+'<option value="1">미국</option>'
								+'<option value="2">중국</option>'
								+'<option value="3">스페인</option>'
							+'</select>'
						+'</div>'
					+'</div>'
				+'</div><hr/>'
				+'<h4 style="font-weight: bold; margin-top: 20px">특별 요청하기</h4>'
				+'<p>고객님의 특별 요청 사항을 해당 숙소 또는 호스트에게 예약 완료 즉시 전달하겠습니다.</p>'
				+'<a id="resi-reser-add-other-info" style="text-decoration: none; color: #000">'
				+'<span id="resi-reser-add-other-info-span" class="fa fa-plus-circle"></span> 특별 요청 사항 입력하기</a>'
				+'<div id="resi-reser-add-other-info-result" class="" style="width:100%; border: 1px solid #333; padding: 10px; display: none;">'
					+'<p>모든 특별 요청 사항 반영 여부는 여건에 따라 달라질 수 있습니다.</p>'
					+'<div class="row">'
						+'<div class="col-sm-6">'
							+'<label><input type="checkbox" name=""><span> 금연 객실을 원합니다.</span></label><br>'
							+'<label><input type="checkbox" name=""><span> 고층 객실을 원합니다.</span></label><br>'
							+'<label><input type="checkbox" name=""><span> 큰 침대를 원합니다.</span></label>'
						+'</div>'
						+'<div class="col-sm-6">'
							+'<label><input type="checkbox" name=""><span> 트윈베드를 원합니다.</span></label><br>'
							+'<label><input type="checkbox" name=""><span> 조용한 객실을 원합니다.</span></label><br>'
							+'<label><input type="checkbox" name=""><span> 유아용 침대를 신청합니다.<p style="margin-left: 20px">(추가 요금이 부과될 +수도 있습니다)</p></span></label>'
						+'</div>'
					+'</div>'
					+'<hr>'
					+'<label><input type="checkbox" name=""><span> 공항 이동 교통편 서비스를 원합니다.</span></label><br>	'
					+'<hr>									'
				+'</div><hr/>'
				+'<div>'
					+'<h4 style="font-weight: bold; margin-top: 20px">숙소 도착 예정 시간</h4>'
					+'<p>더 원활한 체크인을 위해 숙소 도착 예정 시간을 숙소 혹은 호스트에게 전달해 드립니다.</p>'
					+'<div class="row">'
						+'<div class="col-sm-6">'
							+'<select id="resi-arrival-time-select-option" class="custom-select form-control">'
							+'<option>미정</option>'
							+'<option>00.00 ~ 01.00</option>'
							+'<option>01.00 ~ 02.00</option>'
							+'<option>02.00 ~ 03.00</option>'
							+'<option>03.00 ~ 04.00</option>'
							+'<option>04.00 ~ 05.00</option>'
							+'<option>05.00 ~ 06.00</option>'
							+'<option>06.00 ~ 07.00</option>'
							+'<option>07.00 ~ 08.00</option>'
							+'<option>08.00 ~ 09.00</option>'
							+'<option>09.00 ~ 10.00</option>'
							+'<option>10.00 ~ 11.00</option>'
							+'<option>11.00 ~ 12.00</option>'
							+'<option>12.00 ~ 13.00</option>'
							+'<option>13.00 ~ 14.00</option>'
							+'<option>14.00 ~ 15.00</option>'
							+'<option>15.00 ~ 16.00</option>'
							+'<option>16.00 ~ 17.00</option>'
							+'<option>17.00 ~ 18.00</option>'
							+'<option>18.00 ~ 19.00</option>'
							+'<option>19.00 ~ 20.00</option>'
							+'<option>20.00 ~ 21.00</option>'
							+'<option>21.00 ~ 22.00</option>'
							+'<option>22.00 ~ 23.00</option>'
							+'<option>23.00 ~ 00.00</option>'
/*								for(var i=0; i<=23; i++){
									if(i<10) {
										page += '<option value="'+i+'">0'+i+'.00 ~ '+(i+1)+'.00</option>'										
									} else {
										page += '<option value="'+i+'">'+i+'.00 ~ '+(i+1)+'.00</option>'																				
									}									
								};*/
						+ '</select>'
						+'</div>'
					+'</div>'
				+'</div>'
				+'<div style="margin-top: 20px">'
					+'<p>계속 진행함으로써 아고다의 이용 약관 및 개인정보 처리방침에 동의합니다.</p>'
				+'</div>'
			+'</div>'
			/* 결제 정보*/
			+'<div class="card" style="border-left: 7px solid lightblue; padding: 10px; margin-top: 15px;'
			+'box-shadow: 2px 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">'
				+'<h4 style="font-weight: bold; margin-top: 20px">결제정보</h4>'
+'					<div class="row" style="margin: 0px; margin-top: 20px; border-bottom: 2px solid gray;">'
+'						<div class="col-sm-3" style="background: #e9e9e9; height: 180px; padding: 20px;">'
+'							결제수단 선택'
+'						</div>'
+'						<div class="col-sm-9" style="padding: 0px;">'
+'							<div class="row" style="margin: 0px;">'
+'								<div class="col-sm-4">'
+'									<input type="radio" name="resi-card-kind" checked>'
+'									<span>신용카드(일반)</span>'
+'								</div>	'
+'								<div class="col-sm-4">'
+'									<input type="radio" name="resi-card-kind">'
+'									<span>제휴신용카드</span>'
+'								</div>'
+'								<div class="col-sm-4">'
+'									<input type="radio" name="resi-card-kind">'
+'									<span>해외발급신용카드</span>'
+'								</div>'
+'							</div>'
+'							<div class="row" style="margin: 0px; margin-top: 10px;">'
+'								<div class="col-sm-4">'
+'									<input type="radio" name="resi-card-kind">'
+'									<span>카카오페이</span>'
+'								</div>	'
+'								<div class="col-sm-4">'
+'									<input type="radio" name="resi-card-kind">'
+'									<span>페이나우</span>'
+'								</div>'
+'								<div class="col-sm-4">'
+'								</div>'
+'							</div>'
+'							<div class="row" style="margin: 0px; margin-top: 10px;">'
+'								<div class="col-sm-4">'
+'									<input type="radio" name="resi-card-kind">'
+'									<span>실시간 계좌이체</span>'
+'								</div>	'
+'								<div class="col-sm-4">'
+'									<input type="radio" name="resi-card-kind">'
+'									<span>휴대폰 결제</span>'
+'								</div>'
+'								<div class="col-sm-4">'
+'								</div>'
+'							</div>'
+'							<div class="row" style="margin: 0px; margin-top: 20px">'
+'								<div class="col-sm-2">'
+'									<span>카드선택</span>'
+'								</div>'
+'								<div class="col-sm-4">'
+'									<select id="resi-card-select-option" class="form-control">'
+'										<option>미정</option>'
+'										<option>신한카드(구LG)</option>'
+'										<option>하나카드</option>'
+'										<option>우리카드</option>'
+'										<option>국민카드</option>'
+'									</select>'
+'								</div>'
+'								<div class="col-sm-2">'
+'									<span>할부기간</span>'
+'								</div>'
+'								<div class="col-sm-4">'
+'									<select id="resi-installment-select-option" class="form-control">'
+'										<option selected>일시불</option>'
+'										<option>1개월</option>'
+'										<option>3개월</option>'
+'										<option>6개월</option>'
+'										<option>12개월</option>'
+'									</select>'
+'								</div>'
+'							</div>'
+'							<div class="row" style="padding-bottom: 6px; margin: 0px; margin-top: 20px; margin-bottom: 10px; border-bottom: 2px solid +gray;">'
+'								<div class="col-sm-2">'
+'									<span>카드구분</span>'
+'								</div>'
+'								<div class="col-sm-3">'
+'									<input type="radio" name="resi-card-kind-pers" checked>&nbsp;<span>개인 카드</span>'
+'								</div>'
+'								<div class="col-sm-3">'
+'									<input type="radio" name="resi-card-kind-corp">&nbsp;<span>법인 카드</span>'
+'								</div>'
+'							</div>'
+'</div>'
+'</div>'

+'						<div class="row" style="margin: 0px; margin-top: 18px;">'
+'							<div class="col-sm-3" style="background: #e9e9e9; padding: 20px;">'
+'								결제/이벤트 안내'
+'							</div>'
+'							<div class="col-sm-9">'
+'								<div>'
/*+'									<h4 style="color: #333; font-weight: bold; text-align: center;">여행을 사진을 올리고 여행상품권에 응모하세요~!!</h4>'
+'									<form id="dropFileForm" action="" method="" style="text-align: center; border-radius: 8px; overflow: hidden; transition: .5s;">'
+'										<input id="fileInput" type="file" name="files[]" style="display: none;">'
+'										<label for="fileInput" id="fileLabel"'
+'										style="background-color: rgba(255, 255, 0, 0.5); display: block; padding: 16px; position: relative; cursor: pointer;">'
+'											<i class="fa fa-download fa-3x"></i><br/>'
+'											<span id="fileLabelText">Choose a file...</span><br/>'
+'											<span id="uploadStatus"></span>'
+'										</label>'
+'										<input class="uploadButton" type="submit" value="Upload" name="" '
+'											style="font-weight: bold; border: 0; outline: 0; width: 100%; padding: 8px; background: #333; color: #fff; cursor: pointer;">'
+'									</form>'*/
+'								</div>'
+'							</div>'
+'						</div>'

			+'</div>'			
		+'</div>'

		+'<div class="col-sm-4">'
			+'<div class="card" style="padding: 10px;'
			+'box-shadow: 2px 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">'
				+'<span style="font-size: 30px;">'+x.list.name+'</span>'
				+'<span><a style="font-size: 20px; background: #333; color: #fff;'
				+'padding: 10px; text-decoration: none; float: right;">'+x.list.ratingScore+'</a></span>'
				+'<div style="font-size: 30px; margin-top: 10px;">'
					for(var s=1; s<=5; s++){
						if(s <= x.list.starRating){
							page += '<span class="fa fa-star checked-resi-star"></span>'
						} else {
							page += '<span class="fa fa-star"></span>'
						}
					}
			page += '</div>'
				+'<p margin-top: 10px;>'+x.list.zipcode+'</p>'
			+'</div>'
			+'<div class="card" style="padding: 10px; margin-top: 15px;'
			+'box-shadow: 2px 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">'
				+'<div class="row">'
					+'<div class="col-sm-5 text-center">'
						+'<p>체크인</p>'
						+'<div>'
							+'<span style="font-size: 50px; font-weight: bold;">'+dateChange(x.checkIn.substring(8, 10))+'</span>&nbsp;&nbsp;'
							+'<span style="font-size: 15px;"><p>'+getDay(x.checkIn)+'</p>'
							+dateChange(x.checkIn.substring(5, 7))+'월 '+x.checkIn.substring(0, 4)+'</span>&nbsp;'
						+'</div>'
					+'</div>'
					+'<div class="col-sm-2 text-center">'
						+'<span class="fa fa-arrow-right" style="font-size: 20px; margin-top: 40px"></span>'
					+'</div>'
					+'<div class="col-sm-5 text-center">'
						+'<p>체크아웃</p>'
						+'<div>'
							+'<span style="font-size: 50px; font-weight: bold;">'+dateChange(x.checkOut.substring(8, 10))+'</span>&nbsp;&nbsp;'
							+'<span style="font-size: 15px;"><p>'+getDay(x.checkOut)+'</p>'
							+dateChange(x.checkOut.substring(5, 7))+'월 '+x.checkOut.substring(0, 4)+'</span>&nbsp;'
						+'</div>'
					+'</div>'
				+'</div>'
				+'<hr>'
				+'<h4>객실 정보</h4>'
				+'<div>'
					+'<table>'
						+'<tr><td style="width: 30%">객실: </td><td>1 x 슈페리어 (룸 온리) (Superior Room Only)</td></tr>'
						+'<tr><td>숙박정보: </td><td><strong style="color: #333;">'+countDate(x.checkIn, x.checkOut)+'박</strong>'
						+', 객실 1개, <strong style="color: #333;">성인 '+x.headCount+'명</strong></td></tr>'
						+'<tr><td>최대인원: </td><td>성인 2명</td></tr>'
						+'<tr><td>객실크기: </td><td>36 m²</td></tr>'
						+'<tr><td>정책: </td><td>환불 불가</td></tr>'
					+'</table>'
				+'</div>'
			+'</div>'
			+'<div class="card" style="border-left: 7px solid green; padding: 10px; margin-top: 15px;'
			+'box-shadow: 2px 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">'				
				+'<span style="font-size: 18px; font-weight: bold; line-height: 30px;">숙소위치 보기</span>'
				+'<div id="resi-map" style="width: 100%; height: 200px;"></div>'
			+'</div>'
			+'<div class="card" style="padding: 10px; margin-top: 15px; border: 7px solid rgba(255,0,0,0.2);'
			+'box-shadow: 2px 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">'
				+'<span style="font-size: 30px;">가격 확인</span>'
				+'<div class="row">'
					+'<div class="col-sm-7">'
						+'<p>가격 확인</p>'
					+'</div>'
					+'<div class="col-sm-5">'
						+'<p style="text-align: right;"><i class="fa fa-krw"></i>'+addComma(x.list.price)+'</p>'
					+'</div>'
				+'</div>'
				+'<div class="row">'
					+'<div class="col-sm-7">'
						+'<p>예약 수수료</p>'
					+'</div>'
					+'<div class="col-sm-5">'
						+'<p style="text-align: right;">없음</p>'
					+'</div>'
				+'</div>'
				+'<hr>'
				+'<div class="row">'
					+'<div class="col-sm-5">'
						+'<p style="font-size: 20px; font-weight: bold">합계</p>'
					+'</div>'
					+'<div class="col-sm-7">'
						+'<p style="text-align: right; font-size: 20px; font-weight: bold">'
						+'<i class="fa fa-krw"></i>'+addComma(x.headCount*x.list.price)+'</p>'
						
					+'</div>'
				+'</div>'
			+'</div>'
			
			+'<div id="resi-reser-pay-btn" class="card btn-danger text-center" data-toggle="modal" data-target="#resiPayModal"'
			+'style="padding: 10px; margin-top: 15px; font-size:40px; font-weight: bold;'
			+'box-shadow: 2px 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); cursor: pointer">'
			+'결제하기</div>'
			
			// 정보 미입력시 알러트 창 띄우
			+'<div id="dangerMessage" class="alert alert-danger" style="display: none; border-radius: 0px;'
			+'padding: 10px; margin-top: 15px; font-size:20px; font-weight: bold;'
			+'box-shadow: 2px 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);"'
			+'></div>'
	
			+  '<div class="modal fade" id="resiPayModal" role="dialog">'
			+    '<div class="modal-dialog">'
			+      '<div class="modal-content">'
			+        '<div class="modal-header">'
			+          '<button id="resi-payment-modal-close-btn-times" type="button" class="close" data-dismiss="modal">&times;</button>'
			+          '<span class="fa fa-check" style="font-size: 24px; font-weight: bold; color: red;"></span>&nbsp;&nbsp;&nbsp;'
			+          '<span style="font-size: 24px; font-weight: bold;">예약 및 주문내역 확인</span>'
			+        '</div>'
			+        '<div class="modal-body">'
			+          '<div class="well" style="background: rgba(255,0,0,0.1); padding: 10px;">'
			+          		'<span class="fa fa-check-circle" style="font-size: 16px; line-height: 24px;"></span>&nbsp;&nbsp;&nbsp;'
			+          		'<span style="font-size: 16px; font-weight: bold; line-height: 24px;">감사합니다. '
			+				sessionStorage.getItem('user')+' 님! 결제가 완료되었습니다.</span><br/>'							
			+          		'<span style="font-size: 13px; line-height: 24px;">anti2110@naver.com 주소로 확인 이메일을 보내드렸습니다.'
			+					' 다시 전화로 확인하실 필요가 없습니다. 편안한 숙박되세요.</span><br/>'							
			+          		'<span style="font-size: 14px; font-weight: bold; line-height: 24px;">예약번호:</span>&nbsp;'
			+				'<span id="resi-reservation_seq" style="font-size: 14px; font-weight: bold; line-height: 24px;"></span>'
			+				'<br/>'							
			+          '</div>'
			+          '<div class="well" style="padding: 10px; border: 0px;">'
			+          		'<div class="row">'	
			+          			'<div class="col-sm-4">'
			+						'<img src="https://goo.gl/rvz1Vu" style="max-width: 100%" />'		
			+          			'</div>'		
			+          			'<div class="col-sm-8">'							
			+          				'<span style="font-size: 20px; font-weight: bold; line-height: 30px;">'+x.list.name+'&nbsp;&nbsp;('
										for(var s=1; s<=5; s++){
											if(s <= x.list.starRating){
												page += '<span class="fa fa-star checked-resi-star"></span>&nbsp;'
											} else {
												page += '<span class="fa fa-star"></span>&nbsp;'
											}
										}			
		page += 					')</span><br/><br/>'	
			+          				'<span class="fa fa-print" style="font-size: 18px; line-height: 30px;"></span>&nbsp;&nbsp;&nbsp;'
			+          				'<span id="resi-go-print-span" style="font-size: 16px; font-weight: bold; line-height: 30px; cursor: pointer;">내 예약 인쇄</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'													
			+          				'<span class="fa fa-share" style="font-size: 18px; line-height: 30px;"></span>&nbsp;&nbsp;&nbsp;'
			+          				'<span id="resi-send-mail-span" style="font-size: 16px; font-weight: bold; line-height: 30px; cursor: pointer;">내 예약 메일로 보내기</span><br/>'													
			+          				'<span class="fa fa-calendar-o"" style="font-size: 18px; line-height: 30px;"></span>&nbsp;&nbsp;&nbsp;'
			+          				'<span id="resi-go-mypage-span" style="font-size: 16px; font-weight: bold; line-height: 30px; cursor: pointer;">내 예약 관리</span><br/>'													
			+          			'</div>'		
			+          		'</div>'								
			+          '</div>'
			+          	'<div class="row" style="margin: 10px">'	
			+          		'<div class="col-sm-3">'
			+					'<span style="font-size: 14px; font-weight: bold;">체크인</span>'		
			+          		'</div>'		
			+          		'<div class="col-sm-3 text-right">'																	
			+					'<span style="font-size: 14px;">'+x.checkIn+'</span>'		
			+       		'</div>'
			+          		'<div class="col-sm-3">'
			+					'<span style="font-size: 14px; font-weight: bold;">체크아웃</span>'		
			+          		'</div>'		
			+          		'<div class="col-sm-3 text-right">'																	
			+					'<span style="font-size: 14px;">'+x.checkOut+'</span>'		
			+       		'</div>'	
			+          	'</div>'
			+          	'<hr/ style="margin: 0px 24px; border: 0.5px solid #333;">'
			+          	'<div class="row" style="margin: 10px">'	
			+          		'<div class="col-sm-3">'
			+					'<span style="font-size: 14px; font-weight: bold;">결제카드</span>'		
			+          		'</div>'		
			+          		'<div class="col-sm-3 text-right">'																	
			+					'<span class="fa fa-credit-card" style="font-size: 14px; color: gold;"></span>&nbsp;&nbsp;'		
			+					'<span id="resi-card-select-modal-span" style="font-size: 14px;"></span>'		
			+       		'</div>'		
			+          		'<div class="col-sm-3">'
			+					'<span style="font-size: 14px; font-weight: bold;">할부기간</span>'		
			+          		'</div>'		
			+          		'<div class="col-sm-3 text-right">'																	
			+					'<span id="resi-installment-select-modal-span" style="font-size: 14px;"></span>'		
			+       		'</div>'		
			+          	'</div>'
			+          	'<hr/ style="margin: 0px 24px; border: 0.5px solid #333;">'
			+          	'<div class="row" style="margin: 10px">'
			+          		'<div class="col-sm-3">'
			+					'<span style="font-size: 14px; font-weight: bold;">도착예정 시간</span>'		
			+          		'</div>'		
			+          		'<div class="col-sm-3 text-right">'																	
			+					'<span id="resi-arrival-time-select-modal-span" style="font-size: 14px;"></span>'		
			+       		'</div>'		
			+          		'<div class="col-sm-3">'
			+					'<span style="font-size: 14px; font-weight: bold;">지불된 총 금액</span>'		
			+          		'</div>'		
			+          		'<div class="col-sm-3 text-right">'																	
			+					'<span class="fa fa-krw"></span>&nbsp;'		
			+					'<span style="font-size: 14px; font-weight: bold; color: red;">'+addComma(x.headCount*x.list.price)+'</span>'		
			+       		'</div>'		
			+          	'</div>'
			+          	'<hr/ style="margin: 0px 24px; margin-bottom: 20px; border: 0.5px solid #333;">'
			// 예약자 정보 구현
			+			'<span class="fa fa-check" style="font-size: 16px; font-weight: bold; margin: 5px; color: green;"></span>'
			+			'<span style="font-size: 16px; font-weight: bold; margin: 5px; color: green;">예약자 확인</span>'
			+          	'<div class="row" style="margin: 10px">'	
			+          		'<div class="col-sm-3">'
			+					'<span style="font-size: 14px; font-weight: bold;">성명</span>'		
			+          		'</div>'		
			+          		'<div class="col-sm-1 text-right">'																	
			+					'<span></span><span id="resi-lastName-modal-span" style="font-size: 14px;"></span>'	
			+       		'</div>'		
			+          		'<div class="col-sm-2 text-right">'																	
			+					'<span></span><span id="resi-firstName-modal-span" style="font-size: 14px;"></span>'
			+       		'</div>'	
			+          		'<div class="col-sm-3">'
			+					'<span style="font-size: 14px; font-weight: bold;">전화번호</span>'		
			+          		'</div>'		
			+          		'<div class="col-sm-3 text-right">'																	
			+					'<span><span id="resi-phone-modal-span" style="font-size: 14px;"></span>'	
			+       		'</div>'
			+          	'</div>'
			+          	'<hr/ style="margin: 0px 24px; border: 0.5px solid #333;">'
			+          	'<div class="row" style="margin: 10px">'	
			+          		'<div class="col-sm-3">'
			+					'<span style="font-size: 14px; font-weight: bold;">이메일</span>'		
			+          		'</div>'		
			+          		'<div class="col-sm-9 text-right">'																	
			+					'<span><span id="resi-email-modal-span" style="font-size: 14px;"></span>'	
			+       		'</div>'	
			+          	'</div>'

			+      '</div>' //모달 바디 끝
			+        '<div class="modal-footer">'
			+          '<button id="resi-payment-modal-close-btn" type="button" class="btn btn-danger" data-dismiss="modal" aria-hidden="true">Close</button>'
			+        '</div>'
			+      '</div>'
			+    '</div>'
			+  '</div>  '
			+'</div>'
			
		+'</div>'
	+'</div>'
	+'</div>'
	// 일 수 계산
	function countDate(checkIn, checkOut){			
		var startDate = new Date(checkIn.split("-")[0], checkIn.split("-")[1]-1, checkIn.split("-")[2]);
		var endDate = new Date(checkOut.split("-")[0], checkOut.split("-")[1]-1, checkOut.split("-")[2]);					
		return (endDate.getTime()-startDate.getTime())/(1000*60*60*24);
	}
	// 숫자 콤마 넣기		
	function addComma(num) {
		var len, point, str;
		num = num + "";
		point = num.length % 3;
		len = num.length;
		str = num.substring(0, point);
		while(point < len) {
			if(str != "") {
				str += ",";
			}
			str += num.substring(point, point +3);
			point += 3;
		}
		return str;
	}
	// 날짜 형식 변환
	function dateChange(x){
		var result;
		if(x < 10) {
			result = x.substring(1,2);
		} else {
			result = x;
		}
		return result;
	}
	// 요일 가져오기
	function getDay(x){
		var week = new Array('일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일');
		var day = new Date(x).getDay();
		var dayLabel = week[day];
		return dayLabel;
	}	
	return page;
} 

var createSerahNav=x=>{
	return '<div class="container">'
	+'		<div class="row">'
	+'			<div class=" col-sm-4" style="padding-left: 0px;">'
	+'			  <div class="input-group">'
	+'			    <input id="resi-search-nav-word" type="text" class="form-control" placeholder="" value="'+x.searchWord+'">'
	+'			    <div class="input-group-btn">'
	+'			      <button class="btn btn-default" type="submit">'
	+'			        <i class="glyphicon glyphicon-search"></i>'
	+'			      </button>'
	+'			    </div>'
	+'			  </div>'
	+'			</div>'
	+'			<div class="col-sm-4">'
	+'	            <div class="input-group" id="" data-data-format="mm-dd-yyyy">'
	+'	                <input id="resi-search-nav-daterange" type="text" name="daterange" class="form-control" />'
	+'	                <span class="input-group-addon">'
	+'	                    <span class="glyphicon glyphicon-calendar"></span>'
	+'	                </span>'
	+'	            </div>'
	+'			</div>'
	+'			<div class="col-sm-2">'
	+'	            <div class="input-group">'
	+'	                <span id="resi-search-nav-minus" class="input-group-addon" style="cursor: pointer">'
	+'	                    <span class="glyphicon glyphicon-minus"></span>'
	+'	                </span>'
	+'	                <span id="resi-spec-count" class="input-group-addon" style="background: #fff">'+x.headCount
	+'	                </span>'
	+'	                <span id="resi-search-nav-plus" class="input-group-addon" style="cursor: pointer">'
	+'	                    <span class="glyphicon glyphicon-plus"></span>'
	+'	                </span>'
	+'	            </div>'
	+'			</div>'
	+'			<div class="col-sm-2 text-right" style="padding-right: 0px;">'
	+'				<button id="btn" class="btn btn-primary">요금 검색하기</button>'
	+'			</div>'
	+'		</div>'
	+'	</div>'
}
