const classNameTypes = {
  border: 'border-b-2',
  disabled: 'text-disabled',
};

const DefaultButton = ({
  text,
  type,
  onClick,
}: {
  text: string;
  type: 'border' | 'disabled';
  onClick: () => void;
}) => {
  return (
    <button className={`px-4 py-3 ${classNameTypes[type]}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default DefaultButton;
