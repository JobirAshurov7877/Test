import React, { useState } from "react";
import styled from "styled-components";
import { MyButton } from "@/ui";
import { FaArrowRightLong } from "react-icons/fa6";
import { proportions } from "@/styles/proportions";
import { imagesAPI } from "../../../env";
import Image from "next/image";
import { useTranslations } from "next-intl";

const SubServices: React.FC = () => {
  const t = useTranslations();
  const [category] = useState<any[]>([]);
  return (
    <Container>
      <Box>
        <Services>
          <div>
            <ServiceImage>
              {/* <Image src={imagesAPI + category?.image} alt={category?.title} /> */}
              <div className="overlay"></div>
            </ServiceImage>
            <h4>{category?.title}</h4>
            <p>
              {category.description === "."
                ? t(
                    "We are currently working on providing detailed information about this service. Please contact us for more information or if you have any questions."
                  )
                : category?.description}
            </p>
            <MyButton>
              <span>{t("Explore")}</span>
              <FaArrowRightLong />
            </MyButton>
          </div>
        </Services>
        <SubServicesContainer>
          {category?.subServices &&
            category.subServices.map((subService) => (
              <Subservices
                key={subService.id}
                id={`subservice-${subService.id}`}
              >
                <Imagew>
                  {subService.image && (
                    <Image
                      src={`${imagesAPI + subService?.image}`}
                      alt={subService.title}
                    />
                  )}
                  <div className="overlay"></div>
                </Imagew>
                <p>{subService.title}</p>
              </Subservices>
            ))}
        </SubServicesContainer>
      </Box>
    </Container>
  );
};

export default SubServices;

const Container = styled.div`
  width: 65%;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const Services = styled.div`
  width: 100%;

  div {
    width: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  p {
    margin: 0 0 20px 0;
    color: #656565;
  }

  h4 {
    margin: 20px 0 10px 0;
    cursor: pointer;
    display: inline-block;
  }

  button {
    display: flex;
    align-items: center;
    float: right;
    margin-bottom: 20px;
    svg {
      font-size: 18px;
      margin-left: 10px;
    }
  }
`;

const ServiceImage = styled.div`
  height: 300px;
  position: relative;
  cursor: pointer;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.15);
    transition: background-color 0.3s ease;

    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  &:hover .overlay {
    background-color: transparent;
  }
`;

const SubServicesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 30px;

  @media screen and (max-width: 1024px) {
    justify-content: space-between;
  }
`;

const Subservices = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 10px 10px 0 0;
  box-shadow: 0 0 5px #e2dfdf;
  width: calc(50% - 16.5px);
  overflow: hidden;
  cursor: pointer;

  &:hover .overlay {
    background-color: transparent;
  }

  p {
    margin: 20px 10px;
    font-weight: 500;
  }

  @media screen and (max-width: 1024px) {
    width: calc(50% - 16.5px);
    gap: ${proportions.textMargin.mobile};
  }

  @media screen and (max-width: 481px) {
    width: calc(50% - 15px);
    min-height: 150px;
    p {
      margin: 5px;
    }
  }
`;

const Imagew = styled.div`
  display: flex;
  width: 100%;
  height: 250px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 250px;
    background-color: rgba(0, 0, 0, 0.15);
    transition: background-color 0.3s ease;

    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  @media screen and (max-width: 768px) {
    height: 170px;
  }

  @media screen and (max-width: 481px) {
    height: 120px;
  }
`;
