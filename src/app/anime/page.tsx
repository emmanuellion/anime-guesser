"use client";

import {Input} from "antd";
import {useEffect, useState} from "react";
import Gallery from "@/components/Gallery/Gallery";
import {LoadingOutlined} from "@ant-design/icons";

export default function Page(){

	const [text, setText] = useState("");
	const [data, setData] = useState<null | any>(null);
	const [bounce, setBounce] = useState<any>(null);
	const [loading, setLoading] = useState<boolean>(false);

	function search(){
		fetch(`https://api.jikan.moe/v4/anime?q=${text}`)
			.then(res => res.json())
			.then(data => {
				setData(data);
				setLoading(false);
			});
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
				placeholder="Search anime name ..."
				allowClear
				onChange={(e) => {setText(e.target.value)}}
				style={{
					width: "33%",
					marginBottom: 100
				}}/>
			{loading && <LoadingOutlined />}
			<Gallery data={data} />
		</div>
	);
}
