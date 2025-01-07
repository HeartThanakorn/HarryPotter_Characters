import { IHarrypotterDetailResponse } from '../../interface/harrypotterDetail'
import { Link } from 'react-router-dom'

interface HarrypotterCardProps {
    data:IHarrypotterDetailResponse
}

const HarrypotterCard = ({ data }: HarrypotterCardProps) => {
  const defaultImage = '/images/harry1.avif';

  return (
    <div className="flex flex-col max-w-sm rounded-[20px] overflow-hidden shadow dark:bg-gray-800">
      {/* ส่วนแสดงภาพ */}
      <div className="flex items-center justify-center mb-2 aspect-square bg-gray-900">
        <img
          className="w-85 h-72 flex justify-center"
          src={data.attributes.image || defaultImage}
          alt={data.attributes.name || 'Missing Character'}
        />
      </div>
  
      {/* ส่วนข้อมูลตัวละคร */}
      <div className="flex flex-col justify-between flex-grow p-4">
        <div>
          <h5 className="mb-2 text-xl font-bold tracking-tight text-white text-center">
            {data.attributes.name}
          </h5>
          <p className="text-m tracking-tight text-white text-center">
            {data.attributes.species}
          </p>
          <p className="text-m tracking-tight text-white text-center">
            {data.attributes.gender}
          </p>
        </div>
  
        {/* ปุ่ม View Character */}
        <div className="mt-4 flex justify-center">
          <Link to={`/detail/${data.attributes.slug}`}>
            <span className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#C823C9] rounded-lg hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">
              View Character
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HarrypotterCard