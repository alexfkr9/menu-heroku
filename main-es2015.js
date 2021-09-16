(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-page/admin-page.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-page/admin-page.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"bg\">\n        <h1> Список покупок </h1>\n    </div>\n    <div class=\"\">\n        <div class=\"form-inline\">\n            <div class=\"\">\n                <div class=\"col-md-2\">\n                    <input class=\"form-control\" [(ngModel)]=\"dish\" placeholder = \"Блюдо\" />\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <div class=\"col-md-2 form-group\">\n                    <label>Категория:</label>\n                    <select class=\"form-control\" [(ngModel)]=\"category\">                \n                        <option value=\"Первое\">Первое</option>\n                        <option value=\"Второе\">Второе</option>\n                        <option value=\"Салаты\">Салаты</option>\n                        <option value=\"Напитки\">Напитки</option>\n                       </select>                    \n                </div>\n            </div>\n            <div class=\"form-group\">\n                <div class=\"col-md-1\">\n                    <input type=\"number\" class=\"form-control\" [(ngModel)]=\"price\" placeholder=\"Цена\" />\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <div class=\"col-md-1\">\n                    <input type=\"number\" class=\"form-control\" [(ngModel)]=\"weight\" placeholder=\"Вес\" />\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <div class=\"col-md-1\">\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"unit\" placeholder=\"Ед.изм.\" />\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <div class=\"col-md-offset-2 col-md-2\">\n                    <button class=\"btn btn-default\" (click)=\"addItem(dish, category, price, weight, unit)\">Добавить</button>\n                </div>\n            </div>\n        </div>\n        <table class=\"table table-bordered\">\n            <thead>\n                <tr>\n                    <th>Блюдо</th>\n                    <th>Категория</th>\n                    <th>Цена</th>\n                    <th>Вес</th>\n                    <th>Ед.изм.</th>\n                    <th></th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let item of items; let i = index\">\n                    <td>{{item.dish}}</td>\n                    <td>{{item.category}}</td>\n                    <td>{{item.price}}</td>\n                    <td>{{item.weight}}</td>\n                    <td>{{item.unit}}</td>\n                    <td><button class=\"btn btn-default\" (click)=\"delItem(i)\">Удалить</button></td>\n                </tr>\n            </tbody>\n        </table>\n    </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/gallery/gallery.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gallery/gallery.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\"> \n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\n\t\t\t<div class=\"col-lg-2\">\n\t\t\t\t<h2 class=\"logo head-color animated fadeIn\">Меню</h2>\t\n\t\t\t</div>\n\n\t\t\t<div class=\"col-lg-6\">\n\t\t\t\t<nav id=\"mynavbar\" class=\"navbar navbar-expand-sm\">          \n\t\t\t\t\t<button class=\"btn btn-warning blue\" [class.active]=\"filterBy === 'all'\" (click)=\"filterBy = 'all'\">Все</button>\n\t\t\t\t\t<button class=\"btn btn-warning\" [class.active]=\"filterBy === 'first'\" (click)=\"filterBy = 'first'\">Первое</button>\n\t\t\t\t\t<button class=\"btn btn-warning\" [class.active]=\"filterBy === 'second'\" (click)=\"filterBy = 'second'\">Второе</button>\n\t\t\t\t\t<button class=\"btn btn-warning\" [class.active]=\"filterBy === 'salads'\" (click)=\"filterBy = 'salads'\">Салаты</button>\n\t\t\t\t\t<button class=\"btn btn-warning\" [class.active]=\"filterBy === 'drink'\" (click)=\"filterBy = 'drink'\">Напитки</button>\n\t\t\t\t</nav>\t\n\t\t\t</div>\t\t\t\t\t\t\t\n\n\t\t</div>\n\t</div>\n\n\t<div class=\"row container-fluid\">\n\t<ul id=\"thumbnailList\" class=\"gallery\">\n\t\t<li class=\"col-sm-6 col-md-4 col-lg-3 col-xl-2 d-flex justify-content-center\" *ngFor=\"let image of (images | imageFilter:filterBy)\">\n\t\t\t<div class=\"ticket\">\n\n\t\t\t\t<a><img src=\"{{ image.url }}\" class=\"\" (click)=\"inp_val[image.id-1]=inp_val[image.id-1]+1; change(inp_val)\"></a>\t\t\t\t\n\t\t\t\t<h5 class=\"head-color\">{{ image.dish }}</h5>\n\t\t\t\t<p>Цена: {{ image.price }} грн / {{ image.weight }}{{ image.unit }}</p>\n\t\t\t\t<!-- <p> id: {{ image.id-1 }} </p> -->\n\t\t\t\t<p>Кол-во: <input type=\"number\" min=\"0\" [(ngModel)] = \"inp_val[image.id-1]\" (ngModelChange)=\"change(inp_val)\"/> шт</p>\t\t   \n\t\t\t\t<p> Стоимость: {{ arraySum[image.id-1] }} грн </p>\t\t\t\t\t\n\t\t\t</div>\n\t\t</li>\n\t</ul>\n\t</div>\n\t\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login-page/login-page.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login-page/login-page.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"d-flex flex-colum\">\n  <div class=\"login animated fadeIn\">\n\n    <h2 class=\"p-2 animated fadeIn\">Заказ в кафе</h2>\n\n    <hr>\n\n    <!-- вход в меню без авторизации -->\n    <button [routerLink] = \"['/menu']\" class=\"btn btn-warning block\">Войти в меню без пароля</button>\n\n    <!-- вход в меню через аккаунт -->\n    <h5 class=\"my-1\">или воспользуйтесь аккаунтом:</h5>\n    <social-login></social-login>   \n\n    <hr>\n\n    <!-- вход в заказ без авторизации -->\n    <button [routerLink] = \"['/oder']\" class=\"btn btn-warning block\">Открыть весь заказ</button>\n\n    <hr>\n\n    <form [formGroup]=\"form\" (ngSubmit)=\"submit()\">\n    \t<header>\n        <h4 class=\"p-2 head-color\">Зарегистрированным пользователям:</h4>    \t\t\n        <h5>введите E-mail / пароль</h5>\t\n    \t</header>\t\n\n        <div\n        class=\"form-control\"\n        [ngClass]=\"{invalid: form.get('email').touched && form.get('email').invalid}\"\n        >\n            <label for=\"email\">E-mail:</label>\n            <input id=\"email\" type=\"email\" formControlName=\"email\" placeholder=\"a@mail.ru\">\n            <div\n              *ngIf=\"form.get('email').touched && form.get('email').invalid\"\n              class=\"validation\"\n            >\n              <small *ngIf=\"form.get('email').errors.required\">\n                Введите поле email\n              </small>\n              <small *ngIf=\"form.get('email').errors.email\">\n                Некорректный email\n              </small>\n            </div>\n        </div>\n\n        <div\n        class=\"form-control\"\n        [ngClass]=\"{invalid: form.get('password').touched && form.get('password').invalid}\"\n      >\n        <label for=\"password\">Пароль:</label>\n        <input id=\"password\" type=\"password\" formControlName=\"password\" placeholder=\"111111\">\n        <div\n          class=\"validation\"\n          *ngIf=\"form.get('password').touched && form.get('password').invalid\"\n        >\n          <small *ngIf=\"form.get('password').errors.required\">\n            Введите пароль\n          </small>\n          <small *ngIf=\"form.get('password').errors.minlength\">\n            Пароль должен быть не менее\n            {{form.get('password').errors.minlength.requiredLength}}\n            символов. Сейчас он\n            {{form.get('password').errors.minlength.actualLength}}\n            .\n          </small>\n        </div>\n      </div>\n      \n        <button     \n          type=\"submit\"\n          class=\"btn btn-warning block\"\n          [disabled]=\"form.invalid\"\n          >Войти в меню\n        </button> \n\n    </form>\n      \n    \n\n  </div>\n\n</div>\n\n<div *ngIf=\"user\">\n  <app-menu-page></app-menu-page>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu-page/menu-page.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu-page/menu-page.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<!-- Идет загрузка страницы -->\n<div *ngIf=\"menuData.length; else loading\"> \n\n<div class=\"bg\">\n\n  <h4 class=\"head-color\">Добро пожаловать</h4>\n\n  <!-- Данные пользователя из соцсетей -->\n  <div *ngIf=\"someSrv.userSocial.name\">    \n    \n    <img src=\"{{ someSrv.userSocial.photoUrl }}\" class=\"rounded-circle mx-auto d-block\">\n    <h4 class=\"head-color\"> {{ someSrv.userSocial.name }} </h4>\n  </div>\n\n    <h4 class=\"head-color\"> в наше кафе </h4>\n    <h5>Желаете что нибудь заказать ?</h5>\n  \n\n<!-- Меню в виде картинок -->\n<app-gallery [inp_val]=\"inp_val\" [arraySum]=\"arraySum\" (onChanged) = \"onChanged($event)\"></app-gallery>\n\n\n\n\n<!-- Ввод имени пользователя -->\n<h4>Имя:\n  <div *ngIf=\"someSrv.userSocial.name\">\n    <input class=\"name\" type=\"text\" [(ngModel)] = \"someSrv.userSocial.name\"  placeholder=\"Имя\" />\n  </div>\n  <div *ngIf=\"!someSrv.userSocial.name\">\n    <input class=\"name\" type=\"text\" [(ngModel)] = \"userName\"  placeholder=\"Имя\" />\n  </div>\n </h4>\n\n<!-- <h3 *ngIf=\"userName\">Посетитель: {{ userName }}</h3> -->\n<h3 *ngIf=\"oderVal\">Cумма заказа: {{ oderVal }} грн<button (click)=\"send()\" class=\"btn btn-warning ml-3\">Заказать</button></h3>\n\n\n  <h3 class=\"user\">Заказ в виде таблицы:</h3>\n   <table class=\"table table-bordered justify-content-center\">\n     <thead>        \n        <th>Блюдо</th>\n        <th>Цена</th>\n        <th>Ед.изм.</th>\n        <th>Кол.</th>\n        <th>Сумма</th>          \n                             \n     </thead>\n\n     <tbody>\n      \n      <!-- Блюдо -->\n      <tr>  \n       <td class=\"\">                 \n        <tr *ngFor=\"let dish of menuArray; let i = index\"\n             class=\"text-nowrap\">\n            {{ menuArray[i].dish }}           \n        </tr>        \n       </td>\n\n       <!-- Цена -->\n       <td>                \n        <tr *ngFor=\"let price of menuArray; let i = index\">\n            {{ menuArray[i].price }} грн           \n        </tr>        \n       </td>\n\n       <!-- Ед. изм. -->\n       <td>                 \n        <tr *ngFor=\"let unit of menuArray; let i = index\">\n            {{ menuArray[i].weight }}\n            {{ menuArray[i].unit }}    <!-- Единица измерения -->         \n        </tr>        \n       </td>      \n      \n        <!-- Ввод колва -->\n        <td>         \n          <tr *ngFor=\"let inpVal of menuArray; let i = index\"\n               class=\"text-nowrap\">\n            <input type=\"number\" [(ngModel)] = \"inp_val[i]\"  value=\"0\" placeholder=\"0\" min=\"0\" autofocus=\"\" (ngModelChange)=\"calcTabe()\" />               \n              {{ menuArray[i].unit }}     <!-- Единица измерения --> \n          </tr>\n        </td>\n\n        <!-- Сумма -->\n        <td>         \n          <tr *ngFor=\"let val of menuArray; let i = index\">             \n               {{ (menuArray[i].price)*(inp_val[i] || 0) }}  грн   <!-- Стоимость -->    \n                            \n          </tr>\n        </td>\n\n      </tr>        \n\n      <tr>\n        <td class=\"blue\">Итого</td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td class=\"blue\"> {{ oderVal }} грн</td>    <!-- Итого -->\n      </tr>\n      \n    </tbody>\n  </table>\n\n  <button (click)=\"signOut()\" routerLink=\"/\" class=\"btn btn-warning ml-2 mb-2\">Отменить</button>\n               \n  <button (click)=\"send()\" class=\"btn btn-warning float-right mr-2 mb-2\">Заказать</button>     \n    \n   \n</div>\n\n</div>\n\n<ng-template #loading>\n  <p class=\"text-center\">Идет загрузка...</p>\n</ng-template> ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/oder-page/oder-page.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oder-page/oder-page.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"userList.length; else loading\">\n\n<h3>Меню компании</h3>\n  \n   <table class=\"table table-bordered text-center\">\n     <thead>        \n        <th>Блюдо</th>\n        <th>Цена</th>\n        <th>Ед.изм.</th>\n        <th *ngFor=\"let user of userList; let i = index\">\n           <div *ngIf=\"user.userName\"> {{ user.userName }} </div>\n           <div *ngIf=\"!user.userName\"> Гость {{ i+1 }} </div>\n           <div *ngIf=\"user.foto\"><img src=\"{{ user.foto }}\"></div>\n        </th>\n        <th>Сумма</th>        \n                             \n     </thead>\n\n     <tbody>\n      \n      <tr>        \n        \n        <!-- вывести меню пользователей       -->\n       <td class=\"text-nowrap\">                 \n        <tr *ngFor=\"let dish of menuArray; let i = index\"\n            class=\"text-left\">\n            {{ menuArray[i].dish }}           \n        </tr>        \n       </td>\n\n       <td>                 \n        <tr *ngFor=\"let price of menuArray; let i = index\" \n            class=\"d-flex justify-content-center\">\n           {{ menuArray[i].price }} грн             \n        </tr>        \n       </td>\n\n       <td>                 \n        <tr *ngFor=\"let unit of menuArray; let i = index\" \n            class=\"d-flex justify-content-center\">\n            {{ menuArray[i].weight }}\n            {{ menuArray[i].unit }}  <!-- Единица измерения -->             \n        </tr>        \n       </td>\n       \n\n         <!-- вывести заказы пользователей       -->\n        <td *ngFor=\"let userL of userList; let i = index\" class=\"\">        \n          <tr *ngFor=\"let id of userL.user; let j = index\">\n            <div class=\"container\">              \n              <div class=\"row\">\n                <div class=\"col-5\">\n                  <!-- {{ userArray[i][j] }} -->\n                   <input [disabled]=\"\" type=\"number\" min=\"0\" [(ngModel)] = \"userArray[i][j]\" (ngModelChange)=\"changeHandler(i,j)\" />           \n                </div>\n                <div class=\"col-1 p-0\">\n                    {{ menuArray[j].unit }}    <!-- Единица измерения -->\n                </div>\n                <div class=\"col-5\">                                 \n                    <!-- {{ userArray[i][j] * menuArray[j].price }} -->\n                    {{ arraySum[i][j] }}\n                </div>    \n              </div>\n            </div>                \n          </tr>\n        </td>\n\n        <td>\n          <!-- <tr *ngFor=\"let user of menuArray; let j = index\">            \n          </tr> -->  \n        </td>\n\n      </tr>\n      \n      <tr>\n        <td class=\"blue\">Итого, грн</td>\n        <td></td>\n        <td></td>\n        <td *ngFor=\"let userL of userList; let i = index\">                 \n            <tr class=\"blue d-flex justify-content-center\">\n                {{ userSum[i] }}            \n            </tr>        \n       </td>\n       <td class=\"blue text-center\"> {{ oderVal }} </td>\n      </tr>              \n      \n      <tr class=\"bordernone\"> <!-- навигация -->\n        <td><button routerLink=\"/\" class=\"btn btn-warning\">Выйти</button></td>\n        <td></td>\n        <td></td>        \n        <td *ngFor=\"let user of userList\" class=\"\">          \n          <button (click)=\"update(user)\"\n                  [routerLink] =  \"['/oder']\"              \n                  class=\"btn btn-warning d-flex mx-auto\">            \n                  Изменить\n          </button>\n          <button (click)=\"remove(user.id)\"\n                  [routerLink] =  \"['/oder']\"              \n                  class=\"btn btn-warning d-flex mx-auto\">            \n                  Удалить\n          </button>\n        </td>           \n      </tr>      \n\n     </tbody>\n  </table>\n\n\n</div>\n\n<ng-template #loading>\n  <p class=\"text-center\">Идет загрузка...</p>\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/social-login/social-login.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/social-login/social-login.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <p>\n  {{title}}\n</p> -->\n\n<div class=\" d-flex\">\n\t<button (click)=\"singIn('Google')\" class=\"btn btn-warning block w-100\">\n\t\t<span class=\"fa fa-google\"> Google</span>\t\n\t</button>\n\n\t<button (click)=\"singInFacebook()\" class=\"btn btn-warning block w-100\">\n\t\t<span class=\"fa fa-facebook\"> Facebook</span>\t\n\t</button>\n</div>\n\n<br />\n<br />\n\n<!-- <button (click)=\"signOut();\">Sign out</button><br /><br /> -->\n \n<div *ngIf=\"user\">\n  <img src=\"{{ user.photoUrl }}\">\n  <h4>{{ user.name }}</h4>\n  <p>{{ user.email }}</p>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/admin-page/admin-page.component.scss":
/*!******************************************************!*\
  !*** ./src/app/admin-page/admin-page.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1, h2, h3, .head-color {\n  color: #047;\n}\n\nbutton {\n  margin: 5px;\n  padding: 5px;\n  border-color: #050;\n  background-color: #ffa7007a;\n  border-radius: 10px;\n  color: #050;\n  font-weight: 600;\n}\n\nthead th, tbody td {\n  border-color: #494;\n  border-width: 2px;\n}\n\nth, .blue {\n  color: #047;\n  font-size: 23px;\n}\n\n.bordernone td {\n  border: none;\n}\n\n.pointer {\n  cursor: pointer;\n}\n\ninput {\n  background: #ffc;\n  border-radius: 4px;\n  border-width: 1px;\n  border-color: #d6d91ea6;\n}\n\ndiv, table, select {\n  background: url('bg.jpg') no-repeat;\n  background-size: cover;\n  background-attachment: fixed;\n}\n\nh2, h3 {\n  text-align: center;\n}\n\nth, td, tr {\n  padding: 0 2px;\n}\n\ninput {\n  max-width: 130px;\n  height: 40px;\n}\n\n.name {\n  min-width: 250px;\n  height: auto;\n  padding-left: 5px;\n  outline: none;\n}\n\nbutton {\n  margin: 3px;\n  padding: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tcGFnZS9EOlxcX3dlYlxcX3Byb2pcXG9kZXIyNC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbi1wYWdlL2FkbWluLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FkbWluLXBhZ2UvRDpcXF93ZWJcXF9wcm9qXFxvZGVyMjQvc3JjXFxhcHBcXGFkbWluLXBhZ2VcXGFkbWluLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDQyxXQUhjO0FDRWY7O0FESUE7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0REOztBRElBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQ0RGOztBRElBO0VBQ0MsV0F0QmM7RUF1QmQsZUFBQTtBQ0REOztBRElBO0VBQ0MsWUFBQTtBQ0REOztBRElBO0VBQ0MsZUFBQTtBQ0REOztBRElBO0VBQ0MsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUNERDs7QUNuQ0E7RUFDRSxtQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QURzQ0Y7O0FDbkNBO0VBQ0Usa0JBQUE7QURzQ0Y7O0FDbkNBO0VBQ0UsY0FBQTtBRHNDRjs7QUNuQ0E7RUFDRSxnQkFBQTtFQUNBLFlBQUE7QURzQ0Y7O0FDbkNBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FEc0NGOztBQ25DQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FEc0NGIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4tcGFnZS9hZG1pbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGhlYWRlci1jb2xvcjogIzA0NztcblxuaDEsIGgyLCBoMywgLmhlYWQtY29sb3Ige1xuXHRjb2xvcjogJGhlYWRlci1jb2xvcjtcbn1cblxuYnV0dG9uIHtcblx0bWFyZ2luOiA1cHg7XG5cdHBhZGRpbmc6IDVweDtcdFx0XG5cdGJvcmRlci1jb2xvcjogIzA1MDtcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmYTcwMDdhO1xuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xuXHRjb2xvcjogIzA1MDtcblx0Zm9udC13ZWlnaHQ6IDYwMDtcdFxufVxuXG50aGVhZCB0aCwgdGJvZHkgdGQgeyAgXG4gIGJvcmRlci1jb2xvcjogIzQ5NDtcbiAgYm9yZGVyLXdpZHRoOiAycHg7XG59XG5cbnRoLCAuYmx1ZSB7XHRcblx0Y29sb3I6ICRoZWFkZXItY29sb3I7XG5cdGZvbnQtc2l6ZTogMjNweDsgIFxufVxuXG4uYm9yZGVybm9uZSB0ZCB7XG5cdGJvcmRlcjogbm9uZTtcdFxufVxuXG4ucG9pbnRlciB7XG5cdGN1cnNvcjogcG9pbnRlcjtcbn1cblxuaW5wdXQge1x0XG5cdGJhY2tncm91bmQ6ICNmZmM7XG5cdGJvcmRlci1yYWRpdXM6IDRweDtcblx0Ym9yZGVyLXdpZHRoOiAxcHg7XG5cdGJvcmRlci1jb2xvcjogI2Q2ZDkxZWE2O1x0ICBcdFxufSIsImgxLCBoMiwgaDMsIC5oZWFkLWNvbG9yIHtcbiAgY29sb3I6ICMwNDc7XG59XG5cbmJ1dHRvbiB7XG4gIG1hcmdpbjogNXB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1jb2xvcjogIzA1MDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYTcwMDdhO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBjb2xvcjogIzA1MDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxudGhlYWQgdGgsIHRib2R5IHRkIHtcbiAgYm9yZGVyLWNvbG9yOiAjNDk0O1xuICBib3JkZXItd2lkdGg6IDJweDtcbn1cblxudGgsIC5ibHVlIHtcbiAgY29sb3I6ICMwNDc7XG4gIGZvbnQtc2l6ZTogMjNweDtcbn1cblxuLmJvcmRlcm5vbmUgdGQge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5wb2ludGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5pbnB1dCB7XG4gIGJhY2tncm91bmQ6ICNmZmM7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1jb2xvcjogI2Q2ZDkxZWE2O1xufVxuXG5kaXYsIHRhYmxlLCBzZWxlY3Qge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9iZy5qcGcpIG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbn1cblxuaDIsIGgzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG50aCwgdGQsIHRyIHtcbiAgcGFkZGluZzogMCAycHg7XG59XG5cbmlucHV0IHtcbiAgbWF4LXdpZHRoOiAxMzBweDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG4ubmFtZSB7XG4gIG1pbi13aWR0aDogMjUwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbmJ1dHRvbiB7XG4gIG1hcmdpbjogM3B4O1xuICBwYWRkaW5nOiAxcHg7XG59IiwiQGltcG9ydCBcIi4uL2FwcC5jb21wb25lbnQuc2Nzc1wiO1xuXG5kaXYsIHRhYmxlLCBzZWxlY3Qge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9iZy5qcGcpIG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgIFxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xufVxuXG5oMiwgaDMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7ICBcbn1cblxudGgsIHRkLCB0ciB7IFxuICBwYWRkaW5nOiAwIDJweDtcbn0gIFxuXG5pbnB1dCB7XG4gIG1heC13aWR0aDogMTMwcHg7ICBcbiAgaGVpZ2h0OiA0MHB4OyAgICBcbn1cblxuLm5hbWUge1xuICBtaW4td2lkdGg6IDI1MHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBvdXRsaW5lOiBub25lOyAgXG59XG5cbmJ1dHRvbiB7XG4gIG1hcmdpbjogM3B4O1xuICBwYWRkaW5nOiAxcHg7XG59XG5cbiJdfQ== */");

/***/ }),

