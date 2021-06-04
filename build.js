// eslint-disable-next-line @typescript-eslint/no-var-requires
const { build } = require("estrella");

const dev = process.argv.includes("--watch") || process.argv.includes("--dev");

build({
    entryPoints: ["src/index.ts"],
    outfile: "dist/index.js",
    platform: "node",
    target: "node16.0",
    external: [
        "next",
        "@mdi/js",
        "@mdi/react",
        "polished",
        "react",
        "react-dom",
        "styled-components",
    ],
    bundle: true,
    watch: dev,
    minify: !dev,
    minifyIdentifiers: !dev,
    minifySyntax: !dev,
    minifyWhitespace: !dev,
    format: "cjs",
    color: true,
    logLevel: "info",
    tslint: false,
});
