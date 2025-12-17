module.exports = {
    inputDir: "./icons",
    outputDir: "./fonts",

    // Font name
    name: "glicons",

    // Font types to generate
    fontTypes: ["woff2", "woff", "ttf", "eot", "svg"],

    // Asset types to generate
    assetTypes: ["css", "html", "json"],

    // CSS options
    prefix: "ri",

    getIconId(opts) { return opts.basename; },
};
