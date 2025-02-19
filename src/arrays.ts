/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const output: number[] = [];
    if (numbers.length === 0) {
        return output;
    } else if (numbers.length === 1) {
        output.push(numbers[0]);
        output.push(numbers[0]);
        return output;
    }
    output.push(numbers[0]);
    output.push(numbers[numbers.length - 1]);
    return output;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((num: number): number => num * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const integer = numbers.map((word: string): number =>
        isNaN(parseInt(word)) ? 0 : parseInt(word)
    );
    return integer;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const noDollar = amounts.map((word: string): number =>
        isNaN(parseInt(word.replace("$", "")))
            ? 0
            : parseInt(word.replace("$", ""))
    );
    return noDollar;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const noQuestion = messages.filter(
        (message: string): boolean => !message.includes("?")
    );
    const upperCase = noQuestion.map((word: string): string =>
        word.at(word.length - 1) === "!" ? word.toUpperCase() : word
    );
    return upperCase;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const four = words.filter((word: string): boolean => word.length < 4);
    return four.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const yes = colors.map(
        (color: string): boolean =>
            color === "red" || color === "blue" || color === "green"
    );
    const allTrue = yes.every((color: boolean): boolean => color);
    return allTrue;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    let math = "0";
    if (addends.length === 0) {
        math = "0";
    } else {
        math = addends.join("+");
    }
    const sum = addends.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    const output = sum + "=" + math;
    return output;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const output = [...values];
    const firstNegative = values.findIndex((num: number): boolean => num < 0);
    if (firstNegative === -1) {
        const sum = values.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        );
        output.push(sum);
    } else {
        const temp = values.slice(0, firstNegative);
        const sum = temp.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        );
        output.splice(firstNegative + 1, 0, sum);
    }
    return output;
}
