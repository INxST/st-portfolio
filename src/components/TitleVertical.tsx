type Props = {
  jp: string;
  en: string;
};

const TitleVertical = ({ jp, en }: Props) => {
  return (
    <h1 className="pl-5 pr-16 md:pr-20 md:px-60 pt-16 md:pt-32">
      <span className="text-4xl md:text-5xl font-semibold leading-none vertical-rl align-top -mt-5">
        <span>{jp}</span>
      </span>
      <span className="-mt-5 ml-2 md:ml-4 md:text-xl font-serif-en md:leading-none vertical-rl align-top">
        ({en})
      </span>
    </h1>
  );
};

export default TitleVertical;
