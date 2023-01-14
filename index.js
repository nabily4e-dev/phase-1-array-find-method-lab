// function superbowlWin(record) {
//   const win = record.find(game => game.result === "W");
//   if (win) {
//     return win.year;
//   } else {
//     return undefined;
//   }
// }

superbowlWin = (record) => {
  const result = record.find( record => record.result === "W" );
  return !!result ? result.year : undefined;
}
