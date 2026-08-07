function zero_exec(args) {
  let hookedBins = [
    "/intellicorp/prog.exec",
  ];
  if (args !== "zero.exec") {
    let argSplit = args.replace("zero.exec ", "");
    switch (argSplit) {
      case "-help":
        return document.querySelector("#cmdInterface").insertAdjacentHTML("beforeend",`
          <p>This program is designed as a sandbox hook in order to safely execute</p>
          <p>.exec binaries without tampering with the system installation.</p>
          <br>
          <p>In order to hook a file, pass the binary (.exec) of choice after the</p>
          <p>-hook parameter.</p>
          <br>
          <p>Available parameters for zero.exec:</p>
          <br>
          <p>&emsp;-help - Shows this help prompt.</p>
          <p>&emsp;-hook [prgram].exec - Hooks any .exec binaries to the sandbox.</p>
          <p>&emsp;-view - Views currently-hooked binaries.</p>
          <br>
          <p>NOTE: ${hookedBins.length} ${(() => {
            if (hookedBins.length === 1) { return "binary is" }
            else { return "binaries are" }
          })()} currently hooked to the program.</p>
        `);
      case "-hook":
        let programHook = args.replace("zero.exec -hook ", "");
        if (hookedBins.includes(programHook)) {
          return document.querySelector("#cmdInterface").insertAdjacentHTML("beforeend",`
            <p>Program already sandboxed: ${programHook}</p>
          `);
        } else {
          return document.querySelector("#cmdInterface").insertAdjacentHTML("beforeend",`
            <p>Not implemented: Work-in-progress</p>
          `);
        }
      case "-view":
        document.querySelector("#cmdInterface").insertAdjacentHTML("beforeend",`
          <p>Currently-hooked programs:</p>
          <br>
        `);
        for (let b = 0; b < hookedBins.length; b++) {
          document.querySelector("#cmdInterface").insertAdjacentHTML("beforeend", `
            <p>&emsp;-${hookedBins[b]}</p>
          `);
        }
        return document.querySelector("#cmdInterface").insertAdjacentHTML("beforeend",`
          <br>
          <p>The sandbox is currently running, and will run on startup.</p>
        `);
      case "/intellicorp/prog.exec":
        let intellicorp_prog_exec_args = args.replace("zero.exec /intellicorp/", "")
        localStorage.setItem("/intellicorp/prog.exec isSandboxed", true);
        intellicorp_prog_exec(intellicorp_prog_exec_args);
        return localStorage.setItem("/intellicorp/prog.exec isSandboxed", false);
      default:
        return zero_exec("zero.exec -view")
    }
  } else {
    return zero_exec("zero.exec -view")
  }
}