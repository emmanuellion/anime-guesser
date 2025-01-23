"use client";

import {useEffect, useState} from "react";
import {get} from "@/utils/request";
import {Input} from "antd";
import {LoadingOutlined} from "@ant-design/icons";
import Gallery from "@/components/Gallery/Gallery";

export default function Page(){
	const [text, setText] = useState("");
	const [data, setData] = useState<null | any>(null);
	const [bounce, setBounce] = useState<any>(null);
	const [loading, setLoading] = useState<boolean>(false);

	function search(){
		get(`https://api.jikan.moe/v4/characters?q=${text}`, setData);
		setLoading(false);
	}

	useEffect(() => {
		if(text.trim().length > 0){
			clearTimeout(bounce);
			setLoading(true);
			setBounce(setTimeout(() => {search()}, 500));
		} else {
			setData(null);
		}
	}, [text]);
	console.log(data);

	return (
		<div className={"w-full h-full flex flex-col items-center justify-center"}>
			<Input
				placeholder="Search anime character ..."
				allowClear
				onChange={(e) => {setText(e.target.value)}}
				style={{
					width: "33%",
					marginBottom: 100,
					padding: "10px 20px"
				}}/>
			{loading && <LoadingOutlined />}
			<div className={"w-[66%] h-full grid grid-cols-4 gap-4"}>
				{data && data.data.map((character: any, index: number) => {
					return <div className={"flex flex-col items-center justify-center"}><img key={index} src={character.images.jpg.image_url} alt={character.name}  className={"rounded-xl w-full h-auto"} />{character.name} <a href={character.url}>Link to anime</a></div>;
				})}
			</div>
		</div>
	);
}
