var dsnv = new danhSachNV()
var test = new Validation_test ();
var xoaTB = document.getElementsByClassName("sp-thongbao").innerHTML =""
// Lấy dữ liệu trên local storge
getLoocalStorge();

function getEle(id) {
    return document.getElementById(id)
}
// var demo = document.getElementsByTagName("option")[1]
// console.log(demo);

// [0][2] select thứ nhất optiont 2
// var chucVu =  document.getElementsByTagName("select")[0][2]
// console.log(chucVu);
/**
 * vòng lặp for i< 4 i++
 * if (document.getElementsByTagName("option")[i].onclick)
 * 
 * */


function thongTinNhanVien(isAdd) {
    var user = getEle("tknv").value
    var name = getEle("name").value
    var eMail = getEle("email").value
    var pass = getEle("password").value
    var ngayLam = getEle("datepicker").value
    var luongCoBan = getEle("luongCB").value
    var chucVu = getEle("chucvu").value
    var gioLam = getEle("gioLam").value
    var tongLuong
    var xepLoai

    
    var isValid= true

    if(isAdd == true){
       isValid &= test.kiemTraRong(user,"tbTKNV","Vui lòng nhập tài khoản") && test.kiemTraKiTu(user,"tbTKNV","Tài khoản có tối đa 4~6 ký tự",4,6)&& test.kiemTraTrungMa(user,"tbTKNV","Tài khoản này đã tồn tại",dsnv.arr);
    }
    
    isValid &= test.kiemTraRong(name,"tbTen","Vui lòng nhập họ và tên nhân viên") && test.kiemTraChuoiKiTu(name,"tbTen","Tên nhân viên là chữ");

    isValid &= test.kiemTraRong(eMail,"tbEmail","Vui lòng nhập email") && test.kiemTraEmail(eMail,"tbEmail","Vui lòng nhập đúng quy cách tenTaiKhoan@gmail.com");

    isValid &= test.kiemTraRong(pass,"tbMatKhau","Vui lòng nhập mật khẩu") && test.kiemTraKiTu(pass,"tbMatKhau","Mật khẩu phải có tối đa 6~ 10 ký tự", 6, 10) && test.kiemTraMatKhau(pass,"tbMatKhau","Mật khẩu phải có tối đa 6~ 10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt)");

    isValid &= test.kiemTraRong(ngayLam,"tbNgay","Vui lòng nhập ngày làm")

    isValid &= test.kiemTraRong(luongCoBan,"tbLuongCB","Vui lòng nhập mức lương cơ bản") && test.kiemTraSo(luongCoBan,"tbLuongCB","Lương cơ bản phải là số") && test.kiemTraLuong_GioLam(luongCoBan,"tbLuongCB","Lương cơ bản ít nhất là 1.000.000 và nhiều nhất là 20.000.000",1e6,20e6)

    isValid &= test.kiemTraChucVu("chucvu","tbChucVu","Vui lòng nhập chức vụ")

    isValid &= test.kiemTraRong(gioLam,"tbGiolam","Vui lòng nhập giờ làm")&& test.kiemTraSo(gioLam,"tbGiolam","Giờ làm phải là số") && test.kiemTraLuong_GioLam(gioLam,"tbGiolam","Số giờ làm ít nhất là 80h và nhiêuf nhất là 120h",80,200)

    if(isValid == false) 
    {return false}// isValid == false 
    // Nếu isValid == false thì trả về giá trị false cho biến nv nút [thêm] ở phần ("btnThemNV").onclick và [cập nhật] ở phần ("btnCapNhat").addEventListener
    //để đừng lại chương trình tránh lỗi không lấy được/ trả về được dữ liệu nhân viên cho dsnv.themNV(nv) và dsnv.capNhatNV(nv) 

    // gán các dữ liệu biến lấy từ các value của input vào đúng thứ tự các phần tử của Nhanvien của file nhanvien.js
    var nv = new Nhanvien(user, name, eMail, pass, ngayLam, luongCoBan, chucVu, gioLam, tongLuong, xepLoai)
    nv.tinhTongLuong()
    nv.tinhXepLoai()
    // trả về biến nv có chứa dữ liệu thông tin nhân viên cho nút [thêm] ở phần ("btnThemNV").onclick và [cập nhật] ở phần ("btnCapNhat").addEventListener 
    return nv
}
getEle("btnThem").onclick = function () {
    // biến lấy ngày tháng
    getEle("btnThemNV").style = "display: inline-block"
    getEle("btnCapNhat").style = "display: none"
    var toDate = new Date();

    getEle("tknv").disabled = false
    getEle("tknv").value=""
    getEle("name").value=""
    getEle("email").value=""
    getEle("password").value=""
    getEle("datepicker").value= toDate.getDate() +"/"+ (toDate.getMonth()+1) + "/" + toDate.getFullYear()
    getEle("luongCB").value=""
    getEle("chucvu").value= "Chọn chức vụ"
    getEle("gioLam").value=""
    
}

