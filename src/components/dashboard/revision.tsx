import { useNavigate } from "react-router-dom";
import { RevisionIcon } from "../../svgs/revisionIcon";
import TimeSlot from "./timeSlot";

const Revision = () => {
  const navigate = useNavigate();
  const TimeSlots = ["Today", "Last Week", "Last 15 Days", "Last 30 Days"];

  return (
    <div className="flex flex-col gap-4 w-[30%] h-[350px] rounded-3xl shadow-[1px_4px_14.5px_0px_rgba(0,_0,_0,_0.25)] p-5">
      <div className="flex items-center gap-3">
        <RevisionIcon />
        <h1 className="text-xl text-gray-800 font-semibold">Quick Revision</h1>
      </div>
      <div className="flex flex-col gap-5">
        {TimeSlots.map((slot) => {
          return <TimeSlot slot={slot} onClick={() => navigate("/revision")} />;
        })}
      </div>
    </div>
  );
};

export default Revision;
