var flight=()=>{
	return '<div class="container-fluid" style="background-color: #333; padding: 20px">'
	  +'<div class="container">'
	    +'<div class="row">'
	      +'<div class=" col-sm-4">'
	        +'<div class="input-group">'
	          +'<input type="text" class="form-control" placeholder="Search">'
	          +'<div class="input-group-btn">'
	            +'<button class="btn btn-default" type="submit">'
	              +'<i class="glyphicon glyphicon-search"></i>'
	            +'</button>'
	          +'</div>'
	        +'</div>'
	      +'</div>'
	      +'<div class="col-sm-2">'
	              +'<div class="input-group date" id="fromDate" data-data-format="mm-dd-yyyy">'
	                  +'<input type="text" name="daterange" class="form-control" />'
	                  +'<span class="input-group-addon">'
	                      +'<span class="glyphicon glyphicon-calendar"></span>'
	                  +'</span>'
	              +'</div>'
	      +'</div>'
	      +'<div class="col-sm-2">'
	              +'<div class="input-group date" id="toDate" data-data-format="mm-dd-yyyy">'
	                  +'<input type="text" class="form-control" />'
	                  +'<span class="input-group-addon">'
	                      +'<span class="glyphicon glyphicon-calendar"></span>'
	                  +'</span>'
	              +'</div>'
	      +'</div>'
	      +'<div class="col-sm-2">'
	        +'<input class="form-control" type="" name="" placeholder="hello">'
	      +'</div>'
	      +'<div class="col-sm-2">'
	        +'<button id="btn" class="btn btn-primary">요금 검색하기</button>'
	      +'</div>'
	    +'</div>'
	  +'</div>'
	+'</div>'
	+'<div class="row">'
	  +'<div class="leftcolumn">'
	    +'<div class="card">'
	      +'<h2>About Me</h2>'
	      +'<div class="fakeimg" style="height:100px;">Image</div>'
	      +'<p>Some text about me in culpa qui officia deserunt mollit anim..</p>'
	    +'</div>'
	    +'<div class="card">'
	      +'<h3>Popular Post</h3>'
	      +'<div class="fakeimg"><p>Image</p></div>'
	      +'<div class="fakeimg"><p>Image</p></div>'
	      +'<div class="fakeimg"><p>Image</p></div>'
	    +'</div>'
	    +'<div class="card">'
	      +'<h3>Follow Me</h3>'
	      +'<p>Some text..</p>'
	    +'</div>'
	  +'</div>'
	  +'<div class="midcolumn">'
	+''
	    +'<div class="list" style="margin-top: 20px;">'
	      +'<div class="">'
	        +'<section style="min-height: 200px">'
	          +'<div class="card" style="margin-top: 0px; min-width: 80%; min-height: 200px; float: left; border-right: 1px solid #e4e5ea;">'
	            +'<!-- 출발 항공편 -->'
	                  +'<div style="">'
	                      +'<div>'
	                        +'<div style="width: 70px; text-align: center; float: left;">'
	                            +'<img style="width: 25px" src="https://a1.r9cdn.net/rimg/provider-logos/airlines/v/ZE.png?crop=false&amp;width=108&amp;height=92&amp;fallback=default1.png&amp;_v=7680ca6f4486e71450343d0d72d58ce225845fba" alt="이스타항공 로고">'
	                            +'<br> '
	                            +'이스타'
	                        +'</div>'
	                          +'<div style="float: left; margin-left: 10%;">'
	                             +'<p style="">'
	                              +'17:05 <br>'
	                              +'ICN'
	                             +'</p>'
	                          +'</div>'
	                           +'<div style="width: 80px; margin-left: 5%; margin-top: 10px; border-top: 2px solid #e4e5ea; float: left;">'
	                          +'</div>'
	                            +'<div style="float: left; margin-left: 5%;">'
	                             +'<p style="">'
	                              +'17:05 <br>'
	                              +'ICN'
	                             +'</p>'
	                          +'</div>'
	                            +'<div style="float: left; margin-left: 15%;">'
	                             +'<p style="">'
	                                +'2시간 20분 '
	                             +'</p>'
	                          +'</div>'
	                        +'</div>'
	                      +'<div>'
	                    +'</div>'
	                  +'</div>'
	              +'<!-- 도착 항공편 -->'
	              +'<div style="width: 100%; height: 30px; margin-top: 10%;">'
	                  +'<div style="">'
	                      +'<div>'
	                        +'<div style="width: 70px; text-align: center; float: left;">'
	                            +'<img style="width: 25px" src="https://a1.r9cdn.net/rimg/provider-logos/airlines/v/ZE.png?crop=false&amp;width=108&amp;height=92&amp;fallback=default1.png&amp;_v=7680ca6f4486e71450343d0d72d58ce225845fba" alt="이스타항공 로고">'
	                            +'<br> '
	                            +'이스타'
	                        +'</div>'
	                          +'<div style="float: left; margin-left: 10%;">'
	                             +'<p style="">'
	                              +'17:05 <br>'
	                              +'ICN'
	                             +'</p>'
	                          +'</div>'
	                           +'<div style="width: 80px; margin-left: 5%; margin-top: 10px; border-top: 2px solid #e4e5ea; float: left;">'
	                          +'</div>'
	                            +'<div style="float: left; margin-left: 5%;">'
	                             +'<p style="">'
	                              +'17:05 <br>'
	                              +'ICN'
	                             +'</p>'
	                          +'</div>'
	                            +'<div style="float: left; margin-left: 15%;">'
	                             +'<p style="">'
	                                +'2시간 20분 '
	                             +'</p>'
	                           +'</div>'
	                      +'</div>'
	                      +'<div>'
	                      +'</div>'
	                    +'</div>'
	              +'</div>'
	          +'<!-- 하단 가장 싼 가격 -->'
	            +'<div style="width: 100%; height: 30px; margin-top: 5%;">'
	                +'<ul>'
	                  +'<li style="float: left; margin-right: 20%">'
	                    +'<div style="margin-right: 3%;">price1'
	                    +'</div>'
	                    +'<div style="float: left;">supplier</div>'
	                  +'</li>'
	                  +'<li style="float: left;" > '
	                    +'<div style="float: left; margin-right: 3%;">price2'
	                    +'</div>'
	                    +'<div style="float: left;">supplier2</div>'
	                  +'</li>'
	                +'</ul>        '
	            +'</div>'
	          +'</div>'
	          +'<!-- 우측 버튼 DIV -->'
	            +'<div class="card" style="min-width: 20%; float: left;">'
	              +'<div>'
	                +'<div>'
	                  +'<a href="#">'
	                    +'<span class="glyphicon glyphicon-share">'
	                       +'<!-- 공유 버튼  -->'
	                    +'</span>'
	                  +'</a>'
	                +'</div>'
	              +'</div>'
	              +'<div class="" style="margin-top: 0px; text-align: center;">'
	                +'<a href="#">'
	                  +'<span>가격 <!-- 가격 --></span> <br>'
	                +'<span>공급자 </span></a>'
	              +'</div>'
	              +'<div style="margin-top: 20px; text-align: center;">'
	                +'<button class="btn btn-default">상품확인</button>'
	              +'</div>'
	          +'</div>'
	        +'</section>'
	      +'</div>'
	    +'</div>'
	  +'</div>'
	  +'<div class="rightcolumn">'
	    +'<div class="card">'
	      +'<h2>About Me</h2>'
	      +'<div class="fakeimg" style="height:100px;">Image</div>'
	      +'<p>Some text about me in culpa qui officia deserunt mollit anim..</p>'
	    +'</div>'
	    +'<div class="card">'
	      +'<h3>Popular Post</h3>'
	      +'<div class="fakeimg"><p>Image</p></div>'
	      +'<div class="fakeimg"><p>Image</p></div>'
	      +'<div class="fakeimg"><p>Image</p></div>'
	    +'</div>'
	    +'<div class="card">'
	      +'<h3>Follow Me</h3>'
	      +'<p>Some text..</p>'
	    +'</div>'
	  +'</div>'
	+'</div>';
};

