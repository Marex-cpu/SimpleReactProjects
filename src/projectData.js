export default [
  {
    id: 1,
    projectName: "React Facts",
    projectInfo:
      ' In this project, the idea was to enable switching to dark or light mode. In order to succeed in this, I used the React hook "useState". It was also necessary to save the state change every time so that the browser remembers which mode it remains in even after leaving the page. Using "localStorage" helped me with that.',
    projectLink: "/react-facts",
    textLink: "React Facts",
    projectImg: "images/project1.png",
  },
  {
    id: 2,
    projectName: "Notes Clone",
    projectInfo:
      'As the name suggests, this is a simplified clone of Notes. The goal was to work out the logic of adding a new note and deleting it. A search bar has also been created, it allows you to type a word and find the required text based on it. I added that when deleting a note, a modal opens that warns us and asks if we are sure we want to perform that action. And in this project I used "localStorage", this time together with "useEffect" hook, in order to update and remember every change, every note added and deleted.',
    projectLink: "/notes-clone",
    textLink: "Notes Clone",
    projectImg: "images/project2.png",
  },
  {
    id: 3,
    projectName: "Tenzies game",
    projectInfo:
      "Tenzi is the ultimate math game! Like most dice games, Tenzi can be played many ways. The most basic way is for each player to take 10 dice and roll. The first player to get matching numbers on all dice yells “Tenzi!” and wins. This project is based on that idea. Try it and have fun :)",
    projectLink: "/tenzies-game",
    textLink: "Tenzies game",
    projectImg: "images/project3.png",
  },
  {
    id: 4,
    projectName: "Calculator",
    projectInfo:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum natus temporibus debitis repellendus iusto modi veniam quia. Sequi quas labore ipsum rem! Sed nostrum atque nemo distinctio ipsa repudiandae rerum beatae natus consequuntur qui veniam maxime ad, eligendi sint architecto consequatur id, in quaerat rem expedita? Necessitatibus, atque excepturi? Modi!",
    projectLink: "/calculator-app",
    textLink: "Calculator",
    // projectImg: "images/project3.png",
  },
];
