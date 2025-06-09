import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PageHeader from '../../components/PageHeader/PageHeader';
import ItemAnime from '../../components/ItemAnime/ItemAnime';
import { getAnimeByCategory } from '../../configApi/jikanApi';
import './Catalog.scss';
const Catalog = () => {

    const { category } = useParams();
    const [animeList, setAnimeList] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    // Reset page về 1 mỗi khi đổi category
    useEffect(() => {
        setPage(1);
    }, [category]);
    // Fetch dữ liệu anime theo category và page

    useEffect(() => {
        const fetchAllAnime = async () => {
            try {
                const res = await getAnimeByCategory(category, page); // Truyền page
                const data = res.data;
                const pagination = res.pagination; // Nếu API trả về tổng số trang

                if (Array.isArray(data)) {
                    setAnimeList(data);
                    if (pagination?.last_visible_page) {
                        setTotalPages(pagination.last_visible_page);
                    }
                } else {
                    setAnimeList([]);
                    console.error('API trả về không phải mảng:', res);
                }
            } catch (err) {
                setAnimeList([]);
                console.error('Lỗi khi fetch chi tiết anime:', err);
            }
        };
        fetchAllAnime();

    }, [category, page]);

    return (
        <>
            <PageHeader>
                {category === 'anime' ? 'Animes' : 'Movies'}
            </PageHeader>
            <div className='catalog container'>
                <div className="catalog__list" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
                    {animeList && animeList.length > 0 ? (
                        animeList.map(anime => (
                            <ItemAnime key={anime.mal_id} item={anime} />
                        ))
                    ) : (
                        <p>Không có dữ liệu hoặc API bị giới hạn. Vui lòng thử lại sau.</p>
                    )}
                </div>
            </div>
            <div className="pagination" style={{ textAlign: 'center', margin: '20px 0' }}>
                {/* Nút << về đầu */}
                <button onClick={() => setPage(1)} disabled={page === 1}>
                    {'<<'}
                </button>

                {/* Nút < về trang trước */}
                <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}>
                    {'<'}
                </button>

                {/* Hiện số trang gần currentPage */}
                {Array.from({ length: totalPages }, (_, i) => i + 1)
                    .filter(p => Math.abs(p - page) <= 2 || p === 1 || p === totalPages) // chỉ hiển thị trang gần trang hiện tại
                    .map((p, idx, arr) => (
                        <React.Fragment key={p}>
                            {/* Hiện dấu "..." nếu có khoảng cách giữa các số */}
                            {idx > 0 && p - arr[idx - 1] > 1 && <span style={{ margin: '0 5px' }}>...</span>}
                            <button
                                className={`pagination-button ${p === page ? 'active' : ''}`}
                                onClick={() => setPage(p)}
                            >
                                {p}
                            </button>
                        </React.Fragment>
                    ))}

                {/* Nút > sang trang sau */}
                <button onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages}>
                    {'>'}
                </button>

                {/* Nút >> sang trang cuối */}
                <button onClick={() => setPage(totalPages)} disabled={page === totalPages}>
                    {'>>'}
                </button>

            </div>

        </>
    );
}

export default Catalog;
