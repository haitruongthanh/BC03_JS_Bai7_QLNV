var ValidatorStaff = function () {
  this.checkEmtyInput = function (idInput, idSpan, message) {
    var valueInput = document.getElementById(idInput).value.trim();
    // console.log({ valueInput });
    if (!valueInput) {
      document.getElementById(idSpan).style.display = "block";
      document.getElementById(idSpan).innerHTML = message;
      return false;
    } else {
      //   document.getElementById(idSpan).innerHTML = "";
      return true;
    }
  };

  //validate ID
  this.checkIdLength = function (idInput, idSpan, message) {
    var valueInput = document.getElementById(idInput).value.trim();

    if (valueInput.length < 4 || valueInput.length > 6) {
      document.getElementById(idSpan).style.display = "block";
      document.getElementById(idSpan).innerHTML = message;
      return false;
    } else {
      document.getElementById(idSpan).innerHTML = "";
      return true;
    }
  };

  this.checkIdPatern = function (idInput, idSpan, message) {
    var valueInput = document.getElementById(idInput).value.trim();
    var number = /^[0-9]*$/;
    if (number.test(valueInput)) {
      document.getElementById(idSpan).innerHTML = "";
      return true;
    } else {
      document.getElementById(idSpan).style.display = "block";
      document.getElementById(idSpan).innerHTML = message;
      return false;
    }
  };

  this.checkIdDuplicate = function (id, arrayStaff) {
    var index = arrayStaff.findIndex(function (staff) {
      return staff.acc == id;
    });

    if (index == -1) {
      document.getElementById("tbTKNV").innerHTML = "";
      return true;
    } else {
      document.getElementById("tbTKNV").style.display = "block";
      document.getElementById("tbTKNV").innerHTML =
        "Mã Nhân viên đã tồn tại, vui lòng nhập lại";
      return false;
    }
  };

  //validate NAME
  this.chekNamePatern = function (idInput, idSpan, message) {
    var valueInput = document.getElementById(idInput).value.trim();
    var letters =
      /^[a-zA-Z\s_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]*$/;
    if (letters.test(valueInput)) {
      document.getElementById(idSpan).innerHTML = "";
      return true;
    } else {
      document.getElementById(idSpan).style.display = "block";
      document.getElementById(idSpan).innerHTML = message;
      return false;
    }
  };

  //validate email
  this.chekEmailPatern = function (idInput, idSpan, message) {
    var valueInput = document.getElementById(idInput).value.trim();
    var patern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (patern.test(valueInput)) {
      document.getElementById(idSpan).innerHTML = "";
      return true;
    } else {
      document.getElementById(idSpan).style.display = "block";
      document.getElementById(idSpan).innerHTML = message;
      return false;
    }
  };

  //validate password
  this.chekPassPatern = function (idInput, idSpan, message) {
    var valueInput = document.getElementById(idInput).value.trim();
    var patern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/;

    if (patern.test(valueInput)) {
      document.getElementById(idSpan).innerHTML = "";
      return true;
    } else {
      document.getElementById(idSpan).style.display = "block";
      document.getElementById(idSpan).innerHTML = message;
      return false;
    }
  };

  //validate date
  this.chekDatePatern = function (idInput, idSpan, message) {
    var valueInput = document.getElementById(idInput).value.trim();
    var patern =
      /^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d$/;

    if (patern.test(valueInput)) {
      document.getElementById(idSpan).innerHTML = "";
      return true;
    } else {
      document.getElementById(idSpan).style.display = "block";
      document.getElementById(idSpan).innerHTML = message;
      return false;
    }
  };

  //validate Luong
  this.chekSalaryCondition = function (idInput, idSpan, message) {
    var valueInput = document.getElementById(idInput).value.trim() * 1;

    if (valueInput < 1000000 || valueInput > 20000000) {
      document.getElementById(idSpan).style.display = "block";
      document.getElementById(idSpan).innerHTML = message;
      return false;
    } else {
      document.getElementById(idSpan).innerHTML = "";
      return true;
    }
  };

  //validate position
  this.chekPosition = function (idInput, idSpan, message) {
    var valueInput = document.getElementById(idInput).value.trim();
    if (
      valueInput == "Sếp" ||
      valueInput == "Trưởng phòng" ||
      valueInput == "Nhân viên"
    ) {
      document.getElementById(idSpan).innerHTML = "";
      return true;
    } else {
      document.getElementById(idSpan).style.display = "block";
      document.getElementById(idSpan).innerHTML = message;
      return false;
    }
  };

  //validate working hours
  this.chekWorkingHour = function (idInput, idSpan, message) {
    var valueInput = document.getElementById(idInput).value.trim() * 1;

    if (valueInput < 80 || valueInput > 200) {
      document.getElementById(idSpan).style.display = "block";
      document.getElementById(idSpan).innerHTML = message;
      return false;
    } else {
      document.getElementById(idSpan).innerHTML = "";
      return true;
    }
  };
};
