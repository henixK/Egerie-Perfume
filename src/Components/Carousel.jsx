import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from 'uuid';
import { config } from "react-spring";
import Card from "./Cards";
const getTouches = (evt) => {
    return (
        evt.touches || evt.originalEvent.touches // browser API
    );
};

export default class Example extends Component {
    state = {
        goToSlide: 0,
        offsetRadius: 2,
        showNavigation: true,
        enableSwipe: true,
        config: config.gentle
    };

    data = [
        {
            id: 1,
            title: "Top Notes",
            description:
                "Égérie opens with a burst of refreshing notes that evoke the bubbling springs where Egeria was believed to have dwelled. Crisp green accords of fresh mint leaves and the sparkling essence of bergamot blend harmoniously, instantly captivating the senses and setting the stage for the enchanting journey ahead."
        },
        {
            id: 2,
            title: "Heart Notes",
            description: "As the fragrance unfolds, the heart notes come to life, exuding the essence of the forest where Egeria was often sought by the virtuous King Numa Pompilius for her wisdom and counsel. Lush and verdant, the heart is a rich tapestry of delicate white florals, where the gentle caress of blooming jasmine and the sweet allure of neroli intertwine with the subtle grace of lotus flower. This floral symphony reflects the nymph's purity and grace, drawing you deeper into her mystical realm."
        },
        {
            id: 3,
            title: "Base Notes",
            description:
                "In the dry-down, Égérie's base notes reveal a warm and captivating blend that embodies the lingering presence of the nymph amidst the ancient Roman woods. Sensual and earthy vetiver rises from the forest floor, entwining with the woody notes of cedarwood, reminiscent of the trees where Egeria would seek solace and wisdom. As the fragrance settles, a velvety veil of smooth vanilla and a hint of musk adds a touch of intrigue, leaving an unforgettable and sensual trail in her wake."
        },
    ];

    // Map your data to create slide elements with the Card component and images
    slides = [
        ...this.data.map((dataItem) => ({
            key: uuidv4(),
            content: (
                <Card key={dataItem.id} title={dataItem.title} description={dataItem.description} />
            )
        })),
    ];

    onChangeInput = (e) => {
        this.setState({
            [e.target.name]: parseInt(e.target.value, 10) || 0
        });
    };

    handleTouchStart = (evt) => {
        if (!this.state.enableSwipe) {
            return;
        }

        const firstTouch = getTouches(evt)[0];
        this.setState({
            ...this.state,
            xDown: firstTouch.clientX,
            yDown: firstTouch.clientY
        });
    };

    handleTouchMove = (evt) => {
        if (!this.state.enableSwipe || (!this.state.xDown && !this.state.yDown)) {
            return;
        }

        let xUp = evt.touches[0].clientX;
        let yUp = evt.touches[0].clientY;

        let xDiff = this.state.xDown - xUp;
        let yDiff = this.state.yDown - yUp;
        if (Math.abs(xDiff) > Math.abs(yDiff)) {
            if (xDiff > 0) {
                /* left swipe */
                this.setState({
                    goToSlide: this.state.goToSlide + 1,
                    xDown: null,
                    yDown: null
                });
            } else {
                /* right swipe */
                this.setState({
                    goToSlide: this.state.goToSlide - 1,
                    xDown: null,
                    yDown: null
                });
            }
        }
    };

    render() {
        return (
            <div
                onTouchStart={this.handleTouchStart}
                onTouchMove={this.handleTouchMove}
                className="h-[400px] "
            >
                <Carousel
                    slides={this.slides}
                    goToSlide={this.state.goToSlide}
                    offsetRadius={this.state.offsetRadius}
                />
            </div>
        );
    }
}
