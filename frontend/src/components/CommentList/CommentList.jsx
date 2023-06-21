import CommentCard from "../CommentCard/CommentCard";

export default function CommentList({ comment_info }) {
  const renderedComments = comment_info.map((comment) => {
    return (
      <div key = {comment_info.indexOf(comment)}>
        <CommentCard
          comment={comment.comment}
          profile_img={comment.profile_img}
          username={comment.username}
        />
      </div>
    );
  });

  return <div className="comment-list">{renderedComments}</div>;
}
