const CIcon = ({ isActive, Icon }) => {
  return (
    <div>
      <Icon
        className={`${
          isActive
            ? "text-btnFrom"
            : ""
        }`}
      />
    </div>
  );
};

export default CIcon;
