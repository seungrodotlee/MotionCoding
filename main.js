$(window).ready(function () {
  var timing = 0;

  $("#introText1").css("opacity", "1");

  timing += 3000;
  setTimeout(function () {
    $("#textMove").addClass("textGo");
  }, timing);

  timing += 2800;
  setTimeout(function () {
    $("#introText1").css("display", "none");
    $("#introText2").css("opacity", "1");
    $(".letterPiece").css("opacity", "1");
  }, timing);

  timing += 2400;
  setTimeout(function () {
    $("#back").removeClass("scaleOff");
  }, timing);

  timing += 200;

  setTimeout(function () {
    $("#computer .scaleOff").removeClass("scaleOff");
    $(".goUp").removeClass("goUp");
  }, timing);

  timing += 2800;
  setTimeout(function () {
    $("#newback").removeClass("scaleOff");
    $("#newComputerMonitorWrap").removeClass("scaleYOff");
    $("#newMonitor").removeClass("scaleOff");
    $("#newMonitorBottom").removeClass("scaleYOff");
    $("#logo").removeClass("scaleOff");
    $("#neck").addClass("newNeck");
    $("#neckShadow").addClass("shadowOn");
    $("#monitorWrap").addClass("scaleYOff");
    $("#computerBody").addClass("newComputerFoot");
  }, timing);

  timing += 1500;
  setTimeout(function () {
    $("#newMonitorBottom, #neck, #computerBody").removeAttr("style");
    $("#firstText").addClass("textOn");
  }, timing);

  timing += 1000;
  setTimeout(function () {
    $("#jju").addClass("raiseUp");
    $("#hw").removeClass("hide");
  }, timing);

  timing += 2000;
  setTimeout(function () {
    $("#textWrap").addClass("scaleYOff");
  }, timing);

  timing += 2000;
  setTimeout(function () {
    $("#lastback").removeClass("scaleOff");
    $("#newMonitor").addClass("phoneMonitor");
    $("#newMonitorBottom").addClass("scaleXOff");
    $("#neck").removeClass("newNeck");
    $("#neck").css("height", "60px");
    $("#neck").addClass("scaleXOff");
    $("#computerBody").removeClass("newComputerFoot");
    $("#computerBody").css("height", "10px");
    $("#computerBody").addClass("scaleXOff");
  }, timing);

  timing += 500;
  setTimeout(function () {
    $("#newComputerMonitorWrap").addClass("phoneWrap");
    $("#myName").removeClass("scaleXOff");
    $("#myName").css("padding", "10px");
  }, timing);
})
