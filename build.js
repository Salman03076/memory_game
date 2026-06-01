import * as esbuild from "esbuild";
import { copy } from "esbuild-plugin-copy";

esbuild
  .build({
    entryPoints: ["./src/ts/main.ts"],
    bundle: true,
    outdir: "./docs/js",
    plugins: [
      copy({
        resolveFrom: "cwd",
        assets: [
          {
            from: ["./src/Assets/**/*"],
            to: ["./docs/Assets"],
          },
          {
            from: ["./src/index.html"],
            to: ["./docs"],
          },
        ],
      }),
    ],
  })
  .catch(() => process.exit(1));
