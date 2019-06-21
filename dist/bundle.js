!function(n){var e={};function t(I){if(e[I])return e[I].exports;var l=e[I]={i:I,l:!1,exports:{}};return n[I].call(l.exports,l,l.exports,t),l.l=!0,l.exports}t.m=n,t.c=e,t.d=function(n,e,I){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:I})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var I=Object.create(null);if(t.r(I),Object.defineProperty(I,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var l in n)t.d(I,l,function(e){return n[e]}.bind(null,l));return I},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=1)}([function(module,exports){eval("class Monster{\r\n    // MonsterData exists of element, name, arms, type_arms, legs, eyes, skintype, ability to fly, ability to swim,color ,map, coördinaten\r\n    constructor(monsterdata){\r\n        Object.assign(this.monsterdata)\r\n    }\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWwvTW9uc3Rlci5qcz81MThkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgTW9uc3RlcntcclxuICAgIC8vIE1vbnN0ZXJEYXRhIGV4aXN0cyBvZiBlbGVtZW50LCBuYW1lLCBhcm1zLCB0eXBlX2FybXMsIGxlZ3MsIGV5ZXMsIHNraW50eXBlLCBhYmlsaXR5IHRvIGZseSwgYWJpbGl0eSB0byBzd2ltLGNvbG9yICxtYXAsIGNvw7ZyZGluYXRlblxyXG4gICAgY29uc3RydWN0b3IobW9uc3RlcmRhdGEpe1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5tb25zdGVyZGF0YSlcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n")},function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n\n// EXTERNAL MODULE: ./src/model/Monster.js\nvar model_Monster = __webpack_require__(0);\n\n// CONCATENATED MODULE: ./src/model/MonsterService.js\n\r\n\r\n\r\nclass MonsterService\r\n{\r\n    constructor(){\r\n        this.monsters = [\r\n            // new Monster({name: \'Marijn\', element: \'fire\',  arms: 2, type_arms: \'tentakels\', legs: 2, eyes: 4, skintype: \'schubben\', fly: \'nee\', swim: \'nee\', color: \'oranje\', map: 0, xcoördinaat: 1, ycoördinaat: 1}),\r\n            // new Monster({name: \'Thijs\', element: \'fire\',  arms: 6, type_arms: \'klauw-vleugels\', legs: 0, eyes: 3, skintype: \'veren\', fly: \'ja\', swim: \'nee\', color: \'bruin\', map: 0, xcoördinaat: 2, ycoördinaat: 2})\r\n        ]\r\n    }\r\n\r\n    getMonsters()\r\n    {\r\n        return this.monsters;\r\n    }\r\n\r\n    saveMonster(monster){\r\n       this.monsters.push(monster);\r\n    }\r\n}\r\n\n// CONCATENATED MODULE: ./src/view/CreateMonsterView.js\nclass CreateMonsterView {\r\n\r\n    // template;\r\n    // monsterform;\r\n    // radio_fire;\r\n    // radio_water;\r\n    // radio_earth;\r\n    // radio_wind;\r\n    // switch_int;\r\n\r\n\r\n    constructor(controller) {\r\n        this.template = document.getElementById(\'create_monster\');\r\n        this.monsterform = document.getElementById(\'monster_form\');\r\n\r\n        this.radio_fire = document.getElementById(\'element_fire\');\r\n        this.radio_water = document.getElementById(\'element_water\');\r\n        this.radio_earth = document.getElementById(\'element_earth\');\r\n        this.radio_wind = document.getElementById(\'element_wind\');\r\n\r\n        //events\r\n        this.radio_fire.addEventListener(\'click\', function () {\r\n            document.getElementById("fire_template").style.display =\r\n                this.checked ? "block" : "none";\r\n            document.getElementById("water_template").style.display = \'none\';\r\n            document.getElementById("earth_template").style.display = \'none\';\r\n            document.getElementById("wind_template").style.display = \'none\';\r\n        });\r\n\r\n        this.radio_water.addEventListener(\'click\', function () {\r\n            document.getElementById("water_template").style.display =\r\n                this.checked ? "block" : "none";\r\n            document.getElementById("fire_template").style.display = \'none\';\r\n            document.getElementById("earth_template").style.display = \'none\';\r\n            document.getElementById("wind_template").style.display = \'none\';\r\n        });\r\n\r\n        this.radio_earth.addEventListener(\'click\', function () {\r\n            document.getElementById("earth_template").style.display =\r\n                this.checked ? "block" : "none";\r\n            document.getElementById("fire_template").style.display = \'none\';\r\n            document.getElementById("water_template").style.display = \'none\';\r\n            document.getElementById("wind_template").style.display = \'none\';\r\n        });\r\n\r\n        this.radio_wind.addEventListener(\'click\', function () {\r\n            document.getElementById("wind_template").style.display =\r\n                this.checked ? "block" : "none";\r\n            document.getElementById("fire_template").style.display = \'none\';\r\n            document.getElementById("water_template").style.display = \'none\';\r\n            document.getElementById("earth_template").style.display = \'none\';\r\n        });\r\n\r\n        // if (this.arms.value <= 2) { <\r\n        //     label > Legs\r\n        // :\r\n        //     2 < /label>\r\n        // } else {\r\n        // <\r\n        //     label > Legs\r\n        // :\r\n        //     0 < /label>\r\n        // }\r\n\r\n        this.monsterform.addEventListener(\'submit\', function (e) {\r\n            e.preventDefault();\r\n            controller.addMonster({\r\n                name: this.name.value,\r\n                element: this.element.value,\r\n                arms: this.arms.value,\r\n                type_arms: this.type_arms.value,\r\n                legs: this.legs.value,\r\n                eyes: this.eyes.value,\r\n                furtype: this.furtype.value,\r\n                fly: this.fly.value,\r\n                swim: this.swim.value,\r\n                color: this.color.value\r\n            })\r\n        })\r\n    }\r\n}\n// CONCATENATED MODULE: ./src/view/MapView.js\nclass MapView {\r\n  constructor() {\r\n    this.map = document.getElementById("map");\r\n    this.zw = 10;\r\n    this.zh = 10;\r\n    this.readJson();\r\n  }\r\n\r\n  readJson() {\r\n    fetch("./map/grid.json")\r\n      .then(response => {\r\n        response.json().then(json => {\r\n          this.grids = json;\r\n          let jsonstring = JSON.stringify(this.grids)\r\n          console.log(JSON.parse(jsonstring).grid[0])\r\n        })\r\n      })\r\n  }\r\n\r\n  drawBoard() {\r\n    this.table = document.createElement("table");\r\n    this.table.setAttribute("id", "grid");\r\n\r\n    for (let i = 0; i < this.zw; i++) {\r\n      this.tr = document.createElement("tr");\r\n      for (let y = 0; y < this.zh; y++) {\r\n        this.td = document.createElement("td");\r\n        this.td.setAttribute("ondrop", "drop(event)");\r\n        this.td.setAttribute("ondragover", "allowDrop(event)");\r\n        if (i == 5 && y == 5) {\r\n          this.img = document.createElement("img");\r\n          this.img.src =\r\n            "https://evolutionmgt.com/wp-content/uploads/2017/05/e51196e2a1a965f4262dc4947729889f-game-cards-little-monsters.jpg";\r\n          this.img.draggable = true;\r\n          this.img.setAttribute("ondragstart", "drag(event)")\r\n          this.td.appendChild(this.img);\r\n        }\r\n        this.tr.appendChild(this.td);\r\n      }\r\n      this.table.appendChild(this.tr);\r\n    }\r\n    this.map.appendChild(this.table);\r\n\r\n    for (let i = 0; i < this.table.rows.length; i++) {\r\n      for (let j = 0; j < this.table.rows[i].cells.length; j++) {\r\n        this.table.rows[i].cells[j].onclick = function(i, j) {\r\n          console.log(i + ":" + j);\r\n        }.bind(null, i, j);\r\n      }\r\n    }\r\n  }\r\n\r\n  allowDrop(ev) {\r\n    ev.preventDefault();\r\n  }\r\n  \r\n  drag(ev) {\r\n    ev.dataTransfer.setData("text", ev.target.id);\r\n  }\r\n  \r\n  drop(ev) {\r\n    ev.preventDefault();\r\n    this.data = ev.dataTransfer.getData("text");\r\n    ev.target.appendChild(document.getElementById(this.data));\r\n  }\r\n\r\n}\r\n\n// CONCATENATED MODULE: ./src/Controller/ZooController.js\n\r\n\r\n\r\n\r\nclass ZooController_ZooController\r\n{\r\n    //el constructor\r\n    constructor(){\r\n        this.monsterservice = new MonsterService();\r\n        this.createmonsterview =  new CreateMonsterView(this);\r\n        this.mapview = new MapView();\r\n        this.mapview.drawBoard();\r\n    }\r\n\r\n    addMonster(data){\r\n        this.monsterservice.saveMonster(new Monster(data));\r\n    }\r\n}\n// CONCATENATED MODULE: ./src/app.js\n\r\n\r\nlet zoocontroller = new ZooController_ZooController();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWwvTW9uc3RlclNlcnZpY2UuanM/MDg5MiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9DcmVhdGVNb25zdGVyVmlldy5qcz9jNzcwIiwid2VicGFjazovLy8uL3NyYy92aWV3L01hcFZpZXcuanM/MDk0OCIsIndlYnBhY2s6Ly8vLi9zcmMvQ29udHJvbGxlci9ab29Db250cm9sbGVyLmpzP2JjZDkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcz8xMTEyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFvQzs7O0FBRzdCO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDRMQUE0TDtBQUN4Tiw0QkFBNEIsMkxBQTJMO0FBQ3ZOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQ3BCTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVCxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0EsQzs7QUNoRk87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsYUFBYTtBQUNoQztBQUNBLHFCQUFxQixhQUFhO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQiw0QkFBNEI7QUFDL0MscUJBQXFCLHFDQUFxQztBQUMxRDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQ2xFd0Q7QUFDTTtBQUNwQjs7QUFFM0IsTUFBTSwyQkFBYTtBQUNsQztBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsY0FBYztBQUNoRCxzQ0FBc0MsaUJBQWlCO0FBQ3ZELDJCQUEyQixPQUFPO0FBQ2xDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQzs7QUNqQnVEOztBQUV2RCx3QkFBd0IsMkJBQWEiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbnN0ZXIgfSBmcm9tICcuL01vbnN0ZXInO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBNb25zdGVyU2VydmljZVxyXG57XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMubW9uc3RlcnMgPSBbXHJcbiAgICAgICAgICAgIC8vIG5ldyBNb25zdGVyKHtuYW1lOiAnTWFyaWpuJywgZWxlbWVudDogJ2ZpcmUnLCAgYXJtczogMiwgdHlwZV9hcm1zOiAndGVudGFrZWxzJywgbGVnczogMiwgZXllczogNCwgc2tpbnR5cGU6ICdzY2h1YmJlbicsIGZseTogJ25lZScsIHN3aW06ICduZWUnLCBjb2xvcjogJ29yYW5qZScsIG1hcDogMCwgeGNvw7ZyZGluYWF0OiAxLCB5Y2/DtnJkaW5hYXQ6IDF9KSxcclxuICAgICAgICAgICAgLy8gbmV3IE1vbnN0ZXIoe25hbWU6ICdUaGlqcycsIGVsZW1lbnQ6ICdmaXJlJywgIGFybXM6IDYsIHR5cGVfYXJtczogJ2tsYXV3LXZsZXVnZWxzJywgbGVnczogMCwgZXllczogMywgc2tpbnR5cGU6ICd2ZXJlbicsIGZseTogJ2phJywgc3dpbTogJ25lZScsIGNvbG9yOiAnYnJ1aW4nLCBtYXA6IDAsIHhjb8O2cmRpbmFhdDogMiwgeWNvw7ZyZGluYWF0OiAyfSlcclxuICAgICAgICBdXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TW9uc3RlcnMoKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1vbnN0ZXJzO1xyXG4gICAgfVxyXG5cclxuICAgIHNhdmVNb25zdGVyKG1vbnN0ZXIpe1xyXG4gICAgICAgdGhpcy5tb25zdGVycy5wdXNoKG1vbnN0ZXIpO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBDcmVhdGVNb25zdGVyVmlldyB7XHJcblxyXG4gICAgLy8gdGVtcGxhdGU7XHJcbiAgICAvLyBtb25zdGVyZm9ybTtcclxuICAgIC8vIHJhZGlvX2ZpcmU7XHJcbiAgICAvLyByYWRpb193YXRlcjtcclxuICAgIC8vIHJhZGlvX2VhcnRoO1xyXG4gICAgLy8gcmFkaW9fd2luZDtcclxuICAgIC8vIHN3aXRjaF9pbnQ7XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbnRyb2xsZXIpIHtcclxuICAgICAgICB0aGlzLnRlbXBsYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0ZV9tb25zdGVyJyk7XHJcbiAgICAgICAgdGhpcy5tb25zdGVyZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb25zdGVyX2Zvcm0nKTtcclxuXHJcbiAgICAgICAgdGhpcy5yYWRpb19maXJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VsZW1lbnRfZmlyZScpO1xyXG4gICAgICAgIHRoaXMucmFkaW9fd2F0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWxlbWVudF93YXRlcicpO1xyXG4gICAgICAgIHRoaXMucmFkaW9fZWFydGggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWxlbWVudF9lYXJ0aCcpO1xyXG4gICAgICAgIHRoaXMucmFkaW9fd2luZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbGVtZW50X3dpbmQnKTtcclxuXHJcbiAgICAgICAgLy9ldmVudHNcclxuICAgICAgICB0aGlzLnJhZGlvX2ZpcmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmlyZV90ZW1wbGF0ZVwiKS5zdHlsZS5kaXNwbGF5ID1cclxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tlZCA/IFwiYmxvY2tcIiA6IFwibm9uZVwiO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndhdGVyX3RlbXBsYXRlXCIpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWFydGhfdGVtcGxhdGVcIikuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3aW5kX3RlbXBsYXRlXCIpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMucmFkaW9fd2F0ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2F0ZXJfdGVtcGxhdGVcIikuc3R5bGUuZGlzcGxheSA9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrZWQgPyBcImJsb2NrXCIgOiBcIm5vbmVcIjtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaXJlX3RlbXBsYXRlXCIpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWFydGhfdGVtcGxhdGVcIikuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3aW5kX3RlbXBsYXRlXCIpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMucmFkaW9fZWFydGguYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWFydGhfdGVtcGxhdGVcIikuc3R5bGUuZGlzcGxheSA9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrZWQgPyBcImJsb2NrXCIgOiBcIm5vbmVcIjtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaXJlX3RlbXBsYXRlXCIpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2F0ZXJfdGVtcGxhdGVcIikuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3aW5kX3RlbXBsYXRlXCIpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMucmFkaW9fd2luZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3aW5kX3RlbXBsYXRlXCIpLnN0eWxlLmRpc3BsYXkgPVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja2VkID8gXCJibG9ja1wiIDogXCJub25lXCI7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmlyZV90ZW1wbGF0ZVwiKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndhdGVyX3RlbXBsYXRlXCIpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWFydGhfdGVtcGxhdGVcIikuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gaWYgKHRoaXMuYXJtcy52YWx1ZSA8PSAyKSB7IDxcclxuICAgICAgICAvLyAgICAgbGFiZWwgPiBMZWdzXHJcbiAgICAgICAgLy8gOlxyXG4gICAgICAgIC8vICAgICAyIDwgL2xhYmVsPlxyXG4gICAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gPFxyXG4gICAgICAgIC8vICAgICBsYWJlbCA+IExlZ3NcclxuICAgICAgICAvLyA6XHJcbiAgICAgICAgLy8gICAgIDAgPCAvbGFiZWw+XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICB0aGlzLm1vbnN0ZXJmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgY29udHJvbGxlci5hZGRNb25zdGVyKHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMubmFtZS52YWx1ZSxcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQ6IHRoaXMuZWxlbWVudC52YWx1ZSxcclxuICAgICAgICAgICAgICAgIGFybXM6IHRoaXMuYXJtcy52YWx1ZSxcclxuICAgICAgICAgICAgICAgIHR5cGVfYXJtczogdGhpcy50eXBlX2FybXMudmFsdWUsXHJcbiAgICAgICAgICAgICAgICBsZWdzOiB0aGlzLmxlZ3MudmFsdWUsXHJcbiAgICAgICAgICAgICAgICBleWVzOiB0aGlzLmV5ZXMudmFsdWUsXHJcbiAgICAgICAgICAgICAgICBmdXJ0eXBlOiB0aGlzLmZ1cnR5cGUudmFsdWUsXHJcbiAgICAgICAgICAgICAgICBmbHk6IHRoaXMuZmx5LnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgc3dpbTogdGhpcy5zd2ltLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IHRoaXMuY29sb3IudmFsdWVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIE1hcFZpZXcge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5tYXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hcFwiKTtcclxuICAgIHRoaXMuencgPSAxMDtcclxuICAgIHRoaXMuemggPSAxMDtcclxuICAgIHRoaXMucmVhZEpzb24oKTtcclxuICB9XHJcblxyXG4gIHJlYWRKc29uKCkge1xyXG4gICAgZmV0Y2goXCIuL21hcC9ncmlkLmpzb25cIilcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIHJlc3BvbnNlLmpzb24oKS50aGVuKGpzb24gPT4ge1xyXG4gICAgICAgICAgdGhpcy5ncmlkcyA9IGpzb247XHJcbiAgICAgICAgICBsZXQganNvbnN0cmluZyA9IEpTT04uc3RyaW5naWZ5KHRoaXMuZ3JpZHMpXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnBhcnNlKGpzb25zdHJpbmcpLmdyaWRbMF0pXHJcbiAgICAgICAgfSlcclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIGRyYXdCb2FyZCgpIHtcclxuICAgIHRoaXMudGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XHJcbiAgICB0aGlzLnRhYmxlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZ3JpZFwiKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuenc7IGkrKykge1xyXG4gICAgICB0aGlzLnRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMuemg7IHkrKykge1xyXG4gICAgICAgIHRoaXMudGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgdGhpcy50ZC5zZXRBdHRyaWJ1dGUoXCJvbmRyb3BcIiwgXCJkcm9wKGV2ZW50KVwiKTtcclxuICAgICAgICB0aGlzLnRkLnNldEF0dHJpYnV0ZShcIm9uZHJhZ292ZXJcIiwgXCJhbGxvd0Ryb3AoZXZlbnQpXCIpO1xyXG4gICAgICAgIGlmIChpID09IDUgJiYgeSA9PSA1KSB7XHJcbiAgICAgICAgICB0aGlzLmltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgICAgICB0aGlzLmltZy5zcmMgPVxyXG4gICAgICAgICAgICBcImh0dHBzOi8vZXZvbHV0aW9ubWd0LmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS9lNTExOTZlMmExYTk2NWY0MjYyZGM0OTQ3NzI5ODg5Zi1nYW1lLWNhcmRzLWxpdHRsZS1tb25zdGVycy5qcGdcIjtcclxuICAgICAgICAgIHRoaXMuaW1nLmRyYWdnYWJsZSA9IHRydWU7XHJcbiAgICAgICAgICB0aGlzLmltZy5zZXRBdHRyaWJ1dGUoXCJvbmRyYWdzdGFydFwiLCBcImRyYWcoZXZlbnQpXCIpXHJcbiAgICAgICAgICB0aGlzLnRkLmFwcGVuZENoaWxkKHRoaXMuaW1nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50ci5hcHBlbmRDaGlsZCh0aGlzLnRkKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnRhYmxlLmFwcGVuZENoaWxkKHRoaXMudHIpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5tYXAuYXBwZW5kQ2hpbGQodGhpcy50YWJsZSk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRhYmxlLnJvd3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLnRhYmxlLnJvd3NbaV0uY2VsbHMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICB0aGlzLnRhYmxlLnJvd3NbaV0uY2VsbHNbal0ub25jbGljayA9IGZ1bmN0aW9uKGksIGopIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGkgKyBcIjpcIiArIGopO1xyXG4gICAgICAgIH0uYmluZChudWxsLCBpLCBqKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWxsb3dEcm9wKGV2KSB7XHJcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH1cclxuICBcclxuICBkcmFnKGV2KSB7XHJcbiAgICBldi5kYXRhVHJhbnNmZXIuc2V0RGF0YShcInRleHRcIiwgZXYudGFyZ2V0LmlkKTtcclxuICB9XHJcbiAgXHJcbiAgZHJvcChldikge1xyXG4gICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMuZGF0YSA9IGV2LmRhdGFUcmFuc2Zlci5nZXREYXRhKFwidGV4dFwiKTtcclxuICAgIGV2LnRhcmdldC5hcHBlbmRDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmRhdGEpKTtcclxuICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IE1vbnN0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vbW9kZWwvTW9uc3RlclNlcnZpY2UnXHJcbmltcG9ydCB7IENyZWF0ZU1vbnN0ZXJWaWV3IH0gZnJvbSAnLi4vdmlldy9DcmVhdGVNb25zdGVyVmlldyc7XHJcbmltcG9ydCB7IE1hcFZpZXcgfSBmcm9tICcuLi92aWV3L01hcFZpZXcnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWm9vQ29udHJvbGxlclxyXG57XHJcbiAgICAvL2VsIGNvbnN0cnVjdG9yXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMubW9uc3RlcnNlcnZpY2UgPSBuZXcgTW9uc3RlclNlcnZpY2UoKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZW1vbnN0ZXJ2aWV3ID0gIG5ldyBDcmVhdGVNb25zdGVyVmlldyh0aGlzKTtcclxuICAgICAgICB0aGlzLm1hcHZpZXcgPSBuZXcgTWFwVmlldygpO1xyXG4gICAgICAgIHRoaXMubWFwdmlldy5kcmF3Qm9hcmQoKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRNb25zdGVyKGRhdGEpe1xyXG4gICAgICAgIHRoaXMubW9uc3RlcnNlcnZpY2Uuc2F2ZU1vbnN0ZXIobmV3IE1vbnN0ZXIoZGF0YSkpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFpvb0NvbnRyb2xsZXIgZnJvbSAnLi9Db250cm9sbGVyL1pvb0NvbnRyb2xsZXInO1xyXG5cclxubGV0IHpvb2NvbnRyb2xsZXIgPSBuZXcgWm9vQ29udHJvbGxlcigpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n')}]);