// 日付を文字列で受け取って、yyyy.MMの形式に変換する
export const formatDate = (date: string) => {
  const dateObj = new Date(date);
  const year = dateObj.getFullYear();
  // 月はゼロパディングする
  const month = `0${dateObj.getMonth() + 1}`.slice(-2);
  return `${year}.${month}`;
}

export const formatPubDate = (date: string) => {
  const dateObj = new Date(date);
  const year = dateObj.getFullYear();
  // 月はゼロパディングする
  const month = `0${dateObj.getMonth() + 1}`.slice(-2);
  // 日はゼロパディングする
  const day = `0${dateObj.getDate()}`.slice(-2);
  return `${year}.${month}.${day}`;
}

// web標準のカラー配列
const COLORS = [
  'red', 'pink', 'grape', 'violet', 'indigo', 'blue', 'cyan', 'green', 'lime', 'yellow', 'orange', 'teal'
];

// 文字列からカラーコードを生成する
export const stringToColor = (str: string) => {
  // 文字列を数値に変換
  const num = str.split('').reduce((acc, cur) => acc + cur.charCodeAt(0), 0);
  const index = num % COLORS.length;
  return COLORS[index];
}

// 全角は1文字、半角は0.5文字としてカウントし、特定の文字数以上は省略する
export const truncate = (str: string, length: number) => {
  let count = 0;
  let result = '';
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char.match(/[^\x01-\x7E]/)) {
      count += 1;
    } else {
      count += 0.5;
    }
    if (count > length) {
      break;
    }
    result += char;
  }
  // 文字長を超えていたら末尾に...を付与する
  if (count > length) {
    result += '...';
  }
  return result;
}