const SectionTitle = ({ text, count }: { text: string; count?: number }) => {
  return (
    <div className={`mb-2 text-xl font-bold text-white`}>
      {text}
      <span className='ml-2 text-base font-normal text-deepGray3'>
        {count ?? ''}
      </span>
    </div>
  );
};

export default SectionTitle;
