import PageHeaderContent from '../../pageHeader/index';
import { BsInfoCircleFill } from "react-icons/bs";
import ImageOne from '../../images/coffe.jpg'; // Corrected image imports
import ImageTwo from '../../images/organic.jpg';
import ImageThree from '../../images/social.png';
import "./style.scss"; // Ensure this path is correct
import { useState } from "react";

const portfolioData = [
  {
    id: 3,
    name: "Coffe",
    image: ImageOne,
    link: "https://github.com/gk0908/Impact_training/tree/main/Coffee",
  },
  {
    id: 3,
    name: "Organic",
    link: "https://github.com/gk0908/Impact_training/tree/main/Organic",
    image: ImageTwo,
  },
  {
    id: 2,
    name: "Social-Media Site",
    image: ImageThree,
    link: "https://github.com/gk0908/TASK-Project/tree/main/Project",
  },
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Developement",
  },
  {
    filterId: 3,
    label: "Design",
  },
];

const Portfolio = () => {
  const [filteredvalue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }

  const filteredItems =
    filteredvalue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredvalue);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredvalue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a>
                  <img alt="dummy data" src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    <button>Visit</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;