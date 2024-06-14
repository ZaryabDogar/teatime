const Toast = ({ icon, message, success }) => {
  return (
    <div className="w-full bg-gradient-to-r from-btnFrom to-btnTo p-[1px] rounded-xl">
      <div className="bg-lightDark rounded-xl px-4 py-3 flex items-center justify-center gap-x-6 w-full">
        <div
          className={`${
            success ? "text-sharpGreen" : "text-red"
          } text-[1.5rem]`}
        >
          {icon}
        </div>
        <p className="font-bold text-sm">{message}</p>
      </div>
    </div>
  );
};

export default Toast;
