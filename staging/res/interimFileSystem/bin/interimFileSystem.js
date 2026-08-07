// INTERIM File System

let interimFileSystem = [
    { "/bin": [
      // SYSDIR
    ] },
    { "/boot": [
      // SYSDIR
    ] },
    { "/config": [
      // SYSDIR
    ] },
    { "/crash": [
      // FS TBD
    ] },
    { "/intellicorp": [
      "prog.exec",
      "promo.png",
    ] },
    { "/storage": [
      // SYSDIR
    ] },
    { "/user": [
      // FS TBD
    ] },
    "dbgview.exec",
    "GettingStarted.man",
    "PrograMonitor.exec",
    "sys.exec",
    "zero.exec",
  ],
  sysDirs = [
    "/bin",
    "/boot",
    "/config",
    "/storage",
  ];

const SYSTEM_DIRS = sysDirs, 
  fileTree = interimFileSystem;

let currentDirectory = fileTree, 
  historyStack = [];

function emitTerminalLine(message) {
  if (typeof document !== "undefined" && document.querySelector) {
    const cmdInterface = document.querySelector("#cmdInterface");
    if (cmdInterface) { return cmdInterface.insertAdjacentHTML("beforeend", `<p>${String(message)}</p>`); }
  }
  return String(message);
}

function updateStorage(pathValue) {
  if (typeof localStorage !== "undefined") { localStorage.setItem("PRINT_WORKING_DIRECTORY", pathValue || "/"); }
}

function normalizePathInput(pathString = "") {
  const currentPath = (typeof localStorage !== "undefined" && localStorage.getItem("PRINT_WORKING_DIRECTORY")) || "/";
  if (!pathString || pathString === ".") { return currentPath; }
  if (pathString === "..") {
    if (currentPath === "/") { return "/"; }
    return currentPath.replace(/\/[^/]+\/?$/, "/") || "/";
  }
  const segments = pathString.startsWith("/")
    ? []
    : currentPath.split("/").filter(Boolean);
  pathString.split("/").filter(Boolean).forEach((segment) => {
    if (segment === ".") { return; }
    if (segment === "..") {
      if (segments.length > 0) { segments.pop(); }
      return;
    }
    segments.push(segment);
  });
  return `/${segments.join("/")}`;
}

function resolvePath(pathString = "") {
  const normalizedPath = normalizePathInput(pathString);
  if (normalizedPath === "/") { return { type: "directory", target: fileTree, history: [], finalPath: "/" }; }
  const segments = normalizedPath.split("/").filter(Boolean),
    simulatedHistory = [];
  let targetArray = fileTree,
    currentSimulatedPath = "/";
  for (let i = 0; i < segments.length; i += 1) {
    const segment = segments[i],
      part = `/${segment}`;
    if (currentSimulatedPath === "/" && SYSTEM_DIRS.includes(part)) {
      emitTerminalLine(`Access is denied: ${part} is a SYSTEM directory`);
      return { error: true };
    }
    const objectMatch = targetArray.find(item => typeof item === "object" && item !== null && Object.keys(item)[0] === part);
    if (!objectMatch) {
      const fileMatch = targetArray.find(item => typeof item === "string" && `/${item}` === part);
      if (i === segments.length - 1 && fileMatch) {
        return {
          type: "file",
          target: fileMatch,
          finalPath: currentSimulatedPath === "/"
            ? part
            : `${currentSimulatedPath}${part}`
        };
      }
      return { error: true };
    }
    simulatedHistory.push({
      dirArray: targetArray,
      name: currentSimulatedPath
    });
    targetArray = objectMatch[part];
    currentSimulatedPath = currentSimulatedPath === "/"
      ? part
      : `${currentSimulatedPath}${part}`;
  }
  return {
    type: "directory",
    target: targetArray,
    history: simulatedHistory,
    finalPath: currentSimulatedPath
  };
}

function getCommandArgument(input, commandName) {
  const value = String(input || "").trim(),
    match = value.match(new RegExp(`^${commandName}\\b\\s*(.*)$`, "i"));
  return match
    ? match[1].trim()
    : value;
}

function lsdir(targetPath = "") {
  const cleanTarget = getCommandArgument(targetPath, "(?:dir|ls)"),
    resolution = resolvePath(cleanTarget || "");
  if (resolution && resolution.error) {
    emitTerminalLine("The system cannot find the path specified.");
    return null;
  }
  if (resolution.type === "file") { return emitTerminalLine(resolution.target); }
  const targetDir = resolution.target || [];
  if (!Array.isArray(targetDir) || targetDir.length === 0) { return; }
  const items = targetDir.map(item => {
    if (typeof item === "string") { return item; }
    return Object.keys(item)[0];
  });
  return emitTerminalLine(items.sort().join("&emsp;"));
}

function cdir(target) {
  const cleanTarget = getCommandArgument(target, "cd");
  if (!cleanTarget || cleanTarget === ".") { return emitTerminalLine(""); }
  if (cleanTarget === "..") {
    if (historyStack.length === 0) {
      currentDirectory = fileTree;
      updateStorage("/");
      return emitTerminalLine("");
    }
    const parent = historyStack.pop();
    currentDirectory = parent.dirArray;
    updateStorage(parent.name || "/");
    return emitTerminalLine("");
  }
  const resolution = resolvePath(cleanTarget);
  if (resolution && resolution.error) {
    emitTerminalLine("The system cannot find the path specified.");
    return null;
  }
  if (resolution.type === "file") { return emitTerminalLine(`The directory name is invalid: ${cleanTarget} is NOT a directory`); }
  currentDirectory = resolution.target;
  historyStack = resolution.history;
  updateStorage(resolution.finalPath);
  return emitTerminalLine("");
}