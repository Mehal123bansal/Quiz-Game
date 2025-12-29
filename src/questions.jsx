const questions = [
  {
    question: "What do you store in this box?",
    image: "/images/cookiebox.jpg",
    options: [
      "Cookies",
      "Sewing Kit",
      "Chocolates",
      "Laddus"
    ],
    correctAnswer: "Sewing Kit",
    isImageOptions: false,
  },
   {
    question: "Which of these is Toor Daal?",
    image: null,
    options: [
     <img src="/images/moong.jpg" /> ,    // Option 1
      <img src="/images/toor.jpg"/>,     // Option 2 (Correct)
      <img src="/images/masoor.jpg"/>,   // Option 3
     <img src= "/images/chana.jpg"/>,    // Option 4
    ],
    correctAnswer: "/images/toor.jpg",
    isImageOptions: true,
  },
   {
    question: "Why do kids fall sick?",
    image: "/images/eating.jpg",
    options: ["Change in weather", "Low immunity", "Using phone all the time"],
    correctAnswer: "Using phone all the time",
    isImageOptions: false,
  },
   {
    question: "What's the right way to store carry bags?",
    image: "/images/blinkitbag.jpg",
    options: ["In a box", "Drawer", "Pocket", "In another carry bag"],
    correctAnswer: "In another carry bag",
    isImageOptions: false,
  },

  {
    question: "Which is the correct sitting posture?",
    image: null,
    options: [
      "/images/1.png",
      "/images/2.png",
      "/images/3.png", // Correct
      "/images/4.png"
    ],
    correctAnswer: "/images/3.png",
    isImageOptions: true,
  },
  {
    question: "Once snacks are served for guests,when can you take some?",
    image: "/images/sweets.jpg",
    options: ["When it's served", " When the guests are taking it", "When the guests leave"],
    correctAnswer: "When the guests leave",
    isImageOptions: false,
  },
    {
    question: "What do you do when mom calls mid-meeting?",
    image: "/images/call.jpg",
    options: ["Ignore it", " Text her,''I'll call you right back''", " Switch off you phone", "Answer Her Call"],
    correctAnswer: "Answer Her Call",
    isImageOptions: false,
  },
  {
    question: "When should we call Bua home?",
    image: "/images/buacall.jpg",
    options: ["Today", "Tomorrow", "30th Feb", "Next Week"],
    correctAnswer: "30th Feb",
    isImageOptions: false,
  },
  {
    question: "How many times can kids have food outside?",
    image: "/images/makingfood.jpg",
    options: ["Once a week", "Sab ghar pe ban sakta hai", "Twice a week", "Everday"],
    correctAnswer: "Sab ghar pe ban sakta hai",
    isImageOptions: false,
  },
  {
    question: "Right way to wake up kids on the weekend?",
    image: "/images/sleeping.jpg",
    options: ["Gently tap them", "Open the curtains", "Switch on the mixer grrrrinder", "Call their name softly"],
    correctAnswer: "Switch on the mixer grrrrinder",
    isImageOptions: false,
  },
];

export default questions;
