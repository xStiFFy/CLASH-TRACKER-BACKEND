export function createNumberRangeSet(
    start: number,
    end: number
) {
    return new Set(
        Array.from(
            { length: end - start + 1 },
            (_, i) => start + i
        )
    );
}