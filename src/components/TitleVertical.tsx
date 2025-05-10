type Props = {
  jp: string;
  en: string;
};

const TitleVertical = ({ jp, en }: Props) => {
  return (
    <h1 className="px-[1.4rem] pt-16 md:px-0 md:pt-32">
      <span className="-mt-5 align-top text-4xl font-medium leading-none vertical-rl md:text-5xl">
        <span>{jp}</span>
      </span>
      <span className="-mt-5 ml-2 align-top font-serif-en vertical-rl md:ml-[0.8rem] md:text-xl md:leading-none">
        ({en})
      </span>
    </h1>
  );
};

export default TitleVertical;
