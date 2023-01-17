import React, { useState, useEffect } from "react";
import { FiUser } from "react-icons/fi";
import { BsFilterRight } from "react-icons/bs";
import { MdTheaterComedy } from "react-icons/md";

function useScrollDirection() {
	const [scrollDirection, setScrollDirection] = useState(null);

	useEffect(() => {
		let lastScrollY = window.pageYOffset;

		const updateScrollDirection = () => {
			const scrollY = window.pageYOffset;
			const direction = scrollY > lastScrollY ? "down" : "up";
			if (
				direction !== scrollDirection &&
				(scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5)
			) {
				setScrollDirection(direction);
			}
			lastScrollY = scrollY > 0 ? scrollY : 0;
		};
		window.addEventListener("scroll", updateScrollDirection); // add event listener
		return () => {
			window.removeEventListener("scroll", updateScrollDirection); // clean up
		};
	}, [scrollDirection]);

	return scrollDirection;
}
const Header = () => {
	const scrollDirection = useScrollDirection();
	return (
		<>
			<div
				className={`fixed left-0 right-0 z-10 transition-all duration-500 ${
					scrollDirection === "down" ? "-top-24" : "top-0"
				}`}
			>
				<header className="mx-auto flex max-w-7xl flex-row items-center justify-between py-5 font-bold text-white">
					<MdTheaterComedy size={32} />
					<div className="flex flex-row items-center">
						<ul className="flex gap-4 font-sofia text-sm drop-shadow-2xl">
							<li>
								<a className="hover:text-gray-300" href="#">
									Movies
								</a>
							</li>
							<li>
								<a className="hover:text-gray-300" href="#">
									Cinema
								</a>
							</li>
							<li>
								<a className="hover:text-gray-300" href="#">
									Promotions
								</a>
							</li>
						</ul>
					</div>
					<div>
						<button>
							<FiUser fill="white" size={20} />
						</button>
					</div>
				</header>
			</div>
		</>
	);
};

export default Header;
