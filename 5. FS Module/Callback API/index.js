import * as fs from "fs";

fs.mkdir("g:\\node.js\\NodeJS Basics\\Theory\\NewFolder", (error) => {
  if (error) {
    throw error;
  }
  console.log("Directory is created");
});
