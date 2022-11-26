function Nhanvien(_user_Taikoan, _hoTenNV, _eMail, _pass, _ngayLam, _luongCoBan, _chucVu, _gioLam, _tongLuong, _xepLoai) {

    this.user_Taikoan = _user_Taikoan
    this.hoTenNV = _hoTenNV
    this.eMail = _eMail
    this.pass = _pass
    this.ngayLam = _ngayLam
    this.luongCoBan = _luongCoBan
    this.chucVu = _chucVu
    this.gioLam = _gioLam
    this.tongLuong = 0
    this.xepLoai = _xepLoai

    //     +nếu nhân viên có giờ làm trên 192h (>=192): nhân viên xuất sắc
    // +nếu nhân viên có giờ làm trên 176h (>=176): nhân viên giỏi
    // +nếu nhân viên có giờ làm trên 160h (>=160): nhân viên khá
    // +nếu nhân viên có giờ làm dưới 160h: nhân viên trung bình


    this.tinhXepLoai = function () {
        if (this.gioLam >= 192) {
            this.xepLoai ="Xuât sắc"
            return
        }

        if (176 <= this.gioLam &&   this.gioLam < 192) {
            this.xepLoai ="Giỏi"
            return
        }

        if (160 <= this.gioLam && this.gioLam<= 176) {
            this.xepLoai ="Khá"
            return
        }

        if (this.gioLam < 160) {
            this.xepLoai ="Trung bình"
            return
        }
    }


    this.tinhTongLuong = function () {
        if (this.chucVu == "Sếp") {
            this.tongLuong = this.luongCoBan * 3
        }
        if (this.chucVu == "Trưởng phòng") {
            this.tongLuong = this.luongCoBan * 2
        }
        if (this.chucVu == "Nhân viên") {
            this.tongLuong = this.luongCoBan * 1
        }
    }
}

