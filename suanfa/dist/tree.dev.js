"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var data = [{
  id: 2,
  pid: 0,
  path: "/course",
  name: "Course",
  title: "课程管理"
}, {
  id: 3,
  name: "CourseOperate",
  path: "operate",
  link: "/course/operate",
  pid: 2,
  title: "课程操作"
}, {
  id: 4,
  name: "CourseInfoData",
  path: "info_data",
  link: "/course/operate/info_data",
  pid: 3,
  title: "课程数据"
}, {
  id: 5,
  name: "CourseAdd",
  path: "add",
  link: "/course/add",
  pid: 2,
  title: "增加课程"
}, {
  id: 6,
  pid: 0,
  path: "/student",
  name: "Student",
  title: "学生管理"
}, {
  id: 7,
  name: "StudentOperate",
  path: "operate",
  link: "/student/operate",
  pid: 6,
  title: "学生操作"
}, {
  id: 8,
  name: "StudentAdd",
  path: "add",
  link: "/student/add",
  pid: 6,
  title: "增加学生"
}];
var arrsSpilit = [1, [2, [3, 4], 5], 6];

function buildTree(arss) {
  var pid = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return arss.filter(function (item) {
    return item.pid == pid;
  }).map(function (item) {
    return _objectSpread({}, item, {
      next: buildTree(arss, item.id)
    });
  });
}

console.log(buildTree(data, 0)); // reduce拍平多维数组

function filterArrs(arrs) {
  return arrs.reduce(function (last, val) {
    return Array.isArray(val) ? last.concat(filterArrs(val)) : last.concat(val);
  }, []);
}

console.log(filterArrs(arrsSpilit));