/***/ "./src/app/admin-page/admin-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/admin-page/admin-page.component.ts ***!
  \****************************************************/
/*! exports provided: AdminPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPageComponent", function() { return AdminPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


// import {Subscription} from 'rxjs'
// import {PostsService} from '../shared/posts.service'
// import {Post} from '../shared/interfaces'
class Item {
    constructor(dish, category, price, weight, unit) {
        this.dish = dish;
        this.category = category;
        this.price = price;
        this.weight = weight;
        this.unit = unit;
    }
}
let AdminPageComponent = class AdminPageComponent {
    constructor() {
        this.items = [
            { dish: "Хлеб", category: "first", price: 15.9, weight: 50, unit: "г" },
            { dish: "Масло", category: "first", price: 60, weight: 150, unit: "г" },
            { dish: "Картофель", category: "second", price: 22.6, weight: 70, unit: "г" },
            { dish: "Сыр", category: "second", price: 310, weight: 120, unit: "г" },
        ];
    }
    // Добавить блюдо
    addItem(dish, category, price, weight, unit) {
        if (dish == null || dish.trim() == "" || price == null)
            return;
        this.items.push(new Item(dish, category, price, weight, unit));
        console.log(this.items);
    }
    // Удалить блюдо
    delItem(n) {
        this.items.splice(n, 1);
        console.log(n);
    }
};
AdminPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-page/admin-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin-page.component.scss */ "./src/app/admin-page/admin-page.component.scss")).default]
    })
], AdminPageComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _menu_page_menu_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu-page/menu-page.component */ "./src/app/menu-page/menu-page.component.ts");
/* harmony import */ var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login-page/login-page.component */ "./src/app/login-page/login-page.component.ts");
/* harmony import */ var _oder_page_oder_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./oder-page/oder-page.component */ "./src/app/oder-page/oder-page.component.ts");
/* harmony import */ var _admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-page/admin-page.component */ "./src/app/admin-page/admin-page.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _social_login_social_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./social-login/social-login.component */ "./src/app/social-login/social-login.component.ts");










