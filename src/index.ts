import { Context, Schema, h } from "koishi";

export const name = "weather";
export interface Config {}

export const Config: Schema<Config> = Schema.object({});

export function apply(ctx: Context) {
  ctx
    .command("天气 <location>", "根据wttr.in获取天气预报")
    .action(async (_, location) => {
    return h("image", { url: "https://wttr.in/" + location + ".png?m&lang=zh" });
    });
}
