import React from "react";
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsPlayFill } from "react-icons/bs";
import Image from "next/image";
import Cover2 from "../public/image/nier2.jpg";
import Cover1 from "../public/image/nier.png";
import "../node_modules/react-modal-video/scss/modal-video.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const MovieFeatured = () => {
	return (
		<>
			<Swiper
				modules={[Navigation, Pagination, EffectFade, Autoplay]}
				autoplay={{
					delay: 5000,
					disableOnInteraction: false,
				}}
				effect={"fade"}
				navigation
				spaceBetween={0}
				slidesPerView={1}
				pagination={{ type: "fraction" }}
			>
				<SwiperSlide>
					<Image
						className="relative h-screen brightness-50 filter"
						src={Cover2}
						alt=""
					/>
					<div className="absolute bottom-1/4 left-52 flex flex-col gap-3 rounded-sm p-5 text-white">
						<div className="flex flex-row items-center justify-between">
							<div>
								<button className="flex flex-row items-center gap-1 font-sofia">
									<p className="text-xs font-medium">Watch the Trailer</p>
									<BsPlayFill size={16} />
								</button>
							</div>
							<div className="flex flex-row items-center gap-3 font-sofia">
								<p className="text-xs font-medium">2 Hours</p>
								<p className="text-xs font-medium">English</p>
								<p className="text-xs font-medium">PG-13</p>
							</div>
						</div>
						<h3 className="font-bakbak text-4xl font-bold leading-none">
							Nier : Books of War
						</h3>
						<div className="flex flex-row items-center gap-2 font-semibold">
							<p className="rounded-full border bg-white/10 py-2 px-5 font-sofia text-xs leading-none text-white">
								Action
							</p>
							<p className="rounded-full border bg-white/10 py-2 px-5 font-sofia text-xs leading-none text-white">
								Thriller
							</p>
							<p className="rounded-full border bg-white/10 py-2 px-5 font-sofia text-xs leading-none text-white">
								Mystery
							</p>
						</div>
						<div className="mt-3yar flex flex-row items-center gap-2 font-bold">
							<button className="w-40 rounded-md bg-red-500 px-4 py-3 font-ubuntu text-sm font-bold leading-none text-white">
								Book Now
							</button>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<Image
						className="relative h-screen brightness-50 filter"
						src={Cover1}
						alt=""
					/>
					<div className="absolute bottom-1/4 left-52 flex flex-col gap-3 rounded-sm p-5 text-white">
						<div className="flex flex-row items-center justify-between">
							<div>
								<button className="flex flex-row items-center gap-1 font-sofia">
									<p className="text-xs font-medium">Watch the Trailer</p>
									<BsPlayFill size={16} />
								</button>
							</div>
							<div className="flex flex-row items-center gap-3 font-sofia">
								<p className="text-xs font-medium">2 Hours</p>
								<p className="text-xs font-medium">English</p>
								<p className="text-xs font-medium">PG-13</p>
							</div>
						</div>
						<h3 className="font-bakbak text-4xl font-bold leading-none">
							Nier : The Replicant
						</h3>
						<div className="flex flex-row items-center gap-2 font-semibold">
							<p className="rounded-full border bg-white/10 py-2 px-5 font-sofia text-xs leading-none text-white">
								Action
							</p>
							<p className="rounded-full border bg-white/10 py-2 px-5 font-sofia text-xs leading-none text-white">
								Thriller
							</p>
							<p className="rounded-full border bg-white/10 py-2 px-5 font-sofia text-xs leading-none text-white">
								Mystery
							</p>
						</div>
						<div className="mt-3yar flex flex-row items-center gap-2 font-bold">
							<button className="w-40 rounded-md bg-red-500 px-4 py-3 font-ubuntu text-sm font-bold leading-none text-white">
								Book Now
							</button>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</>
	);
};

export default MovieFeatured;
