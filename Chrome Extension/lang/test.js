const langMap = [
  { en: '1', th: 'ๅ' },
  { en: '2', th: '/' },
  { en: '3', th: '_' },
  { en: '4', th: 'ภ' },
  { en: '5', th: 'ถ' },
  { en: '6', th: 'ุ' },
  { en: '7', th: 'ึ' },
  { en: '8', th: 'ค' },
  { en: '9', th: 'ต' },
  { en: '0', th: 'จ' },
  { en: '-', th: 'ข' },
  { en: '=', th: 'ช' }, // First row
  { en: '!', th: '+' },
  { en: '@', th: '๑' },
  { en: '#', th: '๒' },
  { en: '$', th: '๓' },
  { en: '%', th: '๔' },
  { en: '^', th: 'ู' },
  { en: '&', th: '฿' },
  { en: '*', th: '๕' },
  { en: '(', th: '๖' },
  { en: ')', th: '๗' },
  { en: '_', th: '๘' },
  { en: '+', th: '๙' }, // Caps lock first row
  { en: 'q', th: 'ๆ' },
  { en: 'w', th: 'ไ' },
  { en: 'e', th: 'ำ' },
  { en: 'r', th: 'พ' },
  { en: 't', th: 'ะ' },
  { en: 'y', th: 'ั' },
  { en: 'u', th: 'ี' },
  { en: 'i', th: 'ร' },
  { en: 'o', th: 'น' },
  { en: 'p', th: 'ย' },
  { en: '[', th: 'บ' },
  { en: ']', th: 'ล' }, // Second row
  { en: 'Q', th: '๐' },
  { en: 'W', th: '"' },
  { en: 'E', th: 'ฎ' },
  { en: 'R', th: 'ฑ' },
  { en: 'T', th: 'ธ' },
  { en: 'Y', th: 'ํ' },
  { en: 'U', th: '๊' },
  { en: 'I', th: 'ณ' },
  { en: 'O', th: 'ฯ' },
  { en: 'P', th: 'ญ' },
  { en: '{', th: 'ฐ' },
  { en: '}', th: ',' }, // Caps lock second row
  { en: 'a', th: 'ฟ' },
  { en: 's', th: 'ห' },
  { en: 'd', th: 'ก' },
  { en: 'f', th: 'ด' },
  { en: 'g', th: 'เ' },
  { en: 'h', th: '้' },
  { en: 'j', th: '่' },
  { en: 'k', th: 'า' },
  { en: 'l', th: 'ส' },
  { en: ';', th: 'ว' },
  { en: "'", th: 'ง' }, // Third row
  { en: 'A', th: 'ฤ' },
  { en: 'S', th: 'ฆ' },
  { en: 'D', th: 'ฏ' },
  { en: 'F', th: 'โ' },
  { en: 'G', th: 'ฌ' },
  { en: 'H', th: '็' },
  { en: 'J', th: '๋' },
  { en: 'K', th: 'ษ' },
  { en: 'L', th: 'ศ' },
  { en: ':', th: 'ซ' },
  { en: '"', th: '.' }, // Caps lock third row
  { en: 'z', th: 'ผ' },
  { en: 'x', th: 'ป' },
  { en: 'c', th: 'แ' },
  { en: 'v', th: 'อ' },
  { en: 'b', th: 'ิ' },
  { en: 'n', th: 'ื' },
  { en: 'm', th: 'ท' },
  { en: ',', th: 'ม' },
  { en: '.', th: 'ใ' },
  { en: '/', th: 'ฝ' }, // Forth row
  { en: 'Z', th: '(' },
  { en: 'X', th: ')' },
  { en: 'C', th: 'ฉ' },
  { en: 'V', th: 'ฮ' },
  { en: 'B', th: 'ฺ' },
  { en: 'N', th: '์' },
  { en: 'M', th: '?' },
  { en: '<', th: 'ฒ' },
  { en: '>', th: 'ฬ' },
  { en: '?', th: 'ฦ' }, // Caps lock forth row
]
let word = "z,=njv ฌนสด gv' 8iy["
let wordlist = []
for (let i of word) {
  if (i == ' ') {
    if (wordlist.length > 0) {
      let temp = [...wordlist]
      let r = []
      for (let j of temp) {
        r.push(j + ' ')
      }
      wordlist = r
    } else {
      wordlist.push(' ')
    }
  } else {
    let en = langMap.filter((el) => el.en == i)
    let th = langMap.filter((el) => el.th == i)
    if (en.length > 0 && th.length > 0) {
      if (wordlist.length > 0) {
        let temp = [...wordlist]
        let r = []
        for (let j of temp) {
          r.push(j + en[0].th)
          r.push(j + th[0].en)
        }
        wordlist = r
      } else {
        wordlist.push(en[0].th)
        wordlist.push(th[0].en)
      }
    } else if (en.length > 0) {
      if (wordlist.length > 0) {
        let temp = [...wordlist]
        let r = []
        for (let j of temp) {
          r.push(j + en[0].th)
        }
        wordlist = r
      } else {
        wordlist.push(en[0].th)
      }
    } else {
      if (wordlist.length > 0) {
        let temp = [...wordlist]
        let r = []
        for (let j of temp) {
          r.push(j + th[0].en)
        }
        wordlist = r
      } else {
        wordlist.push(th[0].en)
      }
    }
  }
}
wordlist.map(el=>{
    console.log(el)
})
