import Card from "../ui/Card/Card";

interface ReviewProps {
  imageProfile: string;
  altProfile?: string;
  user: string;
  imageRate: string;
  altRate?: string;
  content: string;
  className?: string;
}

const Review = ({
  imageProfile,
  altProfile,
  user,
  imageRate,
  altRate,
  content,
  className = "",
}: ReviewProps) => {
  return (
    <Card
      className={`flex flex-col gap-5 md:p-8 p-7 shadow-lg ${className}`}
    >
      <div className="flex gap-6">
        <img src={imageProfile} className="object-cover" width={50} height={50} alt={altProfile} />
        <div className="flex flex-col gap-1">
          <span className="text-xl">{user}</span>
          <img src={imageRate} alt={altRate} />
        </div>
      </div>
      <p>{content}</p>
    </Card>
  );
};

export default Review;
