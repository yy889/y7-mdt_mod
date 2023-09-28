const library = require("base/library");
const 燃气发电机 = library.MultiCrafter(GenericCrafter, GenericCrafter.GenericCrafterBuild, "燃气发电机", [
  {
    input: { 
      liquids: ["hydrogen/30"],
      power: 0,
    },
    output: {
      power: 3,
    },
    craftTime: 60,
  },  
  
]);