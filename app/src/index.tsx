import { Hono } from "hono";
// import { html } from "hono/html";
// import { FC } from "hono/jsx";
// import { css, Style } from "hono/css";

const app = new Hono();

// type Timetable = {
//   timetable: string[];
//   base_date: string;
//   amount: number;
//   is_weekday: boolean;
// };

// /**
//  * fetch timetable from api
//  * @param base_date {string} Base date format: ISO 8601 (YYYY-MM-DDTHH:mm:ssZ)
//  * @param amount {number} Amount of timetable to fetch
//  * @returns {Promise<{
//  *  timetable: string[],
//  *  base_date: Date,
//  *  amount: number,
//  *  is_weekday: boolean
//  * }>} Timetables
//  */
// async function fetchTimetable(
//   { base_date, amount }: { base_date: Date; amount: number },
// ): Promise<Timetable> {
//   const formatted_date = base_date.toISOString();

//   const response = await fetch(
//     `http://localhost:8080/api/v1/timetable?base_date=${formatted_date}&amount=${amount}`,
//   );
//   return response.json() as Promise<Timetable>;
// }

// async function fetchMockTimetable(
//   { base_date, amount }: { base_date: Date; amount: number },
// ): Promise<Timetable> {
//   const _timetable = [
//     "07:00",
//     "07:30",
//     "08:00",
//     "08:30",
//     "09:00",
//     "09:30",
//     "10:00",
//     "10:30",
//   ].map((time) => base_date.toISOString().replace(/T\d{2}:\d{2}/, time));
//   return {
//     timetable: _timetable.slice(0, amount),
//     base_date: base_date.toISOString(),
//     amount: amount,
//     is_weekday: true,
//   };
// }

// app.get("/", async (c) => {
//   const data = await fetchMockTimetable({ base_date: new Date(), amount: 8 });
//   const styles = css`
//     background-color: #103030;
//     color: white;
//   `;
//   return c.html(
//     <html>
//       <head>
//         <Style />
//       </head>
//       <body class={styles}>
//         <div>
//           <h1>Hello, World!</h1>
//         </div>
//       </body>
//     </html>,
//   );
// });

// Deno.serve(app.fetch);

app.get("/", (c) => {
  return c.html(
    <html>
      <head>
      </head>
      <body>
        <div>
          <h1>Hello, World!</h1>
        </div>
      </body>
    </html>,
  );
});

export default app;
