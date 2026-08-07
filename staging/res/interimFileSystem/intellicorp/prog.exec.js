function intellicorp_prog_exec(args) {
  if (args !== "prog.exec" && localStorage.getItem("/intellicorp/prog.exec isSandboxed") === true) {
    let argSplit = args.replace("prog.exec ", "");
    switch (argSplit) {
      case "-web":
        return document.querySelector("#cmdInterface").insertAdjacentHTML("beforeend",`
          <p>Opening website: https://intellicorp.wixsite.com/intellicorp</p>
        `);
      default:
        return document.querySelector("#cmdInterface").insertAdjacentHTML("beforeend",`
          <p>Unable to run program: It is being sandboxed by /zero.exec</p>
        `);
    }
  } else {
    return document.querySelector("#cmdInterface").insertAdjacentHTML("beforeend",`
      <p>Unable to run program: It is being sandboxed by /zero.exec</p>
    `);
  }
}