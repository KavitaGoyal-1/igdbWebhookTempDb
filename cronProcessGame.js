//for process and remove from db
const cron = require("node-cron");
const processAndRemoveGame = require("./processAndRemoveGames");
const startProcess = require("./processGame");
//mid day (0 12 * * *) 12 pm
// cron.schedule("0 12 * * *", async () => {
//   console.log("Running scheduled game processing task");
//   try {
processAndRemoveGame(async (game) => {
  console.log(`Processing game ${game.name} with ID ${game.id}`);
  await startProcess(game);
});
// } catch (error) {
//   console.error("Error in cron job:", error);
// }
// });

console.log("Game processing cron job scheduled");
