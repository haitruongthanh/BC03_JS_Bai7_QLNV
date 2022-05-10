var NhanVien = function (
  _acc,
  _name,
  _email,
  _password,
  _workingDays,
  _baseSalary,
  _position,
  _hourWorking
) {
  this.acc = _acc;
  this.name = _name;
  this.email = _email;
  this.password = _password;
  this.workingDays = _workingDays;
  this.baseSalary = _baseSalary;
  this.position = _position;
  this.hourWorking = _hourWorking;
  this.summarySalary = function () {
    if (this.position == "Sếp") {
      return this.baseSalary * 3;
    } else if (this.position == "Trưởng phòng") {
      return this.baseSalary * 2;
    } else if (this.position == "Nhân viên") {
      return this.baseSalary;
    }
  };
  this.xepLoai = function () {
    if (this.hourWorking >= 192) {
      return "Xuất Sắc";
    } else if (this.hourWorking >= 176) {
      return "Giỏi";
    } else if (this.hourWorking >= 160) {
      return "Khá";
    } else {
      return "Trung Bình";
    }
  };
};
