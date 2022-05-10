var staffList = [];
var STAFF_LIST = "STAFF_LIST";
var validateStaff = new ValidatorStaff();

//Gọi danh sách từ local
var staffListJson = localStorage.getItem(STAFF_LIST);
if (staffListJson) {
  staffList = JSON.parse(staffListJson);
  staffList = staffList.map(function (staff) {
    return new NhanVien(
      staff.acc,
      staff.name,
      staff.email,
      staff.password,
      staff.workingDays,
      staff.baseSalary,
      staff.position,
      staff.hourWorking
    );
  });
  putToTable(staffList);
}

//Vị trí nhân viên
var findIndexStaff = function (id, arrayStaff) {
  return arrayStaff.findIndex(function (staff) {
    return staff.acc == id;
  });
};

//Lưu danh sách vào local storage
var saveToLocal = function () {
  var staffListJson = JSON.stringify(staffList);
  localStorage.setItem(STAFF_LIST, staffListJson);
};

//Thêm nhân viên mới
var addStaff = function () {
  var newStaff = getInfoForm();
  var isValid = checkValid(validateStaff, newStaff.acc, staffList);

  if (isValid) {
    staffList.push(newStaff);
    saveToLocal();
    putToTable(staffList);
    resetForm();
    $("#myModal").modal("hide");
  }
};

//Xóa nhân viên
var deleteStaff = function (staffAcc) {
  var index = findIndexStaff(staffAcc, staffList);

  staffList.splice(index, 1);
  putToTable(staffList);
  saveToLocal();
};

//Update nhân viên
var modifyStaff = function (staffAcc) {
  var index = findIndexStaff(staffAcc, staffList);
  var staff = staffList[index];
  putInfoForm(staff);
};

var updateStaff = function () {
  var updatedStaff = getInfoForm();
  var index = findIndexStaff(updatedStaff.acc, staffList);
  var isValid = checkValidUpdate(validateStaff);

  if (isValid) {
    staffList[index] = updatedStaff;
    saveToLocal();
    putToTable(staffList);
    resetForm();
    $("#myModal").modal("hide");
  }
};

var search = function () {
  var inputSearch = document.getElementById("searchName").value.trim();

  var resultsList = staffList.filter(function (staff) {
    return staff.xepLoai().toUpperCase().includes(inputSearch.toUpperCase());
  });

  if (resultsList.length != 0) {
    putToTable(resultsList);
  } else {
    putToTable(staffList);
  }
};
