const kanjiNumber = (num: string | number) => {
  const newNum = num.toString();
  const numArray = newNum.split('');
  const kanjiArray = numArray.map(
    (n: string) =>
      ['〇', '一', '二', '三', '四', '五', '六', '七', '八', '九'][Number(n)]
  );
  return kanjiArray.join('');
};

export default kanjiNumber;
