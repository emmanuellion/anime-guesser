import CardRanking from "@/components/CardRanking/CardRanking";

export default function Gallery({data}: {data: any}) {
	return (
		<div className={"w-[66%] h-auto grid grid-cols-4 gap-4"}>
			{
				data && (
					data.data.map((anime: any, index: number) => {
						return <CardRanking
							img={anime.images.jpg.image_url}
							name={anime.title}
							episodes={anime.episodes}
							score={anime.score}
							rank={anime.rank}
							description={anime.synopsis}
							key={index}/>
					})
				)
			}
		</div>
	);
}
