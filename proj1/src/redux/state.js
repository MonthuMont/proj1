import { rerenderEntireTree } from "../render";
let state = {
  profilePage: {
    userData: {
      id: 14,
      name: "Name: Dmitry K",
      birthDate: "Date of birth: 2nd of January, 2000 ",
      city: " City: Togliatty",
      education: " Education: TGU",
      gender: " Sex: Male",
    },
    messageData: [
      { id: 1, message: "Nice pic!", likeCount: 10 },
      { id: 2, message: "Awful! ", likeCount: -7 },
      { id: 3, message: "You dumb!", likeCount: -19 },
      { id: 4, message: "Hi! My name is oleG", likeCount: -10 },
    ],
  },
  messagesPage: {
    messageData1: [
      { id: 1, message: "Hello MF" },
      { id: 2, message: "You're dead" },
      { id: 3, message: "bye MF" },
      { id: 4, message: "Fu MF" },
    ],
    dialogData: [
      { id: 1, name: "Andy" },
      { id: 2, name: "Jack" },
      { id: 3, name: "Melon" },
      { id: 4, name: "Sore" },
    ],
  },
};
export let addPostEl = (postMessage) => {
  let newPostEl = {
    id: 5,
    message: String(postMessage),
    likeCount: 0,
  };
  state.profilePage.messageData.push(newPostEl);
  rerenderEntireTree(state);
};
export default state;
