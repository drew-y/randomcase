#!/usr/bin/env node
const arg = process.argv[2];


/** Randomize the casing of a string */
export const randomcase = (text: string) => text
    .split("")
    .map(char => {
        const val = Math.random();
        if (val >= 0.5) return char.toUpperCase();
        return char.toLowerCase();
    })
    .join("");

const readStdin = () => {
    process.stdin.setEncoding("utf8");
    process.stdin.on("readable", () => {
        const chunk = process.stdin.read() as string;
        if (chunk === null) return;
        process.stdout.write(randomcase(chunk));
    });
};


const usage =
`
${randomcase("randomcase")}

Randomize the casing of the provided text.

Usage:
rcase <text>

Text can also be supplied via stdin.

Options:
-h            Show the help menu.
`

const cli = () => {
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
