webpackHotUpdate("static\\development\\pages\\terms.js",{

/***/ "./src/components/CustomBodyOfMonth/CustomBodyOfMonth.js":
/*!***************************************************************!*\
  !*** ./src/components/CustomBodyOfMonth/CustomBodyOfMonth.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");







var _jsxFileName = "C:\\IT_projects_Edu-Lab\\arto_WWW\\www.arto.boo.pl\\src\\components\\CustomBodyOfMonth\\CustomBodyOfMonth.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;



var STATUS = {
  BUSY: "busy",
  EMPTY: "empty",
  RESERVATION: "reservation",
  HOLIDAY: "holiday",
  UNDEFINED: "undefined"
};
var empty = STATUS.EMPTY;
var busy = STATUS.BUSY;
var holiday = STATUS.HOLIDAY;

var CustomBodyOfMonth =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomBodyOfMonth, _Component);

  function CustomBodyOfMonth() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CustomBodyOfMonth);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(CustomBodyOfMonth)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      showDetails: _this.props.showDetails //Tutaj jest do poprawy architektura TODO

    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CustomBodyOfMonth, [{
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props = this.props,
          classes = _this$props.classes,
          place = _this$props.place,
          status = _this$props.status;
      var classNameMain = classnames__WEBPACK_IMPORTED_MODULE_8___default()(classes.main, (_classNames = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_classNames, classes.busy, status === STATUS.BUSY), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_classNames, classes.holiday, status === STATUS.HOLIDAY), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_classNames, classes.emptyContainer, status === STATUS.EMPTY || STATUS.UNDEFINED), _classNames));

      var getView = function getView(status) {
        switch (status) {
          case busy:
            return __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
              type: "span",
              className: classes.info,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 39
              },
              __self: this
            }, place);

          case empty:
            return __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
              type: "span",
              className: classes.infoEmpty,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 41
              },
              __self: this
            }, "BRAK");

          case holiday:
            return __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
              type: "span",
              className: classes.infoHoliday,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 43
              },
              __self: this
            }, "Wakacje");
        }
      };

      function toggleDetails(item) {
        alert(item);
        this.setState(function (state, props) {
          return {
            showDetails: !state.showDetails
          };
        });
      }

      return __jsx("div", {
        className: classNameMain // onClick={() => {
        //   toggleDetails(this.props.day)
        // }}
        ,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
        type: "span",
        className: classes.day,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, this.props.day), getView(this.props.status), this.props.status === busy ? __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
        type: "span",
        className: classes.details,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, "hotel: ", this.props.hotel), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
        type: "p",
        className: classes.details,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, "adres: ", this.props.address)) : __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, "WOLNE"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
        type: "p",
        className: classes.details,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, this.props.description), this.props.children);
    }
  }]);

  return CustomBodyOfMonth;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

CustomBodyOfMonth.defaultProps = {
  address: '',
  description: '',
  hotel: '',
  place: ''
};
CustomBodyOfMonth.displayName = 'CustomBodyOfMonth';
/* harmony default export */ __webpack_exports__["default"] = (CustomBodyOfMonth);

/***/ })

})
//# sourceMappingURL=terms.js.a5af7f71137bd6fbd1e8.hot-update.js.map