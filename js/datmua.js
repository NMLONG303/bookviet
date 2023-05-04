
$(document).ready(function () {
  let dssp = JSON.parse(localStorage.getItem("dssp"))
      let maSp = localStorage.getItem("maSp")
  
      let temp = dssp.find(sp => sp.maSp == maSp)
  
    
    function capnhatTien() { 
      let regexSoluong = /^\d+$/
  
      let soluong = $('#sl').val();
      if (soluong <=0){
        alert("Số lượng phải lớn hơn 0")
          return false;
      }
          
      if (!regexSoluong.test(soluong)){
        alert("Chỉ được nhập số")
        return false;
      }
      else{
        let thanhtien = Number($('#sl').val()) *Number(temp.donGia*(1-temp.sale));
      $('#thanhTien').html(thanhtien+".000 đ");
        let tongtien = Number(thanhtien) + Number($('#ship option:selected').val());
        $('#tongTien').html(tongtien+".000 đ");
      return true;
      }
      
    }
    $('#sl').change(function(e){
      capnhatTien();
    })
    $("#ship").change(function () {
      let phiship = $("#ship option:selected").val();
      $("#tbShip").html(phiship+".000 đ")
      capnhatTien();
  })

    if(capnhatTien()){
      $("#btndathang").click(function () {
        alert("Đã đặt hàng thành công")
    })
  }
    

})
