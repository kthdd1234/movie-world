const classNameTypes = {
  danger: 'px-4 py-2 bg-tomato',
  outline: 'px-4 py-2 border-[1.5px] border-divider',
  text: 'text-whitePoint',
};

const IconButton = ({
  text,
  icon,
  type,
  onClick,
}: {
  text: string;
  icon: JSX.Element;
  type: 'danger' | 'outline' | 'text';
  onClick: (e: React.MouseEvent) => void;
}) => {
  return (
    <button
      className={`flex items-center text-base rounded ${classNameTypes[type]}`}
      onClick={onClick}
    >
      {icon}
      <div className='ml-1'>{text}</div>
    </button>
  );
};

export default IconButton;
