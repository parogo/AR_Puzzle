import Layout from "hocs/layouts/Layout";
import Navbar from "components/navigation/Navbar";
import Footer from "components/navigation/Footer";

function Contacto() {
  return (
    <Layout>
      <Navbar />
      <div className="py-28">Contacto</div>
      <Footer />
    </Layout>
  );
}

export default Contacto;
