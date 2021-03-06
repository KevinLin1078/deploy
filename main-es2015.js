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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-dish/add-dish.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-dish/add-dish.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 style='margin-top: -80px; margin-left: 470px;'><b>{{kitchen_name}}</b></h2>\n      \n\n<div class=\"w3-section w3-padding-16\">\n   <form method=\"post\" #addDishForm='ngForm' (ngSubmit)='addDish(addDishForm)' novalidate=\"\" enctype=\"multipart/form-data\">\n      <input type=\"hidden\" name=\"csrfmiddlewaretoken\" value=\"tMkKUklienDKnKe0aOg4kiKALzUt6YwNQIG2abOcxf5CVtK3TxQAwWDyLOuPUZnu\">\n      <table stlye=\"border: 3px solid black;\">\n         <tbody>\n            <tr class='stick'><th><label for=\"id_dish_name\">Dish name:</label></th><td><input ngModel required type=\"text\" name=\"dish_name\" maxlength=\"50\" required=\"\" id=\"id_dish_name\"></td></tr> &nbsp; &nbsp;\n            <tr class='stick'><th><label for=\"id_price\">Price:</label></th><td><input ngModel required type=\"number\" name=\"price\" step=\"0.01\" required=\"\" id=\"id_price\"></td></tr> &nbsp; &nbsp;\n            <tr class='stick'><th><label for=\"id_is_vegan\"> <input type=\"checkbox\" (change)='vegan_let()' name=\"is_vegan\" id=\"id_is_vegan\"> Is vegan:</label></th><td></td></tr> &nbsp; &nbsp;\n            <tr class='stick'><input type=\"submit\" class=\"button\" value=\"Add Dish\">  </tr>\n         </tbody>\n      </table>\n   \n   </form>\n</div>\n\n\n<div class=\"w3-main w3-content w3-padding\" style=\"max-width:1200px;margin-top:-50px\">\n\n   <div class=\"w3-row-padding w3-padding-16 w3-center\" id=\"food\">\n\n     \n     <p></p>\n\n     <table style=\"width:100%\">\n         <tr>\n           <th>Dish</th>\n           <th>Price</th>\n           <th>Vegan</th>\n           <th></th>\n         </tr>\n         \n            <tr *ngFor='let dish of dishes'>\n               <td class='td'> <b style=\"font-size: 18px;\"> {{ dish.dish_name }} </b> </td>\n               <td ><b  style=\"font-size: 18px;\"> ${{ dish.price }} </b></td>\n               <td >{{ dish.is_vegan }}</td>\n               <td></td>\n            </tr>\n         \n         \n       </table>\n\n     \n   </div>\n \n </div>\n\n\n\n<style>\n\n   tr.stick{\n      display: inline-block;\n   }\n</style>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-kitchen/add-kitchen.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-kitchen/add-kitchen.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n\n\n <form method=\"post\"  enctype=\"multipart/form-data\" #kitchenForm='ngForm'  (ngSubmit)='add_kitchen(kitchenForm)'>\n   <input type=\"hidden\" name=\"csrfmiddlewaretoken\" value=\"9nPGXaCtv9Zel49svIftxkfaEL4Uu1Ho6Ni5jTG1VsteGpSW83uvRHs2TKM0FtkT\">\n   <table stlye=\"border: 3px solid black;\">\n      <tbody>\n         <tr>\n            <th><label for=\"id_kitchen_name\">Kitchen name:</label></th>\n            <td><input ngModel type=\"text\" name=\"kitchen_name\" maxlength=\"50\" required id=\"id_kitchen_name\"></td>\n         </tr>\n         <tr>\n            <th><label for=\"id_image\">Image:</label></th>\n            <td><input ngModel (change)='saveImage($event.target.files)' type=\"file\" name=\"image\" accept=\"image/*\" required id=\"id_image\"></td>\n         </tr>\n   </tbody></table>\n   <input type=\"submit\" class=\"button\">  \n </form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<!-- <input type='text' appCustom />  -->\n\n<nav class=\"w3-sidebar w3-collapse w3-white w3-animate-left\" style=\"z-index:3;width:300px;\" id=\"mySidebar\"><br>\n  <div class=\"w3-container\">\n    <a href=\"#\" onclick=\"w3_close()\" class=\"w3-hide-large w3-right w3-jumbo w3-padding w3-hover-grey\" title=\"close menu\">\n      <i class=\"fa fa-remove\"></i>\n    </a>\n    \n    <h4 *ngIf='LoginService.login'><b>Hey {{LoginService.username}}! </b></h4>\n    \n  </div>\n  <div class=\"w3-bar-block\">\n   \n  \n    \n   <a *ngIf='!LoginService.login' routerLink='/signup'  class=\"w3-bar-item w3-button w3-padding w3-text-teal\"><i class=\"fa fa-user fa-fw w3-margin-right\"></i> Signup </a>&nbsp;&nbsp; \n   \n   <a *ngIf='LoginService.login' (click)=\"LoginService.logout_user()\"  class=\"w3-bar-item w3-button w3-padding w3-text-teal\"><i class=\"fa fa-user fa-fw w3-margin-right\"></i> Logout </a>&nbsp;&nbsp; \n\n   <a (click)=\"home()\" class=\"w3-bar-item w3-button w3-padding w3-text-teal\"><i class=\"fa fa-th-large fa-fw w3-margin-right\"></i>Home</a> \n   <a (click)='cart_url()' onclick=\"w3_close()\" class=\"w3-bar-item w3-button w3-padding\"><i class=\"fa fa-user fa-fw w3-margin-right\"></i>My Cart</a> \n\n\n   <br *ngIf='!LoginService.login'>\n   <br *ngIf='!LoginService.login'>    \n   \n   <app-login *ngIf='!LoginService.login'  (login_state_changed)='set_login_true($event)' (provider_state_changed)='set_provider_true($event)' (username_changed)='set_username($event)'></app-login>\n \n   <a *ngIf='LoginService.provider'  routerLink = '/myKitchen' class=\"w3-bar-item w3-button w3-padding\" ><i class=\"fa fa-th-large fa-fw w3-margin-right\"></i> My Kitchen </a>\n   <a *ngIf='LoginService.provider' (click)='addKitchenForm()' class=\"w3-bar-item w3-button w3-padding\" ><i class=\"fa fa-th-large fa-fw w3-margin-right\"></i> Add Kitchen </a> \n   <a *ngIf='LoginService.login' routerLink = '/orders' class=\"w3-bar-item w3-button w3-padding \"><i class=\"fa fa-user fa-fw w3-margin-right\"></i>  Orders </a> &nbsp;&nbsp;\n    </div>\n</nav>\n\n<div class=\"w3-main\" style=\"margin-left:300px\">\n\n  <!-- Header -->\n  <header id=\"portfolio\">\n    \n    <span class=\"w3-button w3-hide-large w3-xxlarge w3-hover-text-grey\" onclick=\"w3_open()\"><i class=\"fa fa-bars\"></i></span>\n    <div class=\"w3-container\">\n    \n    \n    \n    <div class=\"w3-section w3-bottombar w3-padding-16\">\n      <span class=\"w3-margin-right\">Filter:</span> \n      <button (click)=\"home()\" class=\"w3-button w3-green\">Home</button>&nbsp;\n      <button *ngIf='LoginService.provider'  routerLink = '/myKitchen' class=\"w3-button w3-green\">My Kitchen</button>&nbsp;\n      <button (click)='cart_url()' class=\"w3-button w3-green w3-hide-small\"><i></i>Cart</button>&nbsp;\n      <button *ngIf='LoginService.login' routerLink = '/orders' class=\"w3-button w3-green w3-hide-small\"><i class=\"fa\"></i>Orders</button>\n    </div>\n    </div>\n  </header>\n   \n  <router-outlet></router-outlet>\n  <router-outlet name='simpleOut'></router-outlet>\n  \n  \n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 style='margin-top: -80px; margin-left: 470px;'><b>Cart</b></h2>\n\n<div class=\"w3-row-padding w3-padding-16 w3-center\" id=\"food\">\n  <p  *ngIf='cart_length == 0'> <strong> Cart is Empty  </strong>  </p> \n  <table  *ngIf='cart_length > 0' style=\"width:100%\">\n       <tr>\n         <th>Dish</th>\n         <th>Price</th>\n         <th>From</th>\n         <th></th>\n       </tr>\n       \n          <tr *ngFor='let item of cart'>\n            <td class='td'>{{ item.dish_name }}</td>\n            <td>${{ item.price }}</td>\n            <td>{{ item.kitchen_name }}</td>\n          <td><a  (click)='removeFromCart($event, item)' id='{{ item.id }}'  class='button'>Remove</a></td> \n          </tr>\n\n          \n     </table>\n     \n    <button *ngIf='total > 0' (click)='purchase()' class='purchaseButton' id=''> Purchase </button>\n     <p  *ngIf='cart_length > 0 '> <strong> Total: $ {{total}}  </strong>  </p>\n     \n\n </div>\n\n<style>\n  .kitchen{\n    width: 300px;\n    height: 300px;\n    display: inline-block;\n  }\n  td.td{\n    border:1px solid green; \n    border-radius: 5px;\n  }\n  td.td:hover{\n    background-color: lightskyblue;\n  }\n  button, .button {\n    background-color: #4CAF50; /* Green */\n    border: none;\n    color: white;\n    padding: 6px 6px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n  }\n  button:hover, .button:hover{\n    background-color: darkcyan;\n  } \n\n</style>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<form #loginForm='ngForm'  (ngSubmit)='login(loginForm)'   method=\"post\" novalidate=\"\" enctype=\"multipart/form-data\">\n   <input type=\"hidden\" name=\"csrfmiddlewaretoken\" value=\"IIM06dlmDVyqyipx9H4aBjn5xNtKB6o3a18XyT3W87Df3InbkFddgr5Z4jYY5Y4P\">\n   <table stlye=\"border: 3px solid black;\">\n      <tbody>\n         <tr><th><label for=\"id_username\">Username:</label></th><td>\n            <input ngModel required type=\"text\" name=\"username\" maxlength=\"100\" required=\"\" id=\"id_username\">\n         </td></tr>\n         <tr><th><label for=\"id_password\">Password:</label></th><td>\n            <input ngModel required type=\"password\" name=\"password\"  maxlength=\"32\" required=\"\" id=\"id_password\">\n         </td></tr>\n      </tbody>\n   </table>\n   \n   \n   <input type=\"submit\" class=\"button\" value=\"Login\" > \n\n </form>\n\n\n ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 style='position: fixed;margin-top: -80px; margin-left: 470px;' [@MenuComponent]='currentState'><b>Added to Cart</b></h2>\n<!-- <button (click)='changeState()'>Hit me</button> -->\n    <!-- First Photo Grid-->\n  <div class=\"w3-row-padding w3-padding-16 w3-center\" id=\"food\">\n\n\n      <table style=\"width:100%\">\n          <tr>\n            <th>Dish</th>\n            <th>Price</th>\n            <th>Vegan</th>\n            <th >Add to cart</th>\n          </tr>\n\n          <tr *ngFor='let dish of dishes'>\n              <td class='td'>{{ dish.dish_name }}</td>\n              <td >${{ dish.price }}</td>\n              <td >{{ dish.is_vegan }}</td>\n              <td> <button *ngIf='this.LoginService.login' (click)='addToCart(dish)' class='addToCart' id='{{ dish.id }}' > Add To Cart</button> </td>\n            </tr>\n\n          \n        </table>\n\n      \n    </div>\n \n    \n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/order/order.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/order/order.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<h2 style='margin-top: -80px; margin-left: 470px;'><b>Orders</b></h2>\n\n<div class=\"w3-main w3-content w3-padding\" style=\"max-width:1200px;margin-top:-10px\">\n  <div class=\"w3-row-padding w3-padding-16 w3-center\" id=\"food\">\n    <p></p>\n    <table style=\"width:100%\">\n        <tr>\n          <th>Order ID</th>\n          <th>Price</th>\n        </tr>\n        <tr *ngFor=\"let order of orders\">\n          <td class='td' (click)='goDetail(order.id)'>  {{ order.id }}</td>\n          <td>${{ order.price }}</td>\n        </tr>\n      </table>\n\n  </div>\n</div>\n\n\n\n<style>\n  .kitchen{\n    width: 300px;\n    height: 300px;\n    display: inline-block;\n  }\n  td.td{\n    border:1px solid green; \n    border-radius: 5px;\n  }\n  td.td:hover{\n    background-color: lightskyblue;\n  }\n  button, .button {\n    background-color: #4CAF50; /* Green */\n    border: none;\n    color: white;\n    padding: 6px 6px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n  }\n  button:hover, .button:hover{\n    background-color: darkcyan;\n  } \n  td{\n        font-size: 20px;\n    }\n</style>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/orderdetail/orderdetail.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/orderdetail/orderdetail.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<h2 style='margin-top: -80px; margin-left: 470px;'><b>{{name }} {{order_id}}</b></h2>\n\n<div class=\"w3-main w3-content w3-padding\" style=\"max-width:1200px;margin-top:-10px\">\n    <div class=\"w3-row-padding w3-padding-16 w3-center\" id=\"food\">\n      <p></p>\n\n        <table style=\"width:100%\">\n            <tr>\n                <th>Dish</th>\n                <th>Price</th>\n                <th>From</th>\n                <th></th>\n            </tr>\n\n            <tr></tr>\n            <tr></tr>\n            \n\n            <tr *ngFor=\"let ord of thisOrder\">\n                <td class='td'>{{ ord.dish_name }}</td>\n                <td>${{ ord.price }}</td>\n                <td>{{ ord.kitchen_name }}</td>\n                <td *ngIf=\"purchased != True\">\n                    <a id='{{ item.id }}' href='#food' class='button'>Remove</a>\n                </td> \n            </tr>\n            <br>\n            <tr >\n                <td ></td>\n                <td><b> Total: ${{price}} </b></td>\n                <td></td>\n                <td></td> \n            </tr>\n        </table>\n        \n    </div>\n    \n</div>\n\n<style>\n\n    td{\n        font-size: 18px;\n    }\n\n</style>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/provider-kitchen/provider-kitchen.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/provider-kitchen/provider-kitchen.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<h2 style='margin-top: -80px; margin-left: 470px;'><b>My Kitchens</b></h2>\n \n <div class=\"w3-row-padding\"   >\n   <div (click)='addDishView(kitchen)' *ngFor='let kitchen of kitchens' id='{{kitchen.id}}' class=\"kitchen\">\n      <h3><strong>{{ kitchen.kitchen_name }}</strong> </h3>\n      <img src='{{kitchen.image_url}}' alt=\"Norway\" style=\"width:100%\" class=\"w3-hover-opacity\">\n      <p>Owner: {{kitchen.username }}</p>        \n   </div>\n\n </div>\n\n\n <style>\n   .kitchen, img{\n      width: 300px;\n      height: 250px;\n      padding: 5px 5px 5px 5px;\n      display: inline-block;\n   }\n   img:hover{\n      border: 1px solid black;\n   }\n</style>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/route-param/route-param.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/route-param/route-param.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>route-param works!</p>\n\n<h3>  You selected {{department_id }}</h3>\n\n\n\n\n<button (click)='goPrevious()' > Previous</button>\n<p></p>\n<button (click)='goNext()' > Next </button>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/route1/route1.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/route1/route1.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n\n<!-- <input [disabled]='isDisabled' ngModel='keivn' > <span> {{keivn}}</span> -->\n<!-- <input name='username' [(ngModel)]=\"username\" #ctrl=\"ngModel\" required> {{ username | json }}  -->\n\n<!-- *ngIf='login; then loginBlock ;else loginElseBlock' -->\n<!-- *ngIf='login; else loginElseBlock' -->\n<!-- <h2 [ngClass]='red' > Your are logged in</h2> -->\n\n\n<ng-template #loginElseBlock >\n   <h2> You are not logged in</h2>\n</ng-template>\n\n<h2 style='margin-top: -80px; margin-left: 470px;'><b>Home</b></h2>\n\n<div class=\"w3-row-padding\"   >\n   <div *ngFor='let kitchen of kitchens' id='{{kitchen.id}}' class=\"kitchen\">\n      <h3><strong>{{ kitchen.kitchen_name }}</strong> </h3>\n      <img (click)='goMenu(kitchen.id)' src='{{kitchen.image_url}}' alt=\"Norway\" style=\"width:100%\" class=\"w3-hover-opacity\">\n      <p> Owner: {{kitchen.username }}</p>        \n   </div>\n\n </div>\n\n\n\n<style>\n   .kitchen, img{\n      width: 300px;\n      height: 250px;\n      padding: 5px 5px 5px 5px;\n      display: inline-block;\n   }\n   img:hover{\n      border: 1px solid black;\n   }\n</style>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/route2/route2.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/route2/route2.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>route2 works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/sign-up.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/sign-up.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- First Photo Grid-->\n<div class=\"w3-row-padding\">\n\n    <form #signupForm (ngSubmit)='createNewUser()' method=\"post\" novalidate=\"\" enctype=\"multipart/form-data\">\n      <input type=\"hidden\" name=\"csrfmiddlewaretoken\" value=\"7UDcnqrxpnhYK2XudRitDgiPgpFOHM2CBnSOxroDBRvwWvIUFg7oya6vzZG9q0fU\">\n      <table stlye=\"border: 3px solid black;\">\n         <tbody>\n           <tr><th><label for=\"id_username\">Username:</label></th><td><input type=\"text\" name=\"username\" maxlength=\"30\" required=\"\" id=\"id_username\" [(ngModel)]=\"NewUser.username\"></td></tr>\n<tr><th><label for=\"id_first_name\">First name:</label></th><td><input type=\"text\" name=\"first_name\" maxlength=\"20\" required=\"\" id=\"id_first_name\" [(ngModel)]=\"NewUser.first_name\"></td></tr>\n<tr><th><label for=\"id_last_name\">Last name:</label></th><td><input type=\"text\" name=\"last_name\" maxlength=\"20\" required=\"\" id=\"id_last_name\" [(ngModel)]=\"NewUser.last_name\"></td></tr>\n<tr><th><label for=\"id_password1\">Password:</label></th><td><input type=\"password\" name=\"password1\" maxlength=\"10\" required=\"\" id=\"id_password1\" [(ngModel)]=\"NewUser.password1\"></td></tr>\n<tr><th><label for=\"id_password2\">Confirm Password:</label></th><td><input type=\"password\" name=\"password2\" maxlength=\"10\" required=\"\" id=\"id_password2\" [(ngModel)]=\"NewUser.password2\"></td></tr>\n<tr><th><label for=\"id_question_1\">Question 1:</label></th><td><input type=\"text\" name=\"question_1\" value=\"What is your favorite color?\" maxlength=\"100\" style=\"width:250px;\" class=\"w3-bar-item w3-button\" readonly=\"\" required=\"\" id=\"id_question_1\" ></td></tr>\n<tr><th><label for=\"id_answer_1\">Answer 1:</label></th><td><input type=\"text\" name=\"answer_1\" required=\"\" id=\"id_answer_1\" [(ngModel)]=\"NewUser.answer_1\"></td></tr>\n<tr><th><label for=\"id_question_2\">Question 2:</label></th><td><input type=\"text\" name=\"question_2\" value=\"What is your favorite place to live?\" maxlength=\"100\" style=\"width:300px;\" class=\"w3-bar-item w3-button\" readonly=\"\" required=\"\" id=\"id_question_2\" ></td></tr>\n<tr><th><label for=\"id_answer_2\">Answer 2:</label></th><td><input type=\"text\" name=\"answer_2\" required=\"\" id=\"id_answer_2\" [(ngModel)]=\"NewUser.answer_2\"></td></tr>\n<tr><th><label for=\"id_is_provider\">Become a seller:</label></th><td><input type=\"checkbox\" name=\"is_provider\" id=\"id_is_provider\" [(ngModel)]=\"NewUser.is_provider\"></td></tr>\n      </tbody></table>\n      <input type=\"submit\"  class=\"button\" >  \n    </form>\n  \n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
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
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
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


