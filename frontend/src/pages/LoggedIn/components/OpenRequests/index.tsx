import LocalPost from "../../../../components/Posts/LocalPost";

import { localPosts } from "../../../../tempData";

const OpenRequests = () => {
  return (
    <>
      <h3 className="centerText">Open Requests</h3>
      {localPosts.map((post) => (
        <LocalPost
          type={post.type}
          title={post.title}
          author={post.author}
          description={post.description}
          timeline={post.timeline}
          status={post.status}
          currentMoney={post.currentMoney}
          neededMoney={post.neededMoney}
          communityServiceReqs={post.communityServiceReqs}
          submittedProof={post.submittedProof}
        />
      ))}
    </>
  );
};

export default OpenRequests;
