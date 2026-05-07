export function getOSVersion() {
  return {
    name: "Hegay OS Supreme",
    version: "1.0.0",
    build: Date.now().toString(),
    releasedAt: new Date().toISOString(),
  };
}

export function bumpVersion(type: "patch" | "minor" | "major" = "patch") {
  const version = getOSVersion();

  const [major, minor, patch] = version.version.split(".").map(Number);

  let newVersion = version.version;

  if (type === "patch") newVersion = `${major}.${minor}.${patch + 1}`;
  if (type === "minor") newVersion = `${major}.${minor + 1}.0`;
  if (type === "major") newVersion = `${major + 1}.0.0`;

  return {
    oldVersion: version.version,
    newVersion,
    type,
    timestamp: new Date().toISOString(),
  };
}
