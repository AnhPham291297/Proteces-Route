export function hexToRgb(hex) {
  // var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.test(hex);
  // console.log(hex);
  // console.log(result);
  if (result) {
    let resultHex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    let r = parseInt(resultHex[1], 16);
    let g = parseInt(resultHex[2], 16);
    let b = parseInt(resultHex[3], 16);
    return `rgb(${r}, ${g}, ${b})`; //return 23,14,45 -> reformat if needed
  } else {
    return alert("Error color format");
  }
  // return null;
}
