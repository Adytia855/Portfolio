import React from 'react'

const Navbar = () => {
  return (
    <nav id="navbarContainer" className="pt-5 fixed inset-x-0 top-0 z-50">
      <div className="mx-auto w-64 md:w-72 lg:w-80 bg-gray-400/20 rounded-2xl shadow-lg px-4 py-1 flex justify-between gap-2">
        {/* About  */}
        <button id="btAbout" className="relative p-2 rounded-md transition group text-white hover:text-black cursor-pointer">
          <svg className="transition" width="24px" height="24px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink" fill="#ffffff">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <title>About</title>
            <g id="SVGRepo_iconCarrier">
              <g id="Page-1" stroke="none" fillRule="evenodd">
                <g id="Dribbble-Light-Preview" transform="translate(-340.000000, -4559.000000)">
                  <g id="icons" transform="translate(56.000000, 160.000000)">
                    <path fill="currentColor"
                      d="M286.069,4410 L289,4410 L289,4408 L286.069,4408 C286.252,4406.542 286.828,4405.208 287.688,4404.102 L289.757,4406.172 L291.171,4404.757 L289.102,4402.688 C290.208,4401.828 292,4401.252 293,4401.069 L293,4404 L295,4404 L295,4401.069 C296,4401.252 297.791,4401.828 298.897,4402.688 L296.828,4404.757 L298.242,4406.172 L300.311,4404.102 C301.171,4405.208 301.747,4406.542 301.93,4408 L299,4408 L299,4410 L301.93,4410 C301.747,4411.458 301.171,4412.792 300.311,4413.898 L298.242,4411.828 L296.828,4413.243 L298.897,4415.312 C297.791,4416.172 296,4416.748 295,4416.931 L295,4414 L293,4414 L293,4416.931 C292,4416.748 290.208,4416.172 289.102,4415.312 L291.171,4413.243 L289.757,4411.828 L287.688,4413.898 C286.828,4412.792 286.252,4411.458 286.069,4410 M294,4399 C288.477,4399 284,4403.477 284,4409 C284,4414.523 288.477,4419 294,4419 C299.522,4419 304,4414.523 304,4409 C304,4403.477 299.522,4399 294,4399"
                      id="center-[#ffffff]"> </path>
                  </g>
                </g>
              </g>
            </g>
          </svg>
          <span className="absolute animate__animated animate__fadeInDown animate__faster left-1/2 -translate-x-1/2 top-full mt-2 text-xs bg-gray-400/20 text-white px-2 py-0.5 rounded hidden group-hover:block">About</span>
          <span className="absolute inset-0 bg-amber-400 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-md -z-10"></span>
        </button>

        {/* Resume */}
        <button id="btResume" className="relative p-2 rounded-md transition group text-white hover:text-black cursor-pointer">
          <svg className="transition" width="24px" height="24px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Resume</title>
            <g id="Page-1" stroke="none" strokeWidth="1" fillRule="evenodd">
              <g id="Dribbble-Light-Preview" transform="translate(-420.000000, -2799.000000)">
                <g id="icons" transform="translate(56.000000, 160.000000)">
                  <path fill="currentColor"
                    d="M374,2656.982 C369.941,2656.982 366.588,2653.95 366.077,2650.028 L369.755,2650.034 C369.888,2650.035 370.016,2649.981 370.11,2649.886 L371.941,2648.05 C372.172,2647.819 372.56,2647.868 372.726,2648.151 C374.933,2651.92 374.491,2651.167 375.037,2652.094 C375.37,2652.659 376.146,2652.756 376.608,2652.292 L378.76,2650.138 C378.854,2650.044 378.982,2650 379.115,2650 L381.925,2650 C381.414,2654 378.059,2656.982 374,2656.982 M374,2640.964 C378.085,2640.964 381.458,2644 381.936,2648 L378.179,2648 C378.041,2648 377.909,2648.048 377.815,2648.148 L376.482,2649.559 C376.252,2649.802 375.853,2649.754 375.685,2649.464 L373.784,2646.179 L373.794,2646.172 L373.406,2645.504 C373.075,2644.937 372.297,2644.836 371.833,2645.301 L371.341,2645.795 L371.35,2645.78 L369.269,2647.847 C369.175,2647.939 369.049,2648 368.917,2648 L366.064,2648 C366.542,2644 369.915,2640.964 374,2640.964 M374,2639 C368.477,2639 364,2643.478 364,2649 C364,2654.523 368.477,2659 374,2659 C379.523,2659 384,2654.523 384,2649 C384,2643.478 379.523,2639 374,2639">
                  </path>
                </g>
              </g>
            </g>
          </svg>
          <span
            className="absolute animate__animated animate__fadeInDown animate__faster left-1/2 -translate-x-1/2 top-full mt-2 text-xs bg-gray-400/20 text-white px-2 py-0.5 rounded hidden group-hover:block">Resume</span>
          <span
            className="absolute inset-0 bg-amber-400 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-md -z-10"></span>
        </button>

        {/* Portfolio  */}
        <button id="btPortfolio" className="relative p-2 rounded-md transition group text-white hover:text-black cursor-pointer">
          <svg className="transition" width="24px" height="24px" viewBox="0 0 18 18" version="1.1"
            xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <title>Portfolio</title>
            <g id="SVGRepo_iconCarrier">
              <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Dribbble-Light-Preview" transform="translate(-421.000000, -2400.000000)" fill="#ffffff">
                  <g id="icons" transform="translate(56.000000, 160.000000)">
                    <path fill="currentColor"
                      d="M377.000123,2242.17179 C378.702123,2242.77601 380.054123,2244.29856 380.657123,2246.00218 L377.000123,2246.00218 L377.000123,2242.17179 Z M377.000123,2248.00291 L383.000123,2248.00291 C383.000123,2243.5823 379.418123,2240 375.000123,2240 L375.000123,2246.00218 C375.000123,2247.10658 375.895123,2248.00291 377.000123,2248.00291 L377.000123,2248.00291 Z M371.776123,2255.88577 C369.444123,2255.43261 367.573123,2253.56093 367.119123,2251.22708 C366.360123,2247.31466 369.373123,2244.74673 371.000123,2244.17152 L371.000123,2248.00291 C371.000123,2250.20871 372.794123,2252.00436 375.000123,2252.00436 L378.657123,2252.00436 C377.803123,2254.07612 375.241123,2256.55902 371.776123,2255.88577 L371.776123,2255.88577 Z M373.000123,2248.00291 L373.000123,2242.00073 C368.057123,2242.00073 364.161123,2246.48536 365.156123,2251.60922 C365.762123,2254.72935 368.276123,2257.24327 371.395123,2257.84949 C376.749123,2258.89087 381.000123,2254.34021 381.000123,2250.00364 L375.000123,2250.00364 C373.895123,2250.00364 373.000123,2249.10731 373.000123,2248.00291 L373.000123,2248.00291 Z"
                      id="chart-[#1293]"> </path>
                  </g>
                </g>
              </g>
            </g>
          </svg>
          <span
            className="absolute animate__animated animate__fadeInDown animate__faster left-1/2 -translate-x-1/2 top-full mt-2 text-xs bg-gray-400/20 text-white px-2 py-0.5 rounded hidden group-hover:block">Portfolio</span>
          <span
            className="absolute inset-0 bg-amber-400 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-md -z-10"></span>
        </button>

        {/* Contact */}
        <button id="btContact" className="relative p-2 rounded-md transition group text-white hover:text-black cursor-pointer">
          <svg className="transition" width="25px" height="25px" viewBox="0 0 20 20" version="1.1"
            xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <title>Contact</title>
              <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Dribbble-Light-Preview" transform="translate(-100.000000, -4759.000000)" fill="#ffffff">
                  <g id="icons" transform="translate(56.000000, 160.000000)">
                    <path fill="currentColor"
                      d="M54,4610.4141 L52.585,4609.0001 L54,4607.5851 L55.414,4609.0001 L54,4610.4141 Z M49.757,4609.0001 L54,4613.2421 L58.242,4609.0001 L54,4604.7571 L49.757,4609.0001 Z M61.362,4612.1291 L60,4611.1701 L56,4614.2051 L56.734,4616.5081 C55.879,4616.8211 54.961,4617.0001 54,4617.0001 C53.027,4617.0001 52.098,4616.8171 51.235,4616.4971 L52,4613.9851 L48,4611.1701 L46.665,4612.1831 C46.239,4611.2071 46,4610.1311 46,4609.0001 C46,4607.9651 46.204,4606.9791 46.563,4606.0711 L48,4607.1281 L52,4603.9441 L51.245,4601.4991 C52.105,4601.1821 53.031,4601.0001 54,4601.0001 C54.982,4601.0001 55.918,4601.1861 56.788,4601.5111 L56,4604.1851 L60,4607.1281 L61.412,4606.0041 C61.788,4606.9301 62,4607.9401 62,4609.0001 C62,4610.1101 61.772,4611.1671 61.362,4612.1291 L61.362,4612.1291 Z M58.535,4615.5831 L58.323,4614.9301 L60.044,4613.6721 L60.334,4613.8681 C59.826,4614.5271 59.222,4615.1081 58.535,4615.5831 L58.535,4615.5831 Z M47.705,4613.9201 L48.044,4613.6721 L49.677,4614.7711 L49.432,4615.5581 C48.777,4615.1011 48.197,4614.5481 47.705,4613.9201 L47.705,4613.9201 Z M49.436,4602.4391 L49.677,4603.2401 L47.956,4604.6261 L47.537,4604.3051 C48.063,4603.5831 48.703,4602.9501 49.436,4602.4391 L49.436,4602.4391 Z M60.422,4604.2501 L59.956,4604.6261 L58.323,4603.3781 L58.591,4602.4591 C59.294,4602.9541 59.911,4603.5601 60.422,4604.2501 L60.422,4604.2501 Z M63.027,4604.7191 C62.601,4603.8221 62.047,4603.0021 61.387,4602.2771 C60.96,4601.8081 60.49,4601.3811 59.982,4601.0001 C59.188,4600.4061 58.306,4599.9281 57.354,4599.5891 C56.304,4599.2141 55.179,4599.0001 54,4599.0001 C52.824,4599.0001 51.701,4599.2131 50.653,4599.5861 C49.699,4599.9251 48.814,4600.4041 48.018,4601.0001 C47.528,4601.3671 47.074,4601.7761 46.659,4602.2261 C45.945,4602.9991 45.351,4603.8831 44.908,4604.8541 C44.331,4606.1181 44,4607.5191 44,4609.0001 C44,4610.5881 44.38,4612.0841 45.039,4613.4171 C45.444,4614.2381 45.958,4614.9941 46.564,4615.6691 C47.003,4616.1591 47.49,4616.6041 48.018,4617.0001 C48.813,4617.5951 49.698,4618.0741 50.651,4618.4131 C51.699,4618.7861 52.823,4619.0001 54,4619.0001 C55.174,4619.0001 56.295,4618.7871 57.342,4618.4161 C58.298,4618.0761 59.185,4617.5971 59.982,4617.0001 C60.486,4616.6221 60.953,4616.1991 61.377,4615.7341 C62.039,4615.0101 62.593,4614.1901 63.02,4613.2951 C63.642,4611.9921 64,4610.5401 64,4609.0001 C64,4607.4661 63.644,4606.0181 63.027,4604.7191 L63.027,4604.7191 Z"
                      id="football-[#787]"> </path>
                  </g>
                </g>
              </g>
            </g>
          </svg>
          <span
            className="absolute animate__animated animate__fadeInDown animate__faster left-1/2 -translate-x-1/2 top-full mt-2 text-xs bg-gray-400/20 text-white px-2 py-0.5 rounded hidden group-hover:block">Contact</span>
          <span
            className="absolute inset-0 bg-amber-400 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-md -z-10"></span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar