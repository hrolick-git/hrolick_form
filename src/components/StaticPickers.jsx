import React, { useRef } from "react";
import {Button} from "@material-ui/core";
import { useStaticState, Calendar } from "@material-ui/pickers";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

import Slider from "react-slick";

const months = [
    {
        name: "January"
    },
    {
        name: "February"
    },
    {
        name: "March"
    },
    {
        name: "April"
    },
    {
        name: "May"
    },
    {
        name: "June"
    },
    {
        name: "July"
    },
    {
        name: "August"
    },
    {
        name: "September"
    },
    {
        name: "October"
    },
    {
        name: "November"
    },
    {
        name: "December"
    }
]

const range = (start, end, step) => {
    return Array.from(Array.from(Array(Math.ceil((end-start)/step)).keys()), x => start+ x*step);
}

function StaticPickers({ selectedDate, onChange, onChangeYear, year, month, onChangeMonth, toggleCalendar }) {
    const years = range(2000, 2030, 1);
    const yearSlider = useRef(null);
    const monthSlider = useRef(null);

    const { pickerProps } = useStaticState({
        value: selectedDate,
        onChange: onChange,
    });

    const _onChangeMonth = (index) => {
        onChangeMonth(index)
    }
    const _onChangeYear = (index) => {
        onChangeYear(years[index])
    }

    const settingsMonthSlider = {
        initialSlide: month - 1,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        afterChange: _onChangeMonth,
        centerMode: true,
        swipe: false
    };

    const settingsYearSlider = {
        initialSlide: years.indexOf(year),
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        afterChange: _onChangeYear,
        centerMode: true,
        swipe: false
    };

    return (
        <div className="form__picker">
            <div className="form__picker__inner-wrap">
                <span className="form__picker__arrow_left" onClick={() => yearSlider.current.slickPrev()}/>
                <div className="form__picker__inner-wrap__slider">
                    <Slider ref={yearSlider} className="form__picker__year" {...settingsYearSlider}>
                        {years.map((item, i) => (
                            <div className="form__picker__year__item" key={i}>{item}</div>
                        ))}
                    </Slider>
                </div>
                <span className="form__picker__arrow_right" onClick={() => yearSlider.current.slickNext()}/>
            </div>
            <div className="form__picker__inner-wrap">
                <span className="form__picker__arrow_left" onClick={()=>monthSlider.current.slickPrev()} />
                <div className="form__picker__inner-wrap__slider">
                    <Slider ref={monthSlider} className="form__picker__month" {...settingsMonthSlider}>
                        {months.map((item, i) => (
                            <div className="form__picker__month__item" key={i}>{item.name}</div>
                        ))}
                    </Slider>
                </div>
                <span className="form__picker__arrow_right" onClick={() => monthSlider.current.slickNext()}/>
            </div>
            <Calendar {...pickerProps} />
            <Button className="form__picker__btn_apply" onClick={() => toggleCalendar(false)}>
                Apply
            </Button>
        </div>
    );
}

export default StaticPickers;