getEle("btnThemNV").onclick = function () {
    

    
    var nv = thongTinNhanVien(true)
    if(nv == false)   return
 
    // console.log(nv)
    dsnv.themNV(nv)
    // console.log(dsnv.arr);
    renderTable(dsnv.arr)
    setLocalStorge()
}

function setLocalStorge() {
    var dataString = JSON.stringify(dsnv.arr)
    localStorage.setItem("Danh sách nhân viên", dataString)
}

function getLoocalStorge() {
    if (localStorage.getItem("Danh sách nhân viên")) {
        var dataString = localStorage.getItem("Danh sách nhân viên")
        dsnv.arr = JSON.parse(dataString)
        renderTable(dsnv.arr)
    }
}

function renderTable(data) {
    var content = ""
    for (var i = 0; i < data.length; i++) {
        var nv = data[i]
        console.log({ nv });
        // tạo biến local nv
        // dùng biến nv gọi đến lớp đối tượng NhanVien => nv. để
        // lấy dữ liệu tài khoản , tên NV,v.v.v từ biến
        // nv.user_Taikoan , nv.hoTenNV
        content += `<tr>
        <td>${nv.user_Taikoan}</td>
        <td>${nv.hoTenNV}</td>
        <td>${nv.eMail}</td>
        <td>${nv.ngayLam}</td>
        <td>${nv.chucVu}</td>
        <td>${nv.tongLuong}</td>
        <td>${nv.xepLoai}</td>
        <td><button class="btn btn-primary" data-toggle="modal"
        data-target="#myModal" onclick ="edit_NV('${nv.user_Taikoan}')">Sửa</button>
       <button  class="btn btn-danger" onclick="delete_NV('${nv.user_Taikoan}')">Xóa</button></td>
     
        </tr>`;
        console.log(nv.user_Taikoan);
        console.log(nv.name);
        // <td>${nv.xeploai}</td>

        getEle("tableDanhSach").innerHTML = content
        console.log(nv)
    }
}


function delete_NV(maNV) {
    dsnv.xoaNV(maNV)
    renderTable(dsnv.arr)
    setLocalStorge()
}

function edit_NV(maNV) {
          
    getEle("tbTKNV").style.display = " none"

    getEle("tbTen").style.display = " none"

    getEle("tbEmail").style.display = " none"

    getEle("tbMatKhau").style.display = " none"

    getEle("tbNgay").style.display = " none"

    getEle("tbLuongCB").style.display = " none"

    getEle("tbChucVu").style.display = " none"

    getEle("tbGiolam").style.display = " none"


    getEle("btnThemNV").style = "display: none"

    getEle("btnCapNhat").style = "display: inline-block"
    var nv = dsnv.layThongTinChiTietNV(maNV)
    if (nv) {
        getEle("tknv").disabled = true

        getEle("tknv").value = nv.user_Taikoan
        getEle("name").value = nv.hoTenNV
        getEle("email").value = nv.eMail
        getEle("password").value = nv.pass
        getEle("datepicker").value = nv.ngayLam
        getEle("luongCB").value = nv.luongCoBan
        getEle("chucvu").value = nv.chucVu
        getEle("gioLam").value = nv.gioLam
       

    }
}

getEle("btnCapNhat").addEventListener("click", function () {
    var nv = thongTinNhanVien(false)
    if(nv == false)   return
    dsnv.capNhatNV(nv)
    renderTable(dsnv.arr)
    setLocalStorge()
});

getEle("searchName").addEventListener("keyup", function(){
    var keyWord = getEle("searchName").value
    var timKiem = dsnv.timKiemNV(keyWord)
    renderTable(timKiem)
})

