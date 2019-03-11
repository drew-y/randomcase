#!/usr/bin/env node
const arg = process.argv[2];


/** Randomize the casing of a string */
const randomcase = text => text
    .split("")
    .map(char => {
        const val = Math.random();
        if (val >= 0.5) return char.toUpperCase();
        return char.toLowerCase();
    })
    .join("");

const readStdin = _ => {
    process.stdin.setEncoding("utf8");
    process.stdin.on("readable", () => {
        const chunk = process.stdin.read();
        if (chunk === null) return;
        process.stdout.write(randomcase(chunk));
    });
};


const usage =
`
${randomcase("randomcase")}

Randomize the casing of the provided text.

Usage:
randomcase <text>

Text can also be supplied via stdin.

Options:
-h            Show the help menu.
`

const cli = _ => {
    if (arg === "-h") {
        console.log(usage);
        return;
    }

    if (!!arg) {
        console.log(randomcase(arg));
        return;
    }

    if (!process.stdin.isTTY) {
        readStdin();
        return;
    }

    console.log(usage);
}

if (require.main === module) cli();

module.exports = randomcase;
