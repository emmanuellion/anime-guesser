"use client";

import {Input} from "antd";
import {useEffect, useState} from "react";
import Gallery from "@/components/Gallery/Gallery";
import {LoadingOutlined} from "@ant-design/icons";
import {get} from "@/utils/request";

export default function Page(){

	const [text, setText] = useState("");
	const [data, setData] = useState<null | any>(null);
	const [bounce, setBounce] = useState<any>(null);
	const [loading, setLoading] = useState<boolean>(false);

	function search(){
		get(`https://api.jikan.moe/v4/anime?q=${text}`, setData);
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

	return (
		<div className={"w-full h-full flex flex-col items-center justify-center"}>
			<Input
				placeholder="Search anime name ..."
				allowClear
				onChange={(e) => {setText(e.target.value)}}
				style={{
					width: "33%",
					marginBottom: 100,
					padding: "10px 20px"
				}}/>
			{loading && <LoadingOutlined />}
			{data && <Gallery data={data} />}
		</div>
	);
}
