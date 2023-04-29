const xlsx = require('xlsx');

module.exports.getNewExcel = () => {
  const file = 'input.xls';

  const stringsArray = xlsx.readFile(file).Strings;

  const test = [...new Set(stringsArray.map((item) => {
    const cell = item.t;
    return [cell.toString().slice(0, 24)];
  }))];
  const book = xlsx.utils.book_new();
  const sheet = xlsx.utils.aoa_to_sheet(test);

  xlsx.utils.book_append_sheet(book, sheet, '1');

  xlsx.writeFile(book, 'result.xls');
};