var createBookingPage =x=>{
	var fromPrice = 0;
		if(x.fromPrice.split(',')[2] == null){
		fromPrice = x.fromPrice.split(',')[0]+x.fromPrice.split(',')[1];} else{
		fromPrice = x.fromPrice.split(',')[0]+x.fromPrice.split(',')[1] + x.fromPrice.split(',')[2];
	}
		
	var backPrice = 0;
	if(x.backPrice.split(',')[2] == null){
		backPrice = x.backPrice.split(',')[0]+x.backPrice.split(',')[1];
	}else{
		backPrice =	x.backPrice.split(',')[0]+x.backPrice.split(',')[1]+x.backPrice.split(',')[2];
	}
		
	var totalPrice = (parseInt(fromPrice, 10)+ parseInt(backPrice, 10))*parseInt(x.bookCount, 10);
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

	return '<div>'
			+'<div>'
				+'<div style="margin: 30px auto 70px; margin-right: 30px; min-width: 1064px; min-height: 1200px; padding-right : 10%; padding-left : 10%; ">'
					+'<div id="mid" style=" text-align : center;">'
						+'<h5 class="" style="font-size: 20px; font-weight: bold; ">'
								+'선택 항공정보 '
								+'<span style="color: #e85581; font-size: 13px; margin-left: 8px;" class="p">예약 하시고자 하는 스케줄이 맞는지 정확히 확인하시기 바랍니다.</span>'
						+'</h5>'
						 +'<div style="min-height: 300px;  border: 2px solid #6d7588; border-bottom: 0px; padding: 20px;">'
							+'<div style="margin-top: 30px;">'
								+'<div>'
									+'<div style=" color: #e85581; float: left; border: 1px solid #e85581; padding: 15px;">'
										+'<span> 출국편 </span>'
									+'</div>'
									+'<ul style="float: left;'
									+'list-style-type: none; width: 70%;">'
										+'<li style="float: left; font-size: 15px; font-weight: 600;"><span>'+x.fromCity+'</span></li>'
										+'<li style="float: left;"><img style="padding: 5px;" src="http://image1.hanatour.com/_images/hana/hana_air/location_air_line.png"></li>'
										+'<li style="float: left; font-size: 15px; font-weight: 600; width : 25%;"><span>'+x.backCity+'</span></li>'
									+'</ul>'
									+'<ul style="float: left; '
									+'list-style-type: none; width: 70%">'
										+'<li style="float: left;">'
											+'<span>총 비행시간 : '+x.fromTime+' </span>'
										+'</li>'
									+'</ul>'
									+'<table style="float: left; width: 100%; border: 1px solid #ccd8eb; margin-top: 25px; ">'
										+'<tr style="font-size: 13px;">'
											+'<th style="background: #f6fafd; text-align: center; line-height: 40px; border-left: 1px solid #e4e4e4;">'
												+'항공'
											+'</th>'
											+'<th style="background: #f6fafd; text-align: center; line-height: 40px; border-left: 1px solid #e4e4e4;">'
												+'출발도시/시간'
											+'</th>'
											+'<th style="background: #f6fafd; text-align: center; line-height: 40px; border-left: 1px solid #e4e4e4;"> '
												+'도착도시/시간'
											+'</th>'
											+'<th style="background: #f6fafd; text-align: center; line-height: 40px; border-left: 1px solid #e4e4e4;">'
												+'비행시간'
											+'</th>'
											+'<th style="background: #f6fafd; text-align: center; line-height: 40px; border-left: 1px solid #e4e4e4;">'
												+'대기시간'
											+'</th>'
											+'<th style="background: #f6fafd; text-align: center; line-height: 40px; border-left: 1px solid #e4e4e4;">'
												+'상태'
											+'</th>'
										+'</tr>'
										+'<tr style="text-align: center; font-size: 13px; border-bottom: 1px solid #e4e4e4; letter-spacing:-1px;">'
											+'<td style="border-left: 1px solid #e4e4e4;">'
												+'<div style="margin: 25px 20px;">'
													+'<span style="font-weight: 600">'+x.fromCode+'</span>'
												+'</div>'
											+'</td>'
											+'<td style="border-left: 1px solid #e4e4e4;">'
												+'<div style="margin: 25px 20px;">'
													+'<span style="font-weight: 600">'+x.fromCity.split('(')[0]+'</span>'
													+'<p>'+x.fromDate+' '+x.fromDptTime+'</p>'
												+'</div>'
											+'</td>'
											+'<td style="border-left: 1px solid #e4e4e4;">'
												+'<div style="margin: 25px 20px;">'
													+'<span style="font-weight: 600">'+x.backCity.split('(')[0]+'</span>'
													+'<p>'+x.fromDate+' '+x.fromArvTime+'</p>'
												+'</div>'
											+'</td>'
											+'<td style="border-left: 1px solid #e4e4e4;">'
												+'<div style="margin: 25px 20px;">'
													+'<span style="font-weight: 600">'+x.fromTime+'</span>'
												+'</div>'
											+'</td>'
											+'<td style="border-left: 1px solid #e4e4e4;">'
												+'<div style="margin: 25px 20px;">'
													+'<span style="font-weight: 600">-</span>'
												+'</div>'
											+'</td>'
											+'<td style="border-left: 1px solid #e4e4e4;">'
												+'<div style="margin: 25px 20px;">'
													+'<span style="font-weight: 600; color: #e85581;">확정</span>'
												+'</div>'
											+'</td>'
										+'</tr>'
									+'</table>'
								+'</div>'
							+'</div>'
						+'</div>'
						 +'<div style="min-height: 300px; border: 2px solid #6d7588;">'
							+'<div style="margin-top: 30px; padding: 20px;">'
								+'<div>'
									+'<div style=" color: #e85581; float: left; border: 1px solid #e85581; padding: 15px;">'
										+'<span> 돌아오는편 </span>'
									+'</div>'
									+'<ul style="float: left;'
									+'list-style-type: none; width: 70%;">'
										+'<li style="float: left; font-size: 15px; font-weight: 600;"><span>'+x.backCity+'</span></li>'
										+'<li style="float: left;"><img style="padding: 5px;" src="http://image1.hanatour.com/_images/hana/hana_air/location_air_line.png"></li>'
										+'<li style="float: left; font-size: 15px; font-weight: 600; width : 25%;">'
											+'<span>'+x.fromCity+'</span>'
										+'</li>'
									+'</ul>'
									+'<ul style="float: left; '
									+'list-style-type: none; width: 70%">'
										+'<li style="float: left;">'
											+'<span>총 비행시간 : '+x.fromTime+' </span>'
										+'</li>'
									+'</ul>'
									+'<table style="float: left; width: 100%; border: 1px solid #ccd8eb; margin-top: 25px; ">'
										+'<tr style="font-size: 13px;">'
											+'<th style="background: #f6fafd; text-align: center; line-height: 40px; border-left: 1px solid #e4e4e4;">'
												+'항공'
											+'</th>'
											+'<th style="background: #f6fafd; text-align: center; line-height: 40px; border-left: 1px solid #e4e4e4;">'
												+'출발도시/시간'
											+'</th>'
											+'<th style="background: #f6fafd; text-align: center; line-height: 40px; border-left: 1px solid #e4e4e4;"> '
												+'도착도시/시간'
											+'</th>'
											+'<th style="background: #f6fafd; text-align: center; line-height: 40px; border-left: 1px solid #e4e4e4;">'
												+'비행시간'
											+'</th>'
											+'<th style="background: #f6fafd; text-align: center; line-height: 40px; border-left: 1px solid #e4e4e4;">'
												+'대기시간'
											+'</th>'
											+'<th style="background: #f6fafd; text-align: center; line-height: 40px; border-left: 1px solid #e4e4e4;">'
												+'상태'
											+'</th>'
										+'</tr>'
										+'<tr style="text-align: center; font-size: 13px; border-bottom: 1px solid #e4e4e4; letter-spacing: -1px;">'
											+'<td style="border-left: 1px solid #e4e4e4;">'
												+'<div style="margin: 25px 20px;">'
													+'<span style="font-weight: 600">'+x.backCode+'</span>'
												+'</div>'
											+'</td>'
											+'<td style="border-left: 1px solid #e4e4e4;">'
												+'<div style="margin: 25px 20px;">'
													+'<span style="font-weight: 600">'+x.backCity.split('(')[0]+'</span>'
													+'<p>'+x.backDate+' '+x.backDptTime+'</p>'
												+'</div>'
											+'</td>'
											+'<td style="border-left: 1px solid #e4e4e4;">'
												+'<div style="margin: 25px 20px;">'
													+'<span style="font-weight: 600">'+x.fromCity.split('(')[0]+'</span>'
													+'<p>'+x.backDate+' '+x.backArvTime+'</p>'
												+'</div>'
											+'</td>'
											+'<td style="border-left: 1px solid #e4e4e4;">'
												+'<div style="margin: 25px 20px;">'
													+'<span style="font-weight: 600">'+x.backTime+'</span>'
												+'</div>'
											+'</td>'
											+'<td style="border-left: 1px solid #e4e4e4;">'
												+'<div style="margin: 25px 20px;">'
													+'<span style="font-weight: 600">-</span>'
												+'</div>'
											+'</td>'
											+'<td style="border-left: 1px solid #e4e4e4;">'
												+'<div style="margin: 25px 20px;">'
													+'<span style="font-weight: 600; color: #e85581;">확정</span>'
												+'</div>'
											+'</td>'
										+'</tr>'
									+'</table>'
								+'</div>'
							+'</div>'
						+'</div>'
						+'<div style="float: left; width: 100%; min-height: 130px;  border: 2px solid #6d7588; border-top: 0px;">'
							+'<div style="padding: 20px; width: 100%;"> '
								+'<div style=" width: 100%">'
									+'<h5 class="" style="width: 100%; font-size: 20px; font-weight: bold; ">'
									+'항공 요금정보'
								+'</div>'
								+'<div style="">'
									+'<table style="border: 1px solid #e4e4e4; width: 100%">'
										+'<tr style="text-align: center;">'
											+'<th style="font-size: 13px; background: #f2f2f2; padding: 9 17 8 17px; border-right: 1px solid #e4e4e4;">'
												+'<span>승객</span>'
												+'<span style="color: #e85581; font-weight: 600; font-size: 14px;" class="essential_icon">'
												+'*'
												+'</span>'
											+'</th>	'
											+'<th style="font-size: 13px; background: #f2f2f2; padding: 9 17 8 17px; border-right: 1px solid #e4e4e4;">'
												+'<span>인원수</span>'
												+'<span style="color: #e85581; font-weight: 600; font-size: 14px;" class="essential_icon">'
												+'*'
												+'</span>'
											+'</th>	'
											+'<th style="font-size: 13px; background: #f2f2f2; padding: 9 17 8 17px; border-right: 1px solid #e4e4e4;">'
												+'<span>합계</span>'
												+'<span style="color: #e85581; font-weight: 600; font-size: 14px;" class="essential_icon">'
												+'*'
												+'</span>'
											+'</th>		'
										+'</tr>'
										+'<tr style="text-align: center;">'
											+'<td style="padding: 9px 17px 9px 17px; width: 25%;  border : 1px solid #e4e4e4;">'
												+'<span>승객</span>'
											+'</td>'
											+'<td style="padding: 9px 17px 9px 17px; width: 25%;  border : 1px solid #e4e4e4;">'
												+'<span>'+x.bookCount+'</span>'
											+'</td>'
											+'<td style="padding: 9px 17px 9px 17px; width: 25%;  border : 1px solid #e4e4e4;">'
												+'<span>'+addComma(totalPrice)+'</span>'
											+'</td>'
										+'</tr>'
										+'<tr style="text-align: center;">'
									+'</tr>'
									+'</table>'
								+'</div>'
							+'</div>'
						+'</div>'
						+'<div style="float: left; margin-top: 20px; min-height: 130px;">'
							+'<div style="padding: 20px;"> '
								+'<div style=" width: 100%">'
									+'<h5 class="" style="width: 100%; font-size: 20px; font-weight: bold; text-align: left;">'
									+'예약자 정보입력'
									+'<span style="font-size: 13px; float: right; color: #e85581;">'
									 +'필수사항이기에 정확히 입력해 주세요.'
									+'</span>'
								+'</div>'
								+'<div style="">'
									+'<table style="border: 1px solid #e4e4e4;">'
										+'<tr>'
											+'<th style="width: 10%; font-size: 13px; background: #f2f2f2; border : 1px solid #e4e4e4;">'
												+'<span>예약자명</span>'
												+'<span style="color: #e85581; font-weight: 600; font-size: 14px;" class="essential_icon">'
												+'*'
												+'</span>'
											+'</th>'
											+'<td style="padding: 9px 17px 9px 17px; width: 25%;  border : 1px solid #e4e4e4;">'
												+'<input class="insert-bookerName" style="width: 100%;" type="text" name="">'
											+'</td>'
											+'<th style="width: 10%; font-size: 13px; background: #f2f2f2;  border : 1px solid #e4e4e4;">'
												+'<span>영문성</span>'
												+'<span style="color: #e85581; font-weight: 600; font-size: 14px;" class="essential_icon">'
												+'*'
												+'</span>'
											+'</th>'
											+'<td style="padding: 9px 17px 9px 17px; width: 20%; border: 1px solid #e4e4e4;">'
												+'<input class="insert-firstName" style="width: 100%;" type="text"" />'
											+'</td>'
											+'<th style="width: 10%; font-size: 13px; background: #f2f2f2; border: 1px solid #e4e4e4;">'
												+'<span>영문이름</span>'
												+'<span style="color: #e85581; font-weight: 600; font-size: 14px;" class="essential_icon">'
												+'*'
												+'</span>'
											+'</th>'
											+'<td style="padding: 9px 17px 9px 17px; width: 25%;  border : 1px solid #e4e4e4;">'
												+'<input class="insert-name" style="width: 100%;" type="text"" />'
											+'</td>'
										+'</tr>'
									+'</table>'
								+'</div>'
							+'</div>'
						+'</div>'
						+'<div style="float: left; width: 100%; text-align: center;">'
							+'<button id = "flight-payment-btn" class="btn btn-default">예약하기</button>'
						+'</div>	'
					+'</div>'
				+'</div>'
			+'</div>'
		+'</div>'
}

