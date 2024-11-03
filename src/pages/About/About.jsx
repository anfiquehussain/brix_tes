import React from 'react'
import HeroBanner from '../../components/HeroBanner/HeroBanner'
import HorizontalCard from '../../components/HorizontalCard/HorizontalCard'
import TextCard from '../../components/TextCard/TextCard'
import ImageCard from '../../components/ImageCard/ImageCard'



function About() {
    return (
        <>
            <HeroBanner
                title="About Us"
                subtitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque at provident voluptates vitae, explicabo ipsum,"
            />

            <HorizontalCard
                image="\images\slideimages\slide3.png"
                head="About"
                title="Get to know about Bricksnmix"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
            />
            <br />
            <br />
            <div className="container mx-auto px-4 mb-10">
                <h1 className="text-3xl font-bold text-center md:text-start mb-3">Our Client Review</h1>
                <div className="flex flex-col gap-4 md:flex-row md:justify-start px-4 py-4">
                    <TextCard text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, in alias delectus quis error omnis velit itaque dicta provident eligendi necessitatibus eum animi totam ea quidem facere a commodi. Impedit." />
                    <TextCard text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, in alias delectus quis error omnis velit itaque dicta provident eligendi necessitatibus eum animi totam ea quidem facere a commodi. Impedit." />
                    <TextCard text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, in alias delectus quis error omnis velit itaque dicta provident eligendi necessitatibus eum animi totam ea quidem facere a commodi. Impedit." />
                </div>
                <br />
                <br />
                <h1 className="text-3xl font-bold text-center mb-6">Our Leadership</h1>
                <div className="flex flex-col gap-4 md:flex-row md:justify-center">
                    <ImageCard
                        image="\images\lead\lead1.png"
                        name="John Doe"
                        subtitle="Lead 1"
                    />
                    <ImageCard
                        image="\images\lead\lead2.png"
                        name="Jane Smith"
                        subtitle="Lead 1"
                    />
                    <ImageCard
                        image="\images\lead\lead1.png"
                        name="Alice Johnson"
                        subtitle="Lead 1"
                    />
                </div>
            </div>

        </>
    )
}

export default About