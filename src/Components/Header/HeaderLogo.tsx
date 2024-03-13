import { AiFillInstagram } from "react-icons/ai";
interface HeaderLogo {
  mdScreen: boolean;
}
const HeaderLogo: React.FC<HeaderLogo> = ({ mdScreen }) => {
  return (
    <div className="flex items-center gap-2 tracking-wide">
      {/* <picture>
        <AiFillInstagram
          color={"black"}
          size={`${mdScreen ? "4rem" : "3rem"}`}
        />
      </picture> */}
      <svg
        id="Warstwa_1"
        data-name="Warstwa 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 595.28 841.89"
      >
        <path
          d="m480.92,303v.2c-1.95-.14-3.93-.2-5.92-.2h5.92Z"
          fill="#00aeef"
          stroke="#231f20"
          stroke-miterlimit="10"
          stroke-width="2"
        />
        <path
          d="m475,485c1.99,0,3.97-.06,5.92-.2v.2h-5.92Z"
          fill="#00aeef"
          stroke="#231f20"
          stroke-miterlimit="10"
          stroke-width="2"
        />
        <path
          d="m562,376.8c0,39.15-30.48,71.17-69,73.64-1.58.11-3.19.16-4.8.16H73.8c-40.76,0-73.8-33.04-73.8-73.8s33.04-73.8,73.8-73.8h414.4c1.61,0,3.22.05,4.8.16,38.52,2.47,69,34.49,69,73.64Z"
          fill="#1884ac"
          stroke-width="0"
        />
        <text
          transform="translate(46.76 411.38)"
          fill="#f1f2f2"
          font-family="FranklinGothic-DemiItalic, 'Franklin Gothic Demi'"
          font-size="140"
          font-style="italic"
          font-weight="300"
        >
          <tspan x="0" y="0" letter-spacing="-.01em">
            S
          </tspan>
          <tspan x="78.81" y="0" letter-spacing="0em">
            o
          </tspan>
          <tspan x="152.18" y="0" letter-spacing="0em">
            c
          </tspan>
          <tspan x="222.2" y="0" letter-spacing="0em">
            i
          </tspan>
          <tspan x="258.51" y="0" letter-spacing="-.01em">
            a
          </tspan>
          <tspan x="332.78" y="0" letter-spacing=".02em">
            f
          </tspan>
          <tspan x="380.73" y="0" letter-spacing="0em">
            y
          </tspan>
        </text>
      </svg>
      <h1
        className={`text-xl md:text-3xl
         text-black  font-logoFont`}
      >
        InstaClone
      </h1>
    </div>
  );
};
export default HeaderLogo;
