import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationBar.css';




const NavigationBar = () => {
    // 导航栏选项数据
    const options = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
        { name: 'More', path: '/contact' },
    ];

    // 当前选中的选项
    const [activeOption, setActiveOption] = useState('');

    // 移动端菜单是否打开
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    // 点击选项时的处理函数
    const handleOptionClick = (option) => {
        setActiveOption(option);
        if (isMobileMenuOpen) {
            setMobileMenuOpen(false);
        }
    };

    // 切换移动端菜单的处理函数
    const handleMobileMenuToggle = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className={`navigation-bar ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            <div className="logo">Logo</div>
            <div className="menu-icon" onClick={handleMobileMenuToggle}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
           
            <ul className={`options ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
                {/* 遍历选项数据生成选项 */}
                
                {options.map((option) => (
                    <li key={option.name} className={`option ${activeOption === option.name ? 'active' : ''}`}>
                        <NavLink exact to={option.path} onClick={() => handleOptionClick(option.name)} >
                            {option.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavigationBar;
