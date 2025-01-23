import {Card, Rate} from "antd";
import {useEffect, useState} from "react";
import Meta from "antd/es/card/Meta";
import {TrophyOutlined} from "@ant-design/icons";

interface CardRankingProps{
	img: string;
	name: string;
	episodes: number;
	score: number;
	rank: number | null;
	description: string | null;
}

export default function CardRanking({img, name, episodes, score, rank, description}: CardRankingProps) {

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if(img && name && description)
			setLoading(false);
	}, [img, name, description])

	return (
		<Card
			className={"w-full"}
			loading={loading}
			cover={
				<img
					alt={name}
					src={img}
					className={"h-auto w-auto"}
				/>
			}
		>
			<Meta title={<span className={"text-sm"}>
				{name.slice(0, 30)} <br/>
				<Rate allowHalf defaultValue={score/2} disabled  />{score}<br/>
				<TrophyOutlined /> {rank ? rank : "/"}
			</span>} description={<p className={"text-xs text-justify"}>
				{description ? description.split(' ').slice(0, 50).join(' ')+"..." : ""}
			</p>} />
		</Card>
	);
}
