(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ErrorPage"],{

/***/ "./public/app/core/components/ErrorPage/ErrorPage.tsx":
/*!************************************************************!*\
  !*** ./public/app/core/components/ErrorPage/ErrorPage.tsx ***!
  \************************************************************/
/*! exports provided: ErrorPage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPage", function() { return ErrorPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/runtime */ "./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @grafana/ui */ "./packages/grafana-ui/src/index.ts");
/* harmony import */ var _Page_Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Page/Page */ "./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/core/selectors/navModel */ "./public/app/core/selectors/navModel.ts");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var ErrorPage =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(ErrorPage, _PureComponent);

  function ErrorPage() {
    _classCallCheck(this, ErrorPage);

    return _possibleConstructorReturn(this, _getPrototypeOf(ErrorPage).apply(this, arguments));
  }

  _createClass(ErrorPage, [{
    key: "render",
    value: function render() {
      var navModel = this.props.navModel;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Page_Page__WEBPACK_IMPORTED_MODULE_4__["default"], {
        navModel: navModel
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Page_Page__WEBPACK_IMPORTED_MODULE_4__["default"].Contents, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "page-container page-body"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "panel-container error-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "error-column graph-box"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "error-row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "error-column error-space-between graph-percentage"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "100%"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "80%"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "60%"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "40%"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "20%"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "0%")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "error-column image-box"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "public/img/graph404.svg",
        width: "100%",
        alt: "graph"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "error-row error-space-between"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "graph-text"
      }, "Then"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "graph-text"
      }, "Now"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "error-column info-box"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "error-row current-box"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "current-text"
      }, "current")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "error-row",
        style: {
          flex: 1
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
        name: "minus-circle",
        className: "error-minus"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "error-column error-space-between error-full-width"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "error-row error-space-between"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Chances you are on the page you are looking for."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "left-margin"
      }, "0%")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Sorry for the inconvenience"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Please go back to your", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__["config"].appSubUrl,
        className: "error-link"
      }, "home dashboard"), ' ', "and try again."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "If the error persists, seek help on the", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://community.grafana.com",
        target: "_blank",
        className: "error-link"
      }, "community site"), ".")))))))));
    }
  }]);

  return ErrorPage;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    navModel: Object(app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_5__["getNavModel"])(state.navIndex, 'not-found')
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(ErrorPage));

/***/ })

}]);
//# sourceMappingURL=ErrorPage.4cbb87e3c1d0ef5e648d.js.map