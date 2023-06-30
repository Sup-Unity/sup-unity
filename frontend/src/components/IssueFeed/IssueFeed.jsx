import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent  from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography';
import {Grid} from '@mui/material';
import CardActionArea from '@mui/material/CardActionArea';
import { createTheme } from '@mui/material';



import "./issuefeed.css";
import CommunityPageHeader from "../CommunityPageHeader"

import blood_drive_red_cross from "../../tempData/images/blood-drive-red-cross.jpeg"
import donations_homeless_shelter from "../../tempData/images/donations-homeless-shelter.jpg";
import food_drive_local_food_bank from "../../tempData/images/food-drive-local-food-bank.jpeg";
import volunteers_neighborhood_cleanup from "../../tempData/images/volunteers-neighborhood-cleanup.jpeg";
import { ThumbUp, ThumbUpOutlined } from '@mui/icons-material';

const imageMap = {
  blood_drive_red_cross,
  donations_homeless_shelter,
  food_drive_local_food_bank,
  volunteers_neighborhood_cleanup,
};

const shortenIssueDescription = (description) => {
  const maxLength = 150;
  if (description.length > maxLength){
    const shortenedDescription = description.slice(0, maxLength) + "...";
    return  shortenedDescription;
  }
  else{
    return description;
  }

  }

export default function IssueFeed({ feed_info, isMaximized }) {

  const feedContainerStyle =  isMaximized ? "issue-feed-full" : "issue-feed-side"
  const feedLayoutStyle = isMaximized ? "feed-layout-full" : "feed-layout-style"
  const feedItemStyle =  isMaximized ? "feed-item-full" : "feed-item-side"
  const issueTitleStyle = isMaximized ? "issue-title-full" : "issue-title-side"
  const issueImageStyle = isMaximized ? "issue-image-full" : 'issue-image-side'
  
  const handleClick = () => {

  }

  const renderedFeed = feed_info.map((item) => {
    return (
      <div  key = {feed_info.indexOf(item)} className= {feedItemStyle}>
        <div className={issueTitleStyle}>{item.title}</div>
        <img
          className={issueImageStyle}
          src={imageMap[item.imagename]}
          alt={item.imagename}
        />
        { isMaximized && <div className="issue-description-full">{ shortenIssueDescription(item.description)}</div> }
      </div>
    );
  });

  const renderedFeed2 = feed_info.map((item) => {

    return(
   
      <Card className="cardstyle darkfill" onClick={handleClick} sx={{maxWidth: 300}}>
      
          <CardActions className="darkfill">
            <IconButton >
              <ThumbUpOutlined className="thumbup-style" />
            </IconButton>
          </CardActions>
          <CardContent className="darkfill">
           <div className={issueTitleStyle}>
            {item.title}
           </div>
            </CardContent>
          <CardMedia
            component="img"
            height="140"
            image={imageMap[item.imagename]}
            alt={item.imagename}
          />
          <CardContent className="darkfill">
          { isMaximized && <div className="issue-description-full">{ shortenIssueDescription(item.description)}</div> }
          </CardContent>
      
      </Card>
    
    
    )
  });

  return (
    <div >
    <CommunityPageHeader groupName="Portland Volunteers" numMembers={300} />
     <div className= {feedContainerStyle}>
      <h1 className="issuefeedtitle">Issue Feed</h1>
      <div className={feedLayoutStyle}>{renderedFeed2}</div>
    </div>
    </div>

    
  );
}
