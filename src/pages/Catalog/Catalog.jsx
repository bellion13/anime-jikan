import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PageHeader from '../../components/PageHeader/PageHeader';
import ItemAnime from '../../components/ItemAnime/ItemAnime';
import { getAnimeByCategory,getSearchAnime } from '../../configApi/jikanApi';
import SearchAnime from '../../components/SearchAnime/SearchAnime';

import './Catalog.scss';
const Catalog = () => {

const { category } = useParams(); // lấy giá trị category từ URL
const [animeList, setAnimeList] = useState([]); // danh sách anime
const [searchQuery, setSearchQuery] = useState(''); // từ khóa tìm kiếm
const [page, setPage] = useState(1); // trang hiện tại
const [totalPages, setTotalPages] = useState(1); // tổng số trang



    // Reset page về 1 mỗi khi đổi category
   useEffect(() => {
    setPage(1); // quay về trang đầu
    setSearchQuery(''); // xoá từ khóa tìm kiếm
}, [category]);
    // Fetch dữ liệu anime theo category và page

    useEffect(() => {
    const fetchData = async () => {
        try {
            const type = category === 'anime' ? 'tv' : 'movie';

            const json = searchQuery
                ? await getSearchAnime(searchQuery, type, page, 21)
                : await getAnimeByCategory(category, page, 21);

            setAnimeList(json.data || []);
            setTotalPages(json.pagination?.last_visible_page || 1);
        } catch (err) {
            console.error('Lỗi khi fetch dữ liệu:', err);
            setAnimeList([]);
        }
    };

    fetchData();
}, [category, page, searchQuery]);

    return (
        <>
            <PageHeader>
                {category === 'anime' ? 'Anime Series' : 'Anime Movies'}
            </PageHeader>
            <SearchAnime
                onSearch={(value) => {
                    setSearchQuery(value);
                    setPage(1);
                }}
                searchQuery={searchQuery}
            />
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
            <div className="pagination" >
                {/* Nút << về đầu */}
                <button onClick={() => setPage(1)} disabled={page === 1}>{'<<'}</button>
                {/* Nút < về trang trước */}
                <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}>{'<'}</button>
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
                <button onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages}>{'>'}</button>{/* Nút > sang trang */}
                <button onClick={() => setPage(totalPages)} disabled={page === totalPages}>{'>>'}</button>{/* Nút >> sang trang cuối */}
            </div>
        </>
    );
}

export default Catalog;
