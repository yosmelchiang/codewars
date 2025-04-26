/**
 * Your mission is to implement a function that converts the following characters:
< --> &lt;
> --> &gt;
" --> &quot;
& --> &amp;
 */

function htmlspecialchars(formData) {
  return formData.split('').map(c => {
    if(c === '<') return '&lt;';
    if(c === '>') return '&gt;';
    if(c === '"') return '&quot;';
    if(c === '&') return '&amp;';
    return c;
  }).join('');
}
  
//   console.log(htmlspecialchars("<h2>Hello World</h2>")) // "&lt;h2&gt;Hello World&lt;/h2&gt;"

module.exports = htmlspecialchars;