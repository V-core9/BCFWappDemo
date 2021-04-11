var debug = {
    settings: {
        fullScreenMode: false,
        shortCutInterval: 10,
        objInterval: 50
    },
    log: {
        perPage: 20,
        items: []
    },
    tabs: []
};
  
var currentKeyPress = [];
  
var scArray = [
  { 
    name: "Toggle_Debug_Visibility",
    buttons : [81, 87, 69],
    delay: 3000,
    date: 0,
    triggered: false,
    function() { toggleDebuggerVisibility() }
  },
  {
    name: "Trigger_Full_Screen",
    buttons : [18, 13],
    delay: 3000,
    date: 0,
    triggered: false,
    function() { triggerFullscreen() }
  },
  {
    name: "Close_This_Window",
    buttons : [18, 67],
    delay: 0,
    date: 0,
    triggered: false,
    disabled: false,
    function() { closeWindowFunc() }
  }
]
  
  ////REGISTERING TABS
  /*
  var debugTab1 = {
    id : "debugInfoKeypress",
    title: "KeyPress Array",
    idVal: "keyPressArray"
  }
  registerDegubTab(debugTab1);
  
  var debugTab2 = {
    id : "debugLogList",
    title: "Debug log:",
    idVal: "debugLogListItems"
  }
  registerDegubTab(debugTab2);
  
  var debugTab3 = {
    id : "debugObjTab",
    title: "Debug OBJ:",
    idVal: "debugObj"
  }
  registerDegubTab(debugTab3);
  */
  
  //////////////////////////
  document.addEventListener("keydown", keyDownFunc);
  document.addEventListener("keyup", keyUpFunc);
  
  var debugObjInterval = setInterval(updateDebugObj, debug.settings.objInterval);
  var shortCutsInterval = setInterval(shortCutFunction, debug.settings.shortCutInterval);
  
  /////////////////////////
  function keyDownFunc(event) {
    var key = event.keyCode;
    if (!currentKeyPress.includes(key)){
      currentKeyPress.push(key);
      debugMSG('KeyDownFunc('+key+')');
    }
  }
  
  function keyUpFunc(event) {
    var key = event.keyCode;
    var index = currentKeyPress.indexOf(key);
    if (index > -1) {
      currentKeyPress.splice(index, 1);
      debugMSG('keyUpFunc('+key+')');
    }
  }
  
  function toggleTab(button){
    var nameHelp = button.innerHTML; 
    var x, i;
    x = document.querySelectorAll(".tab");
    for (i = 0; i < x.length; i++) {
      x[i].classList.remove('visible');
    }
    document.getElementById(nameHelp).classList.add('visible');
    x = document.querySelectorAll(".tabsButtons button");
    for (i = 0; i < x.length; i++) {
      x[i].classList.remove('active');
    }
    button.classList.add('active');
  }
  
  function debugMSG(msg){
    debug.log.items.push({msg: msg, date: Date.now()});
    drawDebugMsgList();
  }
  
  function drawDebugMsgList(){
    var x, i,msgString;
    x = debug.log.items;
    for (i = 0; i < x.length; i++) {
       msgString += `<div class="singleMsg">`
                        +`<p>`+x[i].msg+`</p>`
                        +`<p>`+x[i].date+`</p>`
                      +`</div>`;
    }
    
    document.getElementById('debugLogListItems').innerHTML = msgString;
  }
  
  function updateDebugObj(){
    document.getElementById('debugObj').innerHTML = JSON.stringify(debug);
    
    document.getElementById('keyPressArray').innerHTML = JSON.stringify(currentKeyPress);
  }
  
  function stopDebugObjInterval() {
    clearInterval(debugObjInterval);
  }
  
  function registerDegubTab(tabObj){
    debug.tabs.push(tabObj);
    drawDebugTabs();
  }
  
  function drawDebugTabs(){
    
    var x, i,tabsString = "", tabsBtnString = "<div class='tabsButtons'>";
    x = debug.tabs;
    for (i = 0; i < x.length; i++) {
       tabsString += `<div id="`+x[i].id+`" class="tab">`
                      +`<div class="sectionDebug">`
                        +`<p class="title">`+x[i].title+`</p>`
                        +`<p id="`+x[i].idVal+`"></p>`
                      +`</div>`
                    +`</div>`;
        tabsBtnString += `<button onclick="toggleTab(this)">`+x[i].id+`</button>`;
    }
    tabsBtnString +="</div>";
    document.getElementById('debugMain').innerHTML = tabsString;
    document.getElementById('debugMain').innerHTML += tabsBtnString;
    document.querySelectorAll('.tab')[0].classList.add('visible');
    document.querySelectorAll('.tabsButtons button')[0].classList.add('active');
  }
  
  
  function shortCutFunction(){
    var i,j;
    for (i = 0; i < scArray.length; i++){
      if (scArray[i].disabled !== true){
        var btnNum = scArray[i].buttons.length;
        for (j = 0; j < scArray[i].buttons.length; j++){
          if(currentKeyPress.indexOf(scArray[i].buttons[j]) > -1){
              btnNum--;
          } 
        }
        if (btnNum == 0){
          if ((scArray[i].triggered == false) || ((Date.now() - scArray[i].date) > scArray[i].delay)){
              scArray[i].function();
              scArray[i].date = Date.now();
              scArray[i].triggered = true;
          }
        } else {
          if (scArray[i].triggered) {
              scArray[i].triggered = false;
          }
        }
      }
    }
  }
  
  
  
  
  
  
  
  

  
  
  
  
  
  






  function showRootModal(){
      document.body.innerHTML += `<div class="rootModal">`
                                 +`<div class="inner">`
                                 +`<p class="title">Something Happened</p>`
                                 +`<p class="description">Yea you can say so something just showed up...sooo</p>`
                                 +`<button>Yea</button>`
                                 +`<button>No</button>`
                                 +`</div>`
                                 +`</div>`
                                }