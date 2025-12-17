module.exports = {
    inputDir: "./icons",
    outputDir: "./fonts",

    // Font name
    name: "glicons",

    // Font types to generate
    fontTypes: ["woff2", "woff", "ttf"],

    // Asset types to generate
    assetTypes: ["css", "html", "json"],

    // CSS options
    prefix: "ri",
    tag: "",

    // Fixed codepoints
    codepoints: {
        "arrow-down-s-fill": 0xea4d
    },

    descent: 0,
    fontHeight: 24,

    getIconId(opts) { return opts.basename; },
};
