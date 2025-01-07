import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import { useState, useEffect } from "react"
import PaginationControls from "../../components/PaginationControls"
import HarrypotterCard from "../../components/HarrypotterCard"
import { IHarrypotterListItem } from "../../interface/harrypotterList"

const FavoritePage = () => {
    const [favorites, setFavorites] = useState<IHarrypotterListItem[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12; // Adjust as needed

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem("favorites") || "[]");
        setFavorites(storedFavorites);
    }, []);

    // Pagination logic
    const totalPages = Math.ceil(favorites.length / itemsPerPage);
    const currentFavorites = favorites.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const handlePrevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar showSearch={false} />
            <div className="flex-grow w-[90%] mx-auto max-w-[1100px]">
                {currentFavorites.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px] mt-[40px]">
                        {currentFavorites.map((item) => (
                        <HarrypotterCard key={item.id} data={item} />
                        ))}
                    </div>
                ) : (
                    <p className="text-center mt-10">No favorites added yet.</p>
                )}

            {/* Pagination Controls */}
            <PaginationControls
            currentPage={currentPage}
            totalPages={totalPages}
            onNextPage={handleNextPage}
            onPrevPage={handlePrevPage}
            />
            </div>
            <Footer />
        </div>
    )
}

export default FavoritePage

