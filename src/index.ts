import { Context, Schema } from "koishi";

export const name = "weather";
export interface Config {}
const koishi_1 = require("koishi");

export const Config: Schema<Config> = Schema.object({});

export function apply(ctx: Context) {
  ctx
    .command("天气 <location>", "查询未来三天的天气信息")
    .action(async (_, location) => {
      try {
        const data = await ctx.http.get(
          "https://wttr.in/" + location + "?m.png",
          {
            responseType: "arraybuffer",
          }
        );
        return koishi_1.segment.image(data);
      } catch (error) {
        ctx.logger("tools").warn(error);
        return "请求失败。";
      }
    });
}
