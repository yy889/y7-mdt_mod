const library = require("base/library");
const 气固转换机 = library.MultiCrafter(GenericCrafter, GenericCrafter.GenericCrafterBuild, "气固转换机", [
  {
    input: { 
      liquids: ["hydrogen/30"],
      items:["sand/1"],
      power: 5,
    },
    output: {
      items: ["y7xmd-钛氢合金/1"],
    },
    craftTime: 60,
  },  
  
]);