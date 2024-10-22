// const HTML_PATH = new URL("../data/raw.html", import.meta.url);

import { DOMParser, Element } from "jsr:@b-fuze/deno-dom";

const HTML_PATH = "data/raw.html";

const html = await Deno.readTextFile(HTML_PATH);

// ----

const DOM = new DOMParser().parseFromString(html, "text/html");
const targets = DOM.querySelectorAll(
  "body > p > table.timetable_p_s > tbody > tr",
);

for await (const qs of ["td:first-child", "td:last-child"]) {
  const preproc = [...targets]
    .filter((tr) => tr.id !== "dest" && tr.id !== "day")
    .map((tr) => {
      const h = tr.getElementById("time")!.innerText.trim();
      const ms = tr.querySelector(qs)!.innerText //
        .replace(/\n/g, "")
        .trim()
        .split("\u00A0");
      if (ms && ms[0] === "" && ms.length === 1) ms.shift();
      return { h, ms };
    });

  // console.log(JSON.stringify(preproc));
  // console.log(preproc);

  const data = preproc.map(({ h, ms }) => {
    const timetable = ms.map((m) =>
      `${h.padStart(2, "0")}:${m.padStart(2, "0")}`
    );
    return timetable;
  }).flat().join("\n");

  // console.log(data);

  if (qs === "td:first-child") {
    await Deno.writeTextFile("data/timetable_day.txt", data);
  } else if (qs === "td:last-child") {
    await Deno.writeTextFile("data/timetable_weekend-holiday.txt", data);
  }
}
