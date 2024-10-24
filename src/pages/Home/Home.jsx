import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { getAllReviews } from "../../services/reviews";
import styled from "styled-components";
import RegisterCTA from "../../components/RegisterCTA";

const HomeWrapper = styled.div`
  padding: 50px 0;
  background-color: #fff;
`;

const HeaderContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
`;

const CarouselContainer = styled.div`
  max-width: 1200px;
  margin: 40px auto 0;
  padding: 30px;
  background: linear-gradient(270deg, #ffdb73, #fe824d, #ff6347, #ffa07a);
  border-radius: 15px;
  color: #fff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
`;

const CarouselContent = styled.div`
  color: #fff;
  text-align: center;
  padding: 30px 20px;
`;

const Title = styled.h1`
  font-family: 'Pacifico', sans-serif;
  color: #ff6347;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #333;
  padding: 0 40px;
`;

function Home() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await getAllReviews();
        setReviews(data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  return (
    <HomeWrapper>
      <HeaderContainer>
        <Title>Revixa</Title>
        <Description>
          Explore comprehensive reviews of the latest web development frameworks.
          Revixa provides in-depth insights, comparisons, and user-driven feedback
          on popular frameworks like React, Angular, Django, and more. Whether
          you're a seasoned developer or just starting out, find the tools and
          knowledge you need to choose the right technology for your next project.
          Sign in to engage with detailed posts or share your own experiences.
        </Description>
      </HeaderContainer>

      {loading ? (
        <p>Loading reviews...</p>
      ) : (
        <CarouselContainer>
          <Carousel fade>
            {reviews.slice(0, 3).map((review) => (
              <Carousel.Item key={review.id}>
                <CarouselContent>
                  <h3>{review.title}</h3>
                  <p>
                    <strong>Framework:</strong> {review.framework_name}
                  </p>
                  <p>
                    <strong>Version:</strong> {review.framework_version}
                  </p>
                </CarouselContent>
              </Carousel.Item>
            ))}
          </Carousel>
        </CarouselContainer>
      )}
    <RegisterCTA />
    </HomeWrapper>
  );
}

export default Home;
