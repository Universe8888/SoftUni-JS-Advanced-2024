/**
 * This function formats the text from the input field and displays it in the output div.
 * 
 * @param {HTMLInputElement} input - DOM element
 * @param {HTMLDivElement} output - DOM element
 * @returns {undefined} - The function doesn’t return anything – it should modify the DOM directly.
 */

function formatText() {
  const input = document.getElementById('input');
  const output = document.getElementById('output');
  const text = input.value;
  const sentences = text.split('.').filter(sentence => sentence.trim().length > 0);
  const paragraphs = [];
  let count = 0;
  let paragraph = document.createElement('p');

  sentences.forEach((sentence, index) => {
      paragraph.textContent += sentence.trim() + '.';
      count++;

      if (count === 3 || index === sentences.length - 1) {
          paragraphs.push(paragraph);
          paragraph = document.createElement('p');
          count = 0;
      }
  });

  paragraphs.forEach(p => output.appendChild(p));
}