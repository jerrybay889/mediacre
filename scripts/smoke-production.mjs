import { spawn } from "node:child_process";

const child = spawn(process.execPath, ["node_modules/next/dist/bin/next", "start", "-p", "3000"], { stdio: ["ignore", "pipe", "pipe"] });
let logs = "";
child.stdout.on("data", (chunk) => { logs += chunk; });
child.stderr.on("data", (chunk) => { logs += chunk; });
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

try {
  let ready = false;
  for (let attempt = 0; attempt < 30; attempt += 1) {
    try { const response = await fetch("http://127.0.0.1:3000/api/health"); if (response.ok) { ready = true; break; } } catch {}
    await delay(1000);
  }
  if (!ready) throw new Error(`Production server did not become ready.\n${logs}`);
  for (const path of ["/", "/work", "/contact", "/api/health"]) {
    const response = await fetch(`http://127.0.0.1:3000${path}`);
    const body = await response.text();
    if (!response.ok) throw new Error(`${path} returned ${response.status}`);
    console.log(`${path} ${response.status} ${Buffer.byteLength(body)} bytes ${response.headers.get("content-type")}`);
  }
} finally {
  child.kill();
}
