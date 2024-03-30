// components/ProgressBar.tsx

const ProgressBar = ({ progress }) => {
  return (
    <div className="h-2 w-52 rounded-full bg-[#EDEDED]">
      <div
        className="h-full rounded-full bg-green-500"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ProgressBar;
