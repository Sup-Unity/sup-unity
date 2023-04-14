import { useState } from "react";
import Navbar from "../../components/Navbar";
import CommunityPageHeader from "../../components/CommunityPageHeader";
import CommentList from "../../components/CommentList/CommentList"
import IssueTopic from "./components/IssueTopic/IssueTopic";
import AboutCommunity from "../../components/AboutCommunity/AboutCommunity";
import CreateCommentCard from "../../components/CreateCommentCard/CreateCommentCard"
import IssueFeed from "../../components/IssueFeed/IssueFeed";
import "./components/IssueTopic/issuetopic.css"
import "./issue_page.css"

import {comment_info} from "../../tempData/CommentList_data"
import {groupName, numMembers, background} from "../../tempData/CommunityPageHeader_data"
import {title, description, images} from "../../tempData/IssueTopic_data"
import { community_description } from "../../tempData/AboutCommunity_data";
import { feed_info } from "../../tempData/IssueFeed_data";

export default function IssuePage(){
    const [isMaximized, setIsMaximized] = useState(false);

    return(
        <div>
            <Navbar />
            <CommunityPageHeader
                groupName={groupName}
                numMembers={numMembers}
                background={background}
            /> 
            <div className = 'mainlayout'>
                <div className = 'main'>
                    <IssueTopic title={title} description={description} images = {images} />
                    <CreateCommentCard />
                    <CommentList comment_info={comment_info} />
                </div>
                <div className = "side">
                    <AboutCommunity description= {community_description} />
                    <IssueFeed feed_info={feed_info} isMaximized = {isMaximized} />
                </div>
                <div className="space2"></div>
                <div className="space1"></div>
            </div>
        </div>
    )

}