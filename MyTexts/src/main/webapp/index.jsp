<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>My Texts</title>
<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
<link rel="stylesheet" href="<c:url value="/resources/css/app.css" />">
</head>
<body>
	<div class="myTexts">
        <section id="sectionView">
            <div class="container">
                <h2>My Texts</h2>
                <div class="row">
                    <div class="col-sm-12">
                        <input type="text" class="form-control" id="inputSearch" placeholder="search">
                    </div>
                    <div class="col-sm-12" class="textsList">
                        <ul id="addedTexts"></ul>
                    </div>
                    <div class="col-sm-12">
                        <a class="btn btn-default add-mytext" href="#" role="button">Add</a>
                    </div>
                </div>
            </div>
        </section>
        <section id="sectionEdit" class="hidden">
	        <div class="container">
	            <h2>Add Text</h2>
	            <div class="form-horizontal">
	                <div class="form-group">
	                    <label for="inputTitle" class="col-sm-1 control-label">Title</label>
	                    <div class="col-sm-10">
	                        <input type="text" class="form-control" id="inputTitle" placeholder="">
	                    </div>
	                  </div>
	                <div class="form-group">
	                    <label for="inputTextDesc" class="col-sm-1 control-label">Text</label>
	                    <div class="col-sm-10">
	                        <textarea class="form-control" id="inputTextDesc" rows="4"></textarea>
	                    </div>
	                  </div>
	                <div class="form-group">
	                    <div class="col-sm-offset-1 col-sm-10">
	                      <a class="btn btn-default saveBtn" href="#" role="button">Add</a>
	                    </div>
	                </div>
	            </div>
	        </div>
	    </section>
    </div>
    <script type="text/template" id="item-template">
			<div class="view">
                <a href="#" class="text-item"><span>{{ title }}</span></a>
                <div class="edit hidden">
                    <h2>Edit Text</h2>
                    <div class="form-horizontal">
                        <div class="form-group">
                            <label for="inputTitleEdit-{{ itemId }}" class="col-sm-1 control-label">Title</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="inputTitleEdit-{{ itemId }}" placeholder="">
                            </div>
                          </div>
                        <div class="form-group">
                            <label for="inputTextDescEdit-{{ itemId }}" class="col-sm-1 control-label">Text</label>
                            <div class="col-sm-10">
                                <textarea type="text" class="form-control" id="inputTextDescEdit-{{ itemId }}" rows="4"></textarea>
                            </div>
                          </div>
                        <div class="form-group">
                            <div class="col-sm-offset-1 col-sm-10">
                              <a class="btn btn-default saveBtn-edit" href="#" role="button">Save</a>
                            </div>
                        </div>
                    </div>
                </div>
			</div>
		</script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/moment-with-locales.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.3.3/backbone-min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/backbone-localstorage.js/1.1.16/backbone.localStorage-min.js"></script>
	<script src="<c:url value="/resources/js/models/mytext-model.js" />"></script>
	<script src="<c:url value="/resources/js/collections/mytexts-collection.js" />"></script>
	<script src="<c:url value="/resources/js/views/mytext-view.js" />"></script>
	<script src="<c:url value="/resources/js/views/app-view.js" />"></script>
	<script src="<c:url value="/resources/js/app.js" />"></script>
</body>
</html>