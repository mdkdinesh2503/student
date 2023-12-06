// overall script starts

function OpenPage() {

    if (confirm("Redirect to Login page..") == true) {
        window.location = "index.html";
        return false;
    }

}

// Admin dashboard javascript starts here

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
    }

    var months = ["January", "February", "March", "April", "May", "June", "July", "Augest", "September", "October", "November", "December"];
    var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var ids = ["dayname", "month", "daynum", "year", "hour", "minutes", "seconds", "period"];
    var values = [week[dname], months[mo], dnum.pad(2), yr, hou.pad(2), min.pad(2), sec.pad(2), pe];

    for (var i = 0; i < ids.length; i++) {
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
    }

}

function initClock() {

    updateClock();
    window.setInterval("updateClock()", 1);

}

// Admin dashboard javascript ends here

// Admin Result page view individual section starts here 

function ResultPage() {
    window.location = "ResultViewPage.html";
    return false;
}

// Admin Result page view individual section ends here 

function openExamHallAllocation() {
    var hide1 = document.getElementById("hide1");
    var hide2 = document.getElementById("hide2");
    var hide3 = document.getElementById("hide3");
    hide1.style.visibility = "visible";
    hide1.style.display = "block";
  
    hide2.style.display = "none";
    hide2.style.visibility = "hidden";
  
    hide3.style.display = "none";
    hide3.style.visibility = "hidden";

  }
  
  function openExamTimetable() {
    var hide1 = document.getElementById("hide1");
    var hide2 = document.getElementById("hide2");
    var hide3 = document.getElementById("hide3");
    hide1.style.visibility = "hidden";
    hide1.style.display = "none";
  
    hide2.style.display = "block";
    hide2.style.visibility = "visible";
  
    hide3.style.display = "none";
    hide3.style.visibility = "hidden";
  
  }
  
  function openExamFeesPaymentList() {
    var hide1 = document.getElementById("hide1");
    var hide2 = document.getElementById("hide2");
    var hide3 = document.getElementById("hide3");
    hide1.style.visibility = "hidden";
    hide1.style.display = "none";
  
    hide2.style.display = "none";
    hide2.style.visibility = "hidden";
  
    hide3.style.display = "block";
    hide3.style.visibility = "visible";
  
  }
  