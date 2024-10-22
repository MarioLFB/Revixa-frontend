import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { getAllReviews } from "../../services/reviews";

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
    <div className="container mt-4">
      <h1>Revixa</h1>
      <p>
        Explore comprehensive reviews of the latest web development frameworks.
        Revixa provides in-depth insights, comparisons, and user-driven feedback
        on popular frameworks like React, Angular, Django, and more. Whether
        you're a seasoned developer or just starting out, find the tools and
        knowledge you need to choose the right technology for your next project.
        Sign in to explore detailed posts or contribute com your own experiences.
      </p>

      {loading ? (
        <p>Loading reviews...</p>
      ) : (
        <Carousel fade>
          {reviews.slice(0, 3).map((review) => (
            <Carousel.Item key={review.id}>
              <div className="carousel-content">
                <h3>{review.title}</h3>
                <p>{review.content}</p>
                <p>
                  <strong>Framework:</strong> {review.framework_name}
                </p>
                <p>
                  <strong>Version:</strong> {review.framework_version}
                </p>
              </div>
              <Carousel.Caption>
                <h3>{review.title}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      )}
    </div>
  );
}

export default Home;
