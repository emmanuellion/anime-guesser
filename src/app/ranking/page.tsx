"use client";

import {useEffect, useState} from "react";
import Gallery from "@/components/Gallery/Gallery";
import {get} from "@/utils/request";

export default function Page() {

	const [data, setData] = useState<null | any>(null);

	useEffect(() => {
		if(!data)
			get("https://api.jikan.moe/v4/top/anime", setData);
	}, []);

	return (
		<div className={"w-full h-full flex justify-center"}>
			<Gallery data={data} />
		</div>
	);
}
