function getInfoForm() {
  var acc = document.getElementById("tknv").value;
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var workingDays = document.getElementById("datepicker").value;
  var baseSalary = document.getElementById("luongCB").value;
  var position = document.getElementById("chucvu").value;
  var hourWorking = document.getElementById("gioLam").value;

  var newStaff = new NhanVien(
    acc,
    name,
    email,
    password,
    workingDays,
    baseSalary,
    position,
    hourWorking
  );
  return newStaff;
}

function putToTable(arrStaff) {
  var contentHTML = "";
  for (let i = 0; i < arrStaff.length; i++) {
    var staff = arrStaff[i];

    var contentTrTag = /* html */ `
      <tr>
        <td>${staff.acc}</td>
        <td>${staff.name}</td>
        <td>${staff.email}</td>
        <td>${staff.workingDays}</td>
        <td>${staff.position}</td>
        <td>${staff.summarySalary()}</td>
        <td>${staff.xepLoai()}</td>
        <td>
          <button 
            type="button" 
            class="btn btn-success" 
            data-toggle="modal"
            data-target="#myModal" 
            onclick="modifyStaff(${staff.acc})">
            Sửa
          </button>
          <button 
            type="button" 
            class="btn btn-danger" 
            onclick="deleteStaff(${staff.acc})">
            Xóa
          </button>
        </td>
      </tr>`;
    contentHTML += contentTrTag;
  }
  document.getElementById("tableDanhSach").innerHTML = contentHTML;
}

function putInfoForm(staff) {
  document.getElementById("tknv").value = staff.acc;
  document.getElementById("name").value = staff.name;
  document.getElementById("email").value = staff.email;
  document.getElementById("password").value = staff.password;
  document.getElementById("datepicker").value = staff.workingDays;
  document.getElementById("luongCB").value = staff.baseSalary;
  document.getElementById("chucvu").value = staff.position;
  document.getElementById("gioLam").value = staff.hourWorking;
}

function checkIdValid(validateStaff, newStaff, staffList) {
  return (
    validateStaff.checkIdLength(
      "tknv",
      "tbTKNV",
      "Tài khoản từ 4 đến 6 chữ số"
    ) &&
    validateStaff.checkIdPatern("tknv", "tbTKNV", "Tài khoản chỉ bao gồm số") &&
    validateStaff.checkIdDuplicate(newStaff, staffList)
  );
}

function checkIdValidUpdate(validateStaff) {
  return (
    validateStaff.checkIdLength(
      "tknv",
      "tbTKNV",
      "Tài khoản từ 4 đến 6 chữ số"
    ) &&
    validateStaff.checkIdPatern("tknv", "tbTKNV", "Tài khoản chỉ bao gồm số")
  );
}

function checkNameValid(validateStaff) {
  return (
    validateStaff.checkEmtyInput("name", "tbTen", "Vui lòng nhập Họ Tên") &&
    validateStaff.chekNamePatern("name", "tbTen", "Tên chỉ gồm chữ cái")
  );
}

function checkEmailValid(validateStaff) {
  return (
    validateStaff.checkEmtyInput("email", "tbEmail", "Vui lòng nhập Email") &&
    validateStaff.chekEmailPatern("email", "tbEmail", "Sai định dạng email")
  );
}

function checkPassValid(validateStaff) {
  return (
    validateStaff.checkEmtyInput(
      "password",
      "tbMatKhau",
      "Vui lòng nhập password"
    ) &&
    validateStaff.chekPassPatern(
      "password",
      "tbMatKhau",
      "Từ 6 - 10 ký tự (ít nhất 1 chữ số, 1 chữ hoa và 1 ký tự đặc biệt)"
    )
  );
}

function checkDateValid(validateStaff) {
  return (
    validateStaff.checkEmtyInput(
      "datepicker",
      "tbNgay",
      "Vui lòng nhập Ngày"
    ) &&
    validateStaff.chekDatePatern(
      "datepicker",
      "tbNgay",
      "Định dạng ngày mm/dd/yyyy"
    )
  );
}

function checkSalaryValid(validateStaff) {
  return (
    validateStaff.checkEmtyInput(
      "luongCB",
      "tbLuongCB",
      "Vui lòng nhập Lương cơ bản"
    ) &&
    validateStaff.checkIdPatern(
      "luongCB",
      "tbLuongCB",
      "Vui lòng chỉ nhập số"
    ) &&
    validateStaff.chekSalaryCondition(
      "luongCB",
      "tbLuongCB",
      "Lương từ 1,000,000 đến 20,000,000"
    )
  );
}

function checkPositionValid(validateStaff) {
  return (
    validateStaff.checkEmtyInput(
      "chucvu",
      "tbChucVu",
      "Vui lòng nhập chức vụ"
    ) &&
    validateStaff.chekPosition("chucvu", "tbChucVu", "Vui lòng nhập chức vụ")
  );
}

function checkWorkingHourValid(validateStaff) {
  return (
    validateStaff.checkEmtyInput(
      "gioLam",
      "tbGiolam",
      "Vui lòng nhập giờ làm"
    ) &&
    validateStaff.checkIdPatern("gioLam", "tbGiolam", "Vui lòng chỉ nhập số") &&
    validateStaff.chekWorkingHour(
      "gioLam",
      "tbGiolam",
      "Giờ làm từ 80 - 200 giờ"
    )
  );
}

function resetForm() {
  document.getElementById("form").reset();
}

function checkValid(validateStaff, newStaffId, staffList) {
  var isValid = true;
  var isValidId = checkIdValid(validateStaff, newStaffId, staffList);
  var isValidName = checkNameValid(validateStaff);
  var isValidEmail = checkEmailValid(validateStaff);
  var isValidPass = checkPassValid(validateStaff);
  var isValidDate = checkDateValid(validateStaff);
  var isValidSalary = checkSalaryValid(validateStaff);
  var isValidPosition = checkPositionValid(validateStaff);
  var isValidWorkingHour = checkWorkingHourValid(validateStaff);

  isValid =
    isValidId &&
    isValidName &&
    isValidEmail &&
    isValidPass &&
    isValidDate &&
    isValidSalary &&
    isValidPosition &&
    isValidWorkingHour;
  return isValid;
}

function checkValidUpdate(validateStaff) {
  var isValid = true;
  var isValidId = checkIdValidUpdate(validateStaff);
  var isValidName = checkNameValid(validateStaff);
  var isValidEmail = checkEmailValid(validateStaff);
  var isValidPass = checkPassValid(validateStaff);
  var isValidDate = checkDateValid(validateStaff);
  var isValidSalary = checkSalaryValid(validateStaff);
  var isValidPosition = checkPositionValid(validateStaff);
  var isValidWorkingHour = checkWorkingHourValid(validateStaff);

  isValid =
    isValidId &&
    isValidName &&
    isValidEmail &&
    isValidPass &&
    isValidDate &&
    isValidSalary &&
    isValidPosition &&
    isValidWorkingHour;
  return isValid;
}
