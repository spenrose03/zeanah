(function () {

    const idleDurationSecs = 360;    // X number of seconds
    const redirectUrl = 'index.html';  // Redirect idle users to this URL
    let idleTimeout; // variable to hold the timeout, do not modify

    const resetIdleTimeout = function() {

        // Clears the existing timeout
        if(idleTimeout) clearTimeout(idleTimeout);

        // Set a new idle timeout to load the redirectUrl after idleDurationSecs
        idleTimeout = setTimeout(() => location.href = redirectUrl, idleDurationSecs * 1000);
    };

    // Init on page load
    resetIdleTimeout();

    // Reset the idle timeout on any of the events listed below
    ['click', 'touchstart', 'mousemove'].forEach(evt => 
        document.addEventListener(evt, resetIdleTimeout, false)
    );

})();

$(document).ready(function() {
	$("body").on('click', '.menu-open', function() {
		$(".menu-container").toggleClass("menu-show");
        $(".menu-open").toggleClass("open-menu");
	});
    $("body").on('click', '.classroom-1', function() {
		$(".classroom-1").toggleClass("classroom-click");
	});
    $("body").on('click', '.classroom-2', function() {
		$(".classroom-2").toggleClass("classroom-click");
	});
    $("body").on('click', '.classroom-3', function() {
		$(".classroom-3").toggleClass("classroom-click");
	});
    $("body").on('click', '.classroom-4', function() {
		$(".classroom-4").toggleClass("classroom-click");
	});
    $("body").on('click', '.classroom-5', function() {
		$(".classroom-5").toggleClass("classroom-click");
	});
    $("body").on('click', '.classroom-6', function() {
		$(".classroom-6").toggleClass("classroom-click");
	});
    $("body").on('click', '.classroom-7', function() {
		$(".classroom-7").toggleClass("classroom-click");
	});
    $("body").on('click', '.classroom-8', function() {
		$(".classroom-8").toggleClass("classroom-click");
	});
    $("body").on('click', '.classroom-9', function() {
		$(".classroom-9").toggleClass("classroom-click");
	});
    $("body").on('click', '.classroom-10', function() {
		$(".classroom-10").toggleClass("classroom-click");
	});
    $("body").on('click', '.classroom-11', function() {
		$(".classroom-11").toggleClass("classroom-click");
	});
    $("body").on('click', '.classroom-12', function() {
		$(".classroom-12").toggleClass("classroom-click");
	});
    $("body").on('click', '.classroom-13', function() {
		$(".classroom-13").toggleClass("classroom-click");
	});
    $("body").on('click', '.classroom-14', function() {
		$(".classroom-14").toggleClass("classroom-click");
	});
    $("body").on('click', '.classroom-15', function() {
		$(".classroom-15").toggleClass("classroom-click");
	});
    $("body").on('click', '.classroom-16', function() {
		$(".classroom-16").toggleClass("classroom-click");
	});
    $("body").on('click', '.classroom-17', function() {
		$(".classroom-17").toggleClass("classroom-click");
	});
    $("body").on('click', '.hamburger', function() {
		$(".hamburger").toggleClass("is-active");
	});
});
