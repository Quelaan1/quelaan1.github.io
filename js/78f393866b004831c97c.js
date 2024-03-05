"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || []).push([["src_app_views_Projects_js"],{

/***/ "./src/assets/styles/pages/projects.sass":
/*!***********************************************!*\
  !*** ./src/assets/styles/pages/projects.sass ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://portfolio/./src/assets/styles/pages/projects.sass?");

/***/ }),

/***/ "./src/app/components/Path.js":
/*!************************************!*\
  !*** ./src/app/components/Path.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ description }) => {\n    return /*html*/`\n        <div class=\"path\">\n            <h1 class=\"h1 path__name\">${window.location.pathname.slice(1)}</h1>\n            <p class=\"path__description\">${description}</p>\n        </div>\n    `\n});\n\n//# sourceURL=webpack://portfolio/./src/app/components/Path.js?");

/***/ }),

/***/ "./src/app/components/Project.js":
/*!***************************************!*\
  !*** ./src/app/components/Project.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _consts_projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/consts/projects */ \"./src/app/consts/projects.js\");\n/* harmony import */ var _consts_websites__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/consts/websites */ \"./src/app/consts/websites.js\");\n/* harmony import */ var _consts_techs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/consts/techs */ \"./src/app/consts/techs.js\");\n/* harmony import */ var _consts_media__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/consts/media */ \"./src/app/consts/media.js\");\n\n\n\n\n\nfunction mapLinks(links) {\n\tfunction map(link) {\n\t\tlet href =\n\t\t\t'https://' + (link === 'live' ? '' : _consts_websites__WEBPACK_IMPORTED_MODULE_1__[\"default\"][link]) + links[link]\n\n\t\tif (links[link]) {\n\t\t\tif (link === 'figma')\n\t\t\t\thref = `https://figma.com/community/file/${links[link]}`\n\t\t\tif (link === 'github' && links[link].startsWith('/'))\n\t\t\t\thref = _consts_media__WEBPACK_IMPORTED_MODULE_3__[\"default\"].github + links[link]\n\n\t\t\tconst className = link === 'cached' ? 'button__secondary' : ''\n\t\t\tconst name = `${link[0].toUpperCase()}${link.slice(1)}`\n\n\t\t\treturn /*html*/ `<a href=\"${href}\" class=\"button ${className}\">${name} =></a>`\n\t\t}\n\t}\n\n\treturn Object.keys(links).map(map).join('')\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ id }, t) => {\n\tconst {\n\t\thasImage,\n\t\ttechs: projectTech,\n\t\tlinks,\n\t} = _consts_projects__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find((project) => project.id === id)\n\n\tif (t[id]) {\n\t\treturn /*html*/ `\n        <div class=\"project\">\n            ${\n\t\t\t\t\t\t\thasImage\n\t\t\t\t\t\t\t\t? `<img width=\"100%\" height=\"100%\" src=\"/images/projects/${id}.webp\" alt=\"${t[id].name}\" class=\"project__image\">`\n\t\t\t\t\t\t\t\t: ''\n\t\t\t\t\t\t}\n            \n            <ul class=\"project__techs\">\n                ${projectTech\n\t\t\t\t\t\t\t\t\t.map(\n\t\t\t\t\t\t\t\t\t\t(tech) =>\n\t\t\t\t\t\t\t\t\t\t\t/*html*/ `<li class=\"project__tech\">${_consts_techs__WEBPACK_IMPORTED_MODULE_2__[\"default\"][tech]}</li>`\n\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t.join('')}\n            </ul> \n\n            <div class=\"project__content\">\n                <div class=\"project__name\">${t[id].name}</div>\n                <div class=\"project__description\">${t[id].description}</div>\n                <div class=\"project__links\">${mapLinks(links)}</div>\n            </div>\n        </div> \n    `\n\t}\n});\n\n\n//# sourceURL=webpack://portfolio/./src/app/components/Project.js?");

/***/ }),

/***/ "./src/app/components/ProjectList.js":
/*!*******************************************!*\
  !*** ./src/app/components/ProjectList.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Project */ \"./src/app/components/Project.js\");\n/* harmony import */ var _consts_projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/consts/projects */ \"./src/app/consts/projects.js\");\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ title, filter = () => true, limit = _consts_projects__WEBPACK_IMPORTED_MODULE_1__[\"default\"].length }, t) => {\n    return /*html*/ `\n            ${title ? `<div> <h2 class=\"h2\">${title}</h2>` : \"\"}\n            <div class=\"project-list\">\n                ${_consts_projects__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n                    .filter(filter)\n                    .slice(0, limit)\n                    .sort((a, b) => a.hasImage - b.hasImage)\n                    .map(({ id }) => (0,_components_Project__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({ id }, t))\n                    .join(\"\")}\n            </div>\n        ${title ? \"</div>\" : \"\"}\n    `;\n});\n\n\n//# sourceURL=webpack://portfolio/./src/app/components/ProjectList.js?");

/***/ }),

/***/ "./src/app/consts/projects.js":
/*!************************************!*\
  !*** ./src/app/consts/projects.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\n * @type {import(\"../../types/Project\").Project[]}\n */\nconst projects = [\n\t{\n\t\tid: 'portfolio',\n\t\tlinks: {\n\t\t\tlive: 'quelaan1.github.io',\n\t\t\tgithub: 'quelaan1/quelaan1.github.io',\n\t\t},\n\t\ttechs: ['js'],\n\t\thasImage: true,\n\t},\n\t{\n\t\tid: 'logfire',\n\t\tlinks: {\n\t\t\tlive: 'logfire.ai',\n\t\t\tgithub: '',\n\t\t},\n\t\ttechs: [\n\t\t\t'next.js',\n\t\t\t'ts',\n\t\t\t'redux.js',\n\t\t\t'python',\n\t\t\t'postgresql',\n\t\t\t'starrocks',\n\t\t\t'clickhouse',\n\t\t\t'tailwindcss',\n\t\t],\n\t\thasImage: true,\n\t},\n\t{\n\t\tid: 'payup',\n\t\tlinks: {\n\t\t\tlive: '',\n\t\t\tgithub: '',\n\t\t},\n\t\ttechs: ['react native', 'ts', 'python'],\n\t\thasImage: true,\n\t},\n\t{\n\t\tid: 'mybike',\n\t\tlinks: {\n\t\t\tlive: 'quelaan1.github.io/layout_miami',\n\t\t\tgithub: 'quelaan1/layout_miami',\n\t\t},\n\t\ttechs: ['js', 'html', 'sass'],\n\t\thasImage: true,\n\t\tisSmall: true,\n\t},\n\t{\n\t\tid: 'realestate',\n\t\tlinks: {\n\t\t\tlive: 'quelaan1.github.io/real_estate_search_filter/#/rent',\n\t\t\tgithub: 'quelaan1/real_estate_search_filter',\n\t\t},\n\t\ttechs: ['ts', 'css', 'html'],\n\t\thasImage: true,\n\t\tisSmall: true,\n\t},\n\t{\n\t\tid: 'crazybaby',\n\t\tlinks: {\n\t\t\tlive: 'quelaan1.github.io/Kickstarter/',\n\t\t\tgithub: 'quelaan1/Kickstarter',\n\t\t},\n\t\ttechs: ['js', 'sass', 'html'],\n\t\thasImage: true,\n\t\tisSmall: true,\n\t},\n\t{\n\t\tid: 'landbrokers',\n\t\tlinks: {\n\t\t\tlive: 'land-brokers.vercel.app/?category=Countryside',\n\t\t\tgithub: 'quelaan1/land-brokers',\n\t\t},\n\t\ttechs: [\"next.js\",'ts', 'tailwindcss'],\n\t\thasImage: true,\n\t\tisSmall: true,\n\t},\n]\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projects);\n\n\n//# sourceURL=webpack://portfolio/./src/app/consts/projects.js?");

/***/ }),

/***/ "./src/app/consts/techs.js":
/*!*********************************!*\
  !*** ./src/app/consts/techs.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    ts: \"TypeScript\",\n    js: \"JavaScript\",\n    python: \"Python\",\n    mysql: \"MySQL\",\n    mongodb: \"MongoDB\",\n    postgresql: \"PostgreSQL\",\n    starrocks: \"StarRocks\",\n    clickhouse: \"ClickHouse\",\n    figma: \"Figma\",\n    tailwindcss: \"TailwindCSS\",\n    \"next.js\": \"Next.js\",\n    \"react.js\": \"React.js\",\n    \"redux.js\": \"Redux.js\",\n    \"vue.js\": \"Vue.js\",\n    svelte: \"Svelte\",\n    \"react native\": \"React Native\",\n    expo: \"Expo\",\n    \"google cloud\": \"Google Cloud\",\n    \"github actions\": \"GitHub Actions\",\n    jest: \"Jest\",\n    express: \"Express\",\n    github: \"GitHub\",\n    gulp: \"Gulp\",\n    flask: \"Flask\",\n    quart: \"Quart\",\n    webpack: \"Webpack\",\n    css: \"CSS\",\n    sass: 'Sass',\n    html: \"HTML\",\n});\n\n\n//# sourceURL=webpack://portfolio/./src/app/consts/techs.js?");

/***/ }),

/***/ "./src/app/views/Projects.js":
/*!***********************************!*\
  !*** ./src/app/views/Projects.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_Path_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Path.js */ \"./src/app/components/Path.js\");\n/* harmony import */ var _components_ProjectList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ProjectList.js */ \"./src/app/components/ProjectList.js\");\n/* harmony import */ var styles_pages_projects_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styles/pages/projects.sass */ \"./src/assets/styles/pages/projects.sass\");\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((t, t2) => {\n    return /*html*/ `\n        ${(0,_components_Path_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({ description: t.description })}\n        ${(0,_components_ProjectList_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({ title: t.decent, filter: (p) => !p.isSmall }, t2.projects)}\n        ${(0,_components_ProjectList_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({ title: t.small, filter: (p) => p.isSmall && !p.isInProgress }, t2.projects)}\n    `;\n});\n\n\n//# sourceURL=webpack://portfolio/./src/app/views/Projects.js?");

/***/ })

}]);