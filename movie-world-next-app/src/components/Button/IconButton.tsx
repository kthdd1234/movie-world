const classNameTypes = {
  danger: 'bg-tomato',
  outline: 'border-[1.5px] border-divider',
};

const IconButton = ({
  text,
  icon,
  type,
  onClick,
}: {
  text: string;
  icon: JSX.Element;
  type: 'danger' | 'outline';
  onClick: (e: React.MouseEvent) => void;
}) => {
  return (
    <button
      className={`flex items-center px-4 py-2 text-base rounded ${classNameTypes[type]}`}
      onClick={onClick}
    >
      {icon}
      <div className='ml-1'>{text}</div>
    </button>
  );
};

export default IconButton;
