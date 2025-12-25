import Container from "@/components/Container";
import HomeBanner from "@/components/Section/HomeBanner";
import ProductGrid from "@/components/Section/ProductGrid";

const Home = () => {
  return (
    <Container className="">
      <HomeBanner />
      <div className="py-16">
        <ProductGrid />
      </div>
    </Container>
  );
};

export default Home;
