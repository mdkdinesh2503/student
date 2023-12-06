// overall script starts

function OpenPage() {
  if (confirm("Redirect to Login page..") == true) {
    window.location = "index.html";
    return false;
  }
}

// student dashboard javascript starts here

function updateClock() {
  var now = new Date();

  var dname = now.getDay(),
    mo = now.getMonth(),
    dnum = now.getDate(),
    yr = now.getFullYear(),
    hou = now.getHours(),
    min = now.getMinutes(),
    sec = now.getSeconds(),
    pe = "AM";

  if (hou >= 12) {
    pe = "PM";
  }

  if (hou == 0) {
    hou = 12;
  }

  if (hou > 12) {
    hou = hou - 12;
  }

  Number.prototype.pad = function (digits) {
    for (var n = this.toString(); n.length < digits; n = 0 + n);
    return n;
  };

  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Augest",
    "September",
    "October",
    "November",
    "December",
  ];
  var week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var ids = [
    "dayname",
    "month",
    "daynum",
    "year",
    "hour",
    "minutes",
    "seconds",
    "period",
  ];
  var values = [
    week[dname],
    months[mo],
    dnum.pad(2),
    yr,
    hou.pad(2),
    min.pad(2),
    sec.pad(2),
    pe,
  ];

  for (var i = 0; i < ids.length; i++) {
    document.getElementById(ids[i]).firstChild.nodeValue = values[i];
  }
}

function initClock() {
  updateClock();
  window.setInterval("updateClock()", 1);
}

// student dashboard javascript ends here

// student details javascript starts here

function printFunction() {
  var printbutton = document.getElementById("pntbtn");
  var submitbutton = document.getElementById("smtbtn");
  var Header_part = document.getElementById("header-part");
  var menu_btn = document.getElementById("menu-btn");

  printbutton.style.visibility = "hidden";
  submitbutton.style.visibility = "hidden";
  Header_part.style.visibility = "hidden";
  menu_btn.style.visibility = "hidden";
  window.print();
  printbutton.style.visibility = "visible";
  submitbutton.style.visibility = "visible";
  Header_part.style.visibility = "visible";
  menu_btn.style.visibility = "visible";
}       

// student details javascript ends here

// student Attendance javascript starts here

function SetDate() {
  var date = new Date();

  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();
  var minutes = date.getMinutes();
  var hours = date.getHours() > 12 ? date.getHours() : date.getHours() + 12;
  var week = date.getDay();
  var select = document.getElementById("att");
  var Submitbtn = document.getElementById("smtbtn");
  var option1 = document.getElementById("hide1");
  var Absent = document.getElementById("abs").value;
  var ampm = "AM";

  if (hours >= 12) {
    ampm = "PM";
  }

  if (month < 10) month = "0" + month;
  if (day < 10) day = "0" + day;
  if (hours < 10) hours = "0" + date.getHours();
  if (minutes < 10) minutes = "0" + minutes;

  var today = year + "-" + month + "-" + day;
  var time = hours + ":" + minutes;
  document.getElementById("myDate").value = today;
  document.getElementById("mytime").value = time;

  if (week == "6" || week == "7") {
    select.disabled = true;
    Submitbtn.hidden = true;
  }

  if (
    (time < "09:00" && ampm == "AM") ||
    (time > "11:00" && ampm == "AM") ||
    ampm == "PM"
  ) {
    select.disabled = true;
    Submitbtn.hidden = true;
  }

  if (time > "09:15" && ampm == "AM") {
    option1.hidden = true;
  }

  if (time > "09:30" && ampm == "AM") {
    select.value = Absent;
    select.disabled = true;
  }
}

function CheckAttDetails() {
    var blur = document.getElementById("AttHide");
    blur.classList.toggle("active");
    var AttPopup = document.getElementById("AttPopup");
    AttPopup.classList.toggle("active");
}

// student Attendance javascript ends here

// student Report javascript starts here

function getDate() {
  var date = new Date();

  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();
  var minutes = date.getMinutes();
  var hours = date.getHours();
  var ampm = "AM";

  if (hours >= 12) {
    ampm = "PM";
  }

  if (hours == 0) {
    hours = 12;
  }

  if (hours > 12) {
    hours = hours - 12;
  }

  if (month < 10) month = "0" + month;
  if (day < 10) day = "0" + day;
  if (hours < 10) hours = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes;

  var today = year + "-" + month + "-" + day;
  var time = hours + ":" + minutes;
  document.getElementById("reportDate").value = today;
  document.getElementById("reporttime").value = time;
}

// student Report javascript ends here

// student fees javascript starts here

function submitfeesdetails() {
    alert("Redirecting to Fees Details Page");
    window.location = "StudentFeesview.html";
    return false;
}

function CheckPaymentDetails() {
    var blur = document.getElementById("PayHide");
    blur.classList.toggle("active");
    var payPopup = document.getElementById("payPopup");
    payPopup.classList.toggle("active");
}

// student fees javascript ends here

// Student Result page view individual section starts here

function ResultPage() {
  window.location = "ResultViewPage.html";
  return false;
}

// Student Result page view individual section ends here

function openExamHallAllocation() {
  var hide1 = document.getElementById("hide1");
  var hide2 = document.getElementById("hide2");
  var hide3 = document.getElementById("hide3");
  var hide4 = document.getElementById("hide4");
  hide1.style.visibility = "visible";
  hide1.style.display = "block";

  hide2.style.display = "none";
  hide2.style.visibility = "hidden";

  hide3.style.display = "none";
  hide3.style.visibility = "hidden";

  hide4.style.display = "none";
  hide4.style.visibility = "hidden";
}

function openExamTimetable() {
  var hide1 = document.getElementById("hide1");
  var hide2 = document.getElementById("hide2");
  var hide3 = document.getElementById("hide3");
  var hide4 = document.getElementById("hide4");
  hide1.style.visibility = "hidden";
  hide1.style.display = "none";

  hide2.style.display = "block";
  hide2.style.visibility = "visible";

  hide3.style.display = "none";
  hide3.style.visibility = "hidden";

  hide4.style.display = "none";
  hide4.style.visibility = "hidden";
}

function openPayExamFees() {
  var hide1 = document.getElementById("hide1");
  var hide2 = document.getElementById("hide2");
  var hide3 = document.getElementById("hide3");
  var hide4 = document.getElementById("hide4");
  hide1.style.visibility = "hidden";
  hide1.style.display = "none";

  hide2.style.display = "none";
  hide2.style.visibility = "hidden";

  hide3.style.display = "block";
  hide3.style.visibility = "visible";

  hide4.style.display = "none";
  hide4.style.visibility = "hidden";
}

function openExamFeesPaymentList() {
  var hide1 = document.getElementById("hide1");
  var hide2 = document.getElementById("hide2");
  var hide3 = document.getElementById("hide3");
  var hide4 = document.getElementById("hide4");
  hide1.style.visibility = "hidden";
  hide1.style.display = "none";

  hide2.style.display = "none";
  hide2.style.visibility = "hidden";

  hide3.style.display = "none";
  hide3.style.visibility = "hidden";

  hide4.style.display = "block";
  hide4.style.visibility = "visible";
}
