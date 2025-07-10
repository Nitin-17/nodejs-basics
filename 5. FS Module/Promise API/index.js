/* 
 
 FS module has three types:
 >> Promise 
 >> callback
 >> synchronous
 
 */

import * as fs from "fs/promises";

//creating a directory or folder

//creating a folder (will throw an error if folder exists or not found)
/* try {
  await fs.mkdir("g:\\node.js\\NodeJS Basics\\Theory\\NewFolder");
  //You don't have folder and still want to create forcefully, then use the flag
  //await fs.mkdir("g:\\node.js\\NodeJS Basics\\Theory\\NewFolder",{recursive:true});
  console.log("Folder created...");
} catch (error) {
  console.log(error);
} */

//reading a folder content
try {
  const files = await fs.readdir("g:\\node.js\\NodeJS Basics\\Theory");
  for (const file of files) {
    console.log(file);
  }
} catch (error) {
  console.log(error);
}

//remove a folder (Note: Folder will only be removed if it's empty)
/* try {
  await fs.rmdir("g:\\node.js\\NodeJS Basics\\Practical");
} catch (error) {
  console.log(error);
} */

//creating/writing a new file
/* try {
  //this will create a new file named README.md within root dir (Note, it will overridden with new text)
  // await fs.writeFile("README.md", "Hello Nodejs");
} catch (error) {
  console.log(error);
}
 */

//reading a file
try {
  //reading a file without flag will give buffer
  const data = await fs.readFile("README.md", "utf-8");
  console.log(data);
} catch (error) {
  console.log(error);
}

//appending a file data
/* try {
  await fs.appendFile("README.md", "New content added");
} catch (error) {
  console.log(error);
}
 */

//copying the file
/* try {
  await fs.copyFile("README.md", "info.txt");
} catch (error) {
  console.log(error);
} */

//gettings the file info or stats
try {
  const data = await fs.stat("README.md");
  console.log(data);
} catch (error) {
  console.log(error);
}