var createSerahNav=x=>{
	  return '<div class="container">'
	  +'    <div class="row">'
	  +'      <div class=" col-sm-2" style="padding-left: 0px;">'
	  +'        <div class="input-group">'
	  +'          <input type="text" class="form-control departure" value="'+x.departure+'">'
	  +'          <div class="input-group-btn">'
	  +'            <button class="btn btn-default change" type="submit">'
	  +'              <i class="glyphicon glyphicon-transfer"></i>'
	  +'            </button>'
	  +'          </div>'
	  +'        </div>'
	  +'      </div>'
	  +'      <div class=" col-sm-2" style="padding-left: 0px;">'
	  +'        <div class="input-group">'
	  +'          <input type="text" class="form-control arrival" value="'+x.arrival+'">'
	  +'        </div>'
	  +'      </div>'
	  +'      <div class="col-sm-3">'
	  +'              <div class="input-group date" id="fromDate" data-data-format="mm-dd-yyyy">'
	  +'                  <input type="text" name="daterange" class="form-control data" />'
	  +'                  <span class="input-group-addon data">'
	  +'                      <span class="glyphicon glyphicon-calendar"></span>'
	  +'                  </span>'
	  +'              </div>'
	  +'      </div>'
	  +'      <div class="col-sm-2">'
	  +'              <div class="input-group">'
	  +'                  <span id="flight-search-nav-minus" class="input-group-addon flight-minus" style="cursor: pointer">'
	  +'                      <span class="glyphicon glyphicon-minus"></span>'
	  +'                  </span>'
	  +'                  <input type="text" name="" class="form-control flight-count" value="'+x.bookCount+'" />'
	  +'                  <span class="input-group-addon flight-plus" style="cursor: pointer">'
	  +'                      <span class="glyphicon glyphicon-plus"></span>'
	  +'                  </span>'
	  +'              </div>'
	  +'      </div>'
	  +'      <div class="col-sm-2 text-right" style="width : 15%; padding-right: 0px;">'
	  +'        <button id="flight-research-btn" class="btn btn-primary">요금 검색하기</button>'
	  +'      </div>'
	  +'    </div>'
	  +'  </div>'
	}


