type Props = {
  jp: string;
  en: string;
};

const TitleVertical = ({ jp, en }: Props) => {
  return (
    <h1 className="pt-16 md:pt-32 px-[1.4rem] md:px-0">
      <span className="text-4xl md:text-5xl font-medium leading-none vertical-rl align-top -mt-5">
        <span>{jp}</span>
      </span>
      <span className="-mt-5 ml-2 md:ml-[0.8rem] md:text-xl font-serif-en md:leading-none vertical-rl align-top">
        ({en})
      </span>
    </h1>
  );
};

export default TitleVertical;