const routes = [
    { path: '', component: _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_4__["LoginPageComponent"] },
    { path: 'menu', component: _menu_page_menu_page_component__WEBPACK_IMPORTED_MODULE_3__["MenuPageComponent"] },
    { path: 'oder', component: _oder_page_oder_page_component__WEBPACK_IMPORTED_MODULE_5__["OderPageComponent"] },
    { path: 'admin', component: _admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_6__["AdminPageComponent"] },
    { path: 'social', component: _social_login_social_login_component__WEBPACK_IMPORTED_MODULE_9__["SocialLoginComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1, h2, h3, .head-color {\n  color: #047;\n}\n\nbutton {\n  margin: 5px;\n  padding: 5px;\n  border-color: #050;\n  background-color: #ffa7007a;\n  border-radius: 10px;\n  color: #050;\n  font-weight: 600;\n}\n\nthead th, tbody td {\n  border-color: #494;\n  border-width: 2px;\n}\n\nth, .blue {\n  color: #047;\n  font-size: 23px;\n}\n\n.bordernone td {\n  border: none;\n}\n\n.pointer {\n  cursor: pointer;\n}\n\ninput {\n  background: #ffc;\n  border-radius: 4px;\n  border-width: 1px;\n  border-color: #d6d91ea6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXF93ZWJcXF9wcm9qXFxvZGVyMjQvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0MsV0FIYztBQ0VmOztBRElBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNERDs7QURJQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUNERjs7QURJQTtFQUNDLFdBdEJjO0VBdUJkLGVBQUE7QUNERDs7QURJQTtFQUNDLFlBQUE7QUNERDs7QURJQTtFQUNDLGVBQUE7QUNERDs7QURJQTtFQUNDLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0FDREQiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkaGVhZGVyLWNvbG9yOiAjMDQ3O1xuXG5oMSwgaDIsIGgzLCAuaGVhZC1jb2xvciB7XG5cdGNvbG9yOiAkaGVhZGVyLWNvbG9yO1xufVxuXG5idXR0b24ge1xuXHRtYXJnaW46IDVweDtcblx0cGFkZGluZzogNXB4O1x0XHRcblx0Ym9yZGVyLWNvbG9yOiAjMDUwO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhNzAwN2E7XG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cdGNvbG9yOiAjMDUwO1xuXHRmb250LXdlaWdodDogNjAwO1x0XG59XG5cbnRoZWFkIHRoLCB0Ym9keSB0ZCB7ICBcbiAgYm9yZGVyLWNvbG9yOiAjNDk0O1xuICBib3JkZXItd2lkdGg6IDJweDtcbn1cblxudGgsIC5ibHVlIHtcdFxuXHRjb2xvcjogJGhlYWRlci1jb2xvcjtcblx0Zm9udC1zaXplOiAyM3B4OyAgXG59XG5cbi5ib3JkZXJub25lIHRkIHtcblx0Ym9yZGVyOiBub25lO1x0XG59XG5cbi5wb2ludGVyIHtcblx0Y3Vyc29yOiBwb2ludGVyO1xufVxuXG5pbnB1dCB7XHRcblx0YmFja2dyb3VuZDogI2ZmYztcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHRib3JkZXItd2lkdGg6IDFweDtcblx0Ym9yZGVyLWNvbG9yOiAjZDZkOTFlYTY7XHQgIFx0XG59IiwiaDEsIGgyLCBoMywgLmhlYWQtY29sb3Ige1xuICBjb2xvcjogIzA0Nztcbn1cblxuYnV0dG9uIHtcbiAgbWFyZ2luOiA1cHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLWNvbG9yOiAjMDUwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhNzAwN2E7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGNvbG9yOiAjMDUwO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG50aGVhZCB0aCwgdGJvZHkgdGQge1xuICBib3JkZXItY29sb3I6ICM0OTQ7XG4gIGJvcmRlci13aWR0aDogMnB4O1xufVxuXG50aCwgLmJsdWUge1xuICBjb2xvcjogIzA0NztcbiAgZm9udC1zaXplOiAyM3B4O1xufVxuXG4uYm9yZGVybm9uZSB0ZCB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLnBvaW50ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmlucHV0IHtcbiAgYmFja2dyb3VuZDogI2ZmYztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLWNvbG9yOiAjZDZkOTFlYTY7XG59Il19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _social_login_social_login_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./social-login/social-login.module */ "./src/app/social-login/social-login.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login-page/login-page.component */ "./src/app/login-page/login-page.component.ts");
/* harmony import */ var _menu_page_menu_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./menu-page/menu-page.component */ "./src/app/menu-page/menu-page.component.ts");
/* harmony import */ var _oder_page_oder_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./oder-page/oder-page.component */ "./src/app/oder-page/oder-page.component.ts");
/* harmony import */ var _admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admin-page/admin-page.component */ "./src/app/admin-page/admin-page.component.ts");
/* harmony import */ var _shared_image_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/image.service */ "./src/app/shared/image.service.ts");
/* harmony import */ var _shared_filter_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/filter.pipe */ "./src/app/shared/filter.pipe.ts");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _shared_services_auth_social_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/services/auth-social.service */ "./src/app/shared/services/auth-social.service.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");



















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_9__["LoginPageComponent"],
            _menu_page_menu_page_component__WEBPACK_IMPORTED_MODULE_10__["MenuPageComponent"],
            _oder_page_oder_page_component__WEBPACK_IMPORTED_MODULE_11__["OderPageComponent"],
            _admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_12__["AdminPageComponent"],
            _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_18__["GalleryComponent"],
            _shared_filter_pipe__WEBPACK_IMPORTED_MODULE_14__["ImageFilter"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_17__["SharedModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _social_login_social_login_module__WEBPACK_IMPORTED_MODULE_4__["SocialLogModule"]
        ],
        providers: [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"], _shared_services_auth_social_service__WEBPACK_IMPORTED_MODULE_16__["AuthSocialService"], _shared_image_service__WEBPACK_IMPORTED_MODULE_13__["ImageService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/gallery/gallery.component.scss":
/*!************************************************!*\
  !*** ./src/app/gallery/gallery.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1, h2, h3, .head-color {\n  color: #047;\n}\n\nbutton {\n  margin: 5px;\n  padding: 5px;\n  border-color: #050;\n  background-color: #ffa7007a;\n  border-radius: 10px;\n  color: #050;\n  font-weight: 600;\n}\n\nthead th, tbody td {\n  border-color: #494;\n  border-width: 2px;\n}\n\nth, .blue {\n  color: #047;\n  font-size: 23px;\n}\n\n.bordernone td {\n  border: none;\n}\n\n.pointer {\n  cursor: pointer;\n}\n\ninput {\n  background: #ffc;\n  border-radius: 4px;\n  border-width: 1px;\n  border-color: #d6d91ea6;\n}\n\ndiv {\n  background: url('bg.jpg') no-repeat;\n  background-size: cover;\n  background-attachment: fixed;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\n.logo {\n  margin-left: 30px;\n  /*display: block;*/\n  /*float: right;*/\n}\n\nnav {\n  margin-left: 30px;\n}\n\nul {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  padding: 0;\n  width: 1200px;\n  margin: 20px auto;\n  list-style-type: none;\n}\n\n.ticket {\n  margin: 6px;\n  border: 4px solid #eee;\n  border-radius: 8px;\n  box-shadow: #555 1px 1px 5px 1px;\n  width: 180px;\n  height: 240px;\n}\n\nimg {\n  width: 100%;\n  height: 100px;\n  cursor: cell;\n}\n\ninput {\n  width: 40px;\n  height: 20px;\n}\n\nh5 {\n  padding: 1px 6px;\n}\n\np {\n  font-size: 15px;\n  margin-left: 5px;\n  font-weight: 600;\n}\n\n@media screen and (max-width: 576px) {\n  .logo {\n    text-align: center;\n    margin-left: 0;\n  }\n\n  .gallery {\n    margin-top: 90px;\n  }\n\n  .navbar {\n    position: fixed;\n    width: 100%;\n    top: 0;\n    margin: 0 auto;\n    z-index: 1;\n    background: url('bg.jpg') no-repeat;\n    background-size: cover;\n    background-attachment: fixed;\n  }\n\n  button {\n    display: block;\n    margin: 3px auto;\n    width: 48%;\n    /*max-width: 130px;*/\n    font-size: 25px;\n    padding: 1px;\n  }\n\n  .ticket {\n    -webkit-transform: scale(1.5);\n            transform: scale(1.5);\n    margin: 70px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FsbGVyeS9EOlxcX3dlYlxcX3Byb2pcXG9kZXIyNC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9nYWxsZXJ5L2dhbGxlcnkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2dhbGxlcnkvRDpcXF93ZWJcXF9wcm9qXFxvZGVyMjQvc3JjXFxhcHBcXGdhbGxlcnlcXGdhbGxlcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDQyxXQUhjO0FDRWY7O0FESUE7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0REOztBRElBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQ0RGOztBRElBO0VBQ0MsV0F0QmM7RUF1QmQsZUFBQTtBQ0REOztBRElBO0VBQ0MsWUFBQTtBQ0REOztBRElBO0VBQ0MsZUFBQTtBQ0REOztBRElBO0VBQ0MsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUNERDs7QUNuQ0E7RUFDRSxtQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QURzQ0Y7O0FDbkNBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QURzQ0Y7O0FDbkNBO0VBQ0MsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FEc0NEOztBQ25DQTtFQUNDLGlCQUFBO0FEc0NEOztBQ25DQTtFQUNDLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QURzQ0Q7O0FDbkNBO0VBQ0MsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FEc0NEOztBQ25DQTtFQUNDLFdBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBRHNDRDs7QUNuQ0E7RUFDQyxXQUFBO0VBQ0EsWUFBQTtBRHNDRDs7QUNuQ0E7RUFDQyxnQkFBQTtBRHNDRDs7QUNuQ0E7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBRHNDRDs7QUNuQ0E7RUFFQztJQUNDLGtCQUFBO0lBQ0EsY0FBQTtFRHFDQTs7RUNsQ0Q7SUFDQyxnQkFBQTtFRHFDQTs7RUNsQ0Q7SUFDQyxlQUFBO0lBQ0EsV0FBQTtJQUNBLE1BQUE7SUFDQSxjQUFBO0lBQ0EsVUFBQTtJQUNBLG1DQUFBO0lBQ0Usc0JBQUE7SUFDRiw0QkFBQTtFRHFDQTs7RUNsQ0Q7SUFDQyxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxVQUFBO0lBQ0Esb0JBQUE7SUFDQSxlQUFBO0lBQ0EsWUFBQTtFRHFDQTs7RUNsQ0Q7SUFDQyw2QkFBQTtZQUFBLHFCQUFBO0lBQ0EsWUFBQTtFRHFDQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGhlYWRlci1jb2xvcjogIzA0NztcblxuaDEsIGgyLCBoMywgLmhlYWQtY29sb3Ige1xuXHRjb2xvcjogJGhlYWRlci1jb2xvcjtcbn1cblxuYnV0dG9uIHtcblx0bWFyZ2luOiA1cHg7XG5cdHBhZGRpbmc6IDVweDtcdFx0XG5cdGJvcmRlci1jb2xvcjogIzA1MDtcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmYTcwMDdhO1xuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xuXHRjb2xvcjogIzA1MDtcblx0Zm9udC13ZWlnaHQ6IDYwMDtcdFxufVxuXG50aGVhZCB0aCwgdGJvZHkgdGQgeyAgXG4gIGJvcmRlci1jb2xvcjogIzQ5NDtcbiAgYm9yZGVyLXdpZHRoOiAycHg7XG59XG5cbnRoLCAuYmx1ZSB7XHRcblx0Y29sb3I6ICRoZWFkZXItY29sb3I7XG5cdGZvbnQtc2l6ZTogMjNweDsgIFxufVxuXG4uYm9yZGVybm9uZSB0ZCB7XG5cdGJvcmRlcjogbm9uZTtcdFxufVxuXG4ucG9pbnRlciB7XG5cdGN1cnNvcjogcG9pbnRlcjtcbn1cblxuaW5wdXQge1x0XG5cdGJhY2tncm91bmQ6ICNmZmM7XG5cdGJvcmRlci1yYWRpdXM6IDRweDtcblx0Ym9yZGVyLXdpZHRoOiAxcHg7XG5cdGJvcmRlci1jb2xvcjogI2Q2ZDkxZWE2O1x0ICBcdFxufSIsImgxLCBoMiwgaDMsIC5oZWFkLWNvbG9yIHtcbiAgY29sb3I6ICMwNDc7XG59XG5cbmJ1dHRvbiB7XG4gIG1hcmdpbjogNXB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1jb2xvcjogIzA1MDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYTcwMDdhO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBjb2xvcjogIzA1MDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxudGhlYWQgdGgsIHRib2R5IHRkIHtcbiAgYm9yZGVyLWNvbG9yOiAjNDk0O1xuICBib3JkZXItd2lkdGg6IDJweDtcbn1cblxudGgsIC5ibHVlIHtcbiAgY29sb3I6ICMwNDc7XG4gIGZvbnQtc2l6ZTogMjNweDtcbn1cblxuLmJvcmRlcm5vbmUgdGQge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5wb2ludGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5pbnB1dCB7XG4gIGJhY2tncm91bmQ6ICNmZmM7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1jb2xvcjogI2Q2ZDkxZWE2O1xufVxuXG5kaXYge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9iZy5qcGcpIG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbn1cblxuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmxvZ28ge1xuICBtYXJnaW4tbGVmdDogMzBweDtcbiAgLypkaXNwbGF5OiBibG9jazsqL1xuICAvKmZsb2F0OiByaWdodDsqL1xufVxuXG5uYXYge1xuICBtYXJnaW4tbGVmdDogMzBweDtcbn1cblxudWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiAxMjAwcHg7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbi50aWNrZXQge1xuICBtYXJnaW46IDZweDtcbiAgYm9yZGVyOiA0cHggc29saWQgI2VlZTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3gtc2hhZG93OiAjNTU1IDFweCAxcHggNXB4IDFweDtcbiAgd2lkdGg6IDE4MHB4O1xuICBoZWlnaHQ6IDI0MHB4O1xufVxuXG5pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgY3Vyc29yOiBjZWxsO1xufVxuXG5pbnB1dCB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDIwcHg7XG59XG5cbmg1IHtcbiAgcGFkZGluZzogMXB4IDZweDtcbn1cblxucCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLmxvZ28ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxuXG4gIC5nYWxsZXJ5IHtcbiAgICBtYXJnaW4tdG9wOiA5MHB4O1xuICB9XG5cbiAgLm5hdmJhciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRvcDogMDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB6LWluZGV4OiAxO1xuICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1nL2JnLmpwZykgbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgfVxuXG4gIGJ1dHRvbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAzcHggYXV0bztcbiAgICB3aWR0aDogNDglO1xuICAgIC8qbWF4LXdpZHRoOiAxMzBweDsqL1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBwYWRkaW5nOiAxcHg7XG4gIH1cblxuICAudGlja2V0IHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XG4gICAgbWFyZ2luOiA3MHB4O1xuICB9XG59IiwiQGltcG9ydCBcIi4uL2FwcC5jb21wb25lbnQuc2Nzc1wiO1xuXG5kaXYge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9iZy5qcGcpIG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgIFxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xufVxuXG4qIHsgIFxuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7ICAgXG59XG5cbi5sb2dvIHtcblx0bWFyZ2luLWxlZnQ6IDMwcHg7XG5cdC8qZGlzcGxheTogYmxvY2s7Ki9cblx0LypmbG9hdDogcmlnaHQ7Ki9cbn1cblxubmF2IHtcblx0bWFyZ2luLWxlZnQ6IDMwcHg7XG59XG5cbnVsIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC13cmFwOiB3cmFwO1xuXHRwYWRkaW5nOiAwO1xuXHR3aWR0aDogMTIwMHB4O1xuXHRtYXJnaW46IDIwcHggYXV0bztcblx0bGlzdC1zdHlsZS10eXBlOiBub25lO1x0XG59XG5cbi50aWNrZXQge1xuXHRtYXJnaW46IDZweDtcblx0Ym9yZGVyOiA0cHggc29saWQgI2VlZTtcblx0Ym9yZGVyLXJhZGl1czogOHB4O1xuXHRib3gtc2hhZG93OiAjNTU1IDFweCAxcHggNXB4IDFweDtcblx0d2lkdGg6IDE4MHB4O1xuXHRoZWlnaHQ6IDI0MHB4O1x0XG59XG5cbmltZyB7XHRcdFxuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiAxMDBweDtcblx0Y3Vyc29yOiBjZWxsO1xufVxuXG5pbnB1dCB7XG5cdHdpZHRoOiA0MHB4O1xuXHRoZWlnaHQ6IDIwcHg7XHRcbn1cblxuaDUge1xuXHRwYWRkaW5nOiAxcHggNnB4O1x0XG59XG5cbnAge1xuXHRmb250LXNpemU6IDE1cHg7XG5cdG1hcmdpbi1sZWZ0OiA1cHg7XG5cdGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XHRcdFxuXG5cdC5sb2dvIHtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0bWFyZ2luLWxlZnQ6IDA7XG5cdH1cblxuXHQuZ2FsbGVyeSB7XG5cdFx0bWFyZ2luLXRvcDogOTBweDtcblx0fVxuXG5cdC5uYXZiYXIge1x0XHRcblx0XHRwb3NpdGlvbjogZml4ZWQ7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0dG9wOiAwO1xuXHRcdG1hcmdpbjogMCBhdXRvO1x0XHRcblx0XHR6LWluZGV4OiAxO1x0XHRcblx0XHRiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9iZy5qcGcpIG5vLXJlcGVhdDtcblx0ICBcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7ICBcblx0XHRiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1x0XHRcdFxuXHR9XG5cblx0YnV0dG9uIHtcblx0XHRkaXNwbGF5OiBibG9jazsgXG5cdFx0bWFyZ2luOiAzcHggYXV0bztcblx0XHR3aWR0aDogNDglO1xuXHRcdC8qbWF4LXdpZHRoOiAxMzBweDsqL1xuXHRcdGZvbnQtc2l6ZTogMjVweDtcblx0XHRwYWRkaW5nOiAxcHg7XHRcdFx0XHRcblx0fVxuXG5cdC50aWNrZXQge1x0XHRcblx0XHR0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XG5cdFx0bWFyZ2luOiA3MHB4O1x0XHRcdFxuXHR9XG5cbn1cblxuIl19 */");

/***/ }),

