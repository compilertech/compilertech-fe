import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import CrossIconWhite from "../../assets/common/CrossIcon_White.svg";
import { MOBILE_BREAKPOINT } from "../../styles/GlobalStyle";

const posterSlides = [
  {
    title:
      "LeuroSecure: AI-Augmented Secure Code Generation Framework for Autonomous IoT Devices",
    subtitle: "Shivansh Chaurasiya and Vinay Kumar",
  },
  {
    title: "ByLFCPA: Liveness-based Points-to Analysis with Bypassing",
    subtitle: "Aditi Raste, Swati Jaiswal and Uday Khedker",
  },
  {
    title:
      "Practical Challenges in Upstream Open-Source Compiler Qualification",
    subtitle: "Wendi Urribarri",
  },
  {
    title:
      "An Assessment and History of Static, Whole-Program Analysis on the Linux Kernel",
    subtitle: "Anamitra Ghorui",
  },
  {
    title: "AutoFDO vs. PGO: Feedback Directed Optimizations",
    subtitle: "Dhruv Chawla",
  },
  {
    title: "Incremental Analysis for Identifying Relevant Warnings",
    subtitle: "Anushri Jana and Uday Khedker",
  },
  {
    title:
      "Adaptive Resource Allocation for Multi-Tenant Compiler Auto-Tuning: A Multi-Objective Optimization Approach",
    subtitle: "Ashwini Mahendiran",
  },
  {
    title:
      "Leveraging JITServer for Productizing Hybrid Static-Dynamic Optimizations in Managed Runtimes",
    subtitle: "Preet Soni and Manas Thakur",
  },
  {
    title: "TableGen Across the Stack: Impact in Clang, MLIR, and Backends",
    subtitle: "Prerona Chaudhuri and Pradeep Kumar",
  },
  {
    title: "Advancing LLVM towards Embedded Systems Development",
    subtitle: "Garvit Gupta",
  },
];

const SLIDE_INTERVAL = 4000;

interface PostersModalProps {
  open: boolean;
  onClose: () => void;
}

const PostersModal: React.FC<PostersModalProps> = ({ open, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === posterSlides.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  useEffect(() => {
    if (!open) return;
    const interval = setInterval(nextSlide, SLIDE_INTERVAL);
    return () => clearInterval(interval);
  }, [nextSlide, open]);

  if (!open) return null;

  return (
    <Backdrop onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <CloseModalButton onClick={onClose}>
          <img src={CrossIconWhite} />
        </CloseModalButton>
        <ModalTitle></ModalTitle>
        <ModalScrollableContent>
          <SlideWrapper>
            <PosterSlide>
              <PosterTitle>{posterSlides[currentIndex].title}</PosterTitle>
              <PosterSubtitle>
                {posterSlides[currentIndex].subtitle}
              </PosterSubtitle>
            </PosterSlide>
            <DotsContainer>
              {posterSlides.map((_, idx) => (
                <Dot
                  key={idx}
                  active={idx === currentIndex}
                  onClick={() => goToSlide(idx)}
                />
              ))}
            </DotsContainer>
          </SlideWrapper>
        </ModalScrollableContent>
      </ModalContainer>
    </Backdrop>
  );
};

export default PostersModal;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1001;
`;

const ModalContainer = styled.div`
  background: #fff;
  border-radius: 20px;
  width: 900px;
  max-width: 85vw;
  padding: 36px 40px 32px 40px;
  box-shadow: 0 2px 24px rgba(0, 0, 0, 0.12);
  position: relative;
  max-height: 90vh;
  height: auto;
  overflow: hidden;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 98vw;
    padding: 18px 4vw 40px 4vw;
  }
`;

const CloseModalButton = styled.button`
  position: absolute;
  top: 22px;
  right: 22px;
  background: linear-gradient(90deg, #367aff 0%, #ff4dd8 100%);
  border: none;
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
  padding: 0;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: box-shadow 0.2s;
  &:hover {
    box-shadow: 0 0 0 4px #f3e6ff;
  }
`;

const ModalTitle = styled.h2`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 28px;
  color: #09100f;
  font-family: Satoshi, sans-serif;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    margin-top: 7px;
    font-size: 18px;
  }
`;

const SlideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 220px;
  max-width: 90%;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    min-height: 200px;
  }
`;

const PosterSlide = styled.div`
  margin-bottom: 32px;
  padding: 24px 20px;
  border-radius: 14px;
  min-width: 320px;
  max-width: 600px;
  transition: box-shadow 0.2s;
  text-align: center;
  min-height: 180px;
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    margin-bottom: 12px;
    min-width: 180px;
  }
`;

const PosterTitle = styled.p`
  font-weight: 600;
  font-style: SemiBold;
  font-size: 24px;
  line-height: 125%;
  background: linear-gradient(90deg, #367aff 0%, #ff4dd8 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 8px;
  cursor: pointer;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 18px;
    margin-bottom: 6px;
  }
`;

const PosterSubtitle = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 100%;
  color: #787878;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 15px;
  }
`;

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: auto;
  width: 100%;
`;

interface DotProps {
  active: boolean;
}

const Dot = styled.div<DotProps>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
  background: ${(props) =>
    props.active ? "#a93d9d" : "rgba(169, 61, 157, 0.3)"};
  transition: background 0.3s ease;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 8px;
    height: 8px;
    margin: 0 4px;
  }
`;

const ModalScrollableContent = styled.div`
  overflow-y: auto;
  max-height: calc(90vh - 100px);
  display: flex;
  justify-content: center;
  align-items: center;
}
`;
