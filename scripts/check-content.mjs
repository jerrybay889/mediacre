import { readFile } from "node:fs/promises";
const projects=JSON.parse(await readFile(new URL("../content/projects.json",import.meta.url),"utf8"));
const legal=JSON.parse(await readFile(new URL("../content/legal.json",import.meta.url),"utf8"));
const copy=JSON.parse(await readFile(new URL("../content/site-copy.json",import.meta.url),"utf8"));
if(!Array.isArray(projects)||!projects.length)throw new Error("projects.json must contain projects");
for(const project of projects)for(const key of ["slug","client","title","summary","image"])if(!project[key])throw new Error(`Project is missing ${key}`);
if(legal.status!=="PLACEHOLDER_PENDING_VERIFICATION")throw new Error("Legal placeholders must remain explicit until verified");
if(!copy.hero?.headline?.length||!Array.isArray(copy.services))throw new Error("site-copy.json is incomplete");
console.log(`Content validation passed (${projects.length} projects; legal placeholders preserved).`);
