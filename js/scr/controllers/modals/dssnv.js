function danhSachNV() {
    this.arr = [];
    this.themNV = function (nv) {
        this.arr.push(nv)
    }

    this.timViTriNV = function (maNV) {
        var index = -1
        for (var i = 0; i < this.arr.length; i++) {
            var nv = this.arr[i]
            // nv.user_Taikoan lấy biến user_Taikoan từ file nhanvien.js 
            // và tạo biến trùng tên với biến nv bên file main.js
            // mấy đọc từ  file này qua file kia 
            // như bạn đọc một cuốn sách từ trang  này qua trang kia 
            // có chung nhân nhân vật và tên 
            if (nv.user_Taikoan === maNV) {
                index = i;
                break;
            }
        }
        return index;

    }

    this.xoaNV = function (maNV) {
        var index = this.timViTriNV(maNV)
        if (index != -1) {
            this.arr.splice(index, 1)
        }
    }

    this.layThongTinChiTietNV = function (maNV) {
        var index = this.timViTriNV(maNV)
        if (index != -1) {
            return this.arr[index]
        }
    }

    this.capNhatNV = function (nv) {
        var index = this.timViTriNV(nv.user_Taikoan)
        if (index !== -1) {
            this.arr[index] = nv
        }
    }


    this.timKiemNV = function (keyWork) {
        var mangTimKiem = [];
        for (var i = 0; i < this.arr.length; i++) {
            var nv = this.arr[i];
            var xepLoaiNVLowerCase = nv.xepLoai.toLowerCase();
            var keyWordLowerCase = keyWork.toLowerCase();
            if (xepLoaiNVLowerCase.indexOf(keyWordLowerCase) !== -1) {
                mangTimKiem.push(nv)
            }
        }
        return mangTimKiem
    }
};
