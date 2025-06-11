
import Button from '../Button/Button';
import {useState, useEffect } from 'react';
import './SearchAnime.scss';

const SearchAnime = ({ onSearch, searchQuery }) => {
    const [inputValue, setInputValue] = useState('');

    // Cập nhật input mỗi khi searchQuery từ cha đổi
    useEffect(() => {
        setInputValue(searchQuery || '');
    }, [searchQuery]);

    const handleSearch = () => {
        onSearch(inputValue.trim());
    };

    return (
        <div className="container">
            <div className="search-anime">
                <input
                    type="text"
                    placeholder="Tìm kiếm anime..."
                    className="search-anime__input"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') handleSearch();
                    }}
                />
                <Button className="search-anime__button" onClick={handleSearch}>
                    Search
                </Button>
            </div>
        </div>
    );
};


export default SearchAnime;
