
  
  ///////////////////
  ///////////////////
  ///////////////////
  var rootConf = {debug:true, theme: 'light'};
  
  (function(){
    
    if (rootConf.debug == true){
      startDebugger();
    };
    
    
    ////REGISTERING TABS
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
  
  })();
  
  
  // Debug Functions
  
  // Debugger Start function
  function startDebugger(){
    var debugElem = document.createElement('div');
    debugElem.classList.add('debugWindow');
    debugElem.setAttribute('id','debugMain')
    debugElem.innerHTML = 'Debug App';
    document.body.appendChild(debugElem);
    
    var debugStyle = document.createElement('div');
    debugStyle.innerHTML = `
      <style>
            body,* {
              font-family: monospace;
            }
            body.openDebugger {
              overflow: hidden;
            }
            #debugMain {
              transition: 0.25s ease all;
              background: #555;
              color: whitesmoke;
              position: absolute;
              height: 100%;
              top: 0;
              width: 0px;
              overflow: hidden;
              right: -250px;
            }
  
            #debugMain.visible {
              right: 0px;
              min-width: 250px;
            }
  
            .debugWindowTrigger {
              background: #f0900c;
              color: white;
              border: none;
              display: flex;
              align-items: center;
              gap: 1em;
              position: absolute;
              bottom: 0;
              right: 0;
              cursor: pointer;
              box-shadow: 0 1px 3px gray;
              transition: 0.25s ease all;
              border-bottom: 2px solid transparent;
              line-height: 1em;
              padding: 5px 10px;
            }
            .debugWindowTrigger:hover {
              box-shadow: 0 4px 8px gray;
              border-bottom: 2px solid #fF9F1c;
              background: #E0800c;
            }
            .debugWindowTrigger:focus {
              outline: none;
            }
  
            .debugWindowTrigger p {
              line-height: 1em;
              margin: 0;
  
            }
  
            .debugWindowTrigger svg {
              height: 1em;
            }
            .debugWindowTrigger:hover svg {
              animation-iteration-count: infinite;
              animation-name: rotateAnim;
              animation-duration: 4s;
              animation-timing-function: linear;
            }
            @keyframes rotateAnim {
              0% {transform: rotate(0deg);}
              100% {transform: rotate(360deg);}
            }
            .debugWindowTrigger:active {
              color: orange;
              transition: 0.05s ease all;
              transform: scale(0.975);
            }
  
            body.openDebugger .debugWindowTrigger {
              right: 250px;
              word-break: break-all;
              width: 2em;
              flex-direction: column;
            }
    </style>
      `;
    document.body.appendChild(debugStyle);
    
    
    var debugElem = document.createElement('button');
    debugElem.classList.add('debugWindowTrigger');
    debugElem.innerHTML = `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cog" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-cog fa-w-16 fa-3x"><path fill="currentColor" d="M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z" class=""></path></svg> <p>Open Debugger</p>`;
    debugElem.setAttribute('onclick','toggleDebuggerVisibility()');
    document.body.appendChild(debugElem);
  }
  // End debugger start function
  
  // Function that toggles visibility of debugger
  function toggleDebuggerVisibility() {
    var debugWindow = document.getElementById('debugMain');
    debugWindow.classList.toggle('visible');
    if (debugWindow.classList.contains('visible')){
      document.body.classList.add('openDebugger');
    }else{
      document.body.classList.remove('openDebugger');
    }
  }
  // End toggler function
  
  
  // End Debug Functions
