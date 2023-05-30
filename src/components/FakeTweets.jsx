import React from "react";
import Tweet from "./Tweet";
const fakeTweets = [
  {
    profileImg:
      "https://tse1.mm.bing.net/th?id=OIP.CW9Y9r41ysQHnfgkOpejlAAAAA&pid=Api&P=0&w=300&h=300",
    username: "Diana Ritchie",
    active: true,
    tweets: [
      {
        createdAt: "Mon Mar 23 2023 11:02:56 GMT+0530 (India Standard Time)",
        text: "People!!",
        image:
          "https://tse1.mm.bing.net/th?id=OIP.012zJiFHTw9refNib03QrQHaEK&pid=Api&P=0",
          like: 1,
      },
    ],
  },
  {
    profileImg:
      "https://tse4.mm.bing.net/th?id=OIP.XSZAFm-5JI7nriDLwZqRQQHaE7&pid=Api&P=0",
    username: "John Doe",
    active: true,
    tweets: [
      {
        createdAt: "Mon Mar 18 2023 11:02:56 GMT+0530 (India Standard Time)",
        text: "Wake up Guys!!!",
        image:
          "https://tse3.mm.bing.net/th?id=OIP.63t4lau4AjQ2Qt6HzZEfjAHaE8&pid=Api&P=0",
        like: 8,
      },
      {
        createdAt: "Sun Mar 19 2022 11:02:56 GMT+0530 (India Standard Time)",
        text: "I am going to become a full Stack developer soon!!",
        image:
          "https://tse4.mm.bing.net/th?id=OIP.oTlki48yitYzilj08_thGAHaDf&pid=Api&P=0",
        like: 5,
      },
    ],
  },
  {
    profileImg:
      "https://tse3.mm.bing.net/th?id=OIP.ZZf5ANaOGgdbBM-ot_12FgHaHa&pid=Api&P=0",
    username: "Sarrah Tenas",
    active: false,
    tweets: [
      {
        createdAt: "Mon Mar 21 2023 11:02:56 GMT+0530 (India Standard Time)",
        text: "Morning Guys!!!",
        image:
          "https://tse1.mm.bing.net/th?id=OIP.JdmJ3vy-MgL2xZnyzKa3JwHaFj&pid=Api&P=0",
        like: 4,
      },
      {
        createdAt: "Sun Mar 19 2023 11:02:56 GMT+0530 (India Standard Time)",
        text: "Hello People!!",
        image:
          "https://tse3.mm.bing.net/th?id=OIP.G_ZAazqbb09Qf6327NfZWwHaEK&pid=Api&P=0",
        like: 2,
      },
    ],
  },
];

function FakeTweets() {
  return (
    <div>
      {fakeTweets.map((fakeTweet) =>
        fakeTweet.tweets.map((tweet) => (
          <Tweet
            tweet={tweet}
            username={fakeTweet.username}
            profileImg={fakeTweet.profileImg}
            likes={tweet.like}
          />
        ))
      )}
    </div>
  );
}

export default FakeTweets;
