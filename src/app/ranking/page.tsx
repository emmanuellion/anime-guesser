"use client";

import {useEffect, useState} from "react";
import CardRanking from "@/components/CardRanking/CardRanking";
import Gallery from "@/components/Gallery/Gallery";

export default function Page() {

	const [data, setData] = useState<null | any>(null);

	useEffect(() => {
		if(!data){
			fetch("https://api.jikan.moe/v4/top/anime")
				.then(res => res.json())
				.then(data => setData(data));
		}
	}, []);

	return (
		<div className={"w-full h-full flex justify-center"}>
			<Gallery data={data} />
		</div>
	);
}
