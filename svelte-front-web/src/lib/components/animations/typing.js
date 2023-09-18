// 간단하게 typing 효과를 줄 수 있는 js 모듈입니다.
// color 부분에서는 0 : working[color], 1 : done[color] 형식입니다. 
// blockClass에서는 지정한 class 이름에 따라 모두 작동합니다.
// ex) <div class="wordCard" typingBlock>
// 만약 텍스트를 외부에서 불러오는 모듈과 함께 쓸 경우,
// 이 함수를 나중에 실행시키는 방법을 이용해주시길 바랍니다.
// ex) svelte - onMount() 내에서 typeKorean() 실행.

const fontColor = ["white", "black"];
const backColor = ["gray", "white"];
const timeVal = 30;
const blockClass = "[typingBlock]"

export const typeKorean = () => {
if (!String.prototype.toKorChars) {
    String.prototype.toKorChars = function () {
      const cCho = "ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ";
      const cJung = "ㅏㅐㅑㅒㅓㅔㅕㅖㅗㅘㅙㅚㅛㅜㅝㅞㅟㅠㅡㅢㅣ";
      const cJong = " ㄱㄲㄳㄴㄵㄶㄷㄹㄺㄻㄼㄽㄾㄿㅀㅁㅂㅄㅅㅆㅇㅈㅊㅋㅌㅍㅎ";
      let chars = [];
  
      for (const char of this) {
        let cCode = char.charCodeAt(0);
        if (cCode === 32 || cCode < 0xac00 || cCode > 0xd7a3) {
          chars.push(char);
          continue;
        }
  
        cCode -= 0xac00;
        const jong = cCode % 28;
        const jung = Math.floor((cCode - jong) / 28) % 21;
        const cho = Math.floor((cCode - jong) / 28 / 21);
        chars.push(cCho[cho], String.fromCharCode(44032 + cho * 588 + jung * 28));
        if (jong !== 0) {
          chars.push(String.fromCharCode(44032 + cho * 588 + jung * 28 + jong));
        }
      }
      return chars;
    };
  }

  const elements = document.querySelectorAll(blockClass); // 모든 요소를 가져옵니다.
  if (!elements.length) {
    console.error("No elements with 'typingBlock' attribute found.");
    return;
  }

  elements.forEach((typingBlock) => {
    const result = typingBlock.innerText || typingBlock.textContent;
    const typeing1 = Array.from(result).map(char => char.toKorChars());
    let text = '';
    typingBlock.innerHTML = ''; // 텍스트를 초기화합니다.
    let i = 0, j = 0;

    const inter = setInterval(() => {
      if (i < typeing1.length) {
        const newChar = document.createElement("span");
        newChar.style.backgroundColor = backColor[0];
        newChar.style.color = fontColor[0]; // 입력 중인 글자의 색을 빨강색으로 설정합니다.

        if (j === 0) {
          newChar.textContent = typeing1[i][j];
          typingBlock.appendChild(newChar);
        } else {
          newChar.textContent = typeing1[i][j];
          typingBlock.lastChild.remove(); // 이전에 추가한 span을 제거합니다.
          typingBlock.appendChild(newChar);
        }

        if (++j === typeing1[i].length) {
          newChar.style.backgroundColor = backColor[1];
          newChar.style.color = fontColor[1]; // 입력이 완료된 글자의 색을 검은색으로 변경합니다.
          text += newChar.textContent;
          i++;
          j = 0;
        }
      } else {
        clearInterval(inter);
      }
    }, timeVal);
  });
};