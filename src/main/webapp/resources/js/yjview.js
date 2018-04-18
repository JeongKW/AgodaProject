/*<!-- Modal -->
  <div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">

        <div class="modal-header">
        <!--   <button type="button" class="close" data-dismiss="modal">&times;</button> -->
            <div class="col-sm-6"> 
             <div><h3 align="center">회원가입</h3></div>
            
        <div class="modal-body">
           
           <div class="joinDiv">
               <button class="btn btn-primary btn-block"><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/aMltqKRlCHD.png">페이스북으로 가입하기</button>
             </div> 
           
            <div class="joinDiv" style="margin-top: 30px;">
              <label>아이디*</label>
              <input type="text" class="form-control" name="" >
            </div>
            <div class="joinDiv">
              <label>비밀번호*</label>
              <input type="text" class="form-control" name="" >
            </div>
            <div class="joinDiv">
              <label>비밀번호 재 확인*</label>
              <input type="text" class="form-control" name="" >
            </div>
            <div class="joinDiv">
              <label>이름*</label>
              <input type="text" class="form-control" name="" >
            </div>
            <div class="joinDiv">
              <label>핸드폰 번호*</label>
              <input type="text" class="form-control" name="" >
            </div>
            <div class="joinDiv">
              <div>
                <label>이메일*</label>
                <input type="text" class="form-control" name="" >
              </div>
              
              <div>
                <button>인증 메일 발송</button>
              </div>
              <div>
                <input type="checkbox" name="" >
                <span style="font-size:12px; ">특가 상품 정보 및 할인 쿠폰 관련 이메일 수신에 동의합니다.</span>
              </div>
            </div>
            <div>
              <div class="joinDiv">
                <button class="btn btn-default btn-block" style="margin-top: 30px;">회원가입</button>
                <span style="font-size:2px; ">계속 진행함으로써 아고다의 이용 약관 및 개인정보 처리방침에 동의합니다.</span>
              </div>
            </div>
           </div>
        <div class="modal-footer">
            <div class="joinDiv">
              <span>아고다 회원이신가요?</span>
              <button class="btn btn-default btn-block">로그인</button>
            </div>
        </div>
      </div>
        <div class="col-sm-5" style="background:#e6f7ff; width: 50%; text-align: center;  min-height: 740px; height: 100%; padding: 0px;">
        <div><img src="https://cdn6.agoda.net/images/desktop/login/illustration-deals-social.svg"></div>
        <div>[최대 30% OFF] 회원 특가 상품! <br>회원 가입하는 순간, 가격이 내려갑니다.</div> 
    </div>
    </div>
  </div>
 </div> 
  </div>
  </div>
  </body>
</html>
*/

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