/***/ }),

/***/ "./src/app/add-dish/add-dish.component.css":
/*!*************************************************!*\
  !*** ./src/app/add-dish/add-dish.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1kaXNoL2FkZC1kaXNoLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/add-dish/add-dish.component.ts":
/*!************************************************!*\
  !*** ./src/app/add-dish/add-dish.component.ts ***!
  \************************************************/
/*! exports provided: AddDishComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDishComponent", function() { return AddDishComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/menu.service */ "./src/app/service/menu.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let AddDishComponent = class AddDishComponent {
    constructor(MenuService, ActivatedRoute) {
        this.MenuService = MenuService;
        this.ActivatedRoute = ActivatedRoute;
        this.is_vegan = false;
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.kitchen_id = parseInt(this.ActivatedRoute.snapshot.paramMap.get('id'));
            let response = yield this.MenuService.getProviderMenu(this.kitchen_id);
            response.subscribe((resp) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                this.dishes = yield resp['dishes'];
                this.kitchen_name = yield resp['kitchen_name'];
            }), (err) => {
                alert('Error in Kitchen View');
            });
        });
    }
    addDish(form) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const formData = new FormData();
            formData.append("CSRF_TOKEN", '{{ csrf_token() }}');
            formData.append("dish_name", form.value.dish_name);
            formData.append("price", form.value.price);
            formData.append('is_vegan', this.is_vegan.toString());
            let response = yield this.MenuService.addDishToMenu(this.kitchen_id, formData);
            response.subscribe((resp) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                this.ngOnInit();
            }));
        });
    }
    vegan_let() {
        this.is_vegan = !this.is_vegan;
    }
};
AddDishComponent.ctorParameters = () => [
    { type: _service_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
AddDishComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-dish',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-dish.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-dish/add-dish.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-dish.component.css */ "./src/app/add-dish/add-dish.component.css")).default]
    })
], AddDishComponent);



/***/ }),

/***/ "./src/app/add-kitchen/add-kitchen.component.css":
/*!*******************************************************!*\
  !*** ./src/app/add-kitchen/add-kitchen.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1raXRjaGVuL2FkZC1raXRjaGVuLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/add-kitchen/add-kitchen.component.ts":
/*!******************************************************!*\
  !*** ./src/app/add-kitchen/add-kitchen.component.ts ***!
  \******************************************************/
/*! exports provided: AddKitchenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddKitchenComponent", function() { return AddKitchenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_kitchen_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/kitchen.service */ "./src/app/service/kitchen.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let AddKitchenComponent = class AddKitchenComponent {
    constructor(KitchenService, Router) {
        this.KitchenService = KitchenService;
        this.Router = Router;
    }
    ngOnInit() {
    }
    add_kitchen(form) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const formData = new FormData();
            yield this.delay(300);
            console.log(form.value);
            formData.append("CSRF_TOKEN", '{{ csrf_token() }}');
            yield formData.append("kitchen_name", form.value.kitchen_name);
            formData.append("image", this.imageFile);
            let repsonse = yield this.KitchenService.addKitchen(formData);
            repsonse.subscribe((resp) => {
                console.log(resp);
                this.Router.navigate(['myKitchen']);
            });
        });
    }
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    saveImage(files) {
        this.imageFile = files.item(0);
    }
};
AddKitchenComponent.ctorParameters = () => [
    { type: _service_kitchen_service__WEBPACK_IMPORTED_MODULE_2__["KitchenService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AddKitchenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-kitchen',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-kitchen.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-kitchen/add-kitchen.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-kitchen.component.css */ "./src/app/add-kitchen/add-kitchen.component.css")).default]
    })
], AddKitchenComponent);



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
/* harmony import */ var _route1_route1_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./route1/route1.component */ "./src/app/route1/route1.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _order_order_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order/order.component */ "./src/app/order/order.component.ts");
/* harmony import */ var _orderdetail_orderdetail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./orderdetail/orderdetail.component */ "./src/app/orderdetail/orderdetail.component.ts");
/* harmony import */ var _provider_kitchen_provider_kitchen_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./provider-kitchen/provider-kitchen.component */ "./src/app/provider-kitchen/provider-kitchen.component.ts");
/* harmony import */ var _add_kitchen_add_kitchen_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-kitchen/add-kitchen.component */ "./src/app/add-kitchen/add-kitchen.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _add_dish_add_dish_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./add-dish/add-dish.component */ "./src/app/add-dish/add-dish.component.ts");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/sign-up/sign-up.component.ts");



