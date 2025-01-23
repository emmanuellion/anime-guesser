"use client";

import {HomeOutlined} from "@ant-design/icons";
import {redirect} from "next/navigation";
import {FloatButton} from "antd";

export default function Home(){
	return <FloatButton icon={<HomeOutlined />} type="default" style={{ top: 30, left: 30 }} onClick={() => {redirect("/")}} />
}
