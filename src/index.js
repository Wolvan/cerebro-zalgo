"use strict";
const zalgo = require("zalgolize");

module.exports = {
    fn: ({ term, display, actions }) => {
        if (!term.toLowerCase().startsWith("zalgo ")) return;
        let zalgoText = zalgo(term.slice(6), 0.7);
        display({
            title: `Zalgo`,
            subtitle: zalgoText,
            clipboard: zalgoText,
            onSelect: () => actions.copyToClipboard(zalgoText),
            subtitle: zalgoText
        });
    },
    keyword: "zalgo",
    name: "Zalgo Text",
};
