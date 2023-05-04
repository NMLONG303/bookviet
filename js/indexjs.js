var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("time").innerHTML = days + " Ngày " + hours + " Giờ "
  + minutes + " Phút " + seconds + " Giây";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("time").innerHTML = "EXPIRED";
  }
}, 1000);

function setMasp(maSp) {
  localStorage.setItem("maSp", maSp)
}

$(document).ready(function () {

    function ktten() {
        let ten = $('#txtten').val();
        let reten = /^([A-Z]([A-Z]|[a-z])*)( [A-Z]([A-Z]|[a-z]|)*)*$/;
        if (reten.test(ten)) {
            $('#errten').html("");
            return true;
        } else {
            $('#errten').html("Bắt đầu mỗi từ bằng chữ hoa và không được rỗng");
            return false;
        }
    };
    $('#txtten').blur(function(e) {
        ktten();
    });

    function ktqq() {
        let qq = $('#txtqq').val();
        let reqq = /^([A-Z]([A-Z]|[a-z])*)((, | )[A-Z]([A-Z]|[a-z])*)*$/;
        if (reqq.test(qq)) {
            $('#errqq').html("");
            return true;
        } else {
            $('#errqq').html("Bắt đầu mỗi từ bằng chữ hoa ngăn cách bằng dấu ', ' và không được rỗng vd: Gio Son, Gio Linh");
            return false;
        }
    };
    $('#txtqq').blur(function(e) {
        ktqq();
    });

    function ktemail() {
        let email = $('#txtemail').val();
        let reemail = /^\w*(@gmail.com)$/;
        if (reemail.test(email)) {
            $('#erremail').html("");
            return true;
        } else {
            $('#erremail').html("dạng xxxxx@gmail.com và không được rỗng");
            return false;
        }
    };
    $('#txtemail').blur(function(e) {
        ktemail();
    });

    function ktsdt() {
        let sdt = $('#txtsdt').val();
        let resdt = /^(0)[0-9]{3}(-)[0-9]{3}(-)[0-9]{3}$/;
        if (resdt.test(sdt)) {
            $('#errsdt').html("");
            return true;
        } else {
            $('#errsdt').html("dạng 0xxx-xxx-xxx và không được rỗng");
            return false;
        }
    };
    $('#txtsdt').blur(function(e) {
        ktsdt();
    });
    let stt = 0;
    $('#btn').click(function(e) {
       

        $('#bang').each(function(e) {
            stt++;
        });
        let ten = $('#txtten').val();
        let qq = $('#txtqq').val();
        let email = $('#txtemail').val();
        let sdt = $('#txtsdt').val();
        if (ktten() && ktsdt() && ktemail && ktqq()) {
            trnew = "<tr><td>" + stt + "</td><td>" + ten + "</td><td>" + qq + "</td><td>" + email + "</td><td>" + sdt + "</td></tr>";
            $('#bang').append(trnew);
        }
    });
});
