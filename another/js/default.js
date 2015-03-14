function loadContent() {
	loadNavigation();
	clickHandler();
	hoverHandler();
}

function loadNavigation() {
	$("#mainNavigation").load("main_nav.html");
}

function hoverHandler() {
	$(".thumbnail").hover(function() {
		$(this).find(".transparency").toggle();
		$(this).find(".caption").toggle();
	});
}

function clickHandler() {
	$(".dropdown-menu li a").click(function() {
		$(this).parents(".dropdown-menu").prev("button").find(".dropdown-content").text($(this).text());
	});
}