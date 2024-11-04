// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";

const Navbar = () => {
  return (
    <nav className="text-white px-6 py-4 fixed top-0 left-0 w-full z-50 h-[90px] ">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          <svg
            width="154"
            height="40"
            viewBox="0 0 154 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M41.3096 22.3616C41.3096 19.0662 37.975 16.477 36.3077 15.5943L26.8923 15.3843L7.17885 25.6441L9.30769 26.775L29.8346 16.1827C32.875 16.1827 38.7204 17.8802 37.7788 24.6702C36.8373 31.4601 24.2744 32.0203 18.1107 31.4516L21.913 33.4716C29.9342 34.1212 35.4401 31.8279 37.1904 30.6V33.4716L41.3096 31.4516V24.6702H55.1385L59.8462 22.3616H54.2558V19.5664L50.1365 17.5068V22.3616H41.3096Z"
              fill="#041944"
            />
            <path
              d="M18.1107 31.4516C24.2744 32.0203 36.8373 31.4601 37.7788 24.6702C38.7204 17.8802 32.875 16.1827 29.8346 16.1827L9.30769 26.775L18.1107 31.4516Z"
              fill="white"
            />
            <path
              d="M29.2462 37.3673L37.1904 33.4716V30.6C35.4401 31.8279 29.9342 34.1212 21.913 33.4716L29.2462 37.3673Z"
              fill="white"
            />
            <path
              d="M55.1385 24.6702H41.3096V31.4516L55.1385 24.6702Z"
              fill="white"
            />
            <path
              d="M1 22.3616L7.17885 25.6441L26.8923 15.3843L36.3077 15.5943C37.975 16.477 41.3096 19.0662 41.3096 22.3616H50.1365V17.5068L37.1904 11.0337L31.0115 14.7116L26.8923 13.2404L23.6558 11.0337L1 22.3616Z"
              fill="white"
            />
            <path
              d="M59.8462 22.3616L54.2558 19.5664V22.3616H59.8462Z"
              fill="white"
            />
            <path
              d="M59.8462 22.3616L55.1385 24.6702L41.3096 31.4516L37.1904 33.4716L29.2462 37.3673V39.1327L59.8462 23.8327V22.3616Z"
              fill="#041944"
            />
            <path
              d="M7.17885 25.6441L1 22.3616V23.8327L29.2462 39.1327V37.3673L21.913 33.4716L18.1107 31.4516L9.30769 26.775L7.17885 25.6441Z"
              fill="#041944"
            />
            <path
              d="M1 22.3616L7.17885 25.6441M1 22.3616V23.8327L29.2462 39.1327M1 22.3616L23.6558 11.0337L26.8923 13.2404L31.0115 14.7116L37.1904 11.0337L50.1365 17.5068M59.8462 22.3616L54.2558 19.5664M59.8462 22.3616H54.2558V19.5664M59.8462 22.3616L55.1385 24.6702M59.8462 22.3616V23.8327L29.2462 39.1327M29.2462 37.3673L37.1904 33.4716M29.2462 37.3673L21.913 33.4716M29.2462 37.3673V39.1327M7.17885 25.6441L9.30769 26.775M7.17885 25.6441L26.8923 15.3843L36.3077 15.5943C37.975 16.477 41.3096 19.0662 41.3096 22.3616H50.1365V17.5068M50.1365 17.5068L54.2558 19.5664M55.1385 24.6702H41.3096V31.4516M55.1385 24.6702L41.3096 31.4516M41.3096 31.4516L37.1904 33.4716M37.1904 33.4716V30.6C35.4401 31.8279 29.9342 34.1212 21.913 33.4716M21.913 33.4716L18.1107 31.4516M18.1107 31.4516C24.2744 32.0203 36.8373 31.4601 37.7788 24.6702C38.7204 17.8802 32.875 16.1827 29.8346 16.1827L9.30769 26.775M18.1107 31.4516L9.30769 26.775"
              stroke="white"
              stroke-width="0.294231"
            />
            <mask id="path-3-inside-1_82_10" fill="white">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M29.8346 23.5385C34.5423 19.125 37.4846 15.4057 37.4846 11.1808C37.4846 6.95578 34.0595 3.53076 29.8346 3.53076C25.6096 3.53076 22.1846 6.95578 22.1846 11.1808C22.1846 15.4057 25.7153 19.4192 29.8346 23.5385ZM29.8347 13.5347C31.4597 13.5347 32.777 12.2173 32.777 10.5924C32.777 8.96737 31.4597 7.65005 29.8347 7.65005C28.2097 7.65005 26.8924 8.96737 26.8924 10.5924C26.8924 12.2173 28.2097 13.5347 29.8347 13.5347Z"
              />
            </mask>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M29.8346 23.5385C34.5423 19.125 37.4846 15.4057 37.4846 11.1808C37.4846 6.95578 34.0595 3.53076 29.8346 3.53076C25.6096 3.53076 22.1846 6.95578 22.1846 11.1808C22.1846 15.4057 25.7153 19.4192 29.8346 23.5385ZM29.8347 13.5347C31.4597 13.5347 32.777 12.2173 32.777 10.5924C32.777 8.96737 31.4597 7.65005 29.8347 7.65005C28.2097 7.65005 26.8924 8.96737 26.8924 10.5924C26.8924 12.2173 28.2097 13.5347 29.8347 13.5347Z"
              fill="white"
            />
            <path
              d="M29.8346 23.5385L29.4185 23.9546L29.8214 24.3575L30.237 23.9678L29.8346 23.5385ZM36.8961 11.1808C36.8961 15.125 34.1506 18.6855 29.4321 23.1091L30.237 23.9678C34.9339 19.5645 38.073 15.6865 38.073 11.1808H36.8961ZM29.8346 4.11922C33.7345 4.11922 36.8961 7.28078 36.8961 11.1808H38.073C38.073 6.63078 34.3845 2.9423 29.8346 2.9423V4.11922ZM22.773 11.1808C22.773 7.28078 25.9346 4.11922 29.8346 4.11922V2.9423C25.2846 2.9423 21.5961 6.63078 21.5961 11.1808H22.773ZM30.2507 23.1223C28.1933 21.065 26.315 19.0649 24.9508 17.0674C23.5865 15.0698 22.773 13.1269 22.773 11.1808H21.5961C21.5961 13.4596 22.548 15.6359 23.9789 17.7311C25.4099 19.8265 27.3566 21.8927 29.4185 23.9546L30.2507 23.1223ZM32.1886 10.5924C32.1886 11.8924 31.1347 12.9462 29.8347 12.9462V14.1231C31.7847 14.1231 33.3655 12.5423 33.3655 10.5924H32.1886ZM29.8347 8.23851C31.1347 8.23851 32.1886 9.29236 32.1886 10.5924H33.3655C33.3655 8.64237 31.7847 7.06159 29.8347 7.06159V8.23851ZM27.4809 10.5924C27.4809 9.29236 28.5347 8.23851 29.8347 8.23851V7.06159C27.8847 7.06159 26.304 8.64237 26.304 10.5924H27.4809ZM29.8347 12.9462C28.5347 12.9462 27.4809 11.8924 27.4809 10.5924H26.304C26.304 12.5423 27.8847 14.1231 29.8347 14.1231V12.9462Z"
              fill="#041944"
              mask="url(#path-3-inside-1_82_10)"
            />
            <path
              d="M72.5072 36.175V36.6577H68.742V36.175H72.5072ZM68.9121 29.964V36.6577H68.3466V29.964H68.9121ZM72.0383 32.966V33.4488H68.742V32.966H72.0383ZM72.4842 29.964V30.4513H68.742V29.964H72.4842ZM79.221 29.964L81.1059 32.7913L82.9954 29.964H83.6666L81.4507 33.2603L83.7356 36.6577H83.0598L81.1059 33.7384L79.152 36.6577H78.4808L80.7657 33.2603L78.5498 29.964H79.221ZM92.4814 33.9315H90.5735V33.4488H92.4814C92.8799 33.4488 93.2032 33.3844 93.4515 33.2557C93.7028 33.1239 93.8852 32.9461 93.9986 32.7224C94.115 32.4986 94.1733 32.2473 94.1733 31.9684C94.1733 31.6956 94.115 31.4443 93.9986 31.2144C93.8852 30.9846 93.7028 30.8007 93.4515 30.6628C93.2032 30.5218 92.8799 30.4513 92.4814 30.4513H90.7712V36.6577H90.2057V29.964H92.4814C92.9718 29.964 93.384 30.0483 93.7181 30.2168C94.0553 30.3854 94.3096 30.6199 94.4813 30.9202C94.6529 31.2206 94.7387 31.5669 94.7387 31.9592C94.7387 32.3699 94.6529 32.7239 94.4813 33.0212C94.3096 33.3154 94.0568 33.5407 93.7227 33.697C93.3886 33.8533 92.9749 33.9315 92.4814 33.9315ZM105.245 36.175V36.6577H101.774V36.175H105.245ZM101.94 29.964V36.6577H101.374V29.964H101.94ZM116.345 32.9522V33.6694C116.345 34.1384 116.284 34.5629 116.161 34.9429C116.042 35.3199 115.867 35.6432 115.637 35.9129C115.41 36.1827 115.137 36.3895 114.819 36.5336C114.5 36.6776 114.141 36.7497 113.743 36.7497C113.354 36.7497 112.998 36.6776 112.676 36.5336C112.358 36.3895 112.083 36.1827 111.853 35.9129C111.624 35.6432 111.446 35.3199 111.32 34.9429C111.194 34.5629 111.132 34.1384 111.132 33.6694V32.9522C111.132 32.4833 111.193 32.0604 111.316 31.6834C111.441 31.3033 111.619 30.9784 111.849 30.7087C112.079 30.439 112.353 30.2321 112.672 30.0881C112.99 29.944 113.344 29.872 113.734 29.872C114.132 29.872 114.491 29.944 114.809 30.0881C115.128 30.2321 115.403 30.439 115.632 30.7087C115.862 30.9784 116.039 31.3033 116.161 31.6834C116.284 32.0604 116.345 32.4833 116.345 32.9522ZM115.784 33.6694V32.9431C115.784 32.5477 115.738 32.1922 115.646 31.8765C115.557 31.5608 115.424 31.2911 115.246 31.0673C115.072 30.8436 114.857 30.672 114.603 30.5524C114.348 30.4329 114.059 30.3731 113.734 30.3731C113.418 30.3731 113.135 30.4329 112.883 30.5524C112.632 30.672 112.417 30.8436 112.24 31.0673C112.065 31.2911 111.93 31.5608 111.835 31.8765C111.743 32.1922 111.697 32.5477 111.697 32.9431V33.6694C111.697 34.0679 111.743 34.4265 111.835 34.7452C111.93 35.0609 112.066 35.3321 112.244 35.5589C112.422 35.7827 112.636 35.9543 112.888 36.0739C113.142 36.1934 113.427 36.2531 113.743 36.2531C114.071 36.2531 114.36 36.1934 114.612 36.0739C114.863 35.9543 115.076 35.7827 115.251 35.5589C115.426 35.3321 115.557 35.0609 115.646 34.7452C115.738 34.4265 115.784 34.0679 115.784 33.6694ZM123.128 29.964H125.302C125.765 29.964 126.167 30.0391 126.507 30.1892C126.847 30.3394 127.109 30.5616 127.293 30.8559C127.48 31.147 127.573 31.5056 127.573 31.9316C127.573 32.2473 127.506 32.5339 127.371 32.7913C127.239 33.0488 127.057 33.2649 126.824 33.4396C126.591 33.6112 126.321 33.7292 126.015 33.7936L125.817 33.8671H123.496L123.486 33.3844H125.431C125.78 33.3844 126.072 33.317 126.305 33.1821C126.537 33.0473 126.712 32.8695 126.829 32.6488C126.948 32.4251 127.008 32.186 127.008 31.9316C127.008 31.6282 126.942 31.3662 126.81 31.1455C126.682 30.9217 126.49 30.7501 126.236 30.6306C125.981 30.5111 125.67 30.4513 125.302 30.4513H123.693V36.6577H123.128V29.964ZM127.261 36.6577L125.528 33.6648L126.134 33.6602L127.863 36.5979V36.6577H127.261ZM138.655 36.175V36.6577H134.889V36.175H138.655ZM135.06 29.964V36.6577H134.494V29.964H135.06ZM138.186 32.966V33.4488H134.889V32.966H138.186ZM138.632 29.964V30.4513H134.889V29.964H138.632ZM145.208 29.964H147.382C147.845 29.964 148.246 30.0391 148.587 30.1892C148.927 30.3394 149.189 30.5616 149.373 30.8559C149.56 31.147 149.653 31.5056 149.653 31.9316C149.653 32.2473 149.586 32.5339 149.451 32.7913C149.319 33.0488 149.137 33.2649 148.904 33.4396C148.671 33.6112 148.401 33.7292 148.095 33.7936L147.897 33.8671H145.575L145.566 33.3844H147.511C147.86 33.3844 148.151 33.317 148.384 33.1821C148.617 33.0473 148.792 32.8695 148.908 32.6488C149.028 32.4251 149.088 32.186 149.088 31.9316C149.088 31.6282 149.022 31.3662 148.89 31.1455C148.761 30.9217 148.57 30.7501 148.315 30.6306C148.061 30.5111 147.75 30.4513 147.382 30.4513H145.773V36.6577H145.208V29.964ZM149.341 36.6577L147.607 33.6648L148.214 33.6602L149.943 36.5979V36.6577H149.341Z"
              fill="white"
            />
            <path
              d="M80.3914 23.0209V26H70.2956V23.0209H80.3914ZM71.4404 5.91875V26H67.6476V5.91875H71.4404ZM98.2797 15.4491V16.4835C98.2797 18.0006 98.0775 19.366 97.6729 20.5797C97.2683 21.7842 96.6937 22.8094 95.9489 23.6553C95.2041 24.5013 94.3168 25.1495 93.287 25.6C92.2572 26.0506 91.1125 26.2758 89.8528 26.2758C88.6115 26.2758 87.4714 26.0506 86.4324 25.6C85.4025 25.1495 84.5107 24.5013 83.7567 23.6553C83.0027 22.8094 82.4189 21.7842 82.0051 20.5797C81.5913 19.366 81.3845 18.0006 81.3845 16.4835V15.4491C81.3845 13.9227 81.5913 12.5573 82.0051 11.3528C82.4189 10.1483 82.9981 9.12311 83.7429 8.2772C84.4877 7.42209 85.375 6.76927 86.4048 6.31872C87.4438 5.86818 88.5839 5.64291 89.8252 5.64291C91.0849 5.64291 92.2296 5.86818 93.2594 6.31872C94.2892 6.76927 95.1765 7.42209 95.9213 8.2772C96.6753 9.12311 97.2545 10.1483 97.6591 11.3528C98.0729 12.5573 98.2797 13.9227 98.2797 15.4491ZM94.4455 16.4835V15.4215C94.4455 14.3273 94.3444 13.3665 94.1421 12.5389C93.9398 11.7022 93.641 10.9988 93.2456 10.4288C92.8503 9.85869 92.3629 9.43113 91.7837 9.1461C91.2044 8.85187 90.5516 8.70475 89.8252 8.70475C89.0896 8.70475 88.4368 8.85187 87.8667 9.1461C87.3059 9.43113 86.8277 9.85869 86.4324 10.4288C86.037 10.9988 85.7336 11.7022 85.5221 12.5389C85.3198 13.3665 85.2187 14.3273 85.2187 15.4215V16.4835C85.2187 17.5685 85.3198 18.5293 85.5221 19.366C85.7336 20.2027 86.037 20.9107 86.4324 21.49C86.8369 22.0601 87.3242 22.4922 87.8943 22.7864C88.4644 23.0807 89.1172 23.2278 89.8528 23.2278C90.5884 23.2278 91.2412 23.0807 91.8113 22.7864C92.3813 22.4922 92.8595 22.0601 93.2456 21.49C93.641 20.9107 93.9398 20.2027 94.1421 19.366C94.3444 18.5293 94.4455 17.5685 94.4455 16.4835ZM113.244 19.3936H117.037C116.936 20.736 116.563 21.9267 115.92 22.9657C115.276 23.9956 114.38 24.8047 113.23 25.3931C112.081 25.9816 110.688 26.2758 109.051 26.2758C107.792 26.2758 106.656 26.0552 105.645 25.6138C104.642 25.1633 103.783 24.5242 103.066 23.6967C102.358 22.86 101.815 21.8578 101.438 20.6901C101.061 19.5131 100.873 18.1937 100.873 16.7317V15.2008C100.873 13.7389 101.066 12.4194 101.452 11.2425C101.838 10.0656 102.39 9.06335 103.107 8.23582C103.833 7.3991 104.702 6.75547 105.714 6.30493C106.734 5.85439 107.874 5.62912 109.134 5.62912C110.771 5.62912 112.155 5.93255 113.286 6.5394C114.416 7.13705 115.295 7.95998 115.92 9.00818C116.545 10.0564 116.922 11.2609 117.051 12.6217H113.258C113.184 11.7758 113 11.0586 112.706 10.4701C112.421 9.88167 111.989 9.43573 111.41 9.13231C110.84 8.81969 110.081 8.66338 109.134 8.66338C108.399 8.66338 107.75 8.8013 107.189 9.07714C106.638 9.35298 106.178 9.76674 105.81 10.3184C105.442 10.8609 105.167 11.5413 104.983 12.3596C104.799 13.1688 104.707 14.1066 104.707 15.1732V16.7317C104.707 17.7523 104.79 18.6672 104.955 19.4764C105.121 20.2855 105.378 20.9705 105.727 21.5314C106.077 22.0922 106.527 22.5198 107.079 22.814C107.631 23.1083 108.288 23.2554 109.051 23.2554C109.98 23.2554 110.734 23.1083 111.313 22.814C111.902 22.5198 112.348 22.0877 112.651 21.5176C112.964 20.9475 113.161 20.2395 113.244 19.3936ZM127.96 8.9668L122.237 26H118.223L125.726 5.91875H128.291L127.96 8.9668ZM132.746 26L126.995 8.9668L126.65 5.91875H129.229L136.773 26H132.746ZM132.484 18.5385V21.5314H121.712V18.5385H132.484ZM151.586 23.0209V26H141.49V23.0209H151.586ZM142.635 5.91875V26H138.842V5.91875H142.635Z"
              fill="white"
            />
          </svg>
        </Link>

        {/* Links */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link to="/Explore" className="hover:text-gray-300">
            Explore
          </Link>
          <Link to="/Contacts" className="hover:text-gray-300">
            Contacts
          </Link>
          <Link to="/About" className="hover:text-gray-300">
            About Us
          </Link>
        </div>

        {/* Buttons */}
        <div className="flex space-x-4">
          {/* <Link to="/login">
            <Button color="light" className="px-4 py-2">
              Login
            </Button>
          </Link> */}
          <Link to="/signup">
            <Button color="dark" className="px-4 py-2">
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
