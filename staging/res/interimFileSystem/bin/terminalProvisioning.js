let terminalInstance = 0,
  typedArgs = "",
  lastSavedArg = [];

function init() {
  // curBlink();
  intelliStart();
  // tabTitleStartup();
  parent.document.title = "Loading...";
}

function tabTitleStartup() {
  const blks = [
    "\u259b",
    "\u259c",
    "\u259f",
    "\u2599"
  ];
  let idx = 0;
  setInterval(() => {
    parent.document.title = blks[idx];
    idx = (idx + 1) % blks.length;
  }, 100);
}

function curBlink() {
  setInterval(() => { document.querySelector("#curs").classList.toggle("curHide"); }, 600);
}

function intelliStart() {
  let cmdIntrf = document.querySelector("#cmdInterface");
  cmdIntrf.insertAdjacentHTML("beforeend",`
    <p>Starting up...</p>
  `);
  setTimeout(() => {
    cmdIntrf.insertAdjacentHTML("beforeend",`
      <div id="progBSeq">
        <br>
        <div id="progBar"></div>
      </div>
    `);
    progBar();
    setTimeout(() => {
      document.querySelector("#progBSeq").remove();
      setTimeout(() => {
        cmdIntrf.insertAdjacentHTML("beforeend",`
          <br>
          <p>Provisioning virtual machine. Please wait.</>
        `);
        setTimeout(() => {
          cmdIntrf.insertAdjacentHTML("beforeend",`
            <p>Connecting to server...</p>
          `);
          setTimeout(() => {
            cmdIntrf.insertAdjacentHTML("beforeend",`
              <div id="progBSeq">
                <br>
                <div id="progBar"></div>
              </div>
            `);
            progBar();
            setTimeout(() => {
              document.querySelector("#progBSeq").remove();
              setTimeout(() => {
                cmdIntrf.insertAdjacentHTML("beforeend",`
                  <br>
                  <p>Preparing program. Please wait.</p>
                `);
                setTimeout(() => {
                  cmdIntrf.insertAdjacentHTML("beforeend",`
                    <br>
                    <p>Computer name: VIRTUAL_1009</p>
                  `);
                  setTimeout(() => {
                    cmdIntrf.insertAdjacentHTML("beforeend",`
                      <p>Total memory installed: 1 GB</p>
                    `);
                    setTimeout(() => {
                      cmdIntrf.insertAdjacentHTML("beforeend",`
                        <p id="audioCheck">Audio: Checking...</p>
                      `);
                      setTimeout(() => {
                        cmdIntrf.insertAdjacentHTML("beforeend",`
                          <div id="progBSeq">
                            <br>
                            <div id="progBar"></div>
                          </div>
                        `);
                        progBar();
                        setTimeout(() => {
                          document.querySelector("#progBSeq").remove();
                          document.querySelector("#audioCheck").innerHTML =
                            `Audio: <span style="color: green;">[ OK ]</span>`;
                          setTimeout(() => {
                            cmdIntrf.insertAdjacentHTML("beforeend",`
                              <p id="videoCheck">Video: Checking...</p>
                            `);
                            setTimeout(() => {
                              cmdIntrf.insertAdjacentHTML("beforeend",`
                                <div id="progBSeq">
                                  <br>
                                  <div id="progBar"></div>
                                </div>
                              `);
                              progBar();
                              setTimeout(() => {
                                document.querySelector("#progBSeq").remove();
                                document.querySelector("#videoCheck").innerHTML =
                                  `Video: <span style="color: green;">[ OK ]</span>`;
                                setTimeout(() => {
                                  cmdIntrf.insertAdjacentHTML("beforeend",`
                                    <p>IP address: 148.37.170.203</p>
                                  `);
                                  setTimeout(() => {
                                    cmdIntrf.innerHTML = "";
                                    setTimeout(() => {
                                      if (!localStorage.getItem("PRINT_WORKING_DIRECTORY")) {
                                        localStorage.setItem("PRINT_WORKING_DIRECTORY", "/");
                                      }
                                      // PROVISION SANDBOXED APPS AS UNSANDBOXED
                                      localStorage.setItem("/intellicorp/prog.exec isSandboxed", false);
                                      intellicorpTerminal();
                                    }, 250);
                                  }, 2500);
                                }, 250);
                              }, 2500);
                            }, 250);
                          }, 250);
                        }, 2500);
                      }, 250);
                    }, 250);
                  }, 250);
                }, 500);
              }, 250);
            }, 2500);
          }, 250);
        }, 1000);
      }, 250);
    }, 2500);
  }, 5000);
}

function progBar() {
  let progB = "";
  for (let p = 0; p < 50; p++) {
    setTimeout(() => {
      progB += "&#x2589;";
      document.querySelector("#progBar").innerHTML = progB;
    }, p * 50);
  }
}

function intellicorpTerminal() {
  let cmdHistory = lastSavedArg.length;
  terminalInstance += 1;
  // typedArgs = "";
  const specialKeys = [
    "Alt",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowUp",
    "Backspace",
    "CapsLock",
    "ContextMenu",
    "Control",
    "Delete",
    "End",
    "Enter",
    "Escape",
    "F1",
    "F2",
    "F3",
    "F4",
    "F5",
    "F6",
    "F7",
    "F8",
    "F9",
    "F10",
    "F11",
    "F12",
    "F13",
    "F14",
    "F15",
    "F16",
    "F17",
    "F18",
    "F19",
    "F20",
    "F21",
    "F22",
    "F23",
    "F24",
    "Home",
    "Meta",
    "NumLock",
    "PageDown",
    "PageUp",
    "ScrollLock",
    "Shift",
    "Tab",
  ];
  parent.document.title = "INTERIM Terminal";
  document.querySelector("#cmdInterface").insertAdjacentHTML("beforeend", `
    <p><span>${localStorage.getItem("PRINT_WORKING_DIRECTORY")}></span>&nbsp;<span id="typeSomeStuff-${terminalInstance}"></span></p>
  `);
  document.querySelector(`#typeSomeStuff-${terminalInstance}`).setAttribute("contenteditable", "plaintext-only");
  setTimeout(() => { document.querySelector(`#typeSomeStuff-${terminalInstance}`).focus(); }, 0);
  document.body.addEventListener("click", () => { document.querySelector(`#typeSomeStuff-${terminalInstance}`).focus(); });
  document.querySelector(`#typeSomeStuff-${terminalInstance}`).addEventListener("keydown", (tSS) => {
    if (specialKeys.includes(tSS.key)) {
      if (tSS.key === "Enter") {
        document.querySelector(`#typeSomeStuff-${terminalInstance}`).setAttribute("contenteditable", "false");
        document.querySelector(`#typeSomeStuff-${terminalInstance}`).blur();
        typedArgs = document.querySelector(`#typeSomeStuff-${terminalInstance}`).innerText;
        if (!(!typedArgs)) { lastSavedArg.push(typedArgs); }
        if (sysDirs.includes(localStorage.getItem("PRINT_WORKING_DIRECTORY"))) {
          document.querySelector("#cmdInterface").insertAdjacentHTML("beforeend",`
            <p>Access denied -- returning to root...</p>
          `);
          return setTimeout(() => {
            localStorage.setItem("PRINT_WORKING_DIRECTORY", "/");
            document.querySelector("#cmdInterface").insertAdjacentHTML("beforeend", "<br>");
            intellicorpTerminal();
          }, 1000);
        } else if (!localStorage.getItem("PRINT_WORKING_DIRECTORY")) {
          document.querySelector("#cmdInterface").insertAdjacentHTML("beforeend", `
            <p>Working directory not found -- returning to root...</p>
          `);
          return setTimeout(() => {
            localStorage.setItem("PRINT_WORKING_DIRECTORY", "/");
            document.querySelector("#cmdInterface").insertAdjacentHTML("beforeend", "<br>");
            intellicorpTerminal();
          }, 1000);
        } else { execCommands(typedArgs); }
      } else if (
        ((tSS.key === "Control" || tSS.key === "Meta") && tSS.key === "R") ||
        ((tSS.key === "Control" || tSS.key === "Meta") && tSS.key === "Shift" && tSS.key === "R") ||
        tSS.key === "F5"
      ) {
        tSS.stopImmediatePropagation();
        tSS.preventDefault();
        execCommands("reboot");
      } else if (tSS.key === "ArrowUp") {
        tSS.preventDefault();
        if (cmdHistory > 0) {
          cmdHistory--;
          document.querySelector(`#typeSomeStuff-${terminalInstance}`).innerText = lastSavedArg[cmdHistory];
        }
      } else if (tSS.key === "ArrowDown") {
        tSS.preventDefault();
        if (cmdHistory < lastSavedArg.length - 1) {
          cmdHistory++;
          document.querySelector(`#typeSomeStuff-${terminalInstance}`).innerText = lastSavedArg[cmdHistory];
        }
        else if (cmdHistory === lastSavedArg.length - 1) {
          cmdHistory++;
          document.querySelector(`#typeSomeStuff-${terminalInstance}`).innerText = "";
        }
      }
    } else { typedArgs += tSS.key; }
    // parent.document.title = `> ${document.querySelector(`#typeSomeStuff-${terminalInstance}`).innerText}`;
  });
}