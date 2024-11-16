import { useEffect, useState } from "react";

const generateRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

function ReviewItem({review}) {
    const [randomColor, setRandomColor] = useState('');

    useEffect(() => {
      setRandomColor(generateRandomColor()); 
    }, []);
    const userInitial = review.user.email.charAt(0).toUpperCase();

   
    const userEmailPrefix = review.user.email.split('@')[0];

    const dateString = review.createdAt;
const date = new Date(dateString);


const formattedDate = date.toLocaleDateString("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric"
});
  return (
    <>
      <div className="bg-white rounded-md flex flex-col w-[250px] h-[140px] p-2 gap-2">
        <div className="flex gap-2 items-center">
        <div
        style={{ backgroundColor: randomColor }}
         className="w-10 h-10 rounded-full  flex items-center justify-center text-white font-bold">
          {userInitial}
        </div>
          <div>
            <p className="text-[12px] font-semibold text-white-400">{userEmailPrefix}</p>
            <p className="text-white-500 text-[12px]">{formattedDate}</p>
          </div>
        </div>

        <p className="text-gray-500  text-[14px] line-clamp-3">
        {review.comment}
        </p>
      </div>
    </>
  );
}

export default ReviewItem;
