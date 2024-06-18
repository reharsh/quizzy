import { useNavigate, useParams } from "react-router-dom";

export const Page3 = () => {
  const { topic, score } = useParams();
  const navigate = useNavigate();
  return (
    <div className="flex flex-col col-span-1 space-around items-center space-y-20 ">
      <div className="font-extrabold text-4xl pt-20 mt-20 text-lg">final score : {score}</div>
      <div className="flex justify-evenly space-x-20 buttons">
        <button
          className=""
          onClick={() => {
            navigate(`/${topic}`);
          }}
        >
          <div className="flex justify-start text-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className=" mt-0.5 size-7"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5 8.25 12l7.5 -7.5"
              />
             
            </svg>
            <div className="pl-2"> retry</div>
          </div>
        </button>
        <button
          className=""
          onClick={() => {
            navigate(`/`);
          }}
        >
          <div className="flex justify-start text-xl">
            <div className="pl-2 pr-2"> home</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className=" mt-0.5 size-7"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};
