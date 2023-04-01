import Navbar from "../../components/Navbar";
import CommunityPageHeader from "../../components/CommunityPageHeader";
import CommentList from "../../components/CommentList/CommentList"

import IssueTopic from "./components/IssueTopic/IssueTopic";
import "./components/IssueTopic/issuetopic.css"
import "./issue_page.css"
import {comment_info} from "../../tempData/CommentList_data"

import {groupName, numMembers, background} from "../../tempData/CommunityPageHeader_data"
import {title, description, images} from "../../tempData/IssueTopic_data"

export default function IssuePage(){


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
                    <CommentList comment_info={comment_info} />
                </div>
                <div className = "side">

                </div>
                <div className="space2"></div>
                <div className="space1"></div>
            </div>
        </div>
    )

}