//My own import 









const routes = [
    { path: '', component: _route1_route1_component__WEBPACK_IMPORTED_MODULE_3__["Route1Component"] },
    { path: 'login', component: _route1_route1_component__WEBPACK_IMPORTED_MODULE_3__["Route1Component"] },
    { path: 'shoppingCart', component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_4__["CartComponent"] },
    { path: 'orders', component: _order_order_component__WEBPACK_IMPORTED_MODULE_5__["OrderComponent"] },
    { path: 'orderdetail/:id', component: _orderdetail_orderdetail_component__WEBPACK_IMPORTED_MODULE_6__["OrderdetailComponent"] },
    { path: 'myKitchen', component: _provider_kitchen_provider_kitchen_component__WEBPACK_IMPORTED_MODULE_7__["ProviderKitchenComponent"] },
    { path: 'addKitchen', component: _add_kitchen_add_kitchen_component__WEBPACK_IMPORTED_MODULE_8__["AddKitchenComponent"] },
    { path: 'view/menu/kitchen/:id', component: _menu_menu_component__WEBPACK_IMPORTED_MODULE_9__["MenuComponent"] },
    { path: 'menu/kitchen/:id', component: _add_dish_add_dish_component__WEBPACK_IMPORTED_MODULE_10__["AddDishComponent"] },
    { path: 'signup', component: _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_11__["SignUpComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);

// ng add @angular/material


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_service1_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/service1.service */ "./src/app/service/service1.service.ts");





// import {  }
let AppComponent = class AppComponent {
    constructor(HttpClient, Router, LoginService) {
        this.HttpClient = HttpClient;
        this.Router = Router;
        this.LoginService = LoginService;
        this.login = false;
        this.username = null;
    }
    ngOnInit() {
        this.getFeedBack('login') == false ? this.LoginService.login = false : this.LoginService.login = true;
        this.getFeedBack('provider') == false ? this.LoginService.provider = false : this.LoginService.provider = true;
        this.LoginService.username = localStorage.getItem('username');
        if (this.LoginService.login == false) {
            this.home();
        }
    }
    getFeedBack(value) {
        if (localStorage.getItem(value) === null || localStorage.getItem(value).toString() === 'false' || localStorage.getItem(value) == undefined) {
            return false;
        }
        return true;
    }
    cart_url() {
        this.Router.navigate(['shoppingCart']);
    }
    home() {
        this.Router.navigate(['']);
    }
    addKitchenForm() {
        this.Router.navigate(['addKitchen']);
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _service_service1_service__WEBPACK_IMPORTED_MODULE_4__["Service1Service"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _route1_route1_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./route1/route1.component */ "./src/app/route1/route1.component.ts");
/* harmony import */ var _route2_route2_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./route2/route2.component */ "./src/app/route2/route2.component.ts");
/* harmony import */ var _route_param_route_param_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./route-param/route-param.component */ "./src/app/route-param/route-param.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _custom_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./custom.directive */ "./src/app/custom.directive.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _pipe1_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pipe1.pipe */ "./src/app/pipe1.pipe.ts");
/* harmony import */ var _service_service1_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./service/service1.service */ "./src/app/service/service1.service.ts");
/* harmony import */ var _service_cart_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./service/cart.service */ "./src/app/service/cart.service.ts");
/* harmony import */ var _service_kitchen_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./service/kitchen.service */ "./src/app/service/kitchen.service.ts");
/* harmony import */ var _service_menu_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./service/menu.service */ "./src/app/service/menu.service.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _order_order_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./order/order.component */ "./src/app/order/order.component.ts");
/* harmony import */ var _orderdetail_orderdetail_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./orderdetail/orderdetail.component */ "./src/app/orderdetail/orderdetail.component.ts");
/* harmony import */ var _add_dish_add_dish_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./add-dish/add-dish.component */ "./src/app/add-dish/add-dish.component.ts");
/* harmony import */ var _add_kitchen_add_kitchen_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./add-kitchen/add-kitchen.component */ "./src/app/add-kitchen/add-kitchen.component.ts");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/sign-up/sign-up.component.ts");
/* harmony import */ var _provider_kitchen_provider_kitchen_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./provider-kitchen/provider-kitchen.component */ "./src/app/provider-kitchen/provider-kitchen.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");














