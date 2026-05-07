export function getCurrentVersion() {
  return {
    name: "Hegay OS Supreme",
    version: "1.0.0",
    build: Date.now().toString(),
    timestamp: new Date().toISOString(),
  };
}

export function bumpVersion(type: "patch" | "minor" | "major" = "patch") {
  const current = getCurrentVersion();
  const [major, minor, patch] = current.version.split(".").map(Number);

  let newVersion = current.version;

  if (type === "patch") newVersion = `${major}.${minor}.${patch + 1}`;
  if (type === "minor") newVersion = `${major}.${minor + 1}.0`;
  if (type === "major") newVersion = `${major + 1}.0.0`;

  return {
    oldVersion: current.version,
    newVersion,
    type,
    timestamp: new Date().toISOString(),
  };
}
