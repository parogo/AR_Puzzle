import Layout from "hocs/layouts/Layout";
import Navbar from "components/navigation/Navbar";
import Footer from "components/navigation/Footer";

function RoadMap() {
  return (
    <Layout>
      <Navbar />
      <div className="py-28">Desarrollo Futuro</div>
      <Footer />
    </Layout>
  );
}

export default RoadMap;
