interface TimeSlotProps {
  slot: string;
  onClick: () => void;
}

const TimeSlot = ({ slot, onClick }: TimeSlotProps) => {
  return (
    <button
      className="flex items-center justify-center py-3 rounded-3xl font-semibold text-[#7573FF] hover:border-[#7573FF] border-white border duration-300 transition-colors shadow-[1px_4px_14.5px_0px_rgba(0,_0,_0,_0.25)]"
      onClick={onClick}
    >
      {slot}
    </button>
  );
};

export default TimeSlot;
