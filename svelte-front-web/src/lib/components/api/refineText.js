const mark = ["이다.", "것은?"]

function refineText(el) {
  let text = el.replace(/\n/g, " ");
  let refinedText = [];
 
  for (let i=0; i<mark.length; i++) {
    const cutOffIndex = text.indexOf(mark[i]);
    if (cutOffIndex !== -1) {
      refinedText.push(text.substring(0, cutOffIndex + 
        mark[i].length));
    }
  }
  const minText = refinedText.reduce((min, cur) => 
    (min.length <= cur.length ? min : cur));
  return minText;
}

export { refineText };