/***/ "./src/app/gallery/gallery.component.ts":
/*!**********************************************!*\
  !*** ./src/app/gallery/gallery.component.ts ***!
  \**********************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_image_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/image.service */ "./src/app/shared/image.service.ts");



let GalleryComponent = class GalleryComponent {
    constructor(imageService) {
        this.imageService = imageService;
        this.images = [];
        this.filterBy = 'all';
        this.onChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.images = this.imageService.getImages();
    }
    change(increased) {
        this.onChanged.emit(increased);
    }
    ngOnInit() {
    }
};
GalleryComponent.ctorParameters = () => [
    { type: _shared_image_service__WEBPACK_IMPORTED_MODULE_2__["ImageService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], GalleryComponent.prototype, "arraySum", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], GalleryComponent.prototype, "inp_val", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], GalleryComponent.prototype, "onChanged", void 0);
GalleryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-gallery',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./gallery.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/gallery/gallery.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./gallery.component.scss */ "./src/app/gallery/gallery.component.scss")).default]
    })
], GalleryComponent);



/***/ }),

/***/ "./src/app/login-page/login-page.component.scss":
/*!******************************************************!*\
  !*** ./src/app/login-page/login-page.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1, h2, h3, .head-color {\n  color: #047;\n}\n\nbutton {\n  margin: 5px;\n  padding: 5px;\n  border-color: #050;\n  background-color: #ffa7007a;\n  border-radius: 10px;\n  color: #050;\n  font-weight: 600;\n}\n\nthead th, tbody td {\n  border-color: #494;\n  border-width: 2px;\n}\n\nth, .blue {\n  color: #047;\n  font-size: 23px;\n}\n\n.bordernone td {\n  border: none;\n}\n\n.pointer {\n  cursor: pointer;\n}\n\ninput {\n  background: #ffc;\n  border-radius: 4px;\n  border-width: 1px;\n  border-color: #d6d91ea6;\n}\n\ndiv {\n  background: url('bg.jpg') no-repeat;\n  background-size: cover;\n  background-attachment: fixed;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\n.login {\n  max-width: 400px;\n  background: none;\n  margin: 0 auto;\n  text-align: center;\n  padding-bottom: 10px;\n}\n\nheader {\n  padding: 15px 0;\n}\n\nform {\n  margin: 0 auto;\n  border-color: #050;\n}\n\n.form-control > label {\n  color: #060;\n}\n\n.form-control {\n  border-width: 1px;\n  position: relative;\n  margin: 0 auto 40px;\n  width: 98%;\n  border-color: #050;\n  background: none;\n  background-color: #ffa7006a;\n  border-radius: 10px;\n}\n\ninput {\n  border: none;\n  outline: none;\n  background-color: #ffc70782;\n  margin: 10px 5px;\n  width: 150px;\n  max-height: 23px;\n}\n\n.validation {\n  margin-top: 6px;\n}\n\n.block {\n  display: block;\n  margin: 15px auto;\n}\n\nbutton {\n  width: 98%;\n}\n\nsmall {\n  position: relative;\n  height: 100px;\n  width: 100px;\n  color: #a00;\n  padding: 100px, auto;\n}\n\na {\n  text-decoration: none;\n  color: #6b3296;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4tcGFnZS9EOlxcX3dlYlxcX3Byb2pcXG9kZXIyNC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sb2dpbi1wYWdlL2xvZ2luLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xvZ2luLXBhZ2UvRDpcXF93ZWJcXF9wcm9qXFxvZGVyMjQvc3JjXFxhcHBcXGxvZ2luLXBhZ2VcXGxvZ2luLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDQyxXQUhjO0FDRWY7O0FESUE7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0REOztBRElBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQ0RGOztBRElBO0VBQ0MsV0F0QmM7RUF1QmQsZUFBQTtBQ0REOztBRElBO0VBQ0MsWUFBQTtBQ0REOztBRElBO0VBQ0MsZUFBQTtBQ0REOztBRElBO0VBQ0MsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUNERDs7QUNuQ0E7RUFDRSxtQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QURzQ0Y7O0FDbkNBO0VBQ0MsU0FBQTtFQUNDLFVBQUE7QURzQ0Y7O0FDbkNBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FEc0NGOztBQ25DQTtFQUNFLGVBQUE7QURzQ0Y7O0FDbkNBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FEc0NGOztBQ25DQTtFQUNFLFdBQUE7QURzQ0Y7O0FDbkNBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FEc0NGOztBQ2xDQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBRHFDRjs7QUNsQ0E7RUFDRSxlQUFBO0FEcUNGOztBQ2xDQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBRHFDRjs7QUNsQ0E7RUFDRSxVQUFBO0FEcUNGOztBQ2xDQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7QURxQ0Y7O0FDbENBO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FEcUNGIiwiZmlsZSI6InNyYy9hcHAvbG9naW4tcGFnZS9sb2dpbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGhlYWRlci1jb2xvcjogIzA0NztcblxuaDEsIGgyLCBoMywgLmhlYWQtY29sb3Ige1xuXHRjb2xvcjogJGhlYWRlci1jb2xvcjtcbn1cblxuYnV0dG9uIHtcblx0bWFyZ2luOiA1cHg7XG5cdHBhZGRpbmc6IDVweDtcdFx0XG5cdGJvcmRlci1jb2xvcjogIzA1MDtcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmYTcwMDdhO1xuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xuXHRjb2xvcjogIzA1MDtcblx0Zm9udC13ZWlnaHQ6IDYwMDtcdFxufVxuXG50aGVhZCB0aCwgdGJvZHkgdGQgeyAgXG4gIGJvcmRlci1jb2xvcjogIzQ5NDtcbiAgYm9yZGVyLXdpZHRoOiAycHg7XG59XG5cbnRoLCAuYmx1ZSB7XHRcblx0Y29sb3I6ICRoZWFkZXItY29sb3I7XG5cdGZvbnQtc2l6ZTogMjNweDsgIFxufVxuXG4uYm9yZGVybm9uZSB0ZCB7XG5cdGJvcmRlcjogbm9uZTtcdFxufVxuXG4ucG9pbnRlciB7XG5cdGN1cnNvcjogcG9pbnRlcjtcbn1cblxuaW5wdXQge1x0XG5cdGJhY2tncm91bmQ6ICNmZmM7XG5cdGJvcmRlci1yYWRpdXM6IDRweDtcblx0Ym9yZGVyLXdpZHRoOiAxcHg7XG5cdGJvcmRlci1jb2xvcjogI2Q2ZDkxZWE2O1x0ICBcdFxufSIsImgxLCBoMiwgaDMsIC5oZWFkLWNvbG9yIHtcbiAgY29sb3I6ICMwNDc7XG59XG5cbmJ1dHRvbiB7XG4gIG1hcmdpbjogNXB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1jb2xvcjogIzA1MDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYTcwMDdhO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBjb2xvcjogIzA1MDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxudGhlYWQgdGgsIHRib2R5IHRkIHtcbiAgYm9yZGVyLWNvbG9yOiAjNDk0O1xuICBib3JkZXItd2lkdGg6IDJweDtcbn1cblxudGgsIC5ibHVlIHtcbiAgY29sb3I6ICMwNDc7XG4gIGZvbnQtc2l6ZTogMjNweDtcbn1cblxuLmJvcmRlcm5vbmUgdGQge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5wb2ludGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5pbnB1dCB7XG4gIGJhY2tncm91bmQ6ICNmZmM7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1jb2xvcjogI2Q2ZDkxZWE2O1xufVxuXG5kaXYge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9iZy5qcGcpIG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbn1cblxuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmxvZ2luIHtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbmhlYWRlciB7XG4gIHBhZGRpbmc6IDE1cHggMDtcbn1cblxuZm9ybSB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3JkZXItY29sb3I6ICMwNTA7XG59XG5cbi5mb3JtLWNvbnRyb2wgPiBsYWJlbCB7XG4gIGNvbG9yOiAjMDYwO1xufVxuXG4uZm9ybS1jb250cm9sIHtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwIGF1dG8gNDBweDtcbiAgd2lkdGg6IDk4JTtcbiAgYm9yZGVyLWNvbG9yOiAjMDUwO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhNzAwNmE7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbmlucHV0IHtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjNzA3ODI7XG4gIG1hcmdpbjogMTBweCA1cHg7XG4gIHdpZHRoOiAxNTBweDtcbiAgbWF4LWhlaWdodDogMjNweDtcbn1cblxuLnZhbGlkYXRpb24ge1xuICBtYXJnaW4tdG9wOiA2cHg7XG59XG5cbi5ibG9jayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDE1cHggYXV0bztcbn1cblxuYnV0dG9uIHtcbiAgd2lkdGg6IDk4JTtcbn1cblxuc21hbGwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgY29sb3I6ICNhMDA7XG4gIHBhZGRpbmc6IDEwMHB4LCBhdXRvO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzZiMzI5Njtcbn0iLCJAaW1wb3J0IFwiLi4vYXBwLmNvbXBvbmVudC5zY3NzXCI7XG5cbmRpdiB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1nL2JnLmpwZykgbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAgXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG59XG5cbioge1xuXHRtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7ICBcbn1cblxuLmxvZ2luIHsgICBcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbmhlYWRlciB7XG4gIHBhZGRpbmc6IDE1cHggMDtcbn1cblxuZm9ybSB7ICBcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJvcmRlci1jb2xvcjogIzA1MDtcbn1cblxuLmZvcm0tY29udHJvbCA+IGxhYmVsIHtcbiAgY29sb3I6ICMwNjA7XG59XG5cbi5mb3JtLWNvbnRyb2wge1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyAgXG4gIG1hcmdpbjogMCBhdXRvIDQwcHg7XG4gIHdpZHRoOiA5OCU7XG4gIGJvcmRlci1jb2xvcjogIzA1MDtcbiAgYmFja2dyb3VuZDogbm9uZTsgIFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhNzAwNmE7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgXG59XG5cbmlucHV0IHsgIFxuICBib3JkZXI6IG5vbmU7ICAgXG4gIG91dGxpbmU6IG5vbmU7ICBcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzcwNzgyO1xuICBtYXJnaW46IDEwcHggNXB4O1xuICB3aWR0aDogMTUwcHg7XG4gIG1heC1oZWlnaHQ6IDIzcHg7XG59XG5cbi52YWxpZGF0aW9uIHtcbiAgbWFyZ2luLXRvcDogNnB4OyAgXG59XG5cbi5ibG9jayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDE1cHggYXV0bzsgIFxufVxuXG5idXR0b24ge1xuICB3aWR0aDogOTglO1xufVxuXG5zbWFsbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBjb2xvcjogI2EwMDtcbiAgcGFkZGluZzogMTAwcHgsIGF1dG87XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjNmIzMjk2O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/login-page/login-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/login-page/login-page.component.ts ***!
  \****************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");





let LoginPageComponent = class LoginPageComponent {
    constructor(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    ngOnInit() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)
            ])
        });
    }
    // вход в меню с авторизацией
    submit() {
        if (this.form.invalid) {
            return;
        }
        const user = {
            email: this.form.value.email,
            password: this.form.value.password
        };
        this.auth.login(user).subscribe(() => {
            this.form.reset();
            this.router.navigate(['menu']);
        });
    }
};
LoginPageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
LoginPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login-page/login-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login-page.component.scss */ "./src/app/login-page/login-page.component.scss")).default]
    })
], LoginPageComponent);



