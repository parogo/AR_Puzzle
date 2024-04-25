import Layout from "hocs/layouts/Layout";
import Navbar from "components/navigation/Navbar";
import Footer from "components/navigation/Footer";

function Comunidad() {
  return (
    <Layout>
      <Navbar />
      <div className="py-28">Comunidad</div>
      <Footer />
    </Layout>
  );
}

export default Comunidad;