var createList =x=>{
	moment.lang('ko',{
	   weekdays: ["일요일","월요일","화요일","수요일","목요일","금요일","토요일"],
	   weekdaysShort: ["일","월","화","수","목","금","토"],
	});

	var li = '<div style="">'
		
	$.each(x.dptList, (a,b)=>{
		var q = 0;
		if(x.dptList[a].fromLocation == x.departure){
			var diffTime={
					day : moment.duration(moment(x.dptList[a].arrivalTime).diff(x.dptList[a].departureTime)).days(),
					hour : moment.duration(moment(x.dptList[a].arrivalTime).diff(x.dptList[a].departureTime)).hours(),
					minute : moment.duration(moment(x.dptList[a].arrivalTime).diff(x.dptList[a].departureTime)).minutes(),
					second : moment.duration(moment(x.dptList[a].arrivalTime).diff(x.dptList[a].departureTime)).seconds()
				};
			var time ={
					departure : moment(x.dptList[a].departureTime).format('HH : mm'),
					arrival : moment(x.dptList[a].arrivalTime).format('HH : mm'),
					result : diffTime.hour + '시간 ' + diffTime.minute + '분'
			};
			$.each(x.backList, (c, d)=>{
				if(x.backList[c].toLocation == x.departure){
					var dayB =moment(x.backList[c].arrivalTime).day(); 
					var diffTimeb={
							days : moment.duration(moment(x.backList[c].arrivalTime).diff(x.backList[c].departureTime)).days(),
							hour : moment.duration(moment(x.backList[c].arrivalTime).diff(x.backList[c].departureTime)).hours(),
							minute : moment.duration(moment(x.backList[c].arrivalTime).diff(x.backList[c].departureTime)).minutes(),
							second : moment.duration(moment(x.backList[c].arrivalTime).diff(x.backList[c].departureTime)).seconds()
						};
					var timeb ={
							departure : moment(x.backList[c].departureTime).format('HH : mm'),
							arrival : moment(x.backList[c].arrivalTime).format('HH : mm'),
							result : diffTimeb.hour + '시간 ' + diffTimeb.minute + '분'
					};
					var price = parseInt(b.price, 10)+ parseInt(d.price, 10);
					var dptPrice = parseInt(b.price, 10);
					var backPrice= parseInt(d.price, 10);
					li += '<div class = "list-wrapper" style="margin-bottom : 10px;">' 
						+'	<div id="" class="section-wrapper" style="background : #fff; min-height : 150px;">'
					     +' <div id="" class="" style="width : 80%; padding : 10px 20px 10px 20px; float : left;">'
					     +'            <table style="width : 100%; ">'
					     +'                  <tr>'
					     +'                        <td style="padding : 10px;">'
					     +'                           <img id="" src="https://a1.r9cdn.net/rimg/provider-logos/airlines/v/ZE.png?crop=false&amp;width=108&amp;+height=92&amp;fallback=default1.png&amp;_v=7680ca6f4486e71450343d0d72d58ce225845fba" alt="+이스타 항공" style="width : 25px;">   '
					     +'                        </td>'
					     +'                        <td style="padding : 10px;">'
					     +'                            '+time.departure+' <br>'
					     +								b.iatacode
					     +'                        </td>'
					     +'                        <td style="padding : 10px;" >'
					     +'                             <img style="padding: 5px;" src="http://image1.hanatour.com/_images/hana/hana_air/location_air_line.png"><br>'
					     +'                             직항 '
					     +'                        </td>'
					     +'                        <td style="padding : 10px;">'
					     +'                            '+time.arrival+' <br>'
					     +								d.iatacode
					     +'                        </td>'
					     +'                        <td style="padding : 10px;">'
					     							+time.result
					     +'                        </td>'
					     +'                  </tr>'
					     +'                  <tr style= "">'
					     +'                        <td style="padding : 10px;">'
					     +'                           <img id="" src="https://a1.r9cdn.net/rimg/provider-logos/airlines/v/ZE.png?crop=false&amp;width=108&amp;+height=92&amp;fallback=default1.png&amp;_v=7680ca6f4486e71450343d0d72d58ce225845fba" alt="+이스타 항공" style="width : 25px;">   '
					     +'                        </td>'
					     +'                        <td style="padding : 10px;">'
					     +'                            '+timeb.departure+' <br>'
					     								+d.iatacode
					     +'                        </td>'
					     +'                        <td style="padding : 10px;">'
					     +'                             <img style="padding: 5px;" src="http://image1.hanatour.com/_images/hana/hana_air/location_air_line.png"><br>'
					     +'                             직항 '
					     +'                        </td>'
					     +'                        <td style="padding : 10px;">'
					     +'                            '+timeb.arrival+' <br>'
					     								+b.iatacode
					     +'                        </td>'
					     +'                        <td style="padding : 10px;">'
													 +timeb.result
						 +'                        </td>'
					     +'                  </tr>'
					     +'            </table>'
					     +'      </div>'
						+'		<div id="" class="" style="float: left; width : 20%; height : 100%;">'
						+'			<div id="" class="" style="">'
						+'				<div style = "width : 100%; padding : 10px;">	'
						+'					<a href="#"><span class="glyphicon glyphicon-share-alt"></span></a>'
						+'				</div>	'
						+'				<div style = "width : 100%; padding : 10px; margin-top : 10px;">	'
						+'					<p style= "font-weight : bold; font-size : 22px; text-align : right;">'+addComma(price)+'</p>'
						+'				</div>	'
						+'				<div class="pay-button-div" style = "width : 100%; padding-right : 10px; padding-left : 10px;">	'
						+'					<button id = "11" style= "width : 100%;"class="btn btn-primary payment">상품 결제</button>	'
						+'				</div>	'
						+'			</div>'
						+'		</div>'
					    +'</div>'
						+'		<div id="" class="toggles" style="margin-bottom : 10px; border-top: 1px solid #e4e5ea; min-height : 400px; width : 100%; background-color: #f1f1f1; display : none;">'
						+'			<div id="" class="" style="min-height : 30px; margin-top : 20px;">'
						+'				<div class="hidden-detail-div" style= "min-height : 380px; padding : 20px;">	'
						+'					<ul class="nav nav-tabs">'
						+'						<li data-toggle="tab">'
						+'							<span>상세정보<span>'
						+'						</li>'
						+'					</ul>'
						+'					<div class="lable-div" style="min-height : 30px; margin-top: 15px;">'
						+'						<div style="float: left; " class = "sort-flightcode">'
						+'							<label style=" font-size: 18px; font-weight: 600;"><input type="checkbox" name="">가는 여정</label>'
						+'						</div>'
						+'						<div style="float: left; margin : 3px;">'
						+'							<span style="vertical-align: top; font-weight : 300; font-size : 15px; text-align: left;">'+b.iatacode + '-'+d.iatacode+'</span>'
						+'						</div>'
						+'					</div>'
						+'					<div class ="flightRow1-wrapper" style="min-height: 90px; width: 100%; padding : 10px; margin-top: 10px; background: #fff">'
					     +' <div id="" class="flightRow1" style=" width : 100%; padding : 10px 20px 10px 20px; float : left;">'
					     +'            <table class="departure-table"style="width : 100%; ">'
					     +'                  <tr>'
					     +'                        <td style="">'
						 +'										'+moment(x.dptList[a].departureTime).format('MM월DD일 ddd')+''
					     +'                        </td>'
					     +'                        <td style="">'
					     +'                            '+time.departure+' - '+time.arrival+''
					     +'                        </td>'
					     +'                        <td style="" >'
													+time.result
					     +'                        </td>'
					     +'                        <td style="">'
					     							+addComma(dptPrice)
					     +'                        </td>'
					     +'                        <td style="">'
					     
					     +'                        </td>'
					     +'                  </tr>'
					     +'                  <tr>'
					     +'                        <td style="">'
					     +'                        </td>'
					     +'                        <td style="">'
					     +								x.departure + '('+b.iatacode+')' + ' - ' + x.arrival + '('+d.iatacode+')'
					     +'                        </td>'
					     +'                        <td style="" >'
					     +'                        </td>'
					     +'                        <td style="">'
					     +'                        </td>'
					     +'                        <td style="">'
					     +'                        </td>'
					     +'                  </tr>'
					     +'                  <tr>'
					     +'                        <td style="">'
					     +'                        </td>'
					     +'                        <td class="departure-code-td"style="">'
					     								+b.code
					     +'                        </td>'
					     +'                        <td style="visibility:hidden" >'
					     +								x.dptList[a].flightScheduleSeq
					     +'                        </td>'
					     +'                        <td style="visibility:hidden">'
					     +								x.backList[c].flightScheduleSeq
					     +'                        </td>'
					     +'                        <td style="">'
					     +'                        </td>'
					     +'                  </tr>'
					     +'            </table>'
					     +'      </div>'
/*						+'							<div style="min-height : 90px; padding: 10px;">'
						+'								<div style="padding-right : 8%; min-height : 75px; width : 25%; float: left;">'
						+'									<div style="width : 100%;">'
						+'										'+moment(x.dptList[a].departureTime).format('MM월DD일 ddd')+''
						+'									</div>'
						+'								</div>'
						+'								<div  style="padding-right : 5%; min-height : 75px; width : 50%; float: left;">'
						+'									<div>'
						+'										<div>'
						+'											<span>'
						+												moment(x.dptList[a].departureTime).format('HH:mm')+' - ' + moment(x.dptList[a].arrivalTime).format('HH:mm')
						+'											</span>'
						+'										</div>'
						+'										<div>'
						+'											<span>'
						+												x.departure + ' - ' + x.arrival
						+'											</span>'
						+'										</div>'
						+'										<div>'
						+'											<span>'
						+												x.dptList[a].code
						+'											</span>'
						+'										</div>'
						+'									</div>'
						+'								</div>'
						+'								<div style="padding-right : 8%; min-height : 75px; width : 25%; float: left;">'
						+'									<div style="width : 100%;">'
						+'										<div>'
						+'											<span>'
						+												time.result
						+'											</span>'
						+'										</div>'
						+'									</div>'
						+'								</div>'
						+'							</div>'*/
						+'						</div>'
						+'					<div style=" min-height : 30px; margin-top: 15px;">'
						+'						<div style="float: left;" class = "sort-backcode">'
						+'							<label style=" font-size: 18px; font-weight: 600;"><input type="checkbox" name="">오는 여정</label>'
						+'						</div>'
						+'						<div style="float: left; margin : 3px;">'
						+'							<span style="vertical-align: top; font-weight : 300; font-size : 15px; text-align: left;">'+d.iatacode + '-'+b.iatacode+'</span>'
						+'						</div>'
						+'					</div>'
						+					'<div style="min-height: 90px; width: 100%; margin-top: 10px; background: #fff">'
						+'							<div style="min-height : 90px; padding: 10px;">'
						+' <div id="" class="flightRow2" style=" width : 100%; padding : 10px 20px 10px 20px; float : left;">'
					     +'            <table style="width : 100%; ">'
					     +'                  <tr>'
					     +'                        <td style="">'
						 +'										'+moment(x.backList[c].departureTime).format('MM월DD일 ddd')+''
					     +'                        </td>'
					     +'                        <td style="">'
					     +'                            '+timeb.departure+' - '+timeb.arrival+''
					     +'                        </td>'
					     +'                        <td style="" >'
													+timeb.result
					     +'                        </td>'
					     +'                        <td style="">'
					     							+addComma(backPrice)
					     +'                        </td>'
					     +'                        <td style="">'
					     +'                        </td>'
					     +'                  </tr>'
					     +'                  <tr>'
					     +'                        <td style="">'
					     +'                        </td>'
					     +'                        <td style="">'
					     +							 x.arrival+'('+d.iatacode+')' + ' - ' + x.departure + '('+b.iatacode+')' 
					     +'                        </td>'
					     +'                        <td style="" >'
					     +'                        </td>'
					     +'                        <td style="">'
					     +'                        </td>'
					     +'                        <td style="">'
					     +'                        </td>'
					     +'                  </tr>'
					     +'                  <tr>'
					     +'                        <td style="">'
					     +'                        </td>'
					     +'                        <td class="arrival-code-td" style="">'
					     								+d.code
					     +'                        </td>'
					     +'                        <td style="" >'
					     +'                        </td>'
					     +'                        <td style="">'
					     +'                        </td>'
					     +'                        <td style="">'
					     +'                        </td>'
					     +'                  </tr>'
					     +'            </table>'
					     +'      </div>'

					/*	+'								<div style="padding-right : 8%; min-height : 75px; width : 25%; float: left;">'
						+'									<div style="width : 100%;">'
						+'										'+moment(x.backList[c].departureTime).format('MM월DD일 ddd')+''
						+'									</div>'
						+'								</div>'
						+'								<div  style="padding-right : 5%; min-height : 75px; width : 50%; float: left;">'
						+'									<div>'
						+'										<div>'
						+'											<span>'
						+												moment(x.backList[c].departureTime).format('HH:mm')+' - ' + moment(x.dptList[a].arrivalTime).format('HH:mm')
						+'											</span>'
						+'										</div>'
						+'										<div>'
						+'											<span>'
						+												x.arrival + ' - ' + x.departure
						+'											</span>'
						+'										</div>'
						+'										<div>'
						+'											<span>'
						+												x.backList[c].code
						+'											</span>'
						+'										</div>'
						+'									</div>'
						+'								</div>'
						+'								<div style="padding-right : 8%; min-height : 75px; width : 25%; float: left;">'
						+'									<div style="width : 100%;">'
						+'										<div>'
						+'											<span>'
						+												timeb.result
						+'											</span>'
						+'										</div>'
						+'									</div>'
						+'								</div>'*/
						+'							</div>'
						+'						</div>'
						+'					</div>	'
						+'				</div>'
						+'			</div>'
						+'	</div>'
				}
			})
			//visibility = "hidden"
		}else{};
	})
	li +="</div>"
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
	return li
}