// import { FormBuilder, FormGroup } from '@angular/forms';




//Component








// import { CookieService } from 'ngx-cookie-service'
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _route1_route1_component__WEBPACK_IMPORTED_MODULE_5__["Route1Component"],
            _route2_route2_component__WEBPACK_IMPORTED_MODULE_6__["Route2Component"],
            _route_param_route_param_component__WEBPACK_IMPORTED_MODULE_7__["RouteParamComponent"],
            _custom_directive__WEBPACK_IMPORTED_MODULE_11__["CustomDirective"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
            _pipe1_pipe__WEBPACK_IMPORTED_MODULE_13__["Pipe1Pipe"],
            _cart_cart_component__WEBPACK_IMPORTED_MODULE_18__["CartComponent"],
            _order_order_component__WEBPACK_IMPORTED_MODULE_19__["OrderComponent"],
            _orderdetail_orderdetail_component__WEBPACK_IMPORTED_MODULE_20__["OrderdetailComponent"],
            _add_dish_add_dish_component__WEBPACK_IMPORTED_MODULE_21__["AddDishComponent"],
            _add_kitchen_add_kitchen_component__WEBPACK_IMPORTED_MODULE_22__["AddKitchenComponent"],
            _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_23__["SignUpComponent"],
            _provider_kitchen_provider_kitchen_component__WEBPACK_IMPORTED_MODULE_24__["ProviderKitchenComponent"],
            _menu_menu_component__WEBPACK_IMPORTED_MODULE_25__["MenuComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"]
        ],
        providers: [_service_service1_service__WEBPACK_IMPORTED_MODULE_14__["Service1Service"], _service_cart_service__WEBPACK_IMPORTED_MODULE_15__["CartService"], _service_kitchen_service__WEBPACK_IMPORTED_MODULE_16__["KitchenService"], _service_menu_service__WEBPACK_IMPORTED_MODULE_17__["MenuService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/cart/cart.component.css":
/*!*****************************************!*\
  !*** ./src/app/cart/cart.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcnQvY2FydC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/cart.service */ "./src/app/service/cart.service.ts");
/* harmony import */ var _service_service1_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/service1.service */ "./src/app/service/service1.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let CartComponent = class CartComponent {
    constructor(CartService, LoginService, Router, el) {
        this.CartService = CartService;
        this.LoginService = LoginService;
        this.Router = Router;
        this.el = el;
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.LoginService.login == false) {
                this.LoginService.go_home();
            }
            else {
                let response = yield this.CartService.get_cart_request();
                response.subscribe((resp) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    resp['status'] == 'ok' ? this.cart = yield resp['cart'] : alert("need to login");
                    this.in_cart = resp['in_cart'];
                    this.cart_length = resp['cart_length'];
                    this.total = resp['total'];
                }));
            }
        });
    }
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    removeFromCart(event, item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.poss(event);
            let response = yield this.CartService.removeFromCart(item);
            response.subscribe((response) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                console.log(response);
                response['status'] == 'ok' ? this.total = yield response['total'] : alert('Django RemoveCart Error');
            }), (error) => {
                alert('Removing Item Failed');
            });
        });
    }
    purchase() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let response = yield this.CartService.purchase();
            response.subscribe((response) => {
                response['status'] == 'ok' ? this.Router.navigate(['orders']) : alert('Django Purchase Error');
            }, (error) => {
                alert('Purchasing Item Failed');
            });
        });
    }
    poss(event) {
        console.log(event.target.parentNode);
        event.target.parentNode.parentNode.remove();
    }
};
CartComponent.ctorParameters = () => [
    { type: _service_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"] },
    { type: _service_service1_service__WEBPACK_IMPORTED_MODULE_3__["Service1Service"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cart',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cart.component.css */ "./src/app/cart/cart.component.css")).default]
    })
], CartComponent);



/***/ }),

/***/ "./src/app/custom.directive.ts":
/*!*************************************!*\
  !*** ./src/app/custom.directive.ts ***!
  \*************************************/
