import { Hono } from "hono";
import { TextRepository } from "./infrascructure/memory/textRepository";

const app = new Hono<{ Bindings: CloudflareBindings }>();

app.get("/", (c) => {
  return c.text("Hello Hono🔥");
});

// パスパラメータ
app.get("/texts/:id", async (c) => {
  return c.json(
    (await new TextRepository().getAll()).filter(
      (t) => t.id === c.req.param("id")
    )
  );
});

app.get("/texts", async (c) => {
  return c.json(await new TextRepository().getAll());
});

export default app;