/*						+'		<div id="" class="" style="float :left; min-height : 150px; padding : 10px; border-right: 1px solid #e4e5ea; width : 80%">'
+'			<div id="" class="" style="min-height : 60px;">'
+'				<div id="" class="" style="float : left;">'
+'					<img id="" src="https://a1.r9cdn.net/rimg/provider-logos/airlines/v/ZE.png?crop=false&amp;width=108&amp;height=92&amp;fallback=default1.png&amp;_v=7680ca6f4486e71450343d0d72d58ce225845fba" alt="+이스타 항공" style="width : 25px;">'
+'				</div>'
+'				<div id="" class="" style="float : left; margin-left : 10%;">'
+'					<p>'+time.departure+'</p><p>'+b.iatacode+'</p>'
+'				</div>'
+'					<div id="" class="" style="width : 80px; float : left; margin-left : 5%; margin-top : 10px; border-top : 2px solid #+e4e5ea;">'
+'					</div>'
+'					<div id="" class="" style="float : left; margin-left : 5%;">'
+'						<p>'+time.arrival+'</p>'
+'						<p>'+d.iatacode+'</p>'
+'					</div>'
+'					<div id="" class="" style="float : left; margin-left : 10%;">'
+'						<p>'+time.result+'</p>'
+'					</div>'
+'				</div>'
+'				<div id="" class="" style="min-height : 60px;">'
+'					<div id="air-tologosm-div" class="" style="float : left;">'
+'						<img id="air-tologo-img" src="https://a1.r9cdn.net/rimg/provider-logos/airlines/v/ZE.png?crop=false&amp;width=108&amp;height=92&amp;fallback=default1.png&amp;_v=7680ca6f4486e71450343d0d72d58ce225845fba" alt="+이스타 항공" style="width : 25px;">'
+'					</div>'
+'					<div id="" class="" style="float : left; margin-left : 10%;">'
+'						<p>'+timeb.departure+'</p>'
+'						<p>'+d.iatacode+'</p>'
+'					</div>'
+'					<div id="" class="" style="width : 80px; float : left; margin-left : 5%; margin-top : 10px; border-top : 2px solid #+e4e5ea;">'
+'					</div>'
+'					<div id="" class="" style="float : left; margin-left : 5%;">'
+'						<p>'+timeb.arrival+'</p>'
+'						<p>'+b.iatacode+'</p>'
+'					</div>'
+'					<div id="" class="" style="float : left; margin-left : 10%;">'
+'						<p>'+timeb.result+'</p>'
+'					</div>'
+'				</div>'
+'			</div>'*/

/*var createList =x=>{
	var li = ''
	$.each(x.list, (i,j)=>{
	
	li +='<div id="" class="" style="background : #fff;">'
	+'	<section id="air-midcolumn-section" class="" style="min-height : 150px;">'
	+'		<div id="" class="" style="float :left; min-height : 150px; padding : 10px; border-right: 1px solid #e4e5ea; width : 80%">'
	+'			<div id="" class="" style="min-height : 60px;">'
	+'				<div id="" class="" style="float : left;">'
	+'					<img id="air-fromlogo-img" src="https://a1.r9cdn.net/rimg/provider-logos/airlines/v/ZE.png?crop=false&amp;width=108&amp;height=92&amp;fallback=default1.png&amp;_v=7680ca6f4486e71450343d0d72d58ce225845fba" alt="+이스타 항공" style="width : 25px;">'
	+'				</div>'
	+'				<div id="" class="" style="float : left; margin-left : 10%;">'
	+'					<p>'+x.list[i].departureTime+'</p><p>'+x.list[i].iatacode+'</p>'
	+'				</div>'
	+'					<div id="" class="" style="width : 80px; float : left; margin-left : 5%; margin-top : 10px; border-top : 2px solid #+e4e5ea;">'
	+'					</div>'
	+'					<div id="air-fromarrival-div" class="" style="float : left; margin-left : 5%;">'
	+'						<p>'+x.list[i].arrivalTime+'</p>'
	+'						<p>'+x.list[i].iatacode+'</p>'
	+'					</div>'
	+'					<div id="air-fromtime-div" class="" style="float : left; margin-left : 10%;">'
	+'						<p>'+x.list[i].iatacode+'</p>'
	+'					</div>'
	+'				</div>'
	+'				<div id="" class="" style="min-height : 60px;">'
	+'					<div id="air-tologosm-div" class="" style="float : left;">'
	+'						<img id="air-tologo-img" src="https://a1.r9cdn.net/rimg/provider-logos/airlines/v/ZE.png?crop=false&amp;width=108&amp;height=92&amp;fallback=default1.png&amp;_v=7680ca6f4486e71450343d0d72d58ce225845fba" alt="+이스타 항공" style="width : 25px;">'
	+'					</div>'
	+'					<div id="air-tostart-div" class="" style="float : left; margin-left : 10%;">'
	+'						<p>'+x.list[i].departureTime+'</p>'
	+'						<p>'+x.list[i].iatacode+'</p>'
	+'					</div>'
	+'					<div id="air-tobar-div" class="" style="width : 80px; float : left; margin-left : 5%; margin-top : 10px; border-top : 2px solid #+e4e5ea;">'
	+'					</div>'
	+'					<div id="air-toarrival-div" class="" style="float : left; margin-left : 5%;">'
	+'						<p>'+x.list[i].arrivalTime+'</p>'
	+'						<p>'+x.list[i].iatacode+'</p>'
	+'					</div>'
	+'					<div id="air-totime-div" class="" style="float : left; margin-left : 10%;">'
	+'						<p>'+''+'</p>'
	+'					</div>'
	+'				</div>'
	+'			</div>'
	+'		</section>'
	+'		<div id="air-schedule-detail-div" class="" style="border-top: 1px solid #e4e5ea; height : 400px; width : 100%; background-color: #f1f1f1; display : none;">'
	+'			<div id="air-detailwrapper-div" class="" style="margin-top : 20px;"+>'
	+'				'
	+'			</div>'
	+'		</div>'
	+'	</div>'
	});
	return li;
}*/


//Common Tag for Dynamic
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
	};
var createLI=x=>{
	return '<li id="'+x.id+'" class="'+x.clazz+'"></li>';
};
var createInput=x=>{
	return '<input type="'+x.type+'" id="'+x.id+'"class="'+x.clazz
      +' "value="'+x.value+'">';
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
var createSection=x=>{
	return '<section id="'+x.id+'" class = "'+x.clazz+'"></section>'
};
var createImg=x=>{
	return '<img id = "'+x.id+'" src = "'+x.src+'" alt="'+x.alt+'"></img>'
};
var createPTag=x=>{
	return '<p>'+x.val+'</p>'
};
var createSpan2=x=>{
	return '<span id="'+x.id+'" class="'+x.clazz+'">'+x.val+'</span>';
};
var createITag=x=>{
	return '<i id="'+x.id+'", class="'+x.clazz+'">'+x.val+'</i>'
};
