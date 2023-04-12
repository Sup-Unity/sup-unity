import Navbar from "../../components/Navbar/";
import IssueFeed from "../../components/IssueFeed/IssueFeed"
import { feed_info } from "../../tempData/IssueFeed_data";


export default function IssueFeedPage(){

    return(
        <div>
            <Navbar />
            <IssueFeed feed_info = {feed_info} />
        </div>
    )


}