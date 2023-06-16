// 日付を文字列で受け取って、yyyy.MMの形式に変換する
export const formatDate = (date: string) => {
  const dateObj = new Date(date);
  const year = dateObj.getFullYear();
  // 月はゼロパディングする
  const month = `0${dateObj.getMonth() + 1}`.slice(-2);
  return `${year}.${month}`;
}

// 文字列からカラーコードを生成する
export const stringToColorCode = (str: string) => {
  // 文字列を数値に変換
  const num = str.split('').reduce((acc, cur) => acc + cur.charCodeAt(0), 0);
  // 16進数に変換
  const hex = num.toString(16);
  // 6桁になるように0でパディング
  const color = `000000${hex}`.slice(-6);
  return `#${color}`;
}