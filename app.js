import clear from "clear";
import chalk from 'chalk';
import figlet from "figlet";
import boxen from 'boxen';
import Table from "cli-table";

import {resume}  from "./resume.js";

// import { resumeQuestions } from './resumeQuestions.js'

// Clearing Console On App Starts
clear();

// Create Heading Using Chalk & Figlet
console.log(
  chalk.yellowBright(
    figlet.textSync("Resume", { horizontalLayout: "full" })
  )
);

console.log(boxen(chalk.green(`\nSoftware Engineer\n\n${chalk.greenBright("To obtain a position that will allow me to utilize my technical skills, experience and willingness to learn in making an Organization successful.")}`), {title: 'Naziya Sait', titleAlignment: 'left'}));

// console.log(boxen(chalk.blue(`\ngmail:naziya@gmail.com        phnone: 7*8******6`), ));



/*console.log(
  boxen(chalk.cyanBright(
    `\n\tA Simple CLI Based Resume Using NodeJS
    Welcome To The ${chalk.greenBright(
      "test\n"
    )} `
  ), {padding: 1, borderColor: 'green', dimBorder: true})
);*/
console.log(
  boxen(chalk.blue("\n" + "GMAIL:naziya@gmail.com                         PHONENO:7*8******6                   GITHUB:github.com/naz-i-ya"  + "\n" ), { borderColor: 'green', dimBorder: true}) 
);

console.log(
  chalk.cyan("QUALIFICATIONS:" ));

  let table = new Table({
    style: {head: ['green']},
    chars: { 'top': '═' , 'top-mid': '╤' , 'top-left': '╔' , 'top-right': '╗'
           , 'bottom': '═' , 'bottom-mid': '╧' , 'bottom-left': '╚' , 'bottom-right': '╝'
           , 'left': '║' , 'left-mid': '╟' , 'mid': '─' , 'mid-mid': '┼'
           , 'right': '║' , 'right-mid': '╢' , 'middle': '│' }
  });
  
  table.push(
      ['RCEW(JNTU UNiversity)' , 'NJC(Board of Intermediate Education)', 'KPS(Board Of Secondary Education)']
    , ['Information Technology(IT)', 'MPC', '10th']
  );
  
  console.log(table.toString());





resume();