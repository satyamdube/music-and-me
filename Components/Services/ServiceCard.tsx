import Image from "next/image";
import Link from "next/link";

const ServiceCard = ({
  item: { link = "/", icon = "", title = "", sortDisc = "" },
  idx,
}: {
  item: {
    link: string;
    icon: any;
    title: string;
    sortDisc: string;
  };
  idx: number;
}) => {
  return (
    <li>
      <span className="srv-3">{idx + 1}</span>
      <div className="service-box service-box-dark anim-item">
        <div className="service-icon">
          <Image src={icon} alt={title} width={50} height={50} />
        </div>
        <div className="service-info">
          <h2>{title}</h2>
          <p>{sortDisc}</p>
          <Link
            className="common-btn style-three d-inline-block mt-3 link"
            href={link}
            rel='"nofollow"'
          >
            View Details
            <svg
              width="27"
              height="14"
              viewBox="0 0 27 14"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.217443 6.25H18.4827C18.6276 6.25 18.7001 6.30263 18.7001 6.40789V7.59211C18.7001 7.69737 18.6276 7.75 18.4827 7.75H0.217443C0.0724811 7.75 0 7.69737 0 7.59211V6.40789C0 6.30263 0.0724811 6.25 0.217443 6.25Z"
                fill="currentColor"
              ></path>
              <path
                d="M20.7002 12.2802L25.0469 7.93355C25.5602 7.42021 25.5602 6.58021 25.0469 6.06688L20.7002 1.72021"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </li>
  );
};

export default ServiceCard;
