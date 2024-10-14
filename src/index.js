const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let i = 0;
    let h = 0;
    let k = 0;
    let start = 0;
    let finish = 10;
    let str = '';
    let res = '';
    let result = '';
    while (i < expr.length / 10) {
      str = expr.slice(start, finish)
      start += 10;
      finish += 10;
      num = Number(str);
      str = String(num);
      while (k < (str.length / 2)) {
        if (str.slice(h, h + 2) === '10') {
          result = `${result}${'.'}`;
          k++;
          h += 2;
        } else if (str.slice(h, h + 2) === '11') {
          result = `${result}${'-'}`;
          k++;
          h += 2;
        } else {
          result = `${result}${' '}`;
          k = 5;
        }
      }
      res = `${res}${MORSE_TABLE[result]}`
      i++;
      k = 0;
      h = 0;
      result = '';
    }
    res = res.split('undefined').join(' ');
    return res;
}

module.exports = {
    decode
}