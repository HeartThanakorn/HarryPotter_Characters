import { IHarrypotterDetailResponse } from '../../interface/harrypotterDetail'
import { useState, useEffect } from 'react';

interface HarrypotterCardDetailProps {
    data:IHarrypotterDetailResponse | undefined;
}

const HarrypotterCardDetail = ({ data }: HarrypotterCardDetailProps) => {
  const defaultImage = '/images/harry1.avif';

  const [isFavorite, setIsFavorite] = useState(false);

  // ตรวจสอบสถานะ favorite เมื่อ component โหลด
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    const isAlreadyFavorite = favorites.some(
      (item: IHarrypotterDetailResponse) => data && item.id === data.id
    );
    setIsFavorite(isAlreadyFavorite);
  }, [data]);

  const handleFavoriteToggle = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    if (!isFavorite) {
      // Add to favorites
      localStorage.setItem("favorites", JSON.stringify([...favorites, data]));
    } else {
      // Remove from favorites
      const updatedFavorites = favorites.filter(
        (item: IHarrypotterDetailResponse) => data && item.id !== data.id
      );
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="grid lg:grid-cols-2 md:w-2/3 mt-5 p-5 border-2 rounded-lg bg-gray-800">
      {/* ส่วนแสดงภาพ */}
      <div className="p-3 flex flex-col items-center justify-center">
        <img
          className="w-85 h-72 flex justify-center"
          src={data?.attributes?.image || defaultImage}
          alt={data?.attributes?.name || 'Missing Character'}
        />
        <div>
          <h1 className='text-2xl font-bold text-center mt-4 mb-4 text-white'>{data?.attributes.name}</h1>
        </div>
        <div className="flex gap-4 mt-4">
          <a
            href={data?.attributes.wiki || undefined}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Wiki
          </a>
        </div>
      </div>
  
      {/* ส่วนข้อมูลตัวละคร */}
      <div className="py-2 text-white">
        <table className="table-auto">
          <tbody className='text-white text-left'>
            {data?.attributes?.name && (
              <tr>
                <th className="font-bold px-4 py-2 align-top">Name:</th>
                <td className='px-4 py-2 align-top'>{data.attributes.name}</td>
              </tr>
            )}
            {data?.attributes?.born && (
              <tr>
                <th className="font-bold px-4 py-2 align-top">Born:</th>
                <td className='px-4 py-2 align-top'>{data.attributes.born}</td>
              </tr>
            )}
            {data?.attributes?.gender && (
              <tr>
                <th className="font-bold px-4 py-2 align-top">Gender:</th> 
                <td className='px-4 py-2 align-top'>{data.attributes.gender}</td>
              </tr>
            )}
            {data?.attributes?.species && (
              <tr>
                <th className="font-bold px-4 py-2 align-top">Species:</th>
                <td className='px-4 py-2 align-top'>{data.attributes.species}</td>
              </tr>
            )}
            {data?.attributes?.nationality && (
              <tr>
                <th className="font-bold px-4 py-2 align-top">Nationality:</th>
                <td className='px-4 py-2 align-top'>{data.attributes.nationality}</td>
              </tr>
            )}
            {data?.attributes?.marital_status && (
              <tr>
                <th className="font-bold px-4 py-2 align-top">Marital Status:</th>
                <td className='px-4 py-2 align-top'>{data.attributes.marital_status}</td>
              </tr>
            )}
            {data?.attributes?.house && (
              <tr>
                <th className="font-bold px-4 py-2 align-top">House:</th>
                <td className='px-4 py-2 align-top'>{data.attributes.house}</td>
              </tr>
            )}
            {data?.attributes?.eye_color && (
              <tr>
                <th className="font-bold px-4 py-2 align-top">Eye Color:</th>
                <td className='px-4 py-2 align-top'>{data.attributes.eye_color}</td>
              </tr>
            )}
            {data?.attributes?.hair_color && (
              <tr>
                <th className="font-bold px-4 py-2 align-top">Hair Color:</th>
                <td className='px-4 py-2 align-top'>{data.attributes.hair_color}</td>
              </tr>
            )}
            {data?.attributes?.height && (
              <tr>
                <th className="font-bold px-4 py-2 align-top">Height:</th>
                <td className='px-4 py-2 align-top'>{data.attributes.height}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {/* Add/Remove Favorite Button */}
      <button
        onClick={handleFavoriteToggle}
        className={`mt-4 px-4 py-2 text-white rounded ${
          isFavorite ? "bg-red-500" : "bg-green-500"
        }`}
      >
        {isFavorite ? "Remove Favorite" : "Add Favorite"}
      </button>
    </div>
  );
};

export default HarrypotterCardDetail