/*! exports provided: CustomDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomDirective", function() { return CustomDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CustomDirective = class CustomDirective {
    constructor() { }
    onInput(event) {
        console.log(event.target.value);
    }
};
CustomDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: 'input[appCustom]',
        host: {
            '(input)': 'onInput($event)',
        }
    })
], CustomDirective);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _service_service1_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/service1.service */ "./src/app/service/service1.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let LoginComponent = class LoginComponent {
    //@ViewChild('loginForm') public loginForm;
    constructor(HttpClient, LoginService, ActivatedRoute, Router) {
        this.HttpClient = HttpClient;
        this.LoginService = LoginService;
        this.ActivatedRoute = ActivatedRoute;
        this.Router = Router;
        this.login_state_changed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.provider_state_changed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.username_changed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.login_url = 'http://18.222.73.77/login/';
    }
    ngOnInit() {
    }
    resetStorage(login, username, provider) {
        this.LoginService.login = login;
        this.LoginService.username = username;
        this.LoginService.provider = provider;
        localStorage.setItem('login', login);
        localStorage.setItem('username', username);
        localStorage.setItem('provider', provider);
    }
    login(form) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const formData = new FormData();
            formData.append("CSRF_TOKEN", '{{ csrf_token() }}');
            formData.append("username", form.value.username);
            formData.append("password", form.value.password);
            let response = yield this.LoginService.login_user(formData);
            yield response.subscribe((response) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                if (response['status'] == 'ok') {
                    yield this.resetStorage(true, response['username'], response['provider']);
                    console.log('Login Success');
                    console.log(response);
                }
                else {
                    yield this.resetStorage(false, null, null);
                    console.log('Login Fail');
                }
            }));
            function delay(ms) {
                return new Promise(resolve => setTimeout(resolve, ms));
            }
            yield delay(100);
            // console.log("from login component", this.LoginService.allme())
        });
    }
    goto() {
        this.Router.navigate(['login/hey'], { relativeTo: this.ActivatedRoute });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _service_service1_service__WEBPACK_IMPORTED_MODULE_3__["Service1Service"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], LoginComponent.prototype, "login_state_changed", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], LoginComponent.prototype, "provider_state_changed", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], LoginComponent.prototype, "username_changed", void 0);
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    })
], LoginComponent);

// httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
//   withCredentials: true, 
//   observe: 'response' as 'response' };  


/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/menu.service */ "./src/app/service/menu.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_service1_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/service1.service */ "./src/app/service/service1.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");






let MenuComponent = class MenuComponent {
    constructor(MenuService, ActivatedRoute, LoginService) {
        this.MenuService = MenuService;
        this.ActivatedRoute = ActivatedRoute;
        this.LoginService = LoginService;
        this.currentState = 'initial';
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.kitchen_id = parseInt(this.ActivatedRoute.snapshot.paramMap.get('id'));
            let response = yield this.MenuService.getBuyerMenu(this.kitchen_id);
            response.subscribe((resp) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                this.dishes = yield resp['dishes'];
                this.kitchen_name = yield resp['kitchen_name'];
            }), (err) => {
                alert('Error in Kitchen View');
            });
        });
    }
    addToCart(dish) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const formData = new FormData();
            formData.append("CSRF_TOKEN", '{{ csrf_token() }}');
            formData.append("dish_id", dish.id);
            this.currentState = 'final';
            let response = yield this.MenuService.addToCart(formData);
            response.subscribe((resp) => {
                this.currentState = 'initial';
            });
        });
    }
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
};
MenuComponent.ctorParameters = () => [
    { type: _service_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _service_service1_service__WEBPACK_IMPORTED_MODULE_4__["Service1Service"] }
];
MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('MenuComponent', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('initial', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
                    opacity: 0,
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('final', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
                    opacity: 1,
                    backgroundColor: 'green',
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('initial=>final', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('200ms')),
            ]),
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")).default]
    })
], MenuComponent);



/***/ }),

/***/ "./src/app/order/order.component.css":
/*!*******************************************!*\
  !*** ./src/app/order/order.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVyL29yZGVyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/order/order.component.ts":
/*!******************************************!*\
  !*** ./src/app/order/order.component.ts ***!
  \******************************************/
/*! exports provided: OrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderComponent", function() { return OrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_orders_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/orders.service */ "./src/app/service/orders.service.ts");
/* harmony import */ var _service_service1_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/service1.service */ "./src/app/service/service1.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let OrderComponent = class OrderComponent {
    constructor(OrdersService, LoginService, router) {
        this.OrdersService = OrdersService;
        this.LoginService = LoginService;
        this.router = router;
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.LoginService.login == false) {
                this.LoginService.go_home();
            }
            else {
                let response = yield this.OrdersService.get_orders();
                response.subscribe((response) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    console.log(response['orders']);
                    this.orders = yield response['orders'];
                }));
            }
        });
    }
    goDetail(id) {
        console.log("I am in goDetail");
        this.router.navigate(['/orderdetail/' + id]);
    }
};
OrderComponent.ctorParameters = () => [
    { type: _service_orders_service__WEBPACK_IMPORTED_MODULE_2__["OrdersService"] },
    { type: _service_service1_service__WEBPACK_IMPORTED_MODULE_3__["Service1Service"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
OrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./order.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/order/order.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./order.component.css */ "./src/app/order/order.component.css")).default]
    })
], OrderComponent);



/***/ }),

/***/ "./src/app/orderdetail/orderdetail.component.css":
/*!*******************************************************!*\
  !*** ./src/app/orderdetail/orderdetail.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVyZGV0YWlsL29yZGVyZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/orderdetail/orderdetail.component.ts":
/*!******************************************************!*\
  !*** ./src/app/orderdetail/orderdetail.component.ts ***!
  \******************************************************/
/*! exports provided: OrderdetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderdetailComponent", function() { return OrderdetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_orders_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/orders.service */ "./src/app/service/orders.service.ts");
/* harmony import */ var _service_service1_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/service1.service */ "./src/app/service/service1.service.ts");





let OrderdetailComponent = class OrderdetailComponent {
    constructor(_orderSvc, LoginService, router, route) {
        this._orderSvc = _orderSvc;
        this.LoginService = LoginService;
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        if (this.LoginService.login == false) {
            this.LoginService.go_home();
        }
        else {
            this.OrderID = parseInt(this.route.snapshot.paramMap.get('id'));
            this._orderSvc.getoneOrder(this.OrderID).subscribe((data) => {
                this.thisOrder = data['cart'];
                this.name = data['name'];
                this.order_id = data['order_id'];
                this.price = data['price'];
            }, (error) => this.errorMsg = error, () => console.log('the sequence completed!'));
            // console.log(this.thisOrder['cart'])
        }
    }
    goBack() {
        this.router.navigate(['/orders']);
    }
};
OrderdetailComponent.ctorParameters = () => [
    { type: _service_orders_service__WEBPACK_IMPORTED_MODULE_3__["OrdersService"] },
    { type: _service_service1_service__WEBPACK_IMPORTED_MODULE_4__["Service1Service"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
OrderdetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-orderdetail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./orderdetail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/orderdetail/orderdetail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./orderdetail.component.css */ "./src/app/orderdetail/orderdetail.component.css")).default]
    })
], OrderdetailComponent);



