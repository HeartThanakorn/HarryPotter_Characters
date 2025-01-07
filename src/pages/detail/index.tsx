import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { harrypotterDetailServices } from "../../services";
import HarrypotterCardDetail from "../../components/HarrypotterCardDetail";
import { IHarrypotterDetailResponse } from "../../interface/harrypotterDetail";

const DetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [characterData, setCharacterData] = useState<IHarrypotterDetailResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCharacterData = async () => {
      try {
        if (slug) {
          const response = await harrypotterDetailServices.getHarrypotterDetail(slug);
          setCharacterData(response.data.data);
        }
      } catch (err) {
        setError("Failed to fetch character details.");
      } finally {
        setLoading(false);
      }
    };

    fetchCharacterData();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar showSearch={false} />
      <div className="flex-grow w-[90%] mx-auto max-w-[1100px] mt-[40px]">
        <div>
          {loading && <p>Loading...</p>}
          {error && <p className="text-red-500">{error}</p>}
        </div>
        <div className="flex justify-center mb-[40px]">
          {characterData && <HarrypotterCardDetail data={characterData} />}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DetailPage;