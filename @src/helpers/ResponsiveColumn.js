
import { fromInch } from '../core/Context';


const ColumnRatio = 9.0 / 16.0;
const MinColumnWidthInch = 3.6;

// Resolving sizes of virtual column inside full-height sections of landing pages
// Do not use this in web-applications (there height must be non-changeable)
export function toResponsiveColumn (width, height, maxNumberOfColumns = 2) {

    if (width <= 0 || height <= 0 || maxNumberOfColumns <= 0) {
        throw Error('Invalid arguments');
    }

    const minColumnWidth = fromInch(MinColumnWidthInch);

    let numberOfColumns = maxNumberOfColumns;
    while (numberOfColumns > 1 && widthInch < numberOfColumns * minColumnWidth) {
        numberOfColumns--;
    }

    const hColumnWidth = height * ColumnRatio;
    const wColumnWidth = width / numberOfColumns;
    const realColumnWidth = Math.min(wColumnWidth, hColumnWidth);

    if (numberOfColumns === 1 || realColumnWidth < minColumnWidth) {
        return {
            width,
            height: width <= height ? height : width / ColumnRatio // horizontal mode is "zooming" mode
        };
    } else { // big screen
        return {
            width: realColumnWidth,
            height: realColumnWidth / ColumnRatio,
            numberOfColumns
        };
    }

}
