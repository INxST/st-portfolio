import { useRef } from 'react';
import stalker from './stalker';

const Stalker = () => {
  const cursor = useRef<HTMLDivElement | null>(null);
  const follower = useRef<HTMLDivElement | null>(null);

  stalker({ cursor, follower });

  return (
    <>
      <div
        ref={cursor}
        className="cursor rounded-full w-2 h-2 pointer-events-none absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 bg-silver z-[999]"
      ></div>
      <div
        ref={follower}
        className="follower rounded-full w-10 h-10 pointer-events-none absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 border-emperor bg-mine-shaft z-[999] transition-all duration-200 ease-linear mix-blend-overlay"
      >
        <div className="w-full h-full relative rounded-full">
          <span
            className="follower__text vertical-rl text-taupe-gray font-medium leading-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 invisible transition-all"
            aria-hidden="true"
          >
            <span>見る</span>
          </span>
        </div>
      </div>
    </>
  );
};

export default Stalker;