/***/ }),

/***/ "./src/app/menu-page/menu-page.component.scss":
/*!****************************************************!*\
  !*** ./src/app/menu-page/menu-page.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1, h2, h3, .head-color {\n  color: #047;\n}\n\nbutton {\n  margin: 5px;\n  padding: 5px;\n  border-color: #050;\n  background-color: #ffa7007a;\n  border-radius: 10px;\n  color: #050;\n  font-weight: 600;\n}\n\nthead th, tbody td {\n  border-color: #494;\n  border-width: 2px;\n}\n\nth, .blue {\n  color: #047;\n  font-size: 23px;\n}\n\n.bordernone td {\n  border: none;\n}\n\n.pointer {\n  cursor: pointer;\n}\n\ninput {\n  background: #ffc;\n  border-radius: 4px;\n  border-width: 1px;\n  border-color: #d6d91ea6;\n}\n\n.bg {\n  background: url('bg.jpg') no-repeat;\n  background-size: cover;\n  background-attachment: fixed;\n}\n\nh2, h3, h4, h5 {\n  text-align: center;\n}\n\nth, td, tr {\n  padding: 0 2px;\n}\n\ninput {\n  max-width: 40px;\n  height: 20px;\n}\n\n.name {\n  min-width: 250px;\n  height: auto;\n  padding-left: 5px;\n  outline: none;\n}\n\n@media screen and (max-width: 576px) {\n  table, .user {\n    display: none;\n  }\n\n  /*th, tr, td.blue {\t\t\n  \tfont-size: 17px;\n  }*/\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS1wYWdlL0Q6XFxfd2ViXFxfcHJvalxcb2RlcjI0L3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21lbnUtcGFnZS9tZW51LXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21lbnUtcGFnZS9EOlxcX3dlYlxcX3Byb2pcXG9kZXIyNC9zcmNcXGFwcFxcbWVudS1wYWdlXFxtZW51LXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDQyxXQUhjO0FDRWY7O0FESUE7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0REOztBRElBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQ0RGOztBRElBO0VBQ0MsV0F0QmM7RUF1QmQsZUFBQTtBQ0REOztBRElBO0VBQ0MsWUFBQTtBQ0REOztBRElBO0VBQ0MsZUFBQTtBQ0REOztBRElBO0VBQ0MsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUNERDs7QUNuQ0E7RUFDRSxtQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QURzQ0Y7O0FDbkNBO0VBQ0Usa0JBQUE7QURzQ0Y7O0FDbkNBO0VBQ0UsY0FBQTtBRHNDRjs7QUNuQ0E7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBRHNDRjs7QUNuQ0E7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QURzQ0Y7O0FDbENBO0VBRUM7SUFDQyxhQUFBO0VEb0NBOztFQ2pDRDs7SUFBQTtBRHNDRCIsImZpbGUiOiJzcmMvYXBwL21lbnUtcGFnZS9tZW51LXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkaGVhZGVyLWNvbG9yOiAjMDQ3O1xuXG5oMSwgaDIsIGgzLCAuaGVhZC1jb2xvciB7XG5cdGNvbG9yOiAkaGVhZGVyLWNvbG9yO1xufVxuXG5idXR0b24ge1xuXHRtYXJnaW46IDVweDtcblx0cGFkZGluZzogNXB4O1x0XHRcblx0Ym9yZGVyLWNvbG9yOiAjMDUwO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhNzAwN2E7XG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cdGNvbG9yOiAjMDUwO1xuXHRmb250LXdlaWdodDogNjAwO1x0XG59XG5cbnRoZWFkIHRoLCB0Ym9keSB0ZCB7ICBcbiAgYm9yZGVyLWNvbG9yOiAjNDk0O1xuICBib3JkZXItd2lkdGg6IDJweDtcbn1cblxudGgsIC5ibHVlIHtcdFxuXHRjb2xvcjogJGhlYWRlci1jb2xvcjtcblx0Zm9udC1zaXplOiAyM3B4OyAgXG59XG5cbi5ib3JkZXJub25lIHRkIHtcblx0Ym9yZGVyOiBub25lO1x0XG59XG5cbi5wb2ludGVyIHtcblx0Y3Vyc29yOiBwb2ludGVyO1xufVxuXG5pbnB1dCB7XHRcblx0YmFja2dyb3VuZDogI2ZmYztcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHRib3JkZXItd2lkdGg6IDFweDtcblx0Ym9yZGVyLWNvbG9yOiAjZDZkOTFlYTY7XHQgIFx0XG59IiwiaDEsIGgyLCBoMywgLmhlYWQtY29sb3Ige1xuICBjb2xvcjogIzA0Nztcbn1cblxuYnV0dG9uIHtcbiAgbWFyZ2luOiA1cHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLWNvbG9yOiAjMDUwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhNzAwN2E7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGNvbG9yOiAjMDUwO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG50aGVhZCB0aCwgdGJvZHkgdGQge1xuICBib3JkZXItY29sb3I6ICM0OTQ7XG4gIGJvcmRlci13aWR0aDogMnB4O1xufVxuXG50aCwgLmJsdWUge1xuICBjb2xvcjogIzA0NztcbiAgZm9udC1zaXplOiAyM3B4O1xufVxuXG4uYm9yZGVybm9uZSB0ZCB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLnBvaW50ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmlucHV0IHtcbiAgYmFja2dyb3VuZDogI2ZmYztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLWNvbG9yOiAjZDZkOTFlYTY7XG59XG5cbi5iZyB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1nL2JnLmpwZykgbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xufVxuXG5oMiwgaDMsIGg0LCBoNSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxudGgsIHRkLCB0ciB7XG4gIHBhZGRpbmc6IDAgMnB4O1xufVxuXG5pbnB1dCB7XG4gIG1heC13aWR0aDogNDBweDtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuXG4ubmFtZSB7XG4gIG1pbi13aWR0aDogMjUwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIHRhYmxlLCAudXNlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC8qdGgsIHRyLCB0ZC5ibHVlIHtcdFx0XG4gIFx0Zm9udC1zaXplOiAxN3B4O1xuICB9Ki9cbn0iLCJAaW1wb3J0IFwiLi4vYXBwLmNvbXBvbmVudC5zY3NzXCI7XG5cbi5iZyB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1nL2JnLmpwZykgbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAgXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG59XG5cbmgyLCBoMywgaDQsIGg1IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyBcbn1cblxudGgsIHRkLCB0ciB7IFxuICBwYWRkaW5nOiAwIDJweDsgIFxufVxuXG5pbnB1dCB7XG4gIG1heC13aWR0aDogNDBweDsgIFxuICBoZWlnaHQ6IDIwcHg7ICAgIFxufVxuXG4ubmFtZSB7XG4gIG1pbi13aWR0aDogMjUwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIG91dGxpbmU6IG5vbmU7ICBcbn1cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuXG5cdHRhYmxlLCAudXNlciB7XG5cdFx0ZGlzcGxheTogbm9uZTtcdFx0XHRcblx0fTsgICAgXG5cblx0Lyp0aCwgdHIsIHRkLmJsdWUge1x0XHRcblx0XHRmb250LXNpemU6IDE3cHg7XG5cdH0qL1xuXG59Il19 */");

/***/ }),

/***/ "./src/app/menu-page/menu-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/menu-page/menu-page.component.ts ***!
  \**************************************************/
/*! exports provided: MenuPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageComponent", function() { return MenuPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/posts.service */ "./src/app/shared/posts.service.ts");
/* harmony import */ var _shared_services_auth_social_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/auth-social.service */ "./src/app/shared/services/auth-social.service.ts");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.js");



// Получить данные пользователя из social-login.component  


let MenuPageComponent = class MenuPageComponent {
    constructor(postsService, someSrv, _socioAuthServ) {
        this.postsService = postsService;
        this.someSrv = someSrv;
        this._socioAuthServ = _socioAuthServ;
        this.totalVal = [];
        this.menuArray = [];
        this.arraySum = [];
        this.sum = [];
        this.userQuantity = [];
        this.menuData = {};
        this.menuList = [];
        this.inp_val = [];
        this.menuArrlength = 0;
        this.arr = [];
    }
    // social-login.component  
    ngOnInit() {
        this.pSub = this.postsService.getAll().subscribe(menuList => {
            this.menuData = menuList;
            // create array of menuList 
            this.menuArray = this.menuData[0].menuList.slice(); // copy data array of menuArray       
            this.menuArrlength = this.menuArray.length;
            this.createArr(this.menuArrlength);
        });
    }
    createArr(l) {
        this.arr = new Array(l);
        for (var i = 0; i < l; i++) {
            this.arr[i] = 0;
            this.arraySum[i] = 0;
        }
        this.inp_val = this.arr.slice();
    }
    calcTabe(increased) {
        for (var i = 0; this.inp_val.length; i++) {
            this.arraySum[i] = (this.menuArray[i].price) * (this.inp_val[i] || 0);
            this.oderVal = this.arraySum.reduce(function (sum, elem) { return sum + elem; }, 0);
        }
    }
    // Обращение из галлереи
    onChanged(increased) {
        this.calcTabe(increased);
    }
    // Добавить в базу заказ
    send() {
        const post = {
            date: new Date(),
            userName: this.userName || this.someSrv.userSocial.name,
            user: this.inp_val,
            foto: this.someSrv.userSocial.photoUrl
        };
        this.postsService.create(post).subscribe(() => {
            this.oderVal = 0;
            this.userName = "";
            this.createArr(this.menuArrlength);
        });
    }
    // Method to log out.
    signOut() {
        if (this.someSrv.userSocial) {
            this._socioAuthServ.signOut();
        }
        this.someSrv.userSocial = 0;
    }
};
MenuPageComponent.ctorParameters = () => [
    { type: _shared_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"] },
    { type: _shared_services_auth_social_service__WEBPACK_IMPORTED_MODULE_3__["AuthSocialService"] },
    { type: angularx_social_login__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MenuPageComponent.prototype, "user", void 0);
MenuPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./menu-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu-page/menu-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./menu-page.component.scss */ "./src/app/menu-page/menu-page.component.scss")).default]
    })
], MenuPageComponent);



/***/ }),

