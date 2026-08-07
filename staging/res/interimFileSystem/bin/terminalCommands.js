function emitCommandOutput(message) {
  return emitTerminalLine(String(message));
}

function postCommand() {
  document.querySelector("#cmdInterface").insertAdjacentHTML("beforeend", "<br>");
  intellicorpTerminal();
}

function helpList() {
  const cmds = [
    "?",
    "cd",
    "cls",
    "dir",
    "exit",
    "help",
    "logoff",
    "ls",
    "poweroff",
    "reboot",
    "whoami",
  ];
  return cmds.sort().join(", ");
}

function cmdNotFound(cmd) {
  if (!cmd) { return intellicorpTerminal(); }
  emitCommandOutput(`'${cmd}' is not recognized as an internal or external command,`);
  emitCommandOutput("operable program or script file.");
  return null;
}

function findExecutableLocation(executableName) {
  const name = String(executableName || "").trim();
  if (!name) { return null; }
  const walk = (entries, currentPath = "/") => {
    if (!Array.isArray(entries)) { return null; }
    for (const entry of entries) {
      if (typeof entry === "string") {
        if (entry === name) { return currentPath; }
        continue;
      }
      if (entry && typeof entry === "object") {
        const [directoryPath] = Object.keys(entry);
        if (!directoryPath) { continue; }
        const found = walk(entry[directoryPath], directoryPath);
        if (found) { return found; }
      }
    }
    return null;
  };
  return walk(interimFileSystem);
}

function resolveExecutableTarget(pathOrName) {
  const input = String(pathOrName || "").trim();
  if (!input) { return null; }
  const resolution = resolvePath(input),
    executableName = input.replace(/^\/+/, "").split("/").pop();
  if (resolution && !resolution.error && resolution.type === "file") {
    const name = String(resolution.target || ""),
      location = findExecutableLocation(name);
    return {
      name,
      path: String(resolution.finalPath || `/${name}`),
      directory: location || "/"
    };
  }
  const location = findExecutableLocation(executableName);
  if (!location) { return null; }
  return {
    name: executableName,
    path: location === "/"
      ? `/${executableName}`
      : `${location}/${executableName}`,
    directory: location
  };
}

function runExecutable(name, args) {
  const resolved = resolveExecutableTarget(name);
  if (!resolved) {
    cmdNotFound(name);
    return false;
  }
  const executableName = resolved.name,
    currentDirectory = localStorage.getItem("PRINT_WORKING_DIRECTORY") || "/",
    allowedDirectory = resolved.directory || "/";
  if (allowedDirectory !== currentDirectory) {
    cmdNotFound(name);
    return false;
  }
  if (executableName === "sys.exec") {
    return typeof sys_exec === "function"
      ? sys_exec(args)
      : emitCommandOutput("Program error. Please try again later.");
  }
  if (executableName === "zero.exec") {
    return typeof zero_exec === "function"
      ? zero_exec(args)
      : emitCommandOutput("Program error. Please try again later.");
  }
  if (executableName === "prog.exec" && localStorage.getItem("PRINT_WORKING_DIRECTORY") === "/intellicorp") {
    return typeof intellicorp_prog_exec === "function"
      ? intellicorp_prog_exec(args)
      : emitCommandOutput("Program error. Please try again later.");
  }
  return false;
}

function execCommands(args) {
  const input = String(args || "").trim();
  if (!input) { return postCommand(); }
  const [command] = input.split(/\s+/),
    commandName = command.toLowerCase();
  if (commandName === "cd") {
    cdir(input);
    return postCommand();
  }
  if (commandName === "dir" || commandName === "ls") {
    lsdir(input);
    return postCommand();
  }
  if (commandName === "help" || commandName === "?") {
    emitCommandOutput("Useful commands:");
    emitCommandOutput(`<br>`);
    emitCommandOutput(helpList());
    emitCommandOutput(`<br>`);
    emitCommandOutput("You can launch a program as {program}.exec. For more information about that");
    emitCommandOutput("specific program, launch {program}.exec -help.");
    emitCommandOutput(`<br>`);
    emitCommandOutput("Please note that this program is still a work-in-progress. For more");
    emitCommandOutput("information, contact INTERIM support.");
    return postCommand();
  }
  if (commandName === "exit" || commandName === "logoff") {
    return typeof sys_exec === "function"
      ? sys_exec("sys.exec -logoff")
      : emitCommandOutput("Program error. Please try again later.");
  }
  if (commandName === "reboot") {
    return typeof sys_exec === "function"
      ? sys_exec("sys.exec -reboot")
      : emitCommandOutput("Program error. Please try again later.");
  }
  if (commandName === "poweroff") {
    return typeof sys_exec === "function"
      ? sys_exec("sys.exec -poweroff")
      : emitCommandOutput("Program error. Please try again later.");
  }
  if (commandName === "whoami") {
    emitCommandOutput("INTERIM\\hiddenuser0");
    return postCommand();
  }
  if (commandName === "cls") {
    document.querySelector("#cmdInterface").innerHTML = "";
    return postCommand();
  }
  const executableMatch = input.match(/^([./A-Za-z0-9_.-]+\.exec)(?:\s+.*)?$/i);
  if (executableMatch) {
    runExecutable(executableMatch[1], input);
    return postCommand();
  }
  cmdNotFound(input);
  return postCommand();
}