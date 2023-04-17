import frogPic from "../images/profilePics/frog.jpg";
import squirrelPic from "../images/profilePics/squirrel.jpg";
import turtlePic from "../images/profilePics/turtle.jpg";
import lizardPic from "../images/profilePics/lizard.jpg";
import dogPic from "../images/profilePics/dog.jpg";
import bearPic from "../images/profilePics/bear.jpg";

const users = [
  {
    username: "SupUnityUser0",
    userId: "0",
    profilePic: frogPic,
    about:
      "Hi there! My name is [user's name], and I'm thrilled to be a part of this community engagement app. I'm a [insert profession or interests here], and I'm passionate about [insert topic of interest here]. I joined this app because I believe in the power of open and respectful dialogue, and I'm excited to connect with like-minded individuals who share my values. In my free time, you can find me [insert hobbies or activities here], and I'm always looking for new ways to learn and grow as a person. I look forward to getting to know you all and engaging in thoughtful conversations together!",
    verifications: {
      email: true,
      phone: true,
      identity: false,
      referral: false,
    },
  },
  {
    username: "User1",
    userId: "1",
    profilePic: squirrelPic,
    about:
      "Howdy, folks! My name is [user's name], and I'm here to make you laugh, think, and maybe even question your life choices. I'm a [insert profession or interests here], but I also dabble in [insert ridiculous hobby here] and [insert another ridiculous hobby here]. I joined this app because I heard they had free snacks, but I stayed because I found some pretty cool people here. My jokes may be bad, but my heart's in the right place (usually). In my free time, you can find me [insert silly activity here], or just binging on Netflix like a normal person. Let's have some fun, share some laughs, and maybe even learn a thing or two along the way.",
    verifications: {
      email: true,
      phone: false,
      identity: true,
      referral: false,
    },
  },
  {
    username: "VerifiedUser2",
    userId: "2",
    profilePic: turtlePic,
    about:
      "Hello, fellow changemakers! My name is [user's name], and I'm beyond excited to be a part of this community engagement app. I'm a [insert profession or interests here], and I'm on a mission to make a positive impact in the world. Whether it's advocating for social justice, promoting environmental sustainability, or championing human rights, I believe that we all have the power to make a difference. I joined this app because I'm passionate about connecting with like-minded individuals who share my vision for a better future. When I'm not fighting for change, you can find me [insert hobbies or activities here], because even activists need to take a break sometimes. Let's come together and create a community that inspires action, fosters growth, and drives positive change in the world.",
    verifications: {
      email: true,
      phone: true,
      identity: true,
      referral: true,
    },
  },
  {
    username: "UnverifiedUser3",
    userId: "3",
    profilePic: lizardPic,
    about:
      "Hey, I'm [user's name], and I'm here to get straight to the point. I'm a [insert profession or interests here], and I joined this app to connect with people who can challenge me intellectually. I don't have time for small talk or beating around the bush, so let's cut to the chase and get to the heart of the matter. I'm always looking for new perspectives and insights, so if you have something valuable to share, I'm all ears. When I'm not busy being blunt, you can find me [insert hobbies or activities here], or just enjoying some quiet time to recharge. So, let's skip the pleasantries and get down to business.",
    verifications: {
      email: false,
      phone: false,
      identity: false,
      referral: false,
    },
  },
  {
    username: "ExampleUser4",
    userId: "4",
    profilePic: dogPic,
    about:
      " Hello, my name is [user's name], and I'm a bit shy when it comes to meeting new people. I'm a [insert profession or interests here], and I joined this app to connect with others who share my passions and interests. I'm not very outgoing, but I'm hoping to step out of my comfort zone and engage in meaningful conversations with like-minded individuals. When I'm not on the app, you can find me [insert hobbies or activities here], and I'm always looking for new ways to grow and learn. I may be quiet at first, but I'm eager to make new connections and be a part of this community.",
    verifications: {
      email: false,
      phone: true,
      identity: true,
      referral: false,
    },
  },
  {
    username: "It'sAUser5",
    userId: "5",
    profilePic: bearPic,
    about: null,
    verifications: {
      email: true,
      phone: true,
      identity: true,
      referral: false,
    },
  },
];

export default users;