/***/ "./src/app/oder-page/oder-page.component.scss":
/*!****************************************************!*\
  !*** ./src/app/oder-page/oder-page.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1, h2, h3, .head-color {\n  color: #047;\n}\n\nbutton {\n  margin: 5px;\n  padding: 5px;\n  border-color: #050;\n  background-color: #ffa7007a;\n  border-radius: 10px;\n  color: #050;\n  font-weight: 600;\n}\n\nthead th, tbody td {\n  border-color: #494;\n  border-width: 2px;\n}\n\nth, .blue {\n  color: #047;\n  font-size: 23px;\n}\n\n.bordernone td {\n  border: none;\n}\n\n.pointer {\n  cursor: pointer;\n}\n\ninput {\n  background: #ffc;\n  border-radius: 4px;\n  border-width: 1px;\n  border-color: #d6d91ea6;\n}\n\ndiv, table {\n  background: url('bg.jpg') no-repeat;\n  background-size: cover;\n  background-attachment: fixed;\n}\n\n* {\n  font-weight: 600;\n}\n\ntable {\n  font-size: 16px;\n}\n\ninput {\n  width: 50px;\n  height: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb2Rlci1wYWdlL0Q6XFxfd2ViXFxfcHJvalxcb2RlcjI0L3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL29kZXItcGFnZS9vZGVyLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL29kZXItcGFnZS9EOlxcX3dlYlxcX3Byb2pcXG9kZXIyNC9zcmNcXGFwcFxcb2Rlci1wYWdlXFxvZGVyLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDQyxXQUhjO0FDRWY7O0FESUE7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0REOztBRElBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQ0RGOztBRElBO0VBQ0MsV0F0QmM7RUF1QmQsZUFBQTtBQ0REOztBRElBO0VBQ0MsWUFBQTtBQ0REOztBRElBO0VBQ0MsZUFBQTtBQ0REOztBRElBO0VBQ0MsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUNERDs7QUNuQ0E7RUFDRSxtQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QURzQ0Y7O0FDbkNBO0VBQ0UsZ0JBQUE7QURzQ0Y7O0FDbkNBO0VBQVEsZUFBQTtBRHVDUjs7QUNyQ0E7RUFDQyxXQUFBO0VBQ0EsWUFBQTtBRHdDRCIsImZpbGUiOiJzcmMvYXBwL29kZXItcGFnZS9vZGVyLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkaGVhZGVyLWNvbG9yOiAjMDQ3O1xuXG5oMSwgaDIsIGgzLCAuaGVhZC1jb2xvciB7XG5cdGNvbG9yOiAkaGVhZGVyLWNvbG9yO1xufVxuXG5idXR0b24ge1xuXHRtYXJnaW46IDVweDtcblx0cGFkZGluZzogNXB4O1x0XHRcblx0Ym9yZGVyLWNvbG9yOiAjMDUwO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhNzAwN2E7XG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cdGNvbG9yOiAjMDUwO1xuXHRmb250LXdlaWdodDogNjAwO1x0XG59XG5cbnRoZWFkIHRoLCB0Ym9keSB0ZCB7ICBcbiAgYm9yZGVyLWNvbG9yOiAjNDk0O1xuICBib3JkZXItd2lkdGg6IDJweDtcbn1cblxudGgsIC5ibHVlIHtcdFxuXHRjb2xvcjogJGhlYWRlci1jb2xvcjtcblx0Zm9udC1zaXplOiAyM3B4OyAgXG59XG5cbi5ib3JkZXJub25lIHRkIHtcblx0Ym9yZGVyOiBub25lO1x0XG59XG5cbi5wb2ludGVyIHtcblx0Y3Vyc29yOiBwb2ludGVyO1xufVxuXG5pbnB1dCB7XHRcblx0YmFja2dyb3VuZDogI2ZmYztcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHRib3JkZXItd2lkdGg6IDFweDtcblx0Ym9yZGVyLWNvbG9yOiAjZDZkOTFlYTY7XHQgIFx0XG59IiwiaDEsIGgyLCBoMywgLmhlYWQtY29sb3Ige1xuICBjb2xvcjogIzA0Nztcbn1cblxuYnV0dG9uIHtcbiAgbWFyZ2luOiA1cHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLWNvbG9yOiAjMDUwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhNzAwN2E7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGNvbG9yOiAjMDUwO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG50aGVhZCB0aCwgdGJvZHkgdGQge1xuICBib3JkZXItY29sb3I6ICM0OTQ7XG4gIGJvcmRlci13aWR0aDogMnB4O1xufVxuXG50aCwgLmJsdWUge1xuICBjb2xvcjogIzA0NztcbiAgZm9udC1zaXplOiAyM3B4O1xufVxuXG4uYm9yZGVybm9uZSB0ZCB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLnBvaW50ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmlucHV0IHtcbiAgYmFja2dyb3VuZDogI2ZmYztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLWNvbG9yOiAjZDZkOTFlYTY7XG59XG5cbmRpdiwgdGFibGUge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9iZy5qcGcpIG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbn1cblxuKiB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbnRhYmxlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG5pbnB1dCB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDIycHg7XG59IiwiQGltcG9ydCBcIi4uL2FwcC5jb21wb25lbnQuc2Nzc1wiO1xuXG5kaXYsIHRhYmxlIHtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvYmcuanBnKSBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7ICBcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbn1cblxuKiB7ICBcbiAgZm9udC13ZWlnaHQ6IDYwMDsgIFxufVxuXG50YWJsZSB7IGZvbnQtc2l6ZTogMTZweDsgfVxuXG5pbnB1dCB7XHRcblx0d2lkdGg6IDUwcHg7XHRcblx0aGVpZ2h0OiAyMnB4O1x0ICBcdFxufVxuXG5cbiJdfQ== */");

/***/ }),

/***/ "./src/app/oder-page/oder-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/oder-page/oder-page.component.ts ***!
  \**************************************************/
/*! exports provided: OderPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OderPageComponent", function() { return OderPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/posts.service */ "./src/app/shared/posts.service.ts");



// для редактирования
// import {ActivatedRoute, Params} from '@angular/router';
// import {switchMap} from 'rxjs/operators'
// import {FormControl, FormGroup, Validators} from '@angular/forms'
let OderPageComponent = class OderPageComponent {
    constructor(postsService) {
        // const intervalStream$ = interval(10000)
        this.postsService = postsService;
        this.oderVal = 0;
        this.menuArray = [];
        this.userArray = [];
        this.arraySum = [];
        this.sum = [];
        this.userSum = [];
        this.userList = [];
        this.menuData = {};
        this.menuArrlength = 0;
        this.menuList = [];
        // this.sub = intervalStream$.subscribe((value) => {            
        //     this.ngOnInit()
        // })
    }
    ngOnInit() {
        //получить меню:
        this.pSub = this.postsService.getAll().subscribe(menuList => {
            this.menuData = menuList;
            // create array of menuList: 
            this.menuArray = this.menuData[0].menuList.slice(); // copy data array of menuArray 
            this.menuArrlength = this.menuArray.length;
        });
        //получить заказы пользователей:
        this.uSub = this.postsService.getAllUsers().subscribe(dataU => {
            this.userList = dataU;
            console.log(this.userList);
            this.calcTabe(this.userList);
        });
    }
    // расчет данных таблицы:
    calcTabe(usList) {
        for (let i = 0; i < usList.length; i++) {
            this.userArray[i] = usList[i].user;
            //   стоимость блюда с учетом количества:
            for (var j = 0; j < this.userArray[0].length; j++) {
                this.sum[j] = (this.menuArray[j].price * this.userArray[i][j]);
            }
            this.arraySum[i] = this.sum.slice();
            //   стоимость заказа отдельного пользователя:
            this.userSum[i] = this.arraySum[i].reduce(function (sum, elem) { return sum + elem; }, 0);
        }
        //   стоимость всего заказа:
        this.oderVal = this.userSum.reduce(function (sum, elem) { return sum + elem; }, 0);
    }
    // Расчет стоимости после редактирования заказа:
    changeHandler(a, b) {
        if (this.userArray[a][b] == undefined) {
            this.userArray[a][b] = 0;
        }
        this.arraySum[a][b] = this.userArray[a][b] * this.menuArray[b].price;
        this.userSum[a] = this.arraySum[a].reduce(function (sum, elem) { return sum + elem; }, 0);
        this.oderVal = this.userSum.reduce(function (sum, elem) { return sum + elem; }, 0);
    }
    // Удалить пользователя
    remove(id) {
        this.dSub = this.postsService.remove(id).subscribe(() => {
            this.userList = this.userList.filter(user => user.id !== id);
            this.sum.length = 0;
            this.userSum.length = 0;
            this.calcTabe(this.userList);
        });
    }
    // Редактирование меню пользователей в базе
    update(post) {
        console.log("post");
        console.log(post);
        this.postsService.update(post).subscribe();
    }
    // Отписаться
    ngOnDestroy() {
        if (this.pSub) {
            this.pSub.unsubscribe();
        }
        if (this.dSub) {
            this.dSub.unsubscribe();
        }
    }
};
OderPageComponent.ctorParameters = () => [
    { type: _shared_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"] }
];
OderPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oder-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./oder-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/oder-page/oder-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./oder-page.component.scss */ "./src/app/oder-page/oder-page.component.scss")).default]
    })
], OderPageComponent);



/***/ }),

/***/ "./src/app/shared/filter.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/shared/filter.pipe.ts ***!
  \***************************************/
/*! exports provided: ImageFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageFilter", function() { return ImageFilter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ImageFilter = class ImageFilter {
    transform(items, criteria) {
        if (criteria === 'all') {
            return items;
        }
        else {
            return items.filter(item => item.category === criteria);
        }
    }
};
ImageFilter = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'imageFilter' })
], ImageFilter);



/***/ }),

/***/ "./src/app/shared/image.service.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/image.service.ts ***!
  \*****************************************/
/*! exports provided: ImageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageService", function() { return ImageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ImageService = class ImageService {
    constructor() {
        this.visibleImage = [];
    }
    getImages() {
        return this.visibleImage = IMAGES;
    }
};
ImageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ImageService);

const IMAGES = [
    {
        "id": 1,
        "category": "first",
        "dish": "Борщ",
        "url": "assets/img/borsh.jpg",
        "price": 15,
        "unit": "п",
        "weight": 1
    },
    {
        "id": 2,
        "category": "first",
        "dish": "Суп",
        "url": "assets/img/soup.jpg",
        "price": 17,
        "unit": "п",
        "weight": 1
    },
    {
        "id": 3,
        "category": "second",
        "dish": "Мясо",
        "url": "assets/img/steak.jpg",
        "price": 20,
        "unit": "г",
        "weight": 100
    },
    {
        "id": 4,
        "category": "second",
        "dish": "Рыба",
        "url": "assets/img/fish.jpg",
        "price": 18,
        "unit": "г",
        "weight": 100
    },
    {
        "id": 5,
        "category": "second",
        "dish": "Картошка",
        "url": "assets/img/potato.jpg",
        "price": 8,
        "unit": "г",
        "weight": 100
    },
    {
        "id": 6,
        "category": "salads",
        "dish": "Оливье",
        "url": "assets/img/oliv.jpg",
        "price": 14,
        "unit": "г",
        "weight": 100
    },
    {
        "id": 7,
        "category": "salads",
        "dish": "Селедка под шубой",
        "url": "assets/img/shuba.jpg",
        "price": 16,
        "unit": "г",
        "weight": 100
    },
    {
        "id": 8,
        "category": "salads",
        "dish": "Помидоры, огурцы",
        "url": "assets/img/tomato.jpg",
        "price": 10,
        "unit": "г",
        "weight": 100
    },
    {
        "id": 9,
        "category": "drink",
        "dish": "Сок",
        "url": "assets/img/juice.jpg",
        "price": 14,
        "unit": "л",
        "weight": 0.3
    },
    {
        "id": 10,
        "category": "drink",
        "dish": "Пиво",
        "url": "assets/img/beer.jpg",
        "price": 20,
        "unit": "л",
        "weight": 0.5
    },
    {
        "id": 11,
        "category": "drink",
        "dish": "Вино",
        "url": "assets/img/wine.jpg",
        "price": 20,
        "unit": "л",
        "weight": 0.1
    }
];


/***/ }),

/***/ "./src/app/shared/posts.service.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/posts.service.ts ***!
  \*****************************************/
/*! exports provided: PostsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsService", function() { return PostsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let PostsService = class PostsService {
    constructor(http) {
        this.http = http;
    }
    create(post) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].fbDbUrl}/users.json`, post)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((response) => {
            return Object.assign({}, post, { 
                // id: response.name,
                date: new Date(post.date) });
        }));
    }
    // Получить меню из базы
    getAll() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].fbDbUrl}/menuList.json`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((response) => {
            return Object
                .keys(response)
                .map(key => (Object.assign({}, response[key], { id: key, date: new Date(response[key].date) })));
        }));
    }
    /// Получить пользователей из базы
    getAllUsers() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].fbDbUrl}/users.json`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((response) => {
            return Object
                .keys(response)
                .map(key => (Object.assign({}, response[key], { id: key, date: new Date(response[key].date) })));
        }));
    }
    // Редактирование меню пользователей в базе
    getById(id) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].fbDbUrl}/users/${id}.json`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((post) => {
            return Object.assign({}, post, { id, date: new Date(post.date) });
        }));
    }
    // Удаление всех пользователей в базе
    // removeAll(): Observable<void> {
    //   return this.http.delete<void>(`${environment.fbDbUrl}/users.json`)
    // }
    // Удаление пользователя
    remove(id) {
        return this.http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].fbDbUrl}/users/${id}.json`);
    }
    // Редактирование меню пользователей в базе
    // update(post: Post): Observable<Post> {
    //     return this.http.patch<Post>(`${environment.fbDbUrl}/users/${post.id}.json`, post)
    //   }
    update(post) {
        console.log("service_post");
        console.log(post);
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].fbDbUrl}/users/${post.id}.json`, post);
    }
};
PostsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
PostsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], PostsService);



/***/ }),

/***/ "./src/app/shared/services/auth-social.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/services/auth-social.service.ts ***!
  \********************************************************/
/*! exports provided: AuthSocialService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthSocialService", function() { return AuthSocialService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AuthSocialService = class AuthSocialService {
    constructor() {
        this.userSocial = 0;
    }
};
AuthSocialService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthSocialService);



/***/ }),

/***/ "./src/app/shared/services/auth.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
    }
    get token() {
        const expDate = new Date(localStorage.getItem('fb-token-exp'));
        if (new Date() > expDate) {
            this.logout();
            return null;
        }
        return localStorage.getItem('fb-token');
    }
    login(user) {
        user.returnSecureToken = true;
        return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiKey}`, user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(this.setToken));
    }
    logout() {
        this.setToken(null);
    }
    isAuthenticated() {
        return !!this.token;
    }
    setToken(response) {
        if (response) {
            const expDate = new Date(new Date().getTime() + +response.expiresIn * 1000);
            localStorage.setItem('fb-token', response.idToken);
            localStorage.setItem('fb-token-exp', expDate.toString());
        }
        else {
            localStorage.clear();
        }
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthService);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]],
        exports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]]
    })
], SharedModule);



/***/ }),

/***/ "./src/app/social-login/social-login.component.css":
/*!*********************************************************!*\
  !*** ./src/app/social-login/social-login.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("$header-color: #047;\n\nh1, h2, h3, .head-color {\n\tcolor: $header-color;\n}\n\nbutton {\n\tmargin: 5px;\n\tpadding: 5px;\t\t\n\tborder-color: #050;\n\tbackground-color: #ffa7007a;\n\tborder-radius: 10px;\n\tcolor: #050;\n\tfont-weight: 600;\t\n}\n\nthead th, tbody td {  \n  border-color: #494;\n  border-width: 2px;\n}\n\nth, .blue {\t\n\tcolor: $header-color;\n\tfont-size: 23px;  \n}\n\n.bordernone td {\n\tborder: none;\t\n}\n\n.pointer {\n\tcursor: pointer;\n}\n\ninput {\t\n\tbackground: #ffc;\n\tborder-radius: 4px;\n\tborder-width: 1px;\n\tborder-color: #d6d91ea6;\t  \t\n}\n\n.fa {    \r\n    color: #24b;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zb2NpYWwtbG9naW4vc29jaWFsLWxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbUJBQW1COztBQUVuQjtDQUNDLG9CQUFvQjtBQUNyQjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0NBQ1osa0JBQWtCO0NBQ2xCLDJCQUEyQjtDQUMzQixtQkFBbUI7Q0FDbkIsV0FBVztDQUNYLGdCQUFnQjtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7Q0FDQyxvQkFBb0I7Q0FDcEIsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLFlBQVk7QUFDYjs7QUFFQTtDQUNDLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsa0JBQWtCO0NBQ2xCLGlCQUFpQjtDQUNqQix1QkFBdUI7QUFDeEI7O0FDcENBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvc29jaWFsLWxvZ2luL3NvY2lhbC1sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGhlYWRlci1jb2xvcjogIzA0NztcblxuaDEsIGgyLCBoMywgLmhlYWQtY29sb3Ige1xuXHRjb2xvcjogJGhlYWRlci1jb2xvcjtcbn1cblxuYnV0dG9uIHtcblx0bWFyZ2luOiA1cHg7XG5cdHBhZGRpbmc6IDVweDtcdFx0XG5cdGJvcmRlci1jb2xvcjogIzA1MDtcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmYTcwMDdhO1xuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xuXHRjb2xvcjogIzA1MDtcblx0Zm9udC13ZWlnaHQ6IDYwMDtcdFxufVxuXG50aGVhZCB0aCwgdGJvZHkgdGQgeyAgXG4gIGJvcmRlci1jb2xvcjogIzQ5NDtcbiAgYm9yZGVyLXdpZHRoOiAycHg7XG59XG5cbnRoLCAuYmx1ZSB7XHRcblx0Y29sb3I6ICRoZWFkZXItY29sb3I7XG5cdGZvbnQtc2l6ZTogMjNweDsgIFxufVxuXG4uYm9yZGVybm9uZSB0ZCB7XG5cdGJvcmRlcjogbm9uZTtcdFxufVxuXG4ucG9pbnRlciB7XG5cdGN1cnNvcjogcG9pbnRlcjtcbn1cblxuaW5wdXQge1x0XG5cdGJhY2tncm91bmQ6ICNmZmM7XG5cdGJvcmRlci1yYWRpdXM6IDRweDtcblx0Ym9yZGVyLXdpZHRoOiAxcHg7XG5cdGJvcmRlci1jb2xvcjogI2Q2ZDkxZWE2O1x0ICBcdFxufSIsIkBpbXBvcnQgXCIuLi9hcHAuY29tcG9uZW50LnNjc3NcIjtcclxuXHJcblxyXG4uZmEgeyAgICBcclxuICAgIGNvbG9yOiAjMjRiO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/social-login/social-login.component.ts":
/*!********************************************************!*\
  !*** ./src/app/social-login/social-login.component.ts ***!
  \********************************************************/
/*! exports provided: SocialLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialLoginComponent", function() { return SocialLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_services_auth_social_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/auth-social.service */ "./src/app/shared/services/auth-social.service.ts");



 // +++++

let SocialLoginComponent = class SocialLoginComponent {
    constructor(_socioAuthServ, router, //  +++++
    someSrv) {
        this._socioAuthServ = _socioAuthServ;
        this.router = router;
        this.someSrv = someSrv;
    }
    // Method to sign in with google.
    singIn(platform) {
        platform = angularx_social_login__WEBPACK_IMPORTED_MODULE_2__["GoogleLoginProvider"].PROVIDER_ID;
        this._socioAuthServ.signIn(platform).then((response) => {
            //  console.log(platform + " logged in user data is= " , response)
            this.user = response;
            this.someSrv.userSocial = response;
            this.router.navigate(['menu']); // ++++
        });
    }
    singInFacebook() {
        // platform = FacebookLoginProvider.PROVIDER_ID
        this._socioAuthServ.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_2__["FacebookLoginProvider"].PROVIDER_ID).then((response) => {
            // console.log(platform + " logged in user data is= " , response)
            this.user = response;
            this.router.navigate(['menu']); // ++++
        });
    }
    // Method to log out.
    signOut() {
        this._socioAuthServ.signOut();
        this.user = null;
        console.log('User signed out.');
    }
};
SocialLoginComponent.ctorParameters = () => [
    { type: angularx_social_login__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _shared_services_auth_social_service__WEBPACK_IMPORTED_MODULE_4__["AuthSocialService"] }
];
SocialLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'social-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./social-login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/social-login/social-login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./social-login.component.css */ "./src/app/social-login/social-login.component.css")).default]
    })
], SocialLoginComponent);



/***/ }),

/***/ "./src/app/social-login/social-login.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/social-login/social-login.module.ts ***!
  \*****************************************************/
/*! exports provided: provideConfig, SocialLogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "provideConfig", function() { return provideConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialLogModule", function() { return SocialLogModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _social_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./social-login.component */ "./src/app/social-login/social-login.component.ts");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.js");



// import { SocialLoginRoutingModule } from './social-login-routing.module'

// Importing social login module and google login provider.

// Client id for the google oauth. This is used for validation of our application to google.
// 461068843179-jm1k8h8tgf4lr27pp3l1uupc6j25qp45.apps.googleusercontent.com
//461068843179-h8gd0mqvpd5aq9jl9r8fhnktciajft65.apps.googleusercontent.com
//face book id
//2538444313043851
// https://developers.google.com/identity/sign-in/web/sign-in#before_you_begin
const google_oauth_client_id = '461068843179-9dqf2i8omtfrbe5e425m53kcuvqk69h7.apps.googleusercontent.com';
let config = new angularx_social_login__WEBPACK_IMPORTED_MODULE_4__["AuthServiceConfig"]([
    {
        id: angularx_social_login__WEBPACK_IMPORTED_MODULE_4__["GoogleLoginProvider"].PROVIDER_ID,
        provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_4__["GoogleLoginProvider"](google_oauth_client_id)
    },
    {
        id: angularx_social_login__WEBPACK_IMPORTED_MODULE_4__["FacebookLoginProvider"].PROVIDER_ID,
        provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_4__["FacebookLoginProvider"]("661529714713339")
    }
]);
function provideConfig() {
    return config;
}
let SocialLogModule = class SocialLogModule {
};
SocialLogModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _social_login_component__WEBPACK_IMPORTED_MODULE_3__["SocialLoginComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            // SocialLoginRoutingModule,
            angularx_social_login__WEBPACK_IMPORTED_MODULE_4__["SocialLoginModule"]
        ],
        exports: [_social_login_component__WEBPACK_IMPORTED_MODULE_3__["SocialLoginComponent"]],
        providers: [
            {
                provide: angularx_social_login__WEBPACK_IMPORTED_MODULE_4__["AuthServiceConfig"],
                useFactory: provideConfig
            }
        ],
        bootstrap: [_social_login_component__WEBPACK_IMPORTED_MODULE_3__["SocialLoginComponent"]]
    })
], SocialLogModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    apiKey: 'AIzaSyBBYhzC0ojSvvoJFgy3MB0bddjtOtj5Rp0',
    fbDbUrl: 'https://oder-e3ae3.firebaseio.com'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\_web\_proj\oder24\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map