var terminalInstance = 0,
  typedArgs = "",
  lastSavedArg = "";

function init() {
  curBlink();
  intelliStart();
}

function curBlink() {
  setInterval(() => {
    document.querySelector("#curs").classList.toggle("curHide");
  }, 600);
}

function intelliStart() {
  let cmdIntrf = document.getElementById("cmdInterface");
  cmdIntrf.insertAdjacentHTML(
    "beforeend",
    `
    <p>Starting up...<span id="curs">&#x2589;</span></p>
    `
  );
  setTimeout(() => {
    cmdIntrf.insertAdjacentHTML(
      "beforeend",
      `
      <div id="progBSeq">
        <br />
        <div id="progBar"></div>
      </div>
      `
    );
    progBar();
    setTimeout(() => {
      document.getElementById("progBSeq").remove();
      document.getElementById("curs").remove();
      setTimeout(() => {
        cmdIntrf.insertAdjacentHTML(
          "beforeend",
          `
          <br />
          <p>Provisioning virtual machine. Please wait.<span id="curs">&#x2589;</span></>
          `
        );
        setTimeout(() => {
          document.getElementById("curs").remove();
          cmdIntrf.insertAdjacentHTML(
            "beforeend",
            `
            <p>Connecting to server...<span id="curs">&#x2589;</span></p>
            `
          );
          setTimeout(() => {
            cmdIntrf.insertAdjacentHTML(
              "beforeend",
              `
              <div id="progBSeq">
                <br />
                <div id="progBar"></div>
              </div>
              `
            );
            progBar();
            setTimeout(() => {
              document.getElementById("progBSeq").remove();
              document.getElementById("curs").remove();
              setTimeout(() => {
                cmdIntrf.insertAdjacentHTML(
                  "beforeend",
                  `
                  <br />
                  <p>Preparing program. Please wait.<span id="curs">&#x2589;</span></p>
                  `
                );
                setTimeout(() => {
                  document.getElementById("curs").remove();
                  cmdIntrf.insertAdjacentHTML(
                    "beforeend",
                    `
                    <br />
                    <p>Computer name: VIRTUAL_1009<span id="curs">&#x2589;</span></p>
                    `
                  );
                  setTimeout(() => {
                    document.getElementById("curs").remove();
                    cmdIntrf.insertAdjacentHTML(
                      "beforeend",
                      `
                      <p>Total memory installed: 1 GB<span id="curs">&#x2589;</span></p>
                      `
                    );
                    setTimeout(() => {
                      document.getElementById("curs").remove();
                      cmdIntrf.insertAdjacentHTML(
                        "beforeend",
                        `
                        <p id="audioCheck">Audio: Checking...<span id="curs">&#x2589;</span></p>
                        `
                      );
                      setTimeout(() => {
                        cmdIntrf.insertAdjacentHTML(
                          "beforeend",
                          `
                          <div id="progBSeq">
                            <br />
                            <div id="progBar"></div>
                          </div>
                          `
                        );
                        progBar();
                        setTimeout(() => {
                          document.getElementById("progBSeq").remove();
                          document.getElementById("curs").remove();
                          document.getElementById("audioCheck").innerHTML =
                            "Audio: [ OK ]";
                          setTimeout(() => {
                            cmdIntrf.insertAdjacentHTML(
                              "beforeend",
                              `
                              <p id="videoCheck">Video: Checking...<span id="curs">&#x2589;</span></p>
                              `
                            );
                            setTimeout(() => {
                              cmdIntrf.insertAdjacentHTML(
                                "beforeend",
                                `
                                <div id="progBSeq">
                                  <br />
                                  <div id="progBar"></div>
                                </div>
                                `
                              );
                              progBar();
                              setTimeout(() => {
                                document.getElementById("progBSeq").remove();
                                document.getElementById("curs").remove();
                                document.getElementById(
                                  "videoCheck"
                                ).innerHTML = "Video: [ OK ]";
                                setTimeout(() => {
                                  cmdIntrf.insertAdjacentHTML(
                                    "beforeend",
                                    `
                                    <p>IP address: 148.37.170.203</p>
                                    `
                                  );
                                  setTimeout(() => {
                                    cmdIntrf.innerHTML = "";
                                    setTimeout(() => {
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
  var progB = "";
  for (let p = 0; p < 50; p++) {
    setTimeout(() => {
      progB += "&#x2589;";
      document.getElementById("progBar").innerHTML = progB;
    }, p * 50);
  }
}

function intellicorpTerminal() {
  terminalInstance += 1;
  typedArgs = "";
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
  document.title = "INTERIM Terminal";
  document.getElementById("cmdInterface").insertAdjacentHTML(
    "beforeend",
    `
    <p>> <span id="typeSomeStuff-` +
      terminalInstance +
      `"></span><span id="curs">&#x2589;</span></p>
    `
  );
  document
    .getElementById("curs")
    .scrollIntoView({block: "end"});
  document
    .getElementById("typeSomeStuff-" + terminalInstance)
    .setAttribute("contenteditable", "plaintext-only");
  // document.getElementById("typeSomeStuff-" + terminalInstance).focus();
  document
    .getElementById("typeSomeStuff-" + terminalInstance)
    .addEventListener("keydown", (tSS) => {
      if (specialKeys.includes(tSS.key)) {
        if (tSS.key === "Backspace") {
          typedArgs = typedArgs.slice(0, -1);
        } else if (tSS.key === "Enter") {
          document.getElementById("curs").remove();
          document
            .getElementById("typeSomeStuff-" + terminalInstance)
            .setAttribute("contenteditable", "false");
          lastSavedArg = typedArgs;
          execCommands(typedArgs);
        } else if (
          ((tSS.key === "Control" || tSS.key === "Meta") && tSS.key === "R") ||
          ((tSS.key === "Control" || tSS.key === "Meta") &&
            tSS.key === "Shift" &&
            tSS.key === "R") ||
          tSS.key === "F5"
        ) {
          tSS.preventDefault();
          execCommands("reboot");
        } else if (tSS.key === "ArrowUp") {
          document.getElementById(
            "typeSomeStuff-" + terminalInstance
          ).innerHTML = lastSavedArg;
          typedArgs = lastSavedArg;
        }
      } else {
        typedArgs += tSS.key;
      }
      // document.title = "> " + typedArgs;
    });
}