let urlArgs = new URLSearchParams(window.location.search).get("m");

function urlQue() {
  if (urlArgs == "terminated") {
    document.body.innerHTML = `
      <div id="dlg">
        <div style="background-color: black;">
          <p style="color: red;">CONNECTION TERMINATED</p>
        </div>
      </div>
    `;
    document.body.style.backgroundColor = "black";
    document.title = "CONNECTION TERMINATED";
    document.body.addEventListener("keydown", (onprs) => {
      if (onprs.key === "F5") { window.location.replace("/"); }
    });
    return;
  } else { syntaxValidator(); }
}

function syntaxValidator() {
  let inp = document.getElementById("synInput");
  inp.addEventListener("keydown", (k) => {
    if (k.key === "Enter") {
      if (urlArgs == "debug") { // debug mode on
        document.getElementById("synInput").blur();
        document.body.insertAdjacentHTML("afterbegin", `
          <div id="dlg" onclick="{ document.getElementById('dlg').remove(); }">
            <div onclick="{ event.stopPropagation(); }">
              <p>You typed: ${inp.value}</p>
              <p>Decoded output: ${btoa(inp.value)}</p>
              <br>
              <p>Click OK to continue.</p>
              <br>
              <button onclick="{
                document.getElementById('dlg').remove();
                setTimeout(() => { syn(btoa(document.getElementById('synInput').value)); }, 50);
              }">OK</button>
            </div>
          </div>
        `);
      } else { syn(btoa(inp.value)); } // debug mode off
    }
  });
}

function syn(h) {
  document.getElementById("synInput").blur();
  switch (h) {
    case "TnVtaXRyb3Zh": // Numitrova
      return document.body.insertAdjacentHTML("afterbegin", `
        <div id="dlg">
          <iframe
            src="/numitrova.html"
            style="width: 50rem; max-width: 100%; height: auto; aspect-ratio: 16 / 10; padding: 0;"
          ></iframe>
        </div>
      `);
    case "SnVuc3Vp": // Junsui
      return document.body.insertAdjacentHTML("afterbegin", `
        <div id="dlg" onclick="{ document.getElementById('dlg').remove(); }">
          <div style="width: 25rem;" onclick="{ event.stopPropagation(); }">
            <p>This will launch the program in another window. Click the button below to continue.</p>
            <br>
            <button onclick="{
              window.open('https://www.wattpad.com/story/215143115');
              document.getElementById('dlg').remove();
            }">Read the story</button>
          </div>
        </div>
      `);
    case "SW50ZWxsaWNvcnA=": // Intellicorp
      document.body.insertAdjacentHTML("afterbegin", `
        <div id="dlg" onclick="{ document.getElementById('dlg').remove(); }">
          <div style="width: 25rem;" onclick="{ event.stopPropagation(); }">
            <p>The app will open on this window. To get back to this interface, type 'exit' or 'logoff'.</p>
            <br>
            <button onclick="{
              window.location.replace('/intellicorp.html');
            }">Launch app</button>
          </div>
        </div>
      `);
      return;
    case "U29jaWFscw==": // Socials
      return document.body.insertAdjacentHTML("afterbegin", `
        <div id="dlg" onclick="{ document.getElementById('dlg').remove(); }">
          <div style="width: 25rem;" onclick="{ event.stopPropagation(); }">
            <p>ZER<span style="color: red;">0</span>'s socials</p>
            <br>
            <button onclick="{
              window.open('https://x.com/hiddenuser0');
              document.getElementById('dlg').remove();
            }">X</button>
            <button onclick="{
              window.open('https://instagram.com/hiddenuser0');
              document.getElementById('dlg').remove();
            }">Instagram</button>
            <button onclick="{
              window.open('https://youtube.com/@hiddenuser0');
              document.getElementById('dlg').remove();
            }">YouTube</button>
            <button onclick="{
              window.open('https://wattpad.com/user/hiddenuser0');
              document.getElementById('dlg').remove();
            }">Wattpad</button>
            <button onclick="{
              window.open('https://reddit.com/user/hiddenuser0_');
              document.getElementById('dlg').remove();
            }">Reddit</button>
          </div>
        </div>
      `);
    case "Pw==": // ?
      if (urlArgs == "debug") { // debug mode on
        return document.body.insertAdjacentHTML("afterbegin", `
          <div id="dlg" onclick="{ document.getElementById('dlg').remove(); }">
            <div style="width: 25rem;" onclick="{ event.stopPropagation(); }">
              <p style="color: red">THIS MODE IS INTENDED FOR TESTING PURPOSES ONLY.</p>
              <br>
              <p>
                You have stumbled upon the Debug Mode of this site. With this feature, it will
                allow you to cross-check (and even implement/replace) Base64 values based on
                the input that you have entered in the box.
              </p>
              <br>
              <p>
                If you want to learn more or get involved, contact @thebelovedmoon (the
                developer of this site) or make a Pull Request via the button below:
              </p>
              <br>
              <button onclick="{
                window.open('https://github.com/thebelovedmoon/hiddenuser0');
                document.getElementById('dlg').remove();
              }">GitHub repository</button>
              <br>
              <p>Website commands are obtained outside of Debug Mode.</p>
            </div>
          </div>
        `);
      } else {
        return document.body.insertAdjacentHTML("afterbegin", `
          <div id="dlg" onclick="{ document.getElementById('dlg').remove(); }">
            <div onclick="{ event.stopPropagation(); }">
              <p>Commands (all case sensitive):</p>
              <br>
              <p>?</p>
              <p>Debug</p>
              <p>Intellicorp</p>
              <p>Junsui</p>
              <p>Numitrova</p>
              <p>Socials</p>
              <br>
              <button onclick="{
                document.getElementById('dlg').remove();
              }">OK</button>
            </div>
          </div>
        `);
      }
    case "RGVidWc=" : // Debug
      if (urlArgs == "debug") { // debug mode on
        document.body.insertAdjacentHTML("afterbegin", `
          <div id="dlg" onclick="{ document.getElementById('dlg').remove(); }">
            <div onclick="{ event.stopPropagation(); }">
              <p style="color: red;">YOU ARE IN DEBUG MODE!!</p>
              <br>
              <p>Click the button below to exit this mode.</p>
              <br>
              <button onclick="{
                window.location.replace('/');
              }">Exit Debug Mode</button>
            </div>
          </div>
        `);
      } else {
        return document.body.insertAdjacentHTML("afterbegin", `
          <div id="dlg" onclick="{ document.getElementById('dlg').remove(); }">
            <div style="width: 25rem;" onclick="{ event.stopPropagation(); }">
              <p><span style="color: red;">WARNING:</span> This will relaunch the website in Debug Mode.</p>
              <br>
              <p>Click the button below to initiate this mode.</p>
              <br>
              <button onclick="{
                window.location.replace('?m=debug');
              }">Launch in Debug Mode</button>
            </div>
          </div>
        `);
      }
    default:
      return document.body.insertAdjacentHTML("afterbegin", `
        <div id="dlg" onclick="{ document.getElementById('dlg').remove(); }">
          <div onclick="{ event.stopPropagation(); }">
            <p>Code is invalid.</p>
            <br>
            <button onclick="{
              document.getElementById('dlg').remove();
            }">OK</button>
          </div>
        </div>
      `);
  }
}