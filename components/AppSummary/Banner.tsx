export type Props = {
  startColor: string;
  endColor: string;
};

export default ({ startColor, endColor }: Props) => (
  <svg width="100%" height="100%" viewBox="0 0 1660 152" preserveAspectRatio="none">
    <defs>
      <rect id="header-rect" width="1660" height="152" x="0" y="0" />

      {/* Main bg right to left */}
      <linearGradient id="header-bg-main" x1="100%" x2="0%" y1="50%" y2="50%">
        <stop offset="0%" stopColor={endColor} id="main-color-2" />
        <stop offset="100%" stopColor={startColor} id="main-color-1" />
      </linearGradient>

      {/* Bottom shape, right to left */}
      <linearGradient id="header-bg-bottom" x1="96.609%" x2="14.073%" y1="48.146%" y2="53.257%">
        <stop offset="0%" stopColor="#fff" stopOpacity=".2155" />
        <stop offset="64.655%" stopColor="#fff" stopOpacity=".2155" />
        <stop offset="100%" stopColor="#fff" stopOpacity="0" />
      </linearGradient>

      {/* Right shape, right to left */}
      <linearGradient id="header-bg-right" x1="114.011%" x2="-19.114%" y1="49.716%" y2="49.864%">
        <stop offset="0%" stopColor="#fff" stopOpacity=".577" />
        <stop offset="100%" stopColor="#fff" stopOpacity="0" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="header-bg-c" fill="#fff">
        <use href="#header-rect" />
      </mask>
      <use fill="url(#header-bg-main)" fillRule="nonzero" href="#header-rect" />
      <g mask="url(#header-bg-c)">
        <g transform="translate(-225 -96.95)">
          <path
            fill="url(#header-bg-bottom)"
            d="M2417.48361,195.218014 C2173.66491,166.180431 1953.57607,233.055396 1757.21708,395.84291 C1462.67859,640.02418 834.622877,893.158575 399.684163,856.184243 C-35.254551,819.209912 -162.467724,455.166157 259.525874,268.523521 C681.519472,81.8808861 1990.02351,270.695872 2146.32478,248.423471 C2302.62605,226.151069 2372.30208,168.747556 2417.48361,195.218014 Z"
          />
          <path
            fill="url(#header-bg-right)"
            d="M2447.71513,51.0612958 C2806.19527,107.307307 2359.00522,174.248701 2178.75829,244.655549 C1998.51136,315.062396 1845.18427,466.03868 1788.68752,489.57742 C1173.74469,745.786464 648.822877,716.793505 213.922068,402.598543 C786.897586,149.897328 1171.19581,17.0321354 1366.81675,4.0029639 C1833.1853,-27.0591286 2024.35932,137.836158 2447.71513,51.0612958 Z"
          />
        </g>
      </g>
    </g>
  </svg>
);