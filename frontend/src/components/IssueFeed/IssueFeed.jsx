import "./issuefeed.css";

// import blood_drive_red_cross from "../../tempData/images/blood-drive-red-cross.jpeg";
// import donations_homeless_shelter from "../../tempData/images/donations-homeless-shelter.jpg";
// import food_drive_local_food_bank from "../../tempData/images/food-drive-local-food-bank.jpeg";
// import volunteers_neighborhood_cleanup from "../../tempData/images/volunteers-neighborhood-cleanup.jpeg";

// TEMPORARY IMAGES
import blood_drive_red_cross from "../../tempData/images/temp-blood-drive-red-cross.jpg";
import donations_homeless_shelter from "../../tempData/images/temp-donations-homeless-shelter.jpg";
import food_drive_local_food_bank from "../../tempData/images/temp-food-drive-local-food-bank.jpg";
import volunteers_neighborhood_cleanup from "../../tempData/images/temp-volunteers-neighborhood-cleanup.jpg";

const imageMap = {
  blood_drive_red_cross,
  donations_homeless_shelter,
  food_drive_local_food_bank,
  volunteers_neighborhood_cleanup,
};

export default function IssueFeed({ feed_info, isMaximized }) {
  const feedStyles = isMaximized
    ? "issue-feed-full-page"
    : "issue-feed-side-bar";

  const renderedFeed = feed_info.map((item) => {
    return (
      <div key={feed_info.indexOf(item)} className="feed-item">
        <div className="issue-title">{item.title}</div>
        <img
          className="issue-image"
          src={imageMap[item.imagename]}
          alt={item.imagename}
        />
        {isMaximized && <div>{item.description}</div>}
      </div>
    );
  });

  return (
    <div className="issue-feed">
      Issue Feed
      <div className="scroll">{renderedFeed}</div>
    </div>
  );
}
