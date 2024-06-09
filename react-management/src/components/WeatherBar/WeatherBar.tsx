export const WeatherBar = () => {
  return (
    <div className="flex flex-col text-black bg-blue-300 rounded-xl w-[166px] -mb-5">
      <div className="flex flex-row text-black fill-blue-300 rounded-xl">
        <div className="justify-center self-start px-1.5 py-1.5 text-xl bg-amber-100 rounded-tl-xl rounded-br-xl">
          Kraków
        </div>
        <div className="justify-center px-2 text-xs bg-blue-400 rounded-tr-xl rounded-bl-xl">
          <div className="justify-center text-center font-medium text-sm">
            Dzisiaj
          </div>
          <div className="flex flex-row px-1.5 mb-2">
            <div className="text-xl">15</div>
            <svg
              width="15"
              height="15"
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              transform="translate(0, 7)"
            >
              <path
                d="M0 2.1859C0 1.59829 0.189292 1.09295 0.557361 0.681624C0.935946 0.258547 1.37763 0.0587609 1.90344 0.0587609C2.41874 0.0587609 2.87094 0.270299 3.23901 0.681624C3.60707 1.1047 3.79637 1.59829 3.79637 2.1859C3.79637 2.7735 3.60707 3.27885 3.23901 3.69017C2.87094 4.11325 2.41874 4.31303 1.90344 4.31303C1.37763 4.31303 0.92543 4.1015 0.557361 3.69017C0.189292 3.27885 0 2.7735 0 2.1859ZM0.92543 2.1859C0.92543 2.49145 1.02008 2.75 1.20937 2.97329C1.40918 3.19658 1.64054 3.30235 1.91396 3.30235C2.18738 3.30235 2.41874 3.19658 2.61855 2.97329C2.81836 2.75 2.913 2.49145 2.913 2.1859C2.913 1.88034 2.81836 1.6218 2.61855 1.3985C2.41874 1.17521 2.18738 1.06944 1.91396 1.06944C1.64054 1.06944 1.40918 1.17521 1.20937 1.3985C1.02008 1.61004 0.92543 1.88034 0.92543 2.1859ZM5.01625 7.38034C5.01625 8.28526 5.23709 9.0844 5.68929 9.78953C5.92065 10.1538 6.24665 10.4477 6.6673 10.6709C7.07744 10.8825 7.55067 11 8.07648 11C9.61186 11 10.5794 10.3419 10.9685 9.03739C11.0105 8.87286 10.9895 8.70833 10.9054 8.55556C10.8212 8.40278 10.7055 8.32051 10.5583 8.28526C10.4111 8.23825 10.2639 8.26175 10.1377 8.36752C10.0115 8.46154 9.92734 8.59081 9.89579 8.76709C9.89579 8.77885 9.89579 8.7906 9.88528 8.82585L9.86424 8.90812C9.74857 9.13141 9.59082 9.30769 9.39101 9.43697C9.06501 9.66026 8.63384 9.76603 8.09752 9.76603C7.77151 9.76603 7.47706 9.70727 7.22467 9.57799C6.80402 9.37821 6.50956 9.02564 6.33078 8.53205C6.21511 8.21474 6.15201 7.82692 6.15201 7.39209V3.60791C6.15201 3.43162 6.16252 3.25534 6.18356 3.07906C6.22562 2.63248 6.38337 2.22115 6.65679 1.85684C6.96176 1.44551 7.44551 1.24573 8.10803 1.24573C8.65487 1.24573 9.08604 1.3515 9.40153 1.56303C9.61186 1.70406 9.7696 1.88034 9.87476 2.09188C9.88528 2.11538 9.88528 2.15064 9.89579 2.1859C9.90631 2.22115 9.90631 2.24466 9.90631 2.25641C9.94837 2.42094 10.0325 2.53846 10.1482 2.60897C10.2744 2.69124 10.4111 2.70299 10.5688 2.66774C10.7161 2.63248 10.8317 2.53846 10.9159 2.39744C11 2.25641 11.021 2.10363 10.979 1.92735V1.9156L10.8948 1.6453C10.8423 1.51603 10.7476 1.33974 10.6004 1.13996C10.4637 0.928419 10.2954 0.763889 10.1272 0.622863C9.90631 0.446581 9.62237 0.305556 9.26482 0.176283C8.90727 0.0587614 8.51817 0 8.09752 0C7.56119 0 7.09847 0.10577 6.67782 0.317308C6.26769 0.528847 5.94168 0.810897 5.72084 1.17521C5.26864 1.86859 5.03728 2.67949 5.03728 3.60791V7.38034H5.01625Z"
                fill="black"
              />
            </svg>

            <svg
              width="24"
              height="24"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              transform="translate(5, 3)"
            >
              <rect width="19" height="19" fill="url(#pattern0_72_7)" />
              <defs>
                <pattern
                  id="pattern0_72_7"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use xlinkHref="#image0_72_7" transform="scale(0.0111111)" />
                </pattern>
                <image
                  id="image0_72_7"
                  width="90"
                  height="90"
                  xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAER0lEQVR4nO2dXWsVRxiAn2j05CjWHyHilVgVLS0oarzQP6CUIv0FragotQhVb1uMxkg0/8GPJEbjTSm0tHjj98dPsK0xKRRL0wa3THkPyGHP7mQ5M/Pu7DzwQkjOnpl5Mvs1884uJBKJsKxI/wC3tIEx4A+Jy/K7RJ+5CGRdcSFZ7j+/5oj+LYnuP1mPSCTR9SRLPTqJjoos9egkOiqy1KOTaOesA76UO7RDwEBEPXoAOCx3pEelrUFYCzztavQtoOWovIUcyfOOyjJtmOwq64m02Ttf9OhhdxzJHsspa9RBOS1pQ17bTJu9M1qwO7uQ3QauAm8lxh2M3hVJzuQw4p3PCirksmcPODoXlEk28SmBBuCnAskOIXkq5KTDagvZs8AQeqlNG2x6wx1gFfpYZVl3NXuljeyv0ceZOkm2lf0L+rhfN8k2smcrfNde4DxwE3ghNyj/AIvy83P52zlgTwUxs3WUXCT7HXDAcvvtwITMdGfLDHP3eA3YZlnWQalb7SS/f5Ixx+SfpdccsNjGyLlXQW6vuAt8aCl7Vup6WulJuy+0gUvAUh8ld+JfYETDpVloNslgTeY4HgEbaSg7gN89SO7EG+ATGsZHwJ8eJXfClLmTBh0u5gJI7sTrJhxGhoCHASV34knsCZKXFEiOPkFym6NLuKqxZHmdXTvuKZDbHTNExnYFUvPC3H5vJSImFEjtFWbuMQpaFQeIfMW8zLLUnn0KZJbFbiLgvAKRZXGWCJhUILIsbviWsga4soxj6oJkEBXdZb1QILIsnnl28n8mUJWKmu16MadApM34hzcnJjnkr4pf+rYguWRRgciy+NunkyTan5PKu0nRRf+cgh4b4tBReCPUljXWebnIvS72RyM/GbYdOHHCLQUiy+I6EXBOgciy+IYI2KtAZFnsIpJBpQUFMotmx6MYVDKkYVKP01iZ0oH/6Kaz7ioQ2x3TRMhmyYXLlISpyxYiZUSB4E58S+QJNA8USH4cewINko71OqBkk1i5gYawM2CSo8libRQ7AqTtfkxD2ShJ4q4lP2jS4aLoBHnB0aWf+c7vYl5aMQicBH6Qm4Jhi222SC5c9yqpKvFOyjXX7mUMy2e/B05I3WsziDSTk7k5bLn9VpnVmK94HB5fxm31/pwM15k6LH8rWtA5vczvWi0ZRGcl7+KZTIstSszJE3Cuy2d2VRiFu92jrqrXGpYtUf4RffxUUF+Vsm0W3Z9CH1+V1FmVbNvHSAyij8G6PEaiNg8VqXMbVsoJTn1v6NNeOS1t9s7ngSSvIJzsIwTgimfJbQ8vUyiTbcr0znHPPfmip7WCRbJNm72zHniZcxxreXyZwitHZbVyzj8mte0DAmFkH5Nd+ojj58JlPcIVK6VNY9LGYJJ9k3kW3ViyJDqJjoos9egkOiqy1KOT6KjIUo/2w4LHlyk0mjFPL1NoPG0PL1NIeHiZQiKRwJb/AFk084MboAwLAAAAAElFTkSuQmCC"
                />
              </defs>
            </svg>
          </div>
          <div className="justify-center text-center font-medium text-sm -mt-1">
            Jutro
          </div>
          <div className="flex flex-row  px-1.5 pb-2">
            <div className="text-xl">17</div>
            <svg
              width="15"
              height="15"
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              transform="translate(0, 7)"
            >
              <path
                d="M0 2.1859C0 1.59829 0.189292 1.09295 0.557361 0.681624C0.935946 0.258547 1.37763 0.0587609 1.90344 0.0587609C2.41874 0.0587609 2.87094 0.270299 3.23901 0.681624C3.60707 1.1047 3.79637 1.59829 3.79637 2.1859C3.79637 2.7735 3.60707 3.27885 3.23901 3.69017C2.87094 4.11325 2.41874 4.31303 1.90344 4.31303C1.37763 4.31303 0.92543 4.1015 0.557361 3.69017C0.189292 3.27885 0 2.7735 0 2.1859ZM0.92543 2.1859C0.92543 2.49145 1.02008 2.75 1.20937 2.97329C1.40918 3.19658 1.64054 3.30235 1.91396 3.30235C2.18738 3.30235 2.41874 3.19658 2.61855 2.97329C2.81836 2.75 2.913 2.49145 2.913 2.1859C2.913 1.88034 2.81836 1.6218 2.61855 1.3985C2.41874 1.17521 2.18738 1.06944 1.91396 1.06944C1.64054 1.06944 1.40918 1.17521 1.20937 1.3985C1.02008 1.61004 0.92543 1.88034 0.92543 2.1859ZM5.01625 7.38034C5.01625 8.28526 5.23709 9.0844 5.68929 9.78953C5.92065 10.1538 6.24665 10.4477 6.6673 10.6709C7.07744 10.8825 7.55067 11 8.07648 11C9.61186 11 10.5794 10.3419 10.9685 9.03739C11.0105 8.87286 10.9895 8.70833 10.9054 8.55556C10.8212 8.40278 10.7055 8.32051 10.5583 8.28526C10.4111 8.23825 10.2639 8.26175 10.1377 8.36752C10.0115 8.46154 9.92734 8.59081 9.89579 8.76709C9.89579 8.77885 9.89579 8.7906 9.88528 8.82585L9.86424 8.90812C9.74857 9.13141 9.59082 9.30769 9.39101 9.43697C9.06501 9.66026 8.63384 9.76603 8.09752 9.76603C7.77151 9.76603 7.47706 9.70727 7.22467 9.57799C6.80402 9.37821 6.50956 9.02564 6.33078 8.53205C6.21511 8.21474 6.15201 7.82692 6.15201 7.39209V3.60791C6.15201 3.43162 6.16252 3.25534 6.18356 3.07906C6.22562 2.63248 6.38337 2.22115 6.65679 1.85684C6.96176 1.44551 7.44551 1.24573 8.10803 1.24573C8.65487 1.24573 9.08604 1.3515 9.40153 1.56303C9.61186 1.70406 9.7696 1.88034 9.87476 2.09188C9.88528 2.11538 9.88528 2.15064 9.89579 2.1859C9.90631 2.22115 9.90631 2.24466 9.90631 2.25641C9.94837 2.42094 10.0325 2.53846 10.1482 2.60897C10.2744 2.69124 10.4111 2.70299 10.5688 2.66774C10.7161 2.63248 10.8317 2.53846 10.9159 2.39744C11 2.25641 11.021 2.10363 10.979 1.92735V1.9156L10.8948 1.6453C10.8423 1.51603 10.7476 1.33974 10.6004 1.13996C10.4637 0.928419 10.2954 0.763889 10.1272 0.622863C9.90631 0.446581 9.62237 0.305556 9.26482 0.176283C8.90727 0.0587614 8.51817 0 8.09752 0C7.56119 0 7.09847 0.10577 6.67782 0.317308C6.26769 0.528847 5.94168 0.810897 5.72084 1.17521C5.26864 1.86859 5.03728 2.67949 5.03728 3.60791V7.38034H5.01625Z"
                fill="black"
              />
            </svg>
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              transform="translate(4, 5)"
            >
              <rect width="19" height="19" fill="url(#pattern0_25_52)" />
              <defs>
                <pattern
                  id="pattern0_25_52"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use xlinkHref="#image0_25_52" transform="scale(0.0111111)" />
                </pattern>
                <image
                  id="image0_25_52"
                  width="90"
                  height="90"
                  xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAADUklEQVR4nO2c64tNURiHHwZRcr8mRUr+Apfyxa2IXFJu5QPJTOLb8AcokhJTkuaDL/gXXHJrGsll3GmIIpIwIYbMGOfVmpbpdJpxzpk5e693r/M+9Xyd3vd39qy99lprbzAMwzAMwzAMwzAMwzAMwzAyzGRgDXAAuAQ8Bt4BP4FO4DPwArgINACbgSmhi84Ko4HtwDXgDyD98DawBxgfuhmNjAUOAu39DLc33d86CkwL3ZwGaoB64EsFA+4t8H3AUKqUGUBzggEXeh+YTZWxCviaYsj//Aaso0rY5GcNEsguoI7I2TGA2USl3UmkLAF+Kwg4/8peS4Q3vk8Kwi30OzCHSBjsHyJEqfdimfrVKQizmG4ur45hwCLgMHAdeOkfCpzPgSbgELAQmAS0KQiylCFkKkoY6X/592U00KkgxFI9ggJWAh8UhCEJ2h5yIarG/9I5BUFICu4OEfIg4JSC5iVFb4UI+piCxiVlc/4GnhpLq2i4kAI3phXyKOCtgoYlkG6zIBX2KmhWAnourVnGKwXNSkDdhm/iLFPQqATWPckmzn4FjUpgf6UR9GUFjUpgO5JcxlwBXKjiKZ3kmfNZLPcPbRVhPvBIQXOi1AfAvIEudTYo2r8TxXb5ubXLrCzG+CNXoRuQjHnVH1krCbcM+ERB0ZJRHwLjioXs9sWuKChWMm5TsWHkuIIiJRLd/a1X5tqNj0oG7SYRCwpDHuLHltBXgUTmXb821MN6BUVJpK7OD9oeq0ks6PP5R7HssZpEx+rpLuhtCv69JHK3UoW72BLARhd0i4JCJHLdAU7eKChEIvc1/uXH0IVI5P7A7xaELkSqYesrC0dmJeN+xL9bF7oQiVw34eCsgkIkck+7oHcpKEQit9YFPcsewUky5Jxf5ujmhoJfXSLVvcvewxYFBUmkbsgP2i1OP1NQlETm08KFf4cdXqTiQS/ua9+wUcFVIJF4gv8wArijoEjJuDeB4RRhoo3XDCTkVmBCsZDzw9b8ErwovpJddmXhhpGTCoqXDI3JRYeLYq+5tSpoRBRP4fqcXZRLjf8KovtSge2Y051Bs3/f0B3ST4SZfpHkjD+J0xb55kGH/zJOi++5Nn/twjAMwzAMwzAMwzAMwzAMw6AU/gJl/bwJdwVfTwAAAABJRU5ErkJggg=="
                />
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-row -mt-12 pl-2">
        <svg
          width="21"
          height="28"
          viewBox="0 0 15 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 7.5818C0 7.13882 0.229576 6.57658 0.671067 5.86099C1.11256 5.14541 1.55405 4.54908 1.96022 4.08906C2.06618 3.9698 2.20746 3.79942 2.36639 3.61201C2.52533 3.42459 2.63129 3.32236 2.64895 3.30533L3.30235 4.03795C3.79682 4.56612 4.23831 5.16244 4.64449 5.86099C5.05066 6.55954 5.26257 7.12179 5.26257 7.5818C5.26257 8.28035 5.01534 8.89371 4.50321 9.38781C4.00874 9.8819 3.39065 10.1375 2.64895 10.1375C1.9249 10.1375 1.28915 9.8819 0.777024 9.38781C0.264894 8.87668 0 8.28035 0 7.5818ZM5.50981 14.6525C5.50981 14.1584 5.65108 13.5961 5.93364 12.9317C6.21619 12.2842 6.56939 11.6709 6.99322 11.1257C7.80556 10.0864 8.56493 9.21743 9.30663 8.51888C9.37727 8.46777 9.53621 8.33147 9.76578 8.10998L10.2073 8.51888C10.896 9.14928 11.673 10.0182 12.5383 11.1086C12.9975 11.6879 13.3507 12.3013 13.6332 12.9487C13.9158 13.5961 14.0571 14.1584 14.0571 14.6525C14.0571 15.8281 13.6509 16.7992 12.8209 17.6C11.9909 18.4008 10.9666 18.7927 9.76578 18.7927C8.56493 18.7927 7.55833 18.3837 6.72832 17.583C5.89832 16.7822 5.50981 15.794 5.50981 14.6525ZM8.19407 2.89642C8.19407 2.1638 8.77684 1.19264 9.96004 0L10.4015 0.477058C10.7371 0.851889 11.0373 1.26079 11.3022 1.73785C11.5671 2.19787 11.7083 2.58974 11.7083 2.89642C11.7083 3.37348 11.5317 3.74831 11.1962 4.07203C10.8607 4.37871 10.4545 4.54908 9.96004 4.54908C9.44791 4.54908 9.02408 4.39574 8.68854 4.07203C8.37067 3.74831 8.19407 3.35644 8.19407 2.89642Z"
            fill="black"
          />
        </svg>
        <div className="pl-1 text-xl">21%</div>
      </div>
      <div className="flex flex-row mt-8 pl-4">
        <svg
          width="31"
          height="35"
          viewBox="0 0 20 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <rect width="20" height="24" fill="url(#pattern0_25_41)" />
          <defs>
            <pattern
              id="pattern0_25_41"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlinkHref="#image0_25_41"
                transform="matrix(0.0111111 0 0 0.00925926 0 0.0833333)"
              />
            </pattern>
            <image
              id="image0_25_41"
              width="90"
              height="90"
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAADiklEQVR4nO2cTYhNYRjHfz4vSposdJmFnXyUUMRGNiJK7FhYUKKYEblWFrKwQuNz7AhFKWVhRSiMKRrSUMqU0CWZwRhmfPTqrWdxkujec+Z9n3vO86unpuk285z/ee7zPuf/nl4wDMMwDMMwDMMoEOOAVqAT+AK4Bgmf632gBSihnGbgsQLRXMp4JNeitpLzILJLiK2yslsViOMyjh0opFOBMC7j6EAh/QqEcRmHvyZ1uJyGOmIL4kxoootlFU18Ia11oCPUEVsQZ0ITXSyraOILaa0DHaEOl9PYDOwHzgI3gSfAC+At0Av8AvqA48B4E5ogN6U9rdAjgSZgKrAAWA3sBk4Dt4B3CirPKYgB0aomJgAngI8KLsDlWeh2BYm7BotTtYrs78pXBYm7Bgm/KB6tZzEMLfQgUJE1YJSsB2VgHrAW2AtcAaoBc/ouW3MXgX3ARmA5MEf2E32Ok8iAkK2jUkNe04ENQJvsWg9l8P/9iPYMOCdbcotlDzQI/mtwTGZEX3HvZX58KPPkGbnT64GFKS+0nCLPkgizUxbva0A38Eq+0j8keuV33fKZk8AuYCkwkQYiltCFI1TrKDxZLYbGf8hqYfwp/fQ18DTRT30PXhJwkZoCLAO2AYeA8/IU7BfNl5Jjn+ScS69jSKaNNpk+/BSSlsnAClncr4phFMXrGJHwOvxsu0oqzD8J3ZDqcxGjKnO2n7fXAfMl1yaZy0fLz83i1fjP7AEuAT0Z5mFeB2FuuHkdhBHavA6GV2DzOqhfPPM6MK+j7uopp5iIzOsIJHThSNMPK7GTL4rQg+Z1hBHaJeID8Bx4AFwXM/4AsAmYK095ISi81zEA3AGOyKZDrrwO7e91VM3rKFYM2HsdBBHavA6GV2DzOqhfPPM6MK+j7uopp5iIzOsIJHThSNMPK7GTL4rQg+Z1hBHa/eW9jjfid1wGDgJrxH8Ihd89n41CXKDoAS7I2UeLgDEZ5O4thhninfiXZW4njsUorNDuj/gG3AUOA1vFHJoJTEu815F853oWsBLYIsaUF/XzP/6+OlxOQx2xBXEmNNHFsoomvpDWOtAR6ogtiDOhiS6WVTTxhbTWgY5QR2xBnAlNdLGsookvZMO1jjweAvsJhdixxoFoUVCBLuPYjkJKcly7y0l0AWNRSnNOxO6SjQPVlORs/I4GWyD7gXvSLtRWsmEYhmEYhmEYBlnzG/xx8QDWT1LlAAAAAElFTkSuQmCC"
            />
          </defs>
        </svg>
        <div className="flex flex-col">
          <div className="text-xs pl-1 pb-0">Jakość powietrza</div>
          <div className="text-xs pl-1 font-bold">Umiarkowana</div>
        </div>
      </div>
    </div>
  );
};