/***/ }),

/***/ "./src/app/pipe1.pipe.ts":
/*!*******************************!*\
  !*** ./src/app/pipe1.pipe.ts ***!
  \*******************************/
/*! exports provided: Pipe1Pipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pipe1Pipe", function() { return Pipe1Pipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Pipe1Pipe = class Pipe1Pipe {
    transform(value, ...args) {
        return 'null';
    }
};
Pipe1Pipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'pipe1'
    })
], Pipe1Pipe);



/***/ }),

/***/ "./src/app/provider-kitchen/provider-kitchen.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/provider-kitchen/provider-kitchen.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb3ZpZGVyLWtpdGNoZW4vcHJvdmlkZXIta2l0Y2hlbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/provider-kitchen/provider-kitchen.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/provider-kitchen/provider-kitchen.component.ts ***!
  \****************************************************************/
/*! exports provided: ProviderKitchenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderKitchenComponent", function() { return ProviderKitchenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_kitchen_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/kitchen.service */ "./src/app/service/kitchen.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ProviderKitchenComponent = class ProviderKitchenComponent {
    constructor(KitchenService, Router) {
        this.KitchenService = KitchenService;
        this.Router = Router;
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let response = yield this.KitchenService.getProviderKitchen();
            response.subscribe((resp) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                resp['status'] == 'ok' ? this.kitchens = yield resp['kitchens'] : alert("need to login");
            }), (error) => {
                alert('Provider kitchen view failed!');
            });
        });
    }
    addDishView(kitchen) {
        this.Router.navigate(['menu/kitchen/', kitchen.id]);
    }
};
ProviderKitchenComponent.ctorParameters = () => [
    { type: _service_kitchen_service__WEBPACK_IMPORTED_MODULE_2__["KitchenService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ProviderKitchenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-provider-kitchen',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./provider-kitchen.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/provider-kitchen/provider-kitchen.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./provider-kitchen.component.css */ "./src/app/provider-kitchen/provider-kitchen.component.css")).default]
    })
], ProviderKitchenComponent);



/***/ }),

/***/ "./src/app/route-param/route-param.component.css":
/*!*******************************************************!*\
  !*** ./src/app/route-param/route-param.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvdXRlLXBhcmFtL3JvdXRlLXBhcmFtLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/route-param/route-param.component.ts":
/*!******************************************************!*\
  !*** ./src/app/route-param/route-param.component.ts ***!
  \******************************************************/
/*! exports provided: RouteParamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteParamComponent", function() { return RouteParamComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let RouteParamComponent = class RouteParamComponent {
    constructor(ActivatedRoute, Router, HttpClient) {
        this.ActivatedRoute = ActivatedRoute;
        this.Router = Router;
        this.HttpClient = HttpClient;
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // let id = parseInt(this.ActivatedRoute.snapshot.paramMap.get('id'))
            // this.department_id = id
            this.ActivatedRoute.paramMap.subscribe(params => {
                console.log(params);
                let id = parseInt(params.get('id'));
                this.department_id = id;
            });
        });
    }
    goPrevious() {
        this.department_id = this.department_id - 1;
        this.Router.navigate(['/department', this.department_id]);
    }
    goNext() {
        this.department_id = this.department_id + 1;
        this.Router.navigate(['/department', this.department_id]);
    }
};
RouteParamComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
RouteParamComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-route-param',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./route-param.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/route-param/route-param.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./route-param.component.css */ "./src/app/route-param/route-param.component.css")).default]
    })
], RouteParamComponent);



/***/ }),

/***/ "./src/app/route1/route1.component.css":
/*!*********************************************!*\
  !*** ./src/app/route1/route1.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvdXRlMS9yb3V0ZTEuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/route1/route1.component.ts":
/*!********************************************!*\
  !*** ./src/app/route1/route1.component.ts ***!
  \********************************************/
/*! exports provided: Route1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Route1Component", function() { return Route1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let Route1Component = class Route1Component {
    constructor(router, HttpClient) {
        this.router = router;
        this.HttpClient = HttpClient;
    }
    ngOnInit() {
        this.HttpClient.get('http://3.15.178.94').subscribe(response => {
            this.kitchens = response['kitchens'];
        });
    }
    goMenu(id) {
        console.log("I am in goDetail");
        this.router.navigate(['/view/menu/kitchen/' + id]);
    }
};
Route1Component.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
Route1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-route1',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./route1.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/route1/route1.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./route1.component.css */ "./src/app/route1/route1.component.css")).default]
    })
], Route1Component);



/***/ }),

/***/ "./src/app/route2/route2.component.css":
/*!*********************************************!*\
  !*** ./src/app/route2/route2.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvdXRlMi9yb3V0ZTIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/route2/route2.component.ts":
/*!********************************************!*\
  !*** ./src/app/route2/route2.component.ts ***!
  \********************************************/
/*! exports provided: Route2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Route2Component", function() { return Route2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Route2Component = class Route2Component {
    constructor() { }
    ngOnInit() { }
};
Route2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-route2',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./route2.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/route2/route2.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./route2.component.css */ "./src/app/route2/route2.component.css")).default]
    })
], Route2Component);



/***/ }),

/***/ "./src/app/service/cart.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/cart.service.ts ***!
  \*****************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let CartService = class CartService {
    constructor(HttpClient) {
        this.HttpClient = HttpClient;
        this.cart_url = 'http://3.15.178.94/shoppingCart/';
        this.remove_cart_url = 'http://3.15.178.94/removeDish/';
        this.purchase_url = 'http://3.15.178.94/purchase/';
    }
    get getForm() {
        const formData = new FormData();
        formData.append("CSRF_TOKEN", '{{ csrf_token() }}');
        return formData;
    }
    get_cart_request() {
        return this.HttpClient.get(this.cart_url, { /*observe:'response' as 'body',*/ withCredentials: true });
    }
    removeFromCart(item) {
        return this.HttpClient.post(this.remove_cart_url + item.id.toString(), this.getForm, { /*observe:'response' as 'body',*/ withCredentials: true });
    }
    purchase() {
        return this.HttpClient.post(this.purchase_url, this.getForm, { /*observe:'response' as 'body',*/ withCredentials: true });
    }
};
CartService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CartService);



