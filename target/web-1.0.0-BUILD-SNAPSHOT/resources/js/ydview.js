<<<<<<< HEAD
// Residence Front
var residence=x=>{
	return '<div class="container-fluid" style="height: 400px; padding: 0px; position: relative;">'
	  +'<img id="img-resi-main" src="https://goo.gl/XRqXDA" style="width: 100%; max-height: 100%; position: relative; z-index: -1">'
	  +'<h2 style="position: absolute; top: 15%; left: 50%; transform: translate(-50%, -15%); color: white; font-weight: bold;">'
	    +'내 여행의 베이스캠프, [ 호텔 ] 예약'
	  +'</h2>'
	  +'<p style="position: absolute; top: 30%; left: 50%; transform: translate(-50%, -30%); color: white; font-size: 18px">'
	    +'전 세계 1,950,000개 이상의 다양한 숙소 특가 할인'
	  +'</p>'
	  +'<div class="container" style="position: absolute; top: 60%; left: 50%; transform: translate(-50%, -60%);">'
	    +'<ul class="nav nav-tabs">'
	      +'<li id="li-resi-main-1" class="active"><a href="#hotel" data-toggle="tab">Hotel</a></li>'
	      +'<li id="li-resi-main-2" class=""><a href="#privateHotel" data-toggle="tab">Private House</a></li>'
	    +'</ul>'
	    +'<div class="tab-content">'
	      +'<div id="hotel" class="tab-pane in active" style="background: white; height: 100px">'
	        +'<input type="" name="">'
	      +'</div>'
	      +'<div id="privateHotel" class="tab-pane fade" style="background: white; height: 100px">    '
	      +'</div>'
	    +'</div>'
	  +'</div>'
	+'</div>'
	+'<div class="container-fluid">'
	  +'<div class="container" style="margin-top: 50px; margin-bottom: 50px">'
	    +'<div class="row">'
	      +'<div class="card col-sm-3">'
	        +'<div class="div-card-photo" style="border: 1px solid gray; padding: 5px; min-height: 350px;">'
	          +'<img class="card-img-top" src="'+x+'/singa.jpg" style="max-width: 100%; height: 100%;">'
	          +'<div class="card-body">'
	            +'<h5>Agada Hotel</h5>'
	            +'<p class="card-text">special</p>'
	            +'<hr/>'
	            +'<p>coupon</p>'
	          +'</div>'
	        +'</div>'
	      +'</div>'
	      +'<div class="card col-sm-3">'
	        +'<div class="div-card-photo" style="border: 1px solid gray; padding: 5px; min-height: 350px">'
	          +'<img class="card-img-top" src="'+x+'/singa.jpg" style="max-width: 100%; height: 100%">'
	          +'<div class="card-body">'
	            +'<h5>Agada Hotel</h5>'
	            +'<p class="card-text">special</p>'
	            +'<hr>'
	            +'<p>coupon</p>'
	          +'</div>'
	        +'</div>'
	      +'</div>'
	      +'<div class="card col-sm-3">'
	        +'<div class="div-card-photo" style="border: 1px solid gray; padding: 5px; min-height: 350px">'
	          +'<img class="card-img-top" src="'+x+'/singa.jpg" style="max-width: 100%; height: 100%">'
	          +'<div class="card-body">'
	            +'<h5>Agada Hotel</h5>'
	            +'<p class="card-text">special</p>'
	            +'<hr/>'
	            +'<p>coupon</p>'
	          +'</div>'
	        +'</div>'
	      +'</div>'
	      +'<div class="card col-sm-3">'
	        +'<div class="div-card-photo" style="border: 1px solid gray; padding: 5px; min-height: 350px">'
	        +'<div class="card-body text-center">'
	            +'<h1 style="margin-top: 50px">Something new?</h1>'
	            +'<button class="btn btn-primary" style="margin-bottom: -250px">베스트 특가 상품 더보기...</button>'
	          +'</div>'
	        +'</div>'
	      +'</div>'
	    +'</div>'
	  +'</div>'
	+'</div>'
	+'<!-- Agada intro -->'
	+'<div class="container-fluid" style="background-color: #e9e9e9">'
	  +'<div class="container text-center" style="margin-top: 50px; margin-bottom: 50px; padding-left: 70px; padding-right: 70px">'
	    +'<h2>더 빠르고 스마트한 예약, 바로 "아고다"에서!</h2>'
	    +'<p style="font-size: 17px">여행에 대한 열정으로 아고다는 고객님들께 전 세계 호텔, 리조트, 프라이빗 하우스, 휴가용 숙소 렌탈 등 다양한 숙소의 베스트 가격을 제공하기 위해 열심히 노력하고 있습니다. 아고다의 많고 다양한 숙소를 기점으로 하는 탐험 여행, 배낭 여행, 신혼여행 및 가족 휴가 여행에 대한 완벽한 계획을 세워보세요. 아고다가 함께 합니다!</p><br>'
	    +'<p><a id="a-intro" href="#" style="font-size: 15px; font-weight: bold;">왜 아고다를 선택해야 하나요?</a></p>'
	  +'</div>'
	  +'<div id="div-intro" style="display: none">    '
	    +'<div class="container">'
	      +'<div class="row">'
	        +'<div class="col-sm-3 col-sm-offset-1">'
	          +'<div class="flip">'
	            +'<div class="thumbnail" style="min-height: 400px; padding: 20px; margin-top: 50px">'
	              +'<div class="face front">'
	                +'<div class="card-img" style="position: relative; display: inline-block; overflow: hidden; padding: 1px">'
	                  +'<img class="card-img-top" src="'+x+'/singa.jpg" style="max-width: 100%; height: 100%"><hr>'
	                +'</div>'
	                +'<h4 style="font-weight: bold">150만건 이상의 이용후기'
	                  +'<span class="label label-info info">'
	                    +'<span data-toggle="tooltip" title="viewed">257 <b class="glyphicon glyphicon-eye-open"></b></span>'
	                                  +'<span data-toggle="tooltip" title="viewed">3 <b class="glyphicon glyphicon-star"></b></span>'
	                                +'<span data-toggle="tooltip" title="Bootstrap version">3.0.3</span>'
	                  +'</span>'
	                +'</h4>'
	                +'<p>아고다 여행 커뮤니티의 솔직한 이용후기를 참고해 완벽한 여행을 위한 최적의 숙소를 찾아 보세요.</p>'
	              +'</div>'
	              +'<div class="face back">'
	                +'<input class="form-control" type="text" name="" value="ADKGDUI294">'
	                +'<button class="form-control" style="margin-top: 20px">복사하기</button>'
	                +'<p style="margin-top: 20px; font-size: 12px">예약 시 할인 코드를 입력할 수 있는 숙소 예약(예약일 기준: 2018년 4월 3일~2018년 5월 31일)에 한해 유효함.</p>'
	                +'<hr style="border: 2px solid gray">'
	                +'<button class="btn btn-primary form-control" >숙소 검색하기</button>'
	              +'</div>'
	            +'</div>'
	          +'</div>'
	        +'</div>'
	        +'<div class="col-sm-4">'
	          +'<div class="thumbnail" style="min-height: 200px; padding: 20px;">'
	            +'<div class="card-img" style="position: relative; display: inline-block; overflow: hidden; padding: 1px">'
	              +'<img class="card-img-top" src="'+x+'/singa.jpg" style="max-width: 100%; height: 100%">      '
	            +'</div>            '
	            +'<span class="glyphicon glyphicon-refresh" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 70px"></span>'
	            +'<br><br><br>'
	            +'<h4 style="font-weight: bold;">아고다 보장제</h4>'
	            +'<p>아고다는 베스트 가격 제공을 위해 열심히 노력하고 있습니다. 더 낮은 가격을 발견한 경우 차액을 되돌려 드립니다.</p>'
	          +'</div>'
	        +'</div>'
	        +'<div class="col-sm-3">'
	          +'<div class="thumbnail" style="min-height: 200px; padding: 20px; margin-top: 50px">'
	            +'<div class="card-img" style="position: relative; display: inline-block; overflow: hidden; padding: 1px">'
	              +'<img class="card-img-top" src="'+x+'/singa.jpg" style="max-width: 100%; height: 100%"><hr>'
	            +'</div>'
	            +'<h4 style="font-weight: bold">연중무휴 24시간 고객센터</h4>'
	            +'<p>연중무휴 24시간 고객 지원 서비스를 17개 언어로 이용할 수 있습니다.</p>'
	          +'</div>'
	        +'</div>'
	      +'</div>  '
	    +'</div>'
	+'<!-- Carousel -->'
	    +'<div id="" class="container" style="margin-top: 50px">'
	      +'<div class="row">'
	        +'<div class="col-md-6 col-md-offset-3" style="border: 1px solid #333"></div>'
	      +'</div>'
	      +'<div id="myCarousel" class="carousel slide text-center" data-ride="carousel" style="padding: 50px 170px; min-height: 200px;">'
	        +'<!-- Bottom Carousel Indicators -->'
	        +'<ol class="carousel-indicators" style="bottom: 0px; margin-top: 30px">'
	          +'<li data-target="#myCarousel" data-slide-to="0" class="active">'
	            +'<span class="glyphicon glyphicon-search"></span>'
	          +'</li>'
	          +'<li data-target="#myCarousel" data-slide-to="1"></li>'
	          +'<li data-target="#myCarousel" data-slide-to="2"></li>'
	        +'</ol>'
	        +'<!-- Carousel Slides / Quotes -->'
	        +'<div class="carousel-inner" role="listbox">'
	          +'<div class="item active">'
	              +'<p style="font-size: 20px; font-weight: bold">아고다는 전 세계적으로 많고 다양한 숙소 옵션과 가장 낮은 가격을 끊임없이 찾아냅니다.</p>'
	          +'</div>'
	          +'<div class="item">'
	              +'<p style="font-size: 20px; font-weight: bold">아고다는 아시아 지역의 호텔과 게스트하우스에 있어 가장 주요한 숙소 웹사이트로 아주 방대한 객실 상품을 보유하고  있으며 베스트 요금을 제공합니다.</p>'
	          +'</div>'
	          +'<div class="item">'
	              +'<p style="font-size: 20px; font-weight: bold">아고다는 아시아 지역의 호텔과 게스트하우스에 있어 가장 주요한 숙소 웹사이트로 아주 방대한 객실 상품을 보유하고 있으며 베스트 요금을 제공합니다.</p>'
	          +'</div>'
	        +'</div>'
	            +'<!-- Carousel controls -->'
	            +'<a class="carousel-control left" href="#myCarousel" data-slide="prev" style="background-image: none;">'
	                +'<span class="glyphicon glyphicon-chevron-left" style="color: #333"></span>'
	            +'</a>'
	            +'<a class="carousel-control right" href="#myCarousel" data-slide="next" style="background-image: none;">'
	                +'<span class="glyphicon glyphicon-chevron-right" style="color: #333"></span>'
	            +'</a>'
	      +'</div>'
	      +'<div class="row" style="margin-top: 30px">'
	        +'<div class="col-md-6 col-md-offset-3" style="border: 1px solid #333"></div>'
	      +'</div>'
	    +'</div>'
	  +'</div>'
	+'<!-- Youtube 동영상 -->'
	  +'<div class="container text-center" style="margin-top: 50px; margin-bottom: 50px;">'
	    +'<img id="img-youtube" src="https://goo.gl/pMKvTN" style="width: 100%; max-height: 400px; filter: brightness(50%);">'
	  +'</div>'
	+'</div>'
	+''
	+'<div class="container text-center">'
	  +'<h3>한국인이 사랑하는 여행지</h3>'
	+'</div>'
	+'<!-- Grid Image -->'
	+'<div id="res-content" class="container">'
	  +'<div class="one" style="position: relative;">'
	    +'<div style="z-index: 100; position: absolute; color: white; top: 50%; left: 50%; transform: translate(-50%, -50%); line-height: 40px">'
	      +'<p style="font-size: 40px; font-weight: bold; margin-bottom: 0px;">NewYork</p>'
	      +'<p style="font-size: 20px; font-weight: bold; margin-bottom: 0px;">미국</p>'
	    +'</div>    '
	    +'<img src="https://goo.gl/bRFns2" style="max-width: 100%; min-height: 100%; display: block;">  '
	  +'</div>'
	  +'<div class="two" style="position: relative;">'
	    +'<div style="z-index: 100; position: absolute; color: white; top: 50%; left: 50%; transform: translate(-50%, -50%); line-height: 40px">'
	      +'<p style="font-size: 40px; font-weight: bold; margin-bottom: 0px;">Barcelona</p>'
	      +'<p style="font-size: 20px; font-weight: bold; margin-bottom: 0px;">스페인</p>'
	    +'</div>  '
	    +'<img src="https://i.ytimg.com/vi/9GUJ4CZnqQ4/maxresdefault.jpg" style="max-width: 100%; min-height: 100%">'
	  +'</div>'
	  +'<div class="three" style="position: relative;">'
	    +'<div style="z-index: 100; position: absolute; color: white; top: 50%; left: 50%; transform: translate(-50%, -50%); line-height: 40px">'
	      +'<p style="font-size: 40px; font-weight: bold; margin-bottom: 0px;">Dubrovnik</p>'
	      +'<p style="font-size: 20px; font-weight: bold; margin-bottom: 0px;">크로아티아</p>'
	    +'</div>'
	    +'<img src="http://cfile10.uf.tistory.com/image/2520323355A7349E335F35" style="max-width: 100%; min-height: 100%">'
	  +'</div>'
	  +'<div class="four" style="position: relative;">'
	    +'<div style="z-index: 100; position: absolute; color: white; top: 50%; left: 50%; transform: translate(-50%, -50%); line-height: 40px">'
	      +'<p style="font-size: 40px; font-weight: bold; margin-bottom: 0px;">ToKyo</p>'
	      +'<p style="font-size: 20px; font-weight: bold; margin-bottom: 0px;">일본</p>'
	    +'</div>'
	    +'<img src="https://goo.gl/HJJ1sM" style="max-width: 100%; min-height: 100%">'
	  +'</div>'
	  +'<div class="five" style="position: relative;">'
	    +'<div style="z-index: 100; position: absolute; color: white; top: 50%; left: 50%; transform: translate(-50%, -50%); line-height: 40px">'
	      +'<p style="font-size: 40px; font-weight: bold; margin-bottom: 0px;">DaNang</p>'
	      +'<p style="font-size: 20px; font-weight: bold; margin-bottom: 0px;">베트남</p>'
	    +'</div>'
	    +'<img src="https://goo.gl/ByHX2w" style="max-width: 100%; min-height: 100%">'
	  +'</div>'
	  +'<div class="six" style="position: relative;">'
	    +'<div style="z-index: 100; position: absolute; color: white; top: 50%; left: 50%; transform: translate(-50%, -50%); line-height: 40px">'
	      +'<p style="font-size: 40px; font-weight: bold; margin-bottom: 0px;">MarinaBay</p>'
	      +'<p style="font-size: 20px; font-weight: bold; margin-bottom: 0px;">싱가폴</p>'
	    +'</div>'
	    +'<img src="https://goo.gl/XubuoF" style="max-width: 100%; min-height: 100%">'
	  +'</div>'
	+'</div>'
	+'<div class="container-fluid" style="background-color: #e9e9e9">'
	  +'<div class="container" style="min-height: 300px;">hello</div>'
	+'</div>';
};

var resNav=()=>{
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
	+'<br>'
	+'<br>'
	+'<br>';
};

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
=======
// Residence Front
var residence=x=>{
	return '<div class="container-fluid" style="height: 400px; padding: 0px; position: relative;">'
	  +'<img id="img-resi-main" src="https://goo.gl/XRqXDA" style="width: 100%; max-height: 100%; position: relative; z-index: -1">'
	  +'<h2 style="position: absolute; top: 15%; left: 50%; transform: translate(-50%, -15%); color: white; font-weight: bold;">'
	    +'내 여행의 베이스캠프, [ 호텔 ] 예약'
	  +'</h2>'
	  +'<p style="position: absolute; top: 30%; left: 50%; transform: translate(-50%, -30%); color: white; font-size: 18px">'
	    +'전 세계 1,950,000개 이상의 다양한 숙소 특가 할인'
	  +'</p>'
	  +'<div class="container" style="position: absolute; top: 60%; left: 50%; transform: translate(-50%, -60%);">'
	    +'<ul class="nav nav-tabs">'
	      +'<li id="li-resi-main-1" class="active"><a href="#hotel" data-toggle="tab">Hotel</a></li>'
	      +'<li id="li-resi-main-2" class=""><a href="#privateHotel" data-toggle="tab">Private House</a></li>'
	    +'</ul>'
	    +'<div class="tab-content">'
	      +'<div id="hotel" class="tab-pane in active" style="background: white; height: 100px">'
	        +'<input type="" name="">'
	      +'</div>'
	      +'<div id="privateHotel" class="tab-pane fade" style="background: white; height: 100px">    '
	      +'</div>'
	    +'</div>'
	  +'</div>'
	+'</div>'
	+'<div class="container-fluid">'
	  +'<div class="container" style="margin-top: 50px; margin-bottom: 50px">'
	    +'<div class="row">'
	      +'<div class="card col-sm-3">'
	        +'<div class="div-card-photo" style="border: 1px solid gray; padding: 5px; min-height: 350px;">'
	          +'<img class="card-img-top" src="'+x+'/singa.jpg" style="max-width: 100%; height: 100%;">'
	          +'<div class="card-body">'
	            +'<h5>Agada Hotel</h5>'
	            +'<p class="card-text">special</p>'
	            +'<hr/>'
	            +'<p>coupon</p>'
	          +'</div>'
	        +'</div>'
	      +'</div>'
	      +'<div class="card col-sm-3">'
	        +'<div class="div-card-photo" style="border: 1px solid gray; padding: 5px; min-height: 350px">'
	          +'<img class="card-img-top" src="'+x+'/singa.jpg" style="max-width: 100%; height: 100%">'
	          +'<div class="card-body">'
	            +'<h5>Agada Hotel</h5>'
	            +'<p class="card-text">special</p>'
	            +'<hr>'
	            +'<p>coupon</p>'
	          +'</div>'
	        +'</div>'
	      +'</div>'
	      +'<div class="card col-sm-3">'
	        +'<div class="div-card-photo" style="border: 1px solid gray; padding: 5px; min-height: 350px">'
	          +'<img class="card-img-top" src="'+x+'/singa.jpg" style="max-width: 100%; height: 100%">'
	          +'<div class="card-body">'
	            +'<h5>Agada Hotel</h5>'
	            +'<p class="card-text">special</p>'
	            +'<hr/>'
	            +'<p>coupon</p>'
	          +'</div>'
	        +'</div>'
	      +'</div>'
	      +'<div class="card col-sm-3">'
	        +'<div class="div-card-photo" style="border: 1px solid gray; padding: 5px; min-height: 350px">'
	        +'<div class="card-body text-center">'
	            +'<h1 style="margin-top: 50px">Something new?</h1>'
	            +'<button class="btn btn-primary" style="margin-bottom: -250px">베스트 특가 상품 더보기...</button>'
	          +'</div>'
	        +'</div>'
	      +'</div>'
	    +'</div>'
	  +'</div>'
	+'</div>'
	+'<!-- Agada intro -->'
	+'<div class="container-fluid" style="background-color: #e9e9e9">'
	  +'<div class="container text-center" style="margin-top: 50px; margin-bottom: 50px; padding-left: 70px; padding-right: 70px">'
	    +'<h2>더 빠르고 스마트한 예약, 바로 "아고다"에서!</h2>'
	    +'<p style="font-size: 17px">여행에 대한 열정으로 아고다는 고객님들께 전 세계 호텔, 리조트, 프라이빗 하우스, 휴가용 숙소 렌탈 등 다양한 숙소의 베스트 가격을 제공하기 위해 열심히 노력하고 있습니다. 아고다의 많고 다양한 숙소를 기점으로 하는 탐험 여행, 배낭 여행, 신혼여행 및 가족 휴가 여행에 대한 완벽한 계획을 세워보세요. 아고다가 함께 합니다!</p><br>'
	    +'<p><a id="a-intro" href="#" style="font-size: 15px; font-weight: bold;">왜 아고다를 선택해야 하나요?</a></p>'
	  +'</div>'
	  +'<div id="div-intro" style="display: none">    '
	    +'<div class="container">'
	      +'<div class="row">'
	        +'<div class="col-sm-3 col-sm-offset-1">'
	          +'<div class="flip">'
	            +'<div class="thumbnail" style="min-height: 400px; padding: 20px; margin-top: 50px">'
	              +'<div class="face front">'
	                +'<div class="card-img" style="position: relative; display: inline-block; overflow: hidden; padding: 1px">'
	                  +'<img class="card-img-top" src="'+x+'/singa.jpg" style="max-width: 100%; height: 100%"><hr>'
	                +'</div>'
	                +'<h4 style="font-weight: bold">150만건 이상의 이용후기'
	                  +'<span class="label label-info info">'
	                    +'<span data-toggle="tooltip" title="viewed">257 <b class="glyphicon glyphicon-eye-open"></b></span>'
	                                  +'<span data-toggle="tooltip" title="viewed">3 <b class="glyphicon glyphicon-star"></b></span>'
	                                +'<span data-toggle="tooltip" title="Bootstrap version">3.0.3</span>'
	                  +'</span>'
	                +'</h4>'
	                +'<p>아고다 여행 커뮤니티의 솔직한 이용후기를 참고해 완벽한 여행을 위한 최적의 숙소를 찾아 보세요.</p>'
	              +'</div>'
	              +'<div class="face back">'
	                +'<input class="form-control" type="text" name="" value="ADKGDUI294">'
	                +'<button class="form-control" style="margin-top: 20px">복사하기</button>'
	                +'<p style="margin-top: 20px; font-size: 12px">예약 시 할인 코드를 입력할 수 있는 숙소 예약(예약일 기준: 2018년 4월 3일~2018년 5월 31일)에 한해 유효함.</p>'
	                +'<hr style="border: 2px solid gray">'
	                +'<button class="btn btn-primary form-control" >숙소 검색하기</button>'
	              +'</div>'
	            +'</div>'
	          +'</div>'
	        +'</div>'
	        +'<div class="col-sm-4">'
	          +'<div class="thumbnail" style="min-height: 200px; padding: 20px;">'
	            +'<div class="card-img" style="position: relative; display: inline-block; overflow: hidden; padding: 1px">'
	              +'<img class="card-img-top" src="'+x+'/singa.jpg" style="max-width: 100%; height: 100%">      '
	            +'</div>            '
	            +'<span class="glyphicon glyphicon-refresh" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 70px"></span>'
	            +'<br><br><br>'
	            +'<h4 style="font-weight: bold;">아고다 보장제</h4>'
	            +'<p>아고다는 베스트 가격 제공을 위해 열심히 노력하고 있습니다. 더 낮은 가격을 발견한 경우 차액을 되돌려 드립니다.</p>'
	          +'</div>'
	        +'</div>'
	        +'<div class="col-sm-3">'
	          +'<div class="thumbnail" style="min-height: 200px; padding: 20px; margin-top: 50px">'
	            +'<div class="card-img" style="position: relative; display: inline-block; overflow: hidden; padding: 1px">'
	              +'<img class="card-img-top" src="'+x+'/singa.jpg" style="max-width: 100%; height: 100%"><hr>'
	            +'</div>'
	            +'<h4 style="font-weight: bold">연중무휴 24시간 고객센터</h4>'
	            +'<p>연중무휴 24시간 고객 지원 서비스를 17개 언어로 이용할 수 있습니다.</p>'
	          +'</div>'
	        +'</div>'
	      +'</div>  '
	    +'</div>'
	+'<!-- Carousel -->'
	    +'<div id="" class="container" style="margin-top: 50px">'
	      +'<div class="row">'
	        +'<div class="col-md-6 col-md-offset-3" style="border: 1px solid #333"></div>'
	      +'</div>'
	      +'<div id="myCarousel" class="carousel slide text-center" data-ride="carousel" style="padding: 50px 170px; min-height: 200px;">'
	        +'<!-- Bottom Carousel Indicators -->'
	        +'<ol class="carousel-indicators" style="bottom: 0px; margin-top: 30px">'
	          +'<li data-target="#myCarousel" data-slide-to="0" class="active">'
	            +'<span class="glyphicon glyphicon-search"></span>'
	          +'</li>'
	          +'<li data-target="#myCarousel" data-slide-to="1"></li>'
	          +'<li data-target="#myCarousel" data-slide-to="2"></li>'
	        +'</ol>'
	        +'<!-- Carousel Slides / Quotes -->'
	        +'<div class="carousel-inner" role="listbox">'
	          +'<div class="item active">'
	              +'<p style="font-size: 20px; font-weight: bold">아고다는 전 세계적으로 많고 다양한 숙소 옵션과 가장 낮은 가격을 끊임없이 찾아냅니다.</p>'
	          +'</div>'
	          +'<div class="item">'
	              +'<p style="font-size: 20px; font-weight: bold">아고다는 아시아 지역의 호텔과 게스트하우스에 있어 가장 주요한 숙소 웹사이트로 아주 방대한 객실 상품을 보유하고  있으며 베스트 요금을 제공합니다.</p>'
	          +'</div>'
	          +'<div class="item">'
	              +'<p style="font-size: 20px; font-weight: bold">아고다는 아시아 지역의 호텔과 게스트하우스에 있어 가장 주요한 숙소 웹사이트로 아주 방대한 객실 상품을 보유하고 있으며 베스트 요금을 제공합니다.</p>'
	          +'</div>'
	        +'</div>'
	            +'<!-- Carousel controls -->'
	            +'<a class="carousel-control left" href="#myCarousel" data-slide="prev" style="background-image: none;">'
	                +'<span class="glyphicon glyphicon-chevron-left" style="color: #333"></span>'
	            +'</a>'
	            +'<a class="carousel-control right" href="#myCarousel" data-slide="next" style="background-image: none;">'
	                +'<span class="glyphicon glyphicon-chevron-right" style="color: #333"></span>'
	            +'</a>'
	      +'</div>'
	      +'<div class="row" style="margin-top: 30px">'
	        +'<div class="col-md-6 col-md-offset-3" style="border: 1px solid #333"></div>'
	      +'</div>'
	    +'</div>'
	  +'</div>'
	+'<!-- Youtube 동영상 -->'
	  +'<div class="container text-center" style="margin-top: 50px; margin-bottom: 50px;">'
	    +'<img id="img-youtube" src="https://goo.gl/pMKvTN" style="width: 100%; max-height: 400px; filter: brightness(50%);">'
	  +'</div>'
	+'</div>'
	+''
	+'<div class="container text-center">'
	  +'<h3>한국인이 사랑하는 여행지</h3>'
	+'</div>'
	+'<!-- Grid Image -->'
	+'<div id="res-content" class="container">'
	  +'<div class="one" style="position: relative;">'
	    +'<div style="z-index: 100; position: absolute; color: white; top: 50%; left: 50%; transform: translate(-50%, -50%); line-height: 40px">'
	      +'<p style="font-size: 40px; font-weight: bold; margin-bottom: 0px;">NewYork</p>'
	      +'<p style="font-size: 20px; font-weight: bold; margin-bottom: 0px;">미국</p>'
	    +'</div>    '
	    +'<img src="https://goo.gl/bRFns2" style="max-width: 100%; min-height: 100%; display: block;">  '
	  +'</div>'
	  +'<div class="two" style="position: relative;">'
	    +'<div style="z-index: 100; position: absolute; color: white; top: 50%; left: 50%; transform: translate(-50%, -50%); line-height: 40px">'
	      +'<p style="font-size: 40px; font-weight: bold; margin-bottom: 0px;">Barcelona</p>'
	      +'<p style="font-size: 20px; font-weight: bold; margin-bottom: 0px;">스페인</p>'
	    +'</div>  '
	    +'<img src="https://i.ytimg.com/vi/9GUJ4CZnqQ4/maxresdefault.jpg" style="max-width: 100%; min-height: 100%">'
	  +'</div>'
	  +'<div class="three" style="position: relative;">'
	    +'<div style="z-index: 100; position: absolute; color: white; top: 50%; left: 50%; transform: translate(-50%, -50%); line-height: 40px">'
	      +'<p style="font-size: 40px; font-weight: bold; margin-bottom: 0px;">Dubrovnik</p>'
	      +'<p style="font-size: 20px; font-weight: bold; margin-bottom: 0px;">크로아티아</p>'
	    +'</div>'
	    +'<img src="http://cfile10.uf.tistory.com/image/2520323355A7349E335F35" style="max-width: 100%; min-height: 100%">'
	  +'</div>'
	  +'<div class="four" style="position: relative;">'
	    +'<div style="z-index: 100; position: absolute; color: white; top: 50%; left: 50%; transform: translate(-50%, -50%); line-height: 40px">'
	      +'<p style="font-size: 40px; font-weight: bold; margin-bottom: 0px;">ToKyo</p>'
	      +'<p style="font-size: 20px; font-weight: bold; margin-bottom: 0px;">일본</p>'
	    +'</div>'
	    +'<img src="https://goo.gl/HJJ1sM" style="max-width: 100%; min-height: 100%">'
	  +'</div>'
	  +'<div class="five" style="position: relative;">'
	    +'<div style="z-index: 100; position: absolute; color: white; top: 50%; left: 50%; transform: translate(-50%, -50%); line-height: 40px">'
	      +'<p style="font-size: 40px; font-weight: bold; margin-bottom: 0px;">DaNang</p>'
	      +'<p style="font-size: 20px; font-weight: bold; margin-bottom: 0px;">베트남</p>'
	    +'</div>'
	    +'<img src="https://goo.gl/ByHX2w" style="max-width: 100%; min-height: 100%">'
	  +'</div>'
	  +'<div class="six" style="position: relative;">'
	    +'<div style="z-index: 100; position: absolute; color: white; top: 50%; left: 50%; transform: translate(-50%, -50%); line-height: 40px">'
	      +'<p style="font-size: 40px; font-weight: bold; margin-bottom: 0px;">MarinaBay</p>'
	      +'<p style="font-size: 20px; font-weight: bold; margin-bottom: 0px;">싱가폴</p>'
	    +'</div>'
	    +'<img src="https://goo.gl/XubuoF" style="max-width: 100%; min-height: 100%">'
	  +'</div>'
	+'</div>'
	+'<div class="container-fluid" style="background-color: #e9e9e9">'
	  +'<div class="container" style="min-height: 300px;">hello</div>'
	+'</div>';
};

var resNav=()=>{
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
	+'<br>'
	+'<br>'
	+'<br>';
};

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
>>>>>>> refs/heads/Youjin
};