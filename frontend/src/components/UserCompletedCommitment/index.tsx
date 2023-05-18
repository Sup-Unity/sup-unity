import CCStyles from "./CompletedCommitment.module.css";

type Props = {
  text: string;
  likes: number;
};

const UserCompletedCommitment = ({ text, likes }: Props) => {
  return (
    <div className={CCStyles.completedCommitmentContainer}>
      <p className={CCStyles.completedCommitmentText}>{text}</p>
      <p>
        <span>&#10084;</span> x{likes}
      </p>
    </div>
  );
};

export default UserCompletedCommitment;
