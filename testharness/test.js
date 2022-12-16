async function asyncUrlImport(url) {
    let response = await fetch (url);
    const blob = await response.blob();
    const objectURL = URL.createObjectURL(blob);
    return await import(objectURL);;
}

import { name, draw, reportArea, reportPerimeter } from './square.mjs';
import randomSquare from './square.mjs';

asyncUrlImport("http://localhost/testharness/canvas.mjs").then((canvas) => {

    let myCanvas = canvas.create('myCanvas', document.body, 480, 320);
    let reportList = canvas.createReportList(myCanvas.id);

    let square1 = draw(myCanvas.ctx, 50, 50, 100, 'blue');
    reportArea(square1.length, reportList);
    reportPerimeter(square1.length, reportList);

    // Use the default
    let square2 = randomSquare(myCanvas.ctx);

});
