import Navbar from "../../components/Navbar";
import CommunityPageHeader from "../../components/CommunityPageHeader";
import {groupName, numMembers, background} from "../../tempData/CommunityPageHeader_data"



export default function IssuePage(){


    return(
        <div>
            <Navbar />
            <CommunityPageHeader
                groupName={groupName}
                numMembers={numMembers}
                background={background}
            /> 
        </div>
    )

}