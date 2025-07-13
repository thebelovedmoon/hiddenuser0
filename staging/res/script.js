let urlArgs = new URLSearchParams(window.location.search).get("m");

function syntaxValidator() {
  let inp = document.getElementById("synInput");
  inp.addEventListener("keydown", (k) => {
    if (k.key === "Enter") {
      if (urlArgs == "debug") { // debug mode on
        document.getElementById("synInput").blur();
        document.body.insertAdjacentHTML("afterbegin", `
          <div id="dlg">
            <div>
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
      document.body.insertAdjacentHTML("afterbegin", `
        <div id="dlg">
          <iframe
            src="/numitrova.html"
            style="width: 50rem; max-width: 100%; height: auto; aspect-ratio: 16 / 10; padding: 0;"
          ></iframe>
        </div>
      `);
      return;
    case "SnVuc3Vp": // Junsui
      document.body.insertAdjacentHTML("afterbegin", `
        <div id="dlg">
          <div style="width: 25rem;">
            <p>This will launch the program in another window. Click the button below to continue.</p>
            <br>
            <button onclick="{
              window.open('https://www.wattpad.com/story/215143115');
              document.getElementById('dlg').remove();
            }">Read the story</button>
          </div>
        </div>
      `);
      return;
    case "SW50ZWxsaWNvcnA=": // Intellicorp
      document.body.insertAdjacentHTML("afterbegin", `
        <div id="dlg">
          <div style="width: 25rem;">
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
      document.body.insertAdjacentHTML("afterbegin", `
        <div id="dlg">
          <div style="width: 25rem;">
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
      return;
    case "Pw==": // ?
      if (urlArgs == "debug") { // debug mode on
        document.body.insertAdjacentHTML("afterbegin", `
          <div id="dlg">
            <div style="width: 25rem;">
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
        document.body.insertAdjacentHTML("afterbegin", `
          <div id="dlg">
            <div>
              <p>Commands:</p>
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
      return;
    case "RGVidWc=" : // Debug
      if (urlArgs == "debug") { // debug mode on
        document.body.insertAdjacentHTML("afterbegin", `
          <div id="dlg">
            <div>
              <p style="color: red;">YOU ARE IN DEBUG MODE!!</p>
              <br>
              <button onclick="{
                document.getElementById('dlg').remove();
              }">OK</button>
            </div>
          </div>
        `);
      } else {
        document.body.insertAdjacentHTML("afterbegin", `
          <div id="dlg">
            <div style="width: 25rem;">
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
      return;
    default:
      document.body.insertAdjacentHTML("afterbegin", `
        <div id="dlg">
          <div>
            <p>Code is invalid.</p>
            <br>
            <button onclick="{
              document.getElementById('dlg').remove();
            }">OK</button>
          </div>
        </div>
      `);
      throw new Error("Code is invalid.");
  }
}