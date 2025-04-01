// Process template strings with a function

function highlight(strings, ...values) {
    return strings.reduce((result, str, i) =>
        `${result}${str}<mark>${values[i] || ''}</mark>`, ''
    )
};

const name = "Alice";
console.log(highlight`Hello, ${name}!`); // Hello, <mark>Alice</mark>!<mark></mark>