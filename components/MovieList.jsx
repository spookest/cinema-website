import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
// import temp from "../public/image/lol.jpg";
import temp2 from "../public/image/nier3.jpg";
// import temp3 from "../public/image/boch.jpg";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { TbTags } from "react-icons/tb";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const MovieList = () => {
	return (
		<>
			<div className="mx-auto max-w-7xl py-4">
				<ul className="mb-2 flex flex-row justify-start space-x-5 border-b-2 py-2 font-sofia text-2xl font-bold text-white">
					<li className="">
						<Link href={"/"}>In Theaters</Link>
					</li>
					<li className="">
						<Link href={"/"}>Coming Soon</Link>
					</li>
				</ul>
			</div>
			<div className="p-5">
				<Swiper
					modules={[Navigation, Pagination, Scrollbar, A11y]}
					spaceBetween={100}
					slidesPerView={4}
					navigation
				>
					<SwiperSlide className="">
						<div className="relative h-96 rounded">
							<Image className="absolute h-full rounded" src={temp2} alt="" />
							<div className="absolute top-1/4 flex w-full flex-col items-center justify-center opacity-0 hover:opacity-100">
								<h3 className="font-sofia text-2xl font-bold">
									Nier : Books of War
								</h3>
								<div className="mt-2 flex flex-row items-center gap-2 text-sm">
									<TbTags className="mr-1 text-black" size={20} />
									<p>Action</p>
									<p>Thriller</p>
									<p>Mystery</p>
								</div>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</>
	);
};

export default MovieList;