/***/ }),

/***/ "./src/app/service/kitchen.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/kitchen.service.ts ***!
  \********************************************/
/*! exports provided: KitchenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KitchenService", function() { return KitchenService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let KitchenService = class KitchenService {
    constructor(HttpClient) {
        this.HttpClient = HttpClient;
        this.provider_kitchen_url = 'http://3.15.178.94/myKitchens/';
        this.add_kitchen_url = 'http://3.15.178.94/addKitchen/';
    }
    getProviderKitchen() {
        return this.HttpClient.get(this.provider_kitchen_url, { /*observe:'response' as 'body',*/ withCredentials: true });
    }
    addKitchen(formData) {
        return this.HttpClient.post(this.add_kitchen_url, formData, { /*observe:'response' as 'body',*/ withCredentials: true });
    }
};
KitchenService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
KitchenService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], KitchenService);



/***/ }),

/***/ "./src/app/service/menu.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/menu.service.ts ***!
  \*****************************************/
/*! exports provided: MenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuService", function() { return MenuService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let MenuService = class MenuService {
    constructor(HttpClient) {
        this.HttpClient = HttpClient;
        this.menu_url = 'http://3.15.178.94/view/menu/kitchen';
        this.provider_menu_url = 'http://3.15.178.94/menu/kitchen/';
        this.addToCart_url = 'http://3.15.178.94/addToCart/';
    }
    getBuyerMenu(id) {
        return this.HttpClient.get(this.menu_url + id, { /*observe:'response' as 'body',*/ withCredentials: true });
    }
    getProviderMenu(id) {
        return this.HttpClient.get(this.provider_menu_url + id + '/', { /*observe:'response' as 'body',*/ withCredentials: true });
    }
    addDishToMenu(id, data) {
        return this.HttpClient.post(this.provider_menu_url + id + '/', data, { /*observe:'response' as 'body',*/ withCredentials: true });
    }
    addToCart(data) {
        return this.HttpClient.post(this.addToCart_url, data, { /*observe:'response' as 'body',*/ withCredentials: true });
    }
};
MenuService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
MenuService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MenuService);



/***/ }),

/***/ "./src/app/service/orders.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/orders.service.ts ***!
  \*******************************************/
/*! exports provided: OrdersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersService", function() { return OrdersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let OrdersService = class OrdersService {
    constructor(HttpClient) {
        this.HttpClient = HttpClient;
        this.orders_url = 'http://3.15.178.94/orders/';
        this.orderdetail_url = 'http://3.15.178.94/purchasedOrder/';
    }
    get_orders() {
        return this.HttpClient.get(this.orders_url, { /*observe:'response' as 'body',*/ withCredentials: true });
    }
    getoneOrder(id) {
        return this.HttpClient.get(this.orderdetail_url + id, { /*observe:'response' as 'body',*/ withCredentials: true });
    }
};
OrdersService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
OrdersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], OrdersService);



/***/ }),

/***/ "./src/app/service/service1.service.ts":
/*!*********************************************!*\
  !*** ./src/app/service/service1.service.ts ***!
  \*********************************************/
/*! exports provided: Service1Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Service1Service", function() { return Service1Service; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");






let Service1Service = class Service1Service {
    constructor(HttpClient, Router) {
        this.HttpClient = HttpClient;
        this.Router = Router;
        this.login_url = 'http://3.15.178.94/login/';
        this.logout_url = 'http://3.15.178.94/logout/';
        this.signup_url = 'http://3.15.178.94/signup/';
        this.login = false;
    }
    login_user(formData) {
        return this.HttpClient.post(this.login_url, formData, { /*observe:'response' as 'body',*/ withCredentials: true });
    }
    logout_user() {
        this.HttpClient.post(this.logout_url, {}).subscribe((response) => {
            this.logout();
        });
    }
    logout() {
        this.login = false;
        this.provider = false;
        this.username = null;
        localStorage.setItem('login', 'false');
        localStorage.setItem('username', null);
        localStorage.setItem('provider', 'false');
        this.go_home();
    }
    go_home() {
        this.Router.navigate(['']);
    }
    sign_up(data) {
        return this.HttpClient.post(this.signup_url, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    errorHandler(error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(error.message || "Server Error");
    }
};
Service1Service.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
Service1Service = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], Service1Service);

// httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
//   withCredentials: true, 
//   observe: 'response'  }; 


/***/ }),

/***/ "./src/app/sign-up/sign-up.component.css":
/*!***********************************************!*\
  !*** ./src/app/sign-up/sign-up.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ24tdXAvc2lnbi11cC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/sign-up/sign-up.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sign-up/sign-up.component.ts ***!
  \**********************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_service1_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/service1.service */ "./src/app/service/service1.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let SignUpComponent = class SignUpComponent {
    constructor(LoginService, router) {
        this.LoginService = LoginService;
        this.router = router;
        this.NewUser = {
            username: '',
            first_name: '',
            last_name: '',
            password1: '',
            password2: '',
            question_1: '',
            answer_1: '',
            question_2: '',
            answer_2: '',
            is_provider: false
        };
        this.submitted = false;
        this.errorMsg = "The two passwords does not match!";
    }
    ngOnInit() {
    }
    createNewUser() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const formData = new FormData();
            if (this.NewUser.password1 == this.NewUser.password2) {
                formData.append("CSRF_TOKEN", '{{ csrf_token() }}');
                formData.append("username", this.NewUser.username);
                formData.append("password", this.NewUser.password1);
                formData.append("first_name", this.NewUser.first_name);
                formData.append("last_name", this.NewUser.last_name);
                formData.append("question_1", this.NewUser.question_1);
                formData.append("question_2", this.NewUser.question_2);
                formData.append("answer_1", this.NewUser.answer_1);
                formData.append("answer_2", this.NewUser.answer_2);
                formData.append("is_provider", this.NewUser.is_provider.toString());
                let response = yield this.LoginService.sign_up(formData);
                response.subscribe((resp) => {
                    console.log(resp);
                    this.router.navigate(['']);
                });
            }
            else {
                alert(this.errorMsg);
            }
        });
    }
};
SignUpComponent.ctorParameters = () => [
    { type: _service_service1_service__WEBPACK_IMPORTED_MODULE_2__["Service1Service"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sign-up',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sign-up.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/sign-up.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sign-up.component.css */ "./src/app/sign-up/sign-up.component.css")).default]
    })
], SignUpComponent);



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
    production: false
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

module.exports = __webpack_require__(/*! /mnt/c/Users/Kevin Lin/Desktop/route/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map