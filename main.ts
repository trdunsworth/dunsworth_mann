import { App, staticFiles } from "fresh";
import { type State } from "./utils.ts";

export const app = new App<State>();

app.use(async (ctx) => {
  const response = await ctx.next();
  response.headers.set("Cache-Control", "no-store, max-age=0, must-revalidate");
  response.headers.set("Pragma", "no-cache");
  response.headers.set("Expires", "0");
  return response;
});

app.use(staticFiles());

// Include file-system based routes here
app.fsRoutes();
