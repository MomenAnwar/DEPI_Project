import { useState } from 'react';
import './Sidebar.css';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
import { FaSearch } from 'react-icons/fa';


const Sidebar = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(true);
  const [isSubCategoryOpen, setIsSubCategoryOpen] = useState({
    programming: true,
    design: false,
  });

  const [minPrice, setMinPrice] = useState(100); 
  const [maxPrice, setMaxPrice] = useState(800); 

  const [checkboxState, setCheckboxState] = useState({
    new: false,
    used: false,
  });

  const toggleCategory = () => {
    setIsCategoryOpen(!isCategoryOpen);
  };

  const toggleSubCategory = (category) => {
    setIsSubCategoryOpen((prevState) => ({
      ...prevState,
      [category]: !prevState[category],
    }));
  };

  const handleCheckboxChange = (type) => {
    setCheckboxState((prevState) => ({
      ...prevState,
      [type]: !prevState[type],
    }));
  };

  const formatValue = (value) => {
    return Math.round(value); 
  };

  return (
    <div className="sidebar-container">
      <h2>البحث</h2>
      <div className="search-box">
        <input type="text" placeholder="ابحث هنا" />
        <FaSearch className="search-icon" />
      </div>

      <div className="filter-section">
        <h4 onClick={toggleCategory}>الاشغال والمجلات</h4>
        {isCategoryOpen && (
          <div className="category-list">
            <div className="checkbox-label" onClick={() => toggleSubCategory('programming')}>
              <input type="checkbox" />
              <h6>برمجة</h6>
              <span>{isSubCategoryOpen.programming ? <AiFillCaretUp /> : <AiFillCaretDown />}</span>
            </div>
            {isSubCategoryOpen.programming && (
              <div className="sub-category">
                <p>ويب</p>
                <p>تصميم مواقع</p>
                <p>تطبيقات جوال</p>
              </div>
            )}
            <div className="checkbox-label" onClick={() => toggleSubCategory('graphic_photography')}>
              <input type="checkbox" />
              <h6>تصوير جرافيك</h6>
              <span>{isSubCategoryOpen.graphic_photography ? <AiFillCaretUp /> : <AiFillCaretDown />}</span>
            </div>
            {isSubCategoryOpen.graphic_photography && (
              <div className="sub-category">
                <p>تصوير جرافيك</p>
                <p>تصوير فيديو</p>
              </div>
            )}
            <div className="checkbox-label" onClick={() => toggleSubCategory('design')}>
              <input type="checkbox" />
              <h6>تصميم</h6>
              <span>{isSubCategoryOpen.design ? <AiFillCaretUp /> : <AiFillCaretDown />}</span>
            </div>
            {/* {isSubCategoryOpen.design && (
              <div className="sub-category">
                <p>تصوير جرافيك</p>
                <p>تصوير فيديو</p>
              </div>
            )} */}
            <div className="checkbox-label" onClick={() => toggleSubCategory('video_photography')}>
              <input type="checkbox" />
              <h6>تصوير فيديو </h6>
              <span>{isSubCategoryOpen.video_photography ? <AiFillCaretUp /> : <AiFillCaretDown />}</span>
            </div>
            {/* {isSubCategoryOpen.video_photography && (
              <div className="sub-category">
                <p>تصوير جرافيك</p>
                <p>تصوير فيديو</p>
              </div>
            )} */}
            <div className="checkbox-label" onClick={() => toggleSubCategory('voices')}>
              <input type="checkbox" />
              <h6> صوتيات </h6>
              <span>{isSubCategoryOpen.voices ? <AiFillCaretUp /> : <AiFillCaretDown />}</span>
            </div>
            {/* {isSubCategoryOpen.voices && (
              <div className="sub-category">
                <p>تصوير جرافيك</p>
                <p>تصوير فيديو</p>
              </div>
            )} */}
            <div className="checkbox-label" onClick={() => toggleSubCategory('translate')}>
              <input type="checkbox" />
              <h6> ترجمة </h6>
            </div>
            <div className="checkbox-label" onClick={() => toggleSubCategory('marketing')}>
              <input type="checkbox" />
              <h6> تسويق </h6>
            </div>
            <div className="checkbox-label" onClick={() => toggleSubCategory('social_media')}>
              <input type="checkbox" />
              <h6> حسابات التواصل الاجتماعي </h6>
            </div>
            <div className="checkbox-label" onClick={() => toggleSubCategory('microsoft')}>
              <input type="checkbox" />
              <h6>برامج مايكروسوفت </h6>
            </div>
            <div className="checkbox-label" onClick={() => toggleSubCategory('presentation')}>
              <input type="checkbox" />
              <h6> عروض بريزنتيشن </h6>
            </div>
          </div>
        )}
      </div>

      <hr />

      <div className="filter-section">
        <h4>تحديد السعر</h4>
        <div className="range-slider">
          <input
            type="range"
            min={5}
            max={1000}
            value={minPrice}
            onChange={(e) => {
              const value = Math.min(Number(e.target.value), maxPrice);
              setMinPrice(value);
            }}
            className="range-input min-range"
          />
          <input
            type="range"
            min={5}
            max={1000}
            value={maxPrice}
            onChange={(e) => {
              const value = Math.max(Number(e.target.value), minPrice);
              setMaxPrice(value);
            }}
            className="range-input max-range"
          />
        </div>
        <p>
          من {formatValue(minPrice)} إلى {formatValue(maxPrice)} ريال
        </p>
      </div>

       <hr />

      <div className="filter-section">
        <h4>الأكثر استخدام</h4>
        <label className="checkbox">
          <input 
            type="checkbox" 
            checked={checkboxState.individuals} 
            onChange={() => handleCheckboxChange('individuals')} 
          />
          <span>الافراد</span>
        </label>
        <label className="checkbox">
          <input 
            type="checkbox" 
            checked={checkboxState.companies} 
            onChange={() => handleCheckboxChange('companies')} 
          />
          <span>الشركات</span>
         </label>
         <label className="checkbox">
          <input 
            type="checkbox" 
            checked={checkboxState.near_me} 
            onChange={() => handleCheckboxChange('near_me')} 
          />
          <span>بالقرب مني</span>
         </label>
         <label className="checkbox">
          <input 
            type="checkbox" 
            checked={checkboxState.verified} 
            onChange={() => handleCheckboxChange('verified')} 
          />
          <span>حسابات موثقة</span>
         </label>
         <label className="checkbox">
          <input 
            type="checkbox" 
            checked={checkboxState.reply} 
            onChange={() => handleCheckboxChange('replyers')} 
          />
          <span> الأكثر رد علي الطلبات</span>
         </label>
      </div>
    </div>
  );
};

export default Sidebar;
