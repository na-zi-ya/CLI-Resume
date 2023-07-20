import enquirer from 'enquirer';
import chalk from 'chalk';
import figlet from 'figlet';
import clear from 'clear';

const getDefaultInitialValues = () => {
  return {
    "1": 4, // React
    "2": 4, // Redux
    "3": 4, // Saga
    "4": 3, // Next
    "5": 3, // TypeScript
  };
};

export const resume = () => {
  const skills = [
    {
      type: "survey",
      name: "experience",
      message: "Skills:",
      margin: [0, 0, 2, 1],
      choices: [
        {
          name: "1",
          message: "React",
          scale: [
            { name: "1", message: "No Experience" },
            { name: "2", message: "Beginner" },
            { name: "3", message: "Intermediate" },
            { name: "4", message: "Advanced" },
            { name: "5", message: "Expert" }
          ],
        },
        {
          name: "2",
          message: "Redux",
          scale: [
            { name: "1", message: "No Experience" },
            { name: "2", message: "Beginner" },
            { name: "3", message: "Intermediate" },
            { name: "4", message: "Advanced" },
            { name: "5", message: "Expert" }
          ],
        },
        {
          name: "3",
          message: "Saga",
          scale: [
            { name: "1", message: "No Experience" },
            { name: "2", message: "Beginner" },
            { name: "3", message: "Intermediate" },
            { name: "4", message: "Advanced" },
            { name: "5", message: "Expert" }
          ],
        },
        {
          name: "4",
          message: "Next",
          scale: [
            { name: "1", message: "No Experience" },
            { name: "2", message: "Beginner" },
            { name: "3", message: "Intermediate" },
            { name: "4", message: "Advanced" },
            { name: "5", message: "Expert" }
          ],
        },
        {
          name: "5",
          message: "TypeScript",
          scale: [
            { name: "1", message: "No Experience" },
            { name: "2", message: "Beginner" },
            { name: "3", message: "Intermediate" },
            { name: "4", message: "Advanced" },
            { name: "5", message: "Expert" }
          ],
        },
      ],
    },
  ];

  // Set the initial scale values manually
  const initialValues = getDefaultInitialValues();
  skills[0].choices.forEach(choice => {
    choice.initial = initialValues[choice.name];
  });

  enquirer.prompt(skills).then(ans => {
    clear();
    console.log(
      chalk.yellowBright(
        figlet.textSync("Skills", { horizontalLayout: "full" })
      )
    );
    console.log(ans, "ans");
  });
};

