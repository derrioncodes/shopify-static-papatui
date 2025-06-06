import Head from "next/head";
import ShowLayout from "@/components/layouts/ShowLayout";

import GridColumns from "@/components/GridColumns/GridColumns";
import ImageText__Columns from "@/components/ImageText__Columns/ImageText__Columns";
import MultiColumns from "@/components/MultiColumns/MultiColumns";
import Reviews from "@/components/Reviews/Reviews";



export default function AllMultiColumns() {
    return (
        <ShowLayout>
            <Head>
                <title>All Multi-Columns</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="component-title">Grid Columns</div>
            <GridColumns/>
            <div className="component-space"></div>
            <div className="component-title">Image-Text Columns</div>
            <ImageText__Columns/>
            <div className="component-space"></div>
            <div className="component-title">Flex Columns</div>
            <MultiColumns/>
            <div className="component-space"></div>
            <div className="component-title">Review Columns</div>
            <Reviews/>


        </ShowLayout>
    );
}
