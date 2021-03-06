<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<c:set var="context" value="<%=request.getContextPath()%>"></c:set>
<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>아가다(Agada) 사설 웹사이트</title>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<link rel="stylesheet" href="http://netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.min.css"></link>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-daterangepicker@2.1.30/daterangepicker.css"></link>
<link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css"></link>
<link rel="stylesheet" href="${context}/resources/css/style.css" />
<link rel="shortcut icon" href="${context}/resources/img/favicon.ico">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap-daterangepicker@2.1.30/moment.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap-daterangepicker@2.1.30/daterangepicker.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
<script src="${context}/resources/js/app.js"></script>
<script src="${context}/resources/js/ydapp.js"></script>
<script src="${context}/resources/js/mwapp.js"></script>
<script src="${context}/resources/js/jkapp.js"></script>
<script src="${context}/resources/js/yjapp.js"></script>
<script src="${context}/resources/js/jquery.cookie.js"></script>
<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAMoS2m_FtvWU_2erB5C3r-VdM8NYbfsB4"></script>
</head>
<body>
	<div id="nav"></div>
	<div id="content"></div>
	<div id="footer"></div>
</body>
<script>
	app.init('${context}');
</script>
</html>