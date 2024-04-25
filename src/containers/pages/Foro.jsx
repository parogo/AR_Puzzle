import Layout from "hocs/layouts/Layout";
import Navbar from "components/navigation/Navbar";
import Footer from "components/navigation/Footer";

function Foro() {
  return (
    <Layout>
      <Navbar />
      <div className="py-28">Foro</div>
      <Footer />
    </Layout>
  );
}

export default Foro;
