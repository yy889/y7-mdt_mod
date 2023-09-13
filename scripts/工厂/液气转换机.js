const library = require("base/library");
const 液气转换机 = library.MultiCrafter(GenericCrafter, GenericCrafter.GenericCrafterBuild, "液气转换机", [
  {
    input: {
      liquids: ["y7xmd-液氢/1"], 
      power: 2,
    },
    output: {
      liquids: ["hydrogen/30"],
      items: ["sand/1"],
    },
    craftTime: 30,
  }, 

  
]);