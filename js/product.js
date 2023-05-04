function setMasp(maSp) {
    localStorage.setItem("maSp", maSp)
  }
  
  $(document).ready(function () {
  
      let dssp = JSON.parse(localStorage.getItem("dssp"))
      let maSp = localStorage.getItem("maSp")
  
      let temp = dssp.find(sp => sp.maSp == maSp)
  
      $("#tenSp").html(temp.tenSp)
      function gia(sp){
        let temp =sp.donGia+".000 đ"
        $("#donGia").html(temp)
      }
      $(document).ready(function () {
        dssp.forEach(sp => {
            gia(temp)
        });
    })
      function giasl(sp){
        let temp =sp.donGia*(1-sp.sale) +".000 đ"
        $("#sale").html(temp)
      }
      $(document).ready(function () {
        dssp.forEach(sp => {
            giasl(temp)
        });
    })
      $("#moTa").html(temp.moTa)
      $("#soLuong").html(temp.soLuong)
      function napSP(sp) {
          let temp = "<img src='" + sp.hinhAnh + "' alt='' class='card-img'>"
          $("#ha").html(temp)
      }
      $(document).ready(function () {
          dssp.forEach(sp => {
              napSP(temp)
          });
      })
  
      
  
  });