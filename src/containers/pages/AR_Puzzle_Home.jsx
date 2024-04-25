import Layout from "hocs/layouts/Layout";
import Navbar from "components/navigation/Navbar";
import Footer from "components/navigation/Footer";

function AR_Puzzle_Home() {
  return (
    <Layout>
      <Navbar />
      <div className="py-28">AR Puzzle</div>
      <Footer />
    </Layout>
  );
}

export default AR_Puzzle_Home;
