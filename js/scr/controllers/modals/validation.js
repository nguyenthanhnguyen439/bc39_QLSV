function Validation_test() {
    this.kiemTraRong = function (value, errorID, mess) {
        if (value === "") {
            getEle(errorID).innerHTML = mess;
            getEle(errorID).style.display = " block"
            return false;
        }
        getEle(errorID).innerHTML = "";
        getEle(errorID).style.display = " none";
        return true;
    }

    this.kiemTraKiTu = function (value, errorID, mess, min, max) {
        if (min <= value.trim().length && value.trim().length <= max) {
            getEle(errorID).innerHTML = "";
            getEle(errorID).style.display = "none";
            return true;
        }
        getEle(errorID).innerHTML = mess;
        getEle(errorID).style.display = "block";
        return false;
    }

    this.kiemTraChuoiKiTu = function (value, errorID, mess) {
        var letter = "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳýỵỷỹ\\s]+$"
        if (value.match(letter)) {
            getEle(errorID).innerHTML = ""
            getEle(errorID).style.display = "none";
            return true;
        }

        getEle(errorID).innerHTML = mess;
        getEle(errorID).style.display = "block";
        return false;
    }

    this.kiemTraEmail = function (value, errorID, mess) {
        var letter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (value.match(letter)) {
            getEle(errorID).innerHTML = "";
            getEle(errorID).style.display = " none"
            return true;
        }
        getEle(errorID).innerHTML = mess;
        getEle(errorID).style.display = " block";
        return false
    }

    this.kiemTraMatKhau = function (value, errorID, mess) {
        var letter = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/;
        if (value.match(letter)) {
            getEle(errorID).innerHTML = "";
            getEle(errorID).style.display = " none";
            return true
        }
        getEle(errorID).innerHTML = mess;
        getEle(errorID).style.display = "block";
        return false;
    }

    this.kiemTraNgay = function (value, errorID, mess) {
        //mm/dd/yyyy: /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/
        var letter = /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-] \d{ 4 }$/;
        if (value.match(letter)) {
            getEle(errorID).innerHTML = "";
            getEle(errorID).style.display = " none";
            return true
        }

        getEle(errorID).innerHTML = mess;
        getEle(errorID).style.display = " block";
        return false;
    }

    this.kiemTraSo = function (value, errorID, mess) {
        var letter = /^[0-9]+$/;
        if (value.match(letter)) {
            getEle(errorID).innerHTML = "";
            getEle(errorID).style.display = " none";
            return true;
        }

        getEle(errorID).innerHTML = mess;
        getEle(errorID).style.display = " block";
        return false
    }

    this.kiemTraLuong_GioLam = function (value, errorID, mess, min, max) {
        if (min <= value && value <= max) {
            getEle(errorID).innerHTML = "";
            getEle(errorID).style.display = "none";
            return true;
        }
        getEle(errorID).innerHTML = mess;
        getEle(errorID).style.display = " block";
        return false;
    }

    this.kiemTraChucVu = function (idSelect, errorID, mess) {
        if (getEle(idSelect).selectedIndex !== 0) {
            getEle(errorID).innerHTML = "";
            getEle(errorID).style.display = "none";
            return true;
        }
        getEle(errorID).innerHTML = mess;
        getEle(errorID).style.display = " block";
        return false;
    }


    this.kiemTraTrungMa = function (value, errorID, mess, data) {
        var exist = false;
        for (var i = 0; i < data.length; i++) {
            var nv = data[i];
            if (nv.user_Taikoan == value) {
                exist = true;
                break
            }
        }

        if (exist ==false) // exist == false
        {
            getEle(errorID).innerHTML = "";
            getEle(errorID).style.display = " none";
            return true;
        }

        getEle(errorID).innerHTML = mess;
        getEle(errorID).style.display = " block";
        return false;
    }
}