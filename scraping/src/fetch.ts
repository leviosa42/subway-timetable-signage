import { DOMParser } from "jsr:@b-fuze/deno-dom/wasm-noinit";

// check if file exists

const URL =
  "https://www.navi.kotsu.city.sendai.jp/dia/bustime/subway/subway_print.cgi?PrintCode=9727&PrintDest=2";

try {
  const file = await Deno.stat("data/raw.html");
  if (!file.isFile) throw new Error("not a file");
  const html = await Deno.readTextFile("data/raw.html");
  console.log(html);
} catch {
  const res = await fetch(URL);
  const html = await res.text();
  await Deno.writeTextFile("data/raw.html", html);
  console.log(html);
}
