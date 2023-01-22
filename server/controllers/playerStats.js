import PlayerStat from "../models/PlayerStat.js";


// reading JSON file of stubbed data
// export const getPlayerStats = fs.readFile("./server/data/data.json", "utf-8", (err, jsonString) => {
//     if (err) {
//       console.log(err);
//     } else {
//       try {
//         const data = JSON.parse(jsonString);
//         console.log(data);
//       } catch (err) {
//         console.log("error parsing JSON", err);
//       }
//     }
//   });


  export const getPlayerStats = async (req, res) => {
    try {
        const { id } = req.params;
        const player = await PlayerStat.findById(id);
        res.status(200).json(player);
    } catch (error) {
        res.status(404).json({ message: err.message })
    }
  };
 
  export const createPlayerStat = async (req, res) => {
    try {
        const {playerId, gameDate, opponent, battingAvg, plateAppearances, atBats, runs, hits, runsBattedIn, doubles, triples, homeruns, class} = req.body;
        const newStat = new PlayerStat({
            playerId, gameDate, opponent, battingAvg, plateAppearances, atBats, runs, hits, runsBattedIn, doubles, triples, homeruns, class
        });
        await newStat.save();

        const stat = await PlayerStat.find();
        res.status(201).json(stat);
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
  }

