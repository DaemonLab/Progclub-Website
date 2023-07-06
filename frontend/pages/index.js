import { NextSeo } from "next-seo";
import React, { useRef, useEffect } from "react";

import HomePage3 from "@/components/HomePage3";

import BlogCard from "@/components/BlogCard";
import Link from "next/link";
import OurCommunity from "@/components/OurCommunity";

export default function Home() {
	return (
		<div>
			<NextSeo
				title="P;Club - IIT INDORE"
				description="Programing Club Of IIT INDORE(IITI)"
			/>
			<div className="border-2 border-black overflow-hidden">
				<HomePage3 />
			</div>
			<div id="content">
				<div className="mx-10 ">
					<h1 className="text-black lg:text-white font-bold text-3xl sm:text-5xl text-center md:text-start py-10  md:py-20">
						From The Blog
					</h1>
					<div className="grid lg:grid-cols-3 justify-center">
						<BlogCard
							title={"Backend Guide for Beginners"}
							image={
								"https://cdn-images-1.medium.com/v2/resize:fit:1024/0*hlazkASagjsky3or.jpg"
							}
							link={
								"https://medium.com/the-programming-club-iit-indore/backend-guide-for-beginners-189a2d972182"
							}
						/>
						<BlogCard
							title={"Networking and Web Basics for Cybersecurity"}
							image={
								"https://cdn-images-1.medium.com/v2/resize:fit:1024/0*hlazkASagjsky3or.jpg"
							}
							link={
								"https://medium.com/the-programming-club-iit-indore/networking-and-web-basics-for-cybersecurity-c499e69696ae"
							}
						/>
						<BlogCard
							title={"Merge Sort for Linked Lists and Arrays"}
							image={
								"https://cdn-images-1.medium.com/v2/resize:fit:1024/0*hlazkASagjsky3or.jpg"
							}
							link={
								"https://medium.com/the-programming-club-iit-indore/merge-sort-for-linked-lists-and-arrays-9d0641cfc541?source=rss----d6377ad9ffee---4"
							}
						/>
					</div>
					<div className="w-full flex justify-center">
						<div className="border-2 text-white p-4 rounded-md bg-indigo-600 hover:bg-indigo-700 ">
							<Link href="https://medium.com/the-programming-club-iit-indore">
								See More
							</Link>
						</div>
					</div>

				</div>
				<div>
					<OurCommunity />
				</div>

			</div>
			<style jsx>
				{`
					
					`}
			</style>
		</div>
	);
}
