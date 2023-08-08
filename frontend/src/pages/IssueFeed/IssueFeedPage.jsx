import Navbar from "../../components/Navbar/";
import IssueFeed from "../../components/IssueFeed/IssueFeed";

import { useState } from "react";

import { feed_info } from "../../tempData/IssueFeed_data";
export default function IssueFeedPage() {
  const [isMaximized, setIsMaximized] = useState(true);

  return (
    <div>
      <Navbar />
      <IssueFeed feed_info={feed_info} isMaximized={isMaximized} />
    </div>
  );
}
