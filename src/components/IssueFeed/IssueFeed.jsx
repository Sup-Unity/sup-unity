import "./issuefeed.css";

import blood_drive_red_cross from "../../tempData/images/blood-drive-red-cross.jpeg"
import donations_homeless_shelter from "../../tempData/images/donations-homeless-shelter.jpg";
import food_drive_local_food_bank from "../../tempData/images/food-drive-local-food-bank.jpeg";
import volunteers_neighborhood_cleanup from "../../tempData/images/volunteers-neighborhood-cleanup.jpeg";

const imageMap = {
  blood_drive_red_cross,
  donations_homeless_shelter,
  food_drive_local_food_bank,
  volunteers_neighborhood_cleanup,
};

export default function IssueFeed({ feed_info }) {

  const renderedFeed = feed_info.map((item) => {
    return (
      <div  key = {feed_info.indexOf(item)} className="feed_item">
        <div className="feed_title">{item.title}</div>
        <img
          className="feed_image"
          src={imageMap[item.imagename]}
          alt={item.imagename}
        />
      </div>
    );
  });

  return (
    <div className="request_feed">
      Issue Feed
      <div className="scroll">{renderedFeed}</div>
    </div>
  );
}
