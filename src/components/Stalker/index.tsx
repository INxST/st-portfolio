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
        className="follower rounded-full w-10 h-10 pointer-events-none absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 border-emperor bg-mine-shaft z-[999] mix-blend-overlay transition-[mix-blend-mode,width,height] duration-300 ease-linear"
      >
        <div className="w-full h-full relative rounded-full">
          <span
            className="follower__inside vertical-rl text-taupe-gray font-medium leading-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 invisible transition-all"
            aria-hidden="true"
          >
            <span className="follower__text hidden" data-type="image">
              閲覧
            </span>
            <span className="follower__text hidden" data-type="crossing">
              次項
            </span>
          </span>
          <span
            className="follower__drag absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 invisible transition-all inline-flex gap-3 items-center p-5"
            aria-hidden="true"
          >
            <svg
              width="16"
              height="10"
              viewBox="0 0 16 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-1"
            >
              <path
                d="M8.09814 9.93734C8.09814 9.93734 6.85846 7.70342 6.56422 5.71622L15.1641 5.2575L15.1641 4.60214L6.57254 4.14342C6.8975 2.18406 8.24454 0.0616592 8.24454 0.0616592C8.24454 0.0616592 4.15302 4.37766 0.407423 4.93542C4.14198 5.49878 8.09814 9.9375 8.09814 9.9375L8.09814 9.93734Z"
                fill="#3D3D3D"
              />
            </svg>

            <svg
              width="16"
              height="10"
              viewBox="0 0 16 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-1"
            >
              <path
                d="M7.90186 0.0626602C7.90186 0.0626602 9.14154 2.29658 9.43578 4.28378L0.835938 4.7425V5.39786L9.42746 5.85658C9.1025 7.81594 7.75546 9.93834 7.75546 9.93834C7.75546 9.93834 11.847 5.62234 15.5926 5.06458C11.858 4.50122 7.90186 0.0625 7.90186 0.0625V0.0626602Z"
                fill="#3D3D3D"
              />
            </svg>
          </span>
        </div>
      </div>
    </>
  );
};

export default